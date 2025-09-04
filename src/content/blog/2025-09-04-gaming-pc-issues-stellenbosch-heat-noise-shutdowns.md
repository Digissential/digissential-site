---
title: "Gaming PC issues in Stellenbosch: heat, noise & random shutdowns (fast triage)"
description: "Stellenbosch gaming PC triage: heat, noise and random shutdowns—airflow clues, safe stress-tests, when to repaste or swap fans, plus realistic ZAR ranges."
pubDate: "2025-09-04"
updatedDate: "2025-09-04"
author: "Digissential Team"
tags: ["gaming pc", "overheating", "stellenbosch", "hardware"]
draft: false

hero:
  src: "/images/blog/gaming-pc-issues-stellenbosch-heat-noise-shutdowns/hero.webp"
  alt: "Open gaming PC on a workbench with dust cleaning and temperature monitoring tools"
ogImage: "/images/blog/gaming-pc-issues-stellenbosch-heat-noise-shutdowns/og-1200x630.jpg"
canonical: "https://digissential.co.za/blog/gaming-pc-issues-stellenbosch-heat-noise-shutdowns/"
noindex: false

howTo:
  title: "Fast, safe triage for heat, noise & shutdowns"
  steps:
    - "Visual & dust check: with the PC off and unplugged, remove side panel; look for dust mats in front filters, heatsinks and PSU intake. Clean with short air bursts; hold fans still while cleaning."
    - "Monitor temps at idle and load: install a vendor tool or HWInfo; GPU ≤ 85 °C and CPU ≤ 90 °C under load are typical targets. If temps spike instantly, reseat coolers or replace paste/pads."
    - "Airflow sanity: front/bottom = intake; top/rear = exhaust. Ensure at least one front intake and one rear/top exhaust; match fan direction arrows."
    - "Safe load tests: run a 10–15 min CPU-only test (e.g., Cinebench) then a GPU-only test (e.g., Unigine/3DMark). If **CPU-only** crashes → CPU/VRM/PSU; if **GPU-only** crashes → GPU/PSU/PCIe cable."
    - "Power leads & seating: check separate 8-pin/6-pin PCIe leads to the GPU (no splitters if avoidable), RAM fully latched, and CPU cooler pressure even. Don’t open the PSU—bench test instead."
    - "When to stop DIY: burning smell, clicking drives, or shutdowns under any load → book diagnostics; image data first if storage errors appear."
faq:
  - q: "How much does a thermal paste & deep clean cost, and how long?"
    a: "Typical R650–R1 200 for a desktop deep clean and repaste (model-dependent), usually same/next-day. We replace pads if required and correct fan curves."
  - q: "Do I need new fans or just repaste?"
    a: "If temps are high but fans sound smooth, repaste often fixes it. Grinding/clicking or wobble = replace fans. We’ll confirm after diagnostics."
  - q: "Random shutdowns—PSU or GPU?"
    a: "If CPU-only tests pass but GPU tests shut down the PC, suspect **GPU or PSU**. If both CPU- and GPU-only runs are stable but combined loads fail, PSU is most likely."
  - q: "Will I lose my data?"
    a: "Thermal work doesn’t touch storage, but if SMART warnings or file errors appear we **image first**. We can back up before any work."
  - q: "Can you help on the day?"
    a: "Diagnostics are often **same-day** near Eikestad/Technopark. We’ll text you an ETA and plan after check-in."
---

> **TL;DR:** Clean the dust, verify **intake/exhaust**, log temps under CPU-only and GPU-only loads, and check power leads. **Repaste + deep clean** fixes most heat/noise. Mixed-load shutdowns often point to the **PSU**. If errors persist, stop DIY and book diagnostics.

## Symptoms → likely causes (plain-English)

| Symptom | Likely cause | Quick next step |
|---|---|---|
| Fan roar, temps >90 °C, clocks throttling | Dust-clogged filters/heatsinks; old paste; reversed airflow | Clean filters/heatsinks; verify fan direction; repaste |
| Rattling/whine, no change in temps | Worn bearings or cheap fans | Replace case/GPU fans; set sane curves |
| Shutdowns on GPU test only | PSU rails/cables or GPU thermals/VRM | Try separate PCIe leads; log GPU temps; if repeat, bench test |
| Shutdowns on any load, random reboots | Ageing PSU or motherboard VRM | Bench PSU; inspect board for bulging caps; diagnostics |
| Instant spike to 100 °C then throttle | CPU cooler mounting or paste voids | Re-seat cooler; quality paste; even pressure |

---

## What we actually do on the bench (data-first, no guesswork)

1) **Intake & dust/airflow map** — filters, fin stacks, case pressure.  
2) **Thermal logging** — idle/load curves, fan RPM, hotspot deltas.  
3) **Repaste & pad check** — CPU (and GPU if needed), correct torque, fresh pads if compressions are poor.  
4) **Fan/curve tuning** — quiet at idle, ramp under load, no oscillation.  
5) **PSU/GPU ruling-in** — isolated CPU vs GPU stress, separate PCIe rails, bench PSU if combined loads trip.  
6) **Report** — temps before/after, parts needed, and a realistic ETA.

---

## Realistic ZAR time/cost bands (Stellenbosch)

> Final quotes depend on model, parts and stock. We’ll confirm after diagnostics.

| Service | Typical ZAR | Turnaround | Notes |
|---|---:|:--:|---|
| **Thermal paste & deep clean (desktop)** | R650–R1 200 | Same/next-day | Includes fin/mesh clean, paste, curve tune → [Thermal paste & deep clean](/services/thermal-paste-deep-clean/) |
| **Case/GPU fan replacement** | R300–R900 labour (+ fan) | Same/next-day | Price varies by fan size/quality; GPU fans model-specific |
| **PSU swap (like-for-like)** | R450–R800 labour (+ PSU) | Same/next-day | We’ll size correctly and re-route clean separate PCIe leads |
| **Diagnostics (power/thermals)** | R350–R600 | Same-day | Data-first; written plan/ETA → [Diagnostics](/services/diagnostic-in-shop/) |
| **CPU/GPU upgrade (labour)** | R600–R1 200 | Same/next-day | Includes paste, BIOS/driver sanity → [GPU/CPU upgrade](/services/gpu-cpu-upgrade-labour/) |

---

## Keep it cool (simple rules that work)

- **Front/bottom intake, top/rear exhaust.** Try to keep intakes filtered.  
- **Positive pressure** (slightly more intake CFM) reduces dust inside.  
- **Cable tidy** to keep a clear front-to-back air channel.  
- **Quality paste/pads** and **even cooler pressure** beat ultra-thick paste.  
- **Separate PCIe leads** to the GPU; avoid splitters on high-draw cards.

---

## Ready to fix it the right way?

- **Deep clean & repaste** → [Thermal paste & deep clean](/services/thermal-paste-deep-clean/)  
- **Rule in/out PSU/GPU quickly** → [Diagnostics](/services/diagnostic-in-shop/)  
- **Plan an upgrade path** → [GPU/CPU upgrade](/services/gpu-cpu-upgrade-labour/)  
- **Can’t get to us?** → [Remote support session](/services/remote-support-setup/)

---

## FAQs (fast answers)

**Do you repaste GPUs as well as CPUs?**  
Yes—when temps or throttling suggest paste/pad degradation. We’ll quote pads if needed.

**My fans are loud even after cleaning—replace or re-curve?**  
If bearings buzz or wobble, replace. Otherwise, we’ll set a smarter curve to cut idle noise.

**Will a bigger case help?**  
Often yes: more front intake and space for top exhaust = lower noise at the same temps.

**Do you service in exam week/weekends?**  
We offer **expedited** and **after-hours** options when available. Ask on **[Diagnostics](/services/diagnostic-in-shop/)**.

---

## Final word

Most gaming PC pain is **dust + airflow + ageing paste**. Tidy that first; if shutdowns persist under combined loads, we’ll bench the **PSU/GPU** and give you a clear, local plan—without risking your data.
