import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Award, Truck, Users, Globe, CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

const TrustSection = () => {
  const { t } = useTranslation();
  const features = [
    {
      icon: Shield,
      title: t("trust.featureQualityTitle", { defaultValue: "Chứng nhận chất lượng" }),
      description: t("trust.featureQualityDesc", { defaultValue: "100% sản phẩm được kiểm định và chứng nhận bởi các tổ chức uy tín" }),
      stats: t("trust.featureQualityStats", { defaultValue: "500+ chứng chỉ" }),
      color: "text-primary"
    },
    {
      icon: Award,
      title: t("trust.featureSuppliersTitle", { defaultValue: "Nhà thu mua uy tín" }),
      description: t("trust.featureSuppliersDesc", { defaultValue: "Đối tác với các HTX và doanh nghiệp có uy tín hàng đầu" }),
      stats: t("trust.featureSuppliersStats", { defaultValue: "1,000+ đối tác" }),
      color: "text-accent"
    },
    {
      icon: Truck,
      title: t("trust.featureLogisticsTitle", { defaultValue: "Logistics chuyên nghiệp" }),
      description: t("trust.featureLogisticsDesc", { defaultValue: "Hệ thống vận chuyển và bảo quản chuyên dụng cho nông sản" }),
      stats: t("trust.featureLogisticsStats", { defaultValue: "63/63 tỉnh thành" }),
      color: "text-success"
    },
    {
      icon: Globe,
      title: t("trust.featureExportTitle", { defaultValue: "Xuất khẩu quốc tế" }),
      description: t("trust.featureExportDesc", { defaultValue: "Hỗ trợ thủ tục và quy trình xuất khẩu đến 50+ quốc gia" }),
      stats: t("trust.featureExportStats", { defaultValue: "50+ quốc gia" }),
      color: "text-tea"
    }
  ];

  const certifications = [
    { name: "GlobalGAP", desc: t("trust.certDesc.globalgap") },
    { name: "HACCP", desc: t("trust.certDesc.haccp") },
    { name: "ISO 22000", desc: t("trust.certDesc.iso22000") },
    { name: "Organic", desc: t("trust.certDesc.organic") },
    { name: "VietGAP", desc: t("trust.certDesc.vietgap") },
    { name: "Rainforest Alliance", desc: t("trust.certDesc.rainforest") }
  ];

  const partners = [
    "Hiệp hội Rau quả Việt Nam",
    "Viện Khoa học Nông nghiệp Việt Nam", 
    "Cục Xuất nhập khẩu",
    "SGS Việt Nam",
    "Bureau Veritas",
    "Intertek Vietnam"
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-muted/30 to-primary-light/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            {t("trust.badge")}
          </Badge>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            {t("trust.whyChoose")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("trust.whyDesc")}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="border-0 shadow-card hover:shadow-organic transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                    {feature.description}
                  </p>
                  <Badge variant="outline" className={`${feature.color} border-current`}>
                    {feature.stats}
                  </Badge>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Certifications & Partners */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Award className="h-6 w-6 text-accent" />
              {t("trust.certsTitle")}
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-border/50">
                  <CheckCircle className="h-5 w-5 text-success mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">{cert.name}</h4>
                    <p className="text-sm text-muted-foreground">{cert.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Partners */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Users className="h-6 w-6 text-primary" />
              {t("trust.partnersTitle")}
            </h3>
            <div className="space-y-4">
              {partners.map((partner, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-border/50">
                  <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold">
                      {partner.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{partner}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-organic">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {t("trust.ctaTitle")}
            </h3>
            <p className="text-muted-foreground mb-6">
              {t("trust.ctaDesc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary-hover transition-colors">
                {t("trust.ctaPrimary")}
              </button>
              <button className="px-8 py-3 border border-border text-foreground rounded-lg font-semibold hover:bg-muted transition-colors">
                {t("trust.ctaSecondary")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;