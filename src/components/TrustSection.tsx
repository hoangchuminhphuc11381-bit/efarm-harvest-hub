import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Award, Truck, Users, Globe, CheckCircle } from "lucide-react";

const TrustSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Chứng nhận chất lượng",
      description: "100% sản phẩm được kiểm định và chứng nhận bởi các tổ chức uy tín",
      stats: "500+ chứng chỉ",
      color: "text-primary"
    },
    {
      icon: Award,
      title: "Nhà cung cấp uy tín",
      description: "Đối tác với các HTX và doanh nghiệp có uy tín hàng đầu",
      stats: "1,000+ đối tác",
      color: "text-accent"
    },
    {
      icon: Truck,
      title: "Logistics chuyên nghiệp",
      description: "Hệ thống vận chuyển và bảo quản chuyên dụng cho nông sản",
      stats: "63/63 tỉnh thành",
      color: "text-success"
    },
    {
      icon: Globe,
      title: "Xuất khẩu quốc tế",
      description: "Hỗ trợ thủ tục và quy trình xuất khẩu đến 50+ quốc gia",
      stats: "50+ quốc gia",
      color: "text-tea"
    }
  ];

  const certifications = [
    { name: "GlobalGAP", desc: "Thực hành nông nghiệp tốt toàn cầu" },
    { name: "HACCP", desc: "Phân tích mối nguy và điểm kiểm soát quan trọng" },
    { name: "ISO 22000", desc: "Hệ thống quản lý an toàn thực phẩm" },
    { name: "Organic", desc: "Chứng nhận hữu cơ quốc tế" },
    { name: "VietGAP", desc: "Thực hành nông nghiệp tốt Việt Nam" },
    { name: "Rainforest Alliance", desc: "Nông nghiệp bền vững" }
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
            Tin cậy & Uy tín
          </Badge>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Tại sao chọn eFarmVn?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Chúng tôi cam kết mang đến nền tảng giao dịch an toàn, minh bạch 
            và chuyên nghiệp nhất cho ngành nông sản Việt Nam
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
              Chứng nhận & Tiêu chuẩn
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
              Đối tác chiến lược
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
              Sẵn sàng bắt đầu giao dịch?
            </h3>
            <p className="text-muted-foreground mb-6">
              Tham gia cộng đồng hơn 10,000 người mua và bán nông sản uy tín
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary-hover transition-colors">
                Đăng ký ngay
              </button>
              <button className="px-8 py-3 border border-border text-foreground rounded-lg font-semibold hover:bg-muted transition-colors">
                Tìm hiểu thêm
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;