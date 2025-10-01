import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import categoryTea from "@/assets/category-tea.jpg";
import categoryCashew from "@/assets/category-cashew.jpg";
import categoryDurian from "@/assets/category-durian.jpg";

const ProductCategories = () => {
  const { t } = useTranslation();
  const categories = [
    {
      id: "tea",
      title: "Trà Việt Nam",
      description: t("categories.teaDesc", { defaultValue: "Trà xanh, trà ô long, trà đặc sản từ các vùng trồng nổi tiếng" }),
      color: "tea",
      products: t("categories.teaProducts", { defaultValue: "2,500+ sản phẩm" }),
      regions: t("categories.teaRegions", { defaultValue: "Thái Nguyên, Lâm Đồng, Phú Thọ" }),
      price: t("categories.teaPrice", { defaultValue: "50,000 - 2,000,000 VNĐ/kg" }),
      image: categoryTea
    },
    {
      id: "cashew",
      title: "Hạt Điều",
      description: t("categories.cashewDesc", { defaultValue: "Hạt điều nguyên liệu và chế biến từ Bình Phước, Đồng Nai" }),
      color: "cashew", 
      products: t("categories.cashewProducts", { defaultValue: "1,200+ sản phẩm" }),
      regions: t("categories.cashewRegions", { defaultValue: "Bình Phước, Đồng Nai, Gia Lai" }),
      price: t("categories.cashewPrice", { defaultValue: "200,000 - 800,000 VNĐ/kg" }),
      image: categoryCashew
    },
    {
      id: "durian",
      title: "Sầu Riêng",
      description: t("categories.durianDesc", { defaultValue: "Sầu riêng tươi và đông lạnh xuất khẩu chất lượng cao" }),
      color: "durian",
      products: t("categories.durianProducts", { defaultValue: "800+ sản phẩm" }), 
      regions: t("categories.durianRegions", { defaultValue: "Đắk Lắk, Tiền Giang, Đồng Tháp" }),
      price: t("categories.durianPrice", { defaultValue: "80,000 - 300,000 VNĐ/kg" }),
      image: categoryDurian
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            {t("categories.sectionTitle")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("categories.sectionDesc")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category) => {
            return (
              <Card key={category.id} className="group hover:shadow-organic transition-all duration-300 hover:-translate-y-1 border-0 shadow-card">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 relative">
                    <div className="w-32 h-32 rounded-2xl overflow-hidden mb-3 mx-auto group-hover:scale-105 transition-transform duration-300 shadow-md">
                      <img src={category.image} alt={category.title} className="w-full h-full object-cover" />
                    </div>
                    <Badge 
                      variant="secondary" 
                      className={`absolute -top-2 -right-2 bg-${category.color}/20 text-${category.color} border-${category.color}/30`}
                    >
                      {t("common.hot")}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {category.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm">
                    {category.description}
                  </p>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">{t("categories.labelProducts")}</span>
                      <span className="font-medium text-foreground">{category.products}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">{t("categories.labelRegions")}</span>
                      <span className="font-medium text-foreground text-right">{category.regions}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">{t("categories.labelPrice")}</span>
                      <span className="font-bold text-primary">{category.price}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Button 
                      className="w-full bg-gradient-primary hover:bg-primary-hover group"
                      onClick={() => window.location.href = `/products/${category.id}`}
                    >
                      {t("categories.viewProducts")}
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full border-border hover:bg-accent/10"
                      onClick={() => window.location.href = `/auction?category=${category.id}`}
                    >
                      {t("hero.ctaAuction")}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional categories banner */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-harvest text-accent-foreground rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-2">{t("categories.moreTitle")}</h3>
            <p className="mb-4 opacity-90">{t("categories.moreDesc")}</p>
            <Button variant="secondary" className="bg-white text-accent-foreground hover:bg-white/90">
              {t("categories.exploreAll")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;