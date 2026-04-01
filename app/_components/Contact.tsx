"use client";

import { memo, useState, useRef, FormEvent } from "react";

type ResponseMessage = {
  type: "success" | "error";
  text: string;
} | null;

function ContactComponent() {
  const [isLoading, setIsLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState<ResponseMessage>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setResponseMessage(null);

    const formElement = e.currentTarget;
    
    try {
      const formData = new FormData(formElement);
      const payload = {
        name: formData.get("name"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message"),
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setResponseMessage({
          type: "success",
          text: "Message sent! I'll get back to you soon.",
        });
        formElement.reset();
      } else {
        const error = await response.json();
        setResponseMessage({
          type: "error",
          text: error.error || "Failed to send. Please try again.",
        });
      }
    } catch (err) {
      console.error("Submit error:", err);
      setResponseMessage({
        type: "error",
        text: "Error sending message. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="px-6 py-20">
      <div className="mx-auto w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400">Contact</p>
          <h2 className="text-3xl md:text-4xl font-semibold">
            Let&apos;s build something together
          </h2>
          <p className="text-gray-300">
            Have a project in mind or want to discuss an opportunity? Share the
            details and I&apos;ll get back to you.
          </p>
          <address className="space-y-3 text-sm text-gray-300 not-italic">
            <p>
              <span className="text-gray-400">Email:</span>{" "}
              <a
                className="hover:text-blue-400 transition"
                href="mailto:lucapmluz@hotmail.com"
              >
                lucapmluz@hotmail.com
              </a>
            </p>
            <p>
              <span className="text-gray-400">LinkedIn:</span>{" "}
              <a
                className="hover:text-blue-400 transition"
                href="https://www.linkedin.com/in/lucas-luz"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/lucas-luz
              </a>
            </p>
            <p>
              <span className="text-gray-400">GitHub:</span>{" "}
              <a
                className="hover:text-blue-400 transition"
                href="https://github.com/Luz-lucas"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/Luz-lucas
              </a>
            </p>
          </address>
        </div>
        <form
          className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4"
          aria-label="Contact form"
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                autoComplete="name"
                required
                aria-required="true"
                className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                autoComplete="email"
                required
                aria-required="true"
                className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="subject" className="sr-only">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              name="subject"
              placeholder="Subject"
              required
              aria-required="true"
              className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Message"
              required
              aria-required="true"
              className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 resize-y min-h-[120px]"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full md:w-auto px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-500 transition focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Sending..." : "Send message"}
          </button>
          {responseMessage && (
            <div
              className={`p-4 rounded-lg text-sm ${
                responseMessage.type === "success"
                  ? "bg-green-500/20 text-green-300 border border-green-500/50"
                  : "bg-red-500/20 text-red-300 border border-red-500/50"
              }`}
              role="status"
            >
              {responseMessage.text}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export const Contact = memo(ContactComponent);
