import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ShoppingBag, CreditCard, Truck, MapPin, Phone, User, Wallet, Receipt, ArrowLeft, QrCode } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useTranslation } from 'react-i18next';

const Checkout = () => {
  const { toast } = useToast();
  const { t, i18n } = useTranslation();
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [formData, setFormData] = useState({
    // Customer Information
    fullName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    district: '',
    ward: '',
    
    // Payment Information
    cardNumber: '',
    cardName: '',
    cardExpiry: '',
    cardCvv: '',
    ewalletPhone: '',
    ewalletType: '',
    
    // Order notes
    notes: ''
  });

  // Mock cart items
  const cartItems = [
    {
      id: '1',
      name: 'Cà Phê Arabica Đà Lạt',
      image: '/src/assets/product-coffee.jpg',
      price: 85000,
      quantity: 2,
      seller: 'Farm Đà Lạt'
    },
    {
      id: '2', 
      name: 'Hạt Điều Rang Muối',
      image: '/src/assets/product-cashew-new.jpg',
      price: 120000,
      quantity: 1,
      seller: 'Vườn Điều Bình Phước'
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shippingCost = 25000;
  const total = subtotal + shippingCost;

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t('checkout.successTitle'),
      description: t('checkout.successDesc'),
    });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat(i18n.language === 'vi' ? 'vi-VN' : i18n.language === 'zh' ? 'zh-CN' : 'en-US', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <div className="bg-background border-b border-border p-4">
        <div className="container mx-auto flex items-center gap-4">
          <Button variant="ghost" onClick={() => window.location.href = '/'}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            {t('common.backHome')}
          </Button>
          <h1 className="text-xl font-semibold">{t('checkout.title')}</h1>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-primary mb-2">{t('checkout.title')}</h1>
            <p className="text-foreground/70">{t('checkout.subtitle')}</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Forms */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Customer Information */}
              <Card className="border-0 shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center gap-2">
                    <User className="w-5 h-5" />
                    {t('checkout.customerInfo')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fullName">{t('checkout.fullName')}</Label>
                      <Input
                        id="fullName"
                        required
                        placeholder={t('checkout.fullName')}
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">{t('checkout.phone')}</Label>
                      <Input
                        id="phone"
                        required
                        placeholder={t('checkout.phone')}
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">{t('checkout.email')}</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={t('auth.email')}
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Shipping Address */}
              <Card className="border-0 shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    {t('checkout.shippingAddress')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="address">{t('checkout.addressDetail')}</Label>
                    <Textarea
                      id="address"
                      required
                      placeholder={t('checkout.addressDetail')}
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="city">{t('checkout.city')}</Label>
                      <Select onValueChange={(value) => handleInputChange('city', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder={t('checkout.selectCity')} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hcm">TP. Hồ Chí Minh</SelectItem>
                          <SelectItem value="hanoi">Hà Nội</SelectItem>
                          <SelectItem value="danang">Đà Nẵng</SelectItem>
                          <SelectItem value="cantho">Cần Thơ</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="district">{t('checkout.district')}</Label>
                      <Select onValueChange={(value) => handleInputChange('district', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder={t('checkout.selectDistrict')} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="q1">Quận 1</SelectItem>
                          <SelectItem value="q2">Quận 2</SelectItem>
                          <SelectItem value="q3">Quận 3</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="ward">{t('checkout.ward')}</Label>
                      <Select onValueChange={(value) => handleInputChange('ward', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder={t('checkout.selectWard')} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="p1">Phường 1</SelectItem>
                          <SelectItem value="p2">Phường 2</SelectItem>
                          <SelectItem value="p3">Phường 3</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card className="border-0 shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center gap-2">
                    <CreditCard className="w-5 h-5" />
                    {t('checkout.paymentMethod')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                    <div className="flex items-center space-x-2 p-4 border rounded-lg">
                      <RadioGroupItem value="cod" id="cod" />
                      <Label htmlFor="cod" className="flex-1 cursor-pointer">
                        <div className="flex items-center gap-3">
                          <Truck className="w-5 h-5 text-primary" />
                          <div>
                            <div className="font-medium">{t('checkout.codTitle')}</div>
                            <div className="text-sm text-foreground/70">{t('checkout.codDesc')}</div>
                          </div>
                        </div>
                      </Label>
                    </div>
                    
                    <div className="flex items-center space-x-2 p-4 border rounded-lg">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card" className="flex-1 cursor-pointer">
                        <div className="flex items-center gap-3">
                          <CreditCard className="w-5 h-5 text-primary" />
                          <div>
                            <div className="font-medium">{t('checkout.cardTitle')}</div>
                            <div className="text-sm text-foreground/70">Visa, MasterCard, JCB</div>
                          </div>
                        </div>
                      </Label>
                    </div>
                    
                    <div className="flex items-center space-x-2 p-4 border rounded-lg">
                      <RadioGroupItem value="ewallet" id="ewallet" />
                      <Label htmlFor="ewallet" className="flex-1 cursor-pointer">
                        <div className="flex items-center gap-3">
                          <Wallet className="w-5 h-5 text-primary" />
                          <div>
                            <div className="font-medium">{t('checkout.ewalletTitle')}</div>
                            <div className="text-sm text-foreground/70">MoMo, ZaloPay, ViettelPay</div>
                          </div>
                        </div>
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2 p-4 border rounded-lg">
                      <RadioGroupItem value="qrcode" id="qrcode" />
                      <Label htmlFor="qrcode" className="flex-1 cursor-pointer">
                        <div className="flex items-center gap-3">
                          <QrCode className="w-5 h-5 text-primary" />
                          <div>
                            <div className="font-medium">{t('checkout.qrTitle')}</div>
                            <div className="text-sm text-foreground/70">{t('checkout.qrDesc')}</div>
                          </div>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>

                  {/* Card Payment Form */}
                  {paymentMethod === 'card' && (
                    <div className="space-y-4 p-4 bg-muted rounded-lg">
                      <h4 className="font-medium">{t('checkout.cardInfo')}</h4>
                      <div className="grid gap-4">
                        <div>
                          <Label htmlFor="cardNumber">{t('checkout.cardNumber')}</Label>
                          <Input
                            id="cardNumber"
                            placeholder="1234 5678 9012 3456"
                            value={formData.cardNumber}
                            onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor="cardName">{t('checkout.cardName')}</Label>
                          <Input
                            id="cardName"
                            placeholder="NGUYEN VAN A"
                            value={formData.cardName}
                            onChange={(e) => handleInputChange('cardName', e.target.value)}
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="cardExpiry">{t('checkout.cardExpiry')}</Label>
                            <Input
                              id="cardExpiry"
                              placeholder="12/25"
                              value={formData.cardExpiry}
                              onChange={(e) => handleInputChange('cardExpiry', e.target.value)}
                            />
                          </div>
                          <div>
                            <Label htmlFor="cardCvv">{t('checkout.cardCvv')}</Label>
                            <Input
                              id="cardCvv"
                              placeholder="123"
                              value={formData.cardCvv}
                              onChange={(e) => handleInputChange('cardCvv', e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* E-wallet Payment Form */}
                  {paymentMethod === 'ewallet' && (
                    <div className="space-y-4 p-4 bg-muted rounded-lg">
                      <h4 className="font-medium">{t('checkout.ewalletInfo')}</h4>
                      <div className="grid gap-4">
                        <div>
                          <Label htmlFor="ewalletType">{t('checkout.ewalletType')}</Label>
                          <Select onValueChange={(value) => handleInputChange('ewalletType', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder={t('checkout.selectEwallet')} />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="momo">MoMo</SelectItem>
                              <SelectItem value="zalopay">ZaloPay</SelectItem>
                              <SelectItem value="viettelpay">ViettelPay</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="ewalletPhone">{t('checkout.ewalletPhone')}</Label>
                          <Input
                            id="ewalletPhone"
                            placeholder={t('checkout.ewalletPhonePlaceholder')}
                            value={formData.ewalletPhone}
                            onChange={(e) => handleInputChange('ewalletPhone', e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* QR Code Payment Form */}
                  {paymentMethod === 'qrcode' && (
                    <div className="space-y-4 p-4 bg-muted rounded-lg">
                      <h4 className="font-medium">{t('checkout.qrInfoTitle')}</h4>
                      <div className="flex items-center gap-4">
                        <img
                          src={`https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(`${t('checkout.qrContentValue')} - ${total} VND`)}`}
                          alt="QR code"
                          className="w-44 h-44 rounded-md border"
                        />
                        <div className="text-sm text-foreground/70 space-y-2">
                          <p>{t('checkout.qrAmountLabel')} <span className="font-medium text-primary">{formatPrice(total)}</span></p>
                          <p>{t('checkout.qrContentLabel')} {t('checkout.qrContentValue')}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Order Notes */}
              <Card className="border-0 shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{t('checkout.orderNotesTitle')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea
                    placeholder={t('checkout.orderNotesPlaceholder')}
                    value={formData.notes}
                    onChange={(e) => handleInputChange('notes', e.target.value)}
                  />
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Order Summary */}
            <div className="lg:col-span-1">
              <Card className="border-0 shadow-elegant sticky top-6">
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center gap-2">
                    <ShoppingBag className="w-5 h-5" />
                    {t('checkout.summaryTitle')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Cart Items */}
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex gap-3">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-sm">{item.name}</h4>
                          <p className="text-xs text-foreground/70">{item.seller}</p>
                          <div className="flex justify-between items-center mt-1">
                            <span className="text-sm">x{item.quantity}</span>
                            <span className="font-medium text-primary">
                              {formatPrice(item.price * item.quantity)}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Separator />

                  {/* Order Summary */}
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>{t('checkout.subtotal')}</span>
                      <span>{formatPrice(subtotal)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{t('checkout.shippingFee')}</span>
                      <span>{formatPrice(shippingCost)}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-lg font-bold">
                      <span>{t('checkout.total')}</span>
                      <span className="text-primary">{formatPrice(total)}</span>
                    </div>
                  </div>

                  {/* Place Order Button */}
                  <Button 
                    onClick={handleSubmit}
                    className="w-full bg-gradient-primary hover:bg-primary/90 mt-6"
                    size="lg"
                  >
                    <Receipt className="w-4 h-4 mr-2" />
                    {t('checkout.placeOrder')} - {formatPrice(total)}
                  </Button>

                  <p className="text-xs text-center text-foreground/70 mt-2">
                    {t('checkout.agreePrefix')}
                    <a href="#" className="text-primary hover:underline">{t('footer.terms')}</a>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;