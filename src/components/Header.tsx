import { useEffect, useState } from "react";
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
import { useTranslation } from "react-i18next";
import { useCart } from "@/contexts/CartContext";
import CartSheet from "@/components/CartSheet";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState<string>(
    (localStorage.getItem("i18nextLng") || "vi").toUpperCase()
  );
  const { getTotalItems } = useCart();
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    const current = i18n.language || "vi";
    setLanguage(current.toUpperCase());
  }, [i18n.language]);

  const changeLanguage = (lng: "vi" | "en" | "zh") => {
    i18n.changeLanguage(lng);
    setLanguage(lng.toUpperCase());
  };

  return (
    <header className="bg-background border-b border-border shadow-soft">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>{t("common.hotline")}: 1900-1234</span>
            </div>
            <span>{t("common.support247")}</span>
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
                <DropdownMenuItem onClick={() => changeLanguage("vi")}>Tiếng Việt</DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage("en")}>English</DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage("zh")}>中文</DropdownMenuItem>
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
              <p className="text-xs text-muted-foreground">{t("header.slogan")}</p>
            </div>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-2xl relative">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder={t("header.placeholder")}
                className="pl-10 pr-4 py-3 text-base border-border focus:ring-primary"
              />
              <Button className="absolute right-1 top-1/2 transform -translate-y-1/2 px-6">
                {t("common.search")}
              </Button>
            </div>
          </div>

          {/* User actions */}
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:flex" onClick={() => window.location.href = '/auth'}>
              <User className="h-4 w-4 mr-2" />
              {t("header.login")}
            </Button>
            
            <Button variant="secondary" className="hidden md:flex" onClick={() => window.location.href = '/business'}>
              {t("header.business")}
            </Button>

            <Button variant="ghost" className="relative" onClick={() => setCartOpen(true)}>
              <ShoppingCart className="h-5 w-5" />
              {getTotalItems() > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center text-xs bg-accent text-accent-foreground">
                  {getTotalItems()}
                </Badge>
              )}
            </Button>

            <CartSheet open={cartOpen} onOpenChange={setCartOpen} />

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
            <li><a href="/" className="text-secondary-foreground hover:text-primary transition-colors">{t("header.home")}</a></li>
            <li><a href="/products" className="text-secondary-foreground hover:text-primary transition-colors">{t("header.products")}</a></li>
            <li><a href="/auction" className="text-secondary-foreground hover:text-accent transition-colors">{t("header.auction")}</a></li>
            <li><a href="/suppliers" className="text-secondary-foreground hover:text-primary transition-colors">Nhà thu mua</a></li>
            <li><a href="/market" className="text-secondary-foreground hover:text-primary transition-colors">{t("header.marketPrices")}</a></li>
            <li><a href="/contact" className="text-secondary-foreground hover:text-primary transition-colors">{t("header.contact")}</a></li>
            <li><a href="/checkout" className="text-secondary-foreground hover:text-primary transition-colors">{t("header.checkout")}</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;