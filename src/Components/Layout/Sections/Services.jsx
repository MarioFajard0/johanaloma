import '../../../Styles/Services.css';
import ScrollAnimation from '../../Animation/ScrollAnimation';

const Services = () => {
  const services = [
    {
      title: 'Corte y Peinado',
      description: 'Transformamos tu cabello con cortes modernos y peinados exclusivos que realzan tu belleza natural y estilo personal.'
    },
    {
      title: 'Coloración y Mechas',
      description: 'Expertos en técnicas de coloración, desde tonos naturales hasta mechas y balayage, para un look radiante y personalizado.'
    },
    {
      title: 'Tratamientos Capilares',
      description: 'Revitaliza tu cabello con nuestros tratamientos especializados de hidratación, reparación y brillo.'
    },
    {
      title: 'Manicure y Pedicure',
      description: 'Cuidado completo para tus manos y pies, incluyendo diseños exclusivos y tratamientos rejuvenecedores.'
    },
    {
      title: 'Depilación',
      description: 'Servicios de depilación profesional para una piel suave y radiante.'
    },
    {
      title: 'Maquillaje Profesional',
      description: 'Maquillaje para toda ocasión, resaltando tu belleza natural con productos de alta calidad.'
    }
  ];

  return (
    <section id="services" className="services">
      <ScrollAnimation>
        <h2>Nuestros Servicios de Belleza</h2>
      </ScrollAnimation>
      
      <div className="services-list">
        {services.map((service, index) => (
          <ScrollAnimation 
            key={service.title} 
            delay={index * 0.1}
          >
            <div className="service-item">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
};

export default Services;