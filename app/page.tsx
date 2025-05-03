import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@mui/material';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <svg className="h-8 w-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L4 12l8 10 8-10-8-10z" />
                </svg>
                <span className="ml-2 text-xl font-bold text-blue-600">AfricaHR Leave</span>
              </div>
            </div>
            <div className="flex items-center space-x-8 gap-5">
              <Button 
                variant="outlined" 
                component={Link}
                href="/login"
                className="text-blue-600 border-blue-600 hover:bg-blue-50"
              >
                Employee Login
              </Button>
              <Button 
                variant="contained" 
                component={Link}
                href="/hr-login"
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                HR Portal
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[500px] w-full overflow-hidden bg-blue-900">
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-3xl px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Rwandan Labor Law Compliant <span className="text-yellow-300">Leave Management</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Automate leave requests, approvals, and tracking with full compliance for PTO, Sick Leave, Maternity Leave, and more
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="contained" 
                size="large"
                component={Link}
                href="/features"
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                Explore Features
              </Button>
              <Button 
                variant="outlined" 
                size="large"
                component={Link}
                href="/compliance"
                className="border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg transition-all"
              >
                View Compliance
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Leave Types Section */}
      <div className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Supported Leave Types
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fully compliant with Rwandan Labor Law 2023 requirements
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* PTO */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all border-t-4 border-blue-500">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 15 15"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">PTO</h3>
            </div>
            <p className="text-gray-600">
              20 days annual entitlement with automatic monthly accrual (1.66 days/month)
            </p>
          </div>

          {/* Sick Leave */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all border-t-4 border-green-500">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 text-green-600 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Sick Leave</h3>
            </div>
            <p className="text-gray-600">
              Medical certificate requirements built into approval workflow
            </p>
          </div>

          {/* Maternity Leave */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all border-t-4 border-purple-500">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="8.5" cy="7" r="4"></circle>
                  <line x1="20" y1="8" x2="20" y2="14"></line>
                  <line x1="23" y1="11" x2="17" y2="11"></line>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Maternity Leave</h3>
            </div>
            <p className="text-gray-600">
              Special provisions and documentation support
            </p>
          </div>

          {/* Compassionate Leave */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all border-t-4 border-amber-500">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-100 text-amber-600 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Compassionate</h3>
            </div>
            <p className="text-gray-600">
              Flexible duration with simplified approval process
            </p>
          </div>
        </div>
      </div>

      {/* Compliance Section */}
      <div className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Rwandan Labor Law Compliance
                </h2>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Automatic PTO accrual (1.66 days/month)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>5-day carryover limit enforcement</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Jan 31st expiration for excess days</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Documentation requirements by leave type</span>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <div className="bg-blue-100 p-4 rounded-lg border border-blue-200">
                  <h3 className="font-semibold text-blue-800 mb-2">Leave Balance Example</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-blue-700">PTO Balance</span>
                        <span className="text-sm font-medium text-blue-700">15/20 days</span>
                      </div>
                      <div className="w-full bg-blue-200 rounded-full h-2.5">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{width: '75%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-green-700">Sick Leave</span>
                        <span className="text-sm font-medium text-green-700">8/10 days</span>
                      </div>
                      <div className="w-full bg-green-200 rounded-full h-2.5">
                        <div className="bg-green-600 h-2.5 rounded-full" style={{width: '80%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to modernize your leave management?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join organizations across Rwanda using our compliant system
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="contained" 
              size="large"
              component={Link}
              href="/demo-request"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 text-lg font-medium rounded-lg shadow-lg"
            >
              Request Demo
            </Button>
            <Button 
              variant="outlined" 
              size="large"
              component={Link}
              href="/contact"
              className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg font-medium rounded-lg"
            >
              Contact HR
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <svg className="h-8 w-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L4 12l8 10 8-10-8-10z" />
                </svg>
                <span className="ml-2 text-xl font-bold text-blue-600">AfricaHR Leave</span>
              </div>
              <p className="text-gray-600">
                Rwandan Labor Law compliant leave management system
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">For Employees</h3>
              <ul className="space-y-2">
                <li><Link href="/request-leave" className="text-gray-600 hover:text-blue-600">Request Leave</Link></li>
                <li><Link href="/balance" className="text-gray-600 hover:text-blue-600">Check Balance</Link></li>
                <li><Link href="/calendar" className="text-gray-600 hover:text-blue-600">Team Calendar</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">For HR</h3>
              <ul className="space-y-2">
                <li><Link href="/approvals" className="text-gray-600 hover:text-blue-600">Pending Approvals</Link></li>
                <li><Link href="/reports" className="text-gray-600 hover:text-blue-600">Generate Reports</Link></li>
                <li><Link href="/settings" className="text-gray-600 hover:text-blue-600">System Settings</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="/labor-law" className="text-gray-600 hover:text-blue-600">Rwandan Labor Law</Link></li>
                <li><Link href="/privacy" className="text-gray-600 hover:text-blue-600">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-gray-600 hover:text-blue-600">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500">
            <p>© {new Date().getFullYear()} Africa HR Leave Management System. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}