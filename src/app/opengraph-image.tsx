import { ImageResponse } from "next/og";
import {
  PROJECT_TITLE,
  PROJECT_DESCRIPTION,
  PROJECT_AVATAR_URL,
} from "~/lib/constants";

export const alt = PROJECT_TITLE;
export const contentType = "image/png";
export const size = {
  width: 1200,
  height: 630,
};

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          backgroundColor: "#1a1a1a",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background gradient with ocean/wave colors */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(135deg, #00B4D8 0%, #0077B6 50%, #023E8A 100%)",
            opacity: 0.9,
          }}
        />

        {/* Wave pattern overlay for HappyWaves theme */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "radial-gradient(circle at 20% 80%, rgba(0, 180, 216, 0.3) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 40%)",
          }}
        />

        {/* Main content container - centered in safe zone */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            padding: "60px",
            position: "relative",
            zIndex: 10,
          }}
        >
          {/* User avatar with glow effect */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "48px",
              position: "relative",
            }}
          >
            {/* Glow effect */}
            <div
              style={{
                position: "absolute",
                width: "140px",
                height: "140px",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%)",
                filter: "blur(20px)",
              }}
            />
            {/* Avatar container */}
            <div
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                overflow: "hidden",
                border: "6px solid rgba(255, 255, 255, 0.95)",
                backgroundColor: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
              }}
            >
              <img
                src={PROJECT_AVATAR_URL}
                alt="User avatar"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>

          {/* Project title with high contrast */}
          <h1
            style={{
              fontSize: PROJECT_TITLE.length > 25 ? "65px" : "72px",
              fontWeight: "900",
              color: "#ffffff",
              textAlign: "center",
              marginBottom: "40px",
              lineHeight: 1.1,
              letterSpacing: "-2px",
              textShadow: "0 6px 20px rgba(0, 0, 0, 0.4)",
              maxWidth: "1100px",
              fontFamily: "system-ui, -apple-system, sans-serif",
              whiteSpace: PROJECT_TITLE.length > 40 ? "normal" : "nowrap",
              paddingLeft: "20px",
              paddingRight: "20px",
            }}
          >
            {PROJECT_TITLE}
          </h1>

          {/* Project description */}
          <p
            style={{
              fontSize: "36px",
              fontWeight: "600",
              color: "rgba(255, 255, 255, 0.95)",
              textAlign: "center",
              marginBottom: "56px",
              lineHeight: 1.3,
              textShadow: "0 3px 12px rgba(0, 0, 0, 0.4)",
              maxWidth: "800px",
              fontFamily: "system-ui, -apple-system, sans-serif",
            }}
          >
            {PROJECT_DESCRIPTION}
          </p>

          {/* Branding element with wave theme */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              padding: "24px 48px",
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              borderRadius: "100px",
              border: "3px solid rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(15px)",
              boxShadow: "0 10px 40px rgba(0, 0, 0, 0.2)",
            }}
          >
            {/* Wave label */}
            <div
              style={{
                padding: "8px 16px",
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                borderRadius: "24px",
                fontSize: "18px",
                fontWeight: "700",
                color: "#023E8A",
                fontFamily: "system-ui, -apple-system, sans-serif",
              }}
            >
              WAVES
            </div>
            <span
              style={{
                fontSize: "28px",
                fontWeight: "700",
                color: "#ffffff",
                fontFamily: "system-ui, -apple-system, sans-serif",
                letterSpacing: "-0.5px",
              }}
            >
              Farcaster Mini App
            </span>
          </div>
        </div>

        {/* Bottom gradient fade for depth */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "200px",
            background:
              "linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, transparent 100%)",
          }}
        />
      </div>
    ),
    {
      ...size,
    },
  );
}
