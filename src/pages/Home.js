import { Link } from "react-router-dom";

import React,{useState} from "react";

function Home() {
  const [menuOpen, setMenuOpen]= useState(false);
  const [currentSlide,setCurrentSlide]=useState(0);
  const [searchType, setSearchType]=useState("jobs");
  const companies=[
    {
      name:"BEAEKA General Business PLC",
      short:"BEAEKA",
      jobs:13,
      logo:""
    },
    {
      name:"International Rescue Committee -IRC",
      short:"IRC",
      jobs:0,
      logo:""
    },
     {
      name:"Mercy Corps Ethiopia",
      short:"MERCY",
      jobs:2,
      logo:""
    },
     {
      name:"Dashen Bank S.C",
      short:"DASHEN",
      jobs:8,
      logo:""
    },
     {
      name:"World VisioN Ethiopia",
      short:"WORLD VISION",
      jobs:3,
      logo:""
    },
     {
      name:"GOAL Ethiopia",
      short:"GOAL",
      jobs:1,
      logo:""
    }
  ]
  return (
    <div className="home-page">

      {/* ================= HEADER ================= */}
     

<header className="main-header">

  <div className="header-container">

    {/* ETHIOJOBS LOGO */}
    <div className="ethio-logo">

      <div className="logo-symbol">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <span className="logo-text">
        ethiojobs    
      </span>

    </div>


    {/* DESKTOP MENU */}
    <nav className="desktop-nav">

      <a href="#jobs">Jobs</a>

      <a href="#companies">Companies</a>

    </nav>


    <div className="desktop-account">

      <a href="#login">Log in</a>

      <button>
        Sign up
      </button>

    </div>


    {/* HAMBURGER */}
   {!menuOpen ? (
  <button
    className="mobile-menu-button"
    onClick={() => setMenuOpen(true)}
    aria-label="Open menu"
  >
    <span></span>
    <span></span>
    <span></span>
  </button>
) : (
  <button
    className="mobile-close-button header-close-button"
    onClick={() => setMenuOpen(false)}
    aria-label="Close menu"
  >
    ×
  </button>
)}
  </div>


  {/* FLOATING MOBILE MENU */}

  {menuOpen && (

    <div className="mobile-menu">

      <div className="mobile-menu-header">

        {/* Logo inside menu */}

        <div className="ethio-logo">

          <div className="logo-symbol">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <span className="logo-text">
            ethiojobs
          </span>

        </div>


        {/* CLOSE X */}

        
      </div>


      {/* MENU LINKS */}

      <nav className="mobile-menu-links">

        

<Link to="/about" className="link" onClick={()=> setMenuOpen(false)}> About Us</Link>
        <a href="#contact"   className="mobile2">Contact Us</a>

        <a href="/login"   className="mobile3">Log in</a>

        <a href="/signup"   className="mobile4">Sign up</a>

        <a href="#candidates"   className="mobile5">
          For Candidates
        </a>

      </nav>

    </div>

  )}

</header>
      {/* ================= HERO ================= */}
      <section className="hero-section">

        {/* Decorative curves */}
        <div className="hero-decoration">
          <div className="curve curve-one"></div>
          <div className="curve curve-two"></div>
          <div className="curve curve-three"></div>
        </div>

        <div className="hero-content">

          <h1>
            <span>Ethiojobs</span>
            <br />
            <strong>Find the Latest Jobs in Ethiopia</strong>
          </h1>

          <button className="find-jobs-button">
            Find Jobs
          </button>

        </div>
      </section>


      {/* ================= SEARCH ================= */}
<section className="search-section">
  <div className="search-container">
    <div className="search-tabs">
      <button className={`search-tab ${searchType=== "jobs"? "active":""}`}
      onClick ={()=>setSearchType ("jobs")}>Jobs</button>
      <button className={`search-tab ${searchType === "companies"? "active": ""}`} onClick={()=>setSearchType("companies")}>Companies</button>
    </div>

    <div className="search-row">
      <div className="search-input-box">
        <svg className="search-icon"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2">
          <circle cx="11" cy="11" r="7"></circle>
        <path d="M20 20l-4-4"></path>
        </svg>
        <input type="text" placeholder={searchType ==="jobs" ? "search jobs":"search companies"}/>

      </div>
      <button className="search-button">Search</button>
    </div>
    {searchType ==="jobs" &&(
      <div className="popular-searches">
        <span className="popular-title">Popular Searches:</span>
        <a href="#communication">
          Communications
        </a>
<a href="#Sales">
  Sales
</a>
<a href="#customer-service">
  Customer Service
</a>
<a href="#management">
  Management
</a>
      </div>
    )}
  </div>
</section>
{/* ================= TRUSTED BY ================= */}
      <section className="trusted-section">

        <h2>Trusted By</h2>

        <div className="trusted-logos">

          <div className="company-logo">COMPANY</div>
          <div className="company-logo">DASHEN</div>
          <div className="company-logo">PRIME</div>
          <div className="company-logo">CUAMM</div>
          <div className="company-logo">WORLD VISION</div>
          <div className="company-logo">GOAL</div>

        </div>

      </section>


      {/* ================= TOP CATEGORIES ================= */}
      <section className="categories-section">

        <div className="section-heading">
          <h2>Top Categories</h2>
          <a href="#categories">View all categories &gt;&gt;</a>
        </div>

        <div className="categories-grid">

          <div className="category-card">
            <div className="category-icon">▦</div>
            <h3>Accounting and Finance</h3>
            <span>191</span>
          </div>

          <div className="category-card">
            <div className="category-icon">▦</div>
            <h3>Admin, Secretarial, and Clerical</h3>
            <span>35</span>
          </div>

          <div className="category-card">
            <div className="category-icon">▦</div>
            <h3>Agriculture</h3>
            <span>18</span>
          </div>

          <div className="category-card">
            <div className="category-icon">▦</div>
            <h3>Architecture and Construction</h3>
            <span>6</span>
          </div>

          <div className="category-card">
            <div className="category-icon">▦</div>
            <h3>Automotive</h3>
            <span>23</span>
          </div>

          <div className="category-card">
            <div className="category-icon">▦</div>
            <h3>Banking and Insurance</h3>
            <span>39</span>
          </div>

          <div className="category-card">
            <div className="category-icon">▦</div>
            <h3>Business and Administration</h3>
            <span>144</span>
          </div>

          <div className="category-card">
            <div className="category-icon">▦</div>
            <h3>Business Development</h3>
            <span>37</span>
          </div>

        </div>

      </section>


  
{/* ================= FEATURED COMPANIES ================= */}

<section className="featured-section">

  <div className="featured-heading">
    <h2>Featured Companies</h2>

    <a href="#featured">
      All Featured Companies
    </a>
  </div>


  <div className="company-slider">

    {/* LEFT ARROW */}
    <button
      className="slider-arrow left-arrow"
      onClick={() =>
        setCurrentSlide(
          currentSlide === 0
            ? companies.length - 3
            : currentSlide - 1
        )
      }
    >
      &#8592;
    </button>


    {/* CARDS */}
    <div className="company-slider-window">

      <div
        className="company-slider-track"
        style={{
          transform: `translateX(-${currentSlide * 33.333}%)`
        }}
      >

        {companies.map((company, index) => (

          <div
            className="company-slide"
            key={index}
          >

            <div className="company-card">

              {/* Company logo */}
              <div className="company-logo-box">

                {company.logo ? (
                  <img
                    src={company.logo}
                    alt={company.name}
                  />
                ) : (
                  <div className="logo-placeholder">
                    {company.short}
                  </div>
                )}

              </div>


              {/* Company name */}
              <h3>
                {company.name}
              </h3>


              {/* Jobs */}
              <p>
                Jobs{" "}
                <span>
                  ({company.jobs})
                </span>
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>


    {/* RIGHT ARROW */}
    <button
      className="slider-arrow right-arrow"
      onClick={() =>
        setCurrentSlide(
          currentSlide === companies.length - 3
            ? 0
            : currentSlide + 1
        )
      }
    >
      &#8594;
    </button>

  </div>

</section>
      {/* ================= HOW IT WORKS ================= */}
      <section className="how-section">

        <h2>How Ethiojobs Works</h2>

        <div className="how-grid">
 <div className="how-card">
            <div className="how-number">01</div>
            <h3>Not sure where to start?</h3>
            <p>
              Create and manage your account in seconds.
              Sign up for Ethiojobs and discover personalized
              job alerts based on your skills and preferences.
            </p>
          </div>

          <div className="how-card">
            <div className="how-number">02</div>
            <h3>Need help finding the right jobs?</h3>
            <p>
              Find your dream job with powerful search filters.
              Narrow down open roles based on your skills
              and career goals.
            </p>
          </div>

          <div className="how-card">
            <div className="how-number">03</div>
            <h3>Overwhelmed by the application process?</h3>
            <p>
              Upload your CV, refine your profile and apply
              to open positions effortlessly.
            </p>
          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="footer">

        <div className="footer-grid">

          <div>
            <h3>Job Seekers</h3>
            <a href="#find">Find Jobs</a>
            <a href="#register">Register</a>
            <a href="#cv">Post CVs</a>
            <a href="#alerts">Job Alerts</a>
          </div>

          <div>
            <h3>Employers</h3>
            <a href="#login">Login</a>
            <a href="#register">Register</a>
            <a href="#post">Post Jobs</a>
            <a href="#features">Features</a>
          </div>

          <div>
            <h3>Contact us</h3>
            <p>Meskel Flower Road</p>
            <p>Behind Nazra Hotel</p>
            <p>Addis Ababa, Ethiopia</p>
            <p>Phone: 0116198020</p>
            <p>candidates@ethiojobs.net</p>
          </div>

        </div>

      </footer>

    </div>
  );
}

export default Home;