import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, TrendingUp, Users, Award } from "lucide-react";
import heroImage from "@/assets/hero-agriculture.jpg";

const Hero = () => {
  const [searchCategory, setSearchCategory] = useState("all");

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
            Nông sản Việt
            <br />
            <span className="text-accent">Chất lượng quốc tế</span>
          </h1>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Kết nối trực tiếp với nông dân và nhà cung cấp uy tín. 
            Đảm bảo nguồn gốc, chất lượng và giá cả minh bạch cho mọi giao dịch.
          </p>

          {/* Quick search */}
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 mb-8 shadow-organic">
            <h3 className="text-lg font-semibold text-foreground mb-4">Tìm kiếm nhanh sản phẩm</h3>
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-1">
                <Input 
                  placeholder="Nhập tên sản phẩm, xuất xứ hoặc nhà cung cấp..."
                  className="h-12 text-base"
                />
              </div>
              <Select value={searchCategory} onValueChange={setSearchCategory}>
                <SelectTrigger className="w-full md:w-48 h-12">
                  <SelectValue placeholder="Danh mục" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả</SelectItem>
                  <SelectItem value="tea">Trà</SelectItem>
                  <SelectItem value="cashew">Hạt điều</SelectItem>
                  <SelectItem value="durian">Sầu riêng</SelectItem>
                  <SelectItem value="coffee">Cà phê</SelectItem>
                </SelectContent>
              </Select>
              <Button className="h-12 px-8 bg-gradient-primary hover:bg-primary-hover">
                <Search className="h-5 w-5 mr-2" />
                Tìm kiếm
              </Button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="bg-gradient-primary hover:bg-primary-hover text-lg px-8 py-4">
              <TrendingUp className="h-5 w-5 mr-2" />
              Tham gia đấu giá
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-foreground backdrop-blur-sm text-lg px-8 py-4">
              <Users className="h-5 w-5 mr-2" />
              Đăng bán ngay
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 text-white">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">500+</div>
              <div className="text-sm text-white/80">Nhà cung cấp uy tín</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">50+</div>
              <div className="text-sm text-white/80">Tỉnh thành phủ sóng</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">1000+</div>
              <div className="text-sm text-white/80">Giao dịch thành công</div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust badges */}
      <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
        <Award className="h-5 w-5 text-primary" />
        <span className="text-sm font-medium text-foreground">Chứng nhận GlobalGAP</span>
      </div>
    </section>
  );
};

export default Hero;