import { Facebook, Mail, Phone, MapPin, Globe, Twitter, Youtube, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import logo from "@/assets/logo.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const footerLinks = {
    company: [
      { name: t("footer.about"), href: "/contact" },
      { name: t("footer.vision"), href: "/vision" },
      { name: t("footer.team"), href: "/team" },
      { name: t("footer.careers"), href: "/careers" },
      { name: t("footer.news"), href: "/news" }
    ],
    services: [
      { name: t("footer.trading"), href: "/products" },
      { name: t("footer.auction"), href: "/auction" },
      { name: t("footer.export"), href: "/services" },
      { name: t("footer.qc"), href: "/quality" },
      { name: t("footer.logistics"), href: "/logistics" }
    ],
    support: [
      { name: t("footer.guide"), href: "/guide" },
      { name: t("footer.faq"), href: "/faq" },
      { name: t("footer.warranty"), href: "/warranty" },
      { name: t("footer.return"), href: "/return" },
      { name: t("footer.contact"), href: "/contact" }
    ],
    legal: [
      { name: t("footer.terms"), href: "/terms" },
      { name: t("footer.privacy"), href: "/privacy" },
      { name: t("footer.cookies"), href: "/cookies" },
      { name: t("footer.disputes"), href: "/disputes" }
    ]
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: t("footer.address"),
      content: "Tầng 15, Tòa nhà ABC, 123 Nguyễn Huệ, Q.1, TP.HCM"
    },
    {
      icon: Phone, 
      title: t("footer.hotline"),
      content: "1900-1234 (24/7)"
    },
    {
      icon: Mail,
      title: t("footer.email"),
      content: "info@efarmvn.com"
    },
    {
      icon: Globe,
      title: t("footer.website"),
      content: "www.efarmvn.com"
    }
  ];

  return (
    <footer className="bg-foreground text-background">
      {/* Newsletter */}
      <div className="bg-gradient-primary">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              {t("footer.newsletterTitle")}
            </h3>
            <p className="text-primary-foreground/90 mb-6">
              {t("footer.newsletterDesc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Email"
                className="flex-1 bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/70"
              />
              <Button className="bg-white text-primary hover:bg-white/90">
                {t("footer.subscribe")}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="eFarmVn" className="h-12 w-12" />
              <div>
                <h2 className="text-2xl font-bold text-background">eFarmVn</h2>
                <p className="text-sm text-background/70">{t("header.slogan")}</p>
              </div>
            </div>
            <p className="text-background/80 mb-6 leading-relaxed">
              {/* Intentionally brief description; could be translated later if needed */}
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <Button size="icon" variant="ghost" className="text-background/70 hover:text-background hover:bg-background/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-background/70 hover:text-background hover:bg-background/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-background/70 hover:text-background hover:bg-background/10">
                <Youtube className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-background/70 hover:text-background hover:bg-background/10">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-bold text-background mb-4">{t("footer.company")}</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-background/70 hover:text-background transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-background mb-4">{t("footer.services")}</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-background/70 hover:text-background transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-background mb-4">{t("footer.support")}</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-background/70 hover:text-background transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-background mb-4">{t("footer.contact")}</h4>
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-start gap-3">
                    <IconComponent className="h-5 w-5 text-background/70 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-background">{info.title}</p>
                      <p className="text-sm text-background/70">{info.content}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-background/20" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-background/70">
            {t("footer.copyright")}
          </div>
          
          <div className="flex items-center gap-6 text-sm">
            {footerLinks.legal.map((link, index) => (
              <a 
                key={index}
                href={link.href} 
                className="text-background/70 hover:text-background transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;