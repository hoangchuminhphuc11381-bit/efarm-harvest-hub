import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Globe, Award, TrendingUp, CheckCircle2, Home } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";

const Suppliers = () => {
  const { t } = useTranslation();
  const suppliers = [
    {
      id: 1,
      name: "Công ty Cổ phần Phúc Sinh",
      category: "Hạt Điều",
      location: "Bình Phước",
      description: "Nhà cung cấp hạt điều hàng đầu Việt Nam với hơn 30 năm kinh nghiệm xuất khẩu sang 50+ quốc gia",
      products: ["Hạt điều W240", "Hạt điều W320", "Hạt điều W450"],
      certifications: ["HACCP", "ISO 22000", "BRC", "Organic"],
      capacity: "50,000 tấn/năm",
      exportMarkets: ["Mỹ", "EU", "Trung Quốc", "Nhật Bản"],
      contact: {
        phone: "0274 123 4567",
        email: "export@phucsinhcashew.vn",
        website: "www.phucsinhcashew.vn"
      },
      rating: 4.8,
      verified: true
    },
    {
      id: 2,
      name: "Công ty TNHH Cà phê Trung Nguyên",
      category: "Cà Phê",
      location: "Đắk Lắk",
      description: "Thương hiệu cà phê số 1 Việt Nam, chuyên sản xuất và xuất khẩu cà phê chất lượng cao từ Tây Nguyên",
      products: ["Cà phê Robusta", "Cà phê Arabica", "Cà phê hòa tan"],
      certifications: ["UTZ", "Rainforest Alliance", "4C", "Organic"],
      capacity: "100,000 tấn/năm",
      exportMarkets: ["Mỹ", "EU", "Nhật Bản", "Hàn Quốc", "ASEAN"],
      contact: {
        phone: "0262 123 4567",
        email: "export@trungnguyencoffee.vn",
        website: "www.trungnguyencoffee.vn"
      },
      rating: 4.9,
      verified: true
    },
    {
      id: 3,
      name: "Công ty Cổ phần Chè Lâm Đồng",
      category: "Trà",
      location: "Lâm Đồng",
      description: "Doanh nghiệp sản xuất và chế biến trà hàng đầu tại Lâm Đồng với quy trình công nghệ hiện đại",
      products: ["Trà xanh", "Trà đen", "Trà Oolong", "Trá Ướp hương"],
      certifications: ["ISO 22000", "HACCP", "Organic EU", "JAS"],
      capacity: "10,000 tấn/năm",
      exportMarkets: ["Nhật Bản", "Đài Loan", "Pakistan", "Nga"],
      contact: {
        phone: "0263 234 5678",
        email: "sales@lamdong-tea.vn",
        website: "www.lamdongtea.vn"
      },
      rating: 4.7,
      verified: true
    },
    {
      id: 4,
      name: "Công ty TNHH Sầu Riêng Đồng Tháp",
      category: "Sầu Riêng",
      location: "Đồng Tháp",
      description: "Chuyên canh tác và xuất khẩu sầu riêng Ri6 chất lượng cao theo tiêu chuẩn VietGAP và GlobalGAP",
      products: ["Sầu riêng Ri6", "Sầu riêng Monthong", "Sầu riêng đông lạnh"],
      certifications: ["VietGAP", "GlobalGAP", "HACCP"],
      capacity: "5,000 tấn/năm",
      exportMarkets: ["Trung Quốc", "Thái Lan", "Singapore"],
      contact: {
        phone: "0277 345 6789",
        email: "export@dongthapdurian.vn",
        website: "www.dongthapdurian.vn"
      },
      rating: 4.6,
      verified: true
    },
    {
      id: 5,
      name: "Công ty Cổ phần Olam Việt Nam",
      category: "Hạt Tiêu",
      location: "Đồng Nai",
      description: "Nhà xuất khẩu hạt tiêu lớn nhất Việt Nam, là thành viên của tập đoàn Olam International",
      products: ["Hạt tiêu đen", "Hạt tiêu trắng", "Hạt tiêu xanh"],
      certifications: ["ISO 9001", "HACCP", "Organic", "Fair Trade"],
      capacity: "80,000 tấn/năm",
      exportMarkets: ["Mỹ", "EU", "Ấn Độ", "UAE"],
      contact: {
        phone: "0251 456 7890",
        email: "pepper@olamvietnam.com",
        website: "www.olamvietnam.com"
      },
      rating: 4.9,
      verified: true
    },
    {
      id: 6,
      name: "Công ty TNHH Xoài Cao Lãnh",
      category: "Xoài",
      location: "Đồng Tháp",
      description: "Chuyên xuất khẩu xoài tươi các loại, đặc biệt là xoài cát Hòa Lộc đến các thị trường khó tính",
      products: ["Xoài cát Hòa Lộc", "Xoài Đài Loan", "Xoài Úc"],
      certifications: ["VietGAP", "GlobalGAP", "USDA Organic"],
      capacity: "8,000 tấn/năm",
      exportMarkets: ["Mỹ", "Nhật Bản", "Hàn Quốc", "Australia"],
      contact: {
        phone: "0277 567 8901",
        email: "export@caolanhmango.vn",
        website: "www.caolanhmango.vn"
      },
      rating: 4.7,
      verified: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">{t('suppliers.heroTitle')}</h1>
              <p className="text-muted-foreground">{t('suppliers.heroDesc')}</p>
            </div>
            <Button variant="outline" onClick={() => window.location.href = '/'}>
              <Home className="h-4 w-4 mr-2" />
              {t('common.backHome')}
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold text-primary">200+</CardTitle>
              <CardDescription>{t('suppliers.statsVerified')}</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold text-primary">50+</CardTitle>
              <CardDescription>{t('suppliers.statsMarkets')}</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold text-primary">500K+</CardTitle>
              <CardDescription>{t('suppliers.statsTons')}</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold text-primary">100%</CardTitle>
              <CardDescription>{t('suppliers.statsQuality')}</CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Suppliers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {suppliers.map((supplier) => (
            <Card key={supplier.id} className="hover:shadow-elegant transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <CardTitle className="text-xl">{supplier.name}</CardTitle>
                      {supplier.verified && (
                        <Badge variant="default" className="bg-primary">
                          <CheckCircle2 className="h-3 w-3 mr-1" />
                          {t('suppliers.verified')}
                        </Badge>
                      )}
                    </div>
                    <CardDescription className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {supplier.location} • {supplier.category}
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-yellow-500">
                      <TrendingUp className="h-4 w-4" />
                      <span className="font-bold">{supplier.rating}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{supplier.description}</p>
                
                {/* Products */}
                <div>
                  <h4 className="text-sm font-semibold mb-2">{t('suppliers.mainProducts')}</h4>
                  <div className="flex flex-wrap gap-2">
                    {supplier.products.map((product, idx) => (
                      <Badge key={idx} variant="secondary">{product}</Badge>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                <div>
                  <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                    <Award className="h-4 w-4" />
                    {t('suppliers.certifications')}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {supplier.certifications.map((cert, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">{cert}</Badge>
                    ))}
                  </div>
                </div>

                {/* Capacity & Markets */}
                <div className="grid grid-cols-2 gap-4 pt-2 border-t">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">{t('suppliers.capacity')}</p>
                    <p className="text-sm font-medium">{supplier.capacity}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">{t('suppliers.markets')}</p>
                    <p className="text-sm font-medium">{supplier.exportMarkets.join(", ")}</p>
                  </div>
                </div>

                {/* Contact */}
                <div className="pt-2 border-t space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>{supplier.contact.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span>{supplier.contact.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Globe className="h-4 w-4 text-muted-foreground" />
                    <span>{supplier.contact.website}</span>
                  </div>
                </div>

                <Button className="w-full">{t('suppliers.contactSupplier')}</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <Card className="mt-8 bg-gradient-primary">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">{t('suppliers.ctaTitle')}</h3>
            <p className="text-primary-foreground/90 mb-6">{t('suppliers.ctaDesc')}</p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">{t('suppliers.ctaButton')}</Button>
          </CardContent>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
};

export default Suppliers;