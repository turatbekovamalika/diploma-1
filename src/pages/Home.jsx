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
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
        consequatur ratione, mollitia eveniet cupiditate rem vero provident sed
        perferendis nulla sint nostrum recusandae voluptas! Labore ducimus
        doloribus sint repudiandae ab.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa temporibus
        ea voluptatibus, itaque consequuntur est officiis modi dicta, eum
        quibusdam reiciendis, tempora tenetur inventore alias facere? Beatae
        quisquam ipsa eos?
      </p>
    </div>
  );
}
