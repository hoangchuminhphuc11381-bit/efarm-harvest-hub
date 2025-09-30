import { useState } from "react";
import { Search, Globe, Phone, ShoppingCart, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/logo.png";

const Header = () => {
  const [language, setLanguage] = useState("VI");
  const [cartItems] = useState(3);

  return (
    <header className="bg-background border-b border-border shadow-soft">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>Hotline: 1900-1234</span>
            </div>
            <span>Hỗ trợ 24/7</span>
          </div>
          
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-hover">
                  <Globe className="h-4 w-4 mr-1" />
                  {language}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setLanguage("VI")}>Tiếng Việt</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("EN")}>English</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("CN")}>中文</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="eFarmVn" className="h-12 w-12" />
            <div>
              <h1 className="text-2xl font-bold text-primary">eFarmVn</h1>
              <p className="text-xs text-muted-foreground">Nông sản Việt chất lượng cao</p>
            </div>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-2xl relative">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder="Tìm kiếm trà, hạt điều, sầu riêng..."
                className="pl-10 pr-4 py-3 text-base border-border focus:ring-primary"
              />
              <Button className="absolute right-1 top-1/2 transform -translate-y-1/2 px-6">
                Tìm kiếm
              </Button>
            </div>
          </div>

          {/* User actions */}
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:flex" onClick={() => window.location.href = '/auth'}>
              <User className="h-4 w-4 mr-2" />
              Đăng nhập
            </Button>
            
            <Button variant="secondary" className="hidden md:flex" onClick={() => window.location.href = '/business'}>
              Doanh nghiệp
            </Button>

            <Button variant="ghost" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartItems > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center text-xs bg-accent text-accent-foreground">
                  {cartItems}
                </Badge>
              )}
            </Button>

            <Button variant="ghost" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-secondary border-t border-border">
        <div className="container mx-auto px-4">
          <ul className="flex items-center space-x-8 py-3 text-sm font-medium">
            <li><a href="/" className="text-secondary-foreground hover:text-primary transition-colors">Trang chủ</a></li>
            <li><a href="/products" className="text-secondary-foreground hover:text-primary transition-colors">Sản phẩm</a></li>
            <li><a href="/auction" className="text-secondary-foreground hover:text-accent transition-colors">Đấu giá</a></li>
            <li><a href="/suppliers" className="text-secondary-foreground hover:text-primary transition-colors">Nhà cung cấp</a></li>
            <li><a href="/services" className="text-secondary-foreground hover:text-primary transition-colors">Dịch vụ xuất khẩu</a></li>
            <li><a href="/market" className="text-secondary-foreground hover:text-primary transition-colors">Báo giá thị trường</a></li>
            <li><a href="/contact" className="text-secondary-foreground hover:text-primary transition-colors">Liên hệ</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;