---
title: "Windows won’t boot in Stellenbosch? BitLocker & Startup Repair—what to do next"
description: "Windows won’t boot? See safe steps for BitLocker prompts and Startup Repair loops, when to stop DIY, and fast paths to recovery or reinstall in Stellenbosch."
pubDate: "2025-09-04"
updatedDate: "2025-09-04"
author: "Digissential Team"
tags: ["windows", "bitlocker", "startup repair", "stellenbosch"]
draft: false
canonical: "https://digissential.co.za/blog/windows-wont-boot-stellenbosch-bitlocker-startup-repair/"
noindex: false

howTo:
  title: "Safe recovery order: from panic to plan (BitLocker & Startup Repair)"
  steps:
    - "Unplug extras and power once: remove USB drives/dongles/SD cards, then do one clean reboot. Repeated loops can make things worse."
    - "Note the screen: **BitLocker Recovery** (48-digit key) vs **Automatic Repair** loop vs other stop codes. A photo helps when you book in."
    - "If it’s BitLocker: fetch the **recovery key on a clean device** (not the broken PC). Personal: Microsoft account → Devices → Recovery keys; Work/School: ask IT/Entra ID/AD. Enter it **once**."
    - "If it boots after the key: back up documents immediately, then review why it asked (recent BIOS/TPM changes, updates)."
    - "If it’s an Automatic Repair loop: try **Safe Mode** → uninstall the last driver/app or Windows update; if storage sounds rough or SMART says Caution/Bad, stop and book imaging."
    - "Stop DIY if you hear clicks, see repeated new errors, or SMART warnings. We’ll image first, then repair or reinstall so your data is safe."
faq:
  - q: "Where do I find my BitLocker recovery key?"
    a: "Personal Microsoft account → **Devices → Recovery keys**; Work/School → your organisation/IT (Entra ID/AD). Some users printed or saved a .txt during setup."
  - q: "What causes the sudden BitLocker prompt?"
    a: "TPM/secure-boot or firmware changes, major updates, or disk changes. The key proves it’s really you; after unlock we re-seal BitLocker."
  - q: "Can you recover files if Windows won’t boot?"
    a: "Usually yes. We prioritise a **read-only image**, then extract files or repair from the image. If encryption is active, we’ll need your valid key."
  - q: "When should I give up at home?"
    a: "If drives click, SMART shows **Caution/Bad**, or each reboot shows new codes—stop. Power-cycling can reduce recovery chances."
  - q: "How fast are diagnostics near campus/Technopark?"
    a: "Often **same/next-day**. Tell us if it’s exam week or a client deadline—we’ll be honest about the quickest safe path."
---

> **Students before exams. SMEs before meetings.** A laptop stuck on **BitLocker** or an **Automatic Repair** loop is stressful—and the worst instinct is to keep rebooting. The sequence below protects your data first, then gets you back to a clean, bootable Windows as quickly as possible.

## First: identify the screen (it changes the plan)

- **BitLocker Recovery (48-digit key)**  
  Windows is encrypted and needs your **recovery key**. This isn’t proof your disk is dead; it’s a security check after a change (TPM/BIOS/updates).

- **Automatic Repair / Preparing Automatic Repair (loop)**  
  Windows can’t complete startup—often due to driver faults, file-system errors, or failing storage.

- **Blue screen with codes (e.g., INACCESSIBLE_BOOT_DEVICE)**  
  Take a photo. Driver/storage issues are common; repeated new codes often point to unstable disks or RAM.

**Rule one:** If you hear **clicking** or see storage health warnings, **stop DIY** and let us image the drive first.

---

## If it’s BitLocker (do this once, carefully)

1. On **another device**, sign into your **Microsoft account** and open the recovery keys page  
   → Microsoft guide: [Recovery options in Windows](https://support.microsoft.com/windows/recovery-options-in-windows)  
   → Find keys: [Where is my BitLocker recovery key?](https://support.microsoft.com/help/4026181)

2. For **Work/School** laptops, your IT team can read the key from **Entra ID/AD**. Provide the **Recovery Key ID** shown on the locked screen.

3. Enter the key **once**. If it unlocks, **back up immediately**. Then we’ll help re-seal BitLocker to your TPM and check what triggered the prompt.

**Do-nots:** Don’t guess multiple times, don’t attempt decryption on a sick disk, and don’t factory-reset over an encrypted drive before backups.

---

## If it’s an Automatic Repair loop (safe triage)

- **Unplug USB/SD and try one reboot.**  
- **Safe Mode path:** Interrupt boot 3× to reach Recovery → Troubleshoot → Advanced options → Startup Settings → Restart → press **4**.  
  - In Safe Mode, **remove the last driver/app**, roll back the last Windows update, and check **Device Manager** for errors.  
- **SMART check:** If you can install a vendor tool, read disk health. **Caution/Bad** = stop and book imaging.  
- **External screen test:** Black screen after the logo can be display/driver—try HDMI/USB-C video to confirm.

If the loop persists, we’ll protect data first, then either repair the boot or proceed to a clean **reinstall with your files restored**.

---

## What we do (data-first workflow)

1) **Intake & health check:** power, SMART/SSD wear, temps, last-boot logs.  
2) **Image first** if unstable—preserves your files before any repair.  
3) **Repair path:** driver cleanup, boot repair, or **clean reinstall** with your data migrated.  
4) **Handover:** clear report, realistic ETA, and tips to avoid repeat issues.

- Start here → **[Windows reinstall with backup](/services/windows-reinstall-with-backup/)**  
- If files matter most → **[Data recovery assessment](/services/data-recovery-simple-logical/)**  
- Need authorisation comfort → **[Data Recovery Consent & Waiver](/legal/data-recovery-consent-waiver/)**  
- Our returns policy → **[Warranty & returns](/legal/warranty-returns/)**

> Exam week or client deadline? Tell us on intake—**we’ll prioritise time-critical jobs** where possible and explain the safest fast track.

---

## Common causes (and fixes that actually help)

| Symptom | Likely cause | Best next step |
|---|---|---|
| BitLocker prompt after BIOS/TPM change | Trust change, secure-boot/firmware updates | Enter key once → back up → re-seal BitLocker |
| “Preparing Automatic Repair” loop | Corrupted update/driver or disk errors | Safe Mode rollback; image first if SMART warns |
| INACCESSIBLE_BOOT_DEVICE | Storage driver/partition issue | Boot repair or clean reinstall from backup |
| Black screen after logo | GPU/driver/display path | External monitor test; driver clean-up |
| Every reboot = new BSOD codes | Unstable storage/RAM | Stop DIY; image and diagnose on bench |

---

## Keep calm: quick do’s & don’ts

**Do**  
- Take a photo of the error screen.  
- Fetch BitLocker keys on a **clean device**.  
- Back up **immediately** after a successful unlock.  
- Tell us if you’re a student before exams or an SME pre-meeting.

**Don’t**  
- Keep power-cycling or force-shutting repeatedly.  
- Run CHKDSK/“repairs” on a clicking drive.  
- Reinstall over encryption before backing up.  
- Guess BitLocker keys.

---

## Book help in minutes (local to Stellenbosch)

- **Reinstall Windows with backup** → [Windows reinstall with backup](/services/windows-reinstall-with-backup/)  
- **Protect files first** → [Data recovery assessment](/services/data-recovery-simple-logical/)  
- **Hands-on help now** → [Remote support session](/services/remote-support-setup/)  
- **Paperwork & consent** → [Data Recovery Consent & Waiver](/legal/data-recovery-consent-waiver/) · [Warranty & returns](/legal/warranty-returns/)

---

*Updated on 2025-09-04.*
