import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Building, Users, TrendingUp, Award, Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useTranslation } from 'react-i18next';

const Business = () => {
  const { toast } = useToast();
  const { t } = useTranslation();
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
      title: t('business.successTitle'),
      description: t('business.successDesc'),
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
            {t('business.backHome')}
          </Button>
          <h1 className="text-xl font-semibold">{t('business.header')}</h1>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('business.heroTitle')}</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">{t('business.heroDesc')}</p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Benefits */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-primary">{t('business.benefitsTitle')}</h2>
            
            <div className="space-y-6">
              <Card className="border-0 shadow-elegant">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{t('business.benefitMarket')}</h3>
                      <p className="text-foreground/70">{t('business.benefitMarketDesc')}</p>
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
                      <h3 className="font-semibold text-lg mb-2">{t('business.benefitSupport')}</h3>
                      <p className="text-foreground/70">{t('business.benefitSupportDesc')}</p>
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
                      <h3 className="font-semibold text-lg mb-2">{t('business.benefitQuality')}</h3>
                      <p className="text-foreground/70">{t('business.benefitQualityDesc')}</p>
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
                      <h3 className="font-semibold text-lg mb-2">{t('business.benefitTech')}</h3>
                      <p className="text-foreground/70">{t('business.benefitTechDesc')}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Registration Form */}
          <Card className="border-0 shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">{t('business.formTitle')}</CardTitle>
              <p className="text-foreground/70">{t('business.formSub')}</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-sm font-medium text-foreground/80">{t('business.companyName')}</label>
                  <Input
                    required
                    placeholder={t('business.companyName')}
                    value={formData.companyName}
                    onChange={(e) => handleInputChange('companyName', e.target.value)}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground/80">{t('business.businessType')}</label>
                  <Select onValueChange={(value) => handleInputChange('businessType', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder={t('business.selectType')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="producer">{t('business.producer')}</SelectItem>
                      <SelectItem value="supplier">{t('business.supplier')}</SelectItem>
                      <SelectItem value="exporter">{t('business.exporter')}</SelectItem>
                      <SelectItem value="processor">{t('business.processor')}</SelectItem>
                      <SelectItem value="distributor">{t('business.distributor')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground/80">{t('business.contactPerson')}</label>
                    <Input
                      required
                      placeholder={t('auth.name')}
                      value={formData.contactPerson}
                      onChange={(e) => handleInputChange('contactPerson', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground/80">{t('business.phone')}</label>
                    <Input
                      required
                      type="tel"
                      placeholder={t('auth.phone')}
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground/80">{t('business.email')}</label>
                  <Input
                    type="email"
                    required
                    placeholder={t('auth.email')}
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground/80">{t('business.address')}</label>
                  <Input
                    required
                    placeholder={t('business.address')}
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                  />
                </div>

                
                <div>
                  <label className="text-sm font-medium text-foreground/80">{t('business.products')}</label>
                  <Input
                    placeholder={t('business.products')}
                    value={formData.products}
                    onChange={(e) => handleInputChange('products', e.target.value)}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground/80">{t('business.description')}</label>
                  <Textarea
                    placeholder={t('business.description')}
                    className="min-h-[100px]"
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                  />
                </div>

                <Button type="submit" className="w-full">
                  <Building className="w-4 h-4 mr-2" />
                  {t('business.submit')}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Contact Section */}
        <section className="mt-16 bg-muted rounded-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">{t('business.needHelp')}</h2>
            <p className="text-foreground/70">{t('business.contactSupport')}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-0 shadow-elegant text-center">
              <CardContent className="p-6">
                <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{t('business.contactHotline')}</h3>
                <p className="text-foreground/70">1900-1234 (ext. 2)</p>
                <p className="text-sm text-foreground/50">8:00 - 17:00, Thứ 2 - Thứ 6</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-elegant text-center">
              <CardContent className="p-6">
                <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{t('business.contactEmail')}</h3>
                <p className="text-foreground/70">business@efarmvn.com</p>
                <p className="text-sm text-foreground/50">Phản hồi trong 24h</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-elegant text-center">
              <CardContent className="p-6">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{t('business.contactOffice')}</h3>
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