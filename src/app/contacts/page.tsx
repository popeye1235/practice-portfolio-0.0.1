"use client"
import GradientBackground from "../components/GradientBackground";
import { useState } from "react";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget; // Ensure this is correctly set
    if (!form) return; // Safety check

    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xvgodend", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset(); // Reset the form
        setTimeout(() => setIsSubmitted(false), 3000); // Hide the message after 3 seconds
      } else {
        alert("Failed to submit the form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <GradientBackground>
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold text-gray-700 dark:text-white">Contact Me</h1>
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div>
            <label className="block text-gray-700 dark:text-gray-300" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full border p-2 rounded-lg text-gray-700 dark:text-white bg-gray-100 dark:bg-gray-700"
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full border p-2 rounded-lg text-gray-700 dark:text-white bg-gray-100 dark:bg-gray-700"
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300" htmlFor="contact">
              Contact No
            </label>
            <input
              type="text"
              name="contact"
              id="contact"
              required
              className="w-full border p-2 rounded-lg text-gray-700 dark:text-white bg-gray-100 dark:bg-gray-700"
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={5}
              required
              className="w-full border p-2 rounded-lg text-gray-700 dark:text-white bg-gray-100 dark:bg-gray-700"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 border-2 border-yellow-400 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
        {isSubmitted && (
          <div className="mt-6 flex justify-center items-center space-x-2 bg-green-100 dark:bg-green-700 text-green-700 dark:text-green-100 p-4 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <p>Enquiry Submitted Successfully</p>
          </div>
        )}
      </div>
    </GradientBackground>
  );
};

export default Contact;
