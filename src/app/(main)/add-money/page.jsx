"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-hot-toast";

export default function AddMoney() {
  const [bank, setBank] = useState("");
  const [account, setAccount] = useState("");
  const [amount, setAmount] = useState("");
  const [pin, setPin] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAddMoney = (e) => {
    e.preventDefault();
    if (!bank || account.length < 11 || !amount || pin.length < 4) {
      toast.error("Please fill in all fields correctly.");
      return;
    }

    const formData = new FormData(e.target);
    const addMoney = Object.fromEntries(formData.entries());
    console.log(addMoney); 
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success(`Successfully added ৳${amount} to your account!`);
      // Reset form
      setBank("");
      setAccount("");
      setAmount("");
      setPin("");
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
        Add Money
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
        <form onSubmit={handleAddMoney}>
          {/* Select A Bank */}
          <div style={{ marginBottom: 20 }}>
            <label style={labelStyle}>Select A Bank</label>
            <div style={{ position: "relative" }}>
              <select
                name="bank"
                value={bank}
                onChange={(e) => setBank(e.target.value)}
                style={{
                  ...inputBaseStyle,
                  appearance: "none",
                  backgroundImage: `url("data:image/svg+xml;utf8,<svg fill='%231a1a5e' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 16px center",
                  cursor: "pointer",
                }}
              >
                <option value="" disabled>
                  Select bank
                </option>
                <option name="bank" value="bkash">bKash</option>
                <option name="bank" value="nagad">Nagad</option>
                <option name="bank" value="rocket">Rocket</option>
                <option name="bank" value="dbbl">DBBL Nexus</option>
                <option name="bank" value="ibbl">IBBL</option>
              </select>
            </div>
          </div>

          {/* Bank Account Number */}
          <div style={{ marginBottom: 20 }}>
            <label style={labelStyle}>Bank Account Number</label>
            <input
              name="account"
              type="number"
              placeholder="Enter 11 digit account number"
              value={account}
              onChange={(e) => setAccount(e.target.value.slice(0, 11))}
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

          {/* Amount to Add */}
          <div style={{ marginBottom: 20 }}>
            <label style={labelStyle}>Amount to Add</label>
            <input
              name="amount"
              type="number"
              placeholder="Add Amount to withdraw"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
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

          {/* Pin Number */}
          <div style={{ marginBottom: 24 }}>
            <label style={labelStyle}>Pin Number</label>
            <input
              name="pin"
              type="password"
              placeholder="Enter 4 digit pin number"
              value={pin}
              onChange={(e) => setPin(e.target.value.slice(0, 4))}
              style={{
                ...inputBaseStyle,
                letterSpacing: pin.length > 0 ? "0.3em" : "normal",
              }}
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
                  <span>Processing...</span>
                </motion.div>
              ) : (
                <motion.span
                  key="text"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  Add Money
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}