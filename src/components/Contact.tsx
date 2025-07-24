import { 
  Mail, 
  MessageSquare, 
  MapPin, 
  Clock, 
  Send,
  Linkedin,
  ArrowRight
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Usando Web3Forms - serviço gratuito que não abre Gmail/Outlook
      const formDataToSend = new FormData();
      formDataToSend.append('access_key', '759ec960-caff-44b8-854e-5ebd60b73391');
      formDataToSend.append('name', formData.nome);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.telefone);
      formDataToSend.append('subject', formData.assunto);
      formDataToSend.append('message', formData.mensagem);
      formDataToSend.append('to', 'rh@aymsolutions.com.br');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Mensagem enviada com sucesso!",
          description: "Retornaremos em até 24 horas.",
        });
        setFormData({
          nome: '',
          email: '',
          telefone: '',
          assunto: '',
          mensagem: ''
        });
      } else {
        throw new Error(result.message || 'Erro no envio');
      }
    } catch (error) {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente ou entre em contato pelo WhatsApp.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: MessageSquare,
      title: "WhatsApp",
      value: "+55 (11) 96546-1044",
      action: "https://wa.me/5511965461044",
      actionText: "Enviar um Direct"
    },
    {
      icon: Mail,
      title: "E-mail",
      value: "rh@aymsolutions.com.br",
      action: null
    },
    {
      icon: MapPin,
      title: "Endereço",
      value: "Santo Amaro, São Paulo - Brasil",
      action: "https://www.google.com.br/maps/place/R.+Verbo+Divino,+2001+-+Ch%C3%A1cara+Santo+Ant%C3%B4nio,+S%C3%A3o+Paulo+-+SP,+04719-002/@-23.630728,-46.71666,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce5121900fa885:0xd8c7b4c778e3364a!8m2!3d-23.6307329!4d-46.7140851!16s%2Fg%2F11sdsl_74k?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDcyMS4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      icon: Clock,
      title: "Horário",
      value: "Seg-Sex: 9h às 18h",
      action: null
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/aym-solutions",
      color: "hover:text-[#0077B7]"
    },
    {
      icon: Mail,
      name: "E-mail",
      url: "mailto:rh@aymsolutions.com.br",
      color: "hover:text-primary"
    }
  ];

  return (
    <section id="contato" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <span className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-4">
              <MessageSquare size={16} className="mr-2" />
              Entre em Contato
            </span>
            <h2 className="text-4xl lg:text-5xl font-black mb-6 font-inter">
              <span className="text-foreground">Vamos</span>{" "}
              <span className="gradient-text">conversar</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Estamos prontos para ajudar você a transformar seus processos. 
              Entre em contato e descubra como podemos impulsionar seu negócio.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-slide-in-up">
              <div className="glass rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  Envie sua mensagem
                </h3>
                
                <form 
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Nome *
                      </label>
                      <input
                        type="text"
                        name="nome"
                        value={formData.nome}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Assunto *
                      </label>
                      <select
                        name="assunto"
                        value={formData.assunto}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                      >
                        <option value="">Selecione um assunto</option>
                        <option value="carreira">Oportunidades de Carreira</option>
                        <option value="parceria">Parceria</option>
                        <option value="informacoes">Informações Gerais</option>
                        <option value="outros">Outros</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                  </div>


                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors resize-none"
                      placeholder="Envie sua mensagem para nós"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    disabled={isLoading}
                    className="w-full btn-primary group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? 'Enviando...' : 'Enviar Mensagem'}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="animate-slide-in-right delay-200">
              <div className="space-y-8">
                {/* Contact Cards */}
                <div className="grid gap-6">
                  {contactInfo.map((info, index) => (
                    <div 
                      key={index}
                      className="glass rounded-2xl p-6 hover-lift group"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-light rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <info.icon className="text-white" size={24} />
                        </div>
                        <div className="flex-1">
                           <h4 className="font-semibold text-foreground mb-1">
                             {info.title}
                           </h4>
                            {info.action ? (
                              <div>
                                <p className="text-muted-foreground mb-1">{info.value}</p>
                                <a 
                                  href={info.action}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                                >
                                  {info.actionText || "Ver no mapa"}
                                </a>
                              </div>
                            ) : info.title === "Endereço" ? (
                              <div>
                                <p className="text-muted-foreground mb-1">{info.value}</p>
                                <span className="text-primary text-sm font-medium">Ver no mapa</span>
                              </div>
                            ) : (
                              <p className="text-muted-foreground">{info.value}</p>
                            )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="glass rounded-2xl p-6">
                  <h4 className="font-semibold text-foreground mb-4">
                    Siga-nos nas redes sociais
                  </h4>
                  <div className="flex space-x-4">
                     {socialLinks.map((social, index) => (
                       <a
                         key={index}
                         href={social.url}
                         target="_blank"
                         rel="noopener noreferrer"
                         className={`w-12 h-12 bg-secondary rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 ${social.color}`}
                       >
                         <social.icon size={24} />
                       </a>
                     ))}
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 animate-fade-in delay-300">
            <div className="glass rounded-3xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Resposta em até 24 horas
              </h3>
              <p className="text-muted-foreground">
                Nossa equipe está sempre pronta para atender você. Responderemos sua mensagem 
                o mais rápido possível para que possamos começar a trabalhar juntos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;