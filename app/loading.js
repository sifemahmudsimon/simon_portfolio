"use client";

import { motion } from "motion/react";

export default function Loading() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        background: "#000",
      }}
    >
      {/* MAIN PURPLE CENTER GLOW */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at center, rgba(120, 80, 255, 0.25), rgba(0,0,0,0.9) 60%, #000 100%)",
        }}
      />

      {/* SECOND SOFT LIGHT LAYER (DEPTH) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1.5 }}
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at center, rgba(180, 160, 255, 0.12), transparent 55%)",
          filter: "blur(40px)",
        }}
      />

      {/* WHITE SPINNER */}
      <motion.div
        style={{
          width: 180,
          height: 180,
          borderRadius: "50%",
          border: "2px solid rgba(255,255,255,0.15)",
          borderTopColor: "white",
          zIndex: 2,
        }}
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear",
        }}
      />
    </div>
  );
}
