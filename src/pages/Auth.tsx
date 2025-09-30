import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, Mail, Lock, User, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useTranslation } from 'react-i18next';

const Auth = () => {
  const { toast } = useToast();
  const { t } = useTranslation();
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t('auth.loginSuccess'),
      description: t('auth.loginWelcome'),
    });
    setTimeout(() => window.location.href = '/', 1000);
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (signupData.password !== signupData.confirmPassword) {
      toast({
        title: t('auth.error'),
        description: t('auth.mismatch'),
        variant: "destructive"
      });
      return;
    }
    toast({
      title: t('auth.signupSuccess'),
      description: t('auth.signupDesc'),
    });
    setTimeout(() => window.location.href = '/', 1000);
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
          <h1 className="text-xl font-semibold">{t('auth.title')}</h1>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 flex justify-center">
        <Card className="w-full max-w-md border-0 shadow-elegant">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-primary">{t('auth.welcome')}</CardTitle>
            <p className="text-foreground/70">{t('auth.sub')}</p>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">{t('auth.login')}</TabsTrigger>
                <TabsTrigger value="signup">{t('auth.signup')}</TabsTrigger>
              </TabsList>
              
              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">{t('auth.email')}</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="email"
                        placeholder={t('auth.email')}
                        className="pl-10"
                        value={loginData.email}
                        onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium">{t('auth.password')}</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="password"
                        placeholder={t('auth.password')}
                        className="pl-10"
                        value={loginData.password}
                        onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full">
                    {t('auth.login')}
                  </Button>
                  
                  <div className="text-center">
                    <Button variant="link" className="text-sm">
                      {t('auth.forgotPassword')}
                    </Button>
                  </div>
                </form>
              </TabsContent>
              
              <TabsContent value="signup">
                <form onSubmit={handleSignup} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">{t('auth.name')}</label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder={t('auth.name')}
                        className="pl-10"
                        value={signupData.name}
                        onChange={(e) => setSignupData({...signupData, name: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium">{t('auth.email')}</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="email"
                        placeholder={t('auth.email')}
                        className="pl-10"
                        value={signupData.email}
                        onChange={(e) => setSignupData({...signupData, email: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium">{t('auth.phone')}</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="tel"
                        placeholder={t('auth.phone')}
                        className="pl-10"
                        value={signupData.phone}
                        onChange={(e) => setSignupData({...signupData, phone: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium">{t('auth.password')}</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="password"
                        placeholder={t('auth.password')}
                        className="pl-10"
                        value={signupData.password}
                        onChange={(e) => setSignupData({...signupData, password: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium">{t('auth.confirmPassword')}</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="password"
                        placeholder={t('auth.confirmPassword')}
                        className="pl-10"
                        value={signupData.confirmPassword}
                        onChange={(e) => setSignupData({...signupData, confirmPassword: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full">
                    {t('auth.signup')}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;