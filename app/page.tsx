import Card from "../components/card";

const content = [
  {
    color: "orange",
    icon: "icon-sedans.svg",
    title: "Sedans",
    copy: "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
  },
  {
    color: "teal",
    icon: "icon-suvs.svg",
    title: "Suvs",
    copy: "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
  },
  {
    color: "green",
    icon: "icon-luxury.svg",
    title: "Luxury",
    copy: "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center md:flex-row md:justify-center mt-[88px] md:mt-[171px]">
      {content.map((value, index) => (
        <Card key={index} {...value} />
      ))}
    </div>
  );
}

// TODO:
// define size viewport
