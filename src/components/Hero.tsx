interface HeroProps {
  language: 'en' | 'ru';
}

const Hero = ({ language }: HeroProps) => {
  const content = {
    en: {
      title: "Hey there! I'm Rocker",
      subtitle: "A Young Developer from Kazakhstan"
    },
    ru: {
      title: "Привет! Я Рокер",
      subtitle: "Начинающий разработчик из Казахстана"
    }
  };

  return (
    <section className="hero" id="home">
      <div className="container">
        <h1>{content[language].title}</h1>
        <div className="subtitle">{content[language].subtitle}</div>
      </div>
    </section>
  );
};

export default Hero; 