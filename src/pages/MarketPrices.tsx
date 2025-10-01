import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Minus, Home, MapPin, Calendar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslation } from "react-i18next";

const MarketPrices = () => {
  const { t, i18n } = useTranslation();
  const marketData = [
    {
      product: "Cà phê Robusta",
      currentPrice: 95500,
      change: 2.5,
      volume: "1,250 tấn",
      high: 96200,
      low: 94800,
      region: "Đắk Lắk",
      unit: "VNĐ/kg",
      forecast: "tăng"
    },
    {
      product: "Cà phê Arabica",
      currentPrice: 125000,
      change: 1.8,
      volume: "450 tấn",
      high: 126500,
      low: 123000,
      region: "Lâm Đồng",
      unit: "VNĐ/kg",
      forecast: "tăng"
    },
    {
      product: "Hạt điều W240",
      currentPrice: 185000,
      change: -1.2,
      volume: "800 tấn",
      high: 188000,
      low: 184000,
      region: "Bình Phước",
      unit: "VNĐ/kg",
      forecast: "ổn định"
    },
    {
      product: "Hạt điều W320",
      currentPrice: 175000,
      change: -0.8,
      volume: "950 tấn",
      high: 177000,
      low: 173500,
      region: "Bình Phước",
      unit: "VNĐ/kg",
      forecast: "giảm"
    },
    {
      product: "Trà xanh",
      currentPrice: 85000,
      change: 0.5,
      volume: "350 tấn",
      high: 87000,
      low: 84000,
      region: "Thái Nguyên",
      unit: "VNĐ/kg",
      forecast: "ổn định"
    },
    {
      product: "Trà Oolong",
      currentPrice: 120000,
      change: 1.2,
      volume: "200 tấn",
      high: 122000,
      low: 118000,
      region: "Lâm Đồng",
      unit: "VNĐ/kg",
      forecast: "tăng"
    },
    {
      product: "Sầu riêng Ri6",
      currentPrice: 75000,
      change: 5.2,
      volume: "2,100 tấn",
      high: 78000,
      low: 71000,
      region: "Đồng Tháp",
      unit: "VNĐ/kg",
      forecast: "tăng mạnh"
    },
    {
      product: "Sầu riêng Monthong",
      currentPrice: 65000,
      change: 4.8,
      volume: "1,800 tấn",
      high: 67000,
      low: 62000,
      region: "Tiền Giang",
      unit: "VNĐ/kg",
      forecast: "tăng"
    },
    {
      product: "Xoài cát Hòa Lộc",
      currentPrice: 45000,
      change: -2.1,
      volume: "1,500 tấn",
      high: 47000,
      low: 43000,
      region: "Đồng Tháp",
      unit: "VNĐ/kg",
      forecast: "giảm"
    },
    {
      product: "Xoài Đài Loan",
      currentPrice: 38000,
      change: -1.5,
      volume: "1,200 tấn",
      high: 39500,
      low: 37000,
      region: "Đồng Nai",
      unit: "VNĐ/kg",
      forecast: "giảm"
    },
    {
      product: "Hạt tiêu đen",
      currentPrice: 145000,
      change: 0.3,
      volume: "650 tấn",
      high: 147000,
      low: 143000,
      region: "Đồng Nai",
      unit: "VNĐ/kg",
      forecast: "ổn định"
    },
    {
      product: "Hạt tiêu trắng",
      currentPrice: 195000,
      change: 0.8,
      volume: "380 tấn",
      high: 198000,
      low: 192000,
      region: "Bà Rịa-Vũng Tàu",
      unit: "VNĐ/kg",
      forecast: "ổn định"
    }
  ];

  const regionalTrends = {
    north: [
      {
        province: "Thái Nguyên",
        famousProduct: "Trà xanh Tân Cương",
        trend: "Tăng 12% so với cùng kỳ",
        season: "Vụ chính: Tháng 3-5",
        area: "15,000 ha"
      },
      {
        province: "Hòa Bình",
        famousProduct: "Xoài Yên Bái",
        trend: "Ổn định",
        season: "Vụ chính: Tháng 5-7",
        area: "3,500 ha"
      },
      {
        province: "Sơn La",
        famousProduct: "Mận Mộc Châu",
        trend: "Tăng 8% so với cùng kỳ",
        season: "Vụ chính: Tháng 6-8",
        area: "4,200 ha"
      }
    ],
    south: [
      {
        province: "Đắk Lắk",
        famousProduct: "Cà phê Robusta",
        trend: "Tăng 15% so với cùng kỳ",
        season: "Vụ chính: Tháng 10-3",
        area: "210,000 ha"
      },
      {
        province: "Bình Phước",
        famousProduct: "Hạt điều",
        trend: "Giảm 5% so với cùng kỳ",
        season: "Vụ chính: Tháng 2-4",
        area: "180,000 ha"
      },
      {
        province: "Đồng Tháp",
        famousProduct: "Sầu riêng, Xoài cát",
        trend: "Tăng mạnh 25% so với cùng kỳ",
        season: "Sầu riêng: T4-8, Xoài: T1-5",
        area: "45,000 ha"
      },
      {
        province: "Tiền Giang",
        famousProduct: "Sầu riêng, Thanh long",
        trend: "Tăng 18% so với cùng kỳ",
        season: "Quanh năm",
        area: "52,000 ha"
      },
      {
        province: "Đồng Nai",
        famousProduct: "Hạt tiêu",
        trend: "Ổn định",
        season: "Vụ chính: Tháng 3-6",
        area: "28,000 ha"
      },
      {
        province: "Lâm Đồng",
        famousProduct: "Cà phê Arabica, Trà",
        trend: "Tăng 10% so với cùng kỳ",
        season: "Cà phê: T11-3, Trà: Quanh năm",
        area: "95,000 ha"
      }
    ]
  };

  const getTrendIcon = (change: number) => {
    if (change > 0) return <TrendingUp className="h-4 w-4 text-green-600" />;
    if (change < 0) return <TrendingDown className="h-4 w-4 text-red-600" />;
    return <Minus className="h-4 w-4 text-gray-600" />;
  };

  const getTrendColor = (change: number) => {
    if (change > 0) return "text-green-600";
    if (change < 0) return "text-red-600";
    return "text-gray-600";
  };

  const getForecastBadge = (forecast: string) => {
    if (forecast.includes("tăng")) return <Badge className="bg-green-100 text-green-700">{forecast}</Badge>;
    if (forecast.includes("giảm")) return <Badge className="bg-red-100 text-red-700">{forecast}</Badge>;
    return <Badge variant="secondary">{forecast}</Badge>;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">{t('market.heroTitle')}</h1>
              <p className="text-muted-foreground flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {t('market.updatedAt')} {new Date().toLocaleString(i18n.language === 'vi' ? 'vi-VN' : i18n.language === 'zh' ? 'zh-CN' : 'en-US')}
              </p>
            </div>
            <Button variant="outline" onClick={() => window.location.href = '/'}>
              <Home className="h-4 w-4 mr-2" />
              {t('common.backHome')}
            </Button>
          </div>
        </div>

        {/* Market Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold text-green-700">8/12</CardTitle>
              <CardDescription className="text-green-600">Mặt hàng tăng giá</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold text-red-700">3/12</CardTitle>
              <CardDescription className="text-red-600">Mặt hàng giảm giá</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold text-blue-700">1/12</CardTitle>
              <CardDescription className="text-blue-600">Mặt hàng ổn định</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold text-purple-700">12,860</CardTitle>
              <CardDescription className="text-purple-600">Tổng khối lượng (tấn)</CardDescription>
            </CardHeader>
          </Card>
        </div>

        <Tabs defaultValue="prices" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="prices">{t('market.tabPrices')}</TabsTrigger>
            <TabsTrigger value="north">{t('market.tabNorth')}</TabsTrigger>
            <TabsTrigger value="south">{t('market.tabSouth')}</TabsTrigger>
          </TabsList>

          {/* Price Table */}
          <TabsContent value="prices">
            <Card>
              <CardHeader>
                <CardTitle>{t('market.tabPrices')}</CardTitle>
                <CardDescription>{t('market.legend.note')}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b bg-muted/50">
                        <th className="text-left p-3 font-semibold">{t('market.table.product')}</th>
                        <th className="text-left p-3 font-semibold">{t('market.table.region')}</th>
                        <th className="text-right p-3 font-semibold">{t('market.table.currentPrice')}</th>
                        <th className="text-right p-3 font-semibold">{t('market.table.highest')}</th>
                        <th className="text-right p-3 font-semibold">{t('market.table.lowest')}</th>
                        <th className="text-right p-3 font-semibold">{t('market.table.volume')}</th>
                        <th className="text-center p-3 font-semibold">{t('market.table.change')}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {marketData.map((item, idx) => (
                        <tr key={idx} className="border-b hover:bg-muted/30 transition-colors">
                          <td className="p-3">
                            <div className="font-medium">{item.product}</div>
                            <div className="text-xs text-muted-foreground">{item.unit}</div>
                          </td>
                          <td className="p-3">
                            <div className="flex items-center gap-1 text-sm">
                              <MapPin className="h-3 w-3 text-muted-foreground" />
                              {item.region}
                            </div>
                          </td>
                          <td className="p-3 text-right">
                            <div className="font-bold text-lg">
                              {item.currentPrice.toLocaleString(i18n.language === 'vi' ? 'vi-VN' : i18n.language === 'zh' ? 'zh-CN' : 'en-US')}
                            </div>
                          </td>
                          <td className="p-3 text-right text-sm text-green-600">
                            {item.high.toLocaleString(i18n.language === 'vi' ? 'vi-VN' : i18n.language === 'zh' ? 'zh-CN' : 'en-US')}
                          </td>
                          <td className="p-3 text-right text-sm text-red-600">
                            {item.low.toLocaleString(i18n.language === 'vi' ? 'vi-VN' : i18n.language === 'zh' ? 'zh-CN' : 'en-US')}
                          </td>
                          <td className="p-3 text-right text-sm">
                            {item.volume}
                          </td>
                          <td className="p-3">
                            <div className={`flex items-center justify-center gap-1 font-semibold ${getTrendColor(item.change)}`}>
                              {getTrendIcon(item.change)}
                              <span>{Math.abs(item.change)}%</span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Legend */}
            <Card className="mt-6 bg-muted/50">
              <CardContent className="p-6">
                <div className="flex flex-wrap items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    <span>{t('market.legend.up')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingDown className="h-4 w-4 text-red-600" />
                    <span>{t('market.legend.down')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Minus className="h-4 w-4 text-gray-600" />
                    <span>{t('market.legend.stable')}</span>
                  </div>
                  <div className="text-muted-foreground ml-auto">
                    {t('market.legend.note')}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* North Region */}
          <TabsContent value="north">
            <Card>
              <CardHeader>
                <CardTitle>{t('market.northTitle')}</CardTitle>
                <CardDescription>{t('market.northDesc')}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {regionalTrends.north.map((region, idx) => (
                    <Card key={idx} className="border-2 hover:border-primary transition-colors">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-lg flex items-center gap-2">
                              <MapPin className="h-5 w-5 text-primary" />
                              {region.province}
                            </CardTitle>
                            <CardDescription className="mt-1">
                              {region.famousProduct}
                            </CardDescription>
                          </div>
                          {region.trend.toLowerCase().includes("tăng") ? (
                            <Badge className="bg-green-100 text-green-700">
                              <TrendingUp className="h-3 w-3 mr-1" />
                              {region.trend}
                            </Badge>
                          ) : (
                            <Badge variant="secondary">{region.trend}</Badge>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-muted-foreground mb-1">{t('market.season')}</p>
                            <p className="font-medium">{region.season}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground mb-1">{t('market.area')}</p>
                            <p className="font-medium">{region.area}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* South Region */}
          <TabsContent value="south">
            <Card>
              <CardHeader>
                <CardTitle>{t('market.southTitle')}</CardTitle>
                <CardDescription>{t('market.southDesc')}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {regionalTrends.south.map((region, idx) => (
                    <Card key={idx} className="border-2 hover:border-primary transition-colors">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-lg flex items-center gap-2">
                              <MapPin className="h-5 w-5 text-primary" />
                              {region.province}
                            </CardTitle>
                            <CardDescription className="mt-1">
                              {region.famousProduct}
                            </CardDescription>
                          </div>
                          {region.trend.toLowerCase().includes("tăng") ? (
                            <Badge className="bg-green-100 text-green-700">
                              <TrendingUp className="h-3 w-3 mr-1" />
                              {region.trend}
                            </Badge>
                          ) : region.trend.toLowerCase().includes("giảm") ? (
                            <Badge className="bg-red-100 text-red-700">
                              <TrendingDown className="h-3 w-3 mr-1" />
                              {region.trend}
                            </Badge>
                          ) : (
                            <Badge variant="secondary">{region.trend}</Badge>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-muted-foreground mb-1">{t('market.season')}</p>
                            <p className="font-medium">{region.season}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground mb-1">{t('market.area')}</p>
                            <p className="font-medium">{region.area}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Newsletter CTA */}
          <Card className="mt-8 bg-gradient-primary">
          <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">{t('market.newsletterTitle')}</h3>
              <p className="text-primary-foreground/90 mb-6">{t('market.newsletterDesc')}</p>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">{t('market.subscribe')}</Button>
          </CardContent>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
};

export default MarketPrices;