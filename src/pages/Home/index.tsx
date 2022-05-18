import { Banner } from "../../components/Banner";
import { Cards } from "../../components/Cards";
import "./styles.scss";

export default function Home() {
  return (
    <main className="container-home">
      <Banner />
      <Cards/>
    </main>
  );
}
