"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    id: 1,
    question: "What makes Muslim Settify different from free YouTube training?",
    answer:
      "Two things: our exclusive job board and active community. We post up to 20 high-quality appointment setting jobs daily that you won't find anywhere else. Plus, our private community of 200+ students provides 24/7 support, weekly coaching calls, and networking opportunities. You're not just learning alone from videos—you're joining a thriving ecosystem that actively helps you land clients and succeed.",
  },
  {
    id: 2,
    question: "Can I work from any country? Is this good for hijrah?",
    answer:
      "Absolutely. This is perfect for those making hijrah to Madinah, UAE, Turkey, or other Islamic countries. All you need is an internet connection. Many of our students work remotely while living in Islamic countries, earning $3k-$15k monthly from anywhere in the world. It's location-independent income that supports your religious journey.",
  },
  {
    id: 3,
    question: "Do I need prior sales experience?",
    answer:
      "No. The program is designed for complete beginners and includes comprehensive training on all aspects of appointment setting, from initial outreach to advanced closing techniques. Many of our most successful students had zero sales experience before joining.",
  },
  {
    id: 4,
    question: "Is this income halal and permissible in Islam?",
    answer:
      "Yes. The program includes a dedicated module on Islamic business ethics and ensuring all transactions align with Shariah principles. We work exclusively with businesses offering legitimate products and services, and avoid any haram industries. You'll learn to sell with integrity while maintaining 100% halal income.",
  },
  {
    id: 5,
    question: "How much time do I need to dedicate weekly?",
    answer:
      "During the 8-week training, expect 10-15 hours per week including live sessions, practice, and assignments. Once working, most setters dedicate 20-30 hours per week, though this is flexible based on your income goals and availability.",
  },
  {
    id: 6,
    question: "What if my English isn't perfect?",
    answer:
      "Clear communication is important, but native-level fluency is not required. We provide comprehensive scripts and templates, and many successful setters are non-native English speakers. Minor accent or grammar issues rarely affect results.",
  },
  {
    id: 7,
    question: "Can I do this while working full-time?",
    answer:
      "Absolutely. Many students complete the training while employed full-time. Live sessions are recorded for flexibility, and the remote nature of appointment setting allows you to work around your existing schedule.",
  },
  {
    id: 8,
    question: "How long until I start earning?",
    answer:
      "Most students land their first client within 4-8 weeks of completing the program. Initial earnings vary, but the average student reaches $3k-5k monthly within their first 3 months, with many scaling beyond $10k as they gain experience.",
  },
  {
    id: 9,
    question: "Do you help me find clients?",
    answer:
      "Yes. The program includes comprehensive job placement support including resume review, client outreach templates, interview preparation, and access to our exclusive job board featuring businesses actively seeking setters.",
  },
  {
    id: 10,
    question: "What's the refund policy?",
    answer:
      "We offer a 30-day money-back guarantee. If you complete the first two weeks of training and feel the program isn't right for you, request a full refund—no questions asked.",
  },
  {
    id: 11,
    question: "Is this suitable for women/sisters?",
    answer:
      "Absolutely. Approximately 35% of our students are women. The remote nature of this work makes it particularly suitable for those who prefer working from home, including mothers balancing family responsibilities.",
  },
  {
    id: 12,
    question: "What kind of support do I get after completing the program?",
    answer:
      "You'll receive lifetime access to all course materials, ongoing community support through our private community, monthly alumni Q&A sessions, and continued access to our exclusive job board with up to 20 new jobs posted daily. You're never left on your own.",
  },
];

export function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[900px] mx-auto">
        {/* SECTION HEADER */}
        <div className="text-center mb-8 md:mb-12">
          <motion.h2
            initial={{ opacity: 1, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl sm:text-4xl font-bold text-[#1A202C] mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 1, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="text-lg text-[#718096]"
          >
            Everything you need to know about the program
          </motion.p>
        </div>

        {/* ACCORDION */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 1 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="space-y-0"
        >
          {faqs.map((faq) => {
            const isOpen = openItems.includes(faq.id);
            return (
              <motion.div
                key={faq.id}
                variants={{
                  hidden: { opacity: 1, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      ease: "easeOut",
                    },
                  },
                }}
                className="border-b border-[#E2E8F0]"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full flex items-center justify-between p-6 hover:bg-[#F7FAFC] transition-colors duration-200 text-left group"
                >
                  <h3 className="text-lg font-semibold text-[#1A202C] pr-8">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-6 h-6 text-[#718096] flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0 max-w-[800px]">
                        <p className="text-base text-[#718096] leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* BOTTOM CTA */}
        <motion.div
          initial={{ opacity: 1, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-[#1A202C] font-medium mb-6">
            Still have questions?
          </p>
          <a
            href="https://form.typeform.com/to/ztBUiWgs?typeform-source=becomeasetter.info"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="border-2 border-[#0066FF] text-[#0066FF] font-bold px-8 py-3 hover:bg-[#0066FF] hover:text-white transition-all duration-200"
            >
              Contact Us
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

