import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Tin nhắn đã được gửi!",
      description: "Chúng tôi sẽ phản hồi trong vòng 24 giờ.",
    });
    setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Liên Hệ Với Chúng Tôi
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Chúng tôi luôn sẵn sàng hỗ trợ bạn trong việc kết nối nông sản Việt Nam
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12">
        {/* Company Info */}
        <div className="space-y-8">
          <Card className="border-0 shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center gap-2">
                <img src="/favicon.ico" alt="eFarmVn" className="w-8 h-8" />
                eFarmVn
              </CardTitle>
              <p className="text-foreground/80">
                Chúng tôi là nền tảng thương mại điện tử nông sản hàng đầu Việt Nam, 
                cam kết tạo ra một thị trường minh bạch và công bằng cho cả nông dân và người tiêu dùng.
              </p>
            </CardHeader>
          </Card>

          <div className="grid gap-6">
            <Card className="border-0 shadow-elegant">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Địa chỉ</h3>
                    <p className="text-foreground/70">
                      123 Đường Nông Sản, Phường Tân Bình<br />
                      Quận 1, TP. Hồ Chí Minh, Việt Nam
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-elegant">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Điện thoại</h3>
                    <p className="text-foreground/70">
                      Hotline: (+84) 123 456 789<br />
                      Hỗ trợ kỹ thuật: (+84) 987 654 321
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-elegant">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Email</h3>
                    <p className="text-foreground/70">
                      Liên hệ chung: info@efarmvn.com<br />
                      Hỗ trợ khách hàng: support@efarmvn.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-elegant">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Giờ làm việc</h3>
                    <p className="text-foreground/70">
                      Thứ 2 - Thứ 6: 8:00 - 17:00<br />
                      Thứ 7: 8:00 - 12:00<br />
                      Chủ nhật: Nghỉ
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact Form */}
        <Card className="border-0 shadow-elegant">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Gửi Tin Nhắn Cho Chúng Tôi</CardTitle>
            <p className="text-foreground/70">Chúng tôi sẽ phản hồi trong vòng 24 giờ</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground/80">Họ và tên *</label>
                  <Input
                    required
                    placeholder="Nhập họ và tên"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground/80">Số điện thoại *</label>
                  <Input
                    required
                    placeholder="Nhập số điện thoại"
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
                <label className="text-sm font-medium text-foreground/80">Chủ đề</label>
                <Select onValueChange={(value) => handleInputChange('subject', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn chủ đề" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="support">Hỗ trợ kỹ thuật</SelectItem>
                    <SelectItem value="farmer">Đăng ký nông dân</SelectItem>
                    <SelectItem value="buyer">Đăng ký người mua</SelectItem>
                    <SelectItem value="report">Báo cáo sự cố</SelectItem>
                    <SelectItem value="other">Khác</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground/80">Tin nhắn *</label>
                <Textarea
                  required
                  placeholder="Nhập nội dung tin nhắn..."
                  className="min-h-[120px]"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                />
              </div>

              <Button type="submit" className="w-full">
                <Send className="w-4 h-4 mr-2" />
                Gửi Tin Nhắn
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Map Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary mb-4">Vị Trí Của Chúng Tôi</h2>
            <p className="text-foreground/70">Ghé thăm văn phòng của chúng tôi để được tư vấn trực tiếp</p>
          </div>
          <Card className="border-0 shadow-elegant overflow-hidden">
            <div className="bg-gradient-primary/10 h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <p className="text-xl font-semibold text-primary">Google Maps</p>
                <p className="text-foreground/70">Bản đồ sẽ được tích hợp tại đây</p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;