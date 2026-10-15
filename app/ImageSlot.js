import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import styles from "./page.module.css";

// Any of these file types will be picked up automatically.
const EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];

// Looks in public/images for a file with this name (any extension above).
// Returns its web address, e.g. "/images/portrait.jpg", or null if it isn't there yet.
function findImage(name) {
  for (const ext of EXTENSIONS) {
    const file = path.join(process.cwd(), "public", "images", name + ext);
    if (fs.existsSync(file)) return `/images/${name}${ext}`;
  }
  return null;
}

// Shows an image at its natural proportions (never cropped).
// If the file hasn't been added yet:
//   - on your computer (npm run dev) it shows a labelled placeholder box
//   - on the published site it shows nothing at all
export default function ImageSlot({ image, variant, priority = false }) {
  if (!image) return null;

  const src = findImage(image.file);
  const className = `${styles.imageSlot} ${styles[variant] || ""}`;

  if (!src) {
    if (process.env.NODE_ENV !== "development") return null;
    return (
      <div className={`${className} ${styles.placeholder}`}>
        <span className={styles.placeholderLabel}>{image.label}</span>
        <code>public/images/{image.file}.jpg</code>
        {image.optional && <span className={styles.placeholderNote}>optional</span>}
      </div>
    );
  }

  return (
    <div className={className}>
      <Image
        src={src}
        alt={image.alt}
        width={1200}
        height={1200}
        sizes="(max-width: 700px) 100vw, 600px"
        priority={priority}
      />
    </div>
  );
}
