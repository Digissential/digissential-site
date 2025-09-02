---
title: "Load-shedding survival for laptops/PCs in Stellenbosch: how to size a UPS (with ZAR examples)"
description: "Stellenbosch UPS guide: watts vs VA, runtimes for laptops/PCs, safe shutdown and surge basics—when it’s worth it."
pubDate: "2025-09-02"
updatedDate: "2025-09-02"
author: "Digissential Team"
tags: ["UPS", "load-shedding", "Stellenbosch", "power"]
draft: false

hero:
  src: "/images/blog/stellenbosch-ups-sizing-loadshedding/hero.webp"
  alt: "Small UPS powering a laptop and router during load-shedding in a Stellenbosch apartment"
ogImage: "/images/blog/stellenbosch-ups-sizing-loadshedding/og-1200x630.jpg"
canonical: "https://digissential.co.za/blog/stellenbosch-ups-sizing-loadshedding/"
noindex: false

howTo:
  title: "How to size a UPS for your laptop/PC (quick steps)"
  steps:
    - "List what must stay on: e.g., laptop + monitor + router/ONT. Add each device’s watts (W) from the label/spec."
    - "Add 30–50% headroom and make sure the UPS’s **Watt (W)** rating exceeds your load. Treat **VA** as a sizing class only."
    - "Aim for enough runtime to save/exit (10–30 min). Bigger batteries = longer runtime; higher loads drain faster."
    - "Plug only essentials into the battery side (PC/monitor/router). Printers/heaters belong on surge-only or a separate plug."
    - "Connect the UPS USB cable and set auto-save/shutdown. Test a simulated outage once."
faq:
  - q: "What’s the difference between VA and Watts?"
    a: "VA is apparent power (sizing class). The **Watts** rating is the real usable output. Match your load to the **W** figure and keep 30–50% spare."
  - q: "How long will my PC last on a UPS?"
    a: "Depends on battery capacity and load. See the runtime table below. As a rule, lighter loads last longer; aged batteries shorten runtimes."
  - q: "Do laptops need a UPS?"
    a: "Often the laptop can ride an outage on its own battery, but keep the **router/ONT** on the UPS so your internet stays up. USB-C PD power banks are another option."
  - q: "Is a surge plug enough?"
    a: "Surge protection helps with spikes, but a UPS adds **battery + AVR** (voltage regulation) to ride dips and brief cuts. Use both for sensitive gear."
  - q: "Will a UPS work with a generator?"
    a: "Most line-interactive UPSes do, but cheap generators can produce ‘dirty’ power. Keep loads modest and check your UPS manual for generator compatibility."
---

> **TL;DR:** Choose a UPS by **Watts (not just VA)** with **30–50% headroom**, keep only essentials on battery, and expect **10–30 minutes** for safe saves/shutdown. Power the **router/ONT** too so Zoom/Teams keep working.

## What you actually need to keep on
- **Laptop + charger** (45–65 W typical; gaming 120–180 W under load)  
- **Desktop PC** (100–150 W idle, 300–500 W under load)  
- **24″ monitor** (20–30 W)  
- **Router + ONT** (8–15 W total)

If your goal is to finish an upload or exam, keep **laptop + router** powered. For desktops, plan enough time to **save and shut down cleanly**.

---

## Sizing rules (no maths degree required)
1. **Sum the Watts** of what you’ll plug into the battery sockets.  
2. **Headroom:** multiply by **1.3–1.5**. That’s your **minimum UPS Watt rating**.  
3. **VA vs W:** manufacturers list **VA / W** (e.g., 1500 VA / 900 W). Always match to **W**.  
4. **Runtime target:** 10–30 min is enough for safe shutdowns and short calls. Longer needs a bigger battery (or fewer devices).

---

## Example runtimes (typical consumer UPS classes)

> Real runtimes vary by brand, battery size/age, temperature and inverter efficiency. Treat these as ballparks.

| Load (what you power) | 650 VA / ~360 W (1×7 Ah) | 1000 VA / ~600 W (2×7 Ah) | 1500 VA / ~900 W (2×9 Ah) |
|---|---:|---:|---:|
| **Laptop 45 W + router 10 W ≈ 55 W** | 45–70 min | 90–120 min | 110–150 min |
| **Laptop 65 W + monitor 25 W ≈ 90 W** | 25–40 min | 60–90 min | 80–110 min |
| **Desktop idle 150 W + monitor 25 W ≈ 175 W** | 10–18 min | 28–45 min | 40–65 min |
| **Desktop 300 W (light load)** | 6–10 min | 18–30 min | 28–45 min |
| **Desktop 400 W (heavier)** | — (over many 650 VA W limits) | 8–15 min | 15–25 min |

**Tip:** For desktops, a **1000–1500 VA** class makes sense. For laptops, even a **650 VA** can give you an hour if you only power the **router + laptop**.

---

## Safe setup & shutdown (do this once)
- **Battery vs surge sockets:** only essential gear on the **battery** side. Printers/lamps → **surge-only**.  
- **USB cable to PC:** install the UPS app so Windows/macOS can **auto-save and shut down** at, say, 5–10 minutes remaining.  
- **Protect the network path:** if possible, use a surge-protected Ethernet or keep the **ONT + router** on the UPS to avoid dropouts.  
- **Test day one:** pull the plug for 2–3 minutes and watch the system behave. Adjust timings as needed.

Need help configuring it? Book a **[Remote support session](/services/remote-support-setup/)**.

---

## When a UPS pays for itself
- **Exams/interviews & billable calls** (keep Zoom/Teams stable)  
- **Avoiding file corruption** during save/update/install  
- **Routers/ONTs** that drop power during short dips  
- **Desktops with HDDs** (graceful shutdown prevents filesystem repairs later)

Pair it with a quarterly check so batteries don’t silently degrade: **[Quarterly Device Health Check](/services/quarterly-device-health-check-remote/)**.

---

## Backups still matter (UPS ≠ backup)
A UPS buys you time. It doesn’t replace backups. We can set up **full-image or cloud backups** and test a restore with you.  
→ **[Cloud backup setup](/services/cloud-backup-setup/)**

---

## FAQs

**How big should my UPS be for a gaming PC?**  
Add up your **worst-case** load (PC + monitor). Many gaming rigs sit well above **300 W** under load—look at **1500 VA / ~900 W** class for 10–20 minutes.

**My laptop lasts hours—do I still need a UPS?**  
You might only need to power the **router/ONT** so your connection stays up. A small 650 VA works well for that.

**Will a UPS fix tripping breakers?**  
No—solve the underlying electrical issue. A UPS smooths short dips/spikes and keeps devices up briefly.

**How long do UPS batteries last?**  
Typically **2–4 years**. Heat and deep discharges shorten life. We can swap batteries and test your unit during a **Device Health Check**.

**Can you help me choose?**  
Yes—send your device list (Watts if you can) and we’ll recommend a size and brand. Start a **[Remote support session](/services/remote-support-setup/)** or ask via **[Contact us](/contact/)**.

---

## Quick links
- [Remote support session](/services/remote-support-setup/)  
- [Quarterly Device Health Check](/services/quarterly-device-health-check-remote/)  
- [Cloud backup setup](/services/cloud-backup-setup/)  
- [Contact us](/contact/)
