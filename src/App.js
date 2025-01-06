import './App.css';
import me from './assets/me.jpg';
import LOLStatTrackerPic from './assets/LOLStatTrackerPic.PNG';
import NBALineupsPic from './assets/NBALineupsPic.png';
import Contact from './components/Contact'
import $ from 'jquery';
import Project from './components/Project';
function App() {

  //Dynamic Fixed Navigation Bar
  document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', function () {
      if (window.scrollY > window.innerHeight) {
        document.getElementById('navbar_top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        var navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar_top').classList.remove('fixed-top');
        // remove padding top from body
        document.body.style.paddingTop = '0';
      }
    });
  });

 
  $( document ).ready(function() {
     //dynamic active navitem
  $(".nav-item").on("click", function(e){
    // Remove class active form all li.nav-tiem
    $("li.nav-item").removeClass("active");
    // Add Class to current Element. 
    $(this).addClass("active");
  });

    //cancel auto caroussel
    $('.carousel').carousel({
    interval: false
  }) });
  
  return (
    <div >
      {/* <!-- Home --> */}
      <div id="home" className="gradient">
        <div className="container d-flex flex-column justify-content-center w-100 h-100">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="row mt-4" data-aos="fade-up" data-aos-duration="3000">
              <div className="d-sm-flex col">
              <h1 className="fw-bold text-white m-0 pr-3 text-center">Hello, I'm</h1>
                <h1 className=" fw-bold m-0 text-warning text-center">Leiss Amini.</h1>
              </div>
            </div>
            <div className="row">
            <h1 className="fw-bold text-white m-0 text-center" data-aos="fade-up" data-aos-duration="3000">I'm a Software Engineer.</h1>
            </div>
            <div className="row">
            <a href="#about">
              <div class="button mt-4" data-aos="fade-up" data-aos-duration="3000" data-aos-delay="2000">View my work <i class="ml-2 fas fa-arrow-right"></i></div>
            </a>
            </div>
          </div>
        </div>
      </div>

      <header>
        <nav id="navbar_top" className="gradientColor navbar navbar-expand-sm navbar-dark">
          <h1 className="navbar-brand"></h1>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse nav-links" id="navbarNav">
            <ul className="navbar-nav nav">
              <li className="nav-item">
                <a className="nav-link" href="#home">HOME  </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">ABOUT</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">PROJECTS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">CONTACT</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#links">LINKS</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>



      {/* <!-- About --> */}
      <div id="about" className="container contentSpacing">
        <div className="row flex-column justify-content-center align-items-center " >
          <h1 className="font-weight-bold" data-aos="fade-left" data-aos-duration="500" >ABOUT</h1>
          <div className="header-bar" data-aos="fade-left" data-aos-duration="3000" data-aos-delay="500"></div>
        </div>
        <div>
          <div className="row" data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="1500">
            <div className="col-xl p-5 m-2 bd-highlight d-flex flex-column justify-content-center align-items-center">
              <img src={me} width="300px" className="rounded" alt="A picture of me"></img>
              <h2 className="font-weight-bold text-center pt-3">Who's Leiss?</h2>
              <p className="text-center description">I was born and raised in Germany until I moved to California, Orange County in July of 2014. Fighting adversity and beating the odds, my family and I are still pursuing the American Dream. I am currently a Junior at the California State University Fullerton as a Computer Science Major. </p>
            </div>
            <div className="col-xl d-flex flex-column bd-highlight justify-content-center w-100 deviceAdjustment" >
              
              <div className="progress progressHeight" >
                <div className="progress-bar bg-info font-weight-bold w-15" role="progressbar" aria-valuenow="25"
                  aria-valuemin="0" aria-valuemax="100">C++</div>
                <div className="progress-bar font-weight-bold text-right pr-5 w-75 progressFont" role="progressbar"
                  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="500">90%</div>
              </div>
              <div className="progress mt-4 progressHeight" >
                <div className="progress-bar bg-info font-weight-bold w-15" role="progressbar" aria-valuenow="25"
                  aria-valuemin="0" aria-valuemax="100">Swift</div>
                <div className="progress-bar font-weight-bold text-right pr-5 w-65 progressFont" role="progressbar"
                  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="600">80%</div>
              </div>
              <div className="progress mt-4 progressHeight" >
                <div className="progress-bar bg-info font-weight-bold w-15" role="progressbar" aria-valuenow="25"
                  aria-valuemin="0" aria-valuemax="100">HTML</div>
                <div className="progress-bar font-weight-bold text-right pr-5 w-65 progressFont" role="progressbar"
                  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" data-aos="zoom-in" data-aos-duration="1400" data-aos-delay="700">80%</div>
              </div>
              <div className="progress mt-4 progressHeight" >
                <div className="progress-bar bg-info font-weight-bold w-15" role="progressbar" aria-valuenow="25"
                  aria-valuemin="0" aria-valuemax="100">CSS</div>
                <div className="progress-bar font-weight-bold text-right pr-5 w-65 progressFont" role="progressbar"
                  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" data-aos="zoom-in" data-aos-duration="1800" data-aos-delay="800">80%</div>
              </div>
              <div className="progress mt-4 progressHeight" >
                <div className="progress-bar bg-info font-weight-bold w-15" role="progressbar" aria-valuenow="25"
                  aria-valuemin="0" aria-valuemax="100">Java</div>
                <div className="progress-bar font-weight-bold text-right pr-5 w-60 progressFont" role="progressbar"
                  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" data-aos="zoom-in" data-aos-duration="1800" data-aos-delay="800">75%</div>
              </div>
              <div className="progress mt-4 progressHeight" >
                <div className="progress-bar bg-info font-weight-bold w-15" role="progressbar" aria-valuenow="25"
                  aria-valuemin="0" aria-valuemax="100">React</div>
                <div className="progress-bar font-weight-bold text-right pr-5 w-55 progressFont" role="progressbar"
                  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" data-aos="zoom-in" data-aos-duration="1800" data-aos-delay="800">70%</div>
              </div>
              <div className="progress mt-4 progressHeight" >
                <div className="progress-bar bg-info font-weight-bold w-15" role="progressbar" aria-valuenow="25"
                  aria-valuemin="0" aria-valuemax="100">Javascript</div>
                <div className="progress-bar font-weight-bold text-right pr-5 w-50 progressFont" role="progressbar"
                  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" data-aos="zoom-in" data-aos-duration="1800" data-aos-delay="800">65%</div>
              </div>
              <div className="progress mt-4 progressHeight" >
                <div className="progress-bar bg-info font-weight-bold w-15" role="progressbar" aria-valuenow="25"
                  aria-valuemin="0" aria-valuemax="100">Python</div>
                <div className="progress-bar font-weight-bold text-right pr-5 w-35 progressFont" role="progressbar"
                  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" data-aos="zoom-in" data-aos-duration="1800" data-aos-delay="800">50%</div>
              </div>
            </div>
          </div>

          <div className="row justify-content-around bd-highlight pt-5 pb-5">
            <div className="col-lg p-5 m-2 bd-highlight d-flex flex-column justify-content-center align-items-center cardStyle" data-aos="flip-left" data-aos-duration="1000" data-aos-delay="1500">
              <i className="fas fa-code fa-6x text-primary"></i>
              <h1 className="pt-2 aboutColor">Concise</h1>
              <p className="text-center aboutColor" >Clear Well Documented Code in Appliance to Coding Standards
              </p>
            </div>
            <div className="col-lg p-5 m-2 bd-highlight d-flex flex-column justify-content-center align-items-center cardStyle" data-aos="flip-left" data-aos-duration="1000" data-aos-delay="1500">
              <i className="fas fa-cubes fa-6x text-success"></i>
              <h1 className="pt-2 aboutColor text-center" >Problem Solving</h1>
              <p className="text-center aboutColor" > Create Efficient Algorithms. Divide and Conquer using Abstraction
              </p>
            </div>
            <div className="col-lg p-5 m-2 bd-highlight d-flex flex-column justify-content-center align-items-center cardStyle" data-aos="flip-left" data-aos-duration="1000" data-aos-delay="1500">
              <i className="fas fa-shield-alt fa-6x text-warning"></i>
              <h1 className="pt-2 aboutColor" >Security</h1>
              <p className="text-center aboutColor" >Best Practices and Secure Software Development from Inception
              </p>
            </div>
            <div className="col-lg p-5 m-2 bd-highlight d-flex flex-column justify-content-center align-items-center cardStyle" data-aos="flip-left" data-aos-duration="1000" data-aos-delay="1500">
              <i className="fab fa-medapps fa-6x text-info"></i>
              <h1 className="pt-2 aboutColor" >Algorithms</h1>
              <p className="text-center aboutColor">Efficient Algorithms using Best Performing Data Structures
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Projects --> */}
      <div id="projects" className="container-fluid contentSpacing projectContainer" >
        <div className="row d-flex flex-column justify-content-center align-items-center">
          <h1 className="font-weight-bold" data-aos="fade-left" data-aos-duration="500">PROJECTS</h1>
          <div className="header-bar waypoint animated slide-in-left" data-aos="fade-left" data-aos-duration="3000" data-aos-delay="500"
          ></div>
        </div>
        <div id="carouselExampleIndicators" className="carousel slide" data-interval="false" data-aos="zoom-in-up" data-aos-duration="1700" data-aos-delay="2000">
          <ol className="carousel-indicators mt-5">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Project 
            
            title={<span style={{color: "#00BFFF"  }}>LOL Stat Tracker</span>}
              imgSrc={LOLStatTrackerPic}
              infoTitle="About" 
              infoText="LOL Stat Tracker is the ultimate companion for League of Legends players. It provides detailed, up-to-date statistics for every champion, including win rates, pick rates, ban rates, and more. Whether you’re a casual player or aiming for competitive play, LOL Stat Tracker helps you make smarter decisions and adapt to the ever-changing meta. With its intuitive interface and comprehensive data, it’s designed to keep you informed, engaged, and ahead of the competition." 
              infoSecondTitle="Technology" 
              infoSecondText="LOL Stat Tracker is powered by React, JavaScript, HTML, and CSS, offering a sleek, responsive design optimized for all devices. A custom web scraper built with Puppeteer ensures real-time updates of champion statistics, providing players with the latest information. Backed by Node.js, the platform delivers reliable performance and seamless interaction, making it an essential tool for League of Legends enthusiasts."/>
            </div>
            <div className="carousel-item">
              
            <Project 
             title={<span style={{color: "#00BFFF"  }}>NBA Lineups</span>}
            imgSrc={NBALineupsPic}
            infoTitle="About" 
            infoText="NBA Lineups is your ultimate companion for staying updated on NBA games. It provides real-time information on matchups, starting lineups, team records, and game locations, all in one sleek app. Whether you’re a casual fan or a die-hard basketball enthusiast, NBA Lineups ensures you’re always in the know, making it an essential tool for following the action." 
            infoSecondTitle="Technology" 
            infoSecondText="NBA Lineups is built using SwiftUI, delivering a clean and responsive user experience on iOS devices. The app leverages a powerful API to provide accurate, up-to-date information on NBA games, including lineups and team stats. With its seamless design and real-time updates, NBA Lineups is crafted to keep basketball fans engaged and informed."/>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        <div id="projects" className="container">
        <div className="row personalInterests" >
          <div className="text-light col-lg p-5 m-2 bd-highlight d-flex flex-column justify-content-center align-items-center cardStyle2" data-aos="flip-left" data-aos-duration="1000" data-aos-delay="1500">
              <h1 className="font-weight-bold text-center pt-4">Personal Interests</h1>
              <p className="text-center contactTitle">When I am not coding my next project, I enjoy spending my time doing any of the following:</p>
              <ul>
                <li>Hanging out with Friends and Meeting new People</li>
                <li>Video Games</li>
                <li>Waterpolo</li>
                <li>Soccer</li>
                <li>Basketball</li>
              </ul>
              <p className="text-center mb-5">If you couldn't already tell, I Love Sports!</p>
          </div>
        </div>
        </div>
      </div>

      {/* <!-- Contact -->  */}
      <div id="contact" className="contactBg contactContainer " >
        <div className='contactContent'>
          <svg className="contactSvg" preserveAspectRatio="none" viewBox="0 0 100 102" height="75" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" class="svgcolor-light">
            <path d="M0 0 L50 100 L100 0 Z" fill="#f3f3f3" stroke="#f3f3f3"></path>
          </svg>
        </div>
        <div className="contactContent">
          <div className=" d-flex flex-column justify-content-center align-items-center pt-5" >
            <h1 className="font-weight-bold" data-aos="fade-left" data-aos-duration="500">CONTACT</h1>
            <div className="header-bar contactBar" data-aos="fade-left" data-aos-duration="3000" data-aos-delay="500"
            ></div>
          </div>
          <div data-aos="zoom-in-down" data-aos-delay="1500">
            <div>
              <h5 className="text-center contactTitle">If you have any Questions or Inquiries please leave a Message!</h5>
            </div>
            <div>
              <Contact />
            </div>
          </div>
        </div>
      </div>
      <footer id="links" className="container-fluid d-flex flex-column justify-content-center align-items-center footerContainer">
        <a href="#home">
          <div class="icon d-flex flex-column justify-content-center align-items-center upArrowIcon" id="icon-1">
            <i class="fas fa-arrow-up text-light"></i>
          </div>
        </a>
        <div class="info-box">
          <div class="footnote">
            LEISS AMINI <span class="highlight">©2024</span>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
