"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "hasnainzahoor1996@gmail.com",
      link: "mailto:hasnainzahoor1996@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone (Pakistan)",
      value: "+92 300 0161914",
      link: "tel:+923000161914",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Location",
      value: "Karachi, Sindh, Pakistan",
      link: null,
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Working Hours",
      value:
        "Mon - Thu & Sat - Sun, Early Mornings: Before 9 AM | Evenings: After 5 PM (Limited) (Friday Holiday)",
      link: null,
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="w-full"
    >
      <Card>
        <CardHeader className="bg-muted/50">
          <CardTitle>Contact Information</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactDetails.map((detail, index) => (
              <motion.div
                key={detail.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                className="flex items-start space-x-3 break-words"
              >
                <div className="rounded-full bg-muted p-2 text-primary shrink-0">
                  {detail.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-sm sm:text-base mb-1">{detail.title}</h3>
                  {detail.link ? (
                    <a
                      href={detail.link}
                      className="text-muted-foreground hover:text-primary transition-colors break-words text-sm sm:text-base"
                    >
                      {detail.value}
                    </a>
                  ) : (
                    <p className="text-muted-foreground break-words text-sm sm:text-base">
                      {detail.value}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
