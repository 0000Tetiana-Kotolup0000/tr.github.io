import Footer from "../components/Footer";
import Header  from "../components/header";
import { Link } from "react-router-dom"
 
const TourPackage = () => {
 return <>
     <Header />
        <main class="main" id="main">
      <section
        class="section about-hero"
        style={{backgroundImage: 'url(./media/8.jpg)'}}
        id="hero"
      >
        <h1 class="hero__title">Tour Package</h1>
      </section>

      <section class="section tour container">
        <div class="tour__container">
          <div class="tour__card">
            <img src="./media/Capri Island.jpg" alt="" class="tour__card-img" />
            <div class="tour__data">
              <h5 class="tour__data-title">Capri Island </h5>
              <span class="tour__data-subtitle">500$</span>
            </div>
            <Link to="/tour-package/asd" class="tour__link"></Link>
          </div>
          <div class="tour__card">
            <img src="./media/Corcovado Mountain.jpg" alt="" class="tour__card-img" />
            <div class="tour__data">
              <h5 class="tour__data-title">Corcovado Mountain</h5>
              <span class="tour__data-subtitle">550$</span>
            </div>
            <Link to="/tour-package/asd" class="tour__link"></Link>
          </div>
          <div class="tour__card">
            <img src="./media/island 1.jpg" alt="" class="tour__card-img" />
            <div class="tour__data">
              <h5 class="tour__data-title">Island</h5>
              <span class="tour__data-subtitle">505$</span>
            </div>
            <Link to="/tour-package/asd" class="tour__link"></Link>
          </div>
          <div class="tour__card">
            <img src="./media/Maui (Hawaii).jpg" alt="" class="tour__card-img" />
            <div class="tour__data">
              <h5 class="tour__data-title">Maui (Hawaii)</h5>
              <span class="tour__data-subtitle">555$</span>
            </div>
            <Link to="/tour-package/asd" class="tour__link"></Link>
          </div>
          <div class="tour__card">
            <img src="./media/india.jpg" alt="" class="tour__card-img" />
            <div class="tour__data">
              <h5 class="tour__data-title">India</h5>
              <span class="tour__data-subtitle">500$</span>
            </div>
            <Link to="/tour-package/asd" class="tour__link"></Link>
          </div>
          <div class="tour__card">
            <img src="./media/Las Vegas.jpg" alt="" class="tour__card-img" />
            <div class="tour__data">
              <h5 class="tour__data-title">Las Vegas</h5>
              <span class="tour__data-subtitle">505$</span>
            </div>
            <Link to="/tour-package/asd" class="tour__link"></Link>
          </div>
        </div>
      </section>
    </main>
   <Footer/>
</>


}

export default TourPackage; 