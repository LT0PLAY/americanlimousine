import styles from "./GalleryPage.module.css";
import GalleryHeader from "@/components/gallery/GalleryHeader";

type IgItem = {
  id: string;
  caption?: string;
  permalink: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  displayUrl: string;
};

async function getFeed(): Promise<IgItem[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL ?? ""}/api/instagram`, {
    cache: "no-store",
  }).catch(() => null);

  if (!res || !res.ok) return [];
  const json = await res.json();
  return Array.isArray(json?.items) ? json.items : [];
}

export default async function GalleryPage() {
  const items = await getFeed();

  return (
    <main className={styles.page}>
      {/* ✅ Header als eigenes Component */}
      <GalleryHeader />

      <section className={styles.grid} aria-label="Instagram Feed">
        {items.length === 0 ? (
          <div className={styles.empty}>Feed konnte nicht geladen werden. (Token/Setup prüfen)</div>
        ) : (
          items.map((it) => (
            <a
              key={it.id}
              className={styles.card}
              href={it.permalink}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram Post öffnen"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className={styles.img} src={it.displayUrl} alt={it.caption ?? "Instagram Post"} loading="lazy" />
              <div className={styles.overlay}>
                <div className={styles.badge}>{it.media_type === "VIDEO" ? "Video" : "Post"}</div>
              </div>
            </a>
          ))
        )}
      </section>
    </main>
  );
}