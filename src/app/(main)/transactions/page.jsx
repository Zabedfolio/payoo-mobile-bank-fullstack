"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  MdElectricBolt,
  MdAccountBalance,
  MdPhoneAndroid,
  MdLocalFireDepartment,
  MdShoppingBag,
  MdArrowUpward,
} from "react-icons/md";

const transactions = [
  {
    id: 1,
    title: "Electricity Bill",
    time: "Today 01:44 AM",
    amount: "৳850",
    type: "debit",
    icon: MdElectricBolt,
    iconColor: "#f59e0b",
    iconBg: "#fef3c7",
    accentColor: "#ef4444",
  },
  {
    id: 2,
    title: "Bank Deposit",
    time: "Today 01:44 AM",
    amount: "+৳5,000",
    type: "credit",
    icon: MdAccountBalance,
    iconColor: "#4f46e5",
    iconBg: "#ede9fe",
    accentColor: "#10b981",
  },
  {
    id: 3,
    title: "Mobile Recharge",
    time: "Today 01:44 AM",
    amount: "৳200",
    type: "debit",
    icon: MdPhoneAndroid,
    iconColor: "#0ea5e9",
    iconBg: "#e0f2fe",
    accentColor: "#ef4444",
  },
  {
    id: 4,
    title: "Gas Bill",
    time: "Today 01:44 AM",
    amount: "৳1,200",
    type: "debit",
    icon: MdLocalFireDepartment,
    iconColor: "#f97316",
    iconBg: "#ffedd5",
    accentColor: "#ef4444",
  },
  {
    id: 5,
    title: "Shopping",
    time: "Yesterday 09:12 PM",
    amount: "৳3,450",
    type: "debit",
    icon: MdShoppingBag,
    iconColor: "#ec4899",
    iconBg: "#fce7f3",
    accentColor: "#ef4444",
  },
  {
    id: 6,
    title: "Transfer Received",
    time: "Yesterday 04:30 PM",
    amount: "+৳2,000",
    type: "credit",
    icon: MdArrowUpward,
    iconColor: "#10b981",
    iconBg: "#d1fae5",
    accentColor: "#10b981",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function TransactionPage() {
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (id) => setActiveMenu(activeMenu === id ? null : id);

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 20,
        }}
      >
        <h2
          style={{
            fontSize: 20,
            fontWeight: 800,
            color: "#1a1a5e",
            letterSpacing: "-0.4px",
            margin: 0,
          }}
        >
          Transaction History
        </h2>
        <motion.button
          whileTap={{ scale: 0.95 }}
          style={{
            background: "none",
            border: "none",
            fontSize: 14,
            fontWeight: 600,
            color: "#6b6bab",
            cursor: "pointer",
            letterSpacing: "0.01em",
            padding: "4px 0",
          }}
        >
          View All
        </motion.button>
      </div>

      {/* Transaction List */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ display: "flex", flexDirection: "column", gap: 12 }}
      >
        {transactions.map((tx) => {
          const Icon = tx.icon;
          return (
            <motion.div
              key={tx.id}
              variants={itemVariants}
              whileHover={{ y: -2, boxShadow: "0 8px 28px rgba(79,70,229,0.09)" }}
              style={{
                background: "#ffffff",
                borderRadius: 18,
                padding: "14px 16px",
                border: "1.5px solid #ececf8",
                boxShadow: "0 2px 10px rgba(0,0,0,0.03)",
                display: "flex",
                alignItems: "center",
                gap: 14,
                position: "relative",
                transition: "box-shadow 0.2s ease",
                cursor: "default",
              }}
            >
              {/* Icon circle */}
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: tx.iconBg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Icon size={22} color={tx.iconColor} />
              </div>

              {/* Text */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <p
                  style={{
                    margin: 0,
                    fontSize: 15,
                    fontWeight: 700,
                    color: "#1a1a5e",
                    letterSpacing: "-0.2px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {tx.title}
                </p>
                <p
                  style={{
                    margin: "3px 0 0",
                    fontSize: 12,
                    fontWeight: 500,
                    color: "#9898c4",
                    letterSpacing: "0.01em",
                  }}
                >
                  {tx.time}
                </p>
              </div>

              {/* Amount */}
              <div style={{ textAlign: "right", flexShrink: 0, marginRight: 8 }}>
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: tx.type === "credit" ? "#10b981" : "#ef4444",
                    letterSpacing: "-0.2px",
                  }}
                >
                  {tx.type === "debit" ? "-" : ""}{tx.amount}
                </span>
              </div>

              {/* Three dots menu */}
              
            </motion.div>
          );
        })}
      </motion.div>

      
    </div>
  );
}