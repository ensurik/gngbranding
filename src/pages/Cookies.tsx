
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { Cookie } from "lucide-react";

const Cookies = () => {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-[#0e1f33] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Informasjonskapsler (Cookies)</h1>
            <Breadcrumb>
              <BreadcrumbList className="text-gray-300">
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/" className="hover:text-white transition-colors">Hjem</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink className="font-medium">Cookies</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center justify-center mb-6">
              <Cookie className="h-16 w-16 text-[#e74c3c]" />
            </div>
            
            <h2 className="text-2xl font-bold text-[#0e1f33] mb-6 text-center">Vår bruk av informasjonskapsler</h2>
            
            <div className="space-y-6 text-gray-700">
              <p>
                GnG Branding bruker informasjonskapsler (cookies) for å forbedre din brukeropplevelse når du besøker nettstedet vårt. 
                Denne siden forklarer hvordan vi bruker cookies, hvilke typer cookies vi bruker, og hvordan du kan administrere dem.
              </p>
              
              <h3 className="text-xl font-bold text-[#0e1f33] mt-8 mb-3">1. Hva er cookies?</h3>
              <p>
                Cookies er små tekstfiler som lagres på din enhet (datamaskin, nettbrett eller mobiltelefon) når du besøker et nettsted. 
                De brukes for å huske dine preferanser, forbedre brukeropplevelsen og gi nettstedeiere informasjon om hvordan nettstedet brukes.
              </p>
              
              <h3 className="text-xl font-bold text-[#0e1f33] mt-8 mb-3">2. Hvilke typer cookies bruker vi?</h3>
              <p>
                Vi bruker følgende typer cookies på vårt nettsted:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  <strong>Nødvendige cookies:</strong> Disse er essensielle for at nettstedet skal fungere riktig og kan ikke deaktiveres.
                </li>
                <li>
                  <strong>Preferanse-cookies:</strong> Disse gjør det mulig for nettstedet å huske valg du har gjort og gir en mer personlig opplevelse.
                </li>
                <li>
                  <strong>Statistikk-cookies:</strong> Disse hjelper oss å forstå hvordan besøkende bruker nettstedet vårt, slik at vi kan forbedre funksjonalitet og innhold.
                </li>
                <li>
                  <strong>Markedsføringscookies:</strong> Disse brukes til å spore besøkende på tvers av nettsteder for å vise relevante annonser basert på deres interesser.
                </li>
              </ul>
              
              <h3 className="text-xl font-bold text-[#0e1f33] mt-8 mb-3">3. Tredjepartscookies</h3>
              <p>
                Vi bruker også tjenester fra tredjeparter som kan sette cookies på din enhet. Dette inkluderer:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Google Analytics (for analyse av nettstedstrafikk)</li>
                <li>Google Ads (for annonsesporing)</li>
                <li>Facebook Pixel (for markedsføring og konverteringssporing)</li>
              </ul>
              
              <h3 className="text-xl font-bold text-[#0e1f33] mt-8 mb-3">4. Hvordan administrere cookies</h3>
              <p>
                Du kan kontrollere og administrere cookies på flere måter:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  <strong>Nettleserinnstillinger:</strong> De fleste nettlesere lar deg se, slette eller blokkere cookies fra alle eller spesifikke nettsteder.
                </li>
                <li>
                  <strong>Cookie-banner:</strong> Du kan justere dine preferanser via cookie-banneret som vises når du først besøker nettstedet vårt.
                </li>
              </ul>
              <p className="mt-4">
                Vær oppmerksom på at blokkering av visse cookies kan påvirke funksjonaliteten på nettstedet vårt.
              </p>
              
              <h3 className="text-xl font-bold text-[#0e1f33] mt-8 mb-3">5. Endringer i vår cookie-policy</h3>
              <p>
                Vi kan oppdatere denne cookie-policyen fra tid til annen. Eventuelle endringer vil bli publisert på denne siden.
              </p>
              
              <h3 className="text-xl font-bold text-[#0e1f33] mt-8 mb-3">6. Kontakt oss</h3>
              <p>
                Hvis du har spørsmål om vår bruk av cookies, kan du kontakte oss på:
              </p>
              <p className="mt-2">
                E-post: kontakt@gngbranding.no<br />
                Telefon: +47 912 46 491
              </p>
              
              <p className="mt-6 text-sm text-gray-500">
                Sist oppdatert: 15. april 2025
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Cookies;
