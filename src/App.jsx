import { LazyMotion, MotionConfig, domAnimation, m } from "framer-motion";
import { useState } from "react";
import {
  audience,
  faqs,
  icons,
  instagramCards,
  links,
  socials,
  steps,
  themes,
} from "./content";

const { CheckCircle2, ChevronLeft, ChevronRight, Menu, Moon, Sparkles, X } =
  icons;

const assetUrl = (path) => `${import.meta.env.BASE_URL}assets/${path}`;

function Instagram({ size = 18, className = "", ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function WhatsappLogo({ size = 18, className = "", ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M16.01 3.2A12.74 12.74 0 0 0 5.1 22.5L3.5 28.8l6.45-1.55A12.76 12.76 0 1 0 16.01 3.2Zm0 22.78c-1.93 0-3.82-.55-5.44-1.6l-.39-.25-3.83.92 1.02-3.73-.26-.41A10.08 10.08 0 1 1 16 25.98Z" />
      <path d="M21.73 18.52c-.31-.16-1.86-.92-2.15-1.03-.29-.1-.5-.15-.71.16-.21.31-.82 1.03-1 1.24-.18.21-.37.23-.68.08-.31-.16-1.32-.49-2.52-1.55-.93-.83-1.56-1.86-1.74-2.17-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.7-.97-2.33-.26-.61-.52-.53-.71-.54h-.6c-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.62s1.13 3.04 1.29 3.25c.16.21 2.22 3.39 5.38 4.75.75.32 1.34.52 1.8.66.76.24 1.45.21 1.99.13.61-.09 1.86-.76 2.13-1.5.26-.73.26-1.36.18-1.5-.08-.13-.29-.21-.61-.36Z" />
    </svg>
  );
}

function CarouselButton({ direction, onClick, label }) {
  const Icon = direction === "prev" ? ChevronLeft : ChevronRight;

  return (
    <button
      type="button"
      className="grid size-11 place-items-center rounded-full border border-gold/25 bg-white text-gold-dark shadow-subtle transition hover:-translate-y-0.5 hover:border-gold/60 hover:bg-off-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
      onClick={onClick}
      aria-label={label}
    >
      <Icon size={19} strokeWidth={1.8} aria-hidden="true" />
    </button>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

function Reveal({ children, className = "", delay = 0 }) {
  return (
    <m.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </m.div>
  );
}

function Button({ href, children, variant = "primary", className = "", ariaLabel }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold";
  const styles =
    variant === "primary"
      ? "bg-gold text-white shadow-soft hover:bg-gold-dark"
      : "border border-gold/45 bg-white/70 text-brown hover:border-gold hover:bg-white";

  return (
    <a className={`${base} ${styles} ${className}`} href={href} aria-label={ariaLabel}>
      {children}
    </a>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-brown/10 bg-white/86 backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8"
        aria-label="Navegação principal"
      >
        <a href="#inicio" className="group flex items-center gap-3">
          <span className="grid size-11 place-items-center rounded-full border border-gold/25 bg-off-white text-gold">
            <Sparkles size={20} strokeWidth={1.6} aria-hidden="true" />
          </span>
          <span className="leading-tight">
            <span className="block font-serif text-xl font-semibold text-brown">
              Maria Joana
            </span>
            <span className="block text-xs font-medium text-muted">Psicóloga</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition hover:text-brown"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={socials.instagram}
            aria-label="Abrir Instagram da Psicóloga Maria Joana"
            className="icon-link"
          >
            <Instagram size={18} aria-hidden="true" />
          </a>
          <a
            href={socials.whatsapp}
            aria-label="Conversar com Maria Joana pelo WhatsApp"
            className="icon-link"
          >
            <WhatsappLogo size={18} />
          </a>
          <Button href={socials.whatsapp} className="ml-2 py-2.5">
            <WhatsappLogo size={17} className="text-white" />
            Agendar conversa
          </Button>
        </div>

        <button
          type="button"
          className="icon-link lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-brown/10 bg-white px-5 py-4 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-muted hover:bg-off-white hover:text-brown"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button href={socials.whatsapp} className="mt-2 w-full">
              <WhatsappLogo size={17} className="text-white" />
              Agendar conversa
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function HeroPhoto() {
  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      <div className="absolute -left-5 top-9 h-[82%] w-[72%] rounded-[2.5rem] bg-beige/70" />
      <div className="absolute -right-4 -top-4 size-28 rounded-full border border-gold/35 sm:size-36" />
      <div className="hero-photo-frame relative overflow-hidden rounded-[2rem] border border-white/80 bg-off-white p-3 shadow-art">
        <img
          src={assetUrl("maria-joana-hero.jpeg")}
          alt="Psicóloga Maria Joana em seu consultório"
          width="1085"
          height="1357"
          className="aspect-[16/11] max-h-[560px] w-full rounded-[1.45rem] object-cover object-[50%_34%] sm:aspect-[4/5] sm:object-[50%_38%]"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </div>
      <div className="absolute -bottom-5 left-4 hidden rounded-2xl border border-white/80 bg-white/90 p-4 shadow-soft backdrop-blur sm:block sm:left-8">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-dark">
          TCC
        </p>
        <p className="mt-1 max-w-44 text-sm text-brown">
          Clareza para observar padrões e construir novos caminhos.
        </p>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="inicio" className="section-pad overflow-hidden pt-28 lg:pt-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
        <Reveal className="order-2 lg:order-1">
          <h1 className="max-w-3xl font-serif text-[2.7rem] font-semibold leading-[0.98] tracking-normal text-brown sm:text-6xl lg:text-[4.25rem]">
            Psicoterapia para construir uma vida com mais clareza, equilíbrio e direção.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
            Atendimento psicológico com foco em ansiedade, procrastinação, hábitos e
            desenvolvimento emocional por meio da TCC (Terapia Cognitivo-Comportamental).
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <span className="hidden sm:inline-flex">
              <Button href={socials.whatsapp}>
                <WhatsappLogo size={18} className="text-white" />
                Agendar pelo WhatsApp
              </Button>
            </span>
          </div>
        </Reveal>

        <Reveal className="order-1 lg:order-2" delay={0.12}>
          <HeroPhoto />
        </Reveal>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="section-pad bg-off-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <Reveal>
          <p className="section-kicker">Sobre</p>
          <h2>Quem é Maria Joana?</h2>
        </Reveal>
        <Reveal className="grid gap-6 md:grid-cols-[1fr_0.72fr]" delay={0.08}>
          <div className="space-y-4 text-base leading-8 text-muted">
            <p>
              Maria Joana é psicóloga e atua ajudando pessoas a compreenderem seus
              pensamentos, emoções e comportamentos, desenvolvendo estratégias mais
              saudáveis para lidar com desafios da vida cotidiana.
            </p>
            <p>
              Seu trabalho valoriza uma escuta ética, acolhedora e orientada para o
              desenvolvimento de recursos práticos, respeitando a história e o tempo de
              cada pessoa.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-gold/20 bg-white shadow-subtle">
            <img
              src={assetUrl("maria-joana-acolhimento.jpeg")}
              alt="Maria Joana em ambiente acolhedor de atendimento"
              width="1085"
              height="1357"
              className="h-72 w-full object-cover object-[50%_38%]"
              loading="lazy"
              decoding="async"
            />
            <div className="p-6">
              <Moon className="text-gold" size={28} strokeWidth={1.7} aria-hidden="true" />
              <p className="mt-5 font-serif text-2xl font-semibold text-brown">
                CRP: 05/79887
              </p>
              <p className="mt-3 text-sm leading-6 text-muted">
                Espaço reservado para identificação profissional, sem informações
                inventadas.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Themes() {
  return (
    <section id="temas" className="section-pad">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="section-kicker justify-center">Temas</p>
          <h2>Temas trabalhados</h2>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {themes.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal
                key={item.title}
                delay={index * 0.05}
                className="rounded-3xl border border-brown/10 bg-white p-6 shadow-subtle transition hover:-translate-y-1 hover:border-gold/35 hover:shadow-soft"
              >
                <span className="grid size-12 place-items-center rounded-2xl bg-off-white text-gold">
                  <Icon size={24} strokeWidth={1.7} aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-serif text-2xl font-semibold text-brown">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section id="abordagem" className="section-pad bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1fr_0.9fr] lg:px-8">
        <Reveal className="rounded-[2rem] bg-off-white p-7 sm:p-10">
          <p className="section-kicker">Abordagem</p>
          <h2>Uma escuta profissional, acolhedora e baseada em estratégia.</h2>
          <p className="mt-6 text-base leading-8 text-muted">
            A TCC (Terapia Cognitivo-Comportamental) ajuda o paciente a identificar
            padrões de pensamento e comportamento, desenvolver ferramentas práticas e
            construir mudanças graduais com consciência e responsabilidade.
          </p>
        </Reveal>
        <Reveal className="grid content-center gap-3" delay={0.08}>
          {audience.map((item) => (
            <div
              key={item}
              className="flex gap-3 rounded-2xl border border-brown/10 bg-white p-4 shadow-subtle"
            >
              <CheckCircle2
                className="mt-0.5 shrink-0 text-gold"
                size={18}
                strokeWidth={1.9}
                aria-hidden="true"
              />
              <p className="text-sm leading-6 text-muted">{item}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function Process() {
  const [active, setActive] = useState(0);
  const current = steps[active];
  const Icon = current.icon;
  const goTo = (offset) => setActive((value) => (value + offset + steps.length) % steps.length);

  return (
    <section id="atendimento" className="section-pad bg-off-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto flex max-w-5xl flex-col gap-6 text-center md:flex-row md:items-end md:justify-between md:text-left">
          <div>
            <p className="section-kicker md:justify-start">Atendimento</p>
            <h2>Como funciona o atendimento</h2>
          </div>
          <div className="mx-auto flex items-center gap-3 md:mx-0">
            <CarouselButton direction="prev" onClick={() => goTo(-1)} label="Ver etapa anterior" />
            <CarouselButton direction="next" onClick={() => goTo(1)} label="Ver próxima etapa" />
          </div>
        </Reveal>

        <Reveal className="mt-10 overflow-hidden rounded-[2rem] border border-white/80 bg-white p-4 shadow-soft sm:p-6">
          <div className="grid gap-5 lg:grid-cols-[0.86fr_1.14fr]">
            <m.article
              key={current.title}
              initial={{ opacity: 0, x: 22 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              className="relative min-h-72 overflow-hidden rounded-[1.55rem] bg-brown p-7 text-white"
            >
              <span className="absolute right-6 top-5 font-serif text-7xl text-white/10">
                0{active + 1}
              </span>
              <span className="grid size-13 place-items-center rounded-2xl bg-white/12 text-white ring-1 ring-white/15">
                <Icon size={25} strokeWidth={1.7} aria-hidden="true" />
              </span>
              <h3 className="mt-9 max-w-sm font-serif text-4xl font-semibold">
                {current.title}
              </h3>
              <p className="mt-4 max-w-md text-base leading-8 text-white/78">{current.text}</p>
            </m.article>

            <div className="grid gap-3 sm:grid-cols-2">
              {steps.map((step, index) => {
                const StepIcon = step.icon;
                const isActive = index === active;

                return (
                  <button
                    key={step.title}
                    type="button"
                    className={`group rounded-3xl border p-5 text-left transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold ${
                      isActive
                        ? "border-gold/45 bg-off-white shadow-subtle"
                        : "border-brown/10 bg-white hover:-translate-y-0.5 hover:border-gold/25 hover:bg-off-white/70"
                    }`}
                    onClick={() => setActive(index)}
                    aria-pressed={isActive}
                  >
                    <span className="flex items-center justify-between gap-3">
                      <span className="text-sm font-semibold text-gold-dark">0{index + 1}</span>
                      <StepIcon size={19} className="text-gold" strokeWidth={1.7} aria-hidden="true" />
                    </span>
                    <span className="mt-6 block font-serif text-2xl font-semibold text-brown">
                      {step.title}
                    </span>
                    <span className="mt-2 block text-sm leading-6 text-muted">{step.text}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CtaBand() {
  return (
    <section className="px-5 py-10 lg:px-8">
      <Reveal className="mx-auto flex max-w-7xl flex-col gap-6 overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#efe3d4] via-off-white to-white p-7 shadow-soft sm:p-10 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="max-w-2xl font-serif text-3xl font-semibold text-brown sm:text-4xl">
            Dar o primeiro passo pode ser mais simples do que parece.
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-muted">
            Entre em contato para tirar dúvidas e verificar disponibilidade de horários.
          </p>
        </div>
        <Button href={socials.whatsapp} className="shrink-0">
          <WhatsappLogo size={18} className="text-white" />
          Falar pelo WhatsApp
        </Button>
      </Reveal>
    </section>
  );
}

function InstagramSection() {
  const [active, setActive] = useState(0);
  const [selected, setSelected] = useState(null);
  const goTo = (offset) =>
    setActive((value) => (value + offset + instagramCards.length) % instagramCards.length);
  const visibleCards = instagramCards
    .slice(active)
    .concat(instagramCards.slice(0, active))
    .slice(0, 3);

  return (
    <section className="section-pad" aria-labelledby="instagram-title">
      <div className="mx-auto grid max-w-7xl gap-9 px-5 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
        <Reveal>
          <p className="section-kicker">Instagram</p>
          <h2 id="instagram-title">Acompanhe conteúdos sobre saúde emocional</h2>
          <p className="mt-5 text-base leading-8 text-muted">
            No Instagram, Maria Joana compartilha estratégias práticas para combater os
            problemas abordados aqui, como ansiedade, hábitos, procrastinação e padrões
            de comportamento.
          </p>
          <Button href={socials.instagram} variant="secondary" className="mt-7">
            <Instagram size={18} aria-hidden="true" />
            Ver Instagram
          </Button>
        </Reveal>
        <Reveal className="overflow-hidden rounded-[2rem] border border-brown/10 bg-off-white/80 p-4 shadow-subtle" delay={0.08}>
          <div className="mb-4 flex items-center justify-between gap-3">
            <p className="text-sm font-semibold text-gold-dark">
              Técnicas para vencer a procrastinação
            </p>
            <div className="flex gap-2">
              <CarouselButton direction="prev" onClick={() => goTo(-1)} label="Ver técnica anterior" />
              <CarouselButton direction="next" onClick={() => goTo(1)} label="Ver próxima técnica" />
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {visibleCards.map((card, index) => (
              <m.button
                key={card.title}
                type="button"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className={`insta-card ${
                  card.tone === "dark"
                    ? "insta-card-dark"
                    : card.tone === "gold"
                      ? "insta-card-gold"
                      : "insta-card-light"
                }`}
                onClick={() => setSelected(card)}
              >
                <span className="block font-serif text-3xl font-semibold leading-none">
                  {card.title}
                </span>
                <span className="mt-5 block text-sm leading-6 opacity-82">{card.shortText}</span>
                <span className="mt-8 inline-flex items-center text-sm font-semibold">
                  Abrir conteúdo
                  <ChevronRight className="ml-1" size={16} aria-hidden="true" />
                </span>
              </m.button>
            ))}
          </div>
          <div className="mt-5 flex justify-center gap-2" aria-label="Indicadores do carrossel">
            {instagramCards.map((card, index) => (
              <button
                key={card.title}
                type="button"
                className={`h-2 rounded-full transition-all ${
                  index === active ? "w-8 bg-gold" : "w-2 bg-gold/25"
                }`}
                onClick={() => setActive(index)}
                aria-label={`Ir para ${card.title}`}
              />
            ))}
          </div>
        </Reveal>
      </div>
      {selected ? <InstagramModal card={selected} onClose={() => setSelected(null)} /> : null}
    </section>
  );
}

function InstagramModal({ card, onClose }) {
  return (
    <m.div
      className="fixed inset-0 z-[70] grid place-items-center bg-brown/45 px-4 py-8 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="instagram-modal-title"
      onClick={onClose}
    >
      <m.div
        className="relative max-h-[88vh] w-full max-w-2xl overflow-auto rounded-[2rem] bg-white p-6 shadow-art sm:p-8"
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="absolute right-4 top-4 grid size-10 place-items-center rounded-full border border-brown/10 text-brown transition hover:bg-off-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          onClick={onClose}
          aria-label="Fechar conteúdo"
        >
          <X size={18} aria-hidden="true" />
        </button>
        <p className="section-kicker">Conteúdo do Instagram</p>
        <h3
          id="instagram-modal-title"
          className="max-w-xl font-serif text-4xl font-semibold leading-none text-brown sm:text-5xl"
        >
          {card.title}
        </h3>
        <p className="mt-4 max-w-xl text-base leading-7 text-muted">{card.shortText}</p>
        <div className="mt-7 grid gap-3">
          {card.content.map((item, index) => (
            <m.div
              key={item}
              className="rounded-2xl border border-brown/10 bg-off-white p-4 text-base leading-7 text-brown"
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.28, delay: index * 0.04 }}
            >
              {item}
            </m.div>
          ))}
        </div>
      </m.div>
    </m.div>
  );
}

function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section-pad bg-off-white" aria-labelledby="faq-title">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <Reveal className="text-center">
          <p className="section-kicker justify-center">FAQ</p>
          <h2 id="faq-title">Perguntas frequentes</h2>
        </Reveal>
        <div className="mt-10 grid gap-3">
          {faqs.map((faq, index) => {
            const active = open === index;
            return (
              <Reveal key={faq.question} delay={index * 0.03}>
                <div className="rounded-2xl border border-brown/10 bg-white shadow-subtle">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-medium text-brown focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                    aria-expanded={active}
                    aria-controls={`faq-${index}`}
                    onClick={() => setOpen(active ? -1 : index)}
                  >
                    <span>{faq.question}</span>
                    <span className="text-xl text-gold" aria-hidden="true">
                      {active ? "-" : "+"}
                    </span>
                  </button>
                  {active ? (
                    <div id={`faq-${index}`} className="px-5 pb-5 text-sm leading-7 text-muted">
                      {faq.answer}
                    </div>
                  ) : null}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="contato" className="section-pad">
      <Reveal className="mx-auto max-w-5xl rounded-[2rem] border border-gold/20 bg-brown p-8 text-center text-white shadow-soft sm:p-12">
        <h2 className="font-serif text-4xl font-semibold !text-white sm:text-5xl">
          Cuide da sua saúde emocional com acolhimento e direção.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/76">
          Agende uma conversa e entenda como a psicoterapia pode te ajudar no seu momento
          atual.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href={socials.whatsapp}>
            <WhatsappLogo size={18} className="text-white" />
            Agendar pelo WhatsApp
          </Button>
          <Button href={socials.instagram} variant="secondary" className="bg-white text-brown">
            <Instagram size={18} aria-hidden="true" />
            Acompanhar no Instagram
          </Button>
        </div>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-brown/10 bg-off-white px-5 py-10 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 text-sm text-muted md:grid-cols-[1.1fr_0.9fr_0.8fr]">
        <div>
          <p className="font-serif text-2xl font-semibold text-brown">
            Psicóloga Maria Joana
          </p>
          <p className="mt-3 max-w-md leading-7">
            Atendimento psicológico com ética, acolhimento e responsabilidade.
          </p>
          <p className="mt-3 text-brown">CRP: 05/79887</p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {links.slice(1).map((link) => (
            <a key={link.href} href={link.href} className="hover:text-brown">
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-3 md:items-end">
          <a href={socials.instagram} className="inline-flex items-center gap-2 hover:text-brown">
            <Instagram size={16} aria-hidden="true" />
            Instagram
          </a>
          <a href={socials.whatsapp} className="inline-flex items-center gap-2 hover:text-brown">
            <WhatsappLogo size={16} />
            WhatsApp
          </a>
          <p className="mt-4">© 2026 Psicóloga Maria Joana.</p>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsapp() {
  return (
    <a
      href={socials.whatsapp}
      className="fixed bottom-4 left-4 right-4 z-40 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-gold-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold sm:hidden"
      aria-label="Agendar conversa pelo WhatsApp"
    >
      <WhatsappLogo size={18} className="text-white" />
      Agendar pelo WhatsApp
    </a>
  );
}

export default function App() {
  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion="user">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Themes />
          <Approach />
          <Process />
          <CtaBand />
          <InstagramSection />
          <Faq />
          <FinalCta />
        </main>
        <Footer />
        <FloatingWhatsapp />
      </MotionConfig>
    </LazyMotion>
  );
}
