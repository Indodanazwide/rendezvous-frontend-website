import { Clock, MapPin, Users, Leaf } from 'lucide-react';

function About() {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    let hoursMessage;

    if (currentMonth >= 0 && currentMonth <= 5) {
      hoursMessage = (
        <p>
          Wednesdays and Thursdays: 11:00 AM - 14:00 PM
        </p>
      );
    } else if (currentMonth >= 6 && currentMonth <= 11) {
      hoursMessage = (
        <p>
          Wednesdays to Fridays: 11:00 AM - 14:00 PM
        </p>
      );
    }

    return (
        <div className="about-page">
            <div className="container">
                <div className="hero">
                    <h1>Rendezvous Restaurant</h1>
                    <p>Where culinary excellence meets innovation at DUT</p>
                </div>

                <div className="cards-grid">
                    <div className="card">
                        <h2>Our Mission</h2>
                        <p>
                            Delivering wholesome, high-quality meals that nourish both body and soul while providing hands-on experience for aspiring culinary professionals.
                        </p>
                    </div>

                    <div className="card">
                        <h2>Student-Powered</h2>
                        <p>
                            A training ground for future food industry leaders, managed by students under expert faculty guidance.
                        </p>
                    </div>
                </div>

                <div className="features-grid">
                    <div className="feature">
                        <Clock className="icon" />
                        <h3>Hours</h3>
                        {hoursMessage}
                    </div>

                    <div className="feature">
                        <MapPin className="icon" />
                        <h3>Location</h3>
                        <p>Steve Biko Campus, DUT</p>
                    </div>

                    <div className="feature">
                        <Users className="icon" />
                        <h3>Community</h3>
                        <p>Open to all DUT family</p>
                    </div>

                    <div className="feature">
                        <Leaf className="icon" />
                        <h3>Sustainable</h3>
                        <p>Eco-friendly practices</p>
                    </div>
                </div>

                <div className="cta">
                    <h2>Join Us for a Memorable Dining Experience</h2>
                    <p>Experience the perfect blend of culinary innovation and student talent.</p>
                </div>
            </div>
        </div>
    )
}

export default About;
