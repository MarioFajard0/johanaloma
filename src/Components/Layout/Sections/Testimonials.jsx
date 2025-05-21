import '../../../Styles/Testimonials.css';
import ScrollAnimation from '../../Animation/ScrollAnimation';

const Testimonials = () => {
  const testimonials = [
    {
      id: 'testimonial-1',
      text: '¡Me encanta cómo quedó mi cabello! El servicio es increíble',
      author: 'Mileydi Mendoza'
    },
    {
      id: 'testimonial-2',
      text: 'El mejor salón de la ciudad. Siempre salgo feliz con los resultados',
      author: 'Kelly Mendoza'
    },
    {
      id: 'testimonial-3',
      text: 'Profesionales expertos y ambiente muy acogedor. ¡Totalmente recomendado!',
      author: 'Jaqueline Mendoza'
    }
  ];

  return (
    <section id="testimonials" className="testimonials">
      <ScrollAnimation>
        <h2>Lo Que Dicen Nuestros Clientes</h2>
      </ScrollAnimation>
      
      <div className="testimonials-list">
        {testimonials.map((testimonial, index) => (
          <ScrollAnimation 
            key={testimonial.id}
            delay={index * 0.2}
          >
            <div className="testimonial-item">
              <p>&ldquo;{testimonial.text}&rdquo;</p>
              <span>- {testimonial.author}</span>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;