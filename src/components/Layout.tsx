import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-full h-full">
                  <circle cx="16" cy="16" r="14" fill="#3B82F6" stroke="#1E40AF" strokeWidth="2"/>
                  <path d="M10 16l4 4 8-8" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-lg sm:text-xl font-semibold text-gray-900">typely fun</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 pt-20 sm:pt-24">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="text-center text-gray-600">
            <p className="text-sm sm:text-base">&copy; 2024 TypelyFun. 재미있는 성향 테스트</p>
            <p className="mt-2 text-xs sm:text-sm">
              <a href="https://TypelyFun.web.app" className="text-primary-600 hover:text-primary-700">
                https://TypelyFun.web.app
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 