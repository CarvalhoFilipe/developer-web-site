import { Nav } from "./Nav";
import "./styles.scss";
export function Header() {
  return (
    <main className="header">
      <label>
        Developer<strong>.</strong>
      </label>
      <nav>
        <Nav to="/" title="Home" />
        <Nav to="about" title="About" />
        <Nav to="developer" title="Developer" />
      </nav>
    </main>
  );
}
