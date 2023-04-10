import React from 'react';
import { ICard } from '../../types';
import './Popup.css';
import { convertYouTubeURLToEmbed, formatInstructions } from '../../utils/utils';

interface PopupProps {
  card: ICard;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ card, onClose }) => {
  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      <div className="popup" onClick={handleClickOutside}>
        <button className="popup__close-button" onClick={onClose}>
          &#10006;
        </button>
        <div className="popup__content">
          <div className="popup__youtube">
            <iframe
              width="560"
              height="315"
              src={convertYouTubeURLToEmbed(card.strYoutube)}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <h2 className="popup__title">{card.strMeal}</h2>
          <div className="popup__wrapper">
            <h3 className="popup__category">{card.strCategory}</h3>
            <h3 className="popup__country">Country: {card.strArea}</h3>
          </div>
          <div className="popup__instruction">{formatInstructions(card.strInstructions)}</div>
        </div>
      </div>
    </>
  );
};

export default Popup;
