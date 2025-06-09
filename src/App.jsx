import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Phone, MapPin, Download, ExternalLink, Code, Server, Smartphone, Coffee, Award, User, Briefcase, GraduationCap, FolderOpen, MessageSquare, Star, Trophy, BookOpen, Zap, Target, Calendar, Building } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const observerRef = useRef();

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    // Intersection Observer for active section
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observerRef.current?.observe(section);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      observerRef.current?.disconnect();
    };
  }, []);

  const skills = {
    mobile: {
      title: 'Mobile Development',
      icon: <Smartphone className="w-6 h-6" />,
      items: ['Flutter', 'Dart', 'GetX', 'Provider', 'BLoC', 'Firebase Auth', 'Push Notifications', 'Cross-Platform']
    },
    backend: {
      title: 'Backend & Database',
      icon: <Server className="w-6 h-6" />,
      items: ['Node.js', 'REST APIs', 'PostgreSQL', 'MongoDB', 'JWT Auth', 'Java', 'SQL/PLSQL']
    },
    tools: {
      title: 'Tools & Architecture',
      icon: <Code className="w-6 h-6" />,
      items: ['MVVM', 'MVC', 'Git/GitHub', 'Android Studio', 'VS Code', 'Figma', 'Postman', 'Agile']
    }
  };

  const projects = [
    {
      title: 'Flight Pass Mobile App',
      subtitle: 'Cross-Platform Flight Management Solution',
      tech: ['Flutter', 'Dart', 'Provider', 'JWT', 'REST APIs'],
      description: 'Cross-platform solution for managing and purchasing flight passes with JWT authentication and Provider state management.',
      results: ['40% boost in user acquisition', '30% reduction in app crashes', '20% faster feature delivery'],
      playStore: 'https://play.google.com/store/apps/details?id=com.mobile.optiontown&pli=1',
      featured: true,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Stockpathshala Education App',
      subtitle: '100K+ Users Educational Platform',
      tech: ['Flutter', 'Dart', 'GetX', 'Razorpay', 'REST APIs'],
      description: 'End-to-end education app with intuitive UI, payment integration, and optimized architecture for 100K+ users.',
      results: ['100K+ active users', 'Seamless payment integration', 'Cross-platform support'],
      playStore: 'https://play.google.com/store/apps/details?id=com.codeclinic.stockpathshala',
      featured: true,
      gradient: 'from-green-500 to-teal-500'
    },
    {
      title: 'CONCOR Contractors App',
      subtitle: 'Enterprise Fleet Management',
      tech: ['Flutter', 'Dart', 'Java', 'SQL/PLSQL', 'MVVM', 'GetX'],
      description: 'Cross-platform app for managing FLML services with contract details, vehicle tracking, and automated workflows.',
      results: ['30% reduction in manual effort', 'Automated commercial operations', 'Real-time vehicle tracking'],
      playStore: 'https://play.google.com/store/apps/details?id=fmlm.concor.com',
      featured: true,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Snap60 News App',
      subtitle: 'Multilingual News Summarization',
      tech: ['Flutter', 'Dart', 'BLoC', 'Multi-language Support'],
      description: 'Multilingual news app with 60-word summaries, auto-scroll, and clean architecture following SOLID principles.',
      results: ['98% accuracy in summarization', 'Multi-language support', 'Infinite scroll UX'],
      playStore: 'https://play.google.com/store/apps/details?id=com.alongx.snap60',
      featured: false,
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'IYF Mobile Application',
      subtitle: 'ISKCON Youth Forum Platform',
      tech: ['Flutter', 'Dart', 'Firebase', 'REST APIs'],
      description: 'Responsive Flutter application with user/admin interfaces, push notifications, PDF rendering, and YouTube API integration.',
      results: ['45% increase in user engagement', 'Improved admin workflows', 'Enhanced community communication'],
      github: '#',
      featured: false,
      gradient: 'from-indigo-500 to-blue-500'
    }
  ];

  const experience = [
    {
      role: 'Software Developer (Flutter)',
      company: 'Cattle Guru Pvt. Ltd.',
      period: 'Jul 2023 - May 2025',
      duration: '2 Years',
      type: 'Full-time',
      description: 'Led mobile development initiatives, built e-commerce solutions, and coordinated full-stack development.',
      achievements: [
        'Built Flutter-based e-commerce app increasing revenue by 40%',
        'Integrated mobile auth, auto-login, and real-time notifications',
        'Developed backend with Node.js and REST APIs',
        'Managed PostgreSQL and MongoDB databases'
      ],
      tech: ['Flutter', 'Dart', 'Firebase', 'Node.js', 'PostgreSQL', 'MongoDB', 'REST APIs']
    },
    {
      role: 'Flutter Developer',
      company: 'Container Corporation of India Ltd.',
      period: 'Jul 2022 - Jun 2023',
      duration: '1 Year',
      type: 'Full-time',
      description: 'Developed enterprise-level cross-platform applications with focus on process automation and workflow optimization.',
      achievements: [
        'Developed cross-platform app for FLML services management',
        'Automated workflows reducing manual effort by 30%',
        'Implemented MVVM architecture with GetX state management',
        'Built comprehensive dashboards and tracking systems'
      ],
      tech: ['Flutter', 'Dart', 'Java', 'SQL/PLSQL', 'MVVM', 'GetX']
    }
  ];

  const achievements = [
    {
      category: 'Competitive Programming',
      icon: <Trophy className="w-6 h-6" />,
      items: [
        { platform: 'LeetCode', achievement: 'Guardian Badge, 2144 rating (Top 1%)', color: 'text-yellow-400' },
        { platform: 'CodeChef', achievement: '5-star, 2075 rating', color: 'text-orange-400' },
        { platform: 'Codeforces', achievement: 'Expert, 1672 rating', color: 'text-blue-400' },
        { platform: 'AtCoder', achievement: 'Expert, 1681 rating', color: 'text-green-400' },
        { platform: 'GeeksforGeeks', achievement: '5-star, 800+ problems solved', color: 'text-purple-400' }
      ]
    },
    {
      category: 'Research & Publication',
      icon: <BookOpen className="w-6 h-6" />,
      items: [
        { 
          platform: 'ICIASC-2023', 
          achievement: 'Published ML-based missing person detection system (98% accuracy)', 
          color: 'text-cyan-400' 
        }
      ]
    },
    {
      category: 'Leadership',
      icon: <Target className="w-6 h-6" />,
      items: [
        { 
          platform: 'Robotics Society, DTU', 
          achievement: 'Team Leader & Developer (2021-2023)', 
          color: 'text-pink-400' 
        }
      ]
    }
  ];

  const Section = ({ id, children, className = '' }) => (
    <section id={id} className={`min-h-screen ${className}`}>
      {children}
    </section>
  );

  const AnimatedCard = ({ children, delay = 0, className = '' }) => (
    <div 
      className={`transform transition-all duration-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );

  const SkillCard = ({ skill, delay }) => (
    <AnimatedCard delay={delay} className="group">
      <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2">
        <div className="flex items-center space-x-3 mb-4">
          <div className="text-blue-400 group-hover:scale-110 transition-transform duration-300">
            {skill.icon}
          </div>
          <h3 className="text-xl font-semibold">{skill.title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {skill.items.map((item, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-gray-900/50 rounded-full text-sm border border-gray-600/50 hover:border-blue-500/50 transition-colors duration-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </AnimatedCard>
  );

  const ProjectCard = ({ project, delay }) => (
    <AnimatedCard delay={delay} className="group">
      <div className="bg-gray-800/30 backdrop-blur-sm rounded-3xl border border-gray-700/50 overflow-hidden hover:border-gray-600/50 transition-all duration-500 hover:shadow-2xl hover:shadow-black/20 hover:-translate-y-3">
        <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
        
        <div className="p-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm">{project.subtitle}</p>
            </div>
            {project.featured && (
              <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                FEATURED
              </div>
            )}
          </div>
          
          <p className="text-gray-300 mb-6 leading-relaxed">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-full text-xs border border-gray-600/30"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="space-y-2 mb-6">
            <h4 className="text-sm font-semibold text-blue-400">Key Results:</h4>
            {project.results.map((result, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Zap className="w-3 h-3 text-green-400" />
                <span className="text-sm text-gray-300">{result}</span>
              </div>
            ))}
          </div>
          
          <div className="flex space-x-3">
            {project.playStore && (
              <a 
                href={project.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-gradient-to-r from-green-500 to-blue-500 px-4 py-2 rounded-full text-sm hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Play Store</span>
              </a>
            )}
            {project.github && (
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 border border-gray-600 px-4 py-2 rounded-full text-sm hover:bg-gray-800 transition-all duration-300"
              >
                <Github className="w-4 h-4" />
                <span>Code</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </AnimatedCard>
  );

  return (
    <div className="bg-gray-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl transition-all duration-500 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
        <div 
          className="absolute w-64 h-64 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-2xl"
          style={{
            left: mousePosition.x - 128,
            top: mousePosition.y - 128,
            transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.05}px)`
          }}
        />
        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
        <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-ping" />
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-green-400 rounded-full animate-bounce" />
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-yellow-400 rounded-full animate-pulse" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ramanand Sharma
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Achievements', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`hover:text-blue-400 transition-colors duration-300 relative group ${
                    activeSection === item.toLowerCase() ? 'text-blue-400' : ''
                  }`}
                >
                  {item}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-400 transition-all duration-300 ${
                    activeSection === item.toLowerCase() ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Section id="home" className="flex items-center justify-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <AnimatedCard delay={200}>
            <div className="mb-6">
              <span className="inline-block bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full px-6 py-2 text-sm font-medium backdrop-blur-sm">
                👋 Welcome to my portfolio
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Ramanand
              </span>
              <br />
              <span className="text-white">Sharma</span>
            </h1>
          </AnimatedCard>
          
          <AnimatedCard delay={400}>
            <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-4xl mx-auto leading-relaxed">
              Flutter Developer & Full-Stack Engineer
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
              Crafting exceptional mobile experiences with 2+ years of expertise in Flutter, Node.js & enterprise solutions
            </p>
          </AnimatedCard>
          
          <AnimatedCard delay={600}>
            <div className="flex justify-center flex-wrap gap-4 mb-12">
              <div className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-700/50">
                <Smartphone className="w-5 h-5 text-blue-400" />
                <span>Flutter Expert</span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-700/50">
                <Server className="w-5 h-5 text-green-400" />
                <span>Backend Dev</span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-700/50">
                <Trophy className="w-5 h-5 text-yellow-400" />
                <span>5⭐ Coder</span>
              </div>
            </div>
          </AnimatedCard>
          
          <AnimatedCard delay={800}>
            <div className="flex justify-center flex-wrap gap-4 mb-8">
              <button 
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 font-medium"
              >
                View My Projects
              </button>
              <button className="border border-gray-600 px-8 py-4 rounded-full hover:bg-gray-800 transition-all duration-300 flex items-center space-x-2">
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </button>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={1000}>
            <div className="flex justify-center space-x-6">
              <a href="mailto:sde.ramanand@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Mail className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/ramanand-sharma-b2a720194" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://github.com/ramanand7" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Github className="w-6 h-6" />
              </a>
              <a href="tel:+918882098915" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Phone className="w-6 h-6" />
              </a>
            </div>
          </AnimatedCard>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </Section>

      {/* About Section */}
      <Section id="about" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedCard>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
          </AnimatedCard>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedCard delay={200}>
              <div className="relative">
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-gray-700/50">
                  <User className="w-32 h-32 text-gray-400" />
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                  <Coffee className="w-8 h-8" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/25">
                  <Code className="w-6 h-6" />
                </div>
              </div>
            </AnimatedCard>
            
            <AnimatedCard delay={400}>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-blue-400">Hello, I'm Ramanand! 👋</h3>
                  <p className="text-lg text-gray-300 leading-relaxed mb-4">
                    I'm a passionate Flutter developer and full-stack engineer with a strong foundation in mobile app development 
                    and backend technologies. Currently pursuing my B.Tech in Information Technology from Delhi Technological University 
                    with a CGPA of 8.4/10.
                  </p>
                  
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    With 2+ years of professional experience, I've successfully delivered multiple cross-platform applications 
                    that have generated significant business value and serve thousands of users daily. I'm also a competitive 
                    programming enthusiast with top ratings across multiple platforms.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-6 rounded-2xl border border-blue-500/20 backdrop-blur-sm">
                    <div className="text-3xl font-bold text-blue-400 mb-2">100K+</div>
                    <div className="text-gray-400">App Users Served</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-500/10 to-teal-500/10 p-6 rounded-2xl border border-green-500/20 backdrop-blur-sm">
                    <div className="text-3xl font-bold text-green-400 mb-2">5+</div>
                    <div className="text-gray-400">Apps Published</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-6 rounded-2xl border border-purple-500/20 backdrop-blur-sm">
                    <div className="text-3xl font-bold text-purple-400 mb-2">2+</div>
                    <div className="text-gray-400">Years Experience</div>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 p-6 rounded-2xl border border-yellow-500/20 backdrop-blur-sm">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">5⭐</div>
                    <div className="text-gray-400">Top 1% Coder</div>
                  </div>
                </div>

                <div className="pt-6">
                  <h4 className="text-lg font-semibold mb-3 text-blue-400">Quick Facts</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <GraduationCap className="w-5 h-5 text-green-400" />
                      <span>B.Tech IT, Delhi Technological University (8.4 CGPA)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-red-400" />
                      <span>Delhi, India</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Award className="w-5 h-5 text-purple-400" />
                      <span>Published Research Paper (98% Accuracy)</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedCard>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>
          </AnimatedCard>
          
          <div className="grid md:grid-cols-3 gap-8">
            {Object.values(skills).map((skill, index) => (
              <SkillCard key={index} skill={skill} delay={200 + index * 100} />
            ))}
          </div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedCard>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Professional Experience
            </h2>
          </AnimatedCard>
          
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <AnimatedCard key={index} delay={200 + index * 200}>
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-3xl border border-gray-700/50 p-8 hover:border-gray-600/50 transition-all duration-500 hover:shadow-xl hover:shadow-black/10">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <Building className="w-6 h-6 text-blue-400" />
                        <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                      </div>
                      <p className="text-xl text-blue-400 mb-2">{exp.company}</p>
                      <p className="text-gray-400 mb-4">{exp.description}</p>
                    </div>
                    <div className="lg:text-right">
                      <div className="flex items-center space-x-2 mb-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-300">{exp.period}</span>
                      </div>
                      <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-4 py-2 rounded-full text-sm font-medium border border-blue-500/30">
                        {exp.duration}
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-green-400">Key Achievements:</h4>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start space-x-3">
                            <Zap className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-blue-400">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-full text-sm border border-gray-600/30 hover:border-blue-500/50 transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedCard>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
              Showcasing real-world applications with measurable impact and thousands of active users
            </p>
          </AnimatedCard>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.filter(p => p.featured).map((project, index) => (
              <ProjectCard key={index} project={project} delay={200 + index * 200} />
            ))}
          </div>
          
          <AnimatedCard delay={800}>
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold mb-8 text-white">Other Notable Projects</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {projects.filter(p => !p.featured).map((project, index) => (
                  <div key={index} className="bg-gray-800/20 backdrop-blur-sm rounded-2xl border border-gray-700/30 p-6 hover:border-gray-600/50 transition-all duration-300">
                    <div className={`h-1 bg-gradient-to-r ${project.gradient} mb-4 rounded-full`} />
                    <h4 className="text-lg font-bold mb-2">{project.title}</h4>
                    <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 3).map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-gray-900/50 rounded-full text-xs border border-gray-600/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                    {project.playStore && (
                      <a 
                        href={project.playStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm">View on Play Store</span>
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </AnimatedCard>
        </div>
      </Section>

      {/* Achievements Section */}
      <Section id="achievements" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedCard>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Achievements & Recognition
            </h2>
          </AnimatedCard>
          
          <div className="space-y-12">
            {achievements.map((category, index) => (
              <AnimatedCard key={index} delay={200 + index * 200}>
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-3xl border border-gray-700/50 p-8 hover:border-gray-600/50 transition-all duration-500">
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl border border-blue-500/30">
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="bg-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-700/30 p-6 hover:border-gray-600/50 transition-all duration-300">
                        <div className="flex items-center space-x-3 mb-3">
                          <Star className={`w-5 h-5 ${item.color}`} />
                          <h4 className="font-semibold text-white">{item.platform}</h4>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">{item.achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedCard>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
              Ready to bring your next mobile app or backend solution to life? Let's discuss your project!
            </p>
          </AnimatedCard>
          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedCard delay={200}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-white">Get in Touch</h3>
                  <p className="text-gray-300 leading-relaxed mb-8">
                    I'm always interested in discussing new opportunities, challenging projects, 
                    or just connecting with fellow developers. Feel free to reach out!
                  </p>
                </div>
                
                <div className="space-y-6">
                  <a 
                    href="mailto:sde.ramanand@gmail.com"
                    className="flex items-center space-x-4 p-4 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group"
                  >
                    <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Email</div>
                      <div className="text-gray-400">sde.ramanand@gmail.com</div>
                    </div>
                  </a>
                  
                  <a 
                    href="tel:+918882098915"
                    className="flex items-center space-x-4 p-4 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 group"
                  >
                    <div className="p-3 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-xl border border-green-500/30 group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Phone</div>
                      <div className="text-gray-400">+91 888-209-8915</div>
                    </div>
                  </a>
                  
                  <a 
                    href="https://linkedin.com/in/ramanand-sharma-b2a720194"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group"
                  >
                    <div className="p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl border border-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                      <Linkedin className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">LinkedIn</div>
                      <div className="text-gray-400">Connect with me</div>
                    </div>
                  </a>
                  
                  <a 
                    href="https://github.com/ramanand7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group"
                  >
                    <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/30 group-hover:scale-110 transition-transform duration-300">
                      <Github className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">GitHub</div>
                      <div className="text-gray-400">View my code</div>
                    </div>
                  </a>
                </div>
              </div>
            </AnimatedCard>
            
            <AnimatedCard delay={400}>
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-3xl border border-gray-700/50 p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">Quick Message</h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600/50 rounded-xl focus:border-blue-500/50 focus:outline-none transition-colors duration-300 text-white placeholder-gray-400"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600/50 rounded-xl focus:border-blue-500/50 focus:outline-none transition-colors duration-300 text-white placeholder-gray-400"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea 
                      rows="4" 
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600/50 rounded-xl focus:border-blue-500/50 focus:outline-none transition-colors duration-300 text-white placeholder-gray-400 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 font-medium flex items-center justify-center space-x-2"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2024 Ramanand Sharma. Built with React & Tailwind CSS.
            </div>
            <div className="flex items-center space-x-6">
              <a href="mailto:sde.ramanand@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/ramanand-sharma-b2a720194" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/ramanand7" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;