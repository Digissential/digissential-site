---
title: "Scan-to-Email that works in Stellenbosch offices: Gmail & Microsoft 365 SMTP checklist"
description: "Scan-to-Email not working in Stellenbosch? Fix SMTP with Gmail & Microsoft 365 — ports, MFA, SPF records, and POPIA-safe routing."
pubDate: "2025-09-05"
updatedDate: "2025-09-05"
author: "Digissential Team"
tags: ["scan to email", "stellenbosch", "smtp", "gmail", "microsoft 365"]
draft: false
canonical: "https://digissential.co.za/resources/scan-to-email-stellenbosch-gmail-m365-smtp/"
howTo:
  title: "SMTP checklist for Scan-to-Email in Stellenbosch"
  steps:
    - "Check the printer/MFP supports SMTP with TLS (most do)."
    - "For Gmail: smtp.gmail.com, port 587 (TLS), app password if MFA enabled."
    - "For Microsoft 365: smtp.office365.com, port 587 (STARTTLS), account with mailbox license."
    - "Set DNS SPF records correctly if using your own domain (avoids spam flags)."
    - "Test by scanning a single page to your own address before rolling out."
faq:
  - q: "Why isn’t Scan-to-Email working in my office?"
    a: "Usually misconfigured SMTP: wrong port, no TLS, or blocked by MFA. Printers can’t prompt for MFA, so app passwords or service accounts are needed."
  - q: "Can I use Gmail with Scan-to-Email?"
    a: "Yes. Use smtp.gmail.com, port 587 with TLS. If MFA is enabled, generate an app password in your Google account."
  - q: "How do I set up with Microsoft 365?"
    a: "Use smtp.office365.com, port 587 with STARTTLS. The account must have a mailbox license and correct DNS/SPF records."
  - q: "What about POPIA compliance?"
    a: "Always route scans through secure, encrypted connections. Avoid sending to personal accounts unless authorised."
  - q: "Which printers are common in Stellenbosch offices?"
    a: "Canon, HP, and Kyocera MFPs dominate. All support SMTP, but firmware updates may be needed for modern TLS."
---

> **TL;DR:** If Scan-to-Email fails in Stellenbosch, check SMTP settings: Gmail (smtp.gmail.com:587, TLS, app password) or Microsoft 365 (smtp.office365.com:587, STARTTLS). POPIA requires encrypted routing.

## Why Scan-to-Email fails

Stellenbosch SMEs often hit issues during setup:
- Printers don’t support MFA prompts.  
- Wrong SMTP ports (25 blocked by most ISPs).  
- No TLS/STARTTLS enabled.  
- DNS SPF records missing, causing emails to land in spam.  

---

## SMTP settings that work (2025)

### Gmail
- Server: **smtp.gmail.com**  
- Port: **587** (TLS)  
- Auth: Full Gmail address + app password (if MFA enabled).  

### Microsoft 365
- Server: **smtp.office365.com**  
- Port: **587** (STARTTLS)  
- Auth: Licensed M365 mailbox account.  
- Note: Ensure SPF record includes `spf.protection.outlook.com`.  

---

## DNS & compliance notes

- **SPF records:** Add your mail provider to prevent scan emails being flagged as spoofed.  
- **POPIA compliance:** Route through official accounts; don’t send confidential scans to unauthorised addresses.  
- **Audit trail:** Use shared mailboxes or designated service accounts for SMEs.  

---

## When to stop DIY

- If printer firmware doesn’t support modern TLS.  
- If DNS/SPF changes are beyond your scope.  
- If POPIA-sensitive data is being scanned and mailed externally.  

Digissential handles these securely, with full logging and compliance.

---

## Realistic costs in Stellenbosch (ZAR)

- **Printer setup (Scan-to-Email):** from R250.  
- **Printer troubleshooting:** from R350.  
- **Cybersecurity hardening (MFA, SPF, POPIA):** from R500.  
- **Remote support session:** from R350/hr (min 30 min).  

---

## Book help in minutes

- [Printer Setup](/services/printer-setup/)  
- [Printer Troubleshooting](/services/printer-troubleshooting/)  
- [Cybersecurity Hardening](/services/cybersecurity-hardening/)  
- [Remote Support](/services/remote-support-setup/)  

---

## FAQs

**Q: Why isn’t Scan-to-Email working in my office?**  
A: Usually misconfigured SMTP: wrong port, no TLS, or blocked by MFA. Printers can’t prompt for MFA, so app passwords or service accounts are needed.

**Q: Can I use Gmail with Scan-to-Email?**  
A: Yes. Use smtp.gmail.com, port 587 with TLS. If MFA is enabled, generate an app password in your Google account.

**Q: How do I set up with Microsoft 365?**  
A: Use smtp.office365.com, port 587 with STARTTLS. The account must have a mailbox license and correct DNS/SPF records.

**Q: What about POPIA compliance?**  
A: Always route scans through secure, encrypted connections. Avoid sending to personal accounts unless authorised.

**Q: Which printers are common in Stellenbosch offices?**  
A: Canon, HP, and Kyocera MFPs dominate. All support SMTP, but firmware updates may be needed for modern TLS.

---

**Compliance & trust:**  
- [Privacy & POPIA Notice](/legal/privacy-popia-processing-notice/)  
- [Standard Fees](/legal/standard-fees/)  
- [Warranty & Returns](/legal/warranty-returns/)  

External references:  
- [Gmail SMTP settings](https://support.google.com/mail/answer/7126229)  
- [Microsoft 365 SMTP relay](https://learn.microsoft.com/en-us/exchange/mail-flow-best-practices/how-to-set-up-a-multifunction-device-or-application-to-send-email-using-microsoft-365-or-office-365)  

*Updated on 2025-09-05.*
