import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">Privacy Policy</h1>
          <p className="text-gray-600 mt-2">Last Updated: September 14, 2025</p>
          <Link 
            to="/" 
            className="mt-4 inline-flex items-center text-[#7D1C4A] hover:text-[#670D2F] font-medium"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-md p-10 border border-gray-100 leading-relaxed">
          <p className="text-gray-700 mb-6">
            Interview Prep AI respects your privacy. This policy explains how we handle your information.
          </p>

          {/* Sections */}
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4 border-l-4 border-[#7D1C4A] pl-3">
            1. What Information We Collect
          </h2>
          <div className="mb-6">
            <p className="text-gray-700 font-medium mb-2">Personal Information:</p>
            <ul className="list-disc pl-6 space-y-0.5 text-gray-700">
              <li>Name and email address</li>
              <li>Account password (encrypted)</li>
            </ul>
            
            <p className="text-gray-700 font-medium mt-4 mb-2">Job-Related Data:</p>
            <ul className="list-disc pl-6 space-y-0.5 text-gray-700">
              <li>Job descriptions you submit</li>
              <li>Generated interview questions</li>
              <li>Your usage history</li>
            </ul>
            
            <p className="text-gray-700 font-medium mt-4 mb-2">Technical Data:</p>
            <ul className="list-disc pl-6 space-y-0.5 text-gray-700">
              <li>IP address and browser information</li>
              <li>How you use our website</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4 border-l-4 border-[#7D1C4A] pl-3">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 space-y-0.5 text-gray-700">
            <li>Generate interview questions using Google's Gemini AI</li>
            <li>Manage your account and subscription</li>
            <li>Improve our service</li>
            <li>Send important updates (not marketing emails unless you agree)</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4 border-l-4 border-[#7D1C4A] pl-3">
            3. Information Sharing
          </h2>
          <div className="mb-6">
            <p className="text-gray-700 font-medium mb-2">We share data with:</p>
            <ul className="list-disc pl-6 space-y-0.5 text-gray-700">
              <li><strong>Google (Gemini AI):</strong> Job descriptions to generate questions</li>
              <li><strong>Payment processors:</strong> For subscription billing</li>
              <li><strong>Hosting services:</strong> To run our website</li>
            </ul>
            
            <p className="text-gray-700 font-medium mt-4 mb-2">We never:</p>
            <ul className="list-disc pl-6 space-y-0.5 text-gray-700">
              <li>Sell your personal information</li>
              <li>Share your data for advertising</li>
              <li>Give away your job descriptions to other users</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4 border-l-4 border-[#7D1C4A] pl-3">
            4. Data Security
          </h2>
          <ul className="list-disc pl-6 space-y-0.5 text-gray-700">
            <li>Your data is encrypted and stored securely</li>
            <li>We use industry-standard security practices</li>
            <li>Limited employee access to your information</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4 border-l-4 border-[#7D1C4A] pl-3">
            5. Your Rights
          </h2>
          <div className="mb-6">
            <p className="text-gray-700 mb-2">You can:</p>
            <ul className="list-disc pl-6 space-y-0.5 text-gray-700">
              <li>Access your personal data</li>
              <li>Delete your account and data</li>
              <li>Update your information</li>
              <li>Opt out of non-essential emails</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4 border-l-4 border-[#7D1C4A] pl-3">
            6. Data Retention
          </h2>
          <ul className="list-disc pl-6 space-y-0.5 text-gray-700">
            <li><strong>Active accounts:</strong> Data kept while you use our service</li>
            <li><strong>Deleted accounts:</strong> Data removed within 30 days</li>
            <li>Some anonymized usage data may be kept to improve our service</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4 border-l-4 border-[#7D1C4A] pl-3">
            7. Third-Party Services
          </h2>
          <p className="text-gray-700 mb-6">
            We use Google's Gemini AI to generate questions. Google has their own privacy policy for how they handle data sent to their API.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4 border-l-4 border-[#7D1C4A] pl-3">
            8. Children's Privacy
          </h2>
          <p className="text-gray-700 mb-6">
            Our service is not for users under 16. We don't knowingly collect data from children.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4 border-l-4 border-[#7D1C4A] pl-3">
            9. International Users
          </h2>
          <p className="text-gray-700 mb-6">
            Your data may be processed in the US where our servers are located.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4 border-l-4 border-[#7D1C4A] pl-3">
            10. Changes to This Policy
          </h2>
          <p className="text-gray-700 mb-6">
            We'll notify you if we make significant changes to this privacy policy.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4 border-l-4 border-[#7D1C4A] pl-3">
            11. Contact Us
          </h2>
          <p className="text-gray-700 mb-6">
            Questions about privacy? Email us at:{" "}
            <a href="mailto:privacy@interviewprepai.com" className="text-[#7D1C4A] hover:underline font-medium">
              privacy@interviewprepai.com
            </a>
          </p>

          <div className="border-t border-gray-200 pt-6 mt-8">
            <p className="text-gray-600 italic text-sm text-center">
              We keep it simple: we only collect what we need to generate your interview questions and manage your account.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;