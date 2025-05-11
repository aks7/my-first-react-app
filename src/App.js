import logo from './logo.svg';
import './App.css';

import ProductList from './ProductList';
import ProductList1 from './ProductList1';
import AjaxCallTest from './AjaxCallTest';


function App() {
  return (
    <div className="App">
     <ProductList1/>
     <AjaxCallTest/>
    </div>
  );
}

export default App;


// what are states in js
// what is mounting and unmounting
// what is useEffect
// what is virtual dom

//SEO (Search Engine Optimization)

// react is not se optimized, becasue html is created dynamically by the js and croller reads html,
// so google croller does not read it 
//and put it on pending list

//nextJs is used for making react se optimized
