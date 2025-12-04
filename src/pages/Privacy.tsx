import SEO from '../components/SEO';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="pt-20">
      <SEO
        title="Privacy Policy"
        description="Privacy Policy for Evolve Board Consulting. Learn how we collect, use, and protect your personal information."
        keywords="privacy policy, data protection, confidentiality, Evolve Board Consulting"
      />
      
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/10 via-white to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-6">
              Legal Information
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-charcoal mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-neutral-grey leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-neutral-grey mt-4">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
            <div className="space-y-8">
              {/* Introduction */}
              <div className="bg-primary/5 rounded-xl p-6 border-l-4 border-primary">
                <h2 className="text-2xl font-bold text-charcoal mb-4 flex items-center">
                  <Shield className="h-6 w-6 text-primary mr-3" />
                  Introduction
                </h2>
                <p className="text-neutral-grey leading-relaxed">
                  Evolve Board Consulting ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
                  explains how we collect, use, disclose, and safeguard your information when you visit our website
                  ebconsulting.co.tz and use our services.
                </p>
              </div>

              {/* Information We Collect */}
              <div>
                <h2 className="text-2xl font-bold text-charcoal mb-4 flex items-center">
                  <FileText className="h-6 w-6 text-primary mr-3" />
                  Information We Collect
                </h2>
                <div className="space-y-4 text-neutral-grey">
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal mb-2">Personal Information</h3>
                    <p className="leading-relaxed">
                      We may collect personal information that you provide to us, including but not limited to:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-2 ml-4">
                      <li>Name and contact information (email address, phone number, mailing address)</li>
                      <li>Company name and job title</li>
                      <li>Information provided in contact forms, inquiries, or service requests</li>
                      <li>Payment information (processed securely through third-party payment processors)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal mb-2">Automatically Collected Information</h3>
                    <p className="leading-relaxed">
                      When you visit our website, we may automatically collect certain information, including:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-2 ml-4">
                      <li>IP address and browser type</li>
                      <li>Pages visited and time spent on pages</li>
                      <li>Referring website addresses</li>
                      <li>Device information and operating system</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* How We Use Information */}
              <div>
                <h2 className="text-2xl font-bold text-charcoal mb-4 flex items-center">
                  <Eye className="h-6 w-6 text-primary mr-3" />
                  How We Use Your Information
                </h2>
                <p className="text-neutral-grey leading-relaxed mb-4">
                  We use the information we collect for various purposes, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-grey ml-4">
                  <li>To provide, maintain, and improve our services</li>
                  <li>To respond to your inquiries and provide customer support</li>
                  <li>To send you updates, newsletters, and marketing communications (with your consent)</li>
                  <li>To process transactions and manage your account</li>
                  <li>To comply with legal obligations and protect our rights</li>
                  <li>To analyze website usage and improve user experience</li>
                </ul>
              </div>

              {/* Data Protection */}
              <div className="bg-secondary/10 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-charcoal mb-4 flex items-center">
                  <Lock className="h-6 w-6 text-secondary mr-3" />
                  Data Protection and Security
                </h2>
                <p className="text-neutral-grey leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information against
                  unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the
                  Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              {/* Sharing Information */}
              <div>
                <h2 className="text-2xl font-bold text-charcoal mb-4">Sharing Your Information</h2>
                <p className="text-neutral-grey leading-relaxed mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in
                  the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-grey ml-4">
                  <li>With service providers who assist us in operating our website and conducting our business</li>
                  <li>When required by law or to protect our legal rights</li>
                  <li>In connection with a business transfer or merger</li>
                  <li>With your explicit consent</li>
                </ul>
              </div>

              {/* Your Rights */}
              <div>
                <h2 className="text-2xl font-bold text-charcoal mb-4">Your Rights</h2>
                <p className="text-neutral-grey leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-grey ml-4">
                  <li>Access and receive a copy of your personal information</li>
                  <li>Request correction of inaccurate or incomplete information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Object to or restrict processing of your information</li>
                  <li>Withdraw consent at any time</li>
                  <li>Lodge a complaint with a data protection authority</li>
                </ul>
              </div>

              {/* Cookies */}
              <div>
                <h2 className="text-2xl font-bold text-charcoal mb-4">Cookies and Tracking Technologies</h2>
                <p className="text-neutral-grey leading-relaxed">
                  We use cookies and similar tracking technologies to enhance your experience on our website. You can control
                  cookie preferences through your browser settings. Please note that disabling cookies may affect the
                  functionality of our website.
                </p>
              </div>

              {/* Third-Party Links */}
              <div>
                <h2 className="text-2xl font-bold text-charcoal mb-4">Third-Party Links</h2>
                <p className="text-neutral-grey leading-relaxed">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or
                  content of these external sites. We encourage you to review the privacy policies of any third-party sites you
                  visit.
                </p>
              </div>

              {/* Changes to Policy */}
              <div>
                <h2 className="text-2xl font-bold text-charcoal mb-4">Changes to This Privacy Policy</h2>
                <p className="text-neutral-grey leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
                  Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy
                  Policy periodically for any changes.
                </p>
              </div>

              {/* Contact */}
              <div className="bg-primary/5 rounded-xl p-6 border-l-4 border-primary">
                <h2 className="text-2xl font-bold text-charcoal mb-4">Contact Us</h2>
                <p className="text-neutral-grey leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
                </p>
                <div className="space-y-2 text-neutral-grey">
                  <p><strong>Email:</strong> info@ebconsulting.co.tz</p>
                  <p><strong>Phone:</strong> +255 123 456 789</p>
                  <p><strong>Address:</strong> 1st Floor, C&G Plaza, Mwai Kibaki Road, Mikocheni, Dar es Salaam, Tanzania</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

