import eyes from "../assets/eyes.png";
import "./Contacts.css";

export default function Contacts() {
  return (
    <div className="Container">
      <div className="Contacts">
        <h1>How can you contact us???</h1>
        <div className="Row">
          <div className="Col-3">
            Our contacts: <br />
            <a
              className="Tel"
              target="_blank"
              rel="noreferrer"
              href="tel:+996503111381"
            >
              +996 503111381
            </a>{" "}
            <br />
            <a
              className="Tel"
              target="_blank"
              rel="noreferrer"
              href="tel:+700540500"
            >
              +996 700540500
            </a>{" "}
            <br />
            <a
              className="Tel"
              target="_blank"
              rel="noreferrer"
              href="tel:+996 555 27 09 04"
            >
              +996 707704835
            </a>
          </div>
          <div className="Col-6">
            <img className="Eyes" src={eyes} alt="photo-eyes" />
          </div>
          <div className="Col-3">
            Our contacts: <br />
            <a
              className="Tel"
              target="_blank"
              rel="noreferrer"
              href="tel:+996 503111381"
            >
              +996 503111381
            </a>{" "}
            <br />
            <a
              className="Tel"
              target="_blank"
              rel="noreferrer"
              href="+996 503111381"
            >
              +996 707704619
            </a>{" "}
            <br />
            <a
              className="Tel"
              target="_blank"
              rel="noreferrer"
              href="+996 503111381"
            >
              +996050311381
            </a>
          </div>
        </div>
        <p>
          <strong> Our adress : </strong>{" "}
          <a
            className="Adress"
            target="_blank"
            rel="noreferrer"
            href="https://www.google.com/maps?q=48.858152, 2.294433
"
          >
            101 Cosmetics street, 5th house
          </a>
        </p>

        <p>
          <strong>Our email: </strong>
          <a
            className="Email"
            target="_blank"
            rel="noreferrer"
            href="m18049687@gmail.com"
          >
            cosmetics_01_@gmail.com
          </a>
        </p>

        <p>
          we work from <strong> 8 a.m </strong>to <strong>10 p.m</strong>{" "}
        </p>
      </div>
    </div>
  );
}
