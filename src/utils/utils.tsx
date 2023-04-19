import { IApiResponse, ICard } from '../types';

export function filterCards(cards: ICard[], query: string): ICard[] {
  return cards.filter((card) => card.strMeal.toLowerCase().trim().includes(query) !== false);
}

export const startsWithUppercase = (value: string): boolean => /^[A-ZAА-Я]/.test(value);

export const checkResponse = async (res: Response): Promise<IApiResponse> => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

export const formatInstructions = (instructions: string): JSX.Element[] => {
  return instructions.split('\r\n\r\n').map((paragraph, index) => <p key={index}> {paragraph} </p>);
};

export const convertYouTubeURLToEmbed = (url: string): string => {
  const videoId = url.split('watch?v=')[1];
  return `https://www.youtube.com/embed/${videoId}`;
};
