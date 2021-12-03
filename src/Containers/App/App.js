import React, {useRef} from 'react';
import { CssBaseline } from '@material-ui/core';
import Main from '../../Components/Main/Main';
import Works from '../../Components/Works/Works';
import Testimonials from '../../Components/Testimonials/Testimonials';
import Gallery from '../../Components/Gallery/Gallery';
import Footer from '../../Components/Footer/Footer';


const App = () => {



const el1 = useRef();
const el2 = useRef();


 
 
 const scroll = (ref) => {
     window.scrollTo(0, ref.current.offsetTop);
   }
 
  return (
    <>
      <CssBaseline />
      <Main el1 = {el1} click={() => scroll(el2)} />
      <Works el2 = {el2} />
      <Testimonials />
      <Gallery />
      <Footer />
    </>
  );

}

export default App;
