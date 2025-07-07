"use client"

import { Mail, Phone } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Get in Touch</h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Ready to work together? Let's connect!</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Email</p>
                  <a
                    href="mailto:mahdibenmassoud98@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    mahdibenmassoud98@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:+21621776268" className="text-muted-foreground hover:text-primary transition-colors">
                    +216 21 776 268
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
