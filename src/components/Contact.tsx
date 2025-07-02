import { HiOutlineMail } from "react-icons/hi";
import { useState, useRef, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";

const RECAPTCHA_SITE_KEY = import.meta.env.VITE_EMAILJS_RECAPTCHA_KEY;

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
      recaptchaRef.current?.reset();
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData(form.current!);
    const payload = {
      token,
      user_name: formData.get("user_name"),
      user_email: formData.get("user_email"),
      message: formData.get("message"),
    };

    try {
      const res = await axios.post("/api/send-email", payload);

      if (res.status === 200) {
        toast({ title: "Message sent!", description: "I'll get back to you soon." });
        form.current?.reset();
      } else {
        toast({
          title: "Error",
          description: res.data?.error || "Failed to send message.",
          variant: "destructive",
        });
      }
    } catch (err: any) {
      console.error("Email send error:", err);
      toast({
        title: "Error",
        description: err.response?.data?.error || "Something went wrong.",
        variant: "destructive",
      });
    } finally {
      recaptchaRef.current?.reset();
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4">
          <input
            type="text"
            name="user_name"
            className="w-full text-lg font-semibold p-3 border rounded"
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            name="user_email"
            className="w-full text-lg font-semibold p-3 border rounded"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            className="w-full text-md font-semibold p-3 border rounded"
            rows={7}
            placeholder="Your Message"
            required
          ></textarea>

          <ReCAPTCHA ref={recaptchaRef} sitekey={RECAPTCHA_SITE_KEY} size="invisible" />

          <Button
            type="submit"
            className="btn btn-primary flex items-center justify-center space-x-2 p-3 bg-gray-800 text-white rounded hover:bg-blue-500"
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
