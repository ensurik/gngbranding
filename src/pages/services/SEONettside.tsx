import { ArrowRight, CheckCircle, Search, TrendingUp, Target, BarChart } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const SEONettside = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    // Add FAQ structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Hvordan få nettsiden på Google?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For å få nettsiden på Google må du optimalisere den for søkemotorer (SEO). Dette inkluderer teknisk SEO, innholdsoptimalisering, mobiloptimalisering, god hastighet og relevante nøkkelord. Vi hjelper deg med komplett SEO-optimalisering."
          }
        },
        {
          "@type": "Question",
          "name": "Hva er en god nettside?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "En god nettside er rask og brukervennlig, mobiloptimalisert, SEO-optimalisert for Google, sikker med HTTPS, har relevant og godt innhold, og er designet for konvertering. Den må også være GDPR-sikker."
          }
        },
        {
          "@type": "Question",
          "name": "Hvor lang tid tar SEO-optimalisering?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Grunnleggende SEO-optimalisering tar 2-4 uker å implementere. Resultater i form av bedre ranking på Google sees typisk etter 2-3 måneder, men det varierer basert på konkurranse og bransje."
          }
        },
        {
          "@type": "Question",
          "name": "Hva koster SEO-optimalisering av nettside?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SEO-optimalisering starter fra 10.000 kr for grunnleggende optimalisering. Løpende SEO-tjenester starter fra 5.000 kr per måned. Prisen avhenger av nettsidens størrelse og konkurransenivået i din bransje."
          }
        }
      ]
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const seoServices = [
    {
      icon: <Search className="h-12 w-12 text-[#e74c3c]" />,
      title: "Hvordan få nettsiden på Google",
      description: "Vi optimaliserer nettsiden din for søkemotorer slik at du blir funnet når potensielle kunder søker etter dine produkter eller tjenester på Google."
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-[#e74c3c]" />,
      title: "Søkemotoroptimalisering",
      description: "Teknisk SEO, innholdsoptimalisering og linkbuilding for å forbedre nettsiden din sin ranking på Google og andre søkemotorer."
    },
    {
      icon: <Target className="h-12 w-12 text-[#e74c3c]" />,
      title: "Nøkkelordanalyse",
      description: "Vi finner de beste søkeordene for din bedrift og optimaliserer nettsiden din for å rangere høyt på disse nøkkelordene."
    },
    {
      icon: <BarChart className="h-12 w-12 text-[#e74c3c]" />,
      title: "Måling og Rapportering",
      description: "Løpende analyse og rapportering av nettsiden din sin prestasjon i søkemotorer, slik at du ser resultatene av SEO-arbeidet."
    }
  ];

  const seoProcess = [
    {
      step: "1",
      title: "Analyse av nåværende nettside",
      description: "Vi analyserer nettsiden din og identifiserer forbedringsområder for bedre SEO."
    },
    {
      step: "2",
      title: "Nøkkelordstrategi",
      description: "Vi utvikler en skreddersydd nøkkelordstrategi basert på din bedrift og målgruppe."
    },
    {
      step: "3",
      title: "Optimalisering",
      description: "Vi implementerer teknisk SEO, optimaliserer innhold og forbedrer nettsiden sin struktur."
    },
    {
      step: "4",
      title: "Oppfølging og forbedring",
      description: "Løpende overvåking og optimalisering for å sikre fortsatt vekst i søkeresultatene."
    }
  ];

  const benefits = [
    "Økt synlighet på Google",
    "Mer relevant trafikk til nettsiden",
    "Høyere konverteringsrate",
    "Bedre brukeropplevelse",
    "Konkurransefortrinn i ditt marked",
    "Målbar ROI på investeringen"
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
              <span>SEO Nettside</span>
            </nav>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              SEO for Nettsider - Få nettsiden din på Google
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mb-8">
              Hva er en god nettside uten besøkende? Vi sørger for at nettsiden din blir funnet av potensielle kunder på Google gjennom profesjonell SEO-optimalisering.
            </p>
            <Link to="/contact" onClick={scrollToTop}>
              <Button size="lg" className="bg-white text-[#0e1f33] hover:bg-gray-100">
                Få gratis SEO-analyse
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0e1f33] mb-4">
                Våre SEO-tjenester for nettsider
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Vi tilbyr helhetlig optimalisering av nettsider for bedre synlighet på Google
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {seoServices.map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-[#0e1f33] mb-3">{service.title}</h3>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Process */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0e1f33] mb-12 text-center">
              Slik optimaliserer vi nettsiden din
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {seoProcess.map((item, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-lg p-6 shadow-md h-full">
                    <div className="bg-[#e74c3c] text-white text-2xl font-bold w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-bold text-[#0e1f33] mb-2">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0e1f33] mb-6">
                  Hvorfor er SEO viktig for nettsiden din?
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Over 90% av alle nettopplevelser starter med et søk på Google. Hvis nettsiden din ikke vises på første side, mister du potensielle kunder til konkurrentene.
                </p>
                <p className="text-lg text-gray-700 mb-8">
                  Med profesjonell SEO-optimalisering får nettsiden din bedre synlighet, mer relevant trafikk og høyere konverteringsrate.
                </p>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-[#e74c3c] shrink-0 mr-3 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-[#0e1f33] to-[#2e4562] rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Hva er en god nettside?</h3>
                <p className="mb-4">En god nettside er:</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 shrink-0 mr-3 mt-0.5" />
                    <span>Rask og brukervennlig</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 shrink-0 mr-3 mt-0.5" />
                    <span>Mobiloptimalisert</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 shrink-0 mr-3 mt-0.5" />
                    <span>SEO-optimalisert for Google</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 shrink-0 mr-3 mt-0.5" />
                    <span>Sikker (HTTPS)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 shrink-0 mr-3 mt-0.5" />
                    <span>Med relevant og godt innhold</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 shrink-0 mr-3 mt-0.5" />
                    <span>Designet for konvertering</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#0e1f33] to-[#2e4562] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Få nettsiden din på førstesiden i Google
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              Kontakt oss i dag for en gratis SEO-analyse og se hvordan vi kan hjelpe deg å nå flere kunder
            </p>
            <Link to="/contact" onClick={scrollToTop}>
              <Button size="lg" className="bg-white text-[#0e1f33] hover:bg-gray-100">
                Få gratis SEO-analyse
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

export default SEONettside;
