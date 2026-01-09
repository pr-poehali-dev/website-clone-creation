import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время'
    });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            PULS
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О нас</a>
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Услуги</a>
            <a href="#advantages" className="text-sm font-medium hover:text-primary transition-colors">Преимущества</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button variant="outline" size="sm">Войти</Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="container mx-auto text-center max-w-5xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in leading-tight">
            Твой бизнес на новом уровне
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '100ms' }}>
            Помогаем компаниям расти быстрее с помощью современных digital-решений
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in" style={{ animationDelay: '200ms' }}>
            <Button size="lg" className="text-lg px-10 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Начать сейчас
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10">
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Почему выбирают нас</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Zap',
                title: 'Быстрый результат',
                description: 'Запускаем проекты в 2 раза быстрее конкурентов'
              },
              {
                icon: 'Shield',
                title: 'Надёжность',
                description: 'Гарантируем стабильную работу всех систем'
              },
              {
                icon: 'TrendingUp',
                title: 'Рост продаж',
                description: 'Наши клиенты увеличивают выручку на 40%+'
              }
            ].map((item, index) => (
              <Card
                key={index}
                className="p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in border-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center">
                  <Icon name={item.icon as any} size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Выберите подходящий тариф</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Стартовый',
                price: '29 990',
                features: ['Лендинг', 'Адаптивная вёрстка', 'SEO-оптимизация', 'Техподдержка 1 месяц']
              },
              {
                name: 'Бизнес',
                price: '79 990',
                features: ['Корпоративный сайт', 'Интеграции', 'CRM-система', 'Техподдержка 6 месяцев'],
                featured: true
              },
              {
                name: 'Премиум',
                price: '149 990',
                features: ['Интернет-магазин', 'Личный кабинет', 'Аналитика', 'Техподдержка 12 месяцев']
              }
            ].map((plan, index) => (
              <Card
                key={index}
                className={`p-8 hover:shadow-2xl transition-all duration-300 animate-fade-in ${
                  plan.featured ? 'border-4 border-purple-600 scale-105' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {plan.featured && (
                  <div className="text-center mb-4">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-bold px-4 py-1 rounded-full">
                      ПОПУЛЯРНЫЙ
                    </span>
                  </div>
                )}
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {plan.price} ₽
                    </span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Icon name="Check" size={20} className="text-green-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={plan.featured ? 'default' : 'outline'}>
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Свяжитесь с нами</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Оставьте заявку и мы перезвоним в течение 10 минут</p>
          <Card className="p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Ваше имя</label>
                <Input placeholder="Иван Иванов" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="ivan@example.com" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Телефон</label>
                <Input placeholder="+7 999 123-45-67" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Сообщение</label>
                <Textarea placeholder="Расскажите о вашем проекте..." rows={4} required />
              </div>
              <Button type="submit" className="w-full" size="lg">
                Отправить заявку
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                PULS
              </h3>
              <p className="text-gray-400">Ваш надёжный партнёр в digital</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Команда</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Карьера</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Разработка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Маркетинг</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Дизайн</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>info@puls.ru</li>
                <li>+7 999 123-45-67</li>
                <li>Москва, ул. Примерная, 1</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© 2024 PULS. Все права защищены</p>
            <div className="flex gap-4">
              {['Instagram', 'Twitter', 'Linkedin', 'Youtube'].map(social => (
                <Button key={social} variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Icon name={social as any} size={20} />
                </Button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
