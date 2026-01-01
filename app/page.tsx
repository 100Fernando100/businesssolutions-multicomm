import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      
      {/* Operational Modules Dashboard */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Operational Modules Dashboard</h2>
          <p className="text-gray-600 mb-12">
            Three intelligent modules working together to automate your tax season workflow
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Tax Season Triage */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-teal-200 hover:border-teal-400 transition-colors">
              <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center text-white text-2xl mb-4 mx-auto">
                📋
              </div>
              <h3 className="font-bold text-xl mb-2">Tax Season Triage</h3>
              <p className="text-gray-600 text-sm">
                AI qualifies if client is new or existing and identifies required form (T1, 1040, Corporate Tax)
              </p>
            </div>

            {/* Document Collection */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-purple-200 hover:border-purple-400 transition-colors">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center text-white text-2xl mb-4 mx-auto">
                📤
              </div>
              <h3 className="font-bold text-xl mb-2">Document Collection</h3>
              <p className="text-gray-600 text-sm">
                Automatic SMS with Dropbox/Google Drive links for receipt uploads after call
              </p>
            </div>

            {/* Status FAQ */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-orange-200 hover:border-orange-400 transition-colors">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center text-white text-2xl mb-4 mx-auto">
                ❓
              </div>
              <h3 className="font-bold text-xl mb-2">Status FAQ</h3>
              <p className="text-gray-600 text-sm">
                Knowledge base where AI answers deadlines and rates, freeing accountant from repetitive calls
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-bold text-xl mb-2">Connect Your Practice Software</h3>
              <p className="text-gray-600">
                Integrate with QuickBooks, Xero, FreshBooks in minutes
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-bold text-xl mb-2">Train AI on Your Services</h3>
              <p className="text-gray-600">
                Configure tax forms, pricing, deadlines specific to your firm
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-bold text-xl mb-2">Go Live for Tax Season</h3>
              <p className="text-gray-600">
                AI handles intake while you focus on returns and audits
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-xl mb-4">multicomm.ai</h3>
              <p className="text-gray-400 text-sm">AI Communication Automation Platform</p>
              <p className="text-gray-400 text-sm mt-2">accounting@multicomm.ai</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Features</li>
                <li>Pricing</li>
                <li>Integrations</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Privacy</li>
                <li>Terms</li>
                <li>Security</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>© 2024 multicomm.ai - AI Receptionist for Tax Professionals</p>
          </div>
        </div>
      </footer>
    </main>
  );
}