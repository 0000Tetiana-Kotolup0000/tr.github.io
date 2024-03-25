import Header from "../components/header";
import Footer from "../components/Footer";


const About = () => {
    return <>
        <Header/>
        <main class="main" id="main">
      <section
        class="section about-hero"
        style={{ backgroundImage: 'url(./media/2222.jpg)'}}
        id="hero"
      >
        <h1 class="hero__title">About company</h1>
      </section>

      <section class="section about container">
        <div class="about__container">
          <img class="about__img" src="./media/9.jpg" alt="" />

          <div class="about__data">
            <h3 class="about__data-title">2024</h3>
            <p class="about__data-description">
              Consulting represents success at realizing the company is going in
              the wrong direction. The only time the company fails is when it is
              not possibleto do a turnaround anymore. We help companies pivot
              into more profitable directions where they can expand and grow. It
              is inevitable that companieswill end up making a few mistakes; we
              help them correct these mistakes.
            </p>

          </div>
        </div>
      </section>
    </main>
        <Footer/>
    </>
}

export default About;