// components/Certification.tsx

import { useEffect, useRef, useState } from 'react'
import { FastAverageColor } from 'fast-average-color'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface Certificate {
  id: string
  name: string
  issuer: string
  date: string
  image: string
}

const certificates: Certificate[] = [
  {
    id: '1',
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'ISC²',
    date: 'August 24, 2023',
    image: '/awsCloudPract.png',
  },
  {
    id: '2',
    name: 'Docker Certificate of Completion',
    issuer: 'Linkedin + Docker',
    date: 'July 24, 2024',
    image: '/dockerBadge.png',
  },
  {
    id: '3',
    name: 'Graph Developer - Associate',
    issuer: 'Apollo Certified',
    date: 'September 8, 2024',
    image: '/apolloBadge.svg', // SVG will fallback to default
  },
]

function CertificateCard({ cert }: { cert: Certificate }) {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [bgColor, setBgColor] = useState<string>('#ffffff')
  const [textColor, setTextColor] = useState<string>('#000000')
  const imgRef = useRef<HTMLImageElement | null>(null)

  useEffect(() => {
    const fac = new FastAverageColor()

    const getColor = async () => {
      if (imgRef.current?.complete && imgRef.current.naturalHeight !== 0) {
        try {
          const result = await fac.getColorAsync(imgRef.current!, {
            mode: 'precision',
            crossOrigin: 'anonymous',
          })
          setBgColor(result.hex)
          setTextColor(result.isDark ? '#ffffff' : '#000000')
        } catch (e) {
          console.warn('Color extraction failed:', e)
        }
      }
    }

    getColor()

    return () => {
      fac.destroy()
    }
  }, [])

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
        style={{ backgroundColor: bgColor }}
      >
        <CardHeader className="p-0 relative overflow-hidden h-48">
          <motion.img
            ref={imgRef}
            crossOrigin="anonymous"
            src={cert.image}
            alt={`${cert.name} certificate`}
            className="w-full h-full object-scale-down"
            animate={{
              scale: hoveredId === cert.id ? 1.1 : 1,
            }}
            transition={{ duration: 0.3 }}
            onLoad={() => {
              // Trigger useEffect re-run if needed
            }}
          />
        </CardHeader>
        <CardContent className="p-6" style={{ color: textColor }}>
          <CardTitle className="text-xl mb-2">{cert.name}</CardTitle>
          <CardDescription className="text-sm font-medium">
            Issued by: {cert.issuer}
          </CardDescription>
          <CardDescription className="text-sm font-medium">
            Acquired: {cert.date}
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
