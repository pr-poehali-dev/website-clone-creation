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

  const services = [
    { icon: 'Droplets', title: 'МОЙКА КУЗОВА И ДИСКОВ', desc: 'Бесконтактная мойка высокого давления с применением профессиональной автохимии' },
    { icon: 'Shield', title: 'ПОЛИРОВКА КУЗОВА', desc: 'Восстановительная и защитная полировка кузова автомобиля' },
    { icon: 'Sparkles', title: 'ХИМЧИСТКА САЛОНА', desc: 'Глубокая химчистка салона с удалением сложных загрязнений' },
    { icon: 'Layers', title: 'НАНОКЕРАМИКА', desc: 'Защитное покрытие кузова керамическим составом' },
    { icon: 'Zap', title: 'ОБРАБОТКА ФАР', desc: 'Полировка и защита фар от помутнения' },
    { icon: 'CircleDot', title: 'ОЗОНАЦИЯ', desc: 'Устранение неприятных запахов в салоне автомобиля' }
  ];

  const portfolio = [
    { title: 'TESLA MODEL S', subtitle: 'КОМПЛЕКСНАЯ МОЙКА' },
    { title: 'ДЕТЕЙЛИНГ', subtitle: 'ПОЛИРОВКА' },
    { title: 'ДЕТЕЙЛИНГ', subtitle: 'КОМПЛЕКС' },
    { title: 'ХИМЧИСТКА', subtitle: 'САЛОНА' },
    { title: 'НАНОКЕРАМИКА', subtitle: '9H' },
    { title: 'ПОЛИРОВКА', subtitle: 'КУЗОВА' },
    { title: 'ДЕТАЛИЗАЦИЯ', subtitle: 'ИНТЕРЬЕРА' },
    { title: 'РЕСТАВРАЦИЯ', subtitle: 'ФАР' },
    { title: 'ЗАЩИТА', subtitle: 'КОЖАНОГО САЛОНА' }
  ];

  const reviews = [
    { name: 'ИВАН ИВАНОВ', date: '12.01.2024', text: 'Отличный сервис! Машина выглядит как новая. Ребята профессионалы своего дела.', rating: 5 },
    { name: 'ПЕТР ПЕТРОВ', date: '08.01.2024', text: 'Делал полировку и керамику. Результат превзошел ожидания! Рекомендую.', rating: 5 },
    { name: 'АННА СМИРНОВА', date: '05.01.2024', text: 'Химчистка салона на высшем уровне. Все пятна вывели, запах приятный.', rating: 5 },
    { name: 'СЕРГЕЙ КОЗЛОВ', date: '28.12.2023', text: 'Быстро и качественно! Цены адекватные. Буду обращаться еще.', rating: 5 },
    { name: 'МАРИЯ ВОЛКОВА', date: '20.12.2023', text: 'Очень довольна работой мастеров. Внимательные, аккуратные.', rating: 5 },
    { name: 'ДМИТРИЙ НОВИКОВ', date: '15.12.2023', text: 'Лучший детейлинг в городе! Машина блестит как зеркало.', rating: 5 }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
              <span className="text-black font-bold text-sm">LS</span>
            </div>
            <div className="text-xs">
              <div className="font-bold">LS DETAILING</div>
              <div className="text-gray-400">АВТОМОЙКА & ДЕТЕЙЛИНГ</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#services" className="hover:text-yellow-400 transition-colors">УСЛУГИ</a>
            <a href="#portfolio" className="hover:text-yellow-400 transition-colors">ПОРТФОЛИО</a>
            <a href="#reviews" className="hover:text-yellow-400 transition-colors">ОТЗЫВЫ</a>
            <a href="#contact" className="hover:text-yellow-400 transition-colors">КОНТАКТЫ</a>
          </nav>
          <Button className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold">
            ЗАКАЗАТЬ ЗВОНОК
          </Button>
        </div>
      </header>

      <section className="relative pt-32 pb-20 px-6 min-h-[600px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(https://cdn.poehali.dev/files/image_2026-01-09_18-33-04.png)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-2xl">
            <div className="text-sm text-yellow-400 mb-4 font-bold">/01</div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              LS DETAILING - БОЛЬШЕ, ЧЕМ ДЕТЕЙЛИНГ.
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Профессиональный уход за вашим автомобилем
            </p>
            <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold text-lg px-12">
              ОСТАВИТЬ ЗАЯВКУ
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-sm text-yellow-400 mb-4 font-bold">/01</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800 hover:border-yellow-400 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} size={24} className="text-yellow-400" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">{service.title}</h3>
                  <p className="text-sm text-gray-400">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold px-16">
              ВСЕ УСЛУГИ
            </Button>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6 bg-gray-950">
        <div className="container mx-auto">
          <div className="text-sm text-yellow-400 mb-4 font-bold">/02</div>
          <h2 className="text-4xl font-bold mb-12">НАШИ РАБОТЫ</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolio.map((item, index) => (
              <div key={index} className="relative group cursor-pointer overflow-hidden rounded-lg h-64">
                <div className="absolute inset-0 bg-gray-800" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-xs text-yellow-400 mb-1">{item.subtitle}</div>
                  <div className="text-lg font-bold">{item.title}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold px-16">
              ВСЕ РАБОТЫ
            </Button>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-sm text-yellow-400 mb-4 font-bold">/04</div>
          <h2 className="text-4xl font-bold mb-12">ОТЗЫВЫ КЛИЕНТОВ</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-300 mb-4">{review.text}</p>
                  <div className="text-sm font-bold">{review.name}</div>
                  <div className="text-xs text-gray-500">{review.date}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-sm text-yellow-400 mb-4 font-bold">/05</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                LS DETAILING.<br />
                В ГОРОДЕ ЭЛЕГАНТНОСТИ И НОВОСТОК
              </h2>
              <p className="text-gray-400 mb-8">
                Запишитесь на детейлинг прямо сейчас и получите скидку 10% на первое посещение
              </p>
              <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold px-12">
                ОСТАВИТЬ ЗАЯВКУ
              </Button>
            </div>
            <div>
              <div className="w-full h-64 bg-gray-800 rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-950">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">ОСТАВЬТЕ ЗАЯВКУ!</h2>
          <p className="text-center text-gray-400 mb-12">
            Запишитесь на удобное время или задайте вопрос
          </p>
          <Card className="bg-gray-900 border-gray-800 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input 
                  placeholder="Ваше имя" 
                  className="bg-gray-800 border-gray-700 text-white"
                  required 
                />
                <Input 
                  placeholder="Телефон" 
                  className="bg-gray-800 border-gray-700 text-white"
                  required 
                />
                <Textarea 
                  placeholder="Комментарий" 
                  rows={4}
                  className="bg-gray-800 border-gray-700 text-white"
                />
                <Button type="submit" className="w-full bg-yellow-400 text-black hover:bg-yellow-500 font-bold" size="lg">
                  ОТПРАВИТЬ ЗАЯВКУ
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="text-sm text-yellow-400 mb-4 font-bold">/06</div>
          <div className="w-full h-96 bg-gray-800 rounded-lg mb-8" />
        </div>
      </section>

      <footer className="py-12 px-6 bg-black border-t border-gray-800">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <span className="text-black font-bold text-sm">LS</span>
                </div>
                <span className="font-bold">LS DETAILING</span>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">НАВИГАЦИЯ</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#services" className="hover:text-yellow-400">Услуги</a></li>
                <li><a href="#portfolio" className="hover:text-yellow-400">Портфолио</a></li>
                <li><a href="#reviews" className="hover:text-yellow-400">Отзывы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">КОНТАКТЫ</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>+7 999 123-45-67</li>
                <li>info@lsdetailing.ru</li>
                <li>Москва, ул. Примерная, 1</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">СОЦ.СЕТИ</h4>
              <div className="flex gap-3">
                {['Instagram', 'Youtube', 'Twitter', 'Facebook'].map(social => (
                  <Button key={social} variant="ghost" size="icon" className="bg-yellow-400 text-black hover:bg-yellow-500 w-10 h-10 rounded-full">
                    <Icon name={social as any} size={18} />
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
            © 2024 LS DETAILING. Все права защищены
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
