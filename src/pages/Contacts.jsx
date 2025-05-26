import eyes from "../assets/eyes.png";
import "./Contacts.css";

export default function Contacts() {
  return (
    <div className="Contacts">
      <h1>How can you contact us???</h1>
      <div className="Row">
        <div className="Col-3">
          Our contacts: <br />
          +996 555 27 09 04 <br />
          +996 855 47 06 03 <br />
          +996 645 75 07 22 <br />
          +996 555 27 09 04
        </div>
        <div className="Col-6">
          <img className="Eyes" src={eyes} alt="photo-eyes" />
        </div>
        <div className="Col-3">
          Our contacts: <br />
          +996 535 85 44 04 <br />
          +996 975 36 84 54 <br />
          +996 435 35 94 07 <br />
          +996 855 47 06 03
        </div>
      </div>
      <p>
        <strong> Our adress : </strong> 101 Cosmetics street, 5th house{" "}
      </p>
      <p>
        <strong>Our email : </strong>cosmetics_store_by_ajarrra @gmail.com{" "}
      </p>
      <p>
        we work from <strong> 8 a.m </strong>to <strong>10 p.m</strong>{" "}
      </p>
    </div>
  );
}
