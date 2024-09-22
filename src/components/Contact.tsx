import { HiOutlineMail } from "react-icons/hi";
import { useState, useRef, FormEvent } from "react";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast"

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (form.current) {
      try {
        const result = await emailjs.sendForm(
          "service_srodnrc",
          "template_caa9zne",
          form.current,
          "G2TXYAMiCovHq7uQC"
        );

        if (result.text === "OK") {
          toast({
            title: "Message sent!",
            description: "Thank you for your message. I'll get back to you soon.",
          });
          form.current.reset();
        } else {
          throw new Error("Failed to send message");
        }
      } catch (error) {
        console.error("Error sending email:", error);
        toast({
          title: "Error",
          description: "Failed to send message. Please try again later.",
          variant: "destructive",
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section id="contact">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col space-y-4"
        >
          <input
            type="text"
            name="user_name"
            className="w-full text-lg font-semibold p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            name="user_email"
            className="w-full text-lg font-semibold p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            className="w-full text-md font-semibold p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            rows={7}
            placeholder="Your Message"
            required
          ></textarea>

          <Button
            type="submit"
            className="btn btn-primary flex items-center justify-center space-x-2 p-3 bg-gray-800 dark:bg-gray-600 text-white rounded hover:bg-blue-500"
            disabled={isSubmitting}
          >
            <HiOutlineMail />
            <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
          </Button>
        </form>
      </div>
    </section>
  );
}
