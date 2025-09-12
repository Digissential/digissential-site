// src/lib/serviceMedia.ts
// Central place to map service slugs (and aliases) to images + alt text.

type Media = { src: string; alt: string };

const BASE = "/images/services/";
const img  = (f: string) => `${BASE}${f}`;

/** ── Optional manual map (fill in or leave empty) ───────────────────── */
export const MEDIA: Record<string, Media> = {
  // Examples – keep/edit/add as you like:
  "laptop-screen-replacement": {
    src: img("stellenbosch-laptop-screen-repair-digissential.webp"),
    alt: "A close-up shot of a technician expertly replacing a cracked laptop screen.",
  },
  "laptop-battery-replacement": {
    src: img("stellenbosch-laptop-battery-replacement-digissential.webp"),
    alt: "A new laptop battery being installed in a thin-and-light notebook.",
  },
  "virus-malware-removal": {
    src: img("stellenbosch-malware-virus-removal-digissential.webp"),
    alt: "Security scan running on a laptop during a professional malware cleanup.",
  },
  "data-recovery": {
    src: img("stellenbosch-data-recovery-digissential.webp"),
    alt: "Technician cloning a failing drive for safe data recovery.",
  },
  "wifi-network-troubleshooting": {
    src: img("stellenbosch-wifi-network-troubleshooting-digissential.webp"),
    alt: "Router and laptop during a Wi-Fi troubleshooting session.",
  },
  "remote-it-support": {
    src: img("stellenbosch-remote-it-support-digissential.webp"),
    alt: "Remote IT support session on a laptop with headset and tools.",
  },
  "hinge-chassis-tighten-service": {
  src: img("stellenbosch-hinge-chassis-tighten-service-digissential.webp"),
  alt: "Tightening a laptop hinge and chassis screws on the bench.",
  },
  "laptop-keyboard-replacement": {
    src: img("stellenbosch-laptop-keyboard-replacement-digissential.webp"),
    alt: "Replacing a laptop keyboard with proper ESD care.",
  },
  "os-burn-in-add-on": {
    src: img("stellenbosch-os-burn-in-add-on-digissential.webp"),
    alt: "OS burn-in tests running after a fresh Windows install.",
  },
  "pc-assembly-full-build": {
    src: img("stellenbosch-pc-assembly-full-build-digissential.webp"),
    alt: "Assembling a new PC build with neat cable management.",
  },
  "mesh-wifi-planning-install": {
    src: img("stellenbosch-mesh-wifi-planning-install-digissential.webp"),
    alt: "Planning and installing a mesh Wi-Fi system in a home.",
  },
  "cybersecurity-hardening": {
    src: img("stellenbosch-cybersecurity-hardening-digissential.webp"),
    alt: "Applying Windows security baselines and hardening.",
  },
  "labour-after-hours-emergency": {
    src: img("stellenbosch-labour-after-hours-emergency-digissential.webp"),
    alt: "Emergency after-hours IT support in progress.",
  },
  "labour-standard-hours": {
    src: img("stellenbosch-labour-standard-hours-digissential.webp"),
    alt: "Standard bench labour for diagnostics and repairs.",
  },
  "on-site-surcharge-within-20km": {
    src: img("stellenbosch-on-site-surcharge-within-20km-digissential.webp"),
    alt: "On-site visit within 20 km of Stellenbosch.",
  },
  "software-installation-standard": {
    src: img("stellenbosch-software-installation-standard-digissential.webp"),
    alt: "Installing standard desktop software on a workstation.",
  },
};

/** ── Optional aliases (fill in or leave empty) ──────────────────────── */
export const ALIAS: Record<string, string> = {
  // Common label/slug drift:
  "battery-replacement": "laptop-battery-replacement",
  "laptop-screen-repair": "laptop-screen-replacement",
  "windows-os-reinstall-with-backup": "os-reinstall-windows-with-backup",
  "windows-os-reinstall-without-backup": "os-reinstall-windows-without-backup",
  "windows-os-reinstall-no-backup": "os-reinstall-windows-without-backup",
  "windows-os-reinstall-data-backup": "os-reinstall-windows-with-backup",
  "new-pc-laptop-setup": "workstation-setup-new-or-reset",
  "hardware-diagnostics-extended": "diagnostic-in-shop",
  "malware-virus-removal": "virus-malware-removal",
  "data-migration": "data-migration-new-machine",
  "speedup-tuneup": "local-tune-up-speed-up",
  "windows-reinstall": "os-reinstall-windows-without-backup",
  "data-backup-basic": "data-backup-standard-files",
  "windows-reinstall-and-backup": "os-reinstall-windows-with-backup",
  "custom-pc-build-advice": "custom-pc-build-consultation",
  "gpu-cpu-upgrade-labour": "gpu-cpu-upgrade",
  "expedited-service-fee": "expedited-service-ticket",
  "pickup-dropoff-within-10km": "pickup-drop-off-local",
  "password-reset-windows-local": "windows-password-reset-consent-only",
  "software-installation-bulk": "software-install-bulk-per-device",
  "quarterly-device-health-check-remote": "tune-up-remote",
};

/** Normalise any key/slug to the canonical slug we store in MEDIA */
export function resolveSlug(keyOrSlug: string): string {
  const k = (keyOrSlug || "").trim().toLowerCase();
  return ALIAS[k] || k;
}

/** ── Filesystem fallback: look for convention file names ────────────── */
import fs from "node:fs";
import path from "node:path";

const SERVICES_DIR = path.resolve(process.cwd(), "public", "images", "services");
const AVAILABLE = (() => {
  try { return new Set(fs.readdirSync(SERVICES_DIR)); }
  catch { return new Set<string>(); }
})();

const patternFor = (slug: string) => `stellenbosch-${slug}-digissential.webp`;
const hasFile = (file: string) => AVAILABLE.has(file);

/** Return image+alt for a service (key or slug). Null if unknown. */
export function mediaForService(
  keyOrSlug: string,
  explicitSlug?: string,
  fallbackTitle?: string
): Media | null {
  const resolved = resolveSlug(explicitSlug || keyOrSlug);

  // 1) manual mapping
  const m = MEDIA[resolved];
  if (m) return m;

  // 2) naming-convention fallback
  const candidate = patternFor(resolved);
  if (hasFile(candidate)) {
    return {
      src: img(candidate),
      alt: `${fallbackTitle || resolved} — Digissential`,
    };
  }

  if (import.meta.env.DEV) {
    console.warn(`[serviceMedia] No media for slug "${resolved}" (from "${keyOrSlug}")`);
  }
  return null;
}

/** Slugs with neither manual mapping nor a matching file */
export function missingMedia(slugs: string[]): string[] {
  return slugs
    .map(resolveSlug)
    .filter((s, i, arr) => arr.indexOf(s) === i)
    .filter(s => !MEDIA[s] && !hasFile(patternFor(s)));
}
