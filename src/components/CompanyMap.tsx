const CompanyMap = () => {
  return (
    <div className="w-full h-full rounded-xl overflow-hidden border border-border shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.789!2d-53.8169!3d-29.6842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x950378e8b5f5f5f5%3A0x5f5f5f5f5f5f5f5!2sRua%20do%20Acampamento%2C%20380%20-%20Centro%2C%20Santa%20Maria%20-%20RS%2C%2097050-002!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Localização da empresa"
      />
    </div>
  );
};

export default CompanyMap;
