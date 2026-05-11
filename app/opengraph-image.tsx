import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Affirm. Account Brief by Jovan Marrero";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadFont() {
  // Fetch JetBrains Mono Bold (700) from Google Fonts
  const cssRes = await fetch(
    "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@700&display=swap",
    { headers: { "User-Agent": "Mozilla/5.0" } }
  );
  const css = await cssRes.text();
  const match = css.match(/src:\s*url\((.+?)\)\s*format/);
  if (!match) return null;
  const buf = await fetch(match[1]).then((r) => r.arrayBuffer());
  return buf;
}

export default async function OGImage() {
  const fontData = await loadFont().catch(() => null);
  const family = fontData ? "JBMono" : "monospace";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#141110",
          color: "#EDE7DA",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "70px 80px",
          fontFamily: family,
        }}
      >
        {/* Top meta */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "monospace",
            fontSize: 22,
            color: "#A89F92",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          <span>Doc 01 / Account Brief</span>
          <span>For GitLab</span>
        </div>

        {/* Center title block */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            gap: 24,
          }}
        >
          <div
            style={{
              fontSize: 24,
              color: "#BFB39E",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              fontFamily: "monospace",
              display: "flex",
              alignItems: "center",
              gap: 16,
            }}
          >
            <span style={{ width: 40, height: 1, background: "#BFB39E" }} />
            <span>A custom brief on a real GitLab ICP</span>
            <span style={{ width: 40, height: 1, background: "#BFB39E" }} />
          </div>
          <div
            style={{
              fontSize: 200,
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              fontWeight: 700,
            }}
          >
            AFFIRM
          </div>
          <div
            style={{
              fontSize: 48,
              color: "#A89F92",
              textTransform: "uppercase",
              letterSpacing: "0.04em",
              fontWeight: 700,
            }}
          >
            Account Brief
          </div>
        </div>

        {/* Bottom byline */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "monospace",
            fontSize: 22,
            color: "#A89F92",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          <span>By Jovan Marrero</span>
          <span>Candidate, SDR</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: fontData
        ? [{ name: "JBMono", data: fontData, weight: 700, style: "normal" }]
        : undefined,
    }
  );
}
