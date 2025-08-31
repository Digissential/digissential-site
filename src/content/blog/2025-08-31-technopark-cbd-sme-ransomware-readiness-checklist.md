---
title: "Technopark & CBD SMEs: the 30-minute ransomware/readiness checklist (POPIA-aware)"
description: "A 30-minute ransomware/readiness checklist for Stellenbosch SMEs: backups, MFA, updates, EDR basics, and an incident plan—with ZAR time/cost."
pubDate: "2025-08-31"
updatedDate: "2025-08-31"
author: "Digissential Team"
tags: ["cybersecurity", "SME IT", "stellenbosch", "ransomware"]
draft: false

hero:
  src: "/images/blog/technopark-cbd-sme-ransomware-readiness/hero.webp"
  alt: "SME owner in Stellenbosch reviewing a ransomware readiness checklist on a laptop"
ogImage: "/images/blog/technopark-cbd-sme-ransomware-readiness/og-1200x630.jpg"
canonical: "https://digissential.co.za/blog/technopark-cbd-sme-ransomware-readiness-checklist/"
noindex: false

faq:
  - q: "Are you POPIA-aware? Will you sign an NDA?"
    a: "Yes. We align with POPIA (purpose-limited access, least privilege, secure handling) and can sign an NDA. If we collect logs/artifacts during an incident, we store and transfer them securely."
  - q: "If we’re already hit, should we pay the ransom?"
    a: "We don’t recommend paying. Focus on containment, evidence preservation, restoration from clean backups, and notifications where required. We’ll help you build a restore path and improve controls."
  - q: "Can you help us prepare and respond remotely?"
    a: "Yes. We can harden endpoints, set up 3-2-1 backups, and create an incident plan via remote sessions. For on-site needs, we’ll coordinate a visit."
  - q: "How often should we run this checklist?"
    a: "Quarterly is a good rhythm. Pair it with our Quarterly Device Health Check so updates, backups and asset notes stay current."
  - q: "What does recovery usually cost?"
    a: "Preparation is far cheaper than response. Readiness takes minutes per device; incident work varies by scope. We give a clear quote before we proceed."
---

> **TL;DR:** In **30 minutes** you can materially cut ransomware risk: confirm **3-2-1 backups** (with a test restore), enforce **MFA**, run **updates**, deploy a light **EDR/AV**, and document **who to call**. We’ll help you do it—and keep it POPIA-aware.

## Who this is for
Stellenbosch SMEs around **Technopark** and the **CBD** with 5–50 devices who want practical controls that don’t blow the budget—and a clear **“what now?”** plan if something slips through.

---

## The 30-minute readiness checklist (with time & ZAR)

| Step | What to do | Time | Typical ZAR (remote) |
|---|---|:--:|:--:|
| 1. Backups (3-2-1) | Confirm one local + one off-site copy; **test-restore** 1 folder | 6–8 min | R90–R130 |
| 2. MFA everywhere | M365/Google, remote tools, admin portals; add break-glass account with MFA | 4–6 min | R60–R100 |
| 3. Updates/patches | OS + browser; driver/firmware where recommended | 5–7 min | R80–R120 |
| 4. EDR/AV sanity | Ensure a reputable AV/EDR is active & updating; remove duplicates | 4–5 min | R60–R90 |
| 5. Accounts & access | Remove leavers; audit local admins; disable unused RDP | 4–5 min | R60–R90 |
| 6. Email hygiene | Flag external mail; block auto-run macros; tighten spam/phishing | 3–4 min | R50–R80 |
| 7. Incident card | Who to call, what to collect, where backups live; store offline copy | 3–4 min | R50–R80 |

> Need help setting the foundation?  
> • Hardening baseline → **[Cybersecurity hardening baseline](/services/cybersecurity-hardening/)**  
> • 3-2-1 backups with a tested restore → **[Cloud backup setup](/services/cloud-backup-setup/)**  
> • Quarterly upkeep → **[Quarterly Device Health Check](/services/quarterly-device-health-check-remote/)**  
> • Hands-on help → **[Remote support session](/services/remote-support-setup/)**

---

## What “good enough” looks like (practical controls)

- **Backups:** One local (NAS/external) + one **off-site** (cloud). Run a **test restore** every quarter. Encrypt backups where supported.  
- **MFA:** Enforce on email/admin portals and remote tools. Keep a **break-glass** admin with strong MFA and documented recovery.  
- **Updates:** OS, browsers, and line-of-business apps. Firmware/BIOS only when recommended by OEM tools.  
- **EDR/AV:** Use one reputable solution—**not** two competing products. Confirm daily updates and weekly full scans.  
- **Access:** Remove leavers the **same day**. No shared admin passwords—use a password manager with shared vaults.  
- **Network posture:** Disable exposed **RDP** and UPnP; prefer VPN or zero-trust access.  
- **Email hygiene:** Block auto-run macros, show “External” banners, and train staff to report phish.  
- **Documentation:** A one-pager with contacts, backup locations, and device list makes incident triage much faster.  
- **POPIA awareness:** Limit technician access to what’s necessary; record purpose and retention; prefer local storage for sensitive logs.

---

## If something slips through (first hour playbook)

1. **Isolate** affected PCs (pull network, leave power on unless sparking/overheating).  
2. **Don’t reboot repeatedly**—you may lose volatile evidence and shadow copies.  
3. **Preserve evidence** (screenshots, filenames, ransom notes); note **time of first symptom**.  
4. **Check backups** and storage immutability; don’t connect backup drives to infected machines.  
5. **Call for help**—containment first, then confirm a clean restore path.  
   → Book **[Remote support](/services/remote-support-setup/)** or call **066 425 6314**.

---

## Budgeting: prevention vs reaction (realistic Stellenbosch ranges)

- **Readiness pass** (per device, remote): **R300–R550** depending on scope.  
- **Incident triage & recovery**: varies by device count and backup status; we’ll quote before proceeding.  
- **Ongoing care**: pair the checklist with our **Quarterly Device Health Check** for predictable upkeep.

---

## Privacy, logs & POPIA

During hardening or incidents, we access only what’s necessary, keep **audit notes**, and store any logs/artifacts **securely**. Ask about our privacy approach: **[Privacy](/privacy/)**.

---

## Quick links (book in minutes)

- [Cybersecurity hardening baseline](/services/cybersecurity-hardening/)  
- [Cloud backup setup](/services/cloud-backup-setup/)  
- [Remote support session](/services/remote-support-setup/)  
- [Quarterly Device Health Check](/services/quarterly-device-health-check-remote/)  
- [Privacy](/privacy/) · [Contact us](/contact/)

---

**Final word:** SMEs that **test-restore**, **enforce MFA**, **patch**, and **know who to call** recover fastest. Do the 30-minute pass this week—then keep it quarterly so you’re never starting from zero.
