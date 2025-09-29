import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Clock, Gavel, TrendingUp, Users, Eye } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface AuctionItem {
  id: string;
  title: string;
  image: string;
  currentBid: number;
  minIncrement: number;
  endTime: Date;
  totalBids: number;
  viewers: number;
  seller: string;
  location: string;
  quantity: string;
}

const Auction = () => {
  const { toast } = useToast();
  const [selectedAuction, setSelectedAuction] = useState<string | null>(null);
  const [bidAmounts, setBidAmounts] = useState<{ [key: string]: string }>({});

  const auctionItems: AuctionItem[] = [
    {
      id: '1',
      title: 'Cà Phê Arabica Đà Lạt - Hạt Rang Xay',
      image: '/src/assets/product-coffee.jpg',
      currentBid: 85000,
      minIncrement: 5000,
      endTime: new Date(Date.now() + 2 * 60 * 60 * 1000), // 2 hours from now
      totalBids: 12,
      viewers: 45,
      seller: 'Farm Đà Lạt',
      location: 'Đà Lạt, Lâm Đồng',
      quantity: '50kg'
    },
    {
      id: '2', 
      title: 'Hạt Điều Rang Muối Cao Cấp',
      image: '/src/assets/product-cashew-new.jpg',
      currentBid: 120000,
      minIncrement: 10000,
      endTime: new Date(Date.now() + 4 * 60 * 60 * 1000), // 4 hours from now
      totalBids: 8,
      viewers: 32,
      seller: 'Vườn Điều Bình Phước',
      location: 'Bình Phước',
      quantity: '30kg'
    },
    {
      id: '3',
      title: 'Trà Oolong Thái Nguyên Đặc Biệt', 
      image: '/src/assets/product-tea-new.jpg',
      currentBid: 350000,
      minIncrement: 15000,
      endTime: new Date(Date.now() + 6 * 60 * 60 * 1000), // 6 hours from now
      totalBids: 15,
      viewers: 67,
      seller: 'Chè Thái Nguyên',
      location: 'Thái Nguyên',
      quantity: '10kg'
    },
    {
      id: '4',
      title: 'Sầu Riêng Ri6 Đắk Lắk Tươi Ngon',
      image: '/src/assets/product-durian-new.jpg',
      currentBid: 45000,
      minIncrement: 2000,
      endTime: new Date(Date.now() + 30 * 60 * 1000), // 30 minutes from now  
      totalBids: 22,
      viewers: 89,
      seller: 'Vườn Sầu Riêng Đắk Lắk',
      location: 'Đắk Lắk',
      quantity: '1 trái (3-4kg)'
    }
  ];

  const [timeLeft, setTimeLeft] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft: { [key: string]: string } = {};
      
      auctionItems.forEach(item => {
        const now = new Date().getTime();
        const endTime = item.endTime.getTime();
        const difference = endTime - now;

        if (difference > 0) {
          const hours = Math.floor(difference / (1000 * 60 * 60));
          const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((difference % (1000 * 60)) / 1000);
          
          newTimeLeft[item.id] = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        } else {
          newTimeLeft[item.id] = 'Đã kết thúc';
        }
      });

      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleBid = (auctionId: string, currentBid: number, minIncrement: number) => {
    const bidAmount = parseInt(bidAmounts[auctionId] || '0');
    const minBid = currentBid + minIncrement;
    
    if (bidAmount >= minBid) {
      toast({
        title: "Đấu giá thành công!",
        description: `Bạn đã đấu giá ${bidAmount.toLocaleString()}đ cho sản phẩm này.`,
      });
      setBidAmounts(prev => ({ ...prev, [auctionId]: '' }));
    } else {
      toast({
        title: "Giá đấu không hợp lệ",
        description: `Giá đấu tối thiểu là ${minBid.toLocaleString()}đ`,
        variant: "destructive",
      });
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Đấu Giá Nông Sản
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Tham gia đấu giá để mua được nông sản chất lượng cao với giá tốt nhất
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="border-0 shadow-elegant text-center">
            <CardContent className="p-6">
              <Gavel className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary">24</div>
              <p className="text-sm text-foreground/70">Phiên đấu giá</p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-elegant text-center">
            <CardContent className="p-6">
              <Users className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary">1,234</div>
              <p className="text-sm text-foreground/70">Người tham gia</p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-elegant text-center">
            <CardContent className="p-6">
              <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary">98%</div>
              <p className="text-sm text-foreground/70">Tỷ lệ thành công</p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-elegant text-center">
            <CardContent className="p-6">
              <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary">15</div>
              <p className="text-sm text-foreground/70">Phút trung bình</p>
            </CardContent>
          </Card>
        </div>

        {/* Active Auctions */}
        <div className="grid gap-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary mb-4">Phiên Đấu Giá Đang Diễn Ra</h2>
            <p className="text-foreground/70">Tham gia ngay để không bỏ lỡ cơ hội sở hữu nông sản chất lượng</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {auctionItems.map((item) => (
              <Card key={item.id} className="border-0 shadow-elegant overflow-hidden">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 right-4 bg-red-500 text-white">
                    <Clock className="w-3 h-3 mr-1" />
                    {timeLeft[item.id] || 'Đang tính...'}
                  </Badge>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                  
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <p className="text-sm text-foreground/70">Người bán: {item.seller}</p>
                      <p className="text-sm text-foreground/70">Địa điểm: {item.location}</p>
                      <p className="text-sm text-foreground/70">Số lượng: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-sm text-foreground/70">
                        <Eye className="w-4 h-4" />
                        {item.viewers}
                        <Users className="w-4 h-4 ml-2" />
                        {item.totalBids}
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted p-4 rounded-lg mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Giá hiện tại:</span>
                      <span className="text-2xl font-bold text-primary">
                        {formatPrice(item.currentBid)}
                      </span>
                    </div>
                    <p className="text-xs text-foreground/70">
                      Bước giá tối thiểu: {formatPrice(item.minIncrement)}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <Input
                      type="number"
                      placeholder={`Tối thiểu ${(item.currentBid + item.minIncrement).toLocaleString()}đ`}
                      value={bidAmounts[item.id] || ''}
                      onChange={(e) => setBidAmounts(prev => ({ ...prev, [item.id]: e.target.value }))}
                      className="flex-1"
                    />
                    <Button 
                      onClick={() => handleBid(item.id, item.currentBid, item.minIncrement)}
                      className="bg-gradient-primary hover:bg-primary/90"
                    >
                      <Gavel className="w-4 h-4 mr-1" />
                      Đấu Giá
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* How it works */}
        <section className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Cách Thức Hoạt Động</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-elegant text-center">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Đăng Ký & Xác Minh</h3>
                <p className="text-foreground/70">
                  Tạo tài khoản và xác minh thông tin để tham gia đấu giá
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-elegant text-center">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Tham Gia Đấu Giá</h3>
                <p className="text-foreground/70">
                  Đưa ra mức giá của bạn theo thời gian thực
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-elegant text-center">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Thanh Toán & Nhận Hàng</h3>
                <p className="text-foreground/70">
                  Hoàn tất thanh toán và nhận nông sản chất lượng cao
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Auction;