import Header from './components/header/header.jsx';
import Footer from './components/footer/footer.jsx';
import './App.css'
import { BrowserRouter,Routes , Route } from 'react-router-dom';
import Home from './components/pages/Home/index.jsx';
import About from './components/pages/about/index.jsx'; 
import Shop from './components/pages/shop/index.jsx';
import Vendors from './components/pages/vendors/index.jsx';
import MegaMenu from './components/pages/mega-menu/index.jsx';
import Blogs from './components/pages/blogs/index.jsx';
import Pages from './components/pages/pages/index.jsx';
import Contact from './components/pages/contact/index.jsx';
import Listing from './components/pages/Listing/index.jsx';
import NotFound from "./components/404page/index.jsx"
import  Details  from "./components/pages/details/index.jsx"

function App() {
  return (
    <> 
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/listing" element={<Listing/>} />
        <Route path="/products/details" element={<Details/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/vendors" element={<Vendors/>} />
        <Route path="/mega-menu" element={<MegaMenu/>} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/pages" element={<Pages/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<NotFound/>} />
        
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
