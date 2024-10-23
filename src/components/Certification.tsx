import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState } from "react";
import { usePalette } from "color-thief-react";

interface Certificate {
    id: string;
    name: string;
    issuer: string;
    date: string;
    image: string;
}

const certificates: Certificate[] = [
    {
        id: "1",
        name: "AWS Certified Cloud Practitioner",
        issuer: "ISC²",
        date: "August 24, 2023",
        image: "/awsCloudPract.png?height=200&width=300"
    },
    {
        id: "2",
        name: "Docker Certificate of Completion",
        issuer: "Linkedin + Docker",
        date: "July 24, 2024",
        image: "/dockerBadge.png?height=200&width=300"
    },
    {
        id: "3",
        name: "Graph Developer - Associate",
        issuer: "Apollo Certified",
        date: "September 8, 2024",
        image: "/apolloBadge.svg?height=200&width=300"
    }
];

function CertificateCard({ cert }: { cert: Certificate }) {
    const [hoveredId, setHoveredId] = useState<string | null>(null)
    const { data: palette } = usePalette(cert.image, 2, 'hex', { crossOrigin: 'anonymous' })
  
    const backgroundColor = palette ? palette[0] : '#ffffff'
    const textColor = palette ? palette[1] : '#000000'
  
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card 
          className="overflow-hidden h-full transition-shadow duration-300 hover:shadow-xl"
          onMouseEnter={() => setHoveredId(cert.id)}
          onMouseLeave={() => setHoveredId(null)}
          style={{ backgroundColor }}
        >
          <CardHeader className="p-0 relative overflow-hidden h-48">
            <motion.img 
              src={cert.image}
              alt={`${cert.name} certificate`}
              className="w-full h-full object-scale-down"
              animate={{
                scale: hoveredId === cert.id ? 1.1 : 1,
              }}
              transition={{ duration: 0.3 }}
            />
          </CardHeader>
          <CardContent className="p-6" style={{ color: textColor }}>
            <CardTitle className="text-xl mb-2">{cert.name}</CardTitle>
            <CardDescription className="space-y-2" style={{ color: textColor }}>
              <p className="text-sm font-medium">
                Issued by: {cert.issuer}
              </p>
              <p className="text-sm font-medium">
                Acquired: {cert.date}
              </p>
            </CardDescription>
          </CardContent>
        </Card>
      </motion.div>
    )
  }


export default function Certification() {
    return (
      <section id="certifications" className="mb-12 py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert) => (
              <CertificateCard key={cert.id} cert={cert} />
            ))}
          </div>
        </div>
      </section>
    )
  }