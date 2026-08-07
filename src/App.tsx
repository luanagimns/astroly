import Navbar from "./components/Navbar";
import HeroNew from "./components/HeroNew";
import PlanetExplorer from "./components/PlanetExplorer";

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

        {/* Etapas seguintes irão adicionar Statistics, Gallery e Footer */}
      </main>
    </div>
  );
}
