import React from 'react';
import { Building, MapPin, Phone, Mail, Globe, FileText, Users, Calendar } from 'lucide-react';

const CompanyDetails: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <Building className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Company Details</h1>
          <p className="text-lg text-gray-600">
            Corporate information and legal details about Airbnb, Inc.
          </p>
        </div>

        {/* Company Overview */}
        <div className="bg-gradient-to-r from-pink-50 to-red-50 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">About Airbnb, Inc.</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Airbnb, Inc. is a global platform that connects people looking for accommodations with hosts who have space to share. Founded in 2008, we have grown to become one of the world's largest marketplaces for unique travel experiences, operating in more than 220 countries and regions worldwide.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#FF5A5F] mb-2">2008</div>
              <div className="text-sm text-gray-600">Founded</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#FF5A5F] mb-2">220+</div>
              <div className="text-sm text-gray-600">Countries & Regions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#FF5A5F] mb-2">4M+</div>
              <div className="text-sm text-gray-600">Hosts Worldwide</div>
            </div>
          </div>
        </div>

        {/* Corporate Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Primary Company Details */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <Building className="w-5 h-5 mr-2 text-[#FF5A5F]" />
              Primary Company Information
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Legal Name</label>
                <p className="text-gray-900">Airbnb, Inc.</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Incorporation</label>
                <p className="text-gray-900">Delaware, United States</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tax ID (EIN)</label>
                <p className="text-gray-900">26-1429922</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">NASDAQ Symbol</label>
                <p className="text-gray-900">ABNB</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">DUNS Number</label>
                <p className="text-gray-900">081166849</p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <Phone className="w-5 h-5 mr-2 text-[#FF5A5F]" />
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Headquarters</label>
                  <p className="text-gray-900">
                    888 Brannan Street<br />
                    San Francisco, CA 94103<br />
                    United States
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <p className="text-gray-900">+1 (855) 424-7262</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <p className="text-gray-900">press@airbnb.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-gray-400" />
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
                  <p className="text-gray-900">www.airbnb.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Team */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
            <Users className="w-5 h-5 mr-2 text-[#FF5A5F]" />
            Leadership Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h4 className="font-semibold text-gray-900">Brian Chesky</h4>
              <p className="text-sm text-gray-600">Co-Founder & CEO</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h4 className="font-semibold text-gray-900">Joe Gebbia</h4>
              <p className="text-sm text-gray-600">Co-Founder & Chairman</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h4 className="font-semibold text-gray-900">Nathan Blecharczyk</h4>
              <p className="text-sm text-gray-600">Co-Founder & CTO</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h4 className="font-semibold text-gray-900">Dave Stephenson</h4>
              <p className="text-sm text-gray-600">Chief Financial Officer</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h4 className="font-semibold text-gray-900">Catherine Powell</h4>
              <p className="text-sm text-gray-600">Global Head of Hosting</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h4 className="font-semibold text-gray-900">Hiroki Asai</h4>
              <p className="text-sm text-gray-600">Chief Marketing Officer</p>
            </div>
          </div>
        </div>

        {/* Regulatory Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Licenses & Registrations */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <FileText className="w-5 h-5 mr-2 text-[#FF5A5F]" />
              Licenses & Registrations
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">California Seller of Travel</label>
                <p className="text-gray-900">Registration #2132509-40</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Washington Seller of Travel</label>
                <p className="text-gray-900">Registration #603-326-747</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Florida Seller of Travel</label>
                <p className="text-gray-900">Registration #ST38939</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Hawaii Travel Agency</label>
                <p className="text-gray-900">Registration #TAR-7466</p>
              </div>
            </div>
          </div>

          {/* Financial Information */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-[#FF5A5F]" />
              Financial Information
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Fiscal Year End</label>
                <p className="text-gray-900">December 31</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Public Trading</label>
                <p className="text-gray-900">NASDAQ: ABNB (Since December 2020)</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Auditor</label>
                <p className="text-gray-900">KPMG LLP</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Transfer Agent</label>
                <p className="text-gray-900">Computershare Trust Company, N.A.</p>
              </div>
            </div>
          </div>
        </div>

        {/* International Entities */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
            <Globe className="w-5 h-5 mr-2 text-[#FF5A5F]" />
            International Entities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Europe</h4>
              <div className="space-y-2 text-sm">
                <p><strong>Airbnb Ireland UC</strong><br />8 Hanover Quay, Dublin 2, Ireland</p>
                <p><strong>Airbnb Payments UK Ltd.</strong><br />280 High Holborn, London WC1V 7EE, UK</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Asia Pacific</h4>
              <div className="space-y-2 text-sm">
                <p><strong>Airbnb Australia Pty Ltd.</strong><br />Level 19, 2 Park Street, Sydney NSW 2000</p>
                <p><strong>Airbnb Singapore Pte. Ltd.</strong><br />5 Temasek Boulevard, Singapore 038985</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">China</h4>
              <div className="space-y-2 text-sm">
                <p><strong>Airbnb Internet (Beijing) Co., Ltd.</strong><br />Beijing, People's Republic of China</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Brazil</h4>
              <div className="space-y-2 text-sm">
                <p><strong>Airbnb Plataforma Digital Ltda.</strong><br />São Paulo, Brazil</p>
              </div>
            </div>
          </div>
        </div>

        {/* Compliance & Certifications */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Compliance & Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">SOC 2 Type II</h4>
              <p className="text-sm text-gray-600">Security, availability, and confidentiality controls</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">ISO 27001</h4>
              <p className="text-sm text-gray-600">Information security management system</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">GDPR Compliant</h4>
              <p className="text-sm text-gray-600">European data protection regulation</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">PCI DSS Level 1</h4>
              <p className="text-sm text-gray-600">Payment card industry data security</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">CCPA Compliant</h4>
              <p className="text-sm text-gray-600">California consumer privacy act</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">PIPEDA Compliant</h4>
              <p className="text-sm text-gray-600">Personal information protection (Canada)</p>
            </div>
          </div>
        </div>

        {/* Contact for Corporate Inquiries */}
        <div className="mt-12 bg-blue-50 rounded-xl p-8 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Corporate Inquiries</h3>
          <p className="text-gray-600 mb-6">
            For business partnerships, investor relations, or other corporate matters, please contact our corporate team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="text-center">
              <p className="font-medium text-gray-900">Investor Relations</p>
              <p className="text-sm text-gray-600">ir@airbnb.com</p>
            </div>
            <div className="text-center">
              <p className="font-medium text-gray-900">Business Development</p>
              <p className="text-sm text-gray-600">partnerships@airbnb.com</p>
            </div>
            <div className="text-center">
              <p className="font-medium text-gray-900">Media Inquiries</p>
              <p className="text-sm text-gray-600">press@airbnb.com</p>
            </div>
          </div>
        </div>

        {/* Last Updated */}
        <div className="mt-8 text-center text-sm text-gray-500">
          Last updated: January 15, 2025
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;