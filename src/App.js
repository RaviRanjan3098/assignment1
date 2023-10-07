import Home from "./cmd/index";
import './App.css';
import Next from "./cmd/Nextpage"

import {BrowserRouter,Routes,Route} from "react-router-dom";

const App =() =>{
   return (
      <>
      
      <BrowserRouter>
          <Routes>  
             <Route path="/" element={<Home />} />
             <Route path="/Nextpage" element={<Next />} />
          </Routes>
          </BrowserRouter>

          
     
      </>
   )
}
export default App;
