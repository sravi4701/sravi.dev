import { ImageResponse } from "next/og";
import { profile } from "@/utils/content";
import { siteUrl } from "@/utils/site";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// No remote font or image fetches here on purpose: a network call inside
// ImageResponse is the usual cause of a flaky production build.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#FAFAF9",
          padding: "80px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "9999px",
              backgroundColor: "#B45309",
            }}
          />
          <div
            style={{
              fontSize: "24px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#78716C",
            }}
          >
            {profile.location}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: "104px", color: "#1C1917", lineHeight: 1.05 }}>
            {profile.name}
          </div>
          <div style={{ fontSize: "44px", color: "#57534E", marginTop: "16px" }}>
            {profile.role}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "2px solid #E7E5E4",
            paddingTop: "32px",
            fontSize: "28px",
            color: "#B45309",
          }}
        >
          <div>{siteUrl.replace("https://", "")}</div>
          <div style={{ color: "#78716C" }}>Python · Django · Next.js · AWS</div>
        </div>
      </div>
    ),
    size
  );
}
