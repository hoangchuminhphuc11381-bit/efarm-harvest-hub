import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, TrendingUp, Users, Award } from "lucide-react";
import heroImage from "@/assets/hero-agriculture.jpg";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const [searchCategory, setSearchCategory] = useState("all");
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Nông sản Việt Nam chất lượng cao" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {t("hero.titleLine1")}
            <br />
            <span className="text-accent">{t("hero.titleLine2")}</span>
          </h1>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            {t("hero.descLine1")} 
            {t("hero.descLine2")}
          </p>

          {/* Quick search */}
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 mb-8 shadow-organic">
            <h3 className="text-lg font-semibold text-foreground mb-4">{t("hero.quickSearch")}</h3>
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-1">
                <Input 
                  placeholder={t("hero.placeholder")}
                  className="h-12 text-base"
                />
              </div>
              <Select value={searchCategory} onValueChange={setSearchCategory}>
                <SelectTrigger className="w-full md:w-48 h-12">
                  <SelectValue placeholder={t("hero.category")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t("hero.all")}</SelectItem>
                  <SelectItem value="tea">{t("hero.tea")}</SelectItem>
                  <SelectItem value="cashew">{t("hero.cashew")}</SelectItem>
                  <SelectItem value="durian">{t("hero.durian")}</SelectItem>
                  <SelectItem value="coffee">{t("hero.coffee")}</SelectItem>
                </SelectContent>
              </Select>
              <Button className="h-12 px-8 bg-gradient-primary hover:bg-primary-hover" onClick={() => window.location.href = '/products'}>
                <Search className="h-5 w-5 mr-2" />
                {t("common.search")}
              </Button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="bg-gradient-primary hover:bg-primary-hover text-lg px-8 py-4" onClick={() => window.location.href = '/auction'}>
              <TrendingUp className="h-5 w-5 mr-2" />
              {t("hero.ctaAuction")}
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-foreground backdrop-blur-sm text-lg px-8 py-4" onClick={() => window.location.href = '/sell'}>
              <Users className="h-5 w-5 mr-2" />
              {t("hero.ctaSell")}
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 text-white">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">500+</div>
              <div className="text-sm text-white/80">{t("hero.statSuppliers")}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">50+</div>
              <div className="text-sm text-white/80">{t("hero.statProvinces")}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">1000+</div>
              <div className="text-sm text-white/80">{t("hero.statDeals")}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust badges */}
      <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
        <Award className="h-5 w-5 text-primary" />
        <span className="text-sm font-medium text-foreground">{t("hero.badgeGlobalGAP")}</span>
      </div>
    </section>
  );
};

export default Hero;