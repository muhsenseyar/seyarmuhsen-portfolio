import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Target, Lightbulb } from 'lucide-react'

const projectsData = {
  'spicesage': {
    title: 'SpiceSage Recipe Platform',
    subtitle: 'Comprehensive Recipe Management System',
    period: 'January 2025 - May 2025',
    status: 'Completed',
    overview: 'SpiceSage is a comprehensive recipe management platform designed to revolutionize how users discover, organize, and prepare meals. The platform combines user personalization with practical cooking features to create an intuitive and accessible cooking experience.',
    challenge: 'Traditional recipe platforms often lack personalization and fail to accommodate users with dietary restrictions or allergies. Many existing solutions provide static recipe lists without considering individual preferences, cooking skill levels, or budget constraints.',
    solution: 'SpiceSage addresses these challenges by implementing a sophisticated user account system that learns from user preferences and dietary needs. The platform provides dynamic recipe recommendations, interactive ingredient management, and cost-effective meal planning.',
    technologies: [
      { name: 'Java', category: 'Backend' },
      { name: 'Database Systems', category: 'Data' },
      { name: 'Web Development', category: 'Frontend' },
      { name: 'User Authentication', category: 'Security' },
      { name: 'API Design', category: 'Architecture' }
    ],
    features: [
      {
        title: 'Personalized User Accounts',
        description: 'Comprehensive user profile system that tracks dietary restrictions, allergies, cooking preferences, and skill level to provide tailored recipe recommendations.',
        icon: <Users className="w-5 h-5" />
      },
      {
        title: 'Smart Dietary Management',
        description: 'Advanced filtering system that automatically excludes recipes containing allergens or ingredients that conflict with user dietary restrictions.',
        icon: <Target className="w-5 h-5" />
      },
      {
        title: 'Interactive Recipe Interface',
        description: 'Dynamic recipe pages with editable ingredient lists, substitution suggestions, and step-by-step cooking instructions with timing guidance.',
        icon: <Lightbulb className="w-5 h-5" />
      },
      {
        title: 'Recipe Organization System',
        description: 'Powerful categorization and favoriting system allowing users to organize recipes into custom folders and collections for easy access.',
        icon: <Target className="w-5 h-5" />
      },
      {
        title: 'Cost Estimation Engine',
        description: 'Built-in cost calculator that estimates the total cost per recipe based on current ingredient prices and serving sizes.',
        icon: <Target className="w-5 h-5" />
      }
    ],
    outcomes: [
      'Developed a scalable user authentication and profile management system',
      'Implemented complex database relationships for recipe, ingredient, and user data',
      'Created an intuitive user interface with responsive design principles',
      'Built a robust recommendation algorithm based on user preferences',
      'Designed a flexible architecture supporting future feature expansion'
    ],
    lessons: [
      'Gained experience in full-stack development with Java backend systems',
      'Learned database design principles for complex relational data',
      'Developed skills in user experience design and interface development',
      'Understanding of software architecture patterns and scalability considerations',
      'Experience with API design and data management best practices'
    ],
    images: [
      // Placeholder for future images
      // { src: '/path/to/image1.jpg', alt: 'SpiceSage Dashboard', caption: 'Main dashboard showing personalized recipe recommendations' },
      // { src: '/path/to/image2.jpg', alt: 'Recipe Detail Page', caption: 'Interactive recipe page with ingredient substitutions' }
    ],
    links: [
      // { title: 'GitHub Repository', url: '#', icon: <Github className="w-4 h-4" /> },
      // { title: 'Live Demo', url: '#', icon: <ExternalLink className="w-4 h-4" /> }
    ]
  },
  'homelab': {
    title: 'Homelab Infrastructure',
    subtitle: 'Personal IT Infrastructure & Learning Environment',
    period: 'Ongoing Project',
    status: 'Active Development',
    overview: 'A comprehensive homelab setup designed to provide hands-on experience with enterprise-level IT infrastructure, networking, and system administration. This project serves as both a learning environment and a practical demonstration of IT skills for career development.',
    challenge: 'Transitioning from Computer Science theory to practical IT infrastructure requires hands-on experience with real hardware, networking protocols, and system administration tasks that are difficult to simulate in academic environments.',
    solution: 'Building a personal homelab environment that replicates enterprise IT infrastructure on a smaller scale, providing opportunities to work with virtualization, networking, security, and various server technologies in a controlled learning environment.',
    technologies: [
      { name: 'VMware/Proxmox', category: 'Virtualization' },
      { name: 'Linux Administration', category: 'Operating Systems' },
      { name: 'Windows Server', category: 'Operating Systems' },
      { name: 'Networking (TCP/IP)', category: 'Networking' },
      { name: 'Docker/Containers', category: 'Containerization' },
      { name: 'pfSense/OPNsense', category: 'Network Security' }
    ],
    features: [
      {
        title: 'Network Topology Design',
        description: 'Designed and implemented a segmented network architecture with VLANs, proper subnetting, and security zones to simulate enterprise network environments.',
        icon: <Target className="w-5 h-5" />
      },
      {
        title: 'Server Virtualization',
        description: 'Deployed multiple virtual machines running various operating systems and services, including web servers, database servers, and domain controllers.',
        icon: <Users className="w-5 h-5" />
      },
      {
        title: 'Security Implementation',
        description: 'Configured firewalls, intrusion detection systems, and implemented security best practices including network segmentation and access controls.',
        icon: <Target className="w-5 h-5" />
      },
      {
        title: 'Monitoring & Documentation',
        description: 'Established comprehensive monitoring solutions and maintained detailed documentation of all configurations, procedures, and troubleshooting steps.',
        icon: <Lightbulb className="w-5 h-5" />
      }
    ],
    outcomes: [
      'Gained practical experience with enterprise networking equipment and protocols',
      'Developed proficiency in multiple virtualization platforms and containerization',
      'Built expertise in Linux and Windows server administration',
      'Created comprehensive network documentation and standard operating procedures',
      'Established a foundation for pursuing advanced IT certifications'
    ],
    lessons: [
      'Hands-on experience with networking protocols and troubleshooting methodologies',
      'Understanding of virtualization technologies and resource management',
      'Knowledge of security best practices and implementation strategies',
      'Experience with system monitoring, logging, and performance optimization',
      'Development of documentation and change management practices'
    ],
    images: [
      // Placeholder for future images
      // { src: '/path/to/network-diagram.jpg', alt: 'Network Topology', caption: 'Homelab network architecture and VLAN segmentation' },
      // { src: '/path/to/server-rack.jpg', alt: 'Server Hardware', caption: 'Physical server setup and cable management' }
    ],
    links: [
      // { title: 'Documentation Wiki', url: '#', icon: <ExternalLink className="w-4 h-4" /> },
      // { title: 'Network Diagrams', url: '#', icon: <ExternalLink className="w-4 h-4" /> }
    ]
  }
}

export default function ProjectDetail() {
  const { projectId } = useParams()
  const project = projectsData[projectId]

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Link to="/">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="font-bold text-xl">Seyar Muhsen</Link>
            <Link to="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <Badge variant={project.status === 'Completed' ? 'default' : 'secondary'}>
                {project.status}
              </Badge>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-4 h-4" />
                {project.period}
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">{project.subtitle}</p>
            
            {project.links.length > 0 && (
              <div className="flex flex-wrap gap-4">
                {project.links.map((link, index) => (
                  <Button key={index} variant="outline" asChild>
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      {link.icon}
                      {link.title}
                    </a>
                  </Button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
              <p className="text-lg text-muted-foreground mb-8">{project.overview}</p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Challenge</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{project.challenge}</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Solution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{project.solution}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Technologies Used</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {project.technologies.map((tech, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="font-medium">{tech.name}</span>
                        <Badge variant="outline">{tech.category}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Features & Implementation</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {project.features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    {feature.icon}
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Images Section - Placeholder for future images */}
      {project.images.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Project Gallery</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {project.images.map((image, index) => (
                <Card key={index}>
                  <CardContent className="p-0">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-64 object-cover rounded-t-lg"
                    />
                    <div className="p-4">
                      <p className="text-sm text-muted-foreground">{image.caption}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Outcomes & Lessons */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Project Outcomes</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {project.outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-muted-foreground">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Lessons Learned</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {project.lessons.map((lesson, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-muted-foreground">{lesson}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
        </div>
      </footer>
    </div>
  )
}

