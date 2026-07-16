import React from 'react';
import { FileText, Scale, AlertTriangle, Users, CreditCard, Home } from 'lucide-react';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <Scale className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-lg text-gray-600">
            Last updated: January 15, 2025
          </p>
        </div>

        {/* Quick Navigation */}
        <div className="bg-gray-50 rounded-xl p-6 mb-12">
          <h2 className="text-lg font-semibold mb-4">Quick Navigation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="#acceptance" className="flex items-center space-x-3 text-blue-600 hover:text-blue-800 transition-colors">
              <FileText className="w-4 h-4" />
              <span>Acceptance of Terms</span>
            </a>
            <a href="#platform-rules" className="flex items-center space-x-3 text-blue-600 hover:text-blue-800 transition-colors">
              <AlertTriangle className="w-4 h-4" />
              <span>Platform Rules</span>
            </a>
            <a href="#user-accounts" className="flex items-center space-x-3 text-blue-600 hover:text-blue-800 transition-colors">
              <Users className="w-4 h-4" />
              <span>User Accounts</span>
            </a>
            <a href="#payments" className="flex items-center space-x-3 text-blue-600 hover:text-blue-800 transition-colors">
              <CreditCard className="w-4 h-4" />
              <span>Payments & Fees</span>
            </a>
            <a href="#host-terms" className="flex items-center space-x-3 text-blue-600 hover:text-blue-800 transition-colors">
              <Home className="w-4 h-4" />
              <span>Host Terms</span>
            </a>
            <a href="#liability" className="flex items-center space-x-3 text-blue-600 hover:text-blue-800 transition-colors">
              <Scale className="w-4 h-4" />
              <span>Liability & Disputes</span>
            </a>
          </div>
        </div>

        {/* Content Sections */}
        <div className="prose prose-lg max-w-none">
          <section id="acceptance" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Acceptance of Terms</h2>
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
              <p className="text-blue-800">
                By accessing or using Airbnb's platform, you agree to be bound by these Terms of Service and all applicable laws and regulations.
              </p>
            </div>

            <p className="text-gray-700 mb-4">
              These Terms of Service ("Terms") constitute a legally binding agreement between you and Airbnb, Inc. ("Airbnb," "we," "us," or "our") governing your access to and use of the Airbnb platform, including our website, mobile applications, and other online services (collectively, the "Airbnb Platform").
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">1.1 Agreement to Terms</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>You must read, agree with, and accept all terms and conditions contained in these Terms</li>
              <li>If you do not agree to these Terms, you may not access or use the Airbnb Platform</li>
              <li>These Terms apply to all visitors, users, and others who access or use the Service</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-8">1.2 Eligibility</h3>
            <p className="text-gray-700">
              You must be at least 18 years old to use the Airbnb Platform. By using the Airbnb Platform, you represent and warrant that you have the legal capacity to enter into a binding agreement.
            </p>
          </section>

          <section id="platform-rules" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Platform Rules and Conduct</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4">2.1 Prohibited Activities</h3>
            <p className="text-gray-700 mb-4">
              You agree not to engage in any of the following prohibited activities:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Violate any local, state, national, or international law or regulation</li>
              <li>Infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
              <li>Harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
              <li>Submit false or misleading information</li>
              <li>Upload viruses or other malicious code</li>
              <li>Spam, solicit, or contact users for commercial purposes</li>
              <li>Interfere with or circumvent the security features of the Airbnb Platform</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-8">2.2 Content Standards</h3>
            <p className="text-gray-700 mb-4">
              All content you submit must:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Be accurate and not misleading</li>
              <li>Not contain offensive, inappropriate, or objectionable content</li>
              <li>Not violate any third-party rights</li>
              <li>Comply with applicable laws and regulations</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-8">2.3 Enforcement</h3>
            <p className="text-gray-700">
              We reserve the right to investigate and take appropriate action against users who violate these Terms, including warning, suspension, or termination of accounts, and reporting to law enforcement authorities.
            </p>
          </section>

          <section id="user-accounts" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">3. User Accounts</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4">3.1 Account Creation</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>You must provide accurate and complete information when creating an account</li>
              <li>You are responsible for maintaining the confidentiality of your account credentials</li>
              <li>You must notify us immediately of any unauthorized use of your account</li>
              <li>You may not transfer your account to another person</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-8">3.2 Account Verification</h3>
            <p className="text-gray-700 mb-4">
              We may require you to verify your identity by providing:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Government-issued photo identification</li>
              <li>Phone number verification</li>
              <li>Email address verification</li>
              <li>Additional documentation as required</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-8">3.3 Account Suspension and Termination</h3>
            <p className="text-gray-700">
              We may suspend or terminate your account at any time for any reason, including violation of these Terms, fraudulent activity, or other conduct that we determine to be harmful to our platform or other users.
            </p>
          </section>

          <section id="payments" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Payments and Fees</h2>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
              <p className="text-yellow-800">
                All payments are processed securely through our payment partners. Airbnb does not store your payment information.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">4.1 Guest Payments</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Payment is due at the time of booking confirmation</li>
              <li>Total price includes accommodation fees, cleaning fees, and applicable taxes</li>
              <li>Airbnb service fees are added to the total cost</li>
              <li>Currency conversion fees may apply for international transactions</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-8">4.2 Host Payouts</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Hosts receive payment approximately 24 hours after guest check-in</li>
              <li>Airbnb deducts service fees from host payouts</li>
              <li>Hosts are responsible for applicable taxes on their earnings</li>
              <li>Payout methods vary by country and may include bank transfer, PayPal, or other options</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-8">4.3 Cancellations and Refunds</h3>
            <p className="text-gray-700">
              Cancellation policies vary by listing and are set by individual hosts. Refund amounts depend on the applicable cancellation policy and timing of the cancellation.
            </p>
          </section>

          <section id="host-terms" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Host Terms</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4">5.1 Host Responsibilities</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Provide accurate and up-to-date listing information</li>
              <li>Maintain the property in a safe and habitable condition</li>
              <li>Comply with all applicable laws, regulations, and tax obligations</li>
              <li>Respond to guest inquiries and booking requests promptly</li>
              <li>Honor confirmed reservations</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-8">5.2 Listing Requirements</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Photos must accurately represent the property</li>
              <li>Descriptions must be truthful and complete</li>
              <li>Amenities listed must be available to guests</li>
              <li>House rules must be clearly stated</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-8">5.3 Host Standards</h3>
            <p className="text-gray-700">
              Hosts are expected to maintain high standards of hospitality, including cleanliness, communication, and guest satisfaction. Failure to meet these standards may result in listing suspension or account termination.
            </p>
          </section>

          <section id="liability" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Liability and Disputes</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4">6.1 Limitation of Liability</h3>
            <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-6">
              <p className="text-red-800">
                Airbnb's liability is limited to the maximum extent permitted by law. We are not liable for indirect, incidental, or consequential damages.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">6.2 Dispute Resolution</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>We encourage users to resolve disputes directly with each other</li>
              <li>Airbnb provides a Resolution Center for dispute mediation</li>
              <li>Binding arbitration may be required for certain disputes</li>
              <li>Class action lawsuits are waived except where prohibited by law</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-8">6.3 Indemnification</h3>
            <p className="text-gray-700">
              You agree to indemnify and hold harmless Airbnb from any claims, damages, or expenses arising from your use of the platform or violation of these Terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Intellectual Property</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4">7.1 Airbnb Content</h3>
            <p className="text-gray-700 mb-4">
              The Airbnb Platform and its content, features, and functionality are owned by Airbnb and are protected by copyright, trademark, and other intellectual property laws.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">7.2 User Content</h3>
            <p className="text-gray-700">
              You retain ownership of content you submit to the platform but grant Airbnb a license to use, display, and distribute such content in connection with our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Changes to Terms</h2>
            <p className="text-gray-700">
              We reserve the right to modify these Terms at any time. We will notify users of material changes via email or platform notification. Continued use of the platform after changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Contact Information</h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> legal@airbnb.com</p>
                <p><strong>Address:</strong> Airbnb, Inc., 888 Brannan Street, San Francisco, CA 94103, USA</p>
                <p><strong>Phone:</strong> +1 (855) 424-7262</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;