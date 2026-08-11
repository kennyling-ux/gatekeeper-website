import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Gatekeeper — Independent Education Consulting";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#061e40",
          color: "#f6f6f4",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 6, color: "#c5a880", textTransform: "uppercase" }}>
          Independent Education Consulting
        </div>
        <div style={{ display: "flex", fontSize: 96, fontWeight: 700, marginTop: 24 }}>
          Gatekeeper
        </div>
        <div style={{ display: "flex", fontSize: 32, marginTop: 24, color: "#eef4f8", maxWidth: 900 }}>
          Clarity for every step of the journey to university.
        </div>
      </div>
    ),
    { ...size },
  );
}
