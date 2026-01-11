import React, { useState } from 'react';
import { 
  Film, Palette, Hash, PenTool, Video, UserCheck, 
  Mail, Instagram, Linkedin, MapPin, Send, Menu, X, ArrowRight,
  Code, Layout, Smartphone, Database, Server, Globe, CheckCircle2, Check
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import image from './assets/Abishek.jpg';

// --- SUB-COMPONENTS ---

const SkillBar = ({ name, percentage }) => (
  <div className="mb-6">
    <div className="flex justify-between mb-2">
      <span className="font-medium text-gray-700">{name}</span>
      <span className="text-blue-600 font-bold">{percentage}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div 
        className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out" 
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  </div>
);

const ServiceCard = ({ icon, title, desc }) => (
  <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100">
    <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{desc}</p>
  </div>
);

const ContactItem = ({ icon, label, value, link }) => (
  <div className="flex items-center gap-5 group">
    <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
      {icon}
    </div>
    <div>
      <h4 className="font-bold text-gray-800 leading-none mb-1">{label}</h4>
      {link ? (
        <a 
          href={link} 
          target="_blank"             
          rel="noopener noreferrer"   
          className="text-blue-600 hover:underline transition"
        >
          {value}
        </a>
      ) : (
        <p className="text-gray-600">{value}</p>
      )}
    </div>
  </div>
);

const JourneyCard = ({ title, date, description }) => (
  <div className="relative pl-12 md:pl-16 mb-8 last:mb-0 text-left">
    <div className="absolute left-[9px] md:left-[17px] w-4 h-4 bg-white border-2 border-white rounded-full mt-1.5 z-10 shadow-sm"></div>
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg w-full max-w-4xl hover:shadow-xl transition-all duration-300">
      <div className="flex flex-col sm:flex-row justify-between items-start mb-3 gap-2">
        <h4 className="text-xl font-bold text-[#007bff]">{title}</h4>
        <span className="bg-blue-50 text-[#007bff] px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap">{date}</span>
      </div>
      <p className="text-gray-600 text-base leading-relaxed">{description}</p>
    </div>
  </div>
);

const SkillItem = ({ name, level }) => (
  <div className="flex items-center gap-5 group py-2">
    <div className="text-blue-600 group-hover:scale-110 transition-transform flex-shrink-0">
      <CheckCircle2 size={24} fill="currentColor" fillOpacity="0.1" />
    </div>
    <div>
      <h4 className="text-lg font-bold text-gray-800 leading-none mb-1">{name}</h4>
      <p className="text-gray-500 text-sm font-medium">{level}</p>
    </div>
  </div>
);

// --- MAIN PORTFOLIO COMPONENT ---

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);


  const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    'service_65doc8a',
    'template_dz2sa9u',
    e.target,
    'pDPnV4qgNgCRTtj2q'
  ).then( () => {
    setSent(true)

    setTimeout(() => {
      setSent(false);
      e.target.reset();   // reset form fields
    }, 3000)
  });
};


  return (
    <div className="font-sans text-gray-800 scroll-smooth selection:bg-blue-100">
      
      {/* --- NAVIGATION --- */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-black text-blue-600 tracking-tighter">Abishek Harikrishnan.</div>
          <div className="hidden md:flex space-x-8 font-semibold text-gray-600">
            <a href="#home" className="hover:text-blue-600 transition">Home</a>
            <a href="#about" className="hover:text-blue-600 transition">About</a>
            <a href="#skills" className="hover:text-blue-600 transition">Experience</a>
            <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
          </div>
          <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-100 px-6 py-6 space-y-4 shadow-xl text-left">
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="block text-lg font-semibold">Home</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="block text-lg font-semibold">About</a>
            <a href="#skills" onClick={() => setIsMenuOpen(false)} className="block text-lg font-semibold">Experience</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block text-lg font-semibold text-blue-600">Contact Me</a>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="home" className="pt-40 pb-24 bg-gradient-to-br from-blue-50 via-white to-white overflow-hidden">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-3/5 text-center md:text-left z-10">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full">
              Available for Software Projects
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              I'm <span className="text-blue-600">Abishek</span> <br />
              <span className="text-gray-400">Harikrishnan</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-xl leading-relaxed">
              Full-Stack Developer and UI/UX enthusiast crafting robust mobile and web applications with a focus on scalable architecture and user-centric design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#contact" className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-200 flex items-center justify-center gap-2">
                Start a Project <ArrowRight size={20} />
              </a>
              <a href="#about" className="bg-white text-gray-700 border border-gray-200 px-10 py-4 rounded-xl font-bold hover:bg-gray-50 transition">
                View My Story
              </a>
            </div>
          </div>
          <div className="md:w-2/5 mt-16 md:mt-0 flex justify-center relative">

            {/* Ambient glow */}
            <div className="absolute w-[360px] h-[360px] md:w-[460px] md:h-[460px] bg-blue-500/20 blur-[120px] rounded-full -z-10"></div>

            {/* floating glass ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[330px] h-[330px] md:w-[430px] md:h-[430px] rounded-[3rem] border border-white/20 backdrop-blur-xl bg-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.25)]"></div>
            </div>

            {/* your image */}
            <img
            src={image}
            alt="Abishek"
            className="relative w-72 h-72 md:w-96 md:h-96 object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.5)] hover:scale-105 transition-all duration-700"
            />
          </div>
        </div>
      </section>

      {/* --- STATS --- */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 bg-blue-600 rounded-[2.5rem] p-12 text-white shadow-2xl">
            <div className="text-center">
              <div className="text-5xl font-black mb-1">15+</div>
              <p className="text-blue-100 font-medium">Apps Developed</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black mb-1">20+</div>
              <p className="text-blue-100 font-medium">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black mb-1">3+</div>
              <p className="text-blue-100 font-medium">Years Coding</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black mb-1">12+</div>
              <p className="text-blue-100 font-medium">Tech Stack</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">About <span className="text-blue-600">Me</span></h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">
            <div className="lg:w-1/3 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-100 rounded-full blur-2xl opacity-40 -z-10 transform scale-110"></div>
                <img src={image} alt="Profile" className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white shadow-2xl transition-transform duration-500 hover:scale-105" />
              </div>
            </div>
            <div className="lg:w-2/3 text-left">
              <h3 className="text-3xl font-bold mb-6 text-gray-800">Who Am I?</h3>
              <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                <p>I am a highly motivated college student with a strong passion for technology, software development, and problem-solving. I have hands-on experience in <span className="font-semibold text-gray-800">Python, Java, C++, and JavaScript</span>.</p>
                <p>I am actively developing full-stack and mobile applications using <span className="text-blue-600 font-medium">React, React Native, Flask, Express.js, and PostgreSQL</span>. I enjoy building real-world applications such as fund-management systems and mobile wallet apps.</p>
                <p>I have a solid foundation in data structures, algorithms, and OOP. I regularly practice coding on LeetCode to sharpen my skills and am highly comfortable with Git/GitHub for version control.</p>
              </div>
              <div className="flex flex-wrap gap-3 mt-8">
                {['Software Engineer', 'App Developer', 'Full Stack', 'Problem Solver'].map((tag) => (
                  <span key={tag} className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-bold border border-blue-100 uppercase tracking-wide">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MY JOURNEY SECTION --- */}
      <section className="py-20 bg-[#007bff]">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Dev Journey</h2>
            <div className="w-16 h-1 bg-white mx-auto rounded-full"></div>
          </div>
          <div className="relative">
            <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-white/30 rounded-full"></div>
            <div className="flex flex-col space-y-6">
              <JourneyCard title="Exploring Computer Science" date="2022 - 2023" description="Began my journey into the world of CS by mastering core programming fundamentals in Python and C++. Built small-scale scripts and discovered my passion for creating logic-based solutions." />
              <JourneyCard title="Web & App Development" date="2023 - 2024" description="Dived deep into Full-Stack development. Mastered React and Express.js to build dynamic web platforms. Transitioned into mobile development using React Native to create cross-platform applications." />
              <JourneyCard title="Software Engineering & Startups" date="2024 - Present" description="Currently working on complex architectural systems including PostgreSQL databases and Flask backends. Building NexStep and other startup-focused tools to solve real-world student and business problems." />
            </div>
          </div>
        </div>
      </section>

      {/* --- TECHNICAL EXPERIENCE SECTION --- */}
      <section id="skills" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl text-left">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical <span className="text-blue-600">Experience</span></h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            <div className="bg-white border border-gray-100 p-10 md:p-16 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500">
              <h3 className="text-xl font-bold text-center text-gray-400 mb-12 tracking-[0.2em] uppercase">Frontend Development</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                <SkillItem name="HTML/CSS" level="Experienced" />
                <SkillItem name="JavaScript" level="Experienced" />
                <SkillItem name="React" level="Intermediate" />
                <SkillItem name="React Native" level="Intermediate" />
                <SkillItem name="Tailwind" level="Experienced" />
                <SkillItem name="TypeScript" level="Basic" />
              </div>
            </div>
            <div className="bg-white border border-gray-100 p-10 md:p-16 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500">
              <h3 className="text-xl font-bold text-center text-gray-400 mb-12 tracking-[0.2em] uppercase">Backend & Tools</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                <SkillItem name="Node.js" level="Intermediate" />
                <SkillItem name="Python/Flask" level="Intermediate" />
                <SkillItem name="PostgreSQL" level="Intermediate" />
                <SkillItem name="Git/GitHub" level="Experienced" />
                <SkillItem name="C++/Java" level="Intermediate" />
                <SkillItem name="REST APIs" level="Experienced" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-6 text-left">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In <span className="text-blue-600">Touch</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Have a coding project or a startup idea? Let's build it together!</p>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
            <div className="lg:w-3/5">
              <form onSubmit={sendEmail} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-bold mb-2">Name</label>
                    <input name="name" type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" required />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-bold mb-2">Email</label>
                    <input name="email" type="email" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" required />
                  </div>
                </div>
                <textarea name="message" rows="6" placeholder="Project Details" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" required></textarea>
                <button
  type="submit"
  disabled={sent}
  className={`px-10 py-4 rounded-xl font-bold transition-all duration-500 shadow-lg flex items-center justify-center gap-2
  ${sent ? "bg-green-600 scale-105" : "bg-blue-600 hover:bg-blue-700"}
  text-white`}
>
  {sent ? (
    <>
      <Check size={22} className="opacity-0 animate-fade-in" />
      Sent Successfully
    </>
  ) : (
    "Send Message"
  )}
</button>

              </form>
            </div>
            <div className="lg:w-2/5">
              <div className="bg-gray-50/80 p-10 rounded-[2rem] border border-gray-100 h-full">
                <h3 className="text-2xl font-bold text-blue-600 mb-10">Contact Details</h3>
                <div className="space-y-8">
                  <ContactItem icon={<Mail size={20} />} label="Email" value="abishekvh@gmail.com" link="mailto:abishekvh@gmail.com" />
                  <ContactItem icon={<Instagram size={20} />} label="Instagram" value="abishek.vh" link="https://www.instagram.com/abishek.vh/" />
                  <ContactItem icon={<Linkedin size={20} />} label="LinkedIn" value="Abishek V H" link="https://www.linkedin.com/in/abishekvh/" />
                  <ContactItem icon={<MapPin size={20} />} label="Location" value="Madurai, Tamilnadu" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER SECTION --- */}
      <footer className="bg-[#2d46b9] text-white pt-16 pb-8 text-left">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-100">Abishek Harikrishnan</h3>
              <p className="text-blue-200 leading-relaxed opacity-90">Computer Science Student & Full-Stack Developer</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-100">Quick Links</h3>
              <ul className="space-y-2 text-blue-200">
                <li><a href="#home" className="hover:text-white transition">Home</a></li>
                <li><a href="#about" className="hover:text-white transition">About</a></li>
                <li><a href="#skills" className="hover:text-white transition">Experience</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-100">Development Services</h3>
              <ul className="space-y-2 text-blue-200">
                <li><a href="#" className="hover:text-white transition">Web Application Development</a></li>
                <li><a href="#" className="hover:text-white transition">Mobile App (iOS/Android)</a></li>
                <li><a href="#" className="hover:text-white transition">Database Architecture</a></li>
                <li><a href="#" className="hover:text-white transition">UI/UX Prototype Design</a></li>
                <li><a href="#" className="hover:text-white transition">API Integration & Development</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-100">Newsletter</h3>
              <p className="text-blue-200 mb-4">Get the latest tech insights and project updates.</p>
              <form className="flex">
                <input type="email" placeholder="Email" className="w-full px-4 py-2 rounded-l-md bg-white text-gray-800 outline-none" />
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-md transition flex items-center text-white"><Send size={18} /></button>
              </form>
            </div>
          </div>
          <div className="border-t border-blue-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-blue-200 opacity-80">
            <p>© 2026 Abishek Harikrishnan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;