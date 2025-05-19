import Nav from "../Nav/Nav";
import "./Layout.css";

export default function Layout(props) {
  return (
    <div className="Layout">
      <header>
        <Nav />
      </header>
      <main>{props.children}</main>

      <aside>ASIDE</aside>

      <footer>Footer</footer>
    </div>
  );
}
