import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";


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

export default function Contact() {
    return (
        <section id="certifications" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificates.map((cert) => (
                    <Card key={cert.id} className="overflow-hidden">
                        <CardHeader className="p-0">
                            <img 
                                src={cert.image}
                                alt={`${cert.name} certificate`}
                                className="w-full h-40 object-cover"
                            />
                        </CardHeader>
                        <CardContent className="p-4">
                            <CardTitle className="text-lg mb-2">{cert.name}</CardTitle>
                            <CardDescription>
                                <p className="text-sm text-muted-foreground mb-1">Issued by: {cert.issuer}</p>
                                <p className="text-sm text-muted-foreground">Acquired: {cert.date}</p>
                            </CardDescription>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}