"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Gitlab } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen pt-24 flex items-center justify-center bg-gradient-to-br from-background to-muted/20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Hi, I'm <span className="text-primary">Mahdi Ben Messaoud</span>
          </h1>

          <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8">
            Frontend Developer building engaging web experiences
          </h2>

          <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            I bring ideas to life on the web, focusing on user-friendly design and solid code. I've been working with
            modern frameworks like React and Vue since 2022.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://linkedin.com/in/mahdi-ben-messaoud"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://github.com/mahdibm-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://gitlab.com/mahdibenmassoud98"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Gitlab className="h-6 w-6" />
              <span className="sr-only">GitLab</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
