import CategoryList from "../components/CategoryList/CategoryList";

export default function Home() {
  return (
    <div className="Home">
      <div className="Kylie">
        <h1>Welcome to my beauty world</h1>
        <div className="Home-about">
          <p>
            " True beauty lies in pure and good heart
            <br /> but you can emphasize it thanks to my cosmetics."
          </p>
        </div>
      </div>

      <aside>
        {" "}
        <CategoryList />{" "}
      </aside>

      <div className="Kylie-lips">
        <p>
          the best products <br /> only with us
        </p>
      </div>

      <div className="Row">
        <div className="Col-6">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            voluptate soluta sint non magni deleniti, aliquam saepe nam voluptas
            alias id, ipsam explicabo optio ipsum praesentium error nisi nemo
            neque.
          </p>
        </div>

        <div className="Col-6">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            mollitia reprehenderit sit minima omnis odit soluta, facilis
            asperiores voluptatum nostrum, harum architecto fugiat provident
            dignissimos enim magni doloribus officia aliquid!
          </p>
        </div>
      </div>
    </div>
  );
}
