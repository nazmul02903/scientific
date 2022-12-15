import BodyHead from "./components/BodyHead/BodyHead";
import Header from "./components/Header/Header";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import TopCarousel from "./components/CarouselArea/TopCarousel";
import SecondCarousel from "./components/CarouselArea/SecondCarousel";

function App() {
  return (
    <>
    <Header/>
    <div className="bg-[#E1DCC5]">
    <BodyHead/>
     <TopCarousel/>
     <SecondCarousel/>
    </div>
    </>
  );
}

export default App;
