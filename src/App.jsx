import { useState, useEffect } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Moon, Sun, ArrowUp, Mail, Phone, MapPin, ExternalLink, Github, Linkedin, Download, Server, Network, Code, Database, Shield, Monitor } from 'lucide-react'
import ProjectDetail from './components/ProjectDetail.jsx'
import './App.css'
import resumePDF from './assets/September2025SeyarMuhsenResume.pdf'

function HomePage() {
  const [darkMode, setDarkMode] = useState(true)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const skills = [
    { name: 'Java', category: 'Programming' },
    { name: 'Python', category: 'Programming' },
    { name: 'C/C++', category: 'Programming' },
    { name: 'HTML/CSS', category: 'Web' },
    { name: 'JavaScript', category: 'Web' },
    { name: 'Git', category: 'Tools' },
    { name: 'Visual Studio Code', category: 'Tools' },
    { name: 'Microsoft Office', category: 'Productivity' },
    { name: 'Google Suite', category: 'Productivity' }
  ]

  const certifications = [
    { name: 'CompTIA A+', status: 'Completed', date: 'September 2025', icon: <Monitor className="w-5 h-5" /> },
    { name: 'CompTIA Network+', status: 'In Progress', date: 'TBD', icon: <Network className="w-5 h-5" /> },
    { name: 'Future Certifications', status: 'Planned', date: 'TBD', icon: <Shield className="w-5 h-5" /> }
  ]

  const projects = [
    {
      id: 'spicesage',
      title: 'SpiceSage Recipe Platform',
      description: 'A comprehensive recipe management system with user personalization, dietary restrictions, and interactive features.',
      technologies: ['Java', 'Database Systems', 'Web Development'],
      features: [
        'User account system with personalization capabilities',
        'Dietary restrictions and allergy management',
        'Interactive recipe pages with editable ingredients',
        'Recipe saving and categorization system',
        'Cost estimation per recipe'
      ],
      period: 'January 2025 - May 2025',
      icon: <Code className="w-6 h-6" />
    },
    {
      id: 'homelab',
      title: 'Homelab Infrastructure',
      description: 'Personal IT infrastructure project focusing on networking, server management, and system administration.',
      technologies: ['Networking', 'Server Administration', 'System Configuration'],
      features: [
        'Network topology design and implementation',
        'Server virtualization and management',
        'Security configuration and monitoring',
        'Documentation and troubleshooting procedures'
      ],
      period: 'Ongoing',
      icon: <Server className="w-6 h-6" />
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl">Seyar Muhsen</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-primary transition-colors">About</a>
              <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
              <a href="#resume" className="hover:text-primary transition-colors">Resume</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Seyar Muhsen
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-4">
              Computer Science Student & Aspiring IT Professional
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Transitioning from Computer Science to IT infrastructure, with a passion for homelab projects, 
              networking, and system administration. Currently pursuing CompTIA certifications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <a href="#projects" className="flex items-center gap-2">
                  View Projects
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg">
                <a href={resumePDF} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Background</h3>
              <p className="text-muted-foreground mb-6">
                I'm a Computer Science student at The University of Texas at Dallas 
                expected to graduate in May 2026. My journey has taken me from customer service 
                roles to pursuing a technical career in IT infrastructure and system administration.
              </p>
              <p className="text-muted-foreground mb-6">
                With experience in database systems, computer architecture, and data structures, 
                I'm now focusing on practical IT skills through homelab projects and industry certifications.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Current Focus</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Server className="w-5 h-5 text-primary" />
                  <span>Building and managing homelab infrastructure</span>
                </div>
                <div className="flex items-center gap-3">
                  <Network className="w-5 h-5 text-primary" />
                  <span>Pursuing CompTIA Network+ certification</span>
                </div>
                <div className="flex items-center gap-3">
                  <Database className="w-5 h-5 text-primary" />
                  <span>Learning system administration and virtualization</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-primary" />
                  <span>Exploring cybersecurity best practices</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <Badge variant="secondary" className="mb-2">{skill.category}</Badge>
                  <p className="font-medium">{skill.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Certifications</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    {cert.icon}
                    <CardTitle className="text-lg">{cert.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <Badge 
                    variant={cert.status === 'Completed' ? 'default' : cert.status === 'In Progress' ? 'secondary' : 'outline'}
                    className="mb-2"
                  >
                    {cert.status}
                  </Badge>
                  <p className="text-sm text-muted-foreground">{cert.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate(`/project/${project.id}`)}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    {project.icon}
                    <div>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <CardDescription className="text-sm text-muted-foreground">{project.period}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                      {project.features.length > 3 && (
                        <li className="text-primary font-medium">+ {project.features.length - 3} more features</li>
                      )}
                    </ul>
                  </div>
                  <Button variant="outline" className="w-full">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Resume</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Resume Blocks */}
            <div className="space-y-8">
              {/* Education Block */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="w-5 h-5" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Bachelor's of Computer Science</h4>
                    <p className="text-sm text-muted-foreground">The University of Texas at Dallas</p>
                    <p className="text-sm text-muted-foreground">Expected Graduation: May 2026</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Associates of Science</h4>
                    <p className="text-sm text-muted-foreground">Collin County Community College</p>
                    <p className="text-sm text-muted-foreground">August 2022 - May 2023</p>
                  </div>
                </CardContent>
              </Card>

              {/* Experience Block */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Monitor className="w-5 h-5" />
                    Experience
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Customer Care Center Specialist</h4>
                    <p className="text-sm text-muted-foreground">State Farm | June 2022 - August 2023</p>
                    <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                      <li>• Achieved 95% first-call resolution rate</li>
                      <li>• Managed multiple customer accounts and complex issues</li>
                      <li>• Utilized CRM tools and proprietary systems</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold">Front End Associate</h4>
                    <p className="text-sm text-muted-foreground">Walmart | May 2021 - June 2022</p>
                    <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                      <li>• Provided customer service in fast-paced retail environment</li>
                      <li>• Collaborated with backend departments for inventory support</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* PDF Embed */}
            <div>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Resume PDF</span>
                    <Button variant="outline" size="sm">
                      <a href={resumePDF} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Download className="w-4 h-4" />
                        Download
                      </a>
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="w-full h-96 border border-border rounded-lg overflow-hidden">
                    <iframe
                      src={resumePDF}
                      className="w-full h-full"
                      title="Resume PDF"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Get In Touch</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Mail className="w-8 h-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">muhsenseyar1@gmail.com</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Phone className="w-8 h-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-muted-foreground">(972) 302-7496</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <MapPin className="w-8 h-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-muted-foreground">Allen, TX 75002</p>
              </CardContent>
            </Card>
          </div>
          <p className="text-lg text-muted-foreground">
            I'm always interested in discussing new opportunities, homelab projects, or IT infrastructure topics. 
            Feel free to reach out!
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Seyar Muhsen. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>

      {/* Dark Mode Toggle */}
      <Button
        onClick={toggleDarkMode}
        className="fixed bottom-20 right-4 w-12 h-12 rounded-full shadow-lg z-50"
        size="icon"
      >
        {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </Button>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 w-12 h-12 rounded-full shadow-lg z-50"
          size="icon"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      )}
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/project/:projectId" element={<ProjectDetail />} />
    </Routes>
  )
}

export default App

