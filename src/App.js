import logo from './logo.svg';
import './App.css';


function Food({fav}) {
  return <h1> I like {fav}</h1>;
}

//각 props을 component의 argument로 넣어서 jsx를 불러 올 수 있다.  

function App() {
  return (
    <div className="App">
      
     <h1>hello!!!</h1> 
     <Food fav = "kimchi" 
           fav = "hamberger"
           fav = "떡볶이"
           fav = "pizza"
           fav = "you"
           />
    </div>
  );
}

export default App;
