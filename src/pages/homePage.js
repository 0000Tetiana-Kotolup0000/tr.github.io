import Footer from "../components/Footer";
import Header from "../components/header";
import { Link } from "react-router-dom";


const HomePage = () => {

    const getStarted = () => {
        window.scrollTo({
            top: 700,
            behavior: 'smooth'
        });
    }

    return (
     <>
        <Header />
        <main class="main" id="main">
      <section class="section hero" style ={{backgroundImage: 'url(./media/6.jpg)'}}>
        <h1 class="hero__title">
          Explore the World <br />
          just one Click
        </h1>

        <button onClick= {getStarted} class = "button button-hero"> Get Started</button>
      </section>

      <section class="section tour container">
        <h3 class="section-title">Popular Tour</h3>

        <div class="tour__container">
          <div class="tour__card">
            <img src="./media/Las Vegas.jpg" alt="" class="tour__card-img" />
            <div class="tour__data">
              <h5 class="tour__data-title">Las Vegas</h5>
              <span class="tour__data-subtitle">USA</span>
            </div>
            <Link to="/tour-package/asd" class="tour__link"></Link>
          </div>
          <div class="tour__card">
            <img src="./media/india.jpg" alt="" class="tour__card-img" />
            <div class="tour__data">
              <h5 class="tour__data-title">INDIA</h5>
              <span class="tour__data-subtitle">Taj Mahal </span>
            </div>
            <Link to="/tour-package/asd" class="tour__link"></Link>
          </div>
          <div class="tour__card">
            <img src="./media/Apostles (Australia).jpg" alt="" class="tour__card-img" />
            <div class="tour__data">
              <h5 class="tour__data-title">AUSTRALIA</h5>
              <span class="tour__data-subtitle">Apostles</span>
            </div>
            <Link to="/tour-package/asd" class="tour__link"></Link>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
    );
};

export default HomePage;