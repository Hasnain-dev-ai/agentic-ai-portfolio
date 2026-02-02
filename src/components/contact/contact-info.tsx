"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactInfo() {
  // This data array was missing from your file
  const contactDetails = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "hasnain.dev.ai@gmail.com",
      link: "mailto:hasnain.dev.ai@gmail.com",
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
      value: "Mon - Sat: 9 AM - 6 PM (PKT)",
      link: null,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="w-full"
    >
      <Card className="bento-box">
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {contactDetails.map((detail, index) => (
              <motion.div
                key={detail.title}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                className="flex items-start space-x-3 break-words"
              >
                <div className="vibrant-badge-3d !p-2 shrink-0 mt-1 shadow-md">
                  {detail.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-sm mb-1">{detail.title}</h3>
                  {detail.link ? (
                    <a
                      href={detail.link}
                      className="text-muted-foreground hover:text-primary transition-colors break-words text-sm"
                    >
                      {detail.value}
                    </a>
                  ) : (
                    <p className="text-muted-foreground break-words text-sm">
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
  );
}