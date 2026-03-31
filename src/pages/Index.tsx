import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ParkSection from "@/components/ParkSection";
import Footer from "@/components/Footer";
import waterparkHero from "@/assets/waterpark-hero.jpg";
import futbol from "@/assets/futbol.jpg";
import cine from "@/assets/cine.jpg";
import babyRoom from "@/assets/baby-room.jpg";
import gameRoom from "@/assets/game-room.png";
import padel from "@/assets/padel.jpg";
import basket from "@/assets/basket.jpg";
import sportBunker from "@/assets/sport-bunker.png";
import coworking from "@/assets/coworking.jpg";
import spa from "@/assets/spa.jpg";

const sectionBgs = [
  "bg-background",
  "bg-tropical-cream",
  "bg-tropical-sand",
  "bg-background",
  "bg-tropical-cream",
  "bg-tropical-sand",
  "bg-background",
  "bg-tropical-cream",
  "bg-tropical-sand",
  "bg-background",
];

const sections = [
  {
    title: "Parque Acuático",
    description: "Sumérgete en la emoción de nuestro parque acuático con toboganes impresionantes, ríos lentos y zonas de chapoteo para todas las edades. Refréscate y crea recuerdos inolvidables con tu familia y amigos.",
    imageSrc: waterparkHero,
    imageAlt: "Toboganes y piscinas del Parque Acuático en Park Land",
  },
  {
    title: "Cancha de Fútbol",
    description: "Disfruta de emocionantes partidos en nuestra cancha de fútbol de última generación con césped sintético, iluminación profesional y un ambiente tropical único.",
    imageSrc: futbol,
    imageAlt: "Cancha de fútbol con césped sintético en Park Land",
  },
  {
    title: "Sala de Cine",
    description: "Vive la experiencia cinematográfica definitiva en nuestra sala privada con butacas reclinables, sonido envolvente y pantalla de última generación.",
    imageSrc: cine,
    imageAlt: "Sala de cine de lujo en Park Land",
  },
  {
    title: "Baby Room",
    description: "Un espacio seguro y colorido diseñado especialmente para los más pequeños, con piscina de pelotas, juguetes educativos y pisos acolchados para que jueguen sin preocupaciones.",
    imageSrc: babyRoom,
    imageAlt: "Sala de juegos para bebés en Park Land",
  },
  {
    title: "Game Room",
    description: "Desafía a tus amigos en nuestra sala de juegos arcade con máquinas clásicas, air hockey, pinball y las últimas novedades en entretenimiento electrónico.",
    imageSrc: gameRoom,
    imageAlt: "Sala de juegos arcade con luces neón en Park Land",
  },
  {
    title: "Cancha Pádel",
    description: "Practica tu deporte favorito en nuestras canchas de pádel profesionales rodeadas de exuberante vegetación tropical y con las mejores instalaciones.",
    imageSrc: padel,
    imageAlt: "Cancha de pádel con vista tropical en Park Land",
  },
  {
    title: "Cancha Básket",
    description: "Encesta tus mejores tiros en nuestra cancha de básquetbol de tamaño profesional con piso de madera pulida e iluminación de primer nivel.",
    imageSrc: basket,
    imageAlt: "Cancha de básquetbol profesional en Park Land",
  },
  {
    title: "Sport Bunker",
    description: "Lleva tu entrenamiento al siguiente nivel en nuestro Sport Bunker equipado con cuerdas de batalla, llantas, anillas y todo lo necesario para un workout intenso.",
    imageSrc: sportBunker,
    imageAlt: "Gimnasio Sport Bunker con equipo CrossFit en Park Land",
  },
  {
    title: "Coworking",
    description: "Trabaja en un entorno inspirador con escritorios amplios, internet de alta velocidad y un ambiente rodeado de naturaleza que potencia tu productividad.",
    imageSrc: coworking,
    imageAlt: "Espacio de coworking moderno en Park Land",
  },
  {
    title: "Spa",
    description: "Relájate y renueva tu cuerpo y mente en nuestro spa tropical con masajes, aromaterapia, velas y un ambiente de total tranquilidad.",
    imageSrc: spa,
    imageAlt: "Spa de lujo con ambiente zen en Park Land",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />

      {sections.map((section, i) => (
        <ParkSection
          key={section.title}
          title={section.title}
          description={section.description}
          imageSrc={section.imageSrc}
          imageAlt={section.imageAlt}
          bgClass={sectionBgs[i]}
        />
      ))}

      <Footer />
    </div>
  );
};

export default Index;
