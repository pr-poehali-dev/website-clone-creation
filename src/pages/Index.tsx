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
      <header className="absolute top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
              <span className="text-black font-black text-lg">LS</span>
            </div>
            <div>
              <div className="font-black text-sm leading-tight">LS DETAILING</div>
              <div className="text-[10px] text-gray-400 leading-tight">СТУДИЯ АВТОМОБИЛЬНОЙ ЭСТЕТИКИ</div>
            </div>
          </div>
          
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <button className="w-10 h-10 border border-white/20 rounded flex items-center justify-center hover:bg-white/10 transition-colors">
                <div className="space-y-1">
                  <div className="w-5 h-0.5 bg-white"></div>
                  <div className="w-5 h-0.5 bg-white"></div>
                  <div className="w-5 h-0.5 bg-white"></div>
                </div>
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black border-neutral-800 text-white w-80">
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
      <section id="hero" className="relative h-[50vh] flex items-end pb-12 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(https://cdn.poehali.dev/files/image_2026-01-09_18-33-04.png)`,
            filter: 'brightness(0.6)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-end justify-between">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight max-w-lg">
              LS DETAILING - БОЛЬШЕ, ЧЕМ ДЕТЕЙЛИНГ.
            </h1>
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold text-sm px-10 h-12 rounded-md uppercase hidden md:flex">
              ОСТАВИТЬ ЗАЯВКУ
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6 bg-[#0a0a0a]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-yellow-400 font-bold mb-8 text-sm">/01</div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {[
              { icon: 'Droplets', title: 'БЕРЕЖНАЯ МОЙКА АВТОМОБИЛЯ', desc: 'МНОГОСТУПЕНЧАТАЯ МОЙКА С ИСПОЛЬЗОВАНИЕМ ПРОФЕССИОНАЛЬНОЙ ХИМИИ И ОБОРУДОВАНИЯ' },
              { icon: 'Sparkles', title: 'ПОЛИРОВКА КУЗОВА', desc: 'ВОССТАНОВЛЕНИЕ ЛАКОКРАСОЧНОГО ПОКРЫТИЯ ДО ЗАВОДСКОГО СОСТОЯНИЯ' },
              { icon: 'Wind', title: 'ХИМЧИСТКА САЛОНА', desc: 'ГЛУБОКАЯ ОЧИСТКА ВСЕХ ПОВЕРХНОСТЕЙ САЛОНА С УДАЛЕНИЕМ ПЯТЕН И ЗАПАХОВ' },
              { icon: 'Shield', title: 'НАНОКЕРАМИЧЕСКОЕ ПОКРЫТИЕ', desc: 'ДОЛГОВРЕМЕННАЯ ЗАЩИТА КУЗОВА НА 2-5 ЛЕТ С ГИДРОФОБНЫМ ЭФФЕКТОМ' },
              { icon: 'Lightbulb', title: 'ОБРАБОТКА ФАР И ФОНАРЕЙ', desc: 'ВОССТАНОВЛЕНИЕ ПРОЗРАЧНОСТИ ОПТИКИ И ЗАЩИТНОЕ ПОКРЫТИЕ' },
              { icon: 'Zap', title: 'ОЗОНАЦИЯ САЛОНА', desc: 'УНИЧТОЖЕНИЕ БАКТЕРИЙ, ВИРУСОВ И НЕПРИЯТНЫХ ЗАПАХОВ' }
            ].map((service, index) => (
              <Card key={index} className="bg-[#121212] border-neutral-800 hover:border-yellow-400/30 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={service.icon as any} size={22} className="text-yellow-400" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold mb-2 text-white uppercase">{service.title}</h3>
                      <p className="text-xs text-gray-400 leading-relaxed">{service.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold text-sm px-20 h-12 rounded-md uppercase">
              ВСЕ УСЛУГИ
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Section /02 */}
      <section id="portfolio" className="py-16 px-6 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="text-yellow-400 font-bold mb-4 text-sm">/02</div>
          <h2 className="text-4xl md:text-5xl font-black mb-10">НАШИ РАБОТЫ</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
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
              <div key={index} className="relative group cursor-pointer overflow-hidden rounded-lg h-72 bg-neutral-900">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-sm font-black whitespace-pre-line uppercase leading-tight">{item}</div>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Icon name="ArrowUpRight" size={18} />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold text-sm px-20 h-12 rounded-md uppercase">
              ВСЕ РАБОТЫ
            </Button>
          </div>
        </div>
      </section>

      {/* Section /03 - Photos + Text */}
      <section className="py-16 px-6 bg-[#0a0a0a]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-yellow-400 font-bold mb-8 text-sm">/03</div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left - 2x2 grid of photos */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-neutral-900 rounded-lg h-48"></div>
              <div className="bg-neutral-900 rounded-lg h-48"></div>
              <div className="bg-neutral-900 rounded-lg h-48"></div>
              <div className="bg-neutral-900 rounded-lg h-48"></div>
            </div>
            
            {/* Right - Text content */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight">
                ПОЧЕМУ ИМЕННО LS DETAILING?
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                В LS DETAILING мы предлагаем не просто услуги по уходу за автомобилем, а комплексный подход к сохранению его ценности и внешнего вида. Наши специалисты используют только сертифицированные материалы и современное оборудование, что гарантирует высочайшее качество работы.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-black font-black text-lg">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm mb-1 uppercase">ПРОФЕССИОНАЛЬНОЕ ОБОРУДОВАНИЕ</h3>
                    <p className="text-gray-400 text-xs">ИСПОЛЬЗУЕМ ТОЛЬКО СЕРТИФИЦИРОВАННУЮ АВТОХИМИЮ</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-black font-black text-lg">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm mb-1 uppercase">ОПЫТНЫЕ МАСТЕРА</h3>
                    <p className="text-gray-400 text-xs">КОМАНДА ПРОФЕССИОНАЛОВ С МНОГОЛЕТНИМ ОПЫТОМ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section /04 */}
      <section id="reviews" className="py-16 px-6 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="text-yellow-400 font-bold mb-4 text-sm">/04</div>
          <h2 className="text-4xl md:text-5xl font-black mb-10">ОТЗЫВЫ</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'ИВАН ПЕТРОВ', date: '15.12.2023', text: 'Невероятный результат! Машина выглядит лучше чем из салона. Спасибо команде профессионалов за качественную работу!' },
              { name: 'АЛЕКСЕЙ СМИРНОВ', date: '10.12.2023', text: 'Делал полный детейлинг. Очень доволен качеством работы. Рекомендую всем!' },
              { name: 'МАРИЯ КОЗЛОВА', date: '05.12.2023', text: 'Отличный сервис, внимательное отношение. Химчистка салона на высоте!' },
              { name: 'ДМИТРИЙ ВОЛКОВ', date: '01.12.2023', text: 'Быстро, качественно, профессионально. Цена соответствует качеству.' },
              { name: 'ОЛЬГА НОВИКОВА', date: '28.11.2023', text: 'Спасибо за отличную работу! Машина засияла как новая.' },
              { name: 'АНДРЕЙ СОКОЛОВ', date: '20.11.2023', text: 'Лучший детейлинг центр! Всегда обращаюсь только к ним.' }
            ].map((review, index) => (
              <Card key={index} className="bg-[#121212] border-neutral-800">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-300 mb-4 leading-relaxed">{review.text}</p>
                  <div>
                    <div className="font-bold text-sm mb-1">{review.name}</div>
                    <div className="text-xs text-gray-500">{review.date}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section /05 - White Car + Text */}
      <section id="contact" className="py-16 px-6 bg-[#0a0a0a]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-yellow-400 font-bold mb-8 text-sm">/05</div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 leading-tight">
                LS DETAILING.<br />
                В ГОРОДЕ ЭЛЕГАНТНОСТИ<br />
                И ВЫСОКИХ СТАНДАРТОВ
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                Доверьте свой автомобиль профессионалам. Мы находимся в самом центре города и готовы предоставить вам услуги высочайшего качества.
              </p>
              <Button className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold text-sm px-12 h-12 rounded-md uppercase">
                ОСТАВИТЬ ЗАЯВКУ
              </Button>
            </div>
            <div className="h-96 bg-neutral-900 rounded-lg"></div>
          </div>

          {/* Leave Request Section - Yellow Car */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight">
                ОСТАВЬТЕ ЗАЯВКУ!
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                Оставьте заявку прямо сейчас, и наш менеджер свяжется с вами в ближайшее время для уточнения деталей.
              </p>
              <Button className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold text-sm px-12 h-12 rounded-md uppercase">
                ОСТАВИТЬ ЗАЯВКУ
              </Button>
            </div>
            <div className="h-96 bg-neutral-900 rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-6 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold text-sm px-20 h-12 rounded-md uppercase">
              ЗАКАЗАТЬ УСЛУГУ
            </Button>
          </div>
        </div>
      </section>

      {/* Footer Info /06 */}
      <section className="py-12 px-6 bg-[#0a0a0a]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-yellow-400 font-bold mb-8 text-sm">/06</div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="font-bold text-sm mb-3 uppercase">Наши телефоны</h3>
              <p className="text-gray-400 text-sm">+7 (999) 123-45-67</p>
              <p className="text-gray-400 text-sm">+7 (999) 765-43-21</p>
            </div>
            <div>
              <h3 className="font-bold text-sm mb-3 uppercase">Наш адрес</h3>
              <p className="text-gray-400 text-sm">Москва, ул. Примерная, д. 123, офис 45</p>
            </div>
            <div>
              <h3 className="font-bold text-sm mb-3 uppercase">Социальные сети</h3>
              <div className="flex gap-2">
                {['Youtube', 'Instagram', 'Facebook', 'Twitter'].map(social => (
                  <button 
                    key={social}
                    className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors"
                  >
                    <Icon name={social as any} size={18} className="text-black" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="w-full h-96 bg-neutral-900 rounded-lg"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-black border-t border-neutral-800">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
                <span className="text-black font-black text-lg">LS</span>
              </div>
              <div>
                <div className="font-black text-sm">LS DETAILING</div>
                <div className="text-[10px] text-gray-500">СТУДИЯ АВТОМОБИЛЬНОЙ ЭСТЕТИКИ</div>
              </div>
            </div>
            
            <div className="flex gap-6 text-sm">
              <a href="#services" className="text-gray-400 hover:text-yellow-400 transition-colors">УСЛУГИ</a>
              <a href="#portfolio" className="text-gray-400 hover:text-yellow-400 transition-colors">РАБОТЫ</a>
              <a href="#reviews" className="text-gray-400 hover:text-yellow-400 transition-colors">ОТЗЫВЫ</a>
              <a href="#contact" className="text-gray-400 hover:text-yellow-400 transition-colors">КОНТАКТЫ</a>
            </div>

            <div className="flex gap-2">
              {['Youtube', 'Instagram', 'Facebook', 'Twitter'].map(social => (
                <button 
                  key={social}
                  className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors"
                >
                  <Icon name={social as any} size={18} className="text-black" />
                </button>
              ))}
            </div>
          </div>
          
          <div className="border-t border-neutral-800 mt-8 pt-6 text-center">
            <p className="text-gray-600 text-xs">Все права защищены © 2024, LS Detailing | Сайт разработан в poehali.dev</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
