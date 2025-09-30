import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Ship, Plane, Truck, Package, FileText, Globe, DollarSign, Clock, Home, Anchor, Phone, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslation } from "react-i18next";

const ExportServices = () => {
  const { t } = useTranslation();
  const shippingMethods = [
    {
      icon: Ship,
      name: "Đường biển (FCL)",
      description: "Container nguyên 20ft/40ft",
      duration: "20-35 ngày",
      cost: "$1,500 - $3,500",
      suitable: "Hàng khối lượng lớn, không cấp thiết",
      advantages: ["Chi phí thấp nhất", "Phù hợp hàng lớn", "An toàn cao"]
    },
    {
      icon: Ship,
      name: "Đường biển (LCL)",
      description: "Gom hàng lẻ",
      duration: "25-40 ngày",
      cost: "$100 - $200/m³",
      suitable: "Hàng nhỏ lẻ, không đủ container",
      advantages: ["Linh hoạt số lượng", "Tiết kiệm hơn air", "Nhiều chuyến"]
    },
    {
      icon: Plane,
      name: "Đường hàng không",
      description: "Vận chuyển bằng máy bay",
      duration: "3-7 ngày",
      cost: "$4 - $8/kg",
      suitable: "Hàng tươi sống, cao cấp, cấp thiết",
      advantages: ["Nhanh nhất", "An toàn cao", "Ít rủi ro"]
    },
    {
      icon: Truck,
      name: "Đường bộ",
      description: "Vận chuyển qua biên giới",
      duration: "2-5 ngày",
      cost: "$500 - $1,500",
      suitable: "Xuất sang Trung Quốc, Lào, Campuchia",
      advantages: ["Nhanh chóng", "Linh hoạt", "Chi phí hợp lý"]
    }
  ];

  const exportCountries = [
    {
      region: "Châu Á - Thái Bình Dương",
      countries: [
        { name: "Trung Quốc", products: "Sầu riêng, Thanh long, Cà phê", growth: "+35%" },
        { name: "Nhật Bản", products: "Trà, Hạt điều, Xoài", growth: "+18%" },
        { name: "Hàn Quốc", products: "Cà phê, Trái cây nhiệt đới", growth: "+22%" },
        { name: "Đài Loan", products: "Trà, Hạt tiêu", growth: "+15%" },
        { name: "Singapore", products: "Trái cây, Rau củ", growth: "+12%" },
        { name: "Thái Lan", products: "Gạo, Hạt điều", growth: "+8%" }
      ]
    },
    {
      region: "Châu Âu",
      countries: [
        { name: "Đức", products: "Cà phê, Hạt điều, Hạt tiêu", growth: "+10%" },
        { name: "Hà Lan", products: "Cà phê, Hạt điều", growth: "+12%" },
        { name: "Pháp", products: "Trà, Cà phê", growth: "+9%" },
        { name: "Bỉ", products: "Hạt điều", growth: "+7%" },
        { name: "Ý", products: "Cà phê, Trà", growth: "+11%" }
      ]
    },
    {
      region: "Bắc Mỹ",
      countries: [
        { name: "Mỹ", products: "Cà phê, Hạt điều, Hạt tiêu", growth: "+14%" },
        { name: "Canada", products: "Cà phê, Trà", growth: "+10%" }
      ]
    },
    {
      region: "Trung Đông",
      countries: [
        { name: "UAE", products: "Gạo, Hạt tiêu", growth: "+20%" },
        { name: "Saudi Arabia", products: "Gạo, Cà phê", growth: "+16%" }
      ]
    }
  ];

  const shippingCompanies = [
    {
      name: "Maersk Line",
      type: "Hãng tàu quốc tế",
      routes: "Việt Nam - EU, US, Asia",
      contact: "www.maersk.com.vn",
      rating: 4.8
    },
    {
      name: "MSC (Mediterranean Shipping)",
      type: "Hãng tàu quốc tế",
      routes: "Toàn cầu",
      contact: "www.msc.com",
      rating: 4.7
    },
    {
      name: "CMA CGM",
      type: "Hãng tàu quốc tế",
      routes: "Việt Nam - EU, Africa, Americas",
      contact: "www.cma-cgm.com.vn",
      rating: 4.6
    },
    {
      name: "ONE (Ocean Network Express)",
      type: "Hãng tàu quốc tế",
      routes: "Intra-Asia, Trans-Pacific",
      contact: "www.one-line.com",
      rating: 4.5
    },
    {
      name: "Gemadept Logistics",
      type: "Logistics Việt Nam",
      routes: "Logistics toàn diện",
      contact: "www.gemadept.com",
      rating: 4.7
    },
    {
      name: "Vietranstimex (Vinatex)",
      type: "Logistics Việt Nam",
      routes: "Xuất nhập khẩu, kho bãi",
      contact: "www.vietranstimex.com.vn",
      rating: 4.6
    }
  ];

  const thirdPartyServices = [
    {
      name: "Công ty TNHH Logistics Quốc tế Sài Gòn",
      services: ["Khai báo hải quan", "Vận tải đa phương thức", "Kho bãi", "Đóng gói"],
      specialization: "Nông sản tươi sống",
      phone: "028 1234 5678",
      email: "export@sglogistics.vn"
    },
    {
      name: "Vinalink Logistics",
      services: ["Freight forwarding", "Customs clearance", "Insurance", "Documentation"],
      specialization: "Xuất khẩu nông sản khô",
      phone: "024 2345 6789",
      email: "info@vinalink.com.vn"
    },
    {
      name: "DHL Global Forwarding Vietnam",
      services: ["Air freight", "Ocean freight", "Road transport", "Warehousing"],
      specialization: "Express & Premium cargo",
      phone: "1900 2255",
      email: "dhlgf.vn@dhl.com"
    },
    {
      name: "Công ty Xuất nhập khẩu Nông sản Việt",
      services: ["Tư vấn xuất khẩu", "Tìm kiếm thị trường", "Chứng từ C/O", "Phytosanitary"],
      specialization: "Trái cây tươi & chế biến",
      phone: "028 3456 7890",
      email: "export@vietagnex.vn"
    }
  ];

  const documents = [
    { name: "Hóa đơn thương mại (Commercial Invoice)", required: true },
    { name: "Phiếu đóng gói (Packing List)", required: true },
    { name: "Vận đơn (Bill of Lading - B/L)", required: true },
    { name: "Giấy chứng nhận xuất xứ (C/O)", required: true },
    { name: "Giấy chứng nhận kiểm dịch thực vật", required: true },
    { name: "Giấy chứng nhận chất lượng", required: false },
    { name: "Giấy chứng nhận vệ sinh an toàn thực phẩm", required: false },
    { name: "Hợp đồng mua bán", required: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">{t('export.heroTitle')}</h1>
              <p className="text-muted-foreground">{t('export.heroDesc')}</p>
            </div>
            <Button variant="outline" onClick={() => window.location.href = '/'}>
              <Home className="h-4 w-4 mr-2" />
              {t('common.backHome')}
            </Button>
          </div>
        </div>

        <Tabs defaultValue="shipping" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="shipping">{t('export.tabShipping')}</TabsTrigger>
            <TabsTrigger value="markets">{t('export.tabMarkets')}</TabsTrigger>
            <TabsTrigger value="partners">{t('export.tabPartners')}</TabsTrigger>
            <TabsTrigger value="services">{t('export.tabServices')}</TabsTrigger>
          </TabsList>

          {/* Shipping Methods */}
          <TabsContent value="shipping" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{t('export.shippingTitle')}</CardTitle>
                <CardDescription>{t('export.shippingDesc')}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {shippingMethods.map((method, idx) => {
                    const IconComponent = method.icon;
                    return (
                      <Card key={idx} className="border-2">
                        <CardHeader>
                          <div className="flex items-start gap-4">
                            <div className="p-3 bg-primary/10 rounded-lg">
                              <IconComponent className="h-6 w-6 text-primary" />
                            </div>
                            <div className="flex-1">
                              <CardTitle className="text-lg">{method.name}</CardTitle>
                              <CardDescription>{method.description}</CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                                <Clock className="h-4 w-4" />
                                {t('export.labelTime')}
                              </div>
                              <p className="font-semibold">{method.duration}</p>
                            </div>
                            <div>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                                <DollarSign className="h-4 w-4" />
                                {t('export.labelCost')}
                              </div>
                              <p className="font-semibold">{method.cost}</p>
                            </div>
                          </div>
                          
                          <div>
                            <p className="text-sm font-medium mb-2">{t('export.labelSuitable')}</p>
                            <p className="text-sm text-muted-foreground">{method.suitable}</p>
                          </div>

                          <div>
                            <p className="text-sm font-medium mb-2">{t('export.labelAdvantages')}</p>
                            <ul className="space-y-1">
                              {method.advantages.map((adv, i) => (
                                <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                                  <Badge variant="secondary" className="h-1.5 w-1.5 p-0 rounded-full" />
                                  {adv}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>

                {/* Additional costs */}
                <Card className="mt-6 bg-muted/50">
                  <CardHeader>
                    <CardTitle className="text-base">{t('export.extraCostsTitle')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="font-medium mb-1">{t('export.extraCustoms')}</p>
                        <p className="text-muted-foreground">1-3% giá trị hàng</p>
                      </div>
                      <div>
                        <p className="font-medium mb-1">{t('export.extraInsurance')}</p>
                        <p className="text-muted-foreground">0.5-1% giá trị hàng</p>
                      </div>
                      <div>
                        <p className="font-medium mb-1">{t('export.extraDocumentation')}</p>
                        <p className="text-muted-foreground">$100-300</p>
                      </div>
                      <div>
                        <p className="font-medium mb-1">{t('export.extraPhytosanitary')}</p>
                        <p className="text-muted-foreground">$50-200</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>

            {/* Required Documents */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  {t('export.documentsTitle')}
                </CardTitle>
                <CardDescription>{t('export.documentsDesc')}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {documents.map((doc, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 border rounded-lg">
                      <Package className="h-5 w-5 text-primary flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">{doc.name}</p>
                      </div>
                      {doc.required ? (
                        <Badge variant="destructive" className="text-xs">{t('export.required')}</Badge>
                      ) : (
                        <Badge variant="secondary" className="text-xs">{t('export.optional')}</Badge>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Export Markets */}
          <TabsContent value="markets" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  {t('export.marketsTitle')}
                </CardTitle>
                <CardDescription>{t('export.marketsDesc')}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {exportCountries.map((region, idx) => (
                  <div key={idx}>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Badge variant="default">{region.region}</Badge>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {region.countries.map((country, cidx) => (
                        <Card key={cidx} className="border-2 hover:border-primary transition-colors">
                          <CardHeader className="pb-3">
                            <div className="flex items-start justify-between">
                              <CardTitle className="text-base">{country.name}</CardTitle>
                              <Badge variant="secondary" className="bg-green-100 text-green-700">
                                {country.growth}
                              </Badge>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground">
                              <span className="font-medium">{t('export.labelProducts')}</span> {country.products}
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Shipping Companies */}
          <TabsContent value="partners" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Anchor className="h-5 w-5" />
                  {t('export.partnersTitle')}
                </CardTitle>
                <CardDescription>{t('export.partnersDesc')}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {shippingCompanies.map((company, idx) => (
                    <Card key={idx} className="border-2">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-lg">{company.name}</CardTitle>
                            <CardDescription>{company.type}</CardDescription>
                          </div>
                          <div className="flex items-center gap-1 text-yellow-500">
                            <span className="text-sm font-bold">{company.rating}</span>
                            <span className="text-xs">★</span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Routes</p>
                          <p className="text-sm font-medium">{company.routes}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Website</p>
                          <p className="text-sm font-medium text-primary">{company.contact}</p>
                        </div>
                        <Button className="w-full" size="sm">{t('export.requestQuote')}</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Third Party Services */}
          <TabsContent value="services" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{t('export.servicesTitle')}</CardTitle>
                <CardDescription>{t('export.servicesDesc')}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {thirdPartyServices.map((service, idx) => (
                    <Card key={idx} className="border-2">
                      <CardHeader>
                        <CardTitle className="text-lg">{service.name}</CardTitle>
                        <CardDescription>
                          <Badge variant="secondary">{service.specialization}</Badge>
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <p className="text-sm font-medium mb-2">{t('export.servicesLabel')}</p>
                          <div className="flex flex-wrap gap-2">
                            {service.services.map((s, i) => (
                              <Badge key={i} variant="outline" className="text-xs">{s}</Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div className="space-y-2 pt-2 border-t">
                          <div className="flex items-center gap-2 text-sm">
                            <Phone className="h-4 w-4 text-muted-foreground" />
                            <span>{service.phone}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Mail className="h-4 w-4 text-muted-foreground" />
                            <span>{service.email}</span>
                          </div>
                        </div>

                        <Button className="w-full">{t('export.contactConsult')}</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Process */}
            <Card className="bg-gradient-primary">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary-foreground mb-6 text-center">{t('export.processTitle')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {[
                    { step: "1", title: t('export.step1'), desc: t('export.step1Desc') },
                    { step: "2", title: t('export.step2'), desc: t('export.step2Desc') },
                    { step: "3", title: t('export.step3'), desc: t('export.step3Desc') },
                    { step: "4", title: t('export.step4'), desc: t('export.step4Desc') }
                  ].map((item, idx) => (
                    <div key={idx} className="text-center">
                      <div className="w-12 h-12 bg-white text-primary rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-3">
                        {item.step}
                      </div>
                      <h4 className="font-bold text-primary-foreground mb-2">{item.title}</h4>
                      <p className="text-sm text-primary-foreground/80">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-8">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90">{t('export.freeConsultation')}</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

export default ExportServices;