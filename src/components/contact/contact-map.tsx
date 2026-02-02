"use client";

// These imports were missing from your file
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactMap() {
  // I've replaced the placeholder with a valid Google Maps embed URL for Karachi
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462117.0264426543!2d66.82521749531248!3d25.047781400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1718572145125!5m2!1sen!2s";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card className="bento-box overflow-hidden">
        <CardHeader>
          <CardTitle>My Location</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="aspect-video w-full">
            <iframe
              src={mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map location of Karachi"
            ></iframe>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}