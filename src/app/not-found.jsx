"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#eeeef6",
        padding: "24px 16px",
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{
          width: "100%",
          maxWidth: 450,
          background: "#ffffff",
          borderRadius: 28,
          padding: "40px 32px",
          textAlign: "center",
          boxShadow: "0 12px 40px rgba(0,0,0,0.06)",
          border: "1.5px solid #ececf8",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Animated 404 Illustration */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          style={{ marginBottom: 32 }}
        >
          <svg
            width="160"
            height="160"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background Circle */}
            <circle cx="100" cy="100" r="80" fill="#f0f0ff" />
            
            {/* Wallet / Credit Card Graphic representing error */}
            <rect x="50" y="70" width="100" height="70" rx="12" fill="#e2e3f0" stroke="#4f46e5" strokeWidth="4" />
            <line x1="50" y1="95" x2="150" y2="95" stroke="#4f46e5" strokeWidth="4" />
            <rect x="110" y="110" width="25" height="15" rx="4" fill="#6d5fdd" />
            
            {/* Warning Sign */}
            <path d="M100 25L120 60H80L100 25Z" fill="#ff4d4f" />
            <circle cx="100" cy="53" r="1.5" fill="#ffffff" />
            <line x1="100" y1="42" x2="100" y2="48" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
            
            {/* Eyes looking sad */}
            <circle cx="85" cy="120" r="3" fill="#1a1a5e" />
            <circle cx="115" cy="120" r="3" fill="#1a1a5e" />
            
            {/* Sad mouth */}
            <path d="M95 132C97 130 103 130 105 132" stroke="#1a1a5e" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </motion.div>

        {/* 404 Title */}
        <h1
          style={{
            fontSize: 48,
            fontWeight: 900,
            color: "#4f46e5",
            margin: 0,
            letterSpacing: "-1.5px",
            lineHeight: 1.1,
          }}
        >
          404
        </h1>

        <h2
          style={{
            fontSize: 20,
            fontWeight: 800,
            color: "#1a1a5e",
            marginTop: 8,
            marginBottom: 12,
            letterSpacing: "-0.3px",
          }}
        >
          Page Not Found
        </h2>

        <p
          style={{
            fontSize: 14,
            color: "#9898c4",
            fontWeight: 500,
            lineHeight: 1.5,
            margin: "0 0 32px 0",
          }}
        >
          The page you are looking for doesn't exist, has been removed, or is temporarily unavailable.
        </p>

        {/* Go Home Button */}
        <Link href="/" style={{ width: "100%", textDecoration: "none" }}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{
              width: "100%",
              padding: "16px",
              borderRadius: 16,
              background: "linear-gradient(135deg, #4f46e5 0%, #6d5fdd 100%)",
              color: "#ffffff",
              fontSize: 15,
              fontWeight: 700,
              letterSpacing: "0.06em",
              textAlign: "center",
              boxShadow: "0 8px 24px rgba(79,70,229,0.28)",
              cursor: "pointer",
              boxSizing: "border-box",
              textTransform: "uppercase",
            }}
          >
            Back to Dashboard
          </motion.div>
        </Link>
      </motion.div>
    </div>
  );
}
