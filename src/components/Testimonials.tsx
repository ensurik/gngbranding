
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Anders Johansen",
      company: "Kalbakken Engros",
      quote: "GnGBranding leverte en fantastisk nettside som har hjulpet oss med å tiltrekke nye kunder og øke salget betydelig.",
      stars: 5,
    },
    {
      name: "Lisa Hansen",
      company: "Nordisk Design",
      quote: "Profesjonelle, kreative og responsive. GnGBranding forstod våre behov og leverte en merkevare vi er stolte av.",
      stars: 5,
    },
    {
      name: "Morten Olsen",
      company: "Tech Solutions AS",
      quote: "Samarbeidet med GnGBranding har vært utrolig verdifullt for vår bedrift. Anbefales på det sterkeste!",
      stars: 4,
    },
  ];

  return (
    <section className="py-20 bg-brand-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Hva Kundene Sier</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Vi er stolte av å ha hjulpet mange bedrifter med å styrke sin digitale tilstedeværelse.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-8 shadow-lg text-brand-blue"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
                {[...Array(5 - testimonial.stars)].map((_, i) => (
                  <Star key={i + testimonial.stars} className="h-5 w-5 text-gray-300" />
                ))}
              </div>
              <p className="text-brand-gray mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-brand-gray text-sm">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
