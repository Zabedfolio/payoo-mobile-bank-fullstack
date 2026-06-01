"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-hot-toast";

export default function Bonus() {
  const [coupon, setCoupon] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGetBonus = (e) => {
    e.preventDefault();
    if (!coupon.trim()) {
      toast.error("Please enter a valid coupon code.");
      return;
    }

    const formData = new FormData(e.target);
    const bonus = Object.fromEntries(formData.entries());
    console.log(bonus); // { coupon: "..." }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success(`Coupon "${coupon}" successfully claimed! You received ৳500 bonus!`);
      setCoupon("");
    }, 1500);
  };

  const labelStyle = {
    display: "block",
    marginBottom: 8,
    fontSize: 12,
    fontWeight: 700,
    color: "#1a1a5e",
    letterSpacing: "0.05em",
    textTransform: "uppercase",
  };

  const inputBaseStyle = {
    width: "100%",
    padding: "14px 16px",
    borderRadius: 14,
    border: "1.5px solid #e2e3f0",
    background: "#f4f5fb",
    color: "#1a1a5e",
    fontSize: 15,
    fontWeight: 500,
    outline: "none",
    boxSizing: "border-box",
    transition: "all 0.25s",
  };

  return (
    <div>
      {/* Title */}
      <h2
        style={{
          fontSize: 18,
          fontWeight: 800,
          color: "#1a1a5e",
          letterSpacing: "-0.3px",
          marginBottom: 16,
        }}
      >
        Get Bonus
      </h2>

      {/* Card container */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        style={{
          background: "#ffffff",
          borderRadius: 24,
          padding: "28px 24px",
          border: "1.5px solid #ececf8",
          boxShadow: "0 8px 24px rgba(0,0,0,0.02)",
        }}
      >
        <form onSubmit={handleGetBonus}>
          {/* Enter Bonus Coupon */}
          <div style={{ marginBottom: 24 }}>
            <label style={labelStyle}>Enter Bonus Coupon</label>
            <input
              name="coupon"
              type="text"
              placeholder="Enter your coupon"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              style={inputBaseStyle}
              onFocus={(e) => {
                e.target.style.borderColor = "#4f46e5";
                e.target.style.background = "#f0f0ff";
                e.target.style.boxShadow = "0 0 0 3px rgba(79,70,229,0.12)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#e2e3f0";
                e.target.style.background = "#f4f5fb";
                e.target.style.boxShadow = "none";
              }}
            />
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{
              scale: loading ? 1 : 1.02,
              boxShadow: loading ? "none" : "0 12px 32px rgba(79,70,229,0.38)",
            }}
            whileTap={{ scale: loading ? 1 : 0.97 }}
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
                  style={{ display: "flex", alignItems: "center", gap: 8 }}
                >
                  <svg
                    className="animate-spin"
                    style={{
                      width: 20,
                      height: 20,
                      animation: "spin 1s linear infinite",
                    }}
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  <span>Claiming...</span>
                </motion.div>
              ) : (
                <motion.span
                  key="text"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  Get Bonus
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}