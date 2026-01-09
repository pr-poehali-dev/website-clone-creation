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

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded flex items-center justify-center">
              <span className="text-black font-black text-sm sm:text-base">LS</span>
            </div>
            <div>
              <div className="font-black text-xs sm:text-sm leading-tight">LS DETAILING</div>
              <div className="text-[8px] sm:text-[10px] text-gray-400 leading-tight">СТУДИЯ АВТОМОБИЛЬНОЙ ЭСТЕТИКИ</div>
            </div>
          </div>
          
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <button className="w-8 h-8 flex items-center justify-center">
                <div className="space-y-1">
                  <div className="w-5 h-0.5 bg-white"></div>
                  <div className="w-5 h-0.5 bg-white"></div>
                  <div className="w-5 h-0.5 bg-white"></div>
                </div>
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black border-gray-800 text-white w-80">
              <nav className="flex flex-col gap-6 mt-12">
                <a href="#hero" className="text-xl font-bold hover:text-yellow-400 transition-colors" onClick={() => setMenuOpen(false)}>ГЛАВНАЯ</a>
                <a href="#services" className="text-xl font-bold hover:text-yellow-400 transition-colors" onClick={() => setMenuOpen(false)}>УСЛУГИ</a>
                <a href="#portfolio" className="text-xl font-bold hover:text-yellow-400 transition-colors" onClick={() => setMenuOpen(false)}>ПОРТФОЛИО</a>
                <a href="#reviews" className="text-xl font-bold hover:text-yellow-400 transition-colors" onClick={() => setMenuOpen(false)}>ОТЗЫВЫ</a>
                <a href="#contact" className="text-xl font-bold hover:text-yellow-400 transition-colors" onClick={() => setMenuOpen(false)}>КОНТАКТЫ</a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative h-[60vh] sm:h-[70vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(https://cdn.poehali.dev/files/image_2026-01-09_18-33-04.png)`,
            filter: 'brightness(0.5)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-2xl">
            <div className="text-yellow-400 font-bold mb-3 text-xs tracking-widest">/01</div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              LS DETAILING - БОЛЬШЕ, ЧЕМ ДЕТЕЙЛИНГ.
            </h1>
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold text-xs sm:text-sm px-8 sm:px-12 h-10 sm:h-12 rounded-full">
              ОСТАВИТЬ ЗАЯВКУ
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-20 px-4 sm:px-6 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="text-yellow-400 font-bold mb-8 text-xs tracking-widest">/01</div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-8">
            {[
              { icon: 'Droplets', title: 'БЕРЕЖНАЯ МОЙКА\nАВТОМОБИЛЯ', desc: 'МНОГОСТУПЕНЧАТАЯ МОЙКА С ИСПОЛЬЗОВАНИЕМ ПРОФЕССИОНАЛЬНОЙ ХИМИИ И ОБОРУДОВАНИЯ' },
              { icon: 'Shield', title: 'ПОЛИРОВКА КУЗОВА', desc: 'ВОССТАНОВЛЕНИЕ ЛАКОКРАСОЧНОГО ПОКРЫТИЯ ДО ЗАВОДСКОГО СОСТОЯНИЯ' },
              { icon: 'Sparkles', title: 'ХИМЧИСТКА САЛОНА', desc: 'ГЛУБОКАЯ ОЧИСТКА ВСЕХ ПОВЕРХНОСТЕЙ САЛОНА С УДАЛЕНИЕМ ПЯТЕН И ЗАПАХОВ' },
              { icon: 'Layers', title: 'НАНОКЕРАМИЧЕСКОЕ ПОКРЫТИЕ', desc: 'ДОЛГОВРЕМЕННАЯ ЗАЩИТА КУЗОВА НА 2-5 ЛЕТ С ГИДРОФОБНЫМ ЭФФЕКТОМ' },
              { icon: 'Lightbulb', title: 'ОБРАБОТКА ФАР\nИ ФОНАРЕЙ', desc: 'ВОССТАНОВЛЕНИЕ ПРОЗРАЧНОСТИ ОПТИКИ И ЗАЩИТНОЕ ПОКРЫТИЕ' },
              { icon: 'Wind', title: 'ОЗОНАЦИЯ САЛОНА', desc: 'УНИЧТОЖЕНИЕ БАКТЕРИЙ, ВИРУСОВ И НЕПРИЯТНЫХ ЗАПАХОВ' }
            ].map((service, index) => (
              <Card key={index} className="bg-neutral-900 border-neutral-800 hover:border-yellow-400/50 transition-all group">
                <CardContent className="p-4 sm:p-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-neutral-800 rounded-lg flex items-center justify-center mb-4 group-hover:bg-yellow-400 transition-colors">
                    <Icon name={service.icon as any} size={20} className="text-yellow-400 group-hover:text-black transition-colors" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-black mb-2 text-white uppercase whitespace-pre-line">{service.title}</h3>
                  <p className="text-[10px] sm:text-xs text-gray-400 leading-relaxed">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold text-xs sm:text-sm px-12 sm:px-16 h-10 sm:h-12 rounded-full">
              ВСЕ УСЛУГИ
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-12 sm:py-20 px-4 sm:px-6 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="text-yellow-400 font-bold mb-4 text-xs tracking-widest">/02</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-8">НАШИ РАБОТЫ</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-8">
            {[
              'TESLA MODEL S\nКОМПЛЕКСНАЯ ДЕТАЛИЗАЦИЯ',
              'ДЕТЕЙЛИНГ\nКЕРАМИКА',
              'ДЕТЕЙЛИНГ\nИНТЕРЬЕР',
              'ХИМЧИСТКА\nСАЛОН',
              'НАНОКЕРАМИКА\nКУЗОВ',
              'ПОЛИРОВКА\nГЛУБОКАЯ',
              'ДЕТАЛИЗАЦИЯ\nЭКСТЕРЬЕР',
              'РЕСТАВРАЦИЯ\nОПТИКА',
              'ЗАЩИТА\nКОЖИ'
            ].map((item, index) => (
              <div key={index} className="relative group cursor-pointer overflow-hidden rounded-xl h-48 sm:h-64 bg-neutral-900">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <div className="text-xs sm:text-sm font-black whitespace-pre-line">{item}</div>
                </div>
                <div className="absolute top-3 right-3 w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Icon name="ArrowUpRight" size={16} />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold text-xs sm:text-sm px-12 sm:px-16 h-10 sm:h-12 rounded-full">
              ВСЕ РАБОТЫ
            </Button>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="text-yellow-400 font-bold mb-4 text-xs tracking-widest">/03</div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
                ПОЧЕМУ<br />LS DETAILING?
              </h2>
              <div className="space-y-4 sm:space-y-6">
                {[
                  { num: '1', title: 'ПРОФЕССИОНАЛЬНОЕ ОБОРУДОВАНИЕ', desc: 'ИСПОЛЬЗУЕМ ТОЛЬКО СЕРТИФИЦИРОВАННУЮ АВТОХИМИЮ И СОВРЕМЕННОЕ ОБОРУДОВАНИЕ' },
                  { num: '2', title: 'ОПЫТНЫЕ МАСТЕРА', desc: 'НАША КОМАНДА - ЭТО ПРОФЕССИОНАЛЫ С МНОГОЛЕТНИМ ОПЫТОМ РАБОТЫ' },
                  { num: '3', title: 'ГАРАНТИЯ КАЧЕСТВА', desc: 'ДАЁМ ГАРАНТИЮ НА ВСЕ ВИДЫ РАБОТ И ИСПОЛЬЗУЕМЫЕ МАТЕРИАЛЫ' }
                ].map((item) => (
                  <div key={item.num} className="flex gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-black font-black text-base sm:text-lg">{item.num}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-sm sm:text-base mb-1">{item.title}</h3>
                      <p className="text-gray-400 text-xs sm:text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="h-64 sm:h-96 lg:h-full bg-neutral-900 rounded-2xl"></div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-12 sm:py-20 px-4 sm:px-6 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="text-yellow-400 font-bold mb-4 text-xs tracking-widest">/04</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-8">ОТЗЫВЫ</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {[
              { name: 'ИВАН ПЕТРОВ', date: '15.12.2023', text: 'Невероятный результат! Машина выглядит лучше чем из салона. Спасибо команде профессионалов!' },
              { name: 'АЛЕКСЕЙ СМИРНОВ', date: '10.12.2023', text: 'Делал полный детейлинг. Очень доволен качеством работы. Рекомендую всем!' },
              { name: 'МАРИЯ КОЗЛОВА', date: '05.12.2023', text: 'Отличный сервис, внимательное отношение. Химчистка салона на высоте!' },
              { name: 'ДМИТРИЙ ВОЛКОВ', date: '01.12.2023', text: 'Быстро, качественно, профессионально. Цена соответствует качеству.' },
              { name: 'ОЛЬГА НОВИКОВА', date: '28.11.2023', text: 'Спасибо за отличную работу! Машина засияла как новая.' },
              { name: 'АНДРЕЙ СОКОЛОВ', date: '20.11.2023', text: 'Лучший детейлинг центр! Всегда обращаюсь только к ним.' }
            ].map((review, index) => (
              <Card key={index} className="bg-neutral-900 border-neutral-800">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={14} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300 mb-4 leading-relaxed">{review.text}</p>
                  <div>
                    <div className="font-bold text-xs sm:text-sm">{review.name}</div>
                    <div className="text-[10px] sm:text-xs text-gray-500">{review.date}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="py-12 sm:py-20 px-4 sm:px-6 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="text-yellow-400 font-bold mb-4 text-xs tracking-widest">/05</div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-6 leading-tight">
                LS DETAILING.<br />
                В ГОРОДЕ ЭЛЕГАНТНОСТИ<br />
                И ВЫСОКИХ СТАНДАРТОВ
              </h2>
              <p className="text-gray-400 text-sm sm:text-base mb-6 leading-relaxed">
                Доверьте свой автомобиль профессионалам. Мы находимся в самом центре города и готовы предоставить вам услуги высочайшего качества.
              </p>
              <Button className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold text-xs sm:text-sm px-8 sm:px-12 h-10 sm:h-12 rounded-full">
                ОСТАВИТЬ ЗАЯВКУ
              </Button>
            </div>
            <div className="h-64 sm:h-96 lg:h-[400px] bg-neutral-900 rounded-2xl"></div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-black">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3">ОСТАВЬТЕ ЗАЯВКУ!</h2>
            <p className="text-gray-400 text-sm sm:text-base">Мы свяжемся с вами в ближайшее время</p>
          </div>
          
          <Card className="bg-neutral-900 border-neutral-800">
            <CardContent className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input 
                  placeholder="Ваше имя" 
                  className="bg-neutral-800 border-neutral-700 text-white h-12 rounded-lg"
                  required 
                />
                <Input 
                  placeholder="Телефон" 
                  className="bg-neutral-800 border-neutral-700 text-white h-12 rounded-lg"
                  required 
                />
                <Textarea 
                  placeholder="Комментарий" 
                  rows={4}
                  className="bg-neutral-800 border-neutral-700 text-white rounded-lg"
                />
                <Button type="submit" className="w-full bg-yellow-400 text-black hover:bg-yellow-500 font-bold h-12 rounded-full text-sm">
                  ОТПРАВИТЬ ЗАЯВКУ
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="text-yellow-400 font-bold mb-4 text-xs tracking-widest">/06</div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-6">НАШЕ МЕСТОПОЛОЖЕНИЕ</h2>
          <div className="w-full h-64 sm:h-80 lg:h-96 bg-neutral-900 rounded-2xl"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 bg-black border-t border-neutral-800">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <span className="text-black font-black text-sm">LS</span>
                </div>
                <span className="font-black text-sm">LS DETAILING</span>
              </div>
              <p className="text-gray-500 text-xs">Студия автомобильной эстетики</p>
            </div>
            
            <div>
              <h4 className="font-bold mb-3 text-xs">НАВИГАЦИЯ</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#services" className="text-gray-400 hover:text-yellow-400 transition-colors">Услуги</a></li>
                <li><a href="#portfolio" className="text-gray-400 hover:text-yellow-400 transition-colors">Портфолио</a></li>
                <li><a href="#reviews" className="text-gray-400 hover:text-yellow-400 transition-colors">Отзывы</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-yellow-400 transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-3 text-xs">КОНТАКТЫ</h4>
              <ul className="space-y-2 text-xs text-gray-400">
                <li>+7 999 123-45-67</li>
                <li>info@lsdetailing.ru</li>
                <li>Москва, ул. Примерная, 1</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-3 text-xs">СОЦИАЛЬНЫЕ СЕТИ</h4>
              <div className="flex gap-2">
                {['Instagram', 'Youtube', 'Facebook', 'Twitter'].map(social => (
                  <button 
                    key={social}
                    className="w-9 h-9 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors"
                  >
                    <Icon name={social as any} size={16} className="text-black" />
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-neutral-800 pt-6 text-center">
            <p className="text-gray-600 text-xs">© 2024 LS DETAILING. ВСЕ ПРАВА ЗАЩИЩЕНЫ</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
