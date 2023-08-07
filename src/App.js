// import logo from './logo.svg';
import './App.css';


const Array=[{
  fruit:"apple",id:1
},{
  vegetable:"brinjal",id:2
}]
const items=Array.map((p)=>{
  <li style={{color:p.fruit?"green":"pink"}}>
    {p.fruit}
  </li>
})
function App() {
  return (
    <div className="App">
      <h1>{items}</h1>
    </div>
  );
}

export default App;
