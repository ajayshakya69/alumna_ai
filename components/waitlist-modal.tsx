"use client";

import type React from "react";

import { useState, useTransition } from "react";
import { X } from "lucide-react";
import { toast } from "react-toastify";
import { supabase } from "@/lib/supabase";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isloading, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    startTransition(async () => {
      try {
        const { data, error } = await supabase
          .from("get_in_touch_user")
          .insert([formData]);
        toast.success("Thanks for reaching out! Your message was saved.");
      } catch (error: any) {
        console.error("Error saving to Supabase:", error.message);
        toast.error("Something went wrong. Please try again.");
      } finally {
        setFormData({ name: "", email: "" });
        setIsSubmitted(true);
      }
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-[#0a0a0a] border border-[#946DF0]/30 rounded-xl p-8 w-full max-w-md mx-4 animate-modal-in">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-[#946DF0] mb-2">
            Join Our Waitlist
          </h2>
          <p className="text-white/70">
            Be the first to experience Alumna.ai when we launch.
          </p>
        </div>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-white/80 mb-2 text-sm"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8C67E2] text-white"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-white/80 mb-2 text-sm"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8C67E2] text-white"
                placeholder="your.email@example.com"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-[#8C67E2] text-white rounded-md hover:bg-[#7d5ad3] transition-colors mt-4"
              disabled={isloading}
            >
              Join Waitlist
            </button>
          </form>
        ) : (
          <div className="text-center py-8 animate-fade-in">
            <div className="w-16 h-16 bg-[#8C67E2]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-[#8C67E2]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Thank You!
            </h3>
            <p className="text-white/70">
              You've been added to our waitlist. We'll notify you when Alumna.ai
              launches.
            </p>
            <button
              onClick={onClose}
              className="mt-6 px-6 py-2 border border-[#946DF0] text-[#946DF0] rounded-md hover:bg-[#946DF0]/10 transition-colors"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
