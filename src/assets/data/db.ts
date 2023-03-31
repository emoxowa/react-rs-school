import { ICard } from '../../types';
import image1 from '../image1.jpg';
import image2 from '../image2.jpg';
import image3 from '../image3.jpg';
import image4 from '../image4.jpg';
import image5 from '../image5.jpg';
import image6 from '../image6.jpg';
import image7 from '../image7.jpg';
import image8 from '../image8.jpg';
import image9 from '../image9.jpg';
import image10 from '../image10.jpg';
import image11 from '../image11.jpg';
import image12 from '../image12.jpg';

const cards: ICard[] = [
  {
    id: '1',
    image: image1,
    title: 'Chicken Alfredo Pasta',
    userName: 'Shane Lockman',
    description: 'Creamy pasta dish with tender chicken and savory Parmesan cheese',
    date: '2022-09-12',
    category: 'Pasta',
    checkbox: true,
    radio: 'Yes',
    rating: 5,
  },
  {
    image: image2,
    id: '2',
    title: 'Gluten-Free Chocolate Chip Cookies',
    description:
      'Soft and chewy cookies made with almond flour, coconut sugar, and dairy-free chocolate chips.',
    userName: 'June Wilkinson',
    date: '2023-03-27',
    category: 'Dessert',
    checkbox: true,
    radio: 'No',
    rating: 12,
  },
  {
    image: image3,
    id: '3',
    title: 'Quinoa Salad with Roasted Vegetables',
    description:
      'A hearty and colorful salad made with quinoa, roasted vegetables, and a tangy lemon vinaigrette.',
    userName: 'Anthony Fritsch',
    date: '2023-03-26',
    category: 'Salad',
    checkbox: true,
    radio: 'No',
    rating: 0,
  },
  {
    image: image4,
    id: '4',
    title: 'Gluten-Free Pizza',
    description:
      'Homemade pizza crust made with a blend of gluten-free flours and topped with tomato sauce, mozzarella cheese, and your favorite toppings.',
    userName: 'Jammie Carter',
    date: '2023-03-25',
    category: 'Pizza',
    checkbox: false,
    radio: 'No',
    rating: 20,
  },
  {
    image: image5,
    id: '5',
    title: 'Zucchini Noodles with Pesto',
    description:
      'A fresh and flavorful pasta alternative made with zucchini noodles and homemade basil pesto.',
    userName: 'Jany Kiehn',
    date: '2023-03-24',
    category: 'Pasta',
    checkbox: true,
    radio: 'No',
    rating: 1,
  },
  {
    image: image6,
    id: '6',
    title: 'Vegan Lentil Soup',
    description:
      'A hearty, delicious soup made with green lentils, vegetables, and a mix of aromatic spices.',
    userName: 'Harold Stroman',
    date: '2023-03-23',
    category: 'Soup',
    checkbox: false,
    radio: 'Yes',
    rating: 10,
  },
  {
    image: image7,
    id: '7',
    title: 'Avocado Toast with Poached Egg',
    description:
      'Simple and nutritious breakfast featuring creamy avocado, crunchy toast, and a perfectly poached egg.',
    userName: 'Marie Morris',
    date: '2023-03-22',
    category: 'Breakfast',
    checkbox: true,
    radio: 'Yes',
    rating: 8,
  },
  {
    image: image8,
    id: '8',
    title: 'Spicy Shrimp Tacos',
    description:
      'Flavorful shrimp tacos with a kick, topped with a tangy slaw and creamy avocado sauce.',
    userName: 'Cecilia Taylor',
    date: '2023-03-21',
    category: 'Tacos',
    checkbox: false,
    radio: 'Yes',
    rating: 15,
  },
  {
    image: image9,
    id: '9',
    title: 'Roasted Red Pepper Hummus',
    description:
      'A creamy and delicious hummus made with roasted red peppers and tahini, perfect for dipping.',
    userName: 'Leslie Graham',
    date: '2023-03-20',
    category: 'Appetizer',
    checkbox: true,
    radio: 'No',
    rating: 4,
  },
  {
    image: image10,
    id: '10',
    title: 'Blueberry Pancakes',
    description:
      'Fluffy and golden pancakes filled with fresh blueberries, served with maple syrup and butter.',
    userName: 'Geraldine Morgan',
    date: '2023-03-19',
    category: 'Breakfast',
    checkbox: true,
    radio: 'Yes',
    rating: 7,
  },
  {
    image: image11,
    id: '11',
    title: 'Thai Green Curry with Chicken',
    description:
      'A flavorful and spicy Thai curry with tender chicken, vegetables, and creamy coconut milk.',
    userName: 'Brent Wilson',
    date: '2023-03-18',
    category: 'Curry',
    checkbox: false,
    radio: 'No',
    rating: 6,
  },
  {
    image: image12,
    id: '12',
    title: 'Stuffed Bell Peppers',
    description:
      'Colorful bell peppers filled with seasoned ground beef, rice, and topped with melted cheese.',
    userName: 'Monica Reynolds',
    date: '2023-03-17',
    category: 'Main Course',
    checkbox: true,
    radio: 'No',
    rating: 3,
  },
];

export default cards;
