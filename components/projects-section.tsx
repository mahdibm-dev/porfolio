import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, User } from "lucide-react"
import { ProjectImage, projectImages } from "./project-images"

const projects = [
  {
    title: "Hotel Booking Web Applications",
    company: "JoodLab",
    duration: "April 2024 - Present (Remote)",
    role: "Frontend Developer",
    projectDescription: [
      "A suite of modern hotel booking web applications designed to provide users with a seamless reservation experience and scalable content management for clients",
      "These platforms were built to handle high traffic and integrate with various content management systems",
    ],
    myRole: [
      "Built and scaled multiple hotel booking websites using Nuxt.js and Shadcn components",
      "Integrated CMS-driven content to enable flexible and scalable client-side management of hotel information",
      "Enhanced reservation flows and overall performance across all devices for an optimized user experience",
      "Achieved a user base of over 1 million, demonstrating the applications' scalability and stability",
      "Collaborated closely with UI/UX teams to translate designs into responsive and modern interfaces using contemporary JavaScript frameworks",
    ],
    technologies: ["Nuxt.js", "Shadcn", "Vue.js", "CSS", "HTML"],
    image: projectImages.hotelBooking,
    highlights: ["1M+ users", "CMS Integration", "Responsive Design"],
    liveExamples: [
      { name: "Jewar Al Safwah", url: "https://jewaralsafwah.com/en" },
      { name: "Al Tayseer", url: "https://www.altayseer1.com/en" },
      { name: "Ikerman Voyage", url: "https://ikermanvoyage.com/" },
      { name: "Razan Booking", url: "https://razanbooking.com/en" },
      { name: "Golden Bookings", url: "https://golden-bookings.com/en" },
      { name: "Mawaqeet Online", url: "https://mawaqeetonline.com/en" },
      { name: "Bab Booking", url: "https://babbooking.com/en" },
    ],
  },
  {
    title: "E-Learning Platform",
    company: "JoodLab",
    duration: "April 2024 - Present (Remote)",
    role: "Frontend Developer",
    projectDescription: [
      "A comprehensive e-learning platform featuring distinct portals for administrators, students, and teachers, designed to facilitate online education and content delivery",
    ],
    myRole: [
      "Developed an advanced e-learning platform encompassing an admin dashboard, student portal, and teacher portal",
      "Implemented core functionalities using Vue.js, Shadcn components, and Hono.js",
    ],
    technologies: ["Vue.js", "Shadcn", "Hono.js", "CSS", "HTML"],
    image: projectImages.eLearning,
    highlights: ["Multi-portal System", "Admin Dashboard", "Modular Architecture"],
    liveExamples: [{ name: "Iqraa Makkah", url: "https://www.iqraamkh.com/en" }],
  },
  {
    title: "Mobile Parental Control Dashboard",
    company: "NNA Ressources",
    duration: "August 2022 - April 2024",
    location: "Tunis, Tunisia",
    role: "Frontend Developer & Team Lead",
    projectDescription: [
      "A cross-platform mobile application providing parents with a dashboard for managing and monitoring their children's device usage and online activities",
    ],
    myRole: [
      "Led the frontend development of the mobile parental control dashboard using Expo (React Native) and React-Query",
      "Ensured successful deployment to major app stores: Google Play Store, Apple App Store, and Huawei AppGallery",
      "Integrated Google and Apple login for seamless and secure cross-platform authentication",
      "Automated the app store submission pipeline using Expo CLI, which significantly improved deployment speed and reliability",
      "Managed Agile workflows, sprint planning, and issue tracking across a distributed team using Jira",
      "Emphasized modular architecture and consistent UI to optimize the overall user experience",
    ],
    technologies: ["Expo (React Native)", "React-Query", "Next.js", "CSS"],
    image: projectImages.parentalControl,
    highlights: ["Multi-store Deployment", "Cross-platform", "OAuth Integration"],
    liveExamples: [
      { name: "Kidcare on Google Play", url: "https://play.google.com/store/apps/details?id=com.kidcare&hl=en&pli=1" },
    ],
  },
  {
    title: "Real-time Internal Messaging System",
    company: "NNA Ressources",
    duration: "August 2022 - April 2024",
    location: "Tunis, Tunisia",
    role: "Frontend Developer",
    projectDescription: [
      "A web application featuring a real-time internal messaging system, designed to enhance communication and streamline operations for distributed teams",
    ],
    myRole: [
      "Built the core web application using Next.js and CSS",
      "Implemented a real-time internal messaging system to facilitate streamlined team communication",
    ],
    technologies: ["Next.js", "CSS"],
    image: projectImages.messaging,
    highlights: ["Real-time Communication", "Team Collaboration", "Workflow Management"],
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">My Work</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my experience with modern web technologies.
          </p>

          <div className="grid gap-8 md:gap-12">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <div className={`grid lg:grid-cols-2 gap-6 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                  <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <ProjectImage
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      className="w-full h-64 lg:h-full"
                    />
                  </div>

                  <div className={`p-6 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    <CardHeader className="p-0 mb-4">
                      <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-2">
                        <span className="font-medium">{project.company}</span>
                        <span>•</span>
                        <span>{project.duration}</span>
                        {project.location && (
                          <>
                            <span>•</span>
                            <span>{project.location}</span>
                          </>
                        )}
                      </div>
                      <CardTitle className="text-xl sm:text-2xl mb-2">{project.title}</CardTitle>
                      <div className="flex items-center gap-2 text-sm text-primary mb-3">
                        <User className="w-4 h-4" />
                        <span className="font-medium">{project.role}</span>
                      </div>
                    </CardHeader>

                    <CardContent className="p-0">
                      {project.projectDescription.length > 0 && (
                        <div className="mb-4">
                          <h4 className="font-semibold mb-2">Project Overview:</h4>
                          <ul className="text-sm leading-relaxed text-muted-foreground space-y-1">
                            {project.projectDescription.map((point, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-primary mt-1.5 text-xs">•</span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {project.myRole.length > 0 && (
                        <div className="mb-4">
                          <h4 className="font-semibold mb-2">My Role & Contributions:</h4>
                          <ul className="text-sm leading-relaxed text-muted-foreground space-y-1">
                            {project.myRole.map((point, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-primary mt-1.5 text-xs">•</span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Key Highlights:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.highlights.map((highlight, i) => (
                            <Badge key={i} variant="secondary">
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, i) => (
                            <Badge key={i} variant="outline">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {project.liveExamples && (
                        <div className="mb-6">
                          <h4 className="font-semibold mb-3">Live Examples:</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {project.liveExamples.map((example, i) => (
                              <a
                                key={i}
                                href={example.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 p-2 rounded-md border hover:bg-muted/50 transition-colors text-sm"
                              >
                                <ExternalLink className="w-3 h-3 text-primary" />
                                <span className="truncate">{example.name}</span>
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
