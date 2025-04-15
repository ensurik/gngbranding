
import { Shield, Clock, Award, ThumbsUp } from "lucide-react";

const TrustSignals = () => {
  const trustItems = [
    {
      icon: <Shield className="h-8 w-8 text-[#e74c3c]" />,
      title: "Trygge betalingsløsninger",
      description: "100% sikker betaling"
    },
    {
      icon: <Clock className="h-8 w-8 text-[#e74c3c]" />,
      title: "Rask levering",
      description: "Vi holder alltid tidsfrister"
    },
    {
      icon: <Award className="h-8 w-8 text-[#e74c3c]" />,
      title: "Kvalitetsgaranti",
      description: "Du blir 100% fornøyd"
    },
    {
      icon: <ThumbsUp className="h-8 w-8 text-[#e74c3c]" />,
      title: "Gratis support",
      description: "3 måneder etter lansering"
    }
  ];

  // Kun Kalbakken Engros som kunde
  const clients = [
    "Kalbakken Engros"
  ];

  return (
    <section className="py-8 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-2">{item.icon}</div>
              <h3 className="text-sm md:text-base font-semibold text-[#0e1f33]">{item.title}</h3>
              <p className="text-xs md:text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-10 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500 mb-4">Noen av våre fornøyde kunder</p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
            {clients.map((client, index) => (
              <div key={index} className="text-[#0e1f33] font-medium text-lg opacity-70">
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
