import restaurant from '../assets/images/restaurant.jpg'
import cakeImage from '../assets/images/cake.jpg'
import sandwichImage from '../assets/images/sandwich.jpg'
import saladImage from '../assets/images/salad.jpg'
import goldenImage from '../assets/images/golden.jpg'
import drinksImage from '../assets/images/drinks.jpg'
import coffeeImage from '../assets/images/coffe.jpg'

function Home() {
  return (
    <div className="homepage">
        <section className="hero">
            <article>
                <h1>Rendezvous</h1>
                <hr />
                <p>
                    Savor the Moment, Anytime, Anywhere!
                    <br />
                    From classic favorites to innovative twists, our menu has something for everyone.    
                </p>
                <a href="/menu"><button>Explore Our Menu</button></a>
            </article>
        </section>

        <section className="about">
            <article>
                <p>
                    Welcome to <strong>Rendezvous Restaurant</strong>, where culinary excellence meets innovation. Nestled within the vibrant Steve Biko Campus at <a href="http://dut.ac.za">Durban University of Technology</a>, Rendezvous was born from a shared passion for great food, sustainability, and student empowerment.
                </p>
                <a href="/about"><button>Explore more about us</button></a>
            </article>
            <img src={restaurant} alt="Rendezvous Restaurant" />
        </section>

        <section className="allergy-statement">
            <p>
                At Rendezvous Restaurant, we strive to offer a variety of delicious meals and beverages that cater to diverse tastes and preferences. <mark>Please note</mark> that some items on our menu may contain or come into contact with <mark>common allergens</mark>, including WHEAT, EGGS, PEANUTS, TREE NUTS, MILK, FISH, SHELLFISH, and SOY. We take food safety seriously and encourage customers with allergies or specific dietary concerns to <mark>inform our staff when placing orders</mark> so we can do our best to accommodate your needs.
            </p>
        </section>

        <section className="menu">
            <article className="container">
                <ul>
                    <li className="item category">
                        <div className="card">
                            <img src={cakeImage} alt="Tasty Treats" />
                        </div>
                    </li>
                    <li className="item description">
                        <div className="card">
                            <p className="title">Tasty Treats</p>
                            <p className="description">Delightful desserts perfect for satisfying your sweet tooth.</p>
                        </div>
                    </li>

                    <li className="item category">
                        <div className="card">
                            <img src={sandwichImage} alt="Sandwiches" />
                        </div>
                    </li>
                    <li className="item description">
                        <div className="card">
                            <p className="title">Sandwiches</p>
                            <p className="description">Freshly made sandwiches with options for chips on the side.</p>
                        </div>
                    </li>

                    <li className="item category">
                        <div className="card">
                            <img src={saladImage} alt="Light Meals" />
                        </div>
                    </li>
                    <li className="item description">
                        <div className="card">
                            <p className="title">Light Meals</p>
                            <p className="description">Quick, flavorful bites ideal for a lighter meal.</p>
                        </div>
                    </li>

                    <li className="item category">
                        <div className="card">
                            <img src={goldenImage} alt="Main Meals" />
                        </div>
                    </li>
                    <li className="item description">
                        <div className="card">
                            <p className="title">Main Meals</p>
                            <p className="description">Hearty, gourmet dishes featuring satisfying flavors and ingredients.</p>
                        </div>
                    </li>

                    <li className="item category">
                        <div className="card">
                            <img src={drinksImage} alt="Cold Beverages" />
                        </div>
                    </li>
                    <li className="item description">
                        <div className="card">
                            <p className="title">Cold Beverages</p>
                            <p className="description">Refreshing cold drinks, juices, and smoothies to cool you down.</p>
                        </div>
                    </li>

                    <li className="item category">
                        <div className="card">
                            <img src={coffeeImage} alt="Hot Beverages" />
                        </div>
                    </li>
                    <li className="item description">
                        <div className="card">
                            <p className="title">Hot Beverages</p>
                            <p className="description">Warm, comforting beverages to enjoy with your meal or on their own. </p>
                        </div>
                    </li>
                </ul>
            </article>

            <article className="cta">
                <p>Explore our delicious menu and treat yourself to mouth-watering meals and refreshing drinks! Order now or reserve your table for an unforgettable dining experience!</p>
                <a href="/menu"><button>Explore Our Menu & Order Now!</button></a>
            </article>
        </section>
    </div>
  );
}

export default Home;
