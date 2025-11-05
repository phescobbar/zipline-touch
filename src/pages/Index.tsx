import logo from "@/assets/logo.png";
import montesiteLogo from "@/assets/montesite-logo.svg";
import { Link } from "react-router-dom";
import CompanyMap from "@/components/CompanyMap";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4 md:p-8 lg:p-12 relative">
      <div className="w-full max-w-md md:max-w-2xl lg:max-w-5xl xl:max-w-6xl">
        <div className="bg-card rounded-2xl shadow-[var(--shadow-card)] p-6 md:p-10 lg:p-12 border border-border">
          {/* Desktop: Grid Layout | Mobile: Stack Layout */}
          <div className="lg:grid lg:grid-cols-5 lg:gap-12 lg:items-center space-y-8 lg:space-y-0">
            
            {/* Left Column: Logo + Company Name */}
            <div className="lg:col-span-2 text-center lg:text-left space-y-6">
              <div className="flex justify-center lg:justify-start">
                <img 
                  src={logo} 
                  alt="Zipline Tecnologia" 
                  className="h-16 md:h-20 lg:h-28 xl:h-32 w-auto object-contain"
                />
              </div>
              
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
                  Zipline Tecnologia
                </h1>
                <div className="h-1 w-20 lg:w-24 mx-auto lg:mx-0 bg-gradient-to-r from-primary to-accent rounded-full"></div>
              </div>
            </div>

            {/* Right Column: Contact Info */}
            <div className="lg:col-span-3 space-y-6">
              {/* Phone */}
              <a 
                href="tel:08006033336"
                className="flex items-start gap-3 md:gap-4 p-4 md:p-5 lg:p-6 rounded-xl bg-secondary/50 hover:bg-secondary transition-all duration-300 hover:shadow-[var(--shadow-soft)] group"
              >
                <span className="text-2xl md:text-3xl mt-0.5 group-hover:scale-110 transition-transform">📞</span>
                <div>
                  <p className="text-sm md:text-base text-muted-foreground font-medium">Telefone</p>
                  <p className="text-lg md:text-xl lg:text-2xl font-semibold text-foreground">0800 603 3336</p>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-start gap-3 md:gap-4 p-4 md:p-5 lg:p-6 rounded-xl bg-secondary/50">
                <span className="text-2xl md:text-3xl mt-0.5">📍</span>
                <div>
                  <p className="text-sm md:text-base text-muted-foreground font-medium mb-1">Endereço</p>
                  <p className="text-foreground md:text-lg leading-relaxed">
                    Rua do Acampamento nº 380<br />
                    Centro - Santa Maria - RS<br />
                    CEP: 97050-002
                  </p>
                </div>
              </div>

              {/* CNPJ */}
              <div className="flex items-start gap-3 md:gap-4 p-4 md:p-5 lg:p-6 rounded-xl bg-secondary/50">
                <span className="text-2xl md:text-3xl mt-0.5">🏢</span>
                <div>
                  <p className="text-sm md:text-base text-muted-foreground font-medium">CNPJ</p>
                  <p className="text-lg md:text-xl lg:text-2xl font-semibold text-foreground font-mono">
                    04.693.497/0001-21
                  </p>
                </div>
              </div>

              {/* Map */}
              <div className="h-64 md:h-80 rounded-xl overflow-hidden">
                <CompanyMap />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-center gap-2 mt-6 lg:mt-8">
          <p className="text-sm md:text-base text-muted-foreground">
            Feito com
          </p>
          <img 
            src={montesiteLogo} 
            alt="MonteSite" 
            className="h-4 md:h-5 w-auto opacity-70 hover:opacity-100 transition-opacity"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
