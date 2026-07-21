import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const size = { width: 32, height: 32 };
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
          borderRadius: 6,
          background: "linear-gradient(135deg, #39ff9d, #7c5cff)",
          color: "white",
          fontSize: 15,
          fontWeight: 700,
          fontFamily: "sans-serif",
        }}
      >
        {site.logoInitials}
      </div>
    ),
    size
  );
}
