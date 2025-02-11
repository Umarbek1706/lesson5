import food from "../src/img/food.png";
import burger from "../src/img/burger.png";
import salad from "../src/img/salad.png";
import povar from "../src/img/povar.png";
import icon from "../src/img/icon.png";
import './App.css'


function App() {


  return (
    <>
      <header >
        <div className="container">
          <h1>FoodI</h1>
          <nav>
            <ul>
              <li ><a href="#">Home</a></li>
              <li><a href="#">Menu</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Offers</a></li>
            </ul>
          </nav>
          <button>Contact</button>
        </div>

      </header>
      <main>
        <section className='hero'>
          <div className="container">
            <div className="hero-box">
              <h1>Dive into Delights  Of Delectable Food</h1>
              <p>Where Each Plate Weaves a Story of Culinary  Mastery and Passionate Craftsmanship</p>
              <button>Order Now</button>
            </div>
            <img src={food} alt="wfev" />
          </div>
        </section>
        <section className='catagories'>
          <div className="container">
            <h2>Popular Catagories</h2>
            <div className="box">
              <div className="card">
                <img src={burger} alt="wfev" />
                <h3>Main Dish</h3>
                <p>(86 dishes)</p>
              </div>
              <div className="card">
                <img src={burger} alt="wfev" />
                <h3>Main Dish</h3>
                <p>(86 dishes)</p>
              </div>
              <div className="card">
                <img src={burger} alt="wfev" />
                <h3>Main Dish</h3>
                <p>(86 dishes)</p>
              </div>
              <div className="card">
                <img src={burger} alt="wfev" />
                <h3>Main Dish</h3>
                <p>(86 dishes)</p>
              </div>
            </div>
          </div>
        </section>
        <section className='menu'>
          <div className="container">
            <h2>Standout Dishes From Our Menu</h2>
            <div className="menu-box">
              <div className="menu-card">
                <img src={salad} alt="wfev" />
                <h3>Fattoush salad</h3>
                <p>Description of the item</p>
                <div className="baho">
                  <p>$24.00</p>
                  <p>4.9</p>
                </div>
              </div>
              <div className="menu-card">
                <img src={salad} alt="wfev" />
                <h3>Fattoush salad</h3>
                <p>Description of the item</p>
                <div className="baho">
                  <p>$24.00</p>
                  <p>4.9</p>
                </div>
              </div>
              <div className="menu-card">
                <img src={salad} alt="wfev" />
                <h3>Fattoush salad</h3>
                <p>Description of the item</p>
                <div className="baho">
                  <p>$24.00</p>
                  <p>4.9</p>
                </div>
              </div>
              <div className="menu-card">
                <img src={salad} alt="wfev" />
                <h3>Fattoush salad</h3>
                <p>Description of the item</p>
                <div className="baho">
                  <p>$24.00</p>
                  <p>4.9</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="About container">
          <img src={povar} alt="arg" />
          <div className="About-text">
            <h1>What Our Customers Say About Us</h1>
            <p>“I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable”</p>
          </div>
        </section>
        <section className="services container">
          
          <div className="services-text">
            <h1>Our Culinary Journey  And Services</h1>
            <p>Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.</p>
            <button>Explore</button>
          </div>
          <div className="s-b">
          <div className="servise-box">
          <div className="servise-card">
          <img src={icon} alt="arg" />
          <h5>Catering</h5>
          <p>Delight your guests with our flavors and  presentation</p>
          </div>
          <div className="servise-card">
          <img src={icon} alt="arg" />
          <h5>Catering</h5>
          <p>Delight your guests with our flavors and  presentation</p>
          </div>
          </div>
          <div className="servise-box1">
          <div className="servise-card">
          <img src={icon} alt="arg" />
          <h5>Catering</h5>
          <p>Delight your guests with our flavors and  presentation</p>
          </div>
          <div className="servise-card">
          <img src={icon} alt="arg" />
          <h5>Catering</h5>
          <p>Delight your guests with our flavors and  presentation</p>
          </div>
          </div>
          </div>
          
          
        </section>
      </main>
      <footer>
        
      </footer>
    </>
  )
}

export default App
