import { Mail, Send } from 'lucide-react';
import { useState } from 'react';

export default function Careers() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the email to a backend
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="pt-20 min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-white to-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center animate-fade-in">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-charcoal mb-6">
              Careers Coming Soon
            </h1>
            <p className="text-lg text-neutral-grey leading-relaxed mb-8">
              We're building an exceptional team of governance professionals. Join us in
              transforming organizational governance across East Africa.
            </p>
            <p className="text-neutral-grey mb-8">
              Be the first to know when we post new opportunities. Subscribe to our career
              notifications below.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors flex items-center justify-center"
                >
                  {submitted ? (
                    <>
                      <span className="mr-2">Subscribed!</span>
                    </>
                  ) : (
                    <>
                      Subscribe
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>
              </div>
            </form>

            {submitted && (
              <p className="mt-4 text-sm text-primary animate-fade-in">
                Thank you! We'll notify you when new opportunities become available.
              </p>
            )}

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-neutral-grey">
                For immediate inquiries, please contact us at{' '}
                <a
                  href="mailto:careers@evolveboardconsulting.com"
                  className="text-primary hover:text-primary-dark font-semibold"
                >
                  careers@evolveboardconsulting.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

