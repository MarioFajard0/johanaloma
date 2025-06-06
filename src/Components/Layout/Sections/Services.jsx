import '../../../Styles/Services.css';
import ScrollAnimation from '../../Animation/ScrollAnimation';

const Services = () => {
  const serviceCategories = [
    {
      category: 'Cortes y Peinados',
      description: 'Transformamos tu cabello con cortes modernos y peinados exclusivos que realzan tu belleza natural y estilo personal.',
      services: [
        'Corte',
        'Peinado',
        'Planchado'
      ]
    },
    {
      category: 'Coloración y Mechas',
      description: 'Expertos en técnicas de coloración, desde tonos naturales hasta mechas y balayage, para un look radiante y personalizado.',
      services: [
        'Tinte',
        'Mechas',
        'Diseño de color'
      ]
    },
    {
      category: 'Alisados y Tratamientos',
      description: 'Servicios profesionales para alisar y mejorar la textura de tu cabello.',
      services: [
        'Alaciado permanente',
        'Nanoplastia',
        'Manhattan'
      ]
    },
    {
      category: 'Tratamientos Capilares',
      description: 'Revitaliza tu cabello con nuestros tratamientos especializados de hidratación, reparación y brillo.',
      services: [
        'Plan de regeneración capilar',
        'Botox real',
        'Restructuración de proteínas',
        'Hidratación boster y Ponzione'
      ]
    },
    {
      category: 'Maquillaje Profesional',
      description: 'Maquillaje para toda ocasión, resaltando tu belleza natural con productos de alta calidad.',
      services: [
        'Maquillaje',
        'Maquillaje y peinado',
        'Maquillaje y peinado express',
        'Maquillaje novia y 15',
        'Maquillaje y peinado novia y 15'
      ]
    },
    {
      category: 'Depilación',
      description: 'Servicios de depilación profesional para una piel suave y radiante.',
      services: [
        'Depilación ceja',
        'Depilación bigote',
        'Depilación ceja y bigote',
        'Depilación patilla',
        'Depilación facial completa'
      ]
    }
  ];

  return (
    <section id="services" className="services">
      <ScrollAnimation>
        <h2>Nuestros Servicios de Belleza</h2>
        <p className="services-intro">En Johana Loma Salón ofrecemos una amplia gama de servicios profesionales para realzar tu belleza natural.</p>
      </ScrollAnimation>
      
      <div className="service-categories">
        {serviceCategories.map((category, categoryIndex) => (
          <ScrollAnimation 
            key={category.category} 
            delay={categoryIndex * 0.1}
          >
            <div className="service-category">
              <h3>{category.category}</h3>
              <p>{category.description}</p>
              <ul className="service-list">
                {category.services.map((service) => (
                  <li key={`${category.category}-${service}`}>{service}</li>
                ))}
              </ul>
            </div>
          </ScrollAnimation>
        ))}
      </div>
      
      <ScrollAnimation delay={0.3}>
        <div className="service-note">
          <p>Para más información sobre nuestros servicios y consultas personalizadas, no dudes en contactarnos.</p>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default Services;