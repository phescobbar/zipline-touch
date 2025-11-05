import logo from "@/assets/logo.png";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">
        <div className="bg-card rounded-2xl shadow-[var(--shadow-card)] p-8 space-y-8 border border-border">
          {/* Logo */}
          <div className="flex justify-center">
            <img 
              src={logo} 
              alt="Zipline Tecnologia" 
              className="h-16 w-auto object-contain"
            />
          </div>

          {/* Company Name */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Zipline Tecnologia
            </h1>
            <div className="h-1 w-20 mx-auto bg-gradient-to-r from-primary to-accent rounded-full"></div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Phone */}
            <a 
              href="tel:08006033336"
              className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-all duration-300 hover:shadow-[var(--shadow-soft)] group"
            >
              <span className="text-2xl mt-0.5 group-hover:scale-110 transition-transform">📞</span>
              <div>
                <p className="text-sm text-muted-foreground font-medium">Telefone</p>
                <p className="text-lg font-semibold text-foreground">0800 603 3336</p>
              </div>
            </a>

            {/* Address */}
            <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50">
              <span className="text-2xl mt-0.5">📍</span>
              <div>
                <p className="text-sm text-muted-foreground font-medium mb-1">Endereço</p>
                <p className="text-foreground leading-relaxed">
                  Rua do Acampamento nº 380<br />
                  Centro - Santa Maria - RS<br />
                  CEP: 97050-002
                </p>
              </div>
            </div>

            {/* CNPJ */}
            <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50">
              <span className="text-2xl mt-0.5">🏢</span>
              <div>
                <p className="text-sm text-muted-foreground font-medium">CNPJ</p>
                <p className="text-lg font-semibold text-foreground font-mono">
                  04.693.497/0001-21
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-muted-foreground mt-6">
          © 2025 Zipline Tecnologia
        </p>
      </div>
    </div>
  );
};

export default Index;
