"use client";
import { useState, FormEvent } from "react";
import AssignmentHero from "../../../components/layout/AssignmentHero";
import PdfViewer from "../../../components/media/PdfViewer";

export default function Page() {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    setSuccess(false);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Something went wrong");
      }

      setSuccess(true);
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setSuccess(false), 5000);
    } catch (err: any) {
      setError(err.message || "Failed to send message");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main>
      <AssignmentHero
        title="Get in Touch"
        subtitle="Contact"
        description="For questions, collaboration, or professional opportunities."
      />

      <section className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left: Contact Card & Form */}
          <div className="space-y-8">
            {/* Contact Card */}
            <div className="glass rounded-2xl p-6">
              <h2 className="text-lg font-semibold text-white">Contact Information</h2>
              <div className="mt-4 space-y-3 text-sm text-slate-300">
                <div className="flex items-center gap-3">
                  <span className="text-cyan-200">Email:</span>
                  <a href="mailto:yourname@email.com" className="hover:text-cyan-200">
                    yourname@email.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-cyan-200">LinkedIn:</span>
                  <a
                    href="https://linkedin.com/in/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-200"
                  >
                    linkedin.com/in/yourprofile
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-cyan-200">Location:</span>
                  <span>Amsterdam, NL</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-cyan-200">Time Zone:</span>
                  <span>CET (GMT+1)</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass rounded-2xl p-6">
              <h2 className="text-lg font-semibold text-white">Send a Message</h2>
              <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-slate-400 focus:border-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-slate-400 focus:border-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-slate-400 focus:border-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-lg border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 font-medium text-cyan-200 transition-colors hover:bg-cyan-500/20 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {submitting ? "Sending..." : "Send Message"}
                </button>
                {success && (
                  <p className="text-center text-sm text-green-300">
                    Message sent! I'll get back to you soon.
                  </p>
                )}
                {error && (
                  <p className="text-center text-sm text-red-300">
                    {error}
                  </p>
                )}
              </form>
            </div>
          </div>

          {/* Right: CV Preview */}
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-white">Curriculum Vitae</h2>
            <PdfViewer file="/pdf/cv.pdf" title="Curriculum Vitae" height={700} />
          </div>
        </div>
      </section>
    </main>
  );
}
