import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { toast } = useToast();
  const { t } = useTranslation();
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
      title: t('contact.toastTitle'),
      description: t('contact.toastDesc'),
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
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{t('contact.heroTitle')}</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">{t('contact.heroDesc')}</p>
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
                    <h3 className="font-semibold text-lg mb-2">{t('contact.address')}</h3>
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
                    <h3 className="font-semibold text-lg mb-2">{t('contact.phone')}</h3>
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
                    <h3 className="font-semibold text-lg mb-2">{t('contact.email')}</h3>
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
                    <h3 className="font-semibold text-lg mb-2">{t('contact.workingHours')}</h3>
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
            <CardTitle className="text-2xl text-primary">{t('contact.sendUs')}</CardTitle>
            <p className="text-foreground/70">{t('contact.willReply')}</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground/80">{t('contact.name')}</label>
                  <Input
                    required
                    placeholder="Nhập họ và tên"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground/80">{t('auth.phone')}</label>
                  <Input
                    required
                    placeholder="Nhập số điện thoại"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground/80">{t('auth.email')} *</label>
                <Input
                  type="email"
                  required
                  placeholder="Nhập địa chỉ email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground/80">{t('contact.subject')}</label>
                <Select onValueChange={(value) => handleInputChange('subject', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder={t('contact.selectSubject')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="support">{t('contact.subjectSupport')}</SelectItem>
                    <SelectItem value="farmer">{t('contact.subjectFarmer')}</SelectItem>
                    <SelectItem value="buyer">{t('contact.subjectBuyer')}</SelectItem>
                    <SelectItem value="report">{t('contact.subjectReport')}</SelectItem>
                    <SelectItem value="other">{t('contact.subjectOther')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground/80">{t('contact.message')}</label>
                <Textarea
                  required
                  placeholder={t('contact.messagePlaceholder')}
                  className="min-h-[120px]"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                />
              </div>

              <Button type="submit" className="w-full">
                <Send className="w-4 h-4 mr-2" />
                {t('contact.sendMessage')}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Map Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary mb-4">{t('contact.mapTitle')}</h2>
            <p className="text-foreground/70">{t('contact.mapDesc')}</p>
          </div>
          <Card className="border-0 shadow-elegant overflow-hidden">
            <div className="bg-gradient-primary/10 h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <p className="text-xl font-semibold text-primary">{t('contact.mapPlaceholder')}</p>
                <p className="text-foreground/70">{t('contact.mapWillBeIntegrated')}</p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;