import profile from "../profile.jpg"; 
import "./PageStyle.css";

export function Home() {
  return (
    <section className="page home">
      <div className="profile-container">
        <img src={profile} alt="ChrstSean" className="profile-img" />
        <div>
          <h2 className="title">Welcome to ChrstSean MultiPage</h2>
          <p className="subtitle">Explore my world as a future developer.</p>
        </div>
      </div>
    </section>
  );
}
