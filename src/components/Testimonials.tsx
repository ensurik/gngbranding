
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Anders Johansen",
      company: "Kalbakken Engros",
      quote: "GnGBranding leverte en fantastisk nettside som har hjulpet oss med å tiltrekke nye kunder og øke salget betydelig. Hele prosessen var profesjonell og effektiv.",
      stars: 5,
    },
    {
      name: "Lisa Hansen",
      company: "Nordisk Design",
      quote: "Profesjonelle, kreative og responsive. GnGBranding forstod våre behov og leverte en merkevare vi er stolte av. Vi har fått mange positive tilbakemeldinger.",
      stars: 5,
    },
    {
      name: "Morten Olsen",
      company: "Tech Solutions AS",
      quote: "Samarbeidet med GnGBranding har vært utrolig verdifullt for vår bedrift. Deres strategiske tilnærming til digital markedsføring har gitt oss konkrete resultater.",
      stars: 4,
    },
    {
      name: "Kari Nordmann",
      company: "Karis Kafé",
      quote: "GnGBranding hjalp oss med å fornye vår nettside og grafiske profil. Resultatet ble over all forventning, og vi ser allerede en økning i besøkende.",
      stars: 5,
    },
  ];

  return (
    <section className="py-20 bg-brand-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-white font-semibold text-sm uppercase tracking-wider mb-2">Tilbakemeldinger</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Hva Kundene Våre Sier</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Vi er stolte av å ha hjulpet mange bedrifter med å styrke sin digitale tilstedeværelse.
          </p>
        </div>
        
        <Carousel className="max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="bg-white rounded-lg p-8 shadow-lg text-brand-blue mx-4">
                  <div className="mb-6 text-brand-accent">
                    <Quote className="h-10 w-10 opacity-20" />
                  </div>
                  <p className="text-brand-gray mb-8 text-lg italic">"{testimonial.quote}"</p>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="font-bold text-lg">{testimonial.name}</p>
                      <p className="text-brand-gray">{testimonial.company}</p>
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                      ))}
                      {[...Array(5 - testimonial.stars)].map((_, i) => (
                        <Star key={i + testimonial.stars} className="h-5 w-5 text-gray-300" />
                      ))}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="relative -left-0 mx-2 bg-white/20 text-white hover:bg-white hover:text-brand-blue" />
            <CarouselNext className="relative -right-0 mx-2 bg-white/20 text-white hover:bg-white hover:text-brand-blue" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
