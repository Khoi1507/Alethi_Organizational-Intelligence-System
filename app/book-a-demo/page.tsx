"use client";

import { useState } from "react";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { Button } from "@/components/ui/button";
import { submitDemoRequest } from "./actions";

type FormStatus = "idle" | "loading" | "success" | "error";

const fields = [
  { name: "name", label: "Name", type: "text", placeholder: "Your full name" },
  {
    name: "email",
    label: "Work email",
    type: "email",
    placeholder: "you@company.com",
  },
  {
    name: "company",
    label: "Company",
    type: "text",
    placeholder: "Your company name",
  },
  { name: "role", label: "Role", type: "text", placeholder: "Your role or title" },
] as const;

const textareas = [
  {
    name: "workflow",
    label: "What workflow or decision is hard right now?",
    placeholder: "Describe the situation in a few sentences…",
  },
  {
    name: "tools",
    label: "What tools does your team currently use?",
    placeholder: "List the main tools your team relies on…",
  },
] as const;

export default function BookADemoPage() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    const formData = new FormData(e.currentTarget);

    try {
      await submitDemoRequest(formData);
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
    }
  }

  const inputClass =
    "w-full h-12 px-4 rounded-xl text-[#F5F8FC] placeholder:text-[#9FB0C8] text-sm focus:outline-none focus:ring-2 transition-colors duration-150";
  const inputStyle = {
    background: "#14243C",
    border: "1px solid #22385A",
  };

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-32 px-6">
        <div className="max-w-xl mx-auto">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#6EE7F2] mb-4">
            Book a Demo
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#F5F8FC] mb-5 leading-tight">
            Show us one hard workflow or one difficult recurring decision
          </h1>
          <p className="text-lg text-[#D6E0EE] leading-relaxed mb-12">
            We&apos;ll show you how Alethi can help you understand it more
            clearly, compare better options, and turn that into a stronger way
            of operating.
          </p>

          {status === "success" ? (
            <div
              className="rounded-2xl p-10 text-center border"
              style={{
                background: "rgba(65, 211, 155, 0.06)",
                borderColor: "rgba(65, 211, 155, 0.25)",
              }}
            >
              <p className="text-xl font-semibold text-[#F5F8FC] mb-3">
                Thanks.
              </p>
              <p className="text-[#D6E0EE] leading-relaxed">
                We&apos;ll reach out to learn more about your workflow and show
                how Alethi could help.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {fields.map((field) => (
                <div key={field.name}>
                  <label
                    htmlFor={field.name}
                    className="block text-sm font-medium text-[#D6E0EE] mb-2"
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    required
                    className={inputClass}
                    style={inputStyle}
                    onFocus={(e) =>
                      (e.currentTarget.style.boxShadow =
                        "0 0 0 2px rgba(110,231,242,0.35)")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.boxShadow = "none")
                    }
                  />
                </div>
              ))}

              {textareas.map((field) => (
                <div key={field.name}>
                  <label
                    htmlFor={field.name}
                    className="block text-sm font-medium text-[#D6E0EE] mb-2"
                  >
                    {field.label}
                  </label>
                  <textarea
                    id={field.name}
                    name={field.name}
                    placeholder={field.placeholder}
                    required
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl text-[#F5F8FC] placeholder:text-[#9FB0C8] text-sm focus:outline-none transition-colors duration-150 resize-none"
                    style={inputStyle}
                    onFocus={(e) =>
                      (e.currentTarget.style.boxShadow =
                        "0 0 0 2px rgba(110,231,242,0.35)")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.boxShadow = "none")
                    }
                  />
                </div>
              ))}

              {status === "error" && (
                <p className="text-sm" style={{ color: "#FFB86B" }}>
                  {errorMsg} If this continues, email us directly at{" "}
                  <a
                    href="mailto:hello@alethi.ai"
                    className="underline underline-offset-2"
                  >
                    hello@alethi.ai
                  </a>
                </p>
              )}

              <Button
                type="submit"
                size="lg"
                disabled={status === "loading"}
                className="w-full justify-center mt-2"
              >
                {status === "loading" ? "Sending…" : "Book my demo"}
              </Button>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
