import { useState } from "react";
import Icon from "@/components/ui/icon";

const NAV_ITEMS = [
  { label: "Обо мне", href: "#about" },
  { label: "Услуги", href: "#services" },
  { label: "FAQ", href: "#faq" },
  { label: "Контакты", href: "#contacts" },
];

const SERVICES = [
  {
    num: "01",
    title: "Разговорный английский",
    desc: "Живые диалоги, реальные ситуации, уверенность в речи. Учимся говорить — а не переводить в уме.",
    icon: "MessageCircle",
  },
  {
    num: "02",
    title: "Учебники",
    desc: "В основе курса лежат авторитетные международные учебники, признанные во всем мире:\n\nДля взрослых и подростков: Outcomes и Speakout — курсы с упором на реальную, живую лексику и уверенную коммуникацию.\n\nДля детей: Super Minds — увлекательная программа, которая развивает не только язык, но и когнитивные навыки ребенка.",
    icon: "BookOpen",
  },
  {
    num: "03",
    title: "Методика",
    desc: "На моих уроках нет бессистемной «свободной формы» или хаоса. За красочными интерактивными досками и интересными материалами стоит выверенная структура. Мы уделяем пристальное внимание построению предложений, связи слов и грамотной грамматике. Каждый этап урока логичен и работает на вашу итоговую цель.",
    icon: "GraduationCap",
  },
  {
    num: "04",
    title: "Платформы",
    desc: "Техническая сторона не должна отвлекать от учебы. Все занятия проходят на стабильных и современных платформах. Вам не потребуется VPN, покупка платных подписок или установка сложных программ — всё готово для комфортной работы в один клик.",
    icon: "Monitor",
  },
];

const FAQS = [
  {
    q: "Где и как проходят занятия?",
    a: "Все уроки проходят в комфортном онлайн-формате. Мы подбираем удобное для вас расписание и созваниваемся на платформе Zoom. Это обеспечивает стабильную связь и позволяет использовать все необходимые интерактивные инструменты для полноценного погружения в языковую среду.",
  },
  {
    q: "Я совсем новичок, мне подойдут ваши уроки?",
    a: "Да, абсолютно! Мои программы адаптируются под любой уровень, включая нулевой. Мы начнем с самых основ, сразу выстраивая правильную базу и логику языка, чтобы вы избежали типичных ошибок и быстро почувствовали уверенность.",
  },
  {
    q: "Как быстро я увижу результат?",
    a: "Первые заметные сдвиги — понимание структуры урока, новые слова и преодоление первичного барьера — вы увидите уже через 4–6 занятий. Однако язык требует системы: для уверенного общения на новом уровне потребуется около 3–4 месяцев регулярной практики.",
  },
  {
    q: "Обязательно ли делать домашнее задание?",
    a: "Да, домашние задания есть всегда. Это важнейшая часть процесса — без самостоятельного закрепления материала ваш прогресс будет идти значительно медленнее. При этом я понимаю, что у всех бывают накладки или форс-мажоры. Школьные «двойки» я не ставлю, но жду от вас осознанного подхода и работы на результат.",
  },
  {
    q: "Как часто нужно заниматься?",
    a: "Нерегулярные занятия, к сожалению, приносят очень мало пользы. Чтобы реально повышать свой уровень и двигаться вперед, я рекомендую заниматься минимум 2 раза в неделю. Если же ваша цель — просто поддерживать уже имеющийся хороший уровень языка, будет достаточно 1 раза в неделю.",
  },
];

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen font-golos" style={{ background: "var(--cream)", color: "var(--ink)" }}>

      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4"
        style={{
          background: "rgba(247,244,239,0.92)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(26,23,20,0.08)",
        }}
      >
        <span className="font-cormorant text-2xl font-semibold tracking-tight" style={{ color: "var(--ink)" }}>
          Anna<span style={{ color: "var(--ochre)" }}>.</span>
        </span>
        <div className="hidden md:flex gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="text-sm font-medium story-line pb-0.5 transition-colors hover:opacity-70"
              style={{ color: "var(--ink)" }}
            >
              {item.label}
            </button>
          ))}
        </div>
        <button
          onClick={() => scrollTo("#contacts")}
          className="hidden md:block text-sm font-semibold px-5 py-2.5 transition-all hover:opacity-90"
          style={{ background: "var(--ink)", color: "var(--cream)" }}
        >
          Записаться
        </button>
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="меню">
          <Icon name={menuOpen ? "X" : "Menu"} size={22} />
        </button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col pt-20 px-8 pb-8 gap-6 animate-fade-in"
          style={{ background: "var(--cream)" }}
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="font-cormorant text-4xl font-light text-left border-b pb-4"
              style={{ color: "var(--ink)", borderColor: "rgba(26,23,20,0.1)" }}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#contacts")}
            className="mt-4 text-base font-semibold px-6 py-4 text-center"
            style={{ background: "var(--ink)", color: "var(--cream)" }}
          >
            Записаться на урок
          </button>
        </div>
      )}

      {/* HERO */}
      <section
        className="relative min-h-screen flex flex-col justify-end pb-20 px-6 md:px-12 pt-28 overflow-hidden clip-diagonal"
        style={{ background: "var(--ink)" }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(var(--cream) 1px, transparent 1px), linear-gradient(90deg, var(--cream) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div
          className="absolute top-32 right-10 md:right-24 w-px h-40 md:h-64"
          style={{ background: "var(--ochre)" }}
        />
        <div
          className="absolute top-32 right-10 md:right-24 w-2 h-2 rounded-full -translate-x-0.5"
          style={{ background: "var(--ochre)" }}
        />

        <div className="relative max-w-5xl">
          <p
            className="font-golos text-sm font-medium tracking-[0.3em] uppercase mb-6 animate-fade-up"
            style={{ color: "var(--ochre)", animationDelay: "0.1s", opacity: 0 }}
          >
            Репетитор по английскому
          </p>
          <h1
            className="font-cormorant font-light leading-[1.05] mb-8 animate-fade-up"
            style={{ fontSize: "clamp(3rem, 9vw, 8rem)", color: "var(--cream)", animationDelay: "0.2s", opacity: 0 }}
          >
            Говорите
            <br />
            <em style={{ color: "var(--ochre)" }}>свободно.</em>
            <br />
            Думайте
            <br />
            по-английски.
          </h1>
          <p
            className="font-golos text-base md:text-lg max-w-md mb-10 animate-fade-up"
            style={{ color: "rgba(247,244,239,0.65)", animationDelay: "0.35s", opacity: 0 }}
          >
            Онлайн-занятия для тех, кто хочет не просто учить слова — а начать по-настоящему общаться.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-up"
            style={{ animationDelay: "0.5s", opacity: 0 }}
          >
            <button
              onClick={() => scrollTo("#contacts")}
              className="group flex items-center gap-3 px-8 py-4 font-semibold text-base transition-all hover:gap-4"
              style={{ background: "var(--ochre)", color: "var(--ink)" }}
            >
              Начать занятия
              <Icon name="ArrowRight" size={18} />
            </button>
            <button
              onClick={() => scrollTo("#services")}
              className="px-8 py-4 font-medium text-base transition-all hover:opacity-70"
              style={{ border: "1px solid rgba(247,244,239,0.3)", color: "var(--cream)" }}
            >
              Узнать об услугах
            </button>
          </div>
        </div>

        <div
          className="relative mt-20 pt-8 flex flex-wrap gap-10 md:gap-16"
          style={{ borderTop: "1px solid rgba(247,244,239,0.12)" }}
        >
          {[
            ["5+", "лет опыта"],
            ["A1→B1", "все уровни"],
          ].map(([num, label]) => (
            <div key={label}>
              <p className="font-cormorant text-4xl font-semibold" style={{ color: "var(--ochre)" }}>
                {num}
              </p>
              <p className="font-golos text-sm mt-1" style={{ color: "rgba(247,244,239,0.5)" }}>
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 md:py-36 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="relative order-2 md:order-1">
            <div
              className="aspect-[3/4] max-w-sm mx-auto md:mx-0 relative overflow-hidden"
              style={{ background: "var(--paper)" }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-30">
                <Icon name="User" size={64} />
                <span className="font-golos text-sm">Ваше фото</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: "var(--ochre)" }} />
            </div>
            <div
              className="absolute -bottom-6 right-0 md:-right-6 w-24 h-24 flex flex-col items-center justify-center"
              style={{ background: "var(--ink)" }}
            >
              <p className="font-cormorant text-2xl font-semibold" style={{ color: "var(--ochre)" }}>5+</p>
              <p className="font-golos text-[10px] text-center leading-tight mt-0.5" style={{ color: "rgba(247,244,239,0.6)" }}>
                лет<br />практики
              </p>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <p
              className="font-golos text-xs font-semibold tracking-[0.3em] uppercase mb-4"
              style={{ color: "var(--ink)" }}
            >
              Обо мне
            </p>
            <h2
              className="font-cormorant font-light leading-tight mb-6"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--ink)" }}
            >
              Анна Дмитриевна —<br /><em>преподаватель</em><br />с живым подходом
            </h2>
            <div className="space-y-4 font-golos text-base leading-relaxed" style={{ color: "var(--stone)" }}>
              <p>
                Преподаю английский более пяти лет. Специализация — разговорная практика: помогаю людям перейти от «знаю, но боюсь говорить» к уверенному живому общению.
              </p>
              <p>
                Каждое занятие строится вокруг реальных ситуаций, а не грамматических таблиц. Мой подход — это среда, в которой говорить интереснее, чем молчать.
              </p>
              <p>
                Образование: Уральский государственный педагогический университет (УрГПУ).
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="py-24 md:py-36 px-6 md:px-12 clip-diagonal-reverse"
        style={{ background: "var(--paper)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
            <div>
              <p
                className="font-golos text-xs font-semibold tracking-[0.3em] uppercase mb-4"
                style={{ color: "var(--ochre)" }}
              >
                Что я предлагаю
              </p>
              <h2
                className="font-cormorant font-light leading-tight"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--ink)" }}
              >
                О моих уроках
              </h2>
            </div>
            <p className="font-golos text-sm max-w-xs leading-relaxed" style={{ color: "var(--stone)" }}>
              Занятия адаптируются под ваши цели — вне зависимости от уровня и темпа обучения.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-0">
            {SERVICES.map((s, i) => (
              <div
                key={s.num}
                className="group p-8 md:p-10 hover-lift transition-all cursor-default relative"
                style={{
                  background: i % 2 === 0 ? "var(--cream)" : "var(--ink)",
                  color: i % 2 === 0 ? "var(--ink)" : "var(--cream)",
                }}
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="font-cormorant text-5xl font-light leading-none opacity-20">{s.num}</span>
                  <Icon
                    name={s.icon as "MessageCircle"}
                    size={20}
                    style={{ color: "var(--ochre)" }}
                  />
                </div>
                <h3 className="font-cormorant text-2xl font-semibold mb-3">{s.title}</h3>
                <div className="font-golos text-sm leading-relaxed" style={{ opacity: 0.65 }}>
                  {s.desc.split("\n\n").map((para, idx) => (
                    <p key={idx} className={idx > 0 ? "mt-3" : ""}>{para}</p>
                  ))}
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-px opacity-10" style={{ background: "currentColor" }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-24 md:py-36 px-6 md:px-12" style={{ background: "var(--ink)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="font-golos text-xs font-semibold tracking-[0.3em] uppercase mb-4" style={{ color: "var(--ochre)" }}>
              Как это выглядит
            </p>
            <h2 className="font-cormorant font-light leading-tight" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--cream)" }}>
              Примеры занятий
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              {
                url: "https://cdn.poehali.dev/projects/ec5a9b18-490e-43ce-97e7-6942f7af99a5/bucket/00dffc5c-0f7f-4b58-bdce-1bfeb6af2baa.jpg",
                label: "Outcomes el-2",
                span: "md:col-span-2 md:row-span-2",
              },
              {
                url: "https://cdn.poehali.dev/projects/ec5a9b18-490e-43ce-97e7-6942f7af99a5/bucket/66ce0145-ac9c-43b2-a8e1-a3b8e3b0b707.jpg",
                label: "Outcome el-1",
                span: "",
              },
              {
                url: "https://cdn.poehali.dev/projects/ec5a9b18-490e-43ce-97e7-6942f7af99a5/bucket/e8e5ba5b-7651-4679-a347-a5eae34595cf.jpg",
                label: "Speakout B1",
                span: "",
              },
              {
                url: "https://cdn.poehali.dev/projects/ec5a9b18-490e-43ce-97e7-6942f7af99a5/bucket/8c65241d-5b8d-4103-97d3-919ff6986bb9.jpg",
                label: "Super Minds",
                span: "col-span-2",
              },
            ].map((img) => (
              <div key={img.url} className={`group relative overflow-hidden hover-lift ${img.span}`} style={{ minHeight: "200px" }}>
                <img
                  src={img.url}
                  alt={img.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ minHeight: "200px" }}
                />
                <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(to top, rgba(59,31,26,0.85) 0%, transparent 60%)" }}>
                  <span className="font-golos text-xs font-semibold tracking-wider uppercase" style={{ color: "var(--ochre)" }}>
                    {img.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 md:py-36 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <p
            className="font-golos text-xs font-semibold tracking-[0.3em] uppercase mb-4 text-center"
            style={{ color: "var(--ochre)" }}
          >
            Вопросы и ответы
          </p>
          <h2
            className="font-cormorant font-light leading-tight text-center mb-16"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--ink)" }}
          >
            Часто спрашивают
          </h2>
          <div className="space-y-0">
            {FAQS.map((faq, i) => (
              <div key={i} style={{ borderTop: "1px solid rgba(26,23,20,0.12)" }}>
                <button
                  className="w-full flex items-center justify-between py-6 text-left gap-6 transition-opacity hover:opacity-70"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-cormorant text-xl font-medium" style={{ color: "var(--ink)" }}>
                    {faq.q}
                  </span>
                  <Icon
                    name={openFaq === i ? "Minus" : "Plus"}
                    size={18}
                    style={{ flexShrink: 0, color: "var(--ochre)" }}
                  />
                </button>
                {openFaq === i && (
                  <p className="font-golos text-base pb-6 leading-relaxed animate-fade-in" style={{ color: "var(--stone)" }}>
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
            <div style={{ borderTop: "1px solid rgba(26,23,20,0.12)" }} />
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section
        id="contacts"
        className="py-24 md:py-36 px-6 md:px-12 overflow-hidden relative"
        style={{ background: "var(--ink)" }}
      >
        <div className="absolute top-0 left-0 w-px h-full opacity-10" style={{ background: "var(--cream)" }} />
        <div className="absolute top-0 right-16 md:right-32 w-px h-full opacity-10" style={{ background: "var(--cream)" }} />
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24">
          <div>
            <p
              className="font-golos text-xs font-semibold tracking-[0.3em] uppercase mb-4"
              style={{ color: "var(--ochre)" }}
            >
              Начать
            </p>
            <h2
              className="font-cormorant font-light leading-tight mb-6"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--cream)" }}
            >
              Запишитесь<br /><em style={{ color: "var(--ochre)" }}>на первый</em><br />урок
            </h2>
            <p className="font-golos text-base mb-10 leading-relaxed" style={{ color: "rgba(247,244,239,0.55)" }}>
              Первое занятие — знакомство: определим ваш уровень, цели и формат работы. Без обязательств.
            </p>
            <div className="space-y-4">
              {[
                { icon: "MessageCircle", label: "Telegram", value: "@dema_demina" },
                { icon: "Phone", label: "Телефон", value: "+7 (992) 334-95-33" },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 flex items-center justify-center"
                    style={{ background: "rgba(247,244,239,0.08)" }}
                  >
                    <Icon name={c.icon as "Mail"} size={16} style={{ color: "var(--ochre)" }} />
                  </div>
                  <div>
                    <p
                      className="font-golos text-xs font-semibold tracking-wider uppercase"
                      style={{ color: "rgba(247,244,239,0.4)" }}
                    >
                      {c.label}
                    </p>
                    <p className="font-golos text-sm" style={{ color: "var(--cream)" }}>
                      {c.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="p-8 md:p-10"
            style={{ background: "rgba(247,244,239,0.05)", border: "1px solid rgba(247,244,239,0.1)" }}
          >
            <h3 className="font-cormorant text-2xl font-semibold mb-6" style={{ color: "var(--cream)" }}>
              Оставить заявку
            </h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label
                  className="font-golos text-xs font-semibold tracking-wider uppercase block mb-2"
                  style={{ color: "rgba(247,244,239,0.45)" }}
                >
                  Имя
                </label>
                <input
                  type="text"
                  placeholder="Как вас зовут?"
                  className="w-full px-4 py-3 font-golos text-sm bg-transparent outline-none transition-colors"
                  style={{ border: "1px solid rgba(247,244,239,0.15)", color: "var(--cream)" }}
                />
              </div>
              <div>
                <label
                  className="font-golos text-xs font-semibold tracking-wider uppercase block mb-2"
                  style={{ color: "rgba(247,244,239,0.45)" }}
                >
                  Телефон или Telegram
                </label>
                <input
                  type="text"
                  placeholder="+7 или @username"
                  className="w-full px-4 py-3 font-golos text-sm bg-transparent outline-none transition-colors"
                  style={{ border: "1px solid rgba(247,244,239,0.15)", color: "var(--cream)" }}
                />
              </div>
              <div>
                <label
                  className="font-golos text-xs font-semibold tracking-wider uppercase block mb-2"
                  style={{ color: "rgba(247,244,239,0.45)" }}
                >
                  Ваша цель
                </label>
                <textarea
                  rows={3}
                  placeholder="Расскажите, чего хотите достичь..."
                  className="w-full px-4 py-3 font-golos text-sm bg-transparent outline-none resize-none"
                  style={{ border: "1px solid rgba(247,244,239,0.15)", color: "var(--cream)" }}
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 font-golos font-semibold text-sm tracking-wide transition-all hover:opacity-90 flex items-center justify-center gap-2 mt-2"
                style={{ background: "var(--ochre)", color: "var(--ink)" }}
              >
                Отправить заявку
                <Icon name="ArrowRight" size={16} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="py-8 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4"
        style={{ background: "var(--ink)", borderTop: "1px solid rgba(247,244,239,0.08)" }}
      >
        <span className="font-cormorant text-xl font-semibold" style={{ color: "var(--cream)" }}>
          Anna<span style={{ color: "var(--ochre)" }}>.</span>
        </span>
        <p className="font-golos text-xs" style={{ color: "rgba(247,244,239,0.3)" }}>
          © 2026 — Репетитор по английскому языку
        </p>
      </footer>
    </div>
  );
};

export default Index;