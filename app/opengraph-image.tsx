import { profile } from "@/app/data/portfolio";
import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "58px 64px",
          background:
            "radial-gradient(circle at 50% 10%, rgba(229,9,20,0.22), rgba(11,11,11,1) 52%), #0b0b0b",
          color: "#ffffff",
          fontFamily: "Times New Roman, Times, serif",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            alignSelf: "flex-start",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "9999px",
            background: "rgba(18,18,18,0.75)",
            padding: "10px 18px",
            fontSize: 20,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          RWK Portfolio
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ fontSize: 72, lineHeight: 1.03, fontWeight: 700, maxWidth: 980 }}>
            {profile.fullName}
          </div>
          <div style={{ fontSize: 34, lineHeight: 1.25, color: "#d4d4d8", maxWidth: 1000 }}>
            Full-Stack Developer | AI Integration | Data Pipelines | APIs
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 28, color: "#e50914" }}>{profile.location}</div>
      </div>
    ),
    { ...size },
  );
}
