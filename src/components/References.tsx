
import { 
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
 } from "./ui/card";

import { Button } from "./ui/button";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
interface Reference{ 
    name: string,
    title: string,
    company: string,
    email: string,
    phone: string,
}

const professionalReferences: Reference[] = [
    {
        name: "Matt Walters",
        title: "IT Manager",
        company: "Michigan Technological University",
        email:"mwalters@mtu.edu",
        phone:"+1 (906) 487-4678"
    },
    {
        name: "Jason Lieburn",
        title: "MacSysAdmin Supervisor",
        company: "Michigan Technological University",
        email:"jeliebur@mtu.edu",
        phone:"+1 (906) 487-2648"
    }
]


export default function References(){
    return (
        <section id="references" className="py-16 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-left">Professional References</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {professionalReferences.map((ref, index) => (
                        <Card key={index} className="bg-white dark:bg-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <CardHeader>
                                <CardTitle className="text-xl font-semibold">{ref.name}</CardTitle>
                                <CardDescription>{ref.title} at {ref.company}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-col space-y-2">
                                    <Button variant="outline" className="flex items-center justify-start space-x-2">
                                        <FaPhoneAlt className="w-4 h-4"/>
                                        <span>{ref.phone}</span>
                                    </Button>
                                    <Button variant="outline" className="flex items-center justify-start space-x-2">
                                        <IoIosMail className="w-4 h-4"/>
                                        <span>{ref.email}</span>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}