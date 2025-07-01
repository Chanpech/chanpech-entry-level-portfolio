import { HiOutlineMail } from "react-icons/hi";
import { useState, useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import ReCAPTCHA from "react-google-recaptcha";


const RECAPTCHA_SITE_KEY = import.meta.env.VITE_EMAILJS_RECAPTCHA_KEY;
const FORM_USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;
const FORM_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const FORM_TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;



export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const token = await recaptchaRef.current?.executeAsync();
    if (!token) {
      toast({
        title: "Verification failed",
        description: "Please complete the reCAPTCHA.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Inject the token into a hidden input
    const tokenInput = document.createElement("input");
    tokenInput.type = "hidden";
    tokenInput.name = "g-recaptcha-response";
    tokenInput.value = token;
    form.current?.appendChild(tokenInput);

    try {
      const result = await emailjs.sendForm(
        FORM_SERVICE_ID!,
        FORM_TEMPLATE!,
        form.current!,
        FORM_USER_ID
      );

      if (result.text === "OK") {
        toast({ title: "Message sent!", description: "I'll get back to you soon." });
        form.current?.reset();
        recaptchaRef.current?.reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Email send error:", error);
      toast({
        title: "Error",
        description: "Failed to send message.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
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

          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={RECAPTCHA_SITE_KEY || ""}
            size="invisible"
          />

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
