import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Building, Users, TrendingUp, Award, Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Business = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    companyName: '',
    businessType: '',
    contactPerson: '',
    email: '',
    phone: '',
    address: '',
    description: '',
    products: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Đăng ký thành công!",
      description: "Chúng tôi sẽ liên hệ với bạn trong vòng 24 giờ.",
    });
    setFormData({
      companyName: '',
      businessType: '',
      contactPerson: '',
      email: '',
      phone: '',
      address: '',
      description: '',
      products: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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
          <h1 className="text-xl font-semibold">Đăng ký Doanh nghiệp</h1>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Đối Tác Doanh Nghiệp
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Mở rộng thị trường, tăng doanh thu với nền tảng nông sản hàng đầu Việt Nam
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Benefits */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-primary">Lợi ích khi trở thành đối tác</h2>
            
            <div className="space-y-6">
              <Card className="border-0 shadow-elegant">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Mở rộng thị trường</h3>
                      <p className="text-foreground/70">
                        Tiếp cận hàng ngàn khách hàng tiềm năng trong nước và quốc tế
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-elegant">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Hỗ trợ toàn diện</h3>
                      <p className="text-foreground/70">
                        Đội ngũ chuyên gia hỗ trợ marketing, logistics và chăm sóc khách hàng
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-elegant">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Chứng nhận chất lượng</h3>
                      <p className="text-foreground/70">
                        Hệ thống kiểm định và chứng nhận chất lượng quốc tế
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-elegant">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Building className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Công nghệ hiện đại</h3>
                      <p className="text-foreground/70">
                        Nền tảng giao dịch minh bạch, an toàn với công nghệ blockchain
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Registration Form */}
          <Card className="border-0 shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Đăng Ký Ngay</CardTitle>
              <p className="text-foreground/70">Điền thông tin để trở thành đối tác của chúng tôi</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-sm font-medium text-foreground/80">Tên công ty *</label>
                  <Input
                    required
                    placeholder="Nhập tên công ty"
                    value={formData.companyName}
                    onChange={(e) => handleInputChange('companyName', e.target.value)}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground/80">Loại hình kinh doanh *</label>
                  <Select onValueChange={(value) => handleInputChange('businessType', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn loại hình" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="producer">Nhà sản xuất</SelectItem>
                      <SelectItem value="supplier">Nhà cung cấp</SelectItem>
                      <SelectItem value="exporter">Nhà xuất khẩu</SelectItem>
                      <SelectItem value="processor">Nhà chế biến</SelectItem>
                      <SelectItem value="distributor">Nhà phân phối</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground/80">Người liên hệ *</label>
                    <Input
                      required
                      placeholder="Họ và tên"
                      value={formData.contactPerson}
                      onChange={(e) => handleInputChange('contactPerson', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground/80">Số điện thoại *</label>
                    <Input
                      required
                      type="tel"
                      placeholder="Số điện thoại"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground/80">Email *</label>
                  <Input
                    type="email"
                    required
                    placeholder="Nhập địa chỉ email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground/80">Địa chỉ công ty *</label>
                  <Input
                    required
                    placeholder="Địa chỉ đầy đủ"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground/80">Sản phẩm chính</label>
                  <Input
                    placeholder="Mô tả các sản phẩm chính"
                    value={formData.products}
                    onChange={(e) => handleInputChange('products', e.target.value)}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground/80">Mô tả doanh nghiệp</label>
                  <Textarea
                    placeholder="Giới thiệu về công ty và hoạt động kinh doanh..."
                    className="min-h-[100px]"
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                  />
                </div>

                <Button type="submit" className="w-full">
                  <Building className="w-4 h-4 mr-2" />
                  Đăng Ký Doanh Nghiệp
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Contact Section */}
        <section className="mt-16 bg-muted rounded-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">Cần hỗ trợ thêm?</h2>
            <p className="text-foreground/70">Liên hệ trực tiếp với đội ngũ hỗ trợ doanh nghiệp</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-0 shadow-elegant text-center">
              <CardContent className="p-6">
                <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Hotline</h3>
                <p className="text-foreground/70">1900-1234 (ext. 2)</p>
                <p className="text-sm text-foreground/50">8:00 - 17:00, Thứ 2 - Thứ 6</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-elegant text-center">
              <CardContent className="p-6">
                <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-foreground/70">business@efarmvn.com</p>
                <p className="text-sm text-foreground/50">Phản hồi trong 24h</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-elegant text-center">
              <CardContent className="p-6">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Văn phòng</h3>
                <p className="text-foreground/70">123 Nguyễn Huệ, Q.1</p>
                <p className="text-sm text-foreground/50">TP. Hồ Chí Minh</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Business;