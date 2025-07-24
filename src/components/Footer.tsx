import { ArrowUp, Mail, MessageSquare, MapPin, Linkedin, Briefcase } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Contato', href: '#contato' }
  ];

  const services = [
    'Gestão de Equipes',
    'Consultoria Estratégica',
    'Business Intelligence',
    'Suporte Especializado'
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6">
        {/* Main Footer */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl font-inter">A</span>
                </div>
                <span className="text-xl font-bold gradient-text font-inter">
                  AYM Solutions
                </span>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Transformamos processos com BPO inteligente, focando em inovação, 
                eficiência e crescimento para sua empresa.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/company/aym-business-solutions/about/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center hover:bg-[#0077B7] hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://www.instagram.com/aymbusinesssolutions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://www.infojobs.com.br/empresa-aym-business-solutions__727306.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center hover:bg-[#167DB7] hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <Briefcase size={20} />
                </a>
                <a
                  href="mailto:rh@aymsolutions.com.br"
                  className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-foreground mb-6">Navegação</h4>
               <nav className="space-y-3">
                {quickLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                      });
                    }}
                    className="block text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-foreground mb-6">Serviços</h4>
              <div className="space-y-3">
                {services.map((service) => (
                  <div
                    key={service}
                    className="text-muted-foreground"
                  >
                    {service}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-foreground mb-6">Contato</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="text-primary flex-shrink-0 mt-1" size={16} />
                  <a 
                    href="mailto:rh@aymsolutions.com.br"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    rh@aymsolutions.com.br
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <MessageSquare className="text-primary flex-shrink-0 mt-1" size={16} />
                  <a 
                    href="https://wa.me/5511965461044"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +55 (11) 96546-1044
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="text-primary flex-shrink-0 mt-1" size={16} />
                  <span className="text-muted-foreground">
                    São Paulo, SP - Brasil
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col items-center justify-center space-y-4">
            <p className="text-muted-foreground text-sm text-center">
              © 2025 AYM Solutions. Todos os direitos reservados.
            </p>
            
            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white hover:bg-primary-dark transition-all duration-300 hover:scale-110 shadow-blue"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;