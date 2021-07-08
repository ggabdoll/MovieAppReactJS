import logo from './logo.svg';
import './App.css';
import { nativeTouchData } from 'react-dom/cjs/react-dom-test-utils.production.min';
import PropTypes from "prop-type";

function Food({name, picture, rating}) {
  return (
    <div>
      <h2> I like {name}</h2>
      <h4>{rating}/5</h4>
      <img src = {picture} alt = {name}/>
    </div>
  );
}

//각 props을 component의 argument로 넣어서 jsx를 불러 올 수 있다.  

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
    rating: 4.9
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
    rating: 4.9
    },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
    rating : 4.0  
    },
  {
    id: 4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
    rating : 5.0
    },
  {
    id: 5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
    rating : 3.1  
    }
];

function renderFood(dish) {
  return <Food name = {dish.name} picture = {dish.image} />
    

}

function App() {
  return (
  <div>
    {foodILike.map(dish => (
      <Food key = {dish.id} name = {dish.name} picture = {dish.image} rating ={dish.rating} />
    ))}
  </div>
  );
}

export default App;
