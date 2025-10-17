
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";
import { CheckCircle, Users, TrendingUp, Award, Linkedin } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <CheckCircle className="h-10 w-10 text-brand-accent" />,
      title: "Kvalitet",
      description: "Vi leverer alltid arbeid av høyeste kvalitet og streber etter å overgå kundenes forventninger.",
    },
    {
      icon: <Users className="h-10 w-10 text-brand-accent" />,
      title: "Samarbeid",
      description: "Vi tror på tett samarbeid med våre kunder for å skape løsninger som virkelig representerer deres visjon.",
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-brand-accent" />,
      title: "Innovasjon",
      description: "Vi holder oss oppdatert på de nyeste trendene og teknologiene for å levere fremtidsrettede løsninger.",
    },
    {
      icon: <Award className="h-10 w-10 text-brand-accent" />,
      title: "Integritet",
      description: "Vi handler alltid med ærlighet og åpenhet, og bygger langsiktige relasjoner basert på tillit.",
    },
  ];

  const team = [
    {
      name: "Gabriel Milinkovic",
      title: "Medgrunnlegger & Kreativ Direktør",
      bio: "Gabriel er en ung gründer som brenner for design og små bedrifters potensial. Med kreativ tenkning og selvlært kompetanse innen grafisk design, startet han GnGBranding for å hjelpe lokale bedrifter med å løfte sin visuelle identitet.",
    },
    {
      name: "Felix M Di Giacomo Kristoffersen",
      title: "Medgrunnlegger & Teknisk Direktør",
      bio: "Felix studerer bachelor i Cybersikkerhet ved Kristiania og har en genuin interesse for teknologi og komplekse systemer. Gjennom studiet har han spesielt engasjert seg i etisk hacking, cyberforsvar og hvordan teknologi kan støtte forretningsmål. Med erfaring i Windows, Python, Java og Linux bidrar han med teknisk kompetanse og sikkerhetsfokus til GnGBranding.",
      linkedin: "https://no.linkedin.com/in/felixmdgk/no",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-brand-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Om GnGBranding</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Vi er et dedikert team av kreative fagfolk som brenner for å skape sterke merkevarer og digitale opplevelser.
          </p>
        </div>
      </div>
      
      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-blue mb-6">Vår Historie</h2>
            <p className="text-brand-gray mb-4">
              GnGBranding ble startet av Gabriel Milinkovic og Felix M Di Giacomo Kristoffersen med en klar visjon: å hjelpe både store og små bedrifter med å digitalisere sine produkter og tjenester for å nå et større marked.
            </p>
            <p className="text-brand-gray mb-4">
              I en tid der digital tilstedeværelse blir stadig viktigere, så vi et behov for å tilby skreddersydde digitale løsninger som faktisk gir resultater. Vi startet med enkle prosjekter for lokale bedrifter, og har gradvis bygget opp vår kompetanse og portefølje.
            </p>
            <p className="text-brand-gray">
              I dag fokuserer vi på å kombinere kreativ design med strategisk markedsføring for å hjelpe våre kunder med å skape sterke digitale identiteter som skiller seg ut i markedet og driver vekst. Vår styrke ligger i vår evne til å forstå hver enkelt bedrifts unike behov og utfordringer.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-20 bg-brand-lightGray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-blue mb-4">Våre Verdier</h2>
            <p className="text-lg text-brand-gray max-w-3xl mx-auto">
              Disse verdiene veileder alt vi gjør og hvordan vi samarbeider med våre kunder.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-brand-blue mb-2">{value.title}</h3>
                <p className="text-brand-gray">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-blue mb-4">Møt Teamet</h2>
            <p className="text-lg text-brand-gray max-w-3xl mx-auto">
              Vi er et lite, men dedikert team med bred kompetanse innen design, markedsføring og digital strategi.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md flex flex-col md:flex-row gap-6">
                <div className="w-32 h-32 bg-brand-lightGray rounded-full flex items-center justify-center mx-auto md:mx-0">
                  <span className="text-brand-blue font-bold">{member.name.charAt(0)}</span>
                </div>
                <div>
                  <div className="flex items-center gap-2 justify-center md:justify-start mb-1">
                    <h3 className="text-xl font-bold text-brand-blue">{member.name}</h3>
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-blue hover:text-brand-accent transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                  <p className="text-brand-accent mb-4 text-center md:text-left">{member.title}</p>
                  <p className="text-brand-gray">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <CallToAction />
      <Footer />
    </div>
  );
};

export default About;
