'use client';
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    FiUser,
    FiSmartphone,
    FiLock,
    FiEye,
    FiEyeOff,
    FiArrowRight,
} from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

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
        transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
        }}
    />
);

export default function PayooSignup() {
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [showPass, setShowPass] = useState(false);
    const [loading, setLoading] = useState(false);
    const [focusName, setFocusName] = useState(false);
    const [focusMobile, setFocusMobile] = useState(false);
    const [focusPassword, setFocusPassword] = useState(false);
    const [focusConfirmPass, setFocusConfirmPass] = useState(false);
    const [shake, setShake] = useState(false);

    const handleSignup = (e) => {
        e.preventDefault();

        if (
            name.length < 2 ||
            mobile.length < 10 ||
            password.length < 4 ||
            password !== confirmPass
        ) {
            setShake(true);
            setTimeout(() => setShake(false), 500);
            return;
        }

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        console.log(data);

        setLoading(true);
        setTimeout(() => setLoading(false), 2000);
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
        input::placeholder { color: #9898c4; }
      `}</style>

            <div
                style={{
                    minHeight: "100vh",
                    maxWidth: 450,
                    margin: "0 auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#eeeef6",
                    position: "relative",
                    overflow: "hidden",
                    padding: "24px 16px",
                }}
            >
                {/* Blobs */}
                <Blob
                    style={{ width: 320, height: 320, background: "#4f46e5", top: -80, left: -80 }}
                    animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
                />
                <Blob
                    style={{ width: 260, height: 260, background: "#7c6fcd", bottom: -60, right: -60 }}
                    animate={{ x: [0, -20, 0], y: [0, -30, 0] }}
                />

                {/* Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    style={{
                        width: "100%",
                        maxWidth: 390,
                        zIndex: 10,
                    }}
                >
                    {/* Logo */}
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

                    {/* Form Card */}
                    <motion.div
                        animate={shake ? { x: [-8, 8, -6, 6, -4, 4, 0] } : {}}
                        style={{
                            background: "#fff",
                            borderRadius: 24,
                            padding: "32px 28px",
                            boxShadow:
                                "0 20px 60px rgba(79,70,229,0.12), 0 4px 20px rgba(0,0,0,0.06)",
                        }}
                    >
                        <h2 style={{ fontSize: 22, marginBottom: 4 }}>
                            Create Account
                        </h2>
                        <p style={{ fontSize: 13, color: "#9898c4", marginBottom: 20 }}>
                            Sign up for your Payoo account
                        </p>

                        <form onSubmit={handleSignup}>
                            {/* Name */}
                            <div style={{ marginBottom: 16, position: "relative" }}>
                                <FiUser
                                    style={{
                                        position: "absolute",
                                        left: 14,
                                        top: 16,
                                        color: focusName ? "#4f46e5" : "#9898c4",
                                        transition: "color .2s",
                                    }}
                                />
                                <input
                                    name="name"
                                    placeholder="Full Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    onFocus={() => setFocusName(true)}
                                    onBlur={() => setFocusName(false)}
                                    style={{
                                        ...inputBase,
                                        borderColor: focusName ? "#4f46e5" : "#e2e3f0",
                                        background: focusName ? "#f0f0ff" : "#f4f5fb",
                                        boxShadow: focusName
                                            ? "0 0 0 3px rgba(79,70,229,0.12)"
                                            : "none",
                                    }}
                                />
                            </div>

                            {/* Mobile */}
                            <div style={{ marginBottom: 16, position: "relative" }}>
                                <FiSmartphone
                                    style={{
                                        position: "absolute",
                                        left: 14,
                                        top: 16,
                                        color: focusMobile ? "#4f46e5" : "#9898c4",
                                        transition: "color .2s",
                                    }}
                                />
                                <input
                                    name="mobile"
                                    type="number"
                                    placeholder="Mobile Number"
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

                            {/* Password */}
                            <div style={{ marginBottom: 16, position: "relative" }}>
                                <FiLock
                                    style={{
                                        position: "absolute",
                                        left: 14,
                                        top: 16,
                                        color: focusPassword ? "#4f46e5" : "#9898c4",
                                        transition: "color .2s",
                                    }}
                                />
                                <input
                                    name="password"
                                    type={showPass ? "text" : "password"}
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    onFocus={() => setFocusPassword(true)}
                                    onBlur={() => setFocusPassword(false)}
                                    style={{
                                        ...inputBase,
                                        borderColor: focusPassword ? "#4f46e5" : "#e2e3f0",
                                        background: focusPassword ? "#f0f0ff" : "#f4f5fb",
                                        boxShadow: focusPassword
                                            ? "0 0 0 3px rgba(79,70,229,0.12)"
                                            : "none",
                                        paddingRight: 48,
                                    }}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPass(!showPass)}
                                    style={{
                                        position: "absolute",
                                        right: 14,
                                        top: 18,
                                        background: "none",
                                        opacity: 0.4,
                                        

                                    }}
                                >
                                    {showPass ? <FiEyeOff /> : <FiEye />}
                                </button>
                            </div>

                            {/* Confirm Password */}
                            <div style={{ marginBottom: 10, position: "relative" }}>
                                <FiLock
                                    style={{
                                        position: "absolute",
                                        left: 14,
                                        top: 16,
                                        color: focusConfirmPass ? "#4f46e5" : "#9898c4",
                                        transition: "color .2s",
                                    }}
                                />
                                <input
                                    name="confirmPassword"
                                    type="password"
                                    placeholder="Confirm Password"
                                    value={confirmPass}
                                    onChange={(e) => setConfirmPass(e.target.value)}
                                    onFocus={() => setFocusConfirmPass(true)}
                                    onBlur={() => setFocusConfirmPass(false)}
                                    style={{
                                        ...inputBase,
                                        borderColor: focusConfirmPass ? "#4f46e5" : "#e2e3f0",
                                        background: focusConfirmPass ? "#f0f0ff" : "#f4f5fb",
                                        boxShadow: focusConfirmPass
                                            ? "0 0 0 3px rgba(79,70,229,0.12)"
                                            : "none",
                                    }}
                                />
                            </div>

                            {confirmPass && password !== confirmPass && (
                                <p style={{ color: "red", fontSize: 12, marginBottom: 10 }}>
                                    Passwords do not match
                                </p>
                            )}

                            {/* Button */}
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
                                                SignUp
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

                        {/* Login link */}
                        <div style={{ textAlign: "center", marginTop: 18 }}>
                            <span style={{ fontSize: 13, color: "#9898c4" }}>
                                Already have an account?{" "}
                                <Link href="/login" style={{ color: "#4f46e5", fontWeight: 600 }}>
                                    Login
                                </Link>
                            </span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </>
    );
}