'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSmartphone, FiLock, FiEye, FiEyeOff, FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

// ─── Animated background blobs ────────────────────────────────────────────────
const Blob = ({ style, animate }) => (
  <motion.div
    style={{
      position: "absolute",
      borderRadius: "50%",
      filter: "blur(60px)",
      opacity: 0.18,
      ...style,
    }}
    animate={animate}
    transition={{ duration: 8, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
  />
);

// ─── OTP-style Pin dots ───────────────────────────────────────────────────────
const PinDots = ({ value }) => (
  <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 6 }}>
    {[0, 1, 2, 3].map((i) => (
      <motion.div
        key={i}
        animate={{
          scale: value.length > i ? 1.25 : 1,
          backgroundColor: value.length > i ? "#4f46e5" : "#d1d5f0",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        style={{
          width: 12,
          height: 12,
          borderRadius: "50%",
          backgroundColor: "#d1d5f0",
        }}
      />
    ))}
  </div>
);

// ─── Google Icon SVG ──────────────────────────────────────────────────────────
const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"
      fill="#4285F4"
    />
    <path
      d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"
      fill="#34A853"
    />
    <path
      d="M3.964 10.707A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.707V4.961H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.039l3.007-2.332z"
      fill="#FBBC05"
    />
    <path
      d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.961L3.964 7.293C4.672 5.163 6.656 3.58 9 3.58z"
      fill="#EA4335"
    />
  </svg>
);

export default function PayooLogin() {
  const [mobile, setMobile] = useState("");
  const [pin, setPin] = useState("");
  const [showPin, setShowPin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [shake, setShake] = useState(false);
  const [focusMobile, setFocusMobile] = useState(false);
  const [focusPin, setFocusPin] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (mobile.length < 10 || pin.length < 4) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }

    const formData = new FormData(e.target);
    const login = Object.fromEntries(formData.entries());
    console.log(login); // { mobile: "...", pin: "..." }

    setLoading(true);
    setTimeout(() => setLoading(false), 2200);
  };

  const handleGoogle = () => {
    setGoogleLoading(true);
    setTimeout(() => setGoogleLoading(false), 2000);
  };

  const inputBase = {
    width: "100%",
    padding: "14px 16px 14px 48px",
    borderRadius: 14,
    border: "1.5px solid",
    fontSize: 15,
    fontWeight: 500,
    outline: "none",
    transition: "all 0.25s",
    boxSizing: "border-box",
    letterSpacing: "0.01em",
    background: "#f4f5fb",
    color: "#1a1a5e",
  };

  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #eeeef6; }
        input::placeholder { color: #9898c4; font-weight: 400; }
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
        input[type=number] { -moz-appearance: textfield; }
        .google-btn:hover { background: #f0f0ff !important; border-color: #4f46e5 !important; }
        .google-btn:active { transform: scale(0.97); }
      `}</style>

      <div
        style={{
          minHeight: "100vh",
          width: "100%",
          maxWidth: 450,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#eeeef6",
          position: "relative",
          overflow: "hidden",
          padding: "24px 16px",
          margin: "0 auto",
        }}
      >
        {/* Background blobs */}
        <Blob
          style={{ width: 320, height: 320, background: "#4f46e5", top: -80, left: -80 }}
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        />
        <Blob
          style={{ width: 260, height: 260, background: "#7c6fcd", bottom: -60, right: -60 }}
          animate={{ x: [0, -20, 0], y: [0, -30, 0] }}
        />
        <Blob
          style={{ width: 180, height: 180, background: "#a5b4fc", top: "45%", left: "60%" }}
          animate={{ x: [0, 15, 0], y: [0, 25, 0] }}
        />

        {/* Card container */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            width: "100%",
            maxWidth: 390,
            position: "relative",
            zIndex: 10,
          }}
        >
          {/* Logo area */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            style={{ textAlign: "center", marginBottom: 28 }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src="/assets/logo-full.png"
                alt="Payoo Logo"
                width={180}
                height={60}
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
            <p
              style={{
                color: "#6b6bab",
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: "0.07em",
                textTransform: "uppercase",
                marginTop: 8,
              }}
            >
              Easy Pay &nbsp;|&nbsp; Secure Pay
            </p>
          </motion.div>

          {/* Form card */}
          <motion.div
            animate={shake ? { x: [-8, 8, -6, 6, -4, 4, 0] } : {}}
            transition={{ duration: 0.45 }}
            style={{
              background: "#ffffff",
              borderRadius: 24,
              padding: "32px 28px 28px",
              boxShadow:
                "0 20px 60px rgba(79,70,229,0.12), 0 4px 20px rgba(0,0,0,0.06)",
            }}
          >
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.4 }}
              style={{ marginBottom: 24 }}
            >
              <h2
                style={{
                  fontSize: 22,
                  fontWeight: 800,
                  color: "#1a1a5e",
                  letterSpacing: "-0.5px",
                  marginBottom: 4,
                }}
              >
                Welcome back
              </h2>
              <p style={{ fontSize: 13, color: "#9898c4", fontWeight: 500 }}>
                Sign in to your Payoo account
              </p>
            </motion.div>

            <form onSubmit={handleLogin}>
              {/* Mobile Number */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.28, duration: 0.45 }}
                style={{ marginBottom: 20 }}
              >
                <label
                  style={{
                    display: "block",
                    marginBottom: 8,
                    fontSize: 12,
                    fontWeight: 700,
                    color: "#1a1a5e",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  Mobile Number
                </label>
                <div style={{ position: "relative" }}>
                  <FiSmartphone
                    size={18}
                    style={{
                      position: "absolute",
                      left: 16,
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: focusMobile ? "#4f46e5" : "#9898c4",
                      transition: "color 0.2s",
                    }}
                  />
                  <input
                    name="mobile"
                    type="number"
                    placeholder="Enter your number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value.slice(0, 11))}
                    onFocus={() => setFocusMobile(true)}
                    onBlur={() => setFocusMobile(false)}
                    style={{
                      ...inputBase,
                      borderColor: focusMobile ? "#4f46e5" : "#e2e3f0",
                      background: focusMobile ? "#f0f0ff" : "#f4f5fb",
                      boxShadow: focusMobile
                        ? "0 0 0 3px rgba(79,70,229,0.12)"
                        : "none",
                    }}
                  />
                </div>
              </motion.div>

              {/* 4-Digit PIN */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.38, duration: 0.45 }}
                style={{ marginBottom: 26 }}
              >
                <label
                  style={{
                    display: "block",
                    marginBottom: 8,
                    fontSize: 12,
                    fontWeight: 700,
                    color: "#1a1a5e",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  4 Digit PIN
                </label>
                <div style={{ position: "relative" }}>
                  <FiLock
                    size={18}
                    style={{
                      position: "absolute",
                      left: 16,
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: focusPin ? "#4f46e5" : "#9898c4",
                      transition: "color 0.2s",
                    }}
                  />
                  <input
                    name="pin"
                    type={showPin ? "number" : "password"}
                    placeholder="Enter 4 Digit Pin"
                    value={pin}
                    onChange={(e) => setPin(e.target.value.slice(0, 4))}
                    onFocus={() => setFocusPin(true)}
                    onBlur={() => setFocusPin(false)}
                    style={{
                      ...inputBase,
                      paddingRight: 48,
                      borderColor: focusPin ? "#4f46e5" : "#e2e3f0",
                      background: focusPin ? "#f0f0ff" : "#f4f5fb",
                      boxShadow: focusPin
                        ? "0 0 0 3px rgba(79,70,229,0.12)"
                        : "none",
                      letterSpacing: showPin ? "0.01em" : "0.3em",
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPin(!showPin)}
                    style={{
                      position: "absolute",
                      right: 14,
                      top: "50%",
                      transform: "translateY(-50%)",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      color: "#9898c4",
                      display: "flex",
                      alignItems: "center",
                      padding: 4,
                    }}
                  >
                    {showPin ? <FiEyeOff size={17} /> : <FiEye size={17} />}
                  </button>
                </div>

                {/* Pin dot progress indicator */}
                <AnimatePresence>
                  {focusPin && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <PinDots value={pin} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Login Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.48, duration: 0.45 }}
              >
                <motion.button
                  type="submit"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 12px 32px rgba(79,70,229,0.38)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  disabled={loading}
                  style={{
                    width: "100%",
                    padding: "16px",
                    borderRadius: 16,
                    border: "none",
                    background: loading
                      ? "#7c6fcd"
                      : "linear-gradient(135deg, #4f46e5 0%, #6d5fdd 100%)",
                    color: "#ffffff",
                    fontSize: 15,
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    cursor: loading ? "not-allowed" : "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    boxShadow: "0 8px 24px rgba(79,70,229,0.28)",
                    transition: "background 0.3s",
                    textTransform: "uppercase",
                  }}
                >
                  <AnimatePresence mode="wait">
                    {loading ? (
                      <motion.div
                        key="loader"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{ display: "flex", gap: 6 }}
                      >
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            animate={{ y: [0, -6, 0] }}
                            transition={{
                              duration: 0.6,
                              delay: i * 0.15,
                              repeat: Infinity,
                            }}
                            style={{
                              width: 7,
                              height: 7,
                              borderRadius: "50%",
                              background: "white",
                            }}
                          />
                        ))}
                      </motion.div>
                    ) : (
                      <motion.div
                        key="text"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{ display: "flex", alignItems: "center", gap: 8 }}
                      >
                        Login
                        <motion.span
                          animate={{ x: [0, 4, 0] }}
                          transition={{
                            duration: 1.4,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <FiArrowRight size={18} />
                        </motion.span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </motion.div>
            </form>

            {/* Divider */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.4 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                margin: "20px 0",
              }}
            >
              <div style={{ flex: 1, height: 1, background: "#e8e8f4" }} />
              <span
                style={{ fontSize: 12, color: "#b0b0d0", fontWeight: 500 }}
              >
                or continue with
              </span>
              <div style={{ flex: 1, height: 1, background: "#e8e8f4" }} />
            </motion.div>

            {/* Google Sign-in Button */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.62, duration: 0.4 }}
            >
              <motion.button
                className="google-btn"
                onClick={handleGoogle}
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.97 }}
                disabled={googleLoading}
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  borderRadius: 14,
                  border: "1.5px solid #e2e3f0",
                  background: "#ffffff",
                  color: "#1a1a5e",
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: googleLoading ? "not-allowed" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  transition: "all 0.25s",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                  opacity: googleLoading ? 0.7 : 1,
                }}
              >
                <AnimatePresence mode="wait">
                  {googleLoading ? (
                    <motion.div
                      key="gloader"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      style={{ display: "flex", gap: 5 }}
                    >
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          animate={{ y: [0, -5, 0] }}
                          transition={{
                            duration: 0.55,
                            delay: i * 0.13,
                            repeat: Infinity,
                          }}
                          style={{
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            background: "#4f46e5",
                          }}
                        />
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="gtext"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      style={{ display: "flex", alignItems: "center", gap: 10 }}
                    >
                      <GoogleIcon />
                      Sign in with Google
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.4 }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "20px 0",
              }}
            >
              <span style={{ fontSize: 13, color: "#b0b0d0" }}>
                Don’t have an account?{" "}
                <Link href="/signup" style={{ color: "#6c63ff", fontWeight: 600 }}>
                  Sign up
                </Link>
              </span>
            </motion.div>
          </motion.div>

          {/* Bottom tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75, duration: 0.5 }}
            style={{
              textAlign: "center",
              marginTop: 18,
              fontSize: 12,
              color: "#9898c4",
              fontWeight: 500,
              letterSpacing: "0.04em",
            }}
          >
            Easy Pay &nbsp;·&nbsp; Secure Pay
          </motion.p>
        </motion.div>
      </div>
    </>
  );
}