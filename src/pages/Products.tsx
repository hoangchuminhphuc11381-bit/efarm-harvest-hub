import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Leaf, TreePine, Coffee as CoffeeIcon } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import productTea from "@/assets/product-tea.jpg";
import productCashew from "@/assets/product-cashew.jpg";
import productDurian from "@/assets/product-durian.jpg";

const Products = () => {
  const products = [
    {
      id: "tea",
      title: "Trà Xanh Búp Nõn Cao Nguyên Mộc Châu - Vụ Xuân",
      description: "Trà được hái theo chuẩn 1 tôm và 2 lá non, chế biến theo phương pháp thủ công, đảm bảo giữ nguyên hương vị thanh khiết tự nhiên.",
      image: productTea,
      icon: Leaf,
      origin: "Tiểu khu 3, Thị trấn Nông Trường Mộc Châu, Sơn La",
      startingPrice: "85.000 VNĐ/kg",
      quantity: "550 kg",
      unit: "Đóng trong bao PE, mỗi bao 25 kg. Tổng cộng 22 bao",
      humidity: "Đảm bảo dưới 5% (Tiêu chuẩn lưu kho)",
      harvestTime: "Thu hoạch và chế biến trong tuần đầu tiên của tháng 4 năm nay",
      certification: "Chứng nhận VietGAP cho vùng nguyên liệu",
      quality: "Hương thơm cốm non nhẹ nhàng, vị chát dịu, hậu ngọt sâu. Đã qua khâu sấy khô."
    },
    {
      id: "cashew",
      title: "Hạt Điều Thô (Vỏ cứng) Loại A",
      description: "Tỷ lệ thu hồi nhân loại A dự kiến: 28-30%. Độ ẩm: 8-10%. Hạt điều nguyên vẹn.",
      image: productCashew,
      icon: TreePine,
      origin: "Tỉnh Bình Phước",
      startingPrice: "45.000 VNĐ/kg",
      quantity: "15 tấn",
      unit: "Đóng bao Jute/PP 80kg",
      harvestTime: "Giao hàng trong vòng 5 ngày sau khi kết thúc đấu giá",
      quality: "Hạt điều thô chất lượng cao, tỷ lệ thu hồi nhân cao"
    },
    {
      id: "durian",
      title: "Sầu Riêng Ri6 - Loại 1",
      description: "Sầu riêng cắt già, đảm bảo 80% độ chín. Trọng lượng trung bình: 3-4 kg/quả. Cam kết không nhúng thuốc, không sượng.",
      image: productDurian,
      icon: TreePine,
      origin: "Khu vực Tây Nguyên",
      startingPrice: "40.000 VNĐ/kg (Min)",
      quantity: "3.000 kg (3 tấn)",
      unit: "Bán nguyên quả, đóng thùng carton",
      harvestTime: "Thu hoạch và giao hàng trong khoảng 3 ngày tới",
      delivery: "Giao tại vườn (EXW) hoặc giao tại kho thương lái (DAP)",
      quality: "Sầu riêng chín tự nhiên, không chất bảo quản"
    },
    {
      id: "coffee",
      title: "Cà Phê Arabica Đắk Lắk",
      description: "Cà phê Arabica chất lượng cao từ cao nguyên Đắk Lắk, hương vị đậm đà đặc trưng.",
      image: productTea, // Temporary placeholder
      icon: CoffeeIcon,
      origin: "Đắk Lắk, Tây Nguyên",
      startingPrice: "120.000 VNĐ/kg",
      quantity: "2.000 kg",
      unit: "Đóng bao 60kg",
      harvestTime: "Vụ mùa từ tháng 10 đến tháng 2",
      quality: "Cà phê Arabica rang xay, độ ẩm chuẩn"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-harvest text-accent-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Sản Phẩm Nông Sản Việt Nam</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Khám phá các sản phẩm nông sản chất lượng cao từ các vùng trồng nổi tiếng của Việt Nam
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {products.map((product) => {
                const IconComponent = product.icon;
                return (
                  <Card key={product.id} className="group hover:shadow-organic transition-all duration-300 hover:-translate-y-1 border-0 shadow-card">
                    <div className="relative h-64 overflow-hidden rounded-t-lg">
                      <img 
                        src={product.image} 
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                        Đấu giá
                      </Badge>
                    </div>
                    
                    <CardHeader>
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-bold text-foreground mb-2">
                            {product.title}
                          </CardTitle>
                          <p className="text-muted-foreground text-sm">
                            {product.description}
                          </p>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <div className="space-y-3 mb-6">
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-muted-foreground">Xuất xứ:</span>
                          <span className="font-medium text-foreground text-right">{product.origin}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-muted-foreground">Số lượng:</span>
                          <span className="font-medium text-foreground">{product.quantity}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-muted-foreground">Giá khởi điểm:</span>
                          <span className="font-bold text-primary">{product.startingPrice}</span>
                        </div>
                        {product.unit && (
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-muted-foreground">Đơn vị:</span>
                            <span className="font-medium text-foreground text-right">{product.unit}</span>
                          </div>
                        )}
                        {product.harvestTime && (
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-muted-foreground">Thời gian:</span>
                            <span className="font-medium text-foreground text-right">{product.harvestTime}</span>
                          </div>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Button 
                          className="w-full bg-gradient-primary hover:bg-primary-hover group"
                          onClick={() => window.location.href = `/auction?product=${product.id}`}
                        >
                          Tham gia đấu giá
                          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button 
                          variant="outline" 
                          className="w-full border-border hover:bg-accent/10"
                          onClick={() => window.location.href = `/products/${product.id}`}
                        >
                          Xem chi tiết
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;