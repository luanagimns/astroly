import Navbar from "./components/Navbar";
import HeroNew from "./components/HeroNew";

export default function App() {
  return (
    <div className="bg-[#050014]">
      <Navbar />

      <main>
        <section id="hero">
          <HeroNew />
        </section>

        {/* Etapas seguintes irão adicionar PlanetExplorer, Statistics, Gallery e Footer */}
      </main>
    </div>
  );
}
