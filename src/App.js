import logo from './logo.svg';
import './App.css';
import Chocolate from './Chocolate';
import Examples from './Examples';


function App() {
  const chocolate = [
    {
      imgSrc:'lindt.jpg',
      id :0,
      brand :'Lindt',
      price :'30dt'
    },
    {
      imgSrc:'ferrero.jpg',
      id :1,
      brand :'Ferrero',
      price :'40dt'
    },
    {
      imgSrc:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Milka_Alpine_Milk_Chocolate_chunks_and_wrapper.jpg/1200px-Milka_Alpine_Milk_Chocolate_chunks_and_wrapper.jpg',
      id :2,
      brand :'Milka',
      price :'20dt'
    },
  ];

  const handLePrice = (name,price) => alert (`${name} costs ${price}`);

  return (
    <div className="App">
    {/* <img src={lndt} alt="" /> */}
      <Chocolate chocolat={chocolate}  price={handLePrice} />
      {/* <Examples /> */}
    </div>
  );
}

export default App;
