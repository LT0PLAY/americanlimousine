import { NextResponse } from "next/server";

export const revalidate = 60 * 10; // alle 10 min neu (ISR Cache)

type IgMedia = {
  id: string;
  caption?: string;
  media_url?: string;
  permalink: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  thumbnail_url?: string;
  timestamp?: string;
};

export async function GET() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  const userId = process.env.INSTAGRAM_USER_ID;

  if (!token || !userId) {
    return NextResponse.json(
      { error: "Missing INSTAGRAM_ACCESS_TOKEN or INSTAGRAM_USER_ID" },
      { status: 500 }
    );
  }

  // Instagram Graph API (Business/Creator)
  const url =
    `https://graph.instagram.com/${userId}/media` +
    `?fields=id,caption,media_url,permalink,media_type,thumbnail_url,timestamp` +
    `&access_token=${encodeURIComponent(token)}`;

  const res = await fetch(url, { next: { revalidate } });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    return NextResponse.json(
      { error: "Instagram fetch failed", detail: text },
      { status: 500 }
    );
  }

  const json = await res.json();

  const items: IgMedia[] = Array.isArray(json?.data) ? json.data : [];

  // Fallback: VIDEO ohne media_url -> thumbnail_url benutzen
  const normalized = items
    .map((m) => ({
      ...m,
      displayUrl:
        m.media_type === "VIDEO" ? (m.thumbnail_url ?? m.media_url) : m.media_url,
    }))
    .filter((m) => !!m.displayUrl);

  return NextResponse.json({ items: normalized });
}