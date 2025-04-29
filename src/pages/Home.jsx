import Games from "../components/Games/Games";
import GamesAvailability from "../components/GamesAvailability/GamesAvailability";
import Hero from "../components/Hero/Hero";
import Newsletter from "../components/Newsletter/Newsletter";
import Reviews from "../components/Reviews/Reviews";
import TenziesGame from "../components/TenziesGame/TenziesGame";

function Home() {
  return (
    <div>
      <Hero />
      <TenziesGame />
      <GamesAvailability />
      <Reviews />
      <Games />
      <Newsletter />
    </div>
  );
}

export default Home;
