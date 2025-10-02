import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { CreditCard, Wallet, Building2, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useTranslation } from 'react-i18next';

interface AuctionCheckoutDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  item: {
    title: string;
    image: string;
    finalBid: number;
    quantity: string;
    seller: string;
  } | null;
}

export default function AuctionCheckoutDialog({
  open,
  onOpenChange,
  item,
}: AuctionCheckoutDialogProps) {
  const { toast } = useToast();
  const { t, i18n } = useTranslation();
  const [paymentMethod, setPaymentMethod] = useState('bank');
  const [depositPercentage, setDepositPercentage] = useState('30');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  if (!item) return null;

  const depositAmount = (item.finalBid * parseInt(depositPercentage)) / 100;
  const remainingAmount = item.finalBid - depositAmount;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat(
      i18n.language === 'vi' ? 'vi-VN' : i18n.language === 'zh' ? 'zh-CN' : 'en-US',
      {
        style: 'currency',
        currency: 'VND',
      }
    ).format(price);
  };

  const handleCheckout = () => {
    if (!fullName || !phone || !email) {
      toast({
        title: 'Thiếu thông tin',
        description: 'Vui lòng điền đầy đủ thông tin thanh toán',
        variant: 'destructive',
      });
      return;
    }

    toast({
      title: 'Thanh toán thành công!',
      description: `Đã xác nhận đặt cọc ${formatPrice(depositAmount)} cho đơn đấu giá`,
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary flex items-center gap-2">
            <CheckCircle2 className="w-6 h-6" />
            Thanh toán đấu giá thành công
          </DialogTitle>
          <DialogDescription>
            Hoàn tất thanh toán để xác nhận đơn hàng đấu giá của bạn
          </DialogDescription>
        </DialogHeader>

        {/* Product Info */}
        <div className="bg-muted/30 rounded-lg p-4 flex gap-4">
          <img
            src={item.image}
            alt={item.title}
            className="w-24 h-24 rounded-lg object-cover"
          />
          <div className="flex-1">
            <h3 className="font-bold text-lg">{item.title}</h3>
            <p className="text-sm text-muted-foreground">Số lượng: {item.quantity}</p>
            <p className="text-sm text-muted-foreground">Nhà bán: {item.seller}</p>
            <p className="text-xl font-bold text-primary mt-2">
              {formatPrice(item.finalBid)}
            </p>
          </div>
        </div>

        <Separator />

        {/* Deposit Options */}
        <div className="space-y-4">
          <Label className="text-base font-semibold">Chọn mức đặt cọc</Label>
          <RadioGroup value={depositPercentage} onValueChange={setDepositPercentage}>
            <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-muted/50">
              <RadioGroupItem value="30" id="deposit-30" />
              <Label htmlFor="deposit-30" className="flex-1 cursor-pointer">
                <div className="font-medium">Đặt cọc 30%</div>
                <div className="text-sm text-muted-foreground">
                  {formatPrice(depositAmount)} ngay, còn lại {formatPrice(remainingAmount)} khi nhận hàng
                </div>
              </Label>
            </div>
            <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-muted/50">
              <RadioGroupItem value="50" id="deposit-50" />
              <Label htmlFor="deposit-50" className="flex-1 cursor-pointer">
                <div className="font-medium">Đặt cọc 50%</div>
                <div className="text-sm text-muted-foreground">
                  {formatPrice((item.finalBid * 50) / 100)} ngay, còn lại{' '}
                  {formatPrice(item.finalBid - (item.finalBid * 50) / 100)} khi nhận hàng
                </div>
              </Label>
            </div>
            <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-muted/50">
              <RadioGroupItem value="100" id="deposit-100" />
              <Label htmlFor="deposit-100" className="flex-1 cursor-pointer">
                <div className="font-medium">Thanh toán 100%</div>
                <div className="text-sm text-muted-foreground">
                  Thanh toán toàn bộ {formatPrice(item.finalBid)} ngay
                </div>
              </Label>
            </div>
          </RadioGroup>
        </div>

        <Separator />

        {/* Payment Method */}
        <div className="space-y-4">
          <Label className="text-base font-semibold">Phương thức thanh toán</Label>
          <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
            <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-muted/50">
              <RadioGroupItem value="bank" id="payment-bank" />
              <Building2 className="w-5 h-5 text-primary" />
              <Label htmlFor="payment-bank" className="flex-1 cursor-pointer">
                Chuyển khoản ngân hàng
              </Label>
            </div>
            <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-muted/50">
              <RadioGroupItem value="ewallet" id="payment-ewallet" />
              <Wallet className="w-5 h-5 text-primary" />
              <Label htmlFor="payment-ewallet" className="flex-1 cursor-pointer">
                Ví điện tử (MoMo, ZaloPay)
              </Label>
            </div>
            <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-muted/50">
              <RadioGroupItem value="card" id="payment-card" />
              <CreditCard className="w-5 h-5 text-primary" />
              <Label htmlFor="payment-card" className="flex-1 cursor-pointer">
                Thẻ tín dụng/ghi nợ
              </Label>
            </div>
          </RadioGroup>
        </div>

        <Separator />

        {/* Customer Info */}
        <div className="space-y-4">
          <Label className="text-base font-semibold">Thông tin người mua</Label>
          <div className="space-y-3">
            <div>
              <Label htmlFor="fullname">Họ và tên *</Label>
              <Input
                id="fullname"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Nguyễn Văn A"
              />
            </div>
            <div>
              <Label htmlFor="phone">Số điện thoại *</Label>
              <Input
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="0912345678"
              />
            </div>
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@example.com"
              />
            </div>
          </div>
        </div>

        <Separator />

        {/* Summary */}
        <div className="bg-primary/5 rounded-lg p-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span>Giá đấu giá thành công:</span>
            <span className="font-medium">{formatPrice(item.finalBid)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Số tiền cần đặt cọc ({depositPercentage}%):</span>
            <span className="font-medium">{formatPrice(depositAmount)}</span>
          </div>
          {depositPercentage !== '100' && (
            <div className="flex justify-between text-sm">
              <span>Còn lại khi nhận hàng:</span>
              <span className="font-medium">{formatPrice(remainingAmount)}</span>
            </div>
          )}
          <Separator className="my-2" />
          <div className="flex justify-between font-bold text-lg">
            <span>Tổng thanh toán ngay:</span>
            <span className="text-primary">{formatPrice(depositAmount)}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button variant="outline" onClick={() => onOpenChange(false)} className="flex-1">
            Hủy
          </Button>
          <Button onClick={handleCheckout} className="flex-1 bg-gradient-primary">
            Xác nhận thanh toán
          </Button>
        </div>

        {/* Note */}
        <p className="text-xs text-muted-foreground text-center">
          Sau khi xác nhận, bạn sẽ nhận được thông tin chuyển khoản qua email và SMS
        </p>
      </DialogContent>
    </Dialog>
  );
}
