import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

async function loadFont() {
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

export default async function Icon() {
  const fontData = await loadFont().catch(() => null);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#141110",
          color: "#EDE7DA",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 22,
          fontFamily: fontData ? "JBMono" : "monospace",
          fontWeight: 700,
          letterSpacing: "-0.02em",
        }}
      >
        A
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
