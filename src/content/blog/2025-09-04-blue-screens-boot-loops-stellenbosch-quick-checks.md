---
title: "Blue screens & boot loops in Stellenbosch: quick checks before you bring it in"
description: "Stellenbosch BSOD & boot-loop guide: safe checks (reseat RAM, Safe Mode, SMART), when to stop DIY to protect data, and same/next-day diagnostics."
pubDate: "2025-09-04"
updatedDate: "2025-09-04"
author: "Digissential Team"
tags: ["windows", "bsod", "boot loop", "stellenbosch"]
draft: false

hero:
  src: "/images/blog/blue-screens-boot-loops-stellenbosch-quick-checks/hero.webp"
  alt: "Windows laptop showing a BSOD while a technician prepares safe diagnostics in Stellenbosch"
ogImage: "/images/blog/blue-screens-boot-loops-stellenbosch-quick-checks/og-1200x630.jpg"
canonical: "https://digissential.co.za/blog/blue-screens-boot-loops-stellenbosch-quick-checks/"
noindex: false

howTo:
  title: "Safe quick checks for BSODs and boot loops (do these, then stop)"
  steps:
    - "Unplug extras: remove USB drives/dongles/SD cards and power-cycle once; many loops are caused by a bad peripheral."
    - "RAM reseat (towers/older laptops only): with power off and battery/plug removed, reseat RAM sticks and try a single stick at a time."
    - "Enter Safe Mode: Windows Recovery → Troubleshoot → Advanced options → Startup Settings → Restart → press 4 (Safe Mode). If it boots here, uninstall the last driver/app or Windows update."
    - "Disk SMART check: if you can boot (even to Safe Mode), check SMART/health with a vendor tool. If the disk shows Caution/Bad or clicks, **stop DIY** and book imaging."
    - "Memory test: run Windows Memory Diagnostic (reboot). Repeated RAM errors → stop and bring it in; don’t keep rebooting."
    - "If you can’t reach menus: try the external-display test (for suspected GPU) and one clean power-cycle only. Then book diagnostics to protect data."

faq:
  - q: "How fast can you diagnose in Stellenbosch?"
    a: "Most diagnostics are **same-day** or **next-day**, including near **Die Boord** and **Dalsig**. We’ll text you the plan and ETA after intake."
  - q: "Will I lose my files if Windows won’t boot?"
    a: "No—our process prioritises **imaging/backup first**, then repair or reinstall. We only proceed once you approve the plan."
  - q: "When should I stop trying fixes at home?"
    a: "If the drive clicks, SMART shows Caution/Bad, or every reboot BSODs with new codes—**stop**. Continued power-cycling can make recovery harder."
  - q: "Can you fix this remotely?"
    a: "If it still boots to desktop or Safe Mode with internet, we can stabilise remotely. Persistent boot loops or failing disks need in-shop care."
  - q: "What are typical outcomes and costs?"
    a: "Tune-up/driver cleanup: **R650–R1 200** (same-day). Clean reinstall with backup: **R950–R1 600** (same/next-day). Failing disks → clone + SSD quote after assessment."
---

> **TL;DR:** Try **one** clean power-cycle after unplugging USBs, reseat RAM (if accessible), check **Safe Mode**, and read **SMART** if possible. If disks look unhealthy or loops persist, **stop DIY**—we’ll image first, then fix.

## Common causes (and what helps)

| Symptom | Likely cause | Best next step |
|---|---|---|
| BSOD after driver/app install | Driver conflict / bad update | Boot Safe Mode → uninstall last driver/app; pause optional updates |
| Loop with storage thrash (100% disk) | Failing HDD/SSD or file-system errors | Protect data: book imaging & **[diagnostics](/services/diagnostic-in-shop/)** |
| Instant shut-off / random codes | RAM seating/faults; PSU on desktops | Reseat/test sticks; if errors persist, bring it in |
| Black screen after logo | GPU/driver or display path | External monitor test; if both screens fail, diagnostics |
| “Automatic Repair” loop | Corrupted OS/updates | We’ll repair or **[reinstall Windows with backup](/services/windows-reinstall-with-backup/)** |

> Repeating BSODs with **different** stop codes often points to storage/RAM instability. Every failed reboot risks data—call it early.

---

## What we do on the bench (data-first)

1) **Intake & quick tests**: power, RAM, SMART, temps, last-boot logs.  
2) **Image first** if storage is unstable, then recover from the image.  
3) **Fix path**: driver cleanup/tune-up → or **clean reinstall with backup** → or SSD swap if the drive is failing.  
4) **Report**: clear quote and ETA before spend.

Start here → **[Book a diagnostic](/services/diagnostic-in-shop/)**  
If files matter → **[Data recovery assessment](/services/data-recovery-simple-logical/)**  
Fresh start option → **[Windows reinstall with backup](/services/windows-reinstall-with-backup/)**  
Stuck right now? → **[Remote support session](/services/remote-support-setup/)**

---

## Prep before you come in (if the PC still turns on)

- **Back up** key folders to cloud/USB (stop at first error).  
- **Note the last change** (driver/app/Windows update).  
- **Bring the charger** and list of symptoms/BSOD codes.  
- **Avoid loops**—power off if errors continue.

---

## Final word

You don’t need ten reboots to “test.” Do the safe checks above once, then let us protect your data and stabilise the system with a same/next-day plan.

**Quick links**  
- [Diagnostics](/services/diagnostic-in-shop/) · [Data recovery assessment](/services/data-recovery-simple-logical/) · [Windows reinstall with backup](/services/windows-reinstall-with-backup/) · [Remote support session](/services/remote-support-setup/) · [Contact](/contact/)
