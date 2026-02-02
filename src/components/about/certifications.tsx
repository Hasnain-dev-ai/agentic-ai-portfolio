"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Calendar, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
const certifications = [
  {
    id: 1,
    name: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services",
    date: "June 2024",
    expires: "June 2027",
    credentialId: "AWS-DEV-12345",
    credentialURL: "https://www.credly.com/badges/example",
    skills: ["AWS", "Cloud Computing", "Serverless", "Lambda", "S3", "DynamoDB"],
    logo: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Google Professional Cloud Developer",
    issuer: "Google Cloud",
    date: "March 2024",
    expires: "March 2026",
    credentialId: "GCP-DEV-67890",
    credentialURL: "https://www.credential.net/example",
    skills: ["Google Cloud", "Cloud Functions", "App Engine", "Firebase", "BigQuery"],
    logo: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "MongoDB Certified Developer",
    issuer: "MongoDB University",
    date: "January 2024",
    expires: "January 2027",
    credentialId: "MDB-DEV-54321",
    credentialURL: "https://university.mongodb.com/certification/verify",
    skills: ["MongoDB", "NoSQL", "Database Design", "Aggregation", "Indexing"],
    logo: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 4,
    name: "React Developer Certification",
    issuer: "Meta",
    date: "November 2023",
    expires: "No Expiration",
    credentialId: "META-REACT-13579",
    credentialURL: "https://www.coursera.org/account/accomplishments/verify",
    skills: ["React", "JavaScript", "Frontend Development", "UI/UX", "State Management"],
    logo: "/placeholder.svg?height=80&width=80",
  },
]

export default function Certifications() {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <Badge variant="modern" className="px-4 py-1.5 rounded-full mb-4">Professional Credentials</Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Certifications & <span className="vibrant-text">Achievements</span>
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Industry-recognized certifications that validate my expertise and commitment to professional growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-md overflow-hidden bg-muted flex-shrink-0">
                      <Image
                        src={cert.logo || "/placeholder.svg"}
                        alt={cert.issuer}
                        width={64}
                        height={64}
                        className="w-16 h-16 object-contain p-2"
                      />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-lg">{cert.name}</h3>
                        <Award className="h-4 w-4 text-yellow-500" />
                      </div>
                      <p className="text-muted-foreground mb-2">Issued by {cert.issuer}</p>
                      <div className="flex items-center text-sm text-muted-foreground mb-4">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>
                          {cert.date} - {cert.expires}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {cert.skills.map((skill) => (
                          <Badge key={skill} variant="modern">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-xs text-muted-foreground">Credential ID: {cert.credentialId}</p>
                        <Button variant="default" size="sm" asChild className="w-full font-bold">
                          <a href={cert.credentialURL} target="_blank" rel="noopener noreferrer">
                            <span className="flex items-center gap-1">
                              Verify <ExternalLink className="h-3 w-3" />
                            </span>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}