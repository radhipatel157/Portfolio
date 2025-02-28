"use client";

// import { useEffect, useState } from "react";
import "../styles/globals.css"; 

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Static Purple-Themed Colors
  const currentTheme = { 
    bg: "#121212", // Dark Purple 
    text: "#E2E8F0", // Light Gray Text
    accent: "#A855F7" // Vibrant Purple Accent
  };

  return (
    <html lang="en">
      <head>
        <title>Radhi Patel - Portfolio</title>
        <meta name="description" content="Portfolio of Radhi Patel - Computer Science Student specializing in Adaptive AI" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body
        className="relative font-sans overflow-x-hidden flex flex-col items-center"
        style={{
          backgroundColor: currentTheme.bg,
          color: currentTheme.text,
          transition: "background-color 1s ease-in-out, color 1s ease-in-out",
        }}
      >
        {/* Background Pattern */}
        <div 
          className="fixed inset-0 z-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.2) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(255, 255, 255, 0.2) 2%, transparent 0%)",
            backgroundSize: "100px 100px",
          }}
        />

        {/* MAIN CONTENT - Responsive & Clean */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
          {children}
        </div>

        {/* Custom Purple Accent Elements */}
        <div
          className="fixed top-0 left-0 w-full h-1 z-50 transition-colors duration-1000"
          style={{ backgroundColor: currentTheme.accent }}
        />
        <div
          className="fixed bottom-0 left-0 w-full h-1 z-50 transition-colors duration-1000"
          style={{ backgroundColor: currentTheme.accent }}
        />

        {/* Waving Hand Animation */}
        <style jsx global>{`
          @keyframes wave {
            0% { transform: rotate(0deg); }
            25% { transform: rotate(20deg); }
            50% { transform: rotate(0deg); }
            75% { transform: rotate(-20deg); }
            100% { transform: rotate(0deg); }
          }
          .animate-waving-hand {
            display: inline-block;
            animation: wave 2s infinite ease-in-out;
          }
        `}</style>
      </body>
    </html>
  );
}
