import './App.css';
import Productlist from './Productlist';
function App() {
  return (
    <div className="App" >
      <Productlist products={[{ no: "1", name: "Phone", price: "25000", img: "" }, { no: "2", name: "Car", price: "1500000", img: "Car.png" }]} />
    </div>
  );
}
export default App;
// import './App.css';
// import FetchNews from './Fetch';
// function App() {
//   return (
//     <div className="App" style={{ backgroundColor: "olive" }}>
//       <FetchNews />
//     </div>
//   );
// }

// export default App;