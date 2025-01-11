import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

interface ContactProps {
  language: 'en' | 'ru';
}

const Contact = ({ language }: ContactProps) => {
  const content = {
    en: {
      title: "Let's Connect!",
      discord: "Discord: rocker7003"
    },
    ru: {
      title: "Давайте общаться!",
      discord: "Discord: rocker7003"
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>{content[language].title}</h2>
        <div className="contact-info">
          <div className="contact-item">
            <FontAwesomeIcon icon={faDiscord} />
            <p>{content[language].discord}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 