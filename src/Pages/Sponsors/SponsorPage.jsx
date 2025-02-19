import SponsorsPage from "../../Components/Sponsors/SponsorsPage.jsx";
import sponsors from "../../data/sponsors.json";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import './SponsorPage.css'
import Hero from "../../Components/PageHero/Hero.jsx";

const SponsorPage = () => {
  const sponsor = sponsors.TantraFiesta_Sponsors_2024;

  return (
    <>
      <Navbar />
      <div className="sponsor-page">
        <Hero page="sponsors" />
        {Object.keys(sponsor).map((sponsorKey) => (
          <SponsorsPage key={sponsorKey} title={sponsorKey.replace('-', ' ')} sponsors={sponsor[sponsorKey]} />
        ))}
      </div>
    </>
  );
};

export default SponsorPage;