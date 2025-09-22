---
title: "Stellenbosch Load-Shedding Survival: Keep Your Laptop & Wi-Fi Running"
description: "Keep working during load-shedding in Stellenbosch with DC-UPS tips, safe battery care, and our resilience checks for laptops and routers."
pubDate: "2025-09-22"
updatedDate: "2025-09-22"
author: "Digissential Team"
tags: ["load shedding", "wifi", "ups", "stellenbosch"]
draft: false
canonical: "https://digissential.co.za/blog/load-shedding-stellenbosch/"
howTo:
  title: "Size a DC-UPS for your ONT + router (safe, step-by-step)"
  steps:
    - "Find the exact models: look underneath your fibre ONT and Wi-Fi router. Note voltage (V) and power draw (W or A)."
    - "Add their watts: ONT W + router W = total load. If only amps are listed, multiply V × A to get watts."
    - "Pick a DC-UPS with matching outputs (e.g., 12V + 9V rails) and capacity stated in Wh (watt-hours)."
    - "Estimate runtime: Runtime (hours) ≈ Battery Wh ÷ (Total Watts × 1.2 for conversion losses). Aim for 3–4 hours."
    - "Cable correctly: match polarity and barrel size; disable extras (USB charge LEDs) to save power."
    - "Test at midday: simulate an outage by unplugging mains; confirm Wi-Fi stays up. Label the DC-UPS with date/devices."
faq:
  - q: "Will a standard power bank keep my Wi-Fi online?"
    a: "Most power banks provide 5V USB only; routers/ONTs typically need 9–12V DC. Use a DC-UPS with the correct voltage rails."
  - q: "Is a DC-UPS safer than a cheap AC inverter for routers?"
    a: "Usually yes. It avoids 230V AC conversion and reduces heat/waste. Ensure correct voltage, polarity, and adequate capacity."
  - q: "My laptop battery is swelling. Can I still use it during outages?"
    a: "No. Power down immediately. Swollen lithium cells are a fire risk. Book a safe replacement and lawful disposal."
  - q: "How long should I target for Wi-Fi runtime?"
    a: "At least one 2-hour stage. In Stellenbosch, 3–4 hours is a practical buffer for staggered schedules."
---

> **TL;DR:** A small **DC-UPS** keeps your **ONT + router** alive through load-shedding; a healthy, cool laptop battery handles the rest. If a battery is **swollen or weak**, stop using it and book a **safe replacement**. We can spec, install, and test your setup with clear ZAR guidance.

![Compact DC-UPS powering a fibre ONT and dual-band router on a shelf in a Stellenbosch apartment](/images/blog/stellenbosch-dc-ups-router-ont.webp)

Stellenbosch students and SMEs know the drill: when the power trips, productivity drops. The real risk is missed assignments, offline card readers, and meetings that stall. The good news is you don’t need a generator. A DC-UPS for Wi-Fi and a **resilient laptop setup** cover most outages—quietly and safely.

Below you’ll find the **simple sizing math**, **battery safety notes**, **runtime targets**, and **local ZAR expectations**. Need help today? We can handle **spec → install → test** and leave you with clear labels and an outage playbook.

---

## What you’ll learn (quick wins)

- How to **size a DC-UPS** for **ONT + router** with a realistic 3–4 hour target.  
- The **safe way** to run laptops during outages (battery health, thermals, power plans).  
- When to buy a **bigger pack** vs when to **fix the bottleneck** (old battery, dust, mis-set power profiles).  
- Where **Digissential** steps in: selection, installation, testing, and documentation.

---

## Identify the problems (you’ll recognise these)

- **Wi-Fi dies instantly** when load-shedding starts; mobile data is congested and expensive.  
- **Laptop battery drains fast** or shuts down at 20–30%.  
- **Random crashes** under Teams/Zoom/gaming due to **thermal throttling** or weak batteries.  
- **Different voltages** for ONT/router (e.g., 12V and 9V) mean USB power banks won’t work.  
- **Unsafe adapters** create heat risk—especially with **swollen cells**.

---

## Safe steps (do this in order)

1. **Map your loads.** Flip your router and ONT over and note **V** and **A**/**W**. If you see amps only, **V × A = W**. Typical: ONT ≈ 6–8W; router ≈ 8–12W.  
2. **Add watts** to get your **total load**. Example: ONT 7W + router 10W = **17W**.  
3. **Match voltages & polarity.** Choose a DC-UPS with the exact rails (e.g., 12V + 9V) and the right barrel sizes.  
4. **Pick capacity by runtime.** **Runtime (h) ≈ Battery Wh ÷ (Load W × 1.2)**. For 17W and a 90Wh pack: 90 ÷ (17 × 1.2) ≈ **4.4 h**.  
5. **Cable it right.** Use snug barrel tips, short cables, and labelled splitters; avoid daisy chains.  
6. **Test under load.** Unplug mains; run a speed test; confirm both ONT and router stay online through a full stage.  
7. **Harden your laptop.** See the resilience checklist below (battery, thermals, power plan, offline files).  
8. **Plan B.** Save your phone hotspot APN and a small data bundle as fallback—not your primary.

> These steps mirror the **HowTo** block in the front-matter so your schema stays truthful.

---

## Do-nots (safety first)

- Don’t keep using a **swollen** or **hot** battery. Power down; book a safe replacement and lawful disposal.  
- Don’t “guess” voltages—**overvoltage bricks gear**.  
- Don’t put DC-UPS units in enclosed cupboards or under blankets—**heat kills batteries**.  
- Don’t expect a tiny UPS to drive gaming loads; you’ll brown-out the system.

---

## Laptop resilience checklist (fast wins)

**Battery health**  
- If the laptop dies quickly or jumps from 30% → 0%, the pack is likely worn. Book **Battery Replacement (Labour)** to restore usable runtime.  

**Thermals**  
- Dust and aged thermal paste force throttling and shutdowns. If fans howl or the palm rest heats up, schedule a clean and paste.  

**Power plan & apps**  
- Windows: “Balanced”, lower brightness, turn off RGB and heavy background sync.  
- macOS: enable **Low Power Mode** for multi-hour sessions.  

**Data hygiene**  
- Enable **Offline Files** (or mark key folders Available Offline in OneDrive/Drive). Load-shedding isn’t the time to discover missing files.

---

## DC-UPS vs AC UPS: which and when?

- **DC-UPS (best for Wi-Fi):** Powers 12V/9V gear directly—**efficient, cool, quiet**.  
- **AC UPS:** Ideal for **desktops/monitors**, but inefficient for tiny router/ONT loads; fan noise and heat possible.  
- **Hybrid:** DC-UPS for Wi-Fi + internal laptop battery (healthy) or a **small AC UPS** if you must drive an external display.

---

## Time & cost in Stellenbosch (realistic bands)

- **Wi-Fi/Network Setup** (remote or in-shop): ≈ **R350** for configuration, security, optimisation (hardware separate).  
- **Battery Replacement (Labour):** ≈ **R450** (labour only; we quote the correct battery for your model).  
- **On-Site Surcharge** (within 20 km): ≈ **R300** for travel/logistics to install and test at your premises.  
- **Remote Support Setup:** ≈ **R150** to ready Quick Assist/AnyDesk so we can help during outages.  
- **After-Hours/Emergency Labour:** available; billed at published rates.

> Hardware (DC-UPS units, cables, splitters) is **quoted per model**. We supply the correct barrel tips, label everything, and leave a one-page outage card.

---

## When to stop DIY and call us

- **Swollen, leaking, or hissing battery** (immediate hazard).  
- **Voltage or polarity uncertainty** on ONT/router labels.  
- **Repeated shutdowns** on battery (likely pack wear or thermal fault).  
- **Wi-Fi drops** despite “perfect” settings (could be interference, failing PSU, bad ONT).

---

## Book help (fast)

- [**Battery Replacement (Labour)**](/services/battery-replacement/)  
- [**Wi-Fi/Network Setup**](/services/wifi-network-setup/)  
- [**Device Health Check**](/services/device-health-check/)

---

## FAQs

**Q: Can I power my laptop from the same DC-UPS as the router?**  
**A:** No. Laptops need different power delivery. Keep your **laptop on its own battery** or use a small **AC UPS** if you require an external display.

**Q: How many hours do I *really* need?**  
**A:** One full stage (2 h) minimum; **3–4 h** is a stress-free buffer for staggered schedules.

**Q: Will a bigger DC-UPS fix short laptop runtime?**  
**A:** No—DC-UPS feeds **ONT/router**. Short laptop runtime means **battery replacement** or thermal service.

**Q: Do you install for student digs and small offices?**  
**A:** Yes. We bring the right tips, label cables, test failover, and document the setup for quick troubleshooting.

---

**Compliance & trust**

- [**Standard Fees**](/legal/standard-fees/)  
- [**Privacy (POPIA)**](/legal/privacy-popia-processing-notice/)  
- [**Warranty & Returns**](/legal/warranty-returns/)  
- [**E-Waste Disposal Policy**](/legal/ewaste-disposal-policy/)  
- [**On-Site Safety Checklist**](/legal/on-site-safety-checklist/)

*Updated on 2025-09-22.*

![Labelled DC-UPS outputs feeding an ONT (12V) and router (9V) during a Stellenbosch outage](/images/blog/dc-ups-ont-router-labelled.webp)
