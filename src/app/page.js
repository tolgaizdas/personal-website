import Introduction from "../components/layout/Introduction";
import Title from "../components/layout/Title";
import Footer from "../components/layout/Footer";
import { information } from "./content";

export default async function Home() {
  return (
    <>
      <Title {...information} />
      <main id="main" className="wrap home-main">
        <Introduction information={information} />
      </main>
      <Footer />
    </>
  );
}
