import { ICard } from '../../types';
import image1 from '../image1.jpg';
import image2 from '../image2.jpg';
import image3 from '../image3.jpg';
import image4 from '../image4.jpg';
import image5 from '../image5.jpg';

const data: ICard[] = [
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
];

export default data;
