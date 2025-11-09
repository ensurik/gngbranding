import { ArrowRight, CheckCircle, Package, Zap, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const NettbutikkPris = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const pricingTiers = [
    {
      name: "Grunnpakke",
      price: "Fra 15.000,-",
      description: "Perfekt for små bedrifter som vil komme i gang med nettbutikk",
      features: [
        "Opptil 50 produkter",
        "Responsivt design",
        "Betalingsløsning integrert",
        "Grunnleggende SEO",
        "Kontaktskjema",
        "3 måneders gratis support"
      ],
      icon: <Package className="h-8 w-8" />
    },
    {
      name: "Profesjonell",
      price: "Fra 30.000,-",
      description: "Beste valg for voksende bedrifter med større produktkataloger",
      features: [
        "Ubegrenset antall produkter",
        "Avansert produktfiltrering",
        "Tilpasset design",
        "Avansert SEO-optimalisering",
        "Produktanmeldelser",
        "Nyhetsbrev-integrasjon",
        "Lagersstyring",
        "3 måneders gratis support"
      ],
      icon: <Zap className="h-8 w-8" />,
      popular: true
    },
    {
      name: "Enterprise",
      price: "Fra 50.000,-",
      description: "For bedrifter med spesielle krav og stort produktutvalg",
      features: [
        "Alt i Profesjonell-pakken",
        "Skreddersydd funksjonalitet",
        "Multi-språk støtte",
        "Avansert integrasjoner",
        "Dedikert prosjektleder",
        "Prioritert support",
        "Kundetilpassede løsninger",
        "6 måneders gratis support"
      ],
      icon: <Star className="h-8 w-8" />
    }
  ];

  const additionalServices = [
    "Produktfotografering: Fra 2.000,-",
    "Innholdsproduksjon (produkttekster): Fra 500,- per produkt",
    "Digital markedsføring: Fra 5.000,- per måned",
    "Vedlikehold og support: Fra 1.500,- per måned",
    "Ekstra design-revisjoner: Fra 1.000,- per runde"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-r from-[#0e1f33] to-[#2e4562] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="mb-8 text-sm">
              <Link to="/" onClick={scrollToTop} className="hover:text-gray-300">Hjem</Link>
              <span className="mx-2">/</span>
              <span>Nettbutikk Pris</span>
            </nav>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Hva koster det å lage nettbutikk?
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl">
              Transparente priser på profesjonelle nettbutikker. Få en gratis demo på 1 uke - helt uforpliktende. Vi leverer ferdig nettbutikk klart til salg.
            </p>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0e1f33] mb-4">
                Velg pakken som passer din bedrift
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Alle pakker inkluderer gratis demo, profesjonelt design og ferdig nettbutikk
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div 
                  key={index}
                  className={`bg-white rounded-lg shadow-lg p-8 ${
                    tier.popular ? 'ring-2 ring-[#e74c3c] relative' : 'border border-gray-200'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <span className="bg-[#e74c3c] text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Mest populær
                      </span>
                    </div>
                  )}
                  
                  <div className="text-[#0e1f33] mb-4">{tier.icon}</div>
                  <h3 className="text-2xl font-bold text-[#0e1f33] mb-2">{tier.name}</h3>
                  <p className="text-3xl font-bold text-[#e74c3c] mb-4">{tier.price}</p>
                  <p className="text-gray-600 mb-6">{tier.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#e74c3c] shrink-0 mr-2 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link to="/contact" onClick={scrollToTop}>
                    <Button 
                      className={`w-full ${
                        tier.popular 
                          ? 'bg-[#e74c3c] hover:bg-[#c0392b]' 
                          : 'bg-[#0e1f33] hover:bg-[#0e1f33]/90'
                      }`}
                    >
                      Få gratis demo
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#0e1f33] mb-8 text-center">
              Tilleggstjenester
            </h2>
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
              <ul className="space-y-4">
                {additionalServices.map((service, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#e74c3c] shrink-0 mr-3 mt-0.5" />
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#0e1f33] mb-8 text-center">
              Ofte stilte spørsmål om nettbutikk pris
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#0e1f33] mb-2">
                  Hva påvirker prisen på en nettbutikk?
                </h3>
                <p className="text-gray-700">
                  Prisen avhenger av antall produkter, tilpasset design, spesielle funksjoner, integrasjoner og kompleksiteten i nettbutikken. Vi gir alltid et transparent pristilbud basert på dine behov.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#0e1f33] mb-2">
                  Er det månedlige kostnader etter lansering?
                </h3>
                <p className="text-gray-700">
                  Ja, det er løpende kostnader for hosting, domene og betalingsløsning (typisk 500-2000 kr per måned). Vedlikehold og support er valgfritt fra 1.500 kr per måned.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#0e1f33] mb-2">
                  Hvor lang tid tar det å lage en nettbutikk?
                </h3>
                <p className="text-gray-700">
                  En grunnleggende nettbutikk kan være klar på 1-2 uker. Større og mer komplekse prosjekter kan ta 4-8 uker. Du får alltid en gratis demo etter 1 uke.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#0e1f33] to-[#2e4562] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Klar til å starte din nettbutikk?
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              Få en gratis demo på 1 uke og se hvordan din nettbutikk kan se ut - helt uforpliktende
            </p>
            <Link to="/contact" onClick={scrollToTop}>
              <Button size="lg" className="bg-white text-[#0e1f33] hover:bg-gray-100">
                Få gratis demo nå
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NettbutikkPris;
