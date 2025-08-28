'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, TrendingUp, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {usePathname} from "next/navigation";
import Link from 'next/link';

const navItems = [
  { name: 'Home', href: '/' },
  { 
    name: 'Services', 
    href: '#services',
    dropdown: [
      { name: 'Register', href: '/register' },
      { name: 'Projects', href: '/projects' },
    ]
  },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200/20' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <span className={`text-xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-black' : 'text-black'
            }`}>
              Financia
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link 
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all ${item.href === usePathname()? `bg-black/10`: ``} duration-300 ${
                    isScrolled 
                      ? 'text-black hover:text-blue-600 hover:bg-blue-50 bg-black/10' 
                      : 'text-black text-black hover:text-white hover:bg-black/10'
                  }`}
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
                  href= {item.href}
               
                >
                  <span>{item.name}</span>
                  {item.dropdown && (
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-200 py-2"
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        {item.dropdown.map((dropdownItem) => (
                          <a
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                          >
                            {dropdownItem.name}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
            
              href="/login"
       
              className={`transition-colors duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' 
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              Sign In
            </Link>
      
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled 
                ? 'text-gray-700 hover:bg-gray-100' 
                : 'text-white hover:bg-white/10'
            }`}
          >
            {isOpen ? <X color="black" className="h-6 w-6" /> : <Menu color="black" className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200/20"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="space-y-4">
                {navItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      onClick={() => item.dropdown && handleDropdownToggle(item.name)}
                      href={item.href}
                      className="flex items-center justify-between w-full px-4 py-3 text-left text-black bg-transparent hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200"
                    >
                      <span className="font-medium">{item.name}</span>
                      {item.dropdown && (
                        <ChevronDown color='black' className={`h-4 w-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      )}
                    </Link>

                    {/* Mobile Dropdown */}
                    {item.dropdown && (
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="ml-4 mt-2 space-y-2"
                          >
                            {item.dropdown.map((dropdownItem) => (
                              <a
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                                onClick={() => setIsOpen(false)}
                              >
                                {dropdownItem.name}
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                ))}

                {/* Mobile Contact Info */}
                <div className="pt-6 mt-6 border-t border-gray-200">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-gray-600">
                      <Phone className="h-4 w-4" />
                      <span className="text-sm"></span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-600">
                      <Mail className="h-4 w-4" />
                      <span className="text-sm"></span>
                    </div>
                  </div>
                </div>

                {/* Mobile CTA Buttons */}
                <div className="pt-6 space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-center border-gray-300 text-gray-700 hover:bg-gray-50"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign In
                  </Button>
                
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}