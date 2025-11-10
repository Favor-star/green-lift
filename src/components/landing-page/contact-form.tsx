import { IconSend, IconLoader2 } from "@tabler/icons-react";
import { Button } from "../ui/button";
import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const ContactForm = () => {
  const [result, setResult] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  interface Web3FormsResponse {
    success: boolean;
    message?: string;
    data?: Record<string, unknown>;
  }

  const onSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    setIsLoading(true);
    setShowToast(false);

    const formElement = event.target as HTMLFormElement;
    const formData = new FormData(formElement);
    formData.append("access_key", import.meta.env.VITE_WEB3_FORMS_API_KEY);

    try {
      const response: Response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data: Web3FormsResponse = await response.json();
      const msg = data.success ? "Message sent successfully!" : "Submission failed!";
      setResult(msg);
      setShowToast(true);
      formElement.reset();
    } catch {
      setResult("Something went wrong!");
      setShowToast(true);
    } finally {
      setIsLoading(false);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  return (
    <div className="relative w-full">
      <form className="flex flex-col gap-4" onSubmit={onSubmit}>
        <input
          required
          type="text"
          name="full_name"
          placeholder="Your Name"
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          required
          type="email"
          name="email"
          placeholder="Your Email"
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <textarea
          placeholder="Your Message"
          name="message"
          className="border border-gray-300 rounded-md p-2 h-32 focus:outline-none focus:ring-2 focus:ring-green-500"
        ></textarea>
        <Button
          type="submit"
          disabled={isLoading}
          className="bg-green-500 text-white flex items-center justify-center gap-2 rounded-md p-2 hover:bg-green-600 transition-colors"
        >
          {isLoading ? (
            <IconLoader2 size={20} strokeWidth={1.5} className="animate-spin" />
          ) : (
            <>
              Send Message <IconSend strokeWidth={1.4} size={20} />
            </>
          )}
        </Button>
      </form>

      {/* Animated Toaster */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`fixed bottom-5 left-1/2 -translate-x-1/2 px-6 py-3 rounded-lg shadow-lg text-white ${
              result.includes("success") ? "bg-blue-500" : "bg-red-500"
            }`}
          >
            {result}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
