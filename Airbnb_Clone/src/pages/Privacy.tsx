import React from 'react';
import { Shield, Eye, Lock, Users, Globe, FileText } from 'lucide-react';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <Shield className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600">
            Last updated: January 15, 2025
          </p>
        </div>

        {/* Quick Navigation */}
        <div className="bg-gray-50 rounded-xl p-6 mb-12">
          <h2 className="text-lg font-semibold mb-4">Quick Navigation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="#information-collection" className="flex items-center space-x-3 text-blue-600 hover:text-blue-800 transition-colors">
              <Eye className="w-4 h-4" />
              <span>Information We Collect</span>
            </a>
            <a href="#information-use" className="flex items-center space-x-3 text-blue-600 hover:text-blue-800 transition-colors">
              <FileText className="w-4 h-4" />
              <span>How We Use Information</span>
            </a>
            <a href="#information-sharing" className="flex items-center space-x-3 text-blue-600 hover:text-blue-800 transition-colors">
              <Users className="w-4 h-4" />
              <span>Information Sharing</span>
            </a>
            <a href="#data-security" className="flex items-center space-x-3 text-blue-600 hover:text-blue-800 transition-colors">
              <Lock className="w-4 h-4" />
              <span>Data Security</span>
            </a>
            <a href="#international-transfers" className="flex items-center space-x-3 text-blue-600 hover:text-blue-800 transition-colors">
              <Globe className="w-4 h-4" />
              <span>International Transfers</span>
            </a>
            <a href="#your-rights" className="flex items-center space-x-3 text-blue-600 hover:text-blue-800 transition-colors">
              <Shield className="w-4 h-4" />
              <span>Your Rights</span>
            </a>
          </div>
        </div>

        {/* Content Sections */}
        <div className="prose prose-lg max-w-none">
          <section id="information-collection" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4">1.1 Information You Provide</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Account Information:</strong> Name, email address, phone number, profile photo, and other registration details</li>
              <li><strong>Profile Information:</strong> Biographical information, preferences, and other details you choose to share</li>
              <li><strong>Identity Verification:</strong> Government-issued ID, passport, or other verification documents</li>
              <li><strong>Payment Information:</strong> Credit card details, bank account information, and billing addresses</li>
              <li><strong>Communications:</strong> Messages, reviews, and other communications with us or other users</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-8">1.2 Information We Automatically Collect</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Usage Information:</strong> How you interact with our platform, search queries, and booking history</li>
              <li><strong>Device Information:</strong> IP address, browser type, operating system, and device identifiers</li>
              <li><strong>Location Information:</strong> Precise or approximate location when you use our services</li>
              <li><strong>Cookies and Similar Technologies:</strong> Data collected through cookies, web beacons, and similar technologies</li>
            </ul>
          </section>

          <section id="information-use" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">2. How We Use Your Information</h2>
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
              <p className="text-blue-800">
                We use your information to provide, improve, and personalize our services, ensure safety and security, and comply with legal obligations.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">2.1 Service Provision</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Enable you to access and use our platform</li>
              <li>Process transactions and send related information</li>
              <li>Provide customer service and support</li>
              <li>Facilitate communication between hosts and guests</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-8">2.2 Safety and Security</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Verify identity and prevent fraud</li>
              <li>Investigate and prevent prohibited or illegal activities</li>
              <li>Enforce our Terms of Service and other policies</li>
              <li>Protect the rights and safety of our users and third parties</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-8">2.3 Communication and Marketing</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Send service-related communications</li>
              <li>Provide personalized recommendations</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Conduct surveys and collect feedback</li>
            </ul>
          </section>

          <section id="information-sharing" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Information Sharing and Disclosure</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4">3.1 With Other Users</h3>
            <p className="text-gray-700 mb-4">
              When you use our services, certain information is shared with other users as necessary for the transaction:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Profile information visible to potential hosts or guests</li>
              <li>Booking details shared between hosts and guests</li>
              <li>Reviews and ratings you provide or receive</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-8">3.2 With Service Providers</h3>
            <p className="text-gray-700 mb-4">
              We share information with third-party service providers who help us operate our business:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Payment processors for transaction processing</li>
              <li>Background check providers for safety verification</li>
              <li>Customer service providers</li>
              <li>Analytics and marketing service providers</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-8">3.3 Legal Requirements</h3>
            <p className="text-gray-700">
              We may disclose your information if required by law, legal process, or government request, or if we believe disclosure is necessary to protect our rights, property, or safety, or that of our users or the public.
            </p>
          </section>

          <section id="data-security" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Data Security</h2>
            
            <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-6">
              <p className="text-green-800">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">4.1 Security Measures</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and audits</li>
              <li>Access controls and authentication measures</li>
              <li>Employee training on data protection</li>
              <li>Incident response procedures</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-8">4.2 Data Retention</h3>
            <p className="text-gray-700">
              We retain your personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. When we no longer need your information, we securely delete or anonymize it.
            </p>
          </section>

          <section id="international-transfers" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">5. International Data Transfers</h2>
            
            <p className="text-gray-700 mb-4">
              Airbnb operates globally, and your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws than your country.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">5.1 Safeguards</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Standard Contractual Clauses approved by the European Commission</li>
              <li>Adequacy decisions by relevant data protection authorities</li>
              <li>Other appropriate safeguards as required by applicable law</li>
            </ul>
          </section>

          <section id="your-rights" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Your Rights and Choices</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4">6.1 Access and Control</h3>
            <p className="text-gray-700 mb-4">
              You have the right to access, update, and delete your personal information. You can do this through your account settings or by contacting us.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">6.2 Data Protection Rights (EU/UK)</h3>
            <p className="text-gray-700 mb-4">
              If you are located in the European Union or United Kingdom, you have additional rights under the GDPR/UK GDPR:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Right of access:</strong> Request copies of your personal information</li>
              <li><strong>Right to rectification:</strong> Request correction of inaccurate information</li>
              <li><strong>Right to erasure:</strong> Request deletion of your personal information</li>
              <li><strong>Right to restrict processing:</strong> Request limitation of how we use your information</li>
              <li><strong>Right to data portability:</strong> Request transfer of your information to another service</li>
              <li><strong>Right to object:</strong> Object to certain types of processing</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-8">6.3 Marketing Communications</h3>
            <p className="text-gray-700">
              You can opt out of marketing communications at any time by clicking the unsubscribe link in our emails or updating your communication preferences in your account settings.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Children's Privacy</h2>
            <p className="text-gray-700">
              Our services are not intended for children under 18 years of age. We do not knowingly collect personal information from children under 18. If we become aware that we have collected personal information from a child under 18, we will take steps to delete such information.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Changes to This Privacy Policy</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Contact Us</h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> privacy@airbnb.com</p>
                <p><strong>Address:</strong> Airbnb, Inc., 888 Brannan Street, San Francisco, CA 94103, USA</p>
                <p><strong>Data Protection Officer:</strong> dpo@airbnb.com</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;