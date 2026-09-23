import { createFileRoute } from '@tanstack/react-router'
import { ArrowDown, ArrowRight, ArrowUpRight, Menu, X } from 'lucide-react'
import { useState } from 'react'

const assets = 'https://mtbzk9vg.cdn.imgeng.in/wp-content/uploads'
const logo = 'https://mtbzk9vg.cdn.imgeng.in/wp-content/uploads/2025/01/Group-16.svg'
const team = [
  { name: 'Shana Fried', title: 'Founder & Principal', image: `${assets}/2023/11/Bitmap-Copy-2.png` },
  { name: 'Raphaël Dela Cola', title: 'Partner', image: `${assets}/2023/10/SF901515-Edit-Wide-scalednew.jpg` },
  { name: 'Randolph Miller-Taylor', title: 'Of Counsel', image: `${assets}/2023/10/Randolph-Miller-Taylor.jpg` },
]
const practices = [
  { title: 'AI & Technology Law', image: `${assets}/2026/09/shutterstock_2383290311.jpg`, description: 'Navigate the legal questions at the intersection of emerging technology, innovation, and your business.' },
  { title: 'Employment Law', image: `${assets}/2023/11/the-new-european-privacy-laws-2.png`, description: 'Thoughtful guidance for the people, policies, and agreements that shape your workplace.' },
  { title: 'Entertainment Law', image: `${assets}/2023/10/12457DCA-CFA8-41C5-9158-78805AF194CC.png`, description: 'Protect your creative work and make confident deals across music, media, and entertainment.' },
  { title: 'Business Law', image: `${assets}/2023/11/jorge-vasconez-buYlndcNnjM-unsplash-Copy-2.png`, description: 'Practical, strategic counsel for entrepreneurs and businesses building something meaningful.' },
  { title: 'Intellectual Property', image: `${assets}/2023/10/C5A6D2F6-56BB-4E89-91B0-408482F4BCB3-optimized.png`, description: 'Secure the copyrights, trademarks, and ideas that make your brand yours.' },
]
const stories = [
  { quote: 'The Fried Firm has far surpassed my hopes and expectations for a legal team. The personal touch is unparalleled. We have closed a few deals in rapid succession and I look forward to a long-term, fruitful relationship.', by: 'Drew Moerlein' },
  { quote: 'Very professional and very thorough. I needed help with figuring out what brands I could use in my video and they went out of their way to help me give me the best advice. Highly recommend them.', by: 'Jake Diamond' },
]
const articles = [
  { title: 'Why “Work Made for Hire” Is Not Enough', date: 'August 17, 2026', image: `${assets}/2026/08/TFF-agreement-sign.jpg`, text: 'For commissioned creative work, a present assignment of copyright is often what actually secures ownership.' },
  { title: 'Vibe Coding Legal Issues: Who Owns AI-Generated Code?', date: 'August 10, 2026', image: `${assets}/2026/08/shutterstock_2678609791.jpg`, text: 'Understand ownership, copyright, licensing, and liability before you launch an AI-generated product.' },
  { title: 'Can You Trademark a Song Title?', date: 'August 03, 2026', image: `${assets}/2026/08/shutterstock_2655013783.jpg`, text: 'Learn when a title can become protectable through branding, merchandise, or a series of creative works.' },
]

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'The Fried Firm | Lawyers for Creatives' },
      { name: 'description', content: 'Boutique legal and business counsel for people and businesses in the creative industries.' },
    ],
  }),
  component: Home,
})

function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [storyIndex, setStoryIndex] = useState(0)
  const toggleMenu = () => setMenuOpen((open) => !open)

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-30 text-white">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12 lg:py-7">
          <a href="#home" aria-label="The Fried Firm home" className="relative z-40 w-36 sm:w-44 lg:w-56">
            <img src={logo} alt="The Fried Firm" className="w-full" />
          </a>
          <nav className="hidden items-center gap-8 text-[11px] tracking-[0.04em] xl:flex" aria-label="Main navigation">
            <a className="nav-link" href="#practice">Practice Areas</a><a className="nav-link" href="#team">Our Team</a>
            <a className="nav-link" href="#resources">Blog</a><a className="nav-link" href="#testimonials">Testimonials</a>
          </nav>
          <div className="hidden flex-col items-end gap-2 lg:flex">
            <a href="tel:718-422-0500" className="text-lg font-semibold italic tracking-wide">(718) 422-0500</a>
            <a className="outline-button" href="#contact">Chat with Us <ArrowUpRight size={14} /></a>
          </div>
          <button onClick={toggleMenu} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} className="relative z-40 flex size-11 items-center justify-center border border-white/50 xl:hidden">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && <nav aria-label="Mobile navigation" className="absolute inset-x-0 top-0 -z-0 flex min-h-screen flex-col justify-center gap-7 bg-[#221f20] px-10 text-2xl font-medium sm:items-center sm:text-3xl">
          {[["Practice Areas", "#practice"], ["Our Team", "#team"], ["Blog", "#resources"], ["Testimonials", "#testimonials"], ["Contact", "#contact"]].map(([name, href]) => <a key={name} href={href} onClick={() => setMenuOpen(false)} className="hover:text-accent">{name}</a>)}
          <a href="tel:718-422-0500" className="pt-3 text-base text-white/60">(718) 422-0500</a>
        </nav>}
      </header>

      <section id="home" className="hero relative isolate flex min-h-[700px] items-center justify-center overflow-hidden bg-[#221f20] text-center text-white sm:min-h-[780px] lg:min-h-[860px]">
        <img className="absolute inset-0 -z-20 h-full w-full object-cover object-center" src={`${assets}/2023/10/46604D26-F27D-410D-997F-BD7082259886-optimized.png`} alt="Historic city architecture, home to the creative businesses we serve" />
        <div className="absolute inset-0 -z-10 bg-[#181718]/75" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#171617]/30 via-transparent to-[#171617]/50" />
        <div className="hero-copy mx-auto max-w-5xl px-6 pt-24">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.42em] text-white/65 sm:text-xs">Your imagination is safe with us</p>
          <h1 className="text-[clamp(3.2rem,8vw,7.8rem)] font-normal leading-[0.96] tracking-[0.025em]">Lawyers for<br /><strong className="font-semibold">Creatives</strong></h1>
          <p className="mx-auto mt-7 max-w-md text-sm leading-7 text-white/75 sm:text-base">Creative counsel for people with ideas worth protecting.</p>
          <a className="outline-button mx-auto mt-8" href="#practice">Explore how we help <ArrowDown size={14} /></a>
        </div>
        <div className="absolute bottom-7 left-7 hidden items-center gap-4 text-[9px] uppercase tracking-[0.25em] text-white/60 sm:flex"><span className="h-px w-10 bg-accent" /> Brooklyn · New York</div>
        <a href="#about" aria-label="Scroll to learn about the firm" className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[9px] uppercase tracking-[0.25em] text-white/55"><span>Scroll to discover</span><span className="h-8 w-px bg-white/40" /></a>
      </section>

      <section id="about" className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <BrandMark dark />
          <SectionTitle eyebrow="A little about us" title={<>About <strong>Us</strong></>} />
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
            <img className="aspect-[1.42] w-full object-cover grayscale transition duration-700 hover:grayscale-0" src={`${assets}/2025/01/finn-ijtVkq-X8uw-unsplash.jpg`} alt="A light-filled, creative workspace" />
            <div className="max-w-xl lg:py-10">
              <p className="text-base leading-8 text-muted-foreground sm:text-lg sm:leading-9">We are a full-service boutique law firm that specializes in providing cost-effective legal and business advice to individuals and businesses engaged in the arts and entertainment world. Our creative spirits moonlight as attorneys and take a holistic approach to finding the most unique, innovative, and legally sound strategies for our clients’ projects.</p>
              <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg sm:leading-9">Your ambitions are our North Star. We work both hard and smart to build your dreams together.</p>
              <a href="#team" className="text-link mt-7">Get to know our team <ArrowRight size={15} /></a>
            </div>
          </div>
        </div>
      </section>

      <section id="practice" className="bg-[#221f20] px-6 py-20 text-white sm:px-10 sm:py-28 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-7xl"><SectionTitle eyebrow="Curious minds, practical counsel" title={<>Our Practice <strong>Areas</strong></>} light />
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-6">
            {practices.map((practice, index) => <a key={practice.title} href="#contact" className={`practice-card group relative isolate flex min-h-[290px] overflow-hidden p-7 sm:min-h-[350px] sm:p-9 ${index < 2 ? 'lg:col-span-3' : 'lg:col-span-2'}`}>
              <img className="absolute inset-0 -z-20 h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0" src={practice.image} alt="" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-black/25 to-black/10 transition duration-300 group-hover:from-black/65" />
              <span className="absolute right-7 top-7 flex size-9 items-center justify-center rounded-full border border-white/50 opacity-0 transition group-hover:opacity-100"><ArrowUpRight size={16} /></span>
              <div className="mt-auto max-w-md"><span className="mb-3 block text-[9px] uppercase tracking-[0.3em] text-white/65">0{index + 1} / Legal counsel</span><h3 className="text-2xl font-medium uppercase leading-tight tracking-wide sm:text-[1.7rem]">{practice.title}</h3><p className="mt-3 max-w-sm text-sm leading-6 text-white/75">{practice.description}</p><span className="mt-5 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-accent">Explore practice <ArrowRight size={13} /></span></div>
            </a>)}
          </div>
          <a className="outline-button mx-auto mt-10" href="mailto:everybody@thefriedfirm.com">View all practice areas <ArrowUpRight size={14} /></a>
        </div>
      </section>

      <section id="team" className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
        <div className="mx-auto max-w-7xl"><BrandMark dark /><SectionTitle eyebrow="Good people. Creative thinking." title={<>Our <strong>Team</strong></>} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((person, index) => <a href="#contact" key={person.name} className={`group relative isolate overflow-hidden bg-[#221f20] ${index === 0 ? 'sm:col-span-2 sm:row-span-2 lg:col-span-1 lg:row-span-1' : ''}`}>
              <img className={`w-full object-cover grayscale transition duration-700 group-hover:scale-[1.03] group-hover:grayscale-0 ${index === 0 ? 'aspect-[.91] sm:aspect-[1.8] lg:aspect-[.91]' : 'aspect-[.91]'}`} src={person.image} alt={`Portrait of ${person.name}`} loading="lazy" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/90 via-black/50 to-transparent px-5 pb-5 pt-20 text-white sm:px-7 sm:pb-7"><div><h3 className="text-lg font-semibold">{person.name}</h3><p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/70">{person.title}</p></div><ArrowUpRight className="mb-1 text-accent transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" size={19} /></div>
            </a>)}
          </div>
          <a className="text-link mx-auto mt-8 w-fit" href="mailto:everybody@thefriedfirm.com">Meet the whole team <ArrowRight size={15} /></a>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#221f20] px-6 py-24 text-white sm:px-10 sm:py-32 lg:px-16 lg:py-40">
        <img className="absolute inset-0 -z-20 h-full w-full object-cover opacity-30" src={`${assets}/2023/11/annie-spratt-sggw4-qDD54-unsplash-Copy.png`} alt="" loading="lazy" />
        <div className="absolute inset-0 -z-10 bg-[#221f20]/75" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-24"><div><p className="mb-5 text-[10px] uppercase tracking-[0.34em] text-accent">A community of makers</p><h2 className="max-w-md text-4xl font-normal uppercase leading-[1.05] tracking-wide sm:text-6xl">Clients &amp;<br /><strong className="font-semibold">Community</strong></h2></div><div className="max-w-2xl"><p className="text-base leading-8 text-white/75 sm:text-lg sm:leading-9">At The Fried Firm, we are fortunate to work with fellow creative and curious people who do incredible things every day. They inspire us to think differently and look at legal problems from a creative standpoint. Our clients range from individual artists to emerging businesses, all of whom count on us to protect their dreams and their brand integrity.</p><a className="outline-button mt-8" href="#contact">Let’s talk about your work <ArrowUpRight size={14} /></a></div></div>
      </section>

      <section id="testimonials" className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-32"><div className="mx-auto max-w-5xl"><SectionTitle eyebrow="In good company" title={<>Kind <strong>Words</strong></>} />
        <div className="border-y border-border py-10 text-center sm:py-14"><div className="mb-8 flex justify-center gap-2" aria-label="5 out of 5 stars">{Array.from({ length: 5 }, (_, index) => <span aria-hidden="true" key={index} className="text-accent">★</span>)}</div><blockquote className="mx-auto max-w-4xl font-serif text-xl leading-9 sm:text-3xl sm:leading-[1.55]">“{stories[storyIndex].quote}”</blockquote><p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.22em]">{stories[storyIndex].by}</p><div className="mt-8 flex items-center justify-center gap-3">{stories.map((story, index) => <button key={story.by} onClick={() => setStoryIndex(index)} aria-label={`Read testimonial from ${story.by}`} aria-pressed={storyIndex === index} className={`size-2.5 rounded-full transition ${storyIndex === index ? 'bg-accent' : 'bg-foreground/20 hover:bg-accent/60'}`} />)}</div></div>
      </div></section>

      <section id="resources" className="bg-[#f5f5f4] px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-32"><div className="mx-auto max-w-7xl"><BrandMark dark /><SectionTitle eyebrow="Ideas to keep you creating" title={<>Our <strong>Resources</strong></>} />
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">{articles.map((article) => <a href="https://thefriedfirm.com/law-blog/" key={article.title} className="article-card group"><div className="relative mb-5 overflow-hidden"><img className="aspect-[1.53] w-full object-cover transition duration-500 group-hover:scale-[1.03]" src={article.image} alt="" loading="lazy" /><span className="absolute bottom-3 left-3 bg-[#221f20] px-3 py-2 text-[9px] uppercase tracking-[0.18em] text-white">From the Journal</span></div><p className="text-[9px] uppercase tracking-[0.16em] text-muted-foreground">{article.date}</p><h3 className="mt-3 text-lg font-semibold leading-7 group-hover:text-[#598eb0]">{article.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{article.text}</p><span className="text-link mt-5">Read the story <ArrowRight size={14} /></span></a>)}</div>
        <a className="outline-button mx-auto mt-10 border-[#221f20] text-[#221f20] hover:bg-[#221f20] hover:text-white" href="https://thefriedfirm.com/law-blog/">See all posts <ArrowUpRight size={14} /></a>
      </div></section>

      <section id="contact" className="bg-[#221f20] px-6 py-20 text-white sm:px-10 sm:py-28 lg:px-16 lg:py-32"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_.8fr] lg:gap-24"><div><p className="mb-5 text-[10px] uppercase tracking-[0.34em] text-accent">Let’s make something possible</p><h2 className="max-w-2xl text-5xl font-normal uppercase leading-[1.02] sm:text-7xl">Where creative<br /><strong className="font-semibold">minds come</strong><br />together.</h2><p className="mt-7 max-w-lg text-base leading-7 text-white/65">A good first conversation can make all the difference. Tell us a little about what you’re working on.</p><a href="tel:718-422-0500" className="mt-8 block text-xl font-semibold italic sm:text-2xl">(718) 422-0500</a><a href="mailto:everybody@thefriedfirm.com" className="mt-3 inline-block text-sm text-white/75 hover:text-accent">everybody@thefriedfirm.com</a></div>
          <form onSubmit={(event) => { event.preventDefault(); const data = new FormData(event.currentTarget); const subject = encodeURIComponent(`Consultation inquiry — ${data.get('interest')}`); const body = encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\nArea of interest: ${data.get('interest')}\n\n${data.get('message') || ''}`); window.location.href = `mailto:everybody@thefriedfirm.com?subject=${subject}&body=${body}` }} className="flex flex-col gap-5 self-center" aria-label="Start a conversation"><label className="sr-only" htmlFor="contact-name">Your name</label><input id="contact-name" name="name" required placeholder="Your name" autoComplete="name" className="contact-input" /><label className="sr-only" htmlFor="contact-email">Your email</label><input id="contact-email" name="email" type="email" required placeholder="Email address" autoComplete="email" className="contact-input" /><label className="sr-only" htmlFor="contact-interest">What would you like to discuss?</label><select id="contact-interest" name="interest" defaultValue="" required className="contact-input"><option value="" disabled>What can we help with?</option>{practices.map((practice) => <option key={practice.title}>{practice.title}</option>)}<option>Something else</option></select><label className="sr-only" htmlFor="contact-message">Tell us about your project</label><textarea id="contact-message" name="message" rows={3} placeholder="A little about your project (optional)" className="contact-input resize-y" /><button type="submit" className="outline-button mt-2 w-fit">Start a conversation <ArrowUpRight size={14} /></button><p className="text-[10px] leading-5 text-white/45">Your email app will open with your inquiry ready to send. For general inquiries only; this does not create an attorney-client relationship.</p></form>
        </div><footer className="mx-auto mt-20 flex max-w-7xl flex-col items-center justify-between gap-6 border-t border-white/15 pt-8 sm:flex-row"><a href="#home" className="w-32"><img src={logo} alt="The Fried Firm" className="w-full" /></a><p className="text-center text-[10px] tracking-wide text-white/45">231 Front Street · Brooklyn, NY 11201</p><p className="text-[9px] uppercase tracking-[0.18em] text-white/40">© {new Date().getFullYear()} The Fried Firm</p></footer>
      </section>
    </main>
  )
}

function BrandMark({ dark }: { dark?: boolean }) {
  return <div aria-hidden="true" className={`mx-auto mb-5 flex size-8 flex-col items-center justify-center text-[8px] font-bold leading-none tracking-[0.12em] ${dark ? 'text-foreground/50' : 'text-white/70'}`}><span>TFF</span><span className="mt-1 h-px w-4 bg-accent" /></div>
}

function SectionTitle({ eyebrow, title, light }: { eyebrow: string; title: React.ReactNode; light?: boolean }) {
  return <div className="mb-10 text-center sm:mb-14"><p className={`mb-3 text-[9px] uppercase tracking-[0.32em] ${light ? 'text-accent' : 'text-[#6494af]'}`}>{eyebrow}</p><h2 className={`text-3xl font-normal uppercase tracking-[0.06em] sm:text-5xl ${light ? 'text-white' : 'text-foreground'}`}>{title}</h2></div>
}
