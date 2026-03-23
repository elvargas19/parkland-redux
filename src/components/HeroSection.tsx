import woodenBanner from "@/assets/wooden-banner.png";
import waterparkHero from "@/assets/waterpark-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative pt-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-tropical-cream" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center pt-8 pb-0">
        {/* Wooden banner */}
        <div className="relative mb-6">
          <img
            src={woodenBanner}
            alt="Bienvenidos a Park Land"
            className="w-[22rem] md:w-[34rem] animate-float"
          />
        </div>

        {/* CTA Button */}
        <button
          type="button"
          className="mb-8 inline-block bg-primary text-primary-foreground font-display text-lg tracking-wider px-8 py-3 rounded-lg shadow-lg cursor-default"
        >
          PRONTO PODRÁS AGENDAR
        </button>

        {/* Hero Image */}
        <div className="relative w-full max-w-5xl mx-auto px-4">
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-tropical-cream">
            <img
              src={waterparkHero}
              alt="Family enjoying the water park at Park Land"
              className="w-full h-[300px] md:h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
