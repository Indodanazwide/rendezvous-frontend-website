import { MapPin, Clock, Phone, Mail, Users } from 'lucide-react';

const ContactPage = () => {
  const contactInfo = [
    { icon: MapPin, title: "Location", content: "Steve Biko Campus, Durban University of Technology" },
    { 
      icon: Clock, 
      title: "Operating Hours", 
      content: [
        "First Semester: Wednesday & Thursday: 11:00 AM - 2:00 PM",
        "Second Semester: Wednesday, Thursday & Friday: 11:00 AM - 2:00 PM"
      ]
    },
    { icon: Phone, title: "Phone", content: "+27 (0)31 373 2500" },
    { icon: Mail, title: "Email", content: "info@rendezvousrestaurant.co.za" }
  ];

  const teamMembers = [
    {
      name: "Jane Visagie",
      role: "Head of Department",
      phone: "+27 (0)31 373 2501",
      email: "jane.visagie@dut.ac.za"
    },
    {
      name: "Jabu Chiya",
      role: "Reservations Coordinator",
      phone: "+27 (0)31 373 2502",
      email: "jabu.chiya@dut.ac.za"
    },
    {
      name: "Noxolo Blose",
      role: "Customer Relations Manager",
      phone: "+27 (0)31 373 2503",
      email: "noxolo.blose@dut.ac.za"
    }
  ];

  return (
    <div className="contact-page">
      <div className="container">
        {/* Hero Section */}
        <div className="hero">
          <h1>Contact Us</h1>
          <p>Get in touch with our team</p>
        </div>

        {/* Contact Info Grid */}
        <div className="info-grid">
          {contactInfo.map((info, index) => (
            <div key={index} className="info-card">
              <div className="icon-header">
                <info.icon className="icon" />
                <h2>{info.title}</h2>
              </div>
              {Array.isArray(info.content) ? (
                <div className="content-list">
                  {info.content.map((item, i) => (
                    <p key={i}>{item}</p>
                  ))}
                </div>
              ) : (
                <p>{info.content}</p>
              )}
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="team-section">
          <div className="section-header">
            <Users className="icon" />
            <h2>Contact Persons</h2>
          </div>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <h3>{member.name}</h3>
                <span className="role">{member.role}</span>
                <div className="contact-details">
                  <p>
                    <Phone className="mini-icon" />
                    {member.phone}
                  </p>
                  <p>
                    <Mail className="mini-icon" />
                    {member.email}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta">
          <h2>Visit Us Today</h2>
          <p>We look forward to serving you at Rendezvous Restaurant</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;