import CategoryList from "../components/CategoryList/CategoryList";

export default function Home() {
  return (
    <div className="Home">
      <div className="Kylie">
        <h1 className="Neon">Welcome to my beauty world</h1>

        <div className="Home-about">
          <p>
            "True beauty lies in pure and good <br />
            heart but you can emphasize it <br />
            thanks to my cosmetics."
          </p>
        </div>
      </div>

      <aside>
        <div className="Container">
          <CategoryList />
        </div>
      </aside>

      <div className="Kylie-lips">
        {" "}
        <p>
          the best products <br /> only with us
        </p>
      </div>

      <div className="Row">
        <div className="Container">
          <div className="Col-6">
            <p>
              Thanks to our cosmetics, you will always look amazing in the eyes
              of those around you, and most importantly, you will start to love
              yourself even more.
            </p>
          </div>

          <div className="Col-6">
            <p>
              so beauties choose high-quality, good and most importantly at the
              best prices
            </p>
          </div>
        </div>
      </div>

      <div className="Lip-liner">
        <div className="Row"></div>
      </div>

      <div className="Lipcombo">
        <div className="Row">
          <div className="Col-6"></div>

          <div className="Col-6">
            <p>
              my crème lipstick is a creamy, comfortable formula that delivers a
              color-rich, satin sheen finish. featuring a non-sticky and
              lightweight texture, it effortlessly glides on without feathering
              or settling into lip lines. this formula hydrates and moisturizes
              for 8 hours, leaving lips instantly soft.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
