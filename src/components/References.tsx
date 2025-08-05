"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function References() {
  return (
    <section id="references" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-left">Professional References</h2>
        <Card className="bg-white dark:bg-gray-800 shadow-md p-6">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Access Available Upon Request</CardTitle>
            <CardDescription>
              To respect the privacy of my references, detailed contact information is not publicly listed. However, a verified list of professional references is available for hiring teams via the link below.
            </CardDescription>
          </CardHeader>
          <CardContent className="mt-4">
            <Button
              asChild
              variant="default"
              className="flex items-center space-x-2"
            >
              <a
                href="https://drive.google.com/file/d/1qOE_66A9QvxvEVVesBiWWt-v-Zd8Un6t/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>View Reference Document</span>
                <FaExternalLinkAlt className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
