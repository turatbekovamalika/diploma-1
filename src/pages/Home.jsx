import React from "react";
import CategoryList from "../components/CategoryList/CategoryList";

export default function Home() {
  return (
    <div className="Home">
      <div className="Kylie">
        <h1>Welcome to my beauty world</h1>
        <div className="Home-about">
          {" "}
          <p>
            "True beauty lies in pure and good <br />
            heart but you can emphasize it <br />
            thanks to my cosmetics."
          </p>
        </div>
      </div>

      <aside>
        <CategoryList />
      </aside>

      <div className="Kylie-lips">
        <div className="Col-6">
          <p>
            Thanks to our cosmetics, you will always look amazing in the eyes of
            those around you, and most importantly, you will start to love
            yourself even more.
          </p>
        </div>

        <div className="Col-6">
          <p>
            So beauties, choose high-quality, good products and most importantly
            — at the best prices!
          </p>
        </div>
      </div>

      <div className="Lip-liner">
        <div className="Row">
          <div className="Col-5">
            <p>
              Choose <br /> the <br /> best <br /> !!!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
