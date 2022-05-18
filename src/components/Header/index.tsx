import { useEffect, useState } from "react";
import { Nav } from "./Nav";
import { Link } from "react-router-dom";
import "./styles.scss";
export function Header() {
  const [scroll, setScroll] = useState("");
  useEffect(() => {
    const scrollY = () =>
      window.scrollY ? setScroll("scroll-move") : setScroll("");

    window.addEventListener("scroll", scrollY);
    return () => {
      window.removeEventListener("scroll", scrollY);
    };
  }, []);

  return (
    <main className={`header ${scroll}`}>
      <label>
        <Link to="/">
          Developer<strong>.</strong>
        </Link>
      </label>
      <nav>
        <Nav to="/" title="Inicial" />
        <Nav to="about" title="Quem somos?" />
        <Nav to="developer" title="Desenvolvedores" />
      </nav>
    </main>
  );
}
