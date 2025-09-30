import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Upload, ImagePlus, DollarSign, Truck, User, Package, ArrowLeft } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const SellNow = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    // Seller Information
    sellerName: '',
    sellerPhone: '',
    sellerEmail: '',
    sellerAddress: '',
    
    // Product Information  
    productName: '',
    productCategory: '',
    productDescription: '',
    productQuantity: '',
    productUnit: '',
    productOrigin: '',
    
    // Pricing & Shipping
    productPrice: '',
    shippingCost: '',
    paymentMethod: '',
    
    // Additional
    certifications: '',
    notes: ''
  });

  const [selectedImages, setSelectedImages] = useState<File[]>([]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setSelectedImages(prev => [...prev, ...files].slice(0, 5)); // Max 5 images
    }
  };

  const removeImage = (index: number) => {
    setSelectedImages(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Sản phẩm đã được đăng!",
      description: "Chúng tôi sẽ xem xét và phê duyệt trong vòng 24 giờ.",
    });
    // Reset form
    setFormData({
      sellerName: '', sellerPhone: '', sellerEmail: '', sellerAddress: '',
      productName: '', productCategory: '', productDescription: '', 
      productQuantity: '', productUnit: '', productOrigin: '',
      productPrice: '', shippingCost: '', paymentMethod: '',
      certifications: '', notes: ''
    });
    setSelectedImages([]);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <div className="bg-background border-b border-border p-4">
        <div className="container mx-auto flex items-center gap-4">
          <Button variant="ghost" onClick={() => window.location.href = '/'}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Trang chủ
          </Button>
          <h1 className="text-xl font-semibold">Đăng bán sản phẩm</h1>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Đăng Bán Sản Phẩm
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Đăng bán nông sản của bạn để tiếp cận hàng ngàn khách hàng trên toàn quốc
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-8">
          
          {/* Seller Information */}
          <Card className="border-0 shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center gap-2">
                <User className="w-6 h-6" />
                Thông Tin Người Bán
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="sellerName">Họ và tên *</Label>
                  <Input
                    id="sellerName"
                    required
                    placeholder="Nhập họ và tên"
                    value={formData.sellerName}
                    onChange={(e) => handleInputChange('sellerName', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="sellerPhone">Số điện thoại *</Label>
                  <Input
                    id="sellerPhone"
                    required
                    placeholder="Nhập số điện thoại"
                    value={formData.sellerPhone}
                    onChange={(e) => handleInputChange('sellerPhone', e.target.value)}
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="sellerEmail">Email</Label>
                <Input
                  id="sellerEmail"
                  type="email"
                  placeholder="Nhập địa chỉ email"
                  value={formData.sellerEmail}
                  onChange={(e) => handleInputChange('sellerEmail', e.target.value)}
                />
              </div>
              
              <div>
                <Label htmlFor="sellerAddress">Địa chỉ *</Label>
                <Textarea
                  id="sellerAddress"
                  required
                  placeholder="Nhập địa chỉ đầy đủ (tỉnh, thành phố, quận, huyện, phường, xã)"
                  value={formData.sellerAddress}
                  onChange={(e) => handleInputChange('sellerAddress', e.target.value)}
                />
              </div>
            </CardContent>
          </Card>

          {/* Product Information */}
          <Card className="border-0 shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center gap-2">
                <Package className="w-6 h-6" />
                Thông Tin Sản Phẩm
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="productName">Tên sản phẩm *</Label>
                  <Input
                    id="productName"
                    required
                    placeholder="Ví dụ: Cà phê Arabica rang xay"
                    value={formData.productName}
                    onChange={(e) => handleInputChange('productName', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="productCategory">Danh mục *</Label>
                  <Select onValueChange={(value) => handleInputChange('productCategory', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn danh mục sản phẩm" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tea">Trà</SelectItem>
                      <SelectItem value="coffee">Cà phê</SelectItem>
                      <SelectItem value="cashew">Hạt điều</SelectItem>
                      <SelectItem value="durian">Sầu riêng</SelectItem>
                      <SelectItem value="other">Khác</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <Label htmlFor="productDescription">Mô tả sản phẩm *</Label>
                <Textarea
                  id="productDescription"
                  required
                  placeholder="Mô tả chi tiết về sản phẩm, chất lượng, đặc điểm nổi bật..."
                  className="min-h-[100px]"
                  value={formData.productDescription}
                  onChange={(e) => handleInputChange('productDescription', e.target.value)}
                />
              </div>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="productQuantity">Số lượng *</Label>
                  <Input
                    id="productQuantity"
                    required
                    placeholder="Ví dụ: 100"
                    value={formData.productQuantity}
                    onChange={(e) => handleInputChange('productQuantity', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="productUnit">Đơn vị *</Label>
                  <Select onValueChange={(value) => handleInputChange('productUnit', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn đơn vị" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="kg">Kilogram (kg)</SelectItem>
                      <SelectItem value="ton">Tấn</SelectItem>
                      <SelectItem value="trai">Trái</SelectItem>
                      <SelectItem value="bao">Bao</SelectItem>
                      <SelectItem value="thung">Thùng</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="productOrigin">Nguồn gốc *</Label>
                  <Input
                    id="productOrigin"
                    required
                    placeholder="Ví dụ: Đà Lạt, Lâm Đồng"
                    value={formData.productOrigin}
                    onChange={(e) => handleInputChange('productOrigin', e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Product Images */}
          <Card className="border-0 shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center gap-2">
                <ImagePlus className="w-6 h-6" />
                Hình Ảnh Sản Phẩm
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                  <input
                    type="file"
                    id="productImages"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <label htmlFor="productImages" className="cursor-pointer">
                    <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground">
                      Chọn hoặc kéo thả hình ảnh vào đây
                    </p>
                    <p className="text-sm text-muted-foreground/70 mt-1">
                      Tối đa 5 hình ảnh, định dạng JPG, PNG
                    </p>
                  </label>
                </div>
                
                {selectedImages.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {selectedImages.map((file, index) => (
                      <div key={index} className="relative">
                        <img
                          src={URL.createObjectURL(file)}
                          alt={`Preview ${index + 1}`}
                          className="w-full h-24 object-cover rounded-lg"
                        />
                        <Button
                          type="button"
                          variant="destructive"
                          size="sm"
                          className="absolute -top-2 -right-2 w-6 h-6 rounded-full p-0"
                          onClick={() => removeImage(index)}
                        >
                          ×
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Pricing & Shipping */}
          <Card className="border-0 shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center gap-2">
                <DollarSign className="w-6 h-6" />
                Giá Cả & Vận Chuyển
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="productPrice">Giá bán (VNĐ) *</Label>
                  <Input
                    id="productPrice"
                    required
                    type="number"
                    placeholder="Ví dụ: 85000"
                    value={formData.productPrice}
                    onChange={(e) => handleInputChange('productPrice', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="shippingCost">Chi phí vận chuyển (VNĐ)</Label>
                  <Input
                    id="shippingCost"
                    type="number"
                    placeholder="Ví dụ: 25000 (để trống nếu miễn phí)"
                    value={formData.shippingCost}
                    onChange={(e) => handleInputChange('shippingCost', e.target.value)}
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="paymentMethod">Phương thức thanh toán</Label>
                <Select onValueChange={(value) => handleInputChange('paymentMethod', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn phương thức thanh toán" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cod">Thanh toán khi nhận hàng (COD)</SelectItem>
                    <SelectItem value="bank">Chuyển khoản ngân hàng</SelectItem>
                    <SelectItem value="ewallet">Ví điện tử</SelectItem>
                    <SelectItem value="all">Tất cả các phương thức</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Additional Information */}
          <Card className="border-0 shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center gap-2">
                <Truck className="w-6 h-6" />
                Thông Tin Bổ Sung
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="certifications">Chứng nhận chất lượng</Label>
                <Input
                  id="certifications"
                  placeholder="Ví dụ: VietGAP, Organic, HACCP..."
                  value={formData.certifications}
                  onChange={(e) => handleInputChange('certifications', e.target.value)}
                />
              </div>
              
              <div>
                <Label htmlFor="notes">Ghi chú thêm</Label>
                <Textarea
                  id="notes"
                  placeholder="Các thông tin khác như thời gian thu hoạch, điều kiện bảo quản..."
                  value={formData.notes}
                  onChange={(e) => handleInputChange('notes', e.target.value)}
                />
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="text-center">
            <Button type="submit" size="lg" className="bg-gradient-primary hover:bg-primary/90 px-12">
              <Package className="w-5 h-5 mr-2" />
              Đăng Bán Sản Phẩm
            </Button>
            <p className="text-sm text-muted-foreground mt-2">
              Sản phẩm sẽ được xem xét và phê duyệt trong vòng 24 giờ
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SellNow;