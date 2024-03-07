import Image from "next/image";
import Hero from "./page/Hero";
import Hero1 from "./page/Herocenter";
import Ranking from "./page/Ranling";
import Footer from "./page/Footer";

export default function Home() {
  return (
<>
  <Hero/>
  <Hero1/>
  <Ranking/>
  <Footer/>
</>
  );
}
