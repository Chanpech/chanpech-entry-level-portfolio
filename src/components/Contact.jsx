import { HiOutlineMail } from "react-icons/hi";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_srodnrc",
      "template_caa9zne",
      form.current,
      "G2TXYAMiCovHq7uQC"
    );

    e.target.reset();
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
            className="w-full text-lg font-semibold p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            className="w-full text-lg font-semibold p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            placeholder="Your Email"
            required
          />
          <textarea
            className="w-full text-md font-semibold p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>

          <Button
            type="submit"
            className="btn btn-primary flex items-center justify-center space-x-2 p-3 bg-gray-800 dark:bg-gray-600 text-white rounded hover:bg-blue-500"
          >
            <HiOutlineMail />
            <span>Send Message</span>
          </Button>
        </form>
      </div>
    </section>
  );
}
