import "./About.css";

import make from "../assets/make.jpg";
export default function About() {
  return (
    <div className="About">
      <div className="Row">
        <div className="Col-6">
          <h1>ABOUT US</h1>
          <p>
            Our store is the largest online store of decorative cosmetics in
            Kyrgyzstan. We closely follow the latest news and trends in the
            beauty industry. At the same time, we really appreciate naturalness,
            and follow the principle of "Do no harm". Our cosmetics are based on
            natural ingredients that do not harm the skin.
          </p>
          <p>
            we take care of your skin and use only the best, use the best as we
            do!!!
          </p>
        </div>
        <div className="Col-6">
          <div className="About-me">
            <img src={make} alt="" />
          </div>
        </div>
      </div>
      <p className="Photo-cosmetics">me</p>
    </div>
  );
}
