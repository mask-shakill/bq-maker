"use client";
import { ChevronsDown } from "lucide-react";
import React, { useState } from "react";

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const questions = [
    {
      id: 1,
      question: "What is Doodle Content Writing Tool?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      question: "What Languages Does It Supports?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      question: "How are AI writers impacting the writing industry?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 4,
      question: "Does Doodle To Write Long Articles sdhter hsdfjsalfd ?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. laborud sdhafs thend dshfsdfs",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-8 py-44">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-navy-900">
            Frequently asked questions.
          </h2>
          <div className="relative">
            <img
              src="https://themephi.net/template/aidoodleh/aidoodle/assets/images/faq/home4_faq.png"
              alt="FAQ 3D Icon"
              className="w-64"
            />
          </div>
        </div>

        <div className="space-y-4">
          {questions.map((item) => (
            <div
              key={item.id}
              className="bg-gray-50 rounded-lg overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenQuestion(openQuestion === item.id ? null : item.id)
                }
                className="w-full p-6 text-left flex justify-between items-start"
              >
                <span className="font-semibold text-navy-900">
                  {item.question}
                </span>
                <ChevronsDown size={25} />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openQuestion === item.id ? "max-h-40 p-6 pt-0" : "max-h-0"
                }`}
              >
                <p className="text-gray-600">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
