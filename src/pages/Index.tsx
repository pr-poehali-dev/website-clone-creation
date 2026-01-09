import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface CartItem extends Product {
  quantity: number;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Премиум курс по дизайну',
    price: 12990,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
    category: 'Курсы'
  },
  {
    id: 2,
    name: 'Индивидуальная консультация',
    price: 4990,
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=300&fit=crop',
    category: 'Услуги'
  },
  {
    id: 3,
    name: 'Мастер-класс онлайн',
    price: 2990,
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop',
    category: 'События'
  },
  {
    id: 4,
    name: 'Годовая подписка PRO',
    price: 24990,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    category: 'Подписки'
  },
  {
    id: 5,
    name: 'Аудит вашего проекта',
    price: 7990,
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop',
    category: 'Услуги'
  },
  {
    id: 6,
    name: 'Набор шаблонов',
    price: 1990,
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=400&h=300&fit=crop',
    category: 'Цифровые товары'
  }
];

const Index = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { toast } = useToast();

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    toast({
      title: 'Добавлено в корзину',
      description: product.name
    });
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(id);
      return;
    }
    setCart(prev => prev.map(item => item.id === id ? { ...item, quantity } : item));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    toast({
      title: 'Заказ оформлен!',
      description: `Сумма: ${total.toLocaleString('ru-RU')} ₽`
    });
    setCart([]);
    setIsCartOpen(false);
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            SHOP
          </h1>
          <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="relative">
                <Icon name="ShoppingCart" size={20} />
                {cart.length > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                    {cart.length}
                  </Badge>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-lg">
              <SheetHeader>
                <SheetTitle>Корзина</SheetTitle>
              </SheetHeader>
              <div className="mt-6 space-y-4">
                {cart.length === 0 ? (
                  <p className="text-muted-foreground text-center py-8">Корзина пуста</p>
                ) : (
                  <>
                    {cart.map(item => (
                      <Card key={item.id}>
                        <CardContent className="p-4">
                          <div className="flex gap-4">
                            <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                            <div className="flex-1">
                              <h4 className="font-semibold">{item.name}</h4>
                              <p className="text-sm text-muted-foreground">{item.price.toLocaleString('ru-RU')} ₽</p>
                              <div className="flex items-center gap-2 mt-2">
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="h-8 w-8"
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                >
                                  <Icon name="Minus" size={14} />
                                </Button>
                                <span className="w-8 text-center">{item.quantity}</span>
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="h-8 w-8"
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                >
                                  <Icon name="Plus" size={14} />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8 ml-auto"
                                  onClick={() => removeFromCart(item.id)}
                                >
                                  <Icon name="Trash2" size={14} />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                    <div className="border-t pt-4 mt-4">
                      <div className="flex justify-between text-lg font-bold mb-4">
                        <span>Итого:</span>
                        <span>{total.toLocaleString('ru-RU')} ₽</span>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <Label htmlFor="name">Имя</Label>
                          <Input id="name" placeholder="Иван Иванов" />
                        </div>
                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="ivan@example.com" />
                        </div>
                        <div>
                          <Label htmlFor="phone">Телефон</Label>
                          <Input id="phone" placeholder="+7 999 123-45-67" />
                        </div>
                        <Button className="w-full" size="lg" onClick={handleCheckout}>
                          Оформить заказ
                        </Button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Твой путь к успеху
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            Выбирай лучшие курсы, консультации и инструменты для роста
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-scale-in">
            <Button size="lg" className="text-lg px-8">
              <Icon name="Sparkles" size={20} className="mr-2" />
              Начать сейчас
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              <Icon name="Play" size={20} className="mr-2" />
              Смотреть демо
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12">Наши предложения</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card
                key={product.id}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <Badge className="absolute top-3 right-3">{product.category}</Badge>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-2">{product.name}</h4>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {product.price.toLocaleString('ru-RU')} ₽
                    </span>
                    <Button onClick={() => addToCart(product)} className="group-hover:shadow-lg">
                      <Icon name="ShoppingCart" size={18} className="mr-2" />
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6">Почему выбирают нас?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { icon: 'Award', title: 'Качество', text: 'Только проверенные материалы' },
              { icon: 'Zap', title: 'Быстрый старт', text: 'Доступ сразу после оплаты' },
              { icon: 'Users', title: 'Поддержка', text: '24/7 помощь экспертов' }
            ].map((feature, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-shadow animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <Icon name={feature.icon as any} size={32} className="text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                <p className="text-muted-foreground">{feature.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 bg-black text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            SHOP
          </h2>
          <p className="text-gray-400 mb-6">Всё для твоего роста и развития</p>
          <div className="flex justify-center gap-4">
            {['Instagram', 'Twitter', 'Youtube'].map(social => (
              <Button key={social} variant="ghost" size="icon" className="text-white hover:text-primary">
                <Icon name={social as any} size={20} />
              </Button>
            ))}
          </div>
          <p className="text-gray-500 text-sm mt-8">© 2024 SHOP. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
