import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Protect from "./Protect";
import Products from './component/Products';
import DetailView from './component/DetailView';
import Login from './component/login/Login';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/product"
            element={<Protect Component={Products}/>}
          />
          <Route path='/' element={<Login/>}/>
          <Route path='/product/:id/:cid' element={<Protect Component={DetailView}/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
