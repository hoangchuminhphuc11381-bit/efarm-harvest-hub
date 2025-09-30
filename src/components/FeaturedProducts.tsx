import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Award, Timer, Heart } from "lucide-react";
import productShowcase from "@/assets/product-showcase.jpg";
import productCashew from "@/assets/product-cashew.jpg";
import productDurian from "@/assets/product-durian.jpg";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Trà Ô Long Cao Cấp Lâm Đồng",
      supplier: "HTX Trà Lâm Đồng",
      origin: "Lâm Đồng, Việt Nam",
      price: "850,000",
      unit: "kg",
      moq: "50kg",
      rating: 4.8,
      reviews: 127,
      certification: "GlobalGAP",
      image: productShowcase,
      status: "Có sẵn",
      discount: 15,
      isAuction: false,
      tags: ["Hữu cơ", "Xuất khẩu", "Cao cấp"]
    },
    {
      id: 2,
      name: "Hạt Điều Rang Muối Bình Phước",
      supplier: "Công ty TNHH Điều Bình Phước",
      origin: "Bình Phước, Việt Nam", 
      price: "420,000",
      unit: "kg",
      moq: "100kg",
      rating: 4.9,
      reviews: 89,
      certification: "HACCP",
      image: productCashew,
      status: "Đấu giá",
      isAuction: true,
      timeLeft: "2h 15m",
      tags: ["Chế biến", "Xuất khẩu", "Premium"]
    },
    {
      id: 3,
      name: "Sầu Riêng Ri6 Đắk Lắk",
      supplier: "Nông trại Sầu Riêng Đắk Lắk",
      origin: "Đắk Lắk, Việt Nam",
      price: "180,000",
      unit: "kg", 
      moq: "20kg",
      rating: 4.7,
      reviews: 203,
      certification: "VietGAP",
      image: productDurian,
      status: "Có sẵn",
      isAuction: false,
      tags: ["Tươi", "Ri6", "Cao cấp"]
    },
    {
      id: 4,
      name: "Trà Xanh Thái Nguyên Đặc Biệt",
      supplier: "Công ty Trà Thái Nguyên",
      origin: "Thái Nguyên, Việt Nam",
      price: "1,200,000",
      unit: "kg",
      moq: "25kg", 
      rating: 4.9,
      reviews: 156,
      certification: "Organic",
      image: productShowcase,
      status: "Đấu giá",
      isAuction: true,
      timeLeft: "5h 30m",
      tags: ["Hữu cơ", "Đặc biệt", "Thái Nguyên"]
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">
              Sản phẩm nổi bật
            </h2>
            <p className="text-muted-foreground">
              Những sản phẩm chất lượng cao được đánh giá tốt nhất
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex" onClick={() => window.location.href = '/products'}>
            Xem tất cả sản phẩm
          </Button>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-organic transition-all duration-300 hover:-translate-y-1 border-0 shadow-card overflow-hidden">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Status badge */}
                <Badge 
                  className={`absolute top-3 left-3 ${
                    product.isAuction 
                      ? "bg-accent text-accent-foreground" 
                      : "bg-success text-success-foreground"
                  }`}
                >
                  {product.status}
                </Badge>

                {/* Auction timer */}
                {product.isAuction && (
                  <div className="absolute top-3 right-3 bg-destructive text-destructive-foreground px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
                    <Timer className="h-3 w-3" />
                    {product.timeLeft}
                  </div>
                )}

                {/* Discount badge */}
                {product.discount && (
                  <Badge className="absolute bottom-3 left-3 bg-destructive text-destructive-foreground">
                    -{product.discount}%
                  </Badge>
                )}

                {/* Wishlist */}
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="absolute bottom-3 right-3 bg-white/80 hover:bg-white text-foreground"
                >
                  <Heart className="h-4 w-4" />
                </Button>
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  <span>{product.origin}</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="font-medium text-sm">{product.rating}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">({product.reviews} đánh giá)</span>
                  <Badge variant="outline" className="ml-auto">
                    <Award className="h-3 w-3 mr-1" />
                    {product.certification}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {product.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Price */}
                <div className="mb-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-primary">
                      {parseInt(product.price).toLocaleString("vi-VN")}
                    </span>
                    <span className="text-sm text-muted-foreground">VNĐ/{product.unit}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">MOQ: {product.moq}</p>
                  <p className="text-xs text-muted-foreground">Nhà cung cấp: {product.supplier}</p>
                </div>

                {/* Actions */}
                <div className="space-y-2">
                  {product.isAuction ? (
                    <Button className="w-full bg-gradient-harvest hover:bg-accent" onClick={() => window.location.href = '/auction'}>
                      Tham gia đấu giá
                    </Button>
                  ) : (
                    <Button className="w-full bg-gradient-primary hover:bg-primary-hover" onClick={() => window.location.href = '/checkout'}>
                      Yêu cầu báo giá
                    </Button>
                  )}
                  <Button variant="outline" className="w-full" size="sm" onClick={() => window.location.href = '/products'}>
                    Xem chi tiết
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile view all button */}
        <div className="mt-8 text-center md:hidden">
          <Button className="bg-gradient-primary hover:bg-primary-hover" onClick={() => window.location.href = '/products'}>
            Xem tất cả sản phẩm
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;