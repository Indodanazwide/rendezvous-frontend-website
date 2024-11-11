const Footer = () => {
  return (
    <footer>
      <section className="summary">
        <article className="about">
          <h3>Rendezvous</h3>
          <p className="important-info">A student-run dining experience at DUT&apos;s Steve Biko Campus</p>
          <p>Located on the Steve Biko campus, we pride ourselves on eco-friendly initiatives and a commitment to serving the DUT community.</p>
          <p>Block S9, Level 4</p>
        </article>

        <article className="time">
          <h3>When We are Open</h3>
          <p className="important-info">First Semester:</p>
          <p>Wednesdays and Thursdays<br /> 11:00 AM - 14:00 PM</p>
          <p className="important-info">Second Semester:</p>
          <p>Wednesdays to Fridays<br /> 11:00 AM - 14:00 PM</p>
        </article>

        <article className="contact">
          <h3>Make Reservation</h3>
          <p className="important-info">Main Contact:</p>
          <p>
            Jane Visagie
            <br />
            <a href="mailto:janev@dut.ac.za">janev@dut.ac.za</a>
            <br />
            031 373 2383
          </p>
          
          <p className="important-info">Alternative Contacts:</p>
          <p>
            Jabu Chiya: 031 373 6695
            <br />
            Noxolo Blose: 031 373 2322
          </p>
        </article>

        <article className="feedback">
          <h3>Quick Feedback</h3>
          <form onSubmit={(e) => {
            e.preventDefault();
            // Add form submission logic here
          }}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" required></textarea>
            <button type="submit">Send Feedback</button>
          </form>
        </article>
      </section>

      <hr />

      <section className="copyrights">
        <p>&copy; 2024 Rendezvous Restaurant at DUT. All rights reserved.</p>
      </section>
    </footer>
  )
}

export default Footer