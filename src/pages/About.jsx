import profile from "../profile.jpg";
import "./PageStyle.css";

export function About() {
  return (
    <section className="page about">
      <div className="profile-container">
        <img src={profile} alt="ChrstSean" className="profile-img" />
        <div>
          <h2 className="title">About Me</h2>
          <p className="subtitle">
            I am a passionate future game developer and software developer.
          </p>
        </div>
      </div>
    </section>
  );
}
