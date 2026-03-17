import SEO from '../components/SEO';
import { Scale, FileCheck, AlertCircle, CheckCircle } from 'lucide-react';

export default function Terms() {
  return (
    <div className="pt-[72px]">
      <SEO
        title="Terms of Service"
        description="Terms of Service for Evolve Board Consulting. Read our terms and conditions for using our website and services."
        keywords="terms of service, terms and conditions, legal terms, Evolve Board Consulting"
      />
      
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/10 via-white to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-6">
              Legal Information
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-charcoal mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-neutral-grey leading-relaxed">
              Please read these terms carefully before using our website and services.
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
              {/* Agreement */}
              <div className="bg-primary/5 rounded-xl p-6 border-l-4 border-primary">
                <h2 className="text-2xl font-bold text-charcoal mb-4 flex items-center">
                  <Scale className="h-6 w-6 text-primary mr-3" />
                  Agreement to Terms
                </h2>
                <p className="text-neutral-grey leading-relaxed">
                  By accessing or using the Evolve Board Consulting website (ebconsulting.co.tz) and services, you agree to be
                  bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
                </p>
              </div>

              {/* Services */}
              <div>
                <h2 className="text-2xl font-bold text-charcoal mb-4 flex items-center">
                  <FileCheck className="h-6 w-6 text-primary mr-3" />
                  Services
                </h2>
                <p className="text-neutral-grey leading-relaxed mb-4">
                  Evolve Board Consulting provides governance advisory services, including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-grey ml-4">
                  <li>Board development planning and training</li>
                  <li>Corporate governance audits and evaluations</li>
                  <li>Strategic planning and advisory services</li>
                  <li>Director recruitment and selection</li>
                  <li>Executive coaching and leadership development</li>
                  <li>Regulatory and compliance advisory</li>
                </ul>
                <p className="text-neutral-grey leading-relaxed mt-4">
                  All services are subject to separate service agreements that will be provided upon engagement.
                </p>
              </div>

              {/* Use of Website */}
              <div>
                <h2 className="text-2xl font-bold text-charcoal mb-4">Use of Website</h2>
                <p className="text-neutral-grey leading-relaxed mb-4">You agree to use our website only for lawful purposes and in accordance with these Terms. You agree not to:</p>
                <ul className="list-disc list-inside space-y-2 text-neutral-grey ml-4">
                  <li>Use the website in any way that violates applicable laws or regulations</li>
                  <li>Attempt to gain unauthorized access to any portion of the website</li>
                  <li>Transmit any viruses, malware, or harmful code</li>
                  <li>Use automated systems to access the website without permission</li>
                  <li>Reproduce, duplicate, or copy any content without authorization</li>
                  <li>Interfere with or disrupt the website or servers</li>
                </ul>
              </div>

              {/* Intellectual Property */}
              <div className="bg-secondary/10 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-charcoal mb-4 flex items-center">
                  <CheckCircle className="h-6 w-6 text-secondary mr-3" />
                  Intellectual Property
                </h2>
                <p className="text-neutral-grey leading-relaxed">
                  All content on this website, including text, graphics, logos, images, and software, is the property of Evolve
                  Board Consulting or its content suppliers and is protected by copyright, trademark, and other intellectual
                  property laws. You may not use, reproduce, or distribute any content from this website without our prior written
                  permission.
                </p>
              </div>

              {/* Limitation of Liability */}
              <div>
                <h2 className="text-2xl font-bold text-charcoal mb-4 flex items-center">
                  <AlertCircle className="h-6 w-6 text-primary mr-3" />
                  Limitation of Liability
                </h2>
                <p className="text-neutral-grey leading-relaxed mb-4">
                  To the fullest extent permitted by law, Evolve Board Consulting shall not be liable for any indirect, incidental,
                  special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or
                  indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-grey ml-4">
                  <li>Your use or inability to use the website or services</li>
                  <li>Any unauthorized access to or use of our servers or data</li>
                  <li>Any errors or omissions in any content</li>
                  <li>Any interruption or cessation of transmission to or from the website</li>
                </ul>
              </div>

              {/* Disclaimer */}
              <div>
                <h2 className="text-2xl font-bold text-charcoal mb-4">Disclaimer</h2>
                <p className="text-neutral-grey leading-relaxed">
                  The information on this website is provided on an "as is" basis. While we strive to provide accurate and
                  up-to-date information, we make no representations or warranties of any kind, express or implied, about the
                  completeness, accuracy, reliability, suitability, or availability of the website or the information contained
                  on it.
                </p>
              </div>

              {/* Payment Terms */}
              <div>
                <h2 className="text-2xl font-bold text-charcoal mb-4">Payment Terms</h2>
                <p className="text-neutral-grey leading-relaxed mb-4">
                  Payment terms for our services will be specified in individual service agreements. Generally:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-grey ml-4">
                  <li>Fees are due as specified in the service agreement</li>
                  <li>Late payments may incur additional charges</li>
                  <li>Refund policies are outlined in individual service agreements</li>
                  <li>All prices are subject to change without notice</li>
                </ul>
              </div>

              {/* Confidentiality */}
              <div>
                <h2 className="text-2xl font-bold text-charcoal mb-4">Confidentiality</h2>
                <p className="text-neutral-grey leading-relaxed">
                  We understand the sensitive nature of governance matters. All client information and communications are treated
                  with strict confidentiality in accordance with professional standards and applicable laws. Specific confidentiality
                  obligations will be detailed in our service agreements.
                </p>
              </div>

              {/* Termination */}
              <div>
                <h2 className="text-2xl font-bold text-charcoal mb-4">Termination</h2>
                <p className="text-neutral-grey leading-relaxed">
                  We reserve the right to terminate or suspend your access to our website and services at any time, without prior
                  notice, for any reason, including breach of these Terms. Service agreements may have specific termination
                  provisions that will be outlined separately.
                </p>
              </div>

              {/* Changes to Terms */}
              <div>
                <h2 className="text-2xl font-bold text-charcoal mb-4">Changes to Terms</h2>
                <p className="text-neutral-grey leading-relaxed">
                  We reserve the right to modify these Terms of Service at any time. We will notify users of any material changes
                  by posting the updated terms on this page and updating the "Last updated" date. Your continued use of the
                  website after such changes constitutes acceptance of the new terms.
                </p>
              </div>

              {/* Governing Law */}
              <div>
                <h2 className="text-2xl font-bold text-charcoal mb-4">Governing Law</h2>
                <p className="text-neutral-grey leading-relaxed">
                  These Terms of Service shall be governed by and construed in accordance with the laws of Tanzania. Any disputes
                  arising from these terms or your use of our website shall be subject to the exclusive jurisdiction of the
                  courts of Tanzania.
                </p>
              </div>

              {/* Contact */}
              <div className="bg-primary/5 rounded-xl p-6 border-l-4 border-primary">
                <h2 className="text-2xl font-bold text-charcoal mb-4">Contact Us</h2>
                <p className="text-neutral-grey leading-relaxed mb-4">
                  If you have any questions about these Terms of Service, please contact us:
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

