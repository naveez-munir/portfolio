"use client"
import React, { useState } from 'react';
import { Phone, Mail, Github, Linkedin, MessageCircle } from 'lucide-react';

const FloatingDial = () => {
  const [isHovered, setIsHovered] = useState(false);

  const contactOptions = [
    {
      icon: <Mail size={20} />,
      label: 'Email',
      href: '#contact'
    },
    {
      icon: <Github size={20} />,
      label: 'Github',
      href: 'https://github.com/naveez-munir'
    },
    {
      icon: <Linkedin size={20} />,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/naveez-munir'
    },
    {
      icon: <Phone size={20} />,
      label: 'Phone',
      href: '#contact'
    },
  ];

  return (
    <div
      className="fixed bottom-8 right-8 z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Contact Options */}
      <div className="flex flex-col-reverse items-center gap-3 mb-2">
        {contactOptions.map((option, index) => (
          <a
            key={option.label}
            href={option.href}
            className="transition-all duration-300 opacity-0 translate-y-4 scale-75"
            style={{
              opacity: isHovered ? 1 : 0,
              transform: isHovered
                ? `translateY(0) scale(1)`
                : `translateY(${(index + 1) * 16}px) scale(0.75)`,
              transitionDelay: `${index * 50}ms`
            }}
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
              style={{
                backgroundColor: 'var(--accent)',
                color: 'var(--background)'
              }}
            >
              {option.icon}
            </div>
          </a>
        ))}
      </div>

      {/* Main Button */}
      <button
        className="w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-105"
        style={{
          backgroundColor: 'var(--accent)',
          color: 'var(--background)',
          transform: isHovered ? 'scale(1.1)' : 'scale(1)'
        }}
      >
        <MessageCircle size={24} />
      </button>
    </div>
  );
};

export default FloatingDial;
