import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 8,
          background: "linear-gradient(135deg, #52B788 0%, #1B4332 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Paw body */}
        <div
          style={{
            position: "absolute",
            width: 14,
            height: 12,
            borderRadius: "50%",
            background: "white",
            bottom: 6,
            left: "50%",
            transform: "translateX(-50%)",
            opacity: 0.95,
          }}
        />
        {/* Left toe */}
        <div
          style={{
            position: "absolute",
            width: 6,
            height: 5,
            borderRadius: "50%",
            background: "white",
            bottom: 14,
            left: 5,
            opacity: 0.95,
          }}
        />
        {/* Right toe */}
        <div
          style={{
            position: "absolute",
            width: 6,
            height: 5,
            borderRadius: "50%",
            background: "white",
            bottom: 14,
            right: 5,
            opacity: 0.95,
          }}
        />
        {/* Top-left toe */}
        <div
          style={{
            position: "absolute",
            width: 5,
            height: 4,
            borderRadius: "50%",
            background: "white",
            bottom: 20,
            left: 8,
            opacity: 0.95,
          }}
        />
        {/* Top-right toe */}
        <div
          style={{
            position: "absolute",
            width: 5,
            height: 4,
            borderRadius: "50%",
            background: "white",
            bottom: 20,
            right: 8,
            opacity: 0.95,
          }}
        />
        {/* AI spark badge */}
        <div
          style={{
            position: "absolute",
            top: 1,
            right: 1,
            width: 12,
            height: 12,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #FBBF24, #F97316)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 6,
            fontWeight: 900,
            color: "white",
            fontFamily: "Arial",
          }}
        >
          AI
        </div>
      </div>
    ),
    { ...size }
  );
}
