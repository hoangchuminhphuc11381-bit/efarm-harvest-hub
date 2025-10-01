import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/contexts/CartContext";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { ScrollArea } from "@/components/ui/scroll-area";

interface CartSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CartSheet = ({ open, onOpenChange }: CartSheetProps) => {
  const { t, i18n } = useTranslation();
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, getTotalItems } = useCart();

  const formatPrice = (price: number) => {
    return price.toLocaleString(i18n.language === "vi" ? "vi-VN" : i18n.language === "zh" ? "zh-CN" : "en-US");
  };

  const handleCheckout = () => {
    onOpenChange(false);
    window.location.href = "/checkout";
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-lg flex flex-col">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            Giỏ hàng của bạn
            {getTotalItems() > 0 && (
              <Badge variant="secondary" className="ml-2">
                {getTotalItems()} sản phẩm
              </Badge>
            )}
          </SheetTitle>
        </SheetHeader>

        {cartItems.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
            <ShoppingBag className="h-24 w-24 text-muted-foreground/30 mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Giỏ hàng trống
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              Hãy thêm sản phẩm vào giỏ hàng để bắt đầu mua sắm
            </p>
            <Button onClick={() => { onOpenChange(false); window.location.href = "/products"; }}>
              Khám phá sản phẩm
            </Button>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 -mx-6 px-6">
              <div className="space-y-4 py-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 p-4 rounded-lg border border-border hover:border-primary/50 transition-colors">
                    <div className="relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0 bg-muted">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm text-foreground line-clamp-2 mb-1">
                        {item.name}
                      </h4>
                      {item.supplier && (
                        <p className="text-xs text-muted-foreground mb-1">
                          {item.supplier}
                        </p>
                      )}
                      {item.origin && (
                        <p className="text-xs text-muted-foreground mb-2">
                          {item.origin}
                        </p>
                      )}
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Button
                            size="icon"
                            variant="outline"
                            className="h-7 w-7"
                            onClick={() => updateQuantity(item.id, item.cartQuantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="text-sm font-medium w-8 text-center">
                            {item.cartQuantity}
                          </span>
                          <Button
                            size="icon"
                            variant="outline"
                            className="h-7 w-7"
                            onClick={() => updateQuantity(item.id, item.cartQuantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>

                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-7 w-7 text-destructive hover:text-destructive hover:bg-destructive/10"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="flex flex-col items-end justify-between">
                      <p className="text-sm font-bold text-primary">
                        {formatPrice(item.subtotal)} đ
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {formatPrice(typeof item.price === 'string' ? parseInt(item.price.replace(/[^\d]/g, '')) : item.price)} đ/{item.unit}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="space-y-4 pt-4">
              <Separator />
              
              {/* Summary */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Tạm tính</span>
                  <span className="font-medium">{formatPrice(getTotalPrice())} đ</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Phí vận chuyển</span>
                  <span className="font-medium text-muted-foreground">Tính khi thanh toán</span>
                </div>
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <span className="text-base font-semibold">Tổng cộng</span>
                <span className="text-2xl font-bold text-primary">
                  {formatPrice(getTotalPrice())} đ
                </span>
              </div>

              <SheetFooter className="flex-col sm:flex-col gap-2">
                <Button
                  className="w-full bg-gradient-primary hover:bg-primary-hover"
                  size="lg"
                  onClick={handleCheckout}
                >
                  Thanh toán
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => { onOpenChange(false); window.location.href = "/products"; }}
                >
                  Tiếp tục mua sắm
                </Button>
              </SheetFooter>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
