
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe, Check, ArrowRight } from "lucide-react";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";

const WebDesign = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Hjem</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Tjenester</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Webdesign</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <span className="inline-block text-[#e74c3c] font-semibold text-sm uppercase tracking-wider mb-2">Webdesign tjenester</span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0e1f33] mb-6">Moderne webdesign som konverterer</h1>
            <p className="text-lg text-brand-gray mb-8">
              Vi utvikler responsive, brukervennlige og estetisk tiltalende nettsider som reflekterer din merkevare og konverterer besøkende til kunder. Vårt fokus er på brukeropplevelse, hastighet og SEO-optimalisering.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-[#0e1f33] hover:bg-[#0e1f33]/90">
                <Link to="/contact">Få et tilbud</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/portfolio">Se våre prosjekter</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <Globe className="w-64 h-64 text-[#0e1f33]" />
          </div>
        </div>
        
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#0e1f33] mb-10 text-center">Våre webdesign-tjenester</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Responsivt Design",
                description: "Nettsider som fungerer perfekt på alle enheter - fra mobil til desktop."
              },
              {
                title: "E-handel Løsninger",
                description: "Brukervennlige nettbutikker med fokus på konvertering og salg."
              },
              {
                title: "Bedriftsnettsider",
                description: "Profesjonelle nettsider som bygger tillit og genererer leads."
              },
              {
                title: "Landingssider",
                description: "Konverteringsoptimaliserte sider for kampanjer og markedsføring."
              },
              {
                title: "WordPress Utvikling",
                description: "Skreddersydde WordPress-løsninger som er enkle å vedlikeholde."
              },
              {
                title: "Webapplikasjoner",
                description: "Skreddersydde applikasjoner tilpasset dine forretningsbehov."
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-[#0e1f33] mb-3">{service.title}</h3>
                <p className="text-brand-gray">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-8 border border-gray-100 mb-16">
          <h2 className="text-3xl font-bold text-[#0e1f33] mb-8 text-center">Hvorfor velge oss for webdesign?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "SEO-optimaliserte nettsider som rangerer høyt i søkemotorer",
              "Brukervennlig design som gir en intuitiv brukeropplevelse",
              "Rask lastetid som reduserer avvisningsfrekvensen",
              "Responsivt design som fungerer på alle enheter",
              "Konverteringsoptimalisert for å øke salg og leads",
              "Skalerbare løsninger som vokser med din bedrift"
            ].map((point, index) => (
              <div key={index} className="flex items-start">
                <Check className="h-6 w-6 text-[#e74c3c] mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-brand-gray">{point}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#0e1f33] mb-6">Klar for å starte ditt neste webprosjekt?</h2>
          <p className="text-lg text-brand-gray mb-8 max-w-3xl mx-auto">
            Ta kontakt med oss i dag for en uforpliktende samtale om hvordan vi kan hjelpe deg med å oppnå dine mål på nett.
          </p>
          <Button asChild size="lg" className="bg-[#0e1f33] hover:bg-[#0e1f33]/90">
            <Link to="/contact" className="inline-flex items-center">
              Få et tilbud nå
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default WebDesign;
