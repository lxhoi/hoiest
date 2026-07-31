'use client';

import { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

interface Props {
  title: string;
  faqs: FAQ[];
}

export default function TutorialFAQ({ title, faqs }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!faqs || faqs.length === 0) return null;

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full mt-24">
      <h2 className="text-2xl font-bold mb-8 uppercase text-center">{title}</h2>
      <div className="max-w-4xl mx-auto border-t border-black">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-black">
            <button
              onClick={() => toggleOpen(index)}
              className="w-full py-5 px-4 flex items-center justify-start gap-4 hover:bg-gray-50 transition-colors text-left"
            >
              <span className="text-xl font-mono leading-none text-red-600">{openIndex === index ? '-' : '+'}</span>
              <span className="text-[13px] md:text-[15px] font-bold uppercase tracking-wider">{faq.question}</span>
            </button>
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <div className="p-4 pt-0 pl-12 text-gray-600 text-sm md:text-base leading-relaxed">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
