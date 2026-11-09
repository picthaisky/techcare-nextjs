'use client'

import Image from 'next/image'
import { useState } from 'react'
import {
  ArrowDown, ArrowUpRight, CheckCircle2, ChevronDown,
  CircleHelp, Cloud, Cpu, DatabaseBackup, Facebook, HardDrive,
  Laptop, MapPin, Menu, MessageCircle, Network, Server,
  ShieldCheck, Wrench, X,
} from 'lucide-react'

const FACEBOOK_URL = 'https://www.facebook.com/senic.solution?locale=th_TH'
const MESSENGER_URL = 'https://m.me/senic.solution'

const services = [
  {
    number: '01', label: 'FOR EVERYDAY TECH', title: 'ซ่อมคอมพิวเตอร์และโน้ตบุ๊ก',
    description: 'เมื่อเครื่องช้า มีปัญหา หรือถึงเวลาอัปเกรด เริ่มจากการเล่าอาการและรูปแบบการใช้งาน เพื่อพูดคุยแนวทางที่เหมาะกับเครื่องของคุณ',
    image: '/1.png', alt: 'ภาพประชาสัมพันธ์บริการซ่อม อัปเกรด และดูแลคอมพิวเตอร์ของ SENIC Solution',
    highlights: ['ซ่อมและอัปเกรด', 'ลงโปรแกรมและแก้ไวรัส', 'สำรองข้อมูลและทำความสะอาด'],
  },
  {
    number: '02', label: 'FOR YOUR BUSINESS', title: 'ดูแลระบบ IT สำหรับธุรกิจ',
    description: 'งานร้านค้า ออฟฟิศ และองค์กรต้องการระบบที่ทำงานต่อเนื่อง พูดคุยโจทย์ด้านเครือข่าย เซิร์ฟเวอร์ คลาวด์ และการดูแลระบบกับเรา',
    image: '/2.png', alt: 'ภาพประชาสัมพันธ์โซลูชัน IT สำหรับธุรกิจของ SENIC Solution',
    highlights: ['Network และ Server', 'Cloud และ Security', 'IT Support'],
  },
  {
    number: '03', label: 'LOCAL SERVICE', title: 'บริการในพื้นที่ใกล้คุณ',
    description: 'SENIC Solution ระบุพื้นที่ให้บริการบางพระ บางแสน และศรีราชา หากต้องการนัดหมายหรือสอบถามพื้นที่เพิ่มเติม ติดต่อเพจเพื่อยืนยันรายละเอียด',
    image: '/4.png', alt: 'ภาพประชาสัมพันธ์พื้นที่บริการบางพระ บางแสน และศรีราชา',
    highlights: ['บางพระ', 'บางแสน', 'ศรีราชา'],
  },
]

const serviceDetails = [
  { icon: Wrench, title: 'ซ่อมและอัปเกรด', text: 'แจ้งอาการหรือเป้าหมายการอัปเกรด เพื่อประเมินแนวทางก่อนดำเนินการ' },
  { icon: HardDrive, title: 'ติดตั้งโปรแกรม', text: 'เตรียมเครื่องและซอฟต์แวร์ให้เหมาะกับการใช้งานที่ต้องการ' },
  { icon: ShieldCheck, title: 'ตรวจปัญหาไวรัส', text: 'พูดคุยอาการผิดปกติและแนวทางดูแลความปลอดภัยของเครื่อง' },
  { icon: DatabaseBackup, title: 'สำรองข้อมูล', text: 'วางแผนสำรองไฟล์สำคัญก่อนซ่อม ย้ายเครื่อง หรือปรับปรุงระบบ' },
  { icon: Network, title: 'ระบบเครือข่าย', text: 'สำรวจความต้องการเชื่อมต่อของร้านค้า สำนักงาน และทีมงาน' },
  { icon: Cloud, title: 'Cloud และ IT Support', text: 'หารือแนวทางดูแลระบบและบริการ IT ให้เหมาะกับรูปแบบธุรกิจ' },
]

const categories = [
  { id: 'all', label: 'ทั้งหมด' },
  { id: 'computer', label: 'คอมพิวเตอร์' },
  { id: 'components', label: 'อัปเกรดเครื่อง' },
  { id: 'business', label: 'สำหรับธุรกิจ' },
]

const catalog = [
  { id: 'computer', icon: Laptop, tag: 'PERSONAL TECH', title: 'คอมพิวเตอร์และโน้ตบุ๊ก', text: 'เลือกเครื่องให้เข้ากับงาน เรียน หรือการใช้งานประจำวัน' },
  { id: 'components', icon: Cpu, tag: 'PERFORMANCE', title: 'อะไหล่และอุปกรณ์อัปเกรด', text: 'เพิ่มความพร้อมของเครื่องด้วยอุปกรณ์ที่เหมาะกับสเปกเดิม' },
  { id: 'business', icon: Network, tag: 'CONNECTIVITY', title: 'อุปกรณ์เครือข่าย', text: 'อุปกรณ์สำหรับการเชื่อมต่อและขยายระบบในพื้นที่ทำงาน' },
  { id: 'business', icon: Server, tag: 'BUSINESS IT', title: 'โซลูชันสำหรับองค์กร', text: 'สอบถามอุปกรณ์และแนวทางระบบ IT สำหรับทีมของคุณ' },
]

const faqs = [
  { q: 'ต้องเตรียมข้อมูลอะไรเมื่อติดต่อเรื่องซ่อมเครื่อง?', a: 'แจ้งรุ่นหรือประเภทเครื่อง อาการที่พบ ระยะเวลาที่เป็นปัญหา และภาพประกอบถ้ามี หากมีข้อมูลสำคัญในเครื่อง ควรแจ้งไว้ตั้งแต่ต้นเพื่อวางแผนสำรองข้อมูลร่วมกัน' },
  { q: 'สามารถสอบถามงานระบบ IT สำหรับร้านหรือสำนักงานได้ไหม?', a: 'ได้ครับ ส่งข้อมูลเบื้องต้น เช่น จำนวนผู้ใช้งาน อุปกรณ์ที่มีอยู่ พื้นที่ติดตั้ง และปัญหาที่ต้องการแก้ไข ผ่านเพจ SENIC Solution เพื่อพูดคุยรายละเอียด' },
  { q: 'มีสินค้า ราคา และสต็อกแสดงบนเว็บไซต์หรือไม่?', a: 'หน้านี้แสดงหมวดสินค้าเพื่อช่วยเริ่มต้นเลือกเทคโนโลยี รุ่น ราคา และความพร้อมจำหน่ายอาจเปลี่ยนแปลง กรุณาสอบถามข้อมูลล่าสุดผ่าน Facebook หรือ Messenger ของร้าน' },
  { q: 'ให้บริการในพื้นที่ใดบ้าง?', a: 'สื่อประชาสัมพันธ์ของร้านระบุบางพระ บางแสน และศรีราชา กรุณาติดต่อเพจเพื่อตรวจสอบพื้นที่และนัดหมายก่อนรับบริการ' },
]

function ExternalLink({ children, href = FACEBOOK_URL, className = '', label }: { children: React.ReactNode; href?: string; className?: string; label?: string }) {
  return <a href={href} className={className} aria-label={label} target="_blank" rel="noopener noreferrer">{children}</a>
}

function Brand({ footer = false }: { footer?: boolean }) {
  return <a className={`brand ${footer ? 'brand-footer' : ''}`} href="#home" aria-label="SENIC Solution กลับหน้าหลัก">
    <span className="brand-symbol">S</span><span className="brand-name"><strong>SENIC</strong><small>SOLUTION</small></span>
  </a>
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [category, setCategory] = useState('all')
  const visibleCatalog = catalog.filter(item => category === 'all' || item.id === category)

  return <>
    <header className="site-header" id="home">
      <div className="wrap header-inner">
        <Brand />
        <nav className={`main-nav ${menuOpen ? 'nav-open' : ''}`} aria-label="เมนูหลัก">
          {[
            ['#about', 'เกี่ยวกับเรา'], ['#services', 'บริการ'], ['#catalog', 'สินค้า'],
            ['#coverage', 'พื้นที่บริการ'], ['#updates', 'ข่าวสาร'],
          ].map(([href, text]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{text}</a>)}
        </nav>
        <ExternalLink href={MESSENGER_URL} className="header-contact">ปรึกษาเรา <ArrowUpRight size={17} /></ExternalLink>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? 'ปิดเมนู' : 'เปิดเมนู'}>{menuOpen ? <X /> : <Menu />}</button>
      </div>
    </header>

    <main>
      <section className="hero" aria-labelledby="hero-title">
        <Image className="hero-photo" src="/senic-hero-workbench.png" alt="ภาพประกอบช่างกำลังตรวจซ่อมโน้ตบุ๊กบนโต๊ะทำงาน" fill priority sizes="100vw" />
        <div className="hero-shade" />
        <div className="wrap hero-inner">
          <div className="hero-content">
            <span className="eyebrow"><span /> PROFESSIONAL IT SERVICE & SOLUTIONS</span>
            <h1 id="hero-title">ทุกปัญหาไอที<br /><em>มีทางไปต่อ</em><span>.</span></h1>
            <p>ซ่อมคอมพิวเตอร์และโน้ตบุ๊ก อัปเกรดอุปกรณ์ และดูแลระบบ IT สำหรับร้านค้า สำนักงาน และธุรกิจในพื้นที่ของคุณ</p>
            <div className="hero-actions">
              <a className="button button-orange" href="#services">สำรวจบริการ <ArrowUpRight size={19} /></a>
              <ExternalLink href={MESSENGER_URL} className="button button-outline">คุยกับ SENIC <MessageCircle size={18} /></ExternalLink>
            </div>
            <div className="hero-service-line"><span>REPAIR</span><i /><span>UPGRADE</span><i /><span>BUSINESS IT</span></div>
          </div>
          <div className="hero-image-tag"><span className="tag-pulse" /> ภาพประกอบงานบริการ IT <ArrowUpRight size={16} /></div>
        </div>
        <a className="hero-scroll" href="#about" aria-label="เลื่อนลงเพื่อดูรายละเอียด"><ArrowDown size={20}/></a>
      </section>

      <section className="quick-strip" aria-label="บริการหลัก"><div className="wrap quick-strip-inner"><span><Wrench size={19}/> ซ่อมและอัปเกรด</span><span><Laptop size={19}/> คอมพิวเตอร์และโน้ตบุ๊ก</span><span><Network size={19}/> ระบบ IT สำหรับธุรกิจ</span><span><MapPin size={19}/> บางพระ • บางแสน • ศรีราชา</span></div></section>

      <section className="about section" id="about"><div className="wrap about-grid"><div className="about-photo"><Image src="/senic-repair-workbench.png" alt="ภาพประกอบโต๊ะทำงานซ่อมคอมพิวเตอร์และอุปกรณ์อัปเกรด" fill sizes="(max-width: 760px) 100vw, 50vw" /><div className="photo-label"><span>01 / ภาพประกอบ</span><strong>Technology with purpose.</strong></div></div><div className="about-copy"><span className="section-kicker">ABOUT SENIC SOLUTION</span><h2>งานไอทีที่เข้าใจ<br /><em>ทั้งเครื่องและคนใช้</em></h2><p className="lead">เทคโนโลยีที่ดีควรช่วยให้งานเดินต่อได้ เราเริ่มจากการฟังปัญหาและเป้าหมายการใช้งาน ก่อนพูดคุยทางเลือกที่เหมาะสม</p><p>จากคอมพิวเตอร์หนึ่งเครื่องไปจนถึงระบบ IT ของธุรกิจ SENIC Solution นำเสนองานซ่อม อัปเกรด ดูแลอุปกรณ์ และโซลูชันเทคโนโลยีผ่านเพจร้าน</p><div className="about-points"><span><CheckCircle2 size={18}/> เริ่มจากโจทย์จริง</span><span><CheckCircle2 size={18}/> เลือกแนวทางตามการใช้งาน</span><span><CheckCircle2 size={18}/> ติดต่อร้านได้โดยตรง</span></div><a className="inline-link" href="#services">ดูบริการของเรา <ArrowUpRight size={18}/></a></div></div></section>

      <section className="services section" id="services"><div className="wrap"><div className="section-heading"><div><span className="section-kicker">WHAT WE DO / 01—03</span><h2>ครบทั้งเรื่องเครื่อง<br /><em>และเรื่องระบบ</em></h2></div><p>บริการที่สื่อประชาสัมพันธ์ของ SENIC Solution นำเสนอ เลือกหัวข้อที่ตรงกับโจทย์ แล้วสอบถามรายละเอียดกับร้านได้ทันที</p></div><div className="service-grid">{services.map(item => <article className="service-card" key={item.number}><div className="service-image"><Image src={item.image} alt={item.alt} fill sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 33vw" /><span className="service-number">{item.number}</span></div><div className="service-body"><span className="service-label">{item.label}</span><h3>{item.title}</h3><p>{item.description}</p><div className="service-tags">{item.highlights.map(highlight => <span key={highlight}>{highlight}</span>)}</div><ExternalLink href={MESSENGER_URL} className="service-cta">สอบถามบริการ <ArrowUpRight size={17}/></ExternalLink></div></article>)}</div></div></section>

      <section className="detail-section section" id="details"><div className="wrap"><div className="section-heading detail-heading"><div><span className="section-kicker">SERVICE FOCUS</span><h2>เลือกจุดเริ่มต้น<br /><em>ที่ตรงกับปัญหา</em></h2></div><p>ยังไม่แน่ใจว่าปัญหาอยู่ตรงไหน? เลือกหัวข้อใกล้เคียง แล้วอธิบายอาการหรือเป้าหมายให้ร้านช่วยดูต่อ</p></div><div className="detail-grid">{serviceDetails.map((item, index) => { const Icon = item.icon; return <article className="detail-card" key={item.title}><div className="detail-top"><span>0{index + 1}</span><Icon size={28} strokeWidth={1.6}/></div><h3>{item.title}</h3><p>{item.text}</p></article> })}</div></div></section>

      <section className="business-feature"><div className="wrap business-grid"><div className="business-copy"><span className="section-kicker">FOR SHOPS, OFFICES & TEAMS</span><h2>ระบบที่ดี<br />ช่วยให้งานเดิน<span>ต่อ</span></h2><p>หากคุณกำลังวางระบบใหม่หรือทบทวนระบบเดิม เริ่มจากภาพรวมของผู้ใช้งาน อุปกรณ์ และความต้องการทางธุรกิจ แล้วคุยแนวทาง Network, Server, Cloud, Security หรือ IT Support กับ SENIC Solution</p><ExternalLink href={MESSENGER_URL} className="button button-orange">ปรึกษางานระบบ <ArrowUpRight size={19}/></ExternalLink></div><div className="business-art"><Image src="/แบนเนอร์บริการไอที SENIC SOLUTION.png" alt="แบนเนอร์บริการซ่อมคอมพิวเตอร์ โน้ตบุ๊ก และโซลูชัน IT สำหรับธุรกิจ" fill sizes="(max-width: 760px) 100vw, 50vw" /></div></div></section>

      <section className="catalog section" id="catalog"><div className="wrap"><div className="section-heading"><div><span className="section-kicker">EXPLORE THE SHOP</span><h2>อุปกรณ์ที่ใช่<br /><em>เริ่มจากการใช้งาน</em></h2></div><p>สำรวจหมวดสินค้าเพื่อเริ่มต้นพูดคุย รุ่น ราคา และสต็อกปัจจุบัน โปรดตรวจสอบกับร้านผ่านเพจโดยตรง</p></div><div className="category-tabs" role="group" aria-label="กรองหมวดสินค้า">{categories.map(item => <button type="button" key={item.id} className={category === item.id ? 'active' : ''} aria-pressed={category === item.id} onClick={() => setCategory(item.id)}>{item.label}</button>)}</div><div className="catalog-grid">{visibleCatalog.map((item, index) => { const Icon = item.icon; return <article className="catalog-card" key={item.title}><div className="catalog-graphic"><span className="catalog-index">0{index + 1} / SENIC</span><div className="catalog-circle"><Icon size={66} strokeWidth={1.15}/></div><span className="catalog-tag">{item.tag}</span></div><div className="catalog-content"><h3>{item.title}</h3><p>{item.text}</p><ExternalLink href={MESSENGER_URL} label={`สอบถามเกี่ยวกับ${item.title}`}>สอบถาม <ArrowUpRight size={18}/></ExternalLink></div></article> })}</div></div></section>

      <section className="coverage section" id="coverage"><div className="wrap coverage-grid"><div className="coverage-copy"><span className="section-kicker">LOCAL SERVICE AREA</span><h2>ไอทีใกล้คุณ<br /><em>ติดต่อได้ง่าย</em></h2><p>สื่อประชาสัมพันธ์ของร้านระบุพื้นที่บริการในบางพระ บางแสน และศรีราชา ส่งรายละเอียดสถานที่และงานที่ต้องการ เพื่อให้ร้านยืนยันพื้นที่และนัดหมาย</p><div className="area-list"><span><MapPin size={19}/> บางพระ</span><span><MapPin size={19}/> บางแสน</span><span><MapPin size={19}/> ศรีราชา</span></div><ExternalLink href={MESSENGER_URL} className="inline-link">สอบถามพื้นที่บริการ <ArrowUpRight size={19}/></ExternalLink></div><div className="coverage-image"><Image src="/4.png" alt="ภาพแสดงพื้นที่ให้บริการบางพระ บางแสน และศรีราชาของ SENIC Solution" fill sizes="(max-width: 760px) 100vw, 50vw" /></div></div></section>

      <section className="updates section" id="updates"><div className="wrap updates-grid"><div className="updates-copy"><span className="section-kicker">STAY CONNECTED</span><h2>ติดตามเรื่องใหม่<br /><em>จากเพจของเรา</em></h2><p>ดูโพสต์ล่าสุด ภาพงาน และข่าวสารจาก SENIC Solution บน Facebook หากส่วนแสดงโพสต์ไม่ทำงานในเบราว์เซอร์ของคุณ สามารถเปิดเพจได้โดยตรง</p><ExternalLink className="button button-navy">ไปที่เพจ SENIC Solution <ArrowUpRight size={18}/></ExternalLink><div className="updates-note"><Facebook size={20}/> FACEBOOK / SENIC SOLUTION</div></div><div className="facebook-panel"><div className="facebook-head"><span className="facebook-icon">f</span><div><strong>SENIC Solution</strong><small>Facebook Page</small></div><ExternalLink label="เปิดเพจ SENIC Solution"><ArrowUpRight size={20}/></ExternalLink></div><iframe title="โพสต์จาก Facebook SENIC Solution" src={`https://www.facebook.com/plugins/page.php?href=${encodeURIComponent('https://www.facebook.com/senic.solution')}&tabs=timeline&width=500&height=420&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false`} width="500" height="420" style={{ border: 'none', overflow: 'hidden' }} loading="lazy" allow="encrypted-media" /><p>หากโพสต์ไม่แสดง <ExternalLink>เปิดดูบน Facebook <ArrowUpRight size={14}/></ExternalLink></p></div></div></section>

      <section className="faq section"><div className="wrap faq-grid"><div><span className="section-kicker">GOOD TO KNOW</span><h2>ก่อนเริ่ม<br /><em>คุยกับเรา</em></h2><p>คำตอบสั้น ๆ ที่ช่วยให้คุณเตรียมข้อมูลและติดต่อร้านได้ตรงประเด็น</p><CircleHelp className="faq-decor" size={80} strokeWidth={1}/></div><div className="faq-list">{faqs.map((item, index) => <details key={item.q}><summary><span>0{index + 1}</span><strong>{item.q}</strong><ChevronDown size={20}/></summary><p>{item.a}</p></details>)}</div></div></section>

      <section className="contact" id="contact"><div className="wrap contact-inner"><div><span className="section-kicker">LET&apos;S SOLVE IT TOGETHER</span><h2>เริ่มจากข้อความเดียว<br /><em>แล้วไปต่อด้วยกัน</em></h2><p>เล่าอาการ บอกความต้องการ หรือส่งโจทย์ระบบ IT ของคุณให้ SENIC Solution ผ่านช่องทางของร้าน</p></div><div className="contact-actions"><ExternalLink href={MESSENGER_URL} className="button button-white">ส่งข้อความทาง Messenger <MessageCircle size={18}/></ExternalLink><ExternalLink className="contact-link">ดูเพจ Facebook <ArrowUpRight size={18}/></ExternalLink></div><span className="contact-watermark" aria-hidden="true">S</span></div></section>
    </main>

    <footer className="site-footer"><div className="wrap footer-main"><div><Brand footer/><p>บริการซ่อมคอมพิวเตอร์ โน้ตบุ๊ก<br/>และโซลูชัน IT สำหรับธุรกิจ</p></div><div className="footer-nav"><div><strong>สำรวจ</strong><a href="#about">เกี่ยวกับเรา</a><a href="#services">บริการ</a><a href="#catalog">หมวดสินค้า</a><a href="#coverage">พื้นที่บริการ</a></div><div><strong>ติดต่อ</strong><ExternalLink>Facebook</ExternalLink><ExternalLink href={MESSENGER_URL}>Messenger</ExternalLink><a href="#updates">ข่าวสาร</a></div></div></div><div className="wrap footer-bottom"><span>© {new Date().getFullYear()} SENIC Solution</span><a href="#home">กลับขึ้นด้านบน ↑</a></div></footer>
  </>
}
