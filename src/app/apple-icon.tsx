import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1c1917",
          borderRadius: "40px",
          color: "#fbbf24",
          fontSize: "110px",
          fontWeight: 800,
          fontFamily: "serif",
        }}
      >
        K
      </div>
    ),
    {
      ...size,
    }
  );
}
