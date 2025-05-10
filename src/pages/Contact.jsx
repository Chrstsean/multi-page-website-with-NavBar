import { MapPin, Mail, Phone } from "lucide-react";
import "./PageStyle.css";

export function Contact() {
  return (
    <section className="page contact">
      <h2 className="title">Contact</h2>
      <div className="contact-grid">
        <div className="contact-info">
          <p><MapPin className="contact-icon" /> <strong>Address:</strong> Purok Trade, Habito st. ibabang iyam Lucena City</p>
          <p><Mail className="contact-icon" /> <strong>Email:</strong> christianowenprotacio@gmail.com</p>
          <p><Phone className="contact-icon" /> <strong>Phone:</strong> 09477327390</p>
        </div>
        <form className="contact-form">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
