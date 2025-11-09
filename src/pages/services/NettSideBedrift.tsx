import { ArrowRight, CheckCircle, Building2, Shield, Headphones, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const NettSideBedrift = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const features = [
    {
      icon: <Building2 className="h-12 w-12 text-[#e74c3c]" />,
      title: "Bedriftstilpasset Design",
      description: "Profesjonelt design som gjenspeiler din bedrifts verdier og styrker merkevaren din i markedet."
    },
    {
      icon: <Shield className="h-12 w-12 text-[#e74c3c]" />,
      title: "GDPR & Sikkerhet",
      description: "GDPR-sikre nettsider med SSL-sertifikat, personvern og alle nødvendige juridiske sider for norske bedrifter."
    },
    {
      icon: <Headphones className="h-12 w-12 text-[#e74c3c]" />,
      title: "Dedikert Support",
      description: "3 måneders gratis support etter lansering. Vi er alltid tilgjengelige for å hjelpe din bedrift."
    },
    {
      icon: <Zap className="h-12 w-12 text-[#e74c3c]" />,
      title: "Rask Levering",
      description: "Få en gratis demo på 1 uke og ferdig nettside innen 2-4 uker. Vi leverer raskt uten å kompromisse på kvalitet."
    }
  ];

  const websiteTypes = [
    {
      title: "Presentasjonsnettside",
      description: "Perfekt for bedrifter som ønsker en profesjonell digital tilstedeværelse",
      features: [
        "Informasjon om bedriften",
        "Tjeneste/produktoversikt",
        "Kontaktinformasjon",
        "SEO-optimalisert",
        "Responsivt design"
      ]
    },
    {
      title: "Nettbutikk",
      description: "For bedrifter som vil selge produkter online",
      features: [
        "Produktkatalog",
        "Handlekurv og checkout",
        "Betalingsløsning",
        "Ordrebehandling",
        "Lagerstyring"
      ]
    },
    {
      title: "Portefølje/Katalogsider",
      description: "Vis frem dine prosjekter og arbeid på en profesjonell måte",
      features: [
        "Prosjektoversikt",
        "Billedgalleri",
        "Case studies",
        "Kundehenvisninger",
        "Kontaktskjema"
      ]
    }
  ];

  const industries = [
    "Håndverksbedrifter",
    "Konsulentselskaper",
    "Restauranter og kafeer",
    "Detaljhandel",
    "Eiendomsmeglere",
    "Helsesektoren",
    "Byggebransjen",
    "IT og teknologi",
    "Markedsføringsbyrå",
    "Advokatfirmaer"
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
              <Link to="/tjenester/webdesign" onClick={scrollToTop} className="hover:text-gray-300">Tjenester</Link>
              <span className="mx-2">/</span>
              <span>Nettside for Bedrift</span>
            </nav>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Profesjonell nettside for din bedrift
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mb-8">
              Vi lager skreddersydde nettsider for bedrifter. Få en gratis demo på 1 uke - helt uforpliktende. Moderne, GDPR-sikre nettsider som styrker din merkevare.
            </p>
            <Link to="/contact" onClick={scrollToTop}>
              <Button size="lg" className="bg-white text-[#0e1f33] hover:bg-gray-100">
                Få gratis demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0e1f33] mb-4">
                Hvorfor velge oss for din bedrifts nettside?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Vi forstår at din nettside er ansiktet utad for bedriften din
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-[#0e1f33] mb-3">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Website Types */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0e1f33] mb-12 text-center">
              Typer nettsider for bedrifter
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {websiteTypes.map((type, index) => (
                <div key={index} className="bg-white rounded-lg p-8 shadow-md">
                  <h3 className="text-xl font-bold text-[#0e1f33] mb-3">{type.title}</h3>
                  <p className="text-gray-600 mb-6">{type.description}</p>
                  <ul className="space-y-3">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#e74c3c] shrink-0 mr-2 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0e1f33] mb-4">
                Vi lager nettsider for alle typer bedrifter
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                Uansett hvilken bransje du er i, har vi erfaring med å lage nettsider som fungerer
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {industries.map((industry, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200">
                  <span className="text-gray-700 font-medium">{industry}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GDPR Section */}
        <section className="py-20 bg-gradient-to-r from-[#0e1f33] to-[#2e4562] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Shield className="h-16 w-16 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                GDPR-sikre nettsider for norske bedrifter
              </h2>
              <p className="text-xl mb-8 text-gray-200">
                Vi sørger for at nettsiden din er i henhold til GDPR og personvernlovgivningen. Alle våre nettsider inkluderer nødvendige juridiske sider som personvernerklæring, cookiepolicy og brukervilkår.
              </p>
              <ul className="max-w-2xl mx-auto text-left space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 shrink-0 mr-3 mt-0.5" />
                  <span>Personvernerklæring tilpasset din bedrift</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 shrink-0 mr-3 mt-0.5" />
                  <span>Cookiepolicy og consent-løsning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 shrink-0 mr-3 mt-0.5" />
                  <span>SSL-sertifikat for sikker overføring</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 shrink-0 mr-3 mt-0.5" />
                  <span>Sikker lagring av kundedata</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0e1f33] mb-6">
              Klar til å ta din bedrift online?
            </h2>
            <p className="text-xl mb-8 text-gray-600">
              Få en gratis demo av din nye nettside på 1 uke - helt uforpliktende
            </p>
            <Link to="/contact" onClick={scrollToTop}>
              <Button size="lg" className="bg-[#e74c3c] hover:bg-[#c0392b] text-white">
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

export default NettSideBedrift;
