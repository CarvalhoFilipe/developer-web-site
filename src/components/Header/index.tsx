import { NavLink } from "react-router-dom";
import "./styles.scss";
export function Header() {
  return (
    <main className="header">
      <label>
        Developer<strong>.</strong>
      </label>
      <nav>
        <NavLink to="/" style={{}}>Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="developer">Developer</NavLink>
      </nav>
    </main>
  );
}
