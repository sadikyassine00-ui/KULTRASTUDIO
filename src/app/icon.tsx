import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: "8px",
          color: "#fbbf24",
          fontSize: "20px",
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
