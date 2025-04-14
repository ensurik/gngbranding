import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";
import { CheckCircle, Users, TrendingUp, Award } from "lucide-react";

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
      name: "Joachim Johansen",
      title: "Medgrunnlegger & Strategisk Direktør",
      bio: "Joachim har alltid vært interessert i markedsføring og digitale muligheter. Uten formell utdanning, men med stor pågangsmot, har han lært seg digitale markedsføringsstrategier gjennom praktisk erfaring og online kurs. Hans mål er å gjøre digital markedsføring tilgjengelig for mindre bedrifter.",
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-blue mb-6">Vår Historie</h2>
              <p className="text-brand-gray mb-4">
                GnGBranding ble grunnlagt i 2018 av Gunnar Hansen og Grete Nilsen med en visjon om å hjelpe små og mellomstore bedrifter med å bygge sterke merkevarer og digitale løsninger.
              </p>
              <p className="text-brand-gray mb-4">
                Med bakgrunn fra både design og markedsføring, kombinerer vi kreativitet med strategisk tenkning for å skape løsninger som ikke bare ser bra ut, men som også gir resultater.
              </p>
              <p className="text-brand-gray">
                I dag har vi vokst til et team av dedikerte fagfolk som har hjulpet et bredt spekter av kunder med å styrke sin digitale tilstedeværelse og bygge sterke merkevarer.
              </p>
            </div>
            <div className="bg-brand-lightGray h-96 rounded-lg flex items-center justify-center">
              <span className="text-brand-blue text-xl font-semibold">Teamet vårt i aksjon</span>
            </div>
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
                  <h3 className="text-xl font-bold text-brand-blue mb-1 text-center md:text-left">{member.name}</h3>
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
