---
title: "Technopark SMEs: email security essentials (MFA + SPF/DKIM/DMARC) — POPIA-aware starter guide"
description: "Technopark SME email security: MFA plus SPF/DKIM/DMARC basics, quick checks, low-effort wins, and a POPIA-aware incident plan."
pubDate: "2025-09-02"
updatedDate: "2025-09-02"
author: "Digissential Team"
tags: ["email security", "DMARC", "MFA", "Stellenbosch", "SME IT"]
draft: false

hero:
  src: "/images/blog/technopark-smes-email-security-essentials/hero.webp"
  alt: "Stellenbosch Technopark office dashboard showing MFA and DMARC policies"
ogImage: "/images/blog/technopark-smes-email-security-essentials/og-1200x630.jpg"
canonical: "https://digissential.co.za/blog/technopark-smes-email-security-essentials/"
noindex: false

faq:
  - q: "Are you POPIA-aware and can you sign an NDA?"
    a: "Yes. We follow least-privilege access, purpose limitation and secure handling for logs/artifacts. We can sign an NDA; ask if your client requires it."
  - q: "We use Microsoft 365/Google Workspace—do we still need SPF/DKIM/DMARC?"
    a: "Yes. MFA protects accounts; SPF/DKIM/DMARC protect your domain’s reputation and help receivers block spoofing."
  - q: "What DMARC policy should we start with?"
    a: "Begin with p=none to monitor. Fix alignment issues, then move to p=quarantine and eventually p=reject once legitimate senders are aligned."
  - q: "Can you help remotely?"
    a: "Yes. We deploy MFA, enable DKIM, publish SPF/DMARC records and validate alignment in a remote session."
  - q: "Will this block all phishing?"
    a: "No single control does. Combine MFA, good filtering, user awareness and strong domain policies for layered protection."
---

> **TL;DR:** Turn on **MFA** for every mailbox/admin. Publish **SPF**, enable **DKIM**, and deploy **DMARC** (monitor → quarantine → reject). These cut spoofing, protect your brand and reduce risk under **POPIA**. We can set this up **remotely** for Technopark & CBD SMEs.

## What these controls do (plain English)

- **MFA (Multi-Factor Authentication)** — Stops most password-only takeovers. Protect **all** users, especially admins and finance.  
- **SPF (Sender Policy Framework)** — Tells the world which servers may send mail **for your domain**.  
- **DKIM (DomainKeys Identified Mail)** — Cryptographic signature proving your mail wasn’t altered and really came from you.  
- **DMARC (Domain-based Message Authentication, Reporting & Conformance)** — Policy that says “if SPF/DKIM don’t align with my domain, quarantine/reject it,” and sends you reports.

---

## Quick checks (5–10 minutes)

1) **MFA status**  
   - M365: Enforce **Security Defaults** or Conditional Access; ensure **all users** have MFA (incl. shared/mailbox users via app passwords where needed).  
   - Google Workspace: Turn on **2-Step Verification** and enforce for all.

2) **SPF record**  
   - Publish **one** SPF TXT record at root (e.g., `v=spf1 include:spf.protection.outlook.com -all`). Avoid multiple SPF records.

3) **DKIM**  
   - Enable in M365/Google admin; publish the two **CNAME** records the console gives you; switch DKIM to **ON**.

4) **DMARC**  
   - Start with monitoring:  
     ```
     _dmarc.yourdomain.tld TXT "v=DMARC1; p=none; rua=mailto:dmarc@yourdomain.tld; fo=1"
     ```  
   - After fixing alignment, move to `p=quarantine`, then `p=reject`.

5) **Disable legacy auth**  
   - Block POP/IMAP/SMTP AUTH where possible; these bypass modern MFA.

Need a hand? Book a **[Remote support session](/services/remote-support-setup/)**.

---

## Low-effort wins with big impact

- **MFA everywhere** (admins first), plus a **break-glass** admin with strong MFA and documented recovery.  
- **Single outbound path**: send all mail via your main provider; avoid random third-party senders unless included in SPF and DKIM-signed.  
- **User display-name warnings**: show “External” banners to reduce impersonation clicks.  
- **Finance playbook**: require a **second channel** (call/SMS) for bank detail changes and urgent payment requests.  
- **Backups**: ensure mail/calendar/Drive/OneDrive are backed up—malware and deletions still happen. See **[Cloud backup setup](/services/cloud-backup-setup/)**.

---

## POPIA-aware posture (why it matters)

Email often contains **personal information**. Under POPIA you must secure it: strong access controls (MFA), minimal retention, and auditable changes. We document what we touch, restrict technician access, and store any logs/artifacts securely. Read more: **[Privacy](/privacy/)**.

---

## If something slips through (first-hour plan)

1. **Isolate** the account: reset password, revoke sessions/tokens, and disable external forwarding.  
2. **Preserve evidence**: note timestamps, IPs, suspicious rules.  
3. **Enable litigation hold/retention** temporarily if available.  
4. **Reset MFA** and re-enrol the user.  
5. **Notify** affected parties where appropriate; restore from backup if mailbox tampering occurred.  
   → Need help now? **[Remote support session](/services/remote-support-setup/)**

---

## Ready to harden in under an hour?

- **Baseline hardening** (MFA, legacy auth off, SPF/DKIM/DMARC) → **[Cybersecurity hardening baseline](/services/cybersecurity-hardening/)**  
- **3-2-1 backups + test-restore** → **[Cloud backup setup](/services/cloud-backup-setup/)**  
- **Quarterly check-ups** → **[Quarterly Device Health Check](/services/quarterly-device-health-check-remote/)**  
- **Hands-on help** → **[Remote support session](/services/remote-support-setup/)**

---

## Quick links (contact)

- [Privacy](/privacy/) · [Contact us](/contact/)

