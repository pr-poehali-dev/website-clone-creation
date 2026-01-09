import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время'
    });
  };

  const services = [
    { icon: 'Droplets', title: 'БЕРЕЖНАЯ МОЙКА АВТОМОБИЛЯ', desc: 'Используем только бесконтактную технологию и профессиональную химию' },
    { icon: 'Shield', title: 'ПОЛИРОВКА КУЗОВА', desc: 'Восстановление блеска и защита лакокрасочного покрытия' },
    { icon: 'Sparkles', title: 'ХИМЧИСТКА САЛОНА', desc: 'Удаление загрязнений любой сложности из салона автомобиля' },
    { icon: 'Layers', title: 'НАНОКЕРАМИЧЕСКОЕ ПОКРЫТИЕ', desc: 'Долговременная защита кузова от внешних воздействий' },
    { icon: 'Lightbulb', title: 'ОБРАБОТКА ФАР И ФОНАРЕЙ', desc: 'Полировка оптики и защитное покрытие' },
    { icon: 'Wind', title: 'ОЗОНАЦИЯ САЛОНА', desc: 'Полное устранение неприятных запахов и бактерий' }
  ];

  const portfolio = [
    { title: 'TESLA MODEL S', subtitle: 'КОМПЛЕКСНАЯ ДЕТАЛИЗАЦИЯ' },
    { title: 'ДЕТЕЙЛИНГ', subtitle: 'КЕРАМИКА' },
    { title: 'ДЕТЕЙЛИНГ', subtitle: 'ИНТЕРЬЕР' },
    { title: 'ХИМЧИСТКА', subtitle: 'САЛОН' },
    { title: 'НАНОКЕРАМИКА', subtitle: 'КУЗОВ' },
    { title: 'ПОЛИРОВКА', subtitle: 'ГЛУБОКАЯ' },
    { title: 'ДЕТАЛИЗАЦИЯ', subtitle: 'ЭКСТЕРЬЕР' },
    { title: 'РЕСТАВРАЦИЯ', subtitle: 'ОПТИКА' },
    { title: 'ЗАЩИТА', subtitle: 'КОЖИ' }
  ];

  const reviews = [
    { name: 'ИВАН ПЕТРОВ', date: '15.12.2023', text: 'Невероятный результат! Машина выглядит лучше чем из салона. Спасибо команде профессионалов!', rating: 5 },
    { name: 'АЛЕКСЕЙ СМИРНОВ', date: '10.12.2023', text: 'Делал полный детейлинг. Очень доволен качеством работы. Рекомендую всем!', rating: 5 },
    { name: 'МАРИЯ КОЗЛОВА', date: '05.12.2023', text: 'Отличный сервис, внимательное отношение. Химчистка салона на высоте!', rating: 5 },
    { name: 'ДМИТРИЙ ВОЛКОВ', date: '01.12.2023', text: 'Быстро, качественно, профессионально. Цена соответствует качеству.', rating: 5 },
    { name: 'ОЛЬГА НОВИКОВА', date: '28.11.2023', text: 'Спасибо за отличную работу! Машина засияла как новая.', rating: 5 },
    { name: 'АНДРЕЙ СОКОЛОВ', date: '20.11.2023', text: 'Лучший детейлинг центр! Всегда обращаюсь только к ним.', rating: 5 }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-sm z-50 border-b border-gray-900">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
              <span className="text-black font-black text-lg">LS</span>
            </div>
            <div>
              <div className="font-black text-sm leading-tight">LS DETAILING</div>
              <div className="text-[10px] text-gray-500 leading-tight">СТУДИЯ АВТОМОБИЛЬНОЙ ЭСТЕТИКИ</div>
            </div>
          </div>
          
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Icon name="Menu" size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black border-gray-900 text-white w-80">
              <nav className="flex flex-col gap-6 mt-12">
                <a href="#hero" className="text-2xl font-bold hover:text-yellow-400 transition-colors" onClick={() => setMenuOpen(false)}>
                  ГЛАВНАЯ
                </a>
                <a href="#services" className="text-2xl font-bold hover:text-yellow-400 transition-colors" onClick={() => setMenuOpen(false)}>
                  УСЛУГИ
                </a>
                <a href="#portfolio" className="text-2xl font-bold hover:text-yellow-400 transition-colors" onClick={() => setMenuOpen(false)}>
                  ПОРТФОЛИО
                </a>
                <a href="#reviews" className="text-2xl font-bold hover:text-yellow-400 transition-colors" onClick={() => setMenuOpen(false)}>
                  ОТЗЫВЫ
                </a>
                <a href="#contact" className="text-2xl font-bold hover:text-yellow-400 transition-colors" onClick={() => setMenuOpen(false)}>
                  КОНТАКТЫ
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(https://cdn.poehali.dev/files/image_2026-01-09_18-33-04.png)`,
            filter: 'brightness(0.4)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10 pt-20">
          <div className="max-w-3xl">
            <div className="text-yellow-400 font-bold mb-6 text-sm tracking-wider">/01</div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[0.95] tracking-tight">
              LS DETAILING - БОЛЬШЕ, ЧЕМ ДЕТЕЙЛИНГ.
            </h1>
            <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500 font-black text-base px-16 h-14 rounded-full">
              ОСТАВИТЬ ЗАЯВКУ
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
          <span className="text-sm font-bold">ПРОКРУТИТЕ ВНИЗ</span>
        </div>
      </section>

      <section id="services" className="py-24 px-6 bg-black">
        <div className="container mx-auto">
          <div className="text-yellow-400 font-bold mb-6 text-sm tracking-wider">/01</div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-900 to-gray-950 border-gray-800 hover:border-yellow-400/50 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-gray-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-400 transition-colors">
                    <Icon name={service.icon as any} size={28} className="text-yellow-400 group-hover:text-black transition-colors" />
                  </div>
                  <h3 className="text-base font-black mb-3 text-white uppercase tracking-tight leading-tight">{service.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500 font-black px-20 h-14 rounded-full text-base">
              ВСЕ УСЛУГИ
            </Button>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-24 px-6 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto">
          <div className="text-yellow-400 font-bold mb-6 text-sm tracking-wider">/02</div>
          <h2 className="text-5xl md:text-6xl font-black mb-16">НАШИ РАБОТЫ</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {portfolio.map((item, index) => (
              <div key={index} className="relative group cursor-pointer overflow-hidden rounded-2xl h-80 bg-gradient-to-br from-gray-800 to-gray-900">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="text-xs text-yellow-400 mb-2 font-bold tracking-wider">{item.subtitle}</div>
                  <div className="text-2xl font-black">{item.title}</div>
                </div>
                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <Icon name="ArrowUpRight" size={20} />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500 font-black px-20 h-14 rounded-full text-base">
              ВСЕ РАБОТЫ
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-black">
        <div className="container mx-auto">
          <div className="text-yellow-400 font-bold mb-6 text-sm tracking-wider">/03</div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
                ПОЧЕМУ<br />LS DETAILING?
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-black font-black text-lg">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">ПРОФЕССИОНАЛЬНОЕ ОБОРУДОВАНИЕ</h3>
                    <p className="text-gray-400 text-sm">Используем только профессиональную технику и сертифицированную автохимию</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-black font-black text-lg">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">ОПЫТНЫЕ МАСТЕРА</h3>
                    <p className="text-gray-400 text-sm">Наша команда - это профессионалы с многолетним опытом работы</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-black font-black text-lg">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">ГАРАНТИЯ КАЧЕСТВА</h3>
                    <p className="text-gray-400 text-sm">Даём гарантию на все виды работ и используемые материалы</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[500px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl" />
          </div>
        </div>
      </section>

      <section id="reviews" className="py-24 px-6 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto">
          <div className="text-yellow-400 font-bold mb-6 text-sm tracking-wider">/04</div>
          <h2 className="text-5xl md:text-6xl font-black mb-16">ОТЗЫВЫ</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-900 to-gray-950 border-gray-800">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-6">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-300 mb-6 leading-relaxed">{review.text}</p>
                  <div>
                    <div className="font-black text-sm mb-1">{review.name}</div>
                    <div className="text-xs text-gray-500">{review.date}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 bg-black">
        <div className="container mx-auto">
          <div className="text-yellow-400 font-bold mb-6 text-sm tracking-wider">/05</div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
                LS DETAILING.<br />
                В ГОРОДЕ ЭЛЕГАНТНОСТИ<br />
                И ВЫСОКИХ СТАНДАРТОВ
              </h2>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                Доверьте свой автомобиль профессионалам. Мы находимся в самом центре города и готовы предоставить вам услуги высочайшего качества.
              </p>
              <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500 font-black px-16 h-14 rounded-full text-base">
                ОСТАВИТЬ ЗАЯВКУ
              </Button>
            </div>
            <div className="h-[500px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl" />
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">ОСТАВЬТЕ ЗАЯВКУ!</h2>
            <p className="text-gray-400">Мы свяжемся с вами в ближайшее время</p>
          </div>
          
          <Card className="bg-gradient-to-br from-gray-900 to-gray-950 border-gray-800">
            <CardContent className="p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input 
                  placeholder="Ваше имя" 
                  className="bg-gray-800/50 border-gray-700 text-white h-14 rounded-xl"
                  required 
                />
                <Input 
                  placeholder="Телефон" 
                  className="bg-gray-800/50 border-gray-700 text-white h-14 rounded-xl"
                  required 
                />
                <Textarea 
                  placeholder="Комментарий" 
                  rows={5}
                  className="bg-gray-800/50 border-gray-700 text-white rounded-xl"
                />
                <Button type="submit" className="w-full bg-yellow-400 text-black hover:bg-yellow-500 font-black h-14 rounded-full text-base" size="lg">
                  ОТПРАВИТЬ ЗАЯВКУ
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 px-6 bg-black">
        <div className="container mx-auto">
          <div className="text-yellow-400 font-bold mb-6 text-sm tracking-wider">/06</div>
          <h2 className="text-4xl font-black mb-8">НАШЕ МЕСТОПОЛОЖЕНИЕ</h2>
          <div className="w-full h-[400px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl" />
        </div>
      </section>

      <footer className="py-16 px-6 bg-black border-t border-gray-900">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
                  <span className="text-black font-black text-lg">LS</span>
                </div>
                <span className="font-black text-lg">LS DETAILING</span>
              </div>
              <p className="text-gray-500 text-sm">Студия автомобильной эстетики</p>
            </div>
            
            <div>
              <h4 className="font-black mb-4 text-sm">НАВИГАЦИЯ</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#services" className="text-gray-400 hover:text-yellow-400 transition-colors">Услуги</a></li>
                <li><a href="#portfolio" className="text-gray-400 hover:text-yellow-400 transition-colors">Портфолио</a></li>
                <li><a href="#reviews" className="text-gray-400 hover:text-yellow-400 transition-colors">Отзывы</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-yellow-400 transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-black mb-4 text-sm">КОНТАКТЫ</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>+7 999 123-45-67</li>
                <li>info@lsdetailing.ru</li>
                <li>Москва, ул. Примерная, 1</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-black mb-4 text-sm">СОЦИАЛЬНЫЕ СЕТИ</h4>
              <div className="flex gap-3">
                {['Instagram', 'Youtube', 'Facebook', 'Twitter'].map(social => (
                  <button 
                    key={social}
                    className="w-11 h-11 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors"
                  >
                    <Icon name={social as any} size={20} className="text-black" />
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-900 pt-8 text-center">
            <p className="text-gray-600 text-sm">© 2024 LS DETAILING. ВСЕ ПРАВА ЗАЩИЩЕНЫ</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
