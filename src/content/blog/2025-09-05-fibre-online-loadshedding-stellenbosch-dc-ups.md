---
title: "Keep your fibre online during load-shedding in Stellenbosch: DC-UPS sizing guide"
description: "Fibre down during load-shedding? Learn how to size a DC-UPS for your ONT + router, keep Wi-Fi running, and avoid downtime in Stellenbosch."
pubDate: "2025-09-05"
updatedDate: "2025-09-05"
author: "Digissential Team"
tags: ["fibre loadshedding", "dc ups", "stellenbosch", "wifi router", "backup power"]
draft: false
canonical: "https://digissential.co.za/resources/fibre-online-loadshedding-stellenbosch-dc-ups/"
howTo:
  title: "Sizing a DC-UPS for your ONT + router"
  steps:
    - "Check power ratings on the ONT (fibre box) and router — usually 6–12V at 1–2A each."
    - "Add up watts: W = V × A. Example: 12V × 1A = 12W."
    - "Multiply by runtime hours. Example: 20W × 4h = 80Wh."
    - "Choose a DC-UPS with ≥20% extra capacity (≈100Wh for 4h runtime)."
    - "Connect ONT + router to the DC-UPS outputs; test before the next load-shedding slot."
faq:
  - q: "Why does my fibre drop during load-shedding?"
    a: "The ONT (fibre box) and router both need power. Without a UPS, they shut off as soon as Eskom cuts power."
  - q: "What size DC-UPS do I need?"
    a: "Most Stellenbosch setups use ~20–25W. For 4 hours runtime, aim for 100Wh capacity."
  - q: "What’s the difference between AC and DC UPS?"
    a: "DC-UPS units run more efficiently for ONTs/routers (no AC→DC conversion). AC UPS is bulkier and better for PCs."
  - q: "How much do DC-UPS units cost in Stellenbosch?"
    a: "Entry-level DC-UPS: R800–R1,200. Mid-range: R1,500–R2,500. High-capacity/lithium: R3,000+."
  - q: "Can Digissential install this for me?"
    a: "Yes. We set up UPS units, optimise Wi-Fi, and offer remote/device health checks to prevent downtime."
---

> **TL;DR:** Fibre goes down during load-shedding because ONTs and routers lose power. A small DC-UPS (≈100Wh) keeps Wi-Fi alive for 4 hours in Stellenbosch rentals and offices.

## Why fibre fails during load-shedding

Even if your ISP’s network stays online, your **ONT (fibre box)** and **Wi-Fi router** both shut down without backup power.  
This leaves students offline during exams and SMEs unable to process card payments.

---

## How to size your DC-UPS

1. **Check device labels**  
   ONT: 12V × 1A (≈12W)  
   Router: 12V × 1A (≈12W)  
   → Total ≈24W  

2. **Calculate runtime**  
   Load (24W) × Hours (4h) = 96Wh  

3. **Add headroom**  
   Choose a UPS with at least 20% more capacity → ~120Wh unit.  

4. **Choose DC vs AC UPS**  
   - **DC-UPS**: efficient, compact, ideal for ONT/router.  
   - **AC UPS**: powers full PCs, but bulkier/less efficient for routers.  

5. **Plug & play tips (rentals)**  
   - Keep old power adapters in case you move out.  
   - Label cables for ONT vs router.  
   - Test after installation — don’t wait for load-shedding.  

---

## Price bands in Stellenbosch (ZAR)

- **Entry-level (2–3h runtime, lead-acid):** R800–R1,200  
- **Mid-range (4h runtime, lithium DC-UPS):** R1,500–R2,500  
- **High-capacity (8h runtime or dual routers):** R3,000+  

---

## When to call Digissential

- Fibre keeps dropping even though UPS is installed.  
- Router overheats or restarts during load-shedding.  
- You need stable Wi-Fi for POS systems in cafés/wine farms.  

We provide:  
- [Wi-Fi/Network Setup](/services/wifi-network-setup/)  
- [Remote Support](/services/remote-support-setup/)  
- [Quarterly Device Health Check](/services/device-health-check/)  
- [Data Backup (Image)](/services/data-backup-recovery/)  

---

## FAQs

**Q: Why does my fibre drop during load-shedding?**  
A: The ONT (fibre box) and router both need power. Without a UPS, they shut off as soon as Eskom cuts power.

**Q: What size DC-UPS do I need?**  
A: Most Stellenbosch setups use ~20–25W. For 4 hours runtime, aim for 100Wh capacity.

**Q: What’s the difference between AC and DC UPS?**  
A: DC-UPS units run more efficiently for ONTs/routers (no AC→DC conversion). AC UPS is bulkier and better for PCs.

**Q: How much do DC-UPS units cost in Stellenbosch?**  
A: Entry-level DC-UPS: R800–R1,200. Mid-range: R1,500–R2,500. High-capacity/lithium: R3,000+.

**Q: Can Digissential install this for me?**  
A: Yes. We set up UPS units, optimise Wi-Fi, and offer remote/device health checks to prevent downtime.

---

**Compliance & trust:**  
- [Standard Fees](/legal/standard-fees/)  
- [On-Site Safety Checklist](/legal/on-site-safety-checklist/)  
- [Privacy & POPIA Notice](/legal/privacy-popia-processing-notice/)  

External references:  
- [eWASA – E-Waste Association of SA](https://ewasa.org/)  
- [MWeb Fibre Stellenbosch](https://www.mweb.co.za/)  

*Updated on 2025-09-05.*
