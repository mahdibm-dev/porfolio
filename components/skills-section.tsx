import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const skillCategories = [
  {
    category: "Frontend Frameworks",
    icon: "⚛️",
    skills: ["Vue.js", "React.js", "Next.js", "Nuxt.js", "Astro.js"],
    color: "bg-blue-50 border-blue-200 text-blue-800",
  },
  {
    category: "Styling & UI",
    icon: "🎨",
    skills: ["Tailwind CSS", "Shadcn/ui", "CSS", "SCSS", "HTML"],
    color: "bg-purple-50 border-purple-200 text-purple-800",
  },
  {
    category: "State Management & Data",
    icon: "🔄",
    skills: ["React Query", "TypeScript", "REST APIs"],
    color: "bg-green-50 border-green-200 text-green-800",
  },
  {
    category: "Tools & Workflow",
    icon: "🛠️",
    skills: ["Git", "Vite", "Jira", "Plane.com", "CMS integrations"],
    color: "bg-orange-50 border-orange-200 text-orange-800",
  },
  {
    category: "Backend (Basic)",
    icon: "⚙️",
    skills: ["Node.js"],
    color: "bg-gray-50 border-gray-200 text-gray-800",
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Technical Skills</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-2xl">{category.icon}</div>
                    <h3 className="text-lg font-semibold">{category.category}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className={`${category.color} hover:scale-105 transition-transform cursor-default`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Featured Skills */}
          <div className="mt-16 text-center">
            <h3 className="text-xl font-semibold mb-6">Most Experienced With</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["Vue.js", "React.js", "Next.js", "Nuxt.js", "TypeScript", "Tailwind CSS"].map((skill, index) => (
                <Badge
                  key={index}
                  variant="default"
                  className="text-base py-2 px-4 bg-primary hover:bg-primary/90 transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
