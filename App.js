import{BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Blog from './Component/Blog';
import Contacus from './Component/Contacus';
import Header from './Component/Header';
import Home from './Component/Home';
import Page404 from './Component/Logis';
import Product from './Component/Product';
import Services from './Component/Services';
import Aboutus from './Component/Aboutus';
import Web from './Component/Web';
import Mobile from './Component/Mobile';
import Login from './Component/Login';
import Logis from './Component/Logis';
import Protect from './Component/Protect';
import Singleproduct from './Component/Singleproduct';
function App() {
  return (
    <>
 <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Protect Component={Home}/>} />
     <Route path="services" element={<Services/>}>
      <Route path="web" element={<Web/>}/>
      <Route path="mobile" element={<Mobile/>}/>
     </Route>
    
    <Route path="Singleproduct:/name" element={<Singleproduct/>}/>
    <Route path="Aboutus" element={<Aboutus/>}/>
        <Route path="Blog" element={<Blog/>}/>
    <Route path="Contactus" element={<Contacus/>}/>
    <Route path="Logis" element={<Logis/>}/>
    <Route path="Singleproduct" element={<Singleproduct/>}/>
    {/* <Route path="Login" element={<Login/>}/> */}
         </Routes>
 </BrowserRouter>
    
    </>
  );
}

export default App;
