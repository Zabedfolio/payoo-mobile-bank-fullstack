'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// ─── Icons (inline SVGs to avoid extra deps) ─────────────────────────────────

const AddMoneyIcon = () => (
  <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
    <circle cx="19" cy="19" r="19" fill="#FFF3E0" />
    <rect x="10" y="16" width="18" height="12" rx="3" fill="#FF9800" />
    <rect x="13" y="13" width="12" height="5" rx="2" fill="#FFB74D" />
    <circle cx="19" cy="22" r="2.5" fill="#fff" />
    <path d="M19 20.5v3M17.5 22h3" stroke="#FF9800" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

const CashoutIcon = () => (
  <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
    <circle cx="19" cy="19" r="19" fill="#E8F5E9" />
    <rect x="9" y="14" width="20" height="13" rx="3" fill="#43A047" />
    <circle cx="19" cy="20.5" r="3" fill="#fff" />
    <path d="M14 17.5h1.5M22.5 17.5H24" stroke="#A5D6A7" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M19 11l2.5 3h-5L19 11z" fill="#66BB6A" />
  </svg>
);

const TransferIcon = () => (
  <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
    <circle cx="19" cy="19" r="19" fill="#E3F2FD" />
    <circle cx="14" cy="19" r="4" fill="#1E88E5" />
    <circle cx="24" cy="19" r="4" fill="#42A5F5" opacity="0.7" />
    <path d="M20 16l3 3-3 3M18 22l-3-3 3-3" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const BonusIcon = () => (
  <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
    <circle cx="19" cy="19" r="19" fill="#F3E5F5" />
    <path d="M19 10l2.5 5.5 6 .8-4.3 4.2 1 6-5.2-2.7-5.2 2.7 1-6L10.5 16.3l6-.8L19 10z" fill="#AB47BC" />
  </svg>
);

const PayBillIcon = () => (
  <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
    <circle cx="19" cy="19" r="19" fill="#FFF8E1" />
    <rect x="12" y="11" width="14" height="18" rx="2.5" fill="#FFA000" />
    <rect x="14" y="14" width="6" height="1.5" rx="0.75" fill="#fff" />
    <rect x="14" y="17" width="10" height="1.5" rx="0.75" fill="#fff" />
    <rect x="14" y="20" width="8" height="1.5" rx="0.75" fill="#fff" />
    <rect x="14" y="23" width="5" height="1.5" rx="0.75" fill="#FFD54F" />
  </svg>
);

const TransactionsIcon = () => (
  <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
    <circle cx="19" cy="19" r="19" fill="#E0F2F1" />
    <rect x="11" y="15" width="16" height="10" rx="2.5" fill="#00897B" />
    <path d="M15 19h8M15 22h5" stroke="#fff" strokeWidth="1.3" strokeLinecap="round" />
    <path d="M19 11v4M16.5 12.5l2.5-1.5 2.5 1.5" stroke="#26A69A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const navItems = [
  { label: "Add Money",       icon: <AddMoneyIcon />,      href: "/add-money" },
  { label: "Cashout",         icon: <CashoutIcon />,       href: "/cashout" },
  { label: "Transfer Money",  icon: <TransferIcon />,      href: "/transfer" },
  { label: "Get Bonus",       icon: <BonusIcon />,         href: "/bonus" },
  { label: "Pay Bill",        icon: <PayBillIcon />,       href: "/pay-bill" },
  { label: "Transactions",    icon: <TransactionsIcon />,  href: "/transactions" },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.95 },
  show:  { opacity: 1, y: 0,  scale: 1, transition: { type: "spring", stiffness: 280, damping: 22 } },
};

export default function NavBar({ children }) {
  const pathname = usePathname();
  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .nav-box:hover .nav-icon { transform: scale(1.12); }
        .nav-box:hover { box-shadow: 0 6px 24px rgba(79,70,229,0.10); border-color: #c7c5f4 !important; }
        .logout-btn:hover { background: #f0f0ff !important; color: #4f46e5 !important; }
      `}</style>

      <div style={{
        background: "#eeeef6",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <div style={{
          width: "100%",
          maxWidth: 450,
          background: "#ffffff",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 0 40px rgba(0,0,0,0.05)",
        }}>

        {/* ── Top bar ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "18px 20px 16px",
            borderBottom: "1px solid #f0f0f8",
          }}
        >
          {/* Logo + balance */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Image
              src="/assets/logo.png"
              alt="Payoo"
              width={44}
              height={44}
              style={{ objectFit: "contain" }}
              priority
            />
            <div>
              <div style={{
                fontSize: 22,
                fontWeight: 800,
                color: "#1a1a5e",
                letterSpacing: "-0.5px",
                lineHeight: 1.1,
              }}>
                ৳45,000
              </div>
              <div style={{
                fontSize: 12,
                color: "#9898c4",
                fontWeight: 500,
                marginTop: 1,
              }}>
                Available Balance
              </div>
            </div>
          </div>

          {/* Logout */}
          <motion.button
            className="logout-btn"
            whileTap={{ scale: 0.95 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 7,
              padding: "9px 16px",
              borderRadius: 50,
              border: "1.5px solid #e2e3f0",
              background: "#fff",
              color: "#1a1a5e",
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            {/* logout icon */}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 14H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M11 11l3-3-3-3M14 8H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Log Out
          </motion.button>
        </motion.div>

        {/* ── Welcome section ──────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.45 }}
          style={{ padding: "28px 20px 0" }}
        >
          <h1 style={{
            fontSize: 26,
            fontWeight: 800,
            color: "#1a1a5e",
            letterSpacing: "-0.5px",
            lineHeight: 1.2,
            marginBottom: 8,
          }}>
            Welcome to{" "}
            <span style={{ color: "#1a1a5e" }}>Pay</span>
            <span style={{ color: "#4f46e5" }}>oo</span>
          </h1>
          <p style={{
            fontSize: 14,
            color: "#9898c4",
            fontWeight: 400,
            lineHeight: 1.6,
            maxWidth: 320,
          }}>
            Enjoy easy and convenient financial services with us.
            Cashout charge is low and transparent.
          </p>
        </motion.div>

        {/* ── 6-box grid ───────────────────────────────────────── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 12,
            padding: "24px 20px 32px",
          }}
        >
          {navItems.map(({ label, icon, href }) => {
            const isActive = pathname === href;
            return (
              <motion.div key={label} variants={itemVariants}>
                <Link href={href} style={{ textDecoration: "none" }}>
                  <div
                    className="nav-box"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 10,
                      padding: "20px 10px",
                      borderRadius: 18,
                      border: isActive ? "1.5px solid #4f46e5" : "1.5px solid #ececf8",
                      background: "#ffffff",
                      cursor: "pointer",
                      transition: "all 0.22s ease",
                      boxShadow: isActive 
                        ? "0 6px 24px rgba(79,70,229,0.10)" 
                        : "0 2px 8px rgba(0,0,0,0.04)",
                    }}
                  >
                    <div
                      className="nav-icon"
                      style={{ 
                        transition: "transform 0.22s ease",
                        transform: isActive ? "scale(1.05)" : "none"
                      }}
                    >
                      {icon}
                    </div>
                    <span style={{
                      fontSize: 12,
                      fontWeight: 600,
                      color: isActive ? "#4f46e5" : "#1a1a5e",
                      textAlign: "center",
                      lineHeight: 1.3,
                      letterSpacing: "0.01em",
                    }}>
                      {label}
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {children && (
          <div style={{ padding: "0 20px 32px" }}>
            {children}
          </div>
        )}
        </div>
      </div>
    </>
  );
}