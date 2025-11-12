"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Check, ArrowRight, Send, Lightbulb, Users, Award, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  currentSituation: z.string().min(20, "Please provide more details (at least 20 characters)"),
  bestTime: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export function Application() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log("Form submitted:", data);
    setIsSuccess(true);
    setIsSubmitting(false);
    reset();
    
    // Hide success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section id="application" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F7FAFC]">
      <div className="max-w-[1000px] mx-auto">
        {/* SECTION HEADER */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl sm:text-4xl font-bold text-[#1A202C] mb-4"
          >
            Ready to Start Earning?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="text-lg text-[#718096]"
          >
            Apply now, and we’ll review your fit for the program before reaching out.
          </motion.p>
        </div>

        {/* TWO-COLUMN LAYOUT */}
        <div className="grid lg:grid-cols-[50%_50%] gap-8 lg:gap-12 items-start">
          {/* LEFT COLUMN - WHY APPLY */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-semibold text-[#1A202C] mb-6">
              Why Muslim Settify?
            </h3>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Check className="w-6 h-6 text-[#00D4AA]" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#1A202C] mb-1">
                    Complete Training System
                  </h4>
                  <p className="text-base text-[#718096] leading-relaxed">
                    Learn everything from scratch with our 8-week program—no prior experience needed.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Check className="w-6 h-6 text-[#00D4AA]" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#1A202C] mb-1">
                    Career Support & Guidance
                  </h4>
                  <p className="text-base text-[#718096] leading-relaxed">
                    We don't just teach—we help you land clients with resume reviews, outreach scripts, and interview prep.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Check className="w-6 h-6 text-[#00D4AA]" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#1A202C] mb-1">
                    Values-First Standards
                  </h4>
                  <p className="text-base text-[#718096] leading-relaxed">
                    Built on Islamic business ethics. Work with legitimate businesses while staying true to clear principles.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Check className="w-6 h-6 text-[#00D4AA]" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#1A202C] mb-1">
                    Proven Track Record
                  </h4>
                  <p className="text-base text-[#718096] leading-relaxed">
                    Join 100+ students already building steady income as remote appointment setters.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Check className="w-6 h-6 text-[#00D4AA]" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#1A202C] mb-1">
                    Community & Mentorship
                  </h4>
                  <p className="text-base text-[#718096] leading-relaxed">
                    Private community, weekly coaching, and 1-on-1 mentorship throughout your journey.
                  </p>
                </div>
              </div>
            </div>

            {/* VALUE STATEMENT CALLOUT */}
            <div className="mt-8 bg-white border border-[#E2E8F0] rounded-lg p-5">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-[#0066FF] flex-shrink-0 mt-0.5" />
                <p className="text-base text-[#1A202C] leading-relaxed">
                  Build a high-income skill in 8 weeks instead of spending $40,000+ and 4 years on a traditional degree.
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN - APPLICATION FORM */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <div className="bg-white rounded-xl p-8 sm:p-10 shadow-[0_4px_16px_rgba(0,0,0,0.08)] border-2 border-[#0066FF]">
              {/* SUCCESS MESSAGE */}
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-[#00D4AA]/10 border border-[#00D4AA] rounded-lg flex items-center gap-3"
                >
                  <Check className="w-5 h-5 text-[#00D4AA] flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#00D4AA]">Application Submitted!</p>
                    <p className="text-sm text-[#718096]">
                      We'll contact you within 24 hours.
                    </p>
                  </div>
                </motion.div>
              )}

              <h3 className="text-2xl font-bold text-[#1A202C] mb-2">
                Submit Your Application
              </h3>
              <p className="text-sm text-[#718096] mb-8">
                We'll review your application and contact you within 24 hours
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-[#1A202C] mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    {...register("fullName")}
                    placeholder="Your full name"
                    className={`w-full px-4 py-3.5 border rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-[#0066FF] transition-all ${
                      errors.fullName
                        ? "border-red-500"
                        : "border-[#E2E8F0]"
                    }`}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-red-500">{errors.fullName.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#1A202C] mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="your@email.com"
                    className={`w-full px-4 py-3.5 border rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-[#0066FF] transition-all ${
                      errors.email ? "border-red-500" : "border-[#E2E8F0]"
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>

                {/* Phone / WhatsApp */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#1A202C] mb-2">
                    Phone / WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    {...register("phone")}
                    placeholder="Your phone or WhatsApp number"
                    className={`w-full px-4 py-3.5 border rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-[#0066FF] transition-all ${
                      errors.phone ? "border-red-500" : "border-[#E2E8F0]"
                    }`}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
                  )}
                </div>

                {/* Current Situation */}
                <div>
                  <label htmlFor="currentSituation" className="block text-sm font-medium text-[#1A202C] mb-2">
                    Current Situation <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="currentSituation"
                    {...register("currentSituation")}
                    rows={4}
                    placeholder="Tell us briefly: Are you currently employed? Why are you interested in appointment setting?"
                    className={`w-full px-4 py-3.5 border rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-[#0066FF] transition-all resize-none ${
                      errors.currentSituation
                        ? "border-red-500"
                        : "border-[#E2E8F0]"
                    }`}
                  />
                  {errors.currentSituation && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.currentSituation.message}
                    </p>
                  )}
                </div>

                {/* Best Time for Call (Optional) */}
                <div>
                  <label htmlFor="bestTime" className="block text-sm font-medium text-[#1A202C] mb-2">
                    Best Time for Call <span className="text-sm font-normal text-[#718096]">(Optional)</span>
                  </label>
                  <input
                    id="bestTime"
                    type="text"
                    {...register("bestTime")}
                    placeholder="e.g., Weekday mornings, Weekend afternoons"
                    className="w-full px-4 py-3.5 border border-[#E2E8F0] rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-[#0066FF] transition-all"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#0066FF] hover:bg-[#0052CC] text-white font-bold text-base sm:text-lg py-4 rounded-lg shadow-[0_4px_12px_rgba(0,102,255,0.3)] hover:shadow-[0_6px_16px_rgba(0,102,255,0.4)] hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      Submit Application
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>

                {/* Trust Text */}
                <p className="text-center text-sm text-[#718096] flex items-center justify-center gap-2">
                  <Check className="w-4 h-4 text-[#00D4AA]" />
                  No debit card required at this stage
                </p>
              </form>

              {/* TRUST BADGES */}
              <div className="mt-8 pt-8 border-t border-[#E2E8F0] flex flex-wrap justify-center gap-6 text-sm text-[#718096]">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>100+ Students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  <span>Career support & guidance</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>We’ll contact you within 24 hours</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

