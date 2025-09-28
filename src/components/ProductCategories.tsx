import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Leaf, Coffee, TreePine, ArrowRight } from "lucide-react";

const ProductCategories = () => {
  const categories = [
    {
      id: "tea",
      title: "Trà Việt Nam",
      description: "Trà xanh, trà ô long, trà đặc sản từ các vùng trồng nổi tiếng",
      icon: Leaf,
      color: "tea",
      products: "2,500+ sản phẩm",
      regions: "Thái Nguyên, Lâm Đồng, Phú Thọ",
      price: "50,000 - 2,000,000 VNĐ/kg",
      image: "🍃"
    },
    {
      id: "cashew",
      title: "Hạt Điều",
      description: "Hạt điều nguyên liệu và chế biến từ Bình Phước, Đồng Nai",
      icon: Coffee,
      color: "cashew", 
      products: "1,200+ sản phẩm",
      regions: "Bình Phước, Đồng Nai, Gia Lai",
      price: "200,000 - 800,000 VNĐ/kg",
      image: "🥜"
    },
    {
      id: "durian",
      title: "Sầu Riêng",
      description: "Sầu riêng tươi và đông lạnh xuất khẩu chất lượng cao",
      icon: TreePine,
      color: "durian",
      products: "800+ sản phẩm", 
      regions: "Đắk Lắk, Tiền Giang, Đồng Tháp",
      price: "80,000 - 300,000 VNĐ/kg",
      image: "🌰"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Danh mục sản phẩm chủ lực
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Khám phá các sản phẩm nông sản Việt Nam chất lượng cao, 
            được chứng nhận an toàn và có thể truy xuất nguồn gốc
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card key={category.id} className="group hover:shadow-organic transition-all duration-300 hover:-translate-y-1 border-0 shadow-card">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 relative">
                    <div className={`w-20 h-20 rounded-2xl bg-${category.color}/10 flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-4xl">{category.image}</span>
                    </div>
                    <Badge 
                      variant="secondary" 
                      className={`absolute -top-2 -right-2 bg-${category.color}/20 text-${category.color} border-${category.color}/30`}
                    >
                      Hot
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
                      <span className="text-muted-foreground">Sản phẩm:</span>
                      <span className="font-medium text-foreground">{category.products}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">Vùng trồng:</span>
                      <span className="font-medium text-foreground text-right">{category.regions}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">Giá từ:</span>
                      <span className="font-bold text-primary">{category.price}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Button 
                      className="w-full bg-gradient-primary hover:bg-primary-hover group"
                      onClick={() => window.location.href = `/products/${category.id}`}
                    >
                      Xem sản phẩm
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full border-border hover:bg-accent/10"
                      onClick={() => window.location.href = `/auction?category=${category.id}`}
                    >
                      Tham gia đấu giá
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
            <h3 className="text-2xl font-bold mb-2">Nhiều sản phẩm khác</h3>
            <p className="mb-4 opacity-90">Cà phê, gạo, tiêu, quế và hơn 50 loại nông sản khác</p>
            <Button variant="secondary" className="bg-white text-accent-foreground hover:bg-white/90">
              Khám phá tất cả
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;