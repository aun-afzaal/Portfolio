import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { fadeIn } from "../variants";
import { useState } from "react";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setStatus("");

    const form = event.target;
    const fd = new FormData(form);

    const payload = {
      fname: fd.get("fname") || "",
      lname: fd.get("lname") || "",
      email: fd.get("email") || "",
      service: fd.get("service") || "",
      message: fd.get("message") || "",
      timestamp: Date.now(),
    };

    const MAILER_URL = "http://localhost:3000/api/contact";
    const SECRET = "Test";

    try {
      const encoder = new TextEncoder();
      const data = encoder.encode(JSON.stringify(payload) + SECRET);

      const hashBuffer = await crypto.subtle.digest("SHA-256", data);

      const signature = Array.from(new Uint8Array(hashBuffer))
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");

      const res = await fetch(MAILER_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-signature": signature,
        },
        body: JSON.stringify(payload),
      });

      const dataRes = await res.json();

      if (res.ok && dataRes.success) {
        form.reset();
        setStatus("✓ Message sent! We'll be in touch within 24 hours.");
      } else {
        throw new Error(dataRes.error || "Failed to send message");
      }
    } catch (err) {
      setStatus(err.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="">
      <div className="container mx-auto lg:pt-20 flex items-center justify-center h-full">
        <div className="w-full max-w-[700px]">
        <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="h2 text-center"
          >
            Contact <span className="text-accent">Form.</span>
          </motion.h2>
          <motion.form
            onSubmit={handleSubmit}
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="flex flex-col gap-6"
          >
            {/* ROW: First + Last Name */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="form-group w-full">
                <label>First Name</label>
                <input
                  type="text"
                  name="fname"
                  placeholder="John"
                  className="input"
                  required
                  disabled={isLoading}
                />
              </div>

              <div className="form-group w-full">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lname"
                  placeholder="Doe"
                  className="input"
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* EMAIL */}
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="john@company.com"
                className="input"
                required
                disabled={isLoading}
              />
            </div>

            {/* SERVICE */}
            <div className="form-group">
              <label className="text-white">Service Needed</label>

              <select name="service" className="input" disabled={isLoading}>
                <option value="">
                  Select a service...
                </option>
                <option>Web Development</option>
                <option>Mobile App</option>
                <option>Cloud & DevOps</option>
                <option>AI & Automation</option>
                <option>UI/UX Design</option>
                <option>Other</option>
              </select>
            </div>

            {/* MESSAGE */}
            <div className="form-group">
              <label>Tell Us About Your Project</label>
              <textarea
                name="message"
                rows="5"
                placeholder="Describe your project, goals, and timeline..."
                className="textarea"
                required
                disabled={isLoading}
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={isLoading}
              className="btn rounded-full w-full border border-white/50 max-w-[200px] px-8 flex items-center justify-center group hover:border-accent transition relative"
            >
              {/* default text */}
              <span className="transition-transform duration-500 group-hover:-translate-y-10">
                {isLoading ? "Sending..." : "Send Message"}
              </span>

              {/* hover text */}
              <span className="absolute translate-y-10 group-hover:translate-y-0 transition-transform duration-500 text-accent">
                <BsArrowRight className="ml-2" />
              </span>
            </button>

            {/* STATUS */}
            {status && <p className="text-sm text-white/70 mt-2">{status}</p>}
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
