import Navbar from "./components/Navbar";
import HeroNew from "./components/HeroNew";
import PlanetExplorer from "./components/PlanetExplorer";
import Statistics from "./components/Statistics";

export default function App() {
  return (
    <div className="bg-[#050014]">
      <Navbar />

      <main>
        <section id="hero">
          <HeroNew />
        </section>

        <section id="planets">
          <PlanetExplorer />
        </section>

        <section id="stats">
          <Statistics />
        </section>

        {/* Etapas seguintes irão adicionar Gallery e Footer */}
      </main>
    </div>
  );
}
