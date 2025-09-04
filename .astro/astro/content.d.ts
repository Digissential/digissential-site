declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"blog": {
"2025-08-31-data-recovery-stellenbosch.md": {
	id: "2025-08-31-data-recovery-stellenbosch.md";
  slug: "2025-08-31-data-recovery-stellenbosch";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"2025-08-31-laptop-battery-stellenbosch-loadshedding-replacements.md": {
	id: "2025-08-31-laptop-battery-stellenbosch-loadshedding-replacements.md";
  slug: "2025-08-31-laptop-battery-stellenbosch-loadshedding-replacements";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"2025-08-31-laptop-repair-stellenbosch-costs-turnarounds.md": {
	id: "2025-08-31-laptop-repair-stellenbosch-costs-turnarounds.md";
  slug: "2025-08-31-laptop-repair-stellenbosch-costs-turnarounds";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"2025-08-31-laptop-water-spill-stellenbosch-rescue-guide.md": {
	id: "2025-08-31-laptop-water-spill-stellenbosch-rescue-guide.md";
  slug: "2025-08-31-laptop-water-spill-stellenbosch-rescue-guide";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"2025-08-31-sme-device-health-stellenbosch-quarterly-checklist.md": {
	id: "2025-08-31-sme-device-health-stellenbosch-quarterly-checklist.md";
  slug: "2025-08-31-sme-device-health-stellenbosch-quarterly-checklist";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"2025-08-31-stellenbosch-ewaste-2025.md": {
	id: "2025-08-31-stellenbosch-ewaste-2025.md";
  slug: "2025-08-31-stellenbosch-ewaste-2025";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"2025-08-31-stellenbosch-wifi-quick-fixes.md": {
	id: "2025-08-31-stellenbosch-wifi-quick-fixes.md";
  slug: "2025-08-31-stellenbosch-wifi-quick-fixes";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"2025-08-31-su-exam-week-emergency-laptop-fixes-stellenbosch.md": {
	id: "2025-08-31-su-exam-week-emergency-laptop-fixes-stellenbosch.md";
  slug: "2025-08-31-su-exam-week-emergency-laptop-fixes-stellenbosch";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"2025-08-31-technopark-cbd-sme-ransomware-readiness-checklist.md": {
	id: "2025-08-31-technopark-cbd-sme-ransomware-readiness-checklist.md";
  slug: "2025-08-31-technopark-cbd-sme-ransomware-readiness-checklist";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"2025-08-31-windows-11-slow-vs-clean-reinstall-stellenbosch.md": {
	id: "2025-08-31-windows-11-slow-vs-clean-reinstall-stellenbosch.md";
  slug: "2025-08-31-windows-11-slow-vs-clean-reinstall-stellenbosch";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"2025-09-02-data-recovery-stellenbosch-popia-codd.md": {
	id: "2025-09-02-data-recovery-stellenbosch-popia-codd.md";
  slug: "2025-09-02-data-recovery-stellenbosch-popia-codd";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"2025-09-02-laptop-repair-stellenbosch-student-guide.md": {
	id: "2025-09-02-laptop-repair-stellenbosch-student-guide.md";
  slug: "2025-09-02-laptop-repair-stellenbosch-student-guide";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"2025-09-02-macbook-repair-stellenbosch-costs-turnarounds.md": {
	id: "2025-09-02-macbook-repair-stellenbosch-costs-turnarounds.md";
  slug: "2025-09-02-macbook-repair-stellenbosch-costs-turnarounds";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"2025-09-02-sme-it-support-stellenbosch-quarterly-device-health-checklist.md": {
	id: "2025-09-02-sme-it-support-stellenbosch-quarterly-device-health-checklist.md";
  slug: "2025-09-02-sme-it-support-stellenbosch-quarterly-device-health-checklist";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"2025-09-02-stellenbosch-ewaste-2025-battery-codd.md": {
	id: "2025-09-02-stellenbosch-ewaste-2025-battery-codd.md";
  slug: "2025-09-02-stellenbosch-ewaste-2025-battery-codd";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"2025-09-02-stellenbosch-home-printer-setup-fixes.md": {
	id: "2025-09-02-stellenbosch-home-printer-setup-fixes.md";
  slug: "2025-09-02-stellenbosch-home-printer-setup-fixes";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"2025-09-02-stellenbosch-moving-residence-safe-laptop-data-migration.md": {
	id: "2025-09-02-stellenbosch-moving-residence-safe-laptop-data-migration.md";
  slug: "2025-09-02-stellenbosch-moving-residence-safe-laptop-data-migration";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"2025-09-02-stellenbosch-ups-sizing-loadshedding.md": {
	id: "2025-09-02-stellenbosch-ups-sizing-loadshedding.md";
  slug: "2025-09-02-stellenbosch-ups-sizing-loadshedding";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"2025-09-02-stellenbosch-wifi-quick-fixes.md": {
	id: "2025-09-02-stellenbosch-wifi-quick-fixes.md";
  slug: "2025-09-02-stellenbosch-wifi-quick-fixes";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"2025-09-02-technopark-smes-email-security-essentials.md": {
	id: "2025-09-02-technopark-smes-email-security-essentials.md";
  slug: "2025-09-02-technopark-smes-email-security-essentials";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"2025-09-04-bitlocker-filevault-stellenbosch-recovery-keys-safe-storage.md": {
	id: "2025-09-04-bitlocker-filevault-stellenbosch-recovery-keys-safe-storage.md";
  slug: "2025-09-04-bitlocker-filevault-stellenbosch-recovery-keys-safe-storage";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"2025-09-04-blue-screens-boot-loops-stellenbosch-quick-checks.md": {
	id: "2025-09-04-blue-screens-boot-loops-stellenbosch-quick-checks.md";
  slug: "2025-09-04-blue-screens-boot-loops-stellenbosch-quick-checks";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"2025-09-04-gaming-pc-issues-stellenbosch-heat-noise-shutdowns.md": {
	id: "2025-09-04-gaming-pc-issues-stellenbosch-heat-noise-shutdowns.md";
  slug: "2025-09-04-gaming-pc-issues-stellenbosch-heat-noise-shutdowns";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"2025-09-04-intel-to-apple-silicon-mac-migration-stellenbosch.md": {
	id: "2025-09-04-intel-to-apple-silicon-mac-migration-stellenbosch.md";
  slug: "2025-09-04-intel-to-apple-silicon-mac-migration-stellenbosch";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"2025-09-04-refurbished-laptop-stellenbosch-cpa-checklist.md": {
	id: "2025-09-04-refurbished-laptop-stellenbosch-cpa-checklist.md";
  slug: "2025-09-04-refurbished-laptop-stellenbosch-cpa-checklist";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"2025-09-04-slow-mac-stellenbosch-cleanup-ssd-reinstall.md": {
	id: "2025-09-04-slow-mac-stellenbosch-cleanup-ssd-reinstall.md";
  slug: "2025-09-04-slow-mac-stellenbosch-cleanup-ssd-reinstall";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"2025-09-04-stellenbosch-laptop-screen-replacement-panel-cable-gpu.md": {
	id: "2025-09-04-stellenbosch-laptop-screen-replacement-panel-cable-gpu.md";
  slug: "2025-09-04-stellenbosch-laptop-screen-replacement-panel-cable-gpu";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"2025-09-04-stellenbosch-phishing-watch-fake-su-emails-whatsapp-it-help.md": {
	id: "2025-09-04-stellenbosch-phishing-watch-fake-su-emails-whatsapp-it-help.md";
  slug: "2025-09-04-stellenbosch-phishing-watch-fake-su-emails-whatsapp-it-help";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"2025-09-04-su-freshers-new-laptop-setup-stellenbosch.md": {
	id: "2025-09-04-su-freshers-new-laptop-setup-stellenbosch.md";
  slug: "2025-09-04-su-freshers-new-laptop-setup-stellenbosch";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
};
"resources": {
"2025-09-04-consumer-protection-cpa-warranty-popia-privacy-stellenbosch.md": {
	id: "2025-09-04-consumer-protection-cpa-warranty-popia-privacy-stellenbosch.md";
  slug: "2025-09-04-consumer-protection-cpa-warranty-popia-privacy-stellenbosch";
  body: string;
  collection: "resources";
  data: any
} & { render(): Render[".md"] };
"2025-09-04-e-waste-disposal-battery-safety-stellenbosch.md": {
	id: "2025-09-04-e-waste-disposal-battery-safety-stellenbosch.md";
  slug: "2025-09-04-e-waste-disposal-battery-safety-stellenbosch";
  body: string;
  collection: "resources";
  data: any
} & { render(): Render[".md"] };
"2025-09-04-laptop-overheating-random-shutdowns-stellenbosch.md": {
	id: "2025-09-04-laptop-overheating-random-shutdowns-stellenbosch.md";
  slug: "2025-09-04-laptop-overheating-random-shutdowns-stellenbosch";
  body: string;
  collection: "resources";
  data: any
} & { render(): Render[".md"] };
"2025-09-04-mac-filevault-forgotten-passwords-stellenbosch.md": {
	id: "2025-09-04-mac-filevault-forgotten-passwords-stellenbosch.md";
  slug: "2025-09-04-mac-filevault-forgotten-passwords-stellenbosch";
  body: string;
  collection: "resources";
  data: any
} & { render(): Render[".md"] };
"2025-09-04-password-resets-account-lockouts-stellenbosch.md": {
	id: "2025-09-04-password-resets-account-lockouts-stellenbosch.md";
  slug: "2025-09-04-password-resets-account-lockouts-stellenbosch";
  body: string;
  collection: "resources";
  data: any
} & { render(): Render[".md"] };
"2025-09-04-stellenbosch-university-it-support-alternatives.md": {
	id: "2025-09-04-stellenbosch-university-it-support-alternatives.md";
  slug: "2025-09-04-stellenbosch-university-it-support-alternatives";
  body: string;
  collection: "resources";
  data: any
} & { render(): Render[".md"] };
"2025-09-04-virus-malware-removal-stellenbosch.md": {
	id: "2025-09-04-virus-malware-removal-stellenbosch.md";
  slug: "2025-09-04-virus-malware-removal-stellenbosch";
  body: string;
  collection: "resources";
  data: any
} & { render(): Render[".md"] };
"2025-09-04-windows-wont-boot-stellenbosch-bitlocker-startup-repair.md": {
	id: "2025-09-04-windows-wont-boot-stellenbosch-bitlocker-startup-repair.md";
  slug: "2025-09-04-windows-wont-boot-stellenbosch-bitlocker-startup-repair";
  body: string;
  collection: "resources";
  data: any
} & { render(): Render[".md"] };
"2025-09-05-affordable-computer-repairs-stellenbosch-ranked.md": {
	id: "2025-09-05-affordable-computer-repairs-stellenbosch-ranked.md";
  slug: "2025-09-05-affordable-computer-repairs-stellenbosch-ranked";
  body: string;
  collection: "resources";
  data: any
} & { render(): Render[".md"] };
"2025-09-05-best-pc-repair-shops-stellenbosch-rankings.md": {
	id: "2025-09-05-best-pc-repair-shops-stellenbosch-rankings.md";
  slug: "2025-09-05-best-pc-repair-shops-stellenbosch-rankings";
  body: string;
  collection: "resources";
  data: any
} & { render(): Render[".md"] };
"2025-09-05-data-backup-strategies-students-smes-stellenbosch.md": {
	id: "2025-09-05-data-backup-strategies-students-smes-stellenbosch.md";
  slug: "2025-09-05-data-backup-strategies-students-smes-stellenbosch";
  body: string;
  collection: "resources";
  data: any
} & { render(): Render[".md"] };
"2025-09-05-internet-wifi-troubleshooting-stellenbosch.md": {
	id: "2025-09-05-internet-wifi-troubleshooting-stellenbosch.md";
  slug: "2025-09-05-internet-wifi-troubleshooting-stellenbosch";
  body: string;
  collection: "resources";
  data: any
} & { render(): Render[".md"] };
"2025-09-05-stellenbosch-sme-it-support-top-3-providers.md": {
	id: "2025-09-05-stellenbosch-sme-it-support-top-3-providers.md";
  slug: "2025-09-05-stellenbosch-sme-it-support-top-3-providers";
  body: string;
  collection: "resources";
  data: any
} & { render(): Render[".md"] };
"2025-09-05-stellenbosch-tech-support-best-for-students.md": {
	id: "2025-09-05-stellenbosch-tech-support-best-for-students.md";
  slug: "2025-09-05-stellenbosch-tech-support-best-for-students";
  body: string;
  collection: "resources";
  data: any
} & { render(): Render[".md"] };
"2025-09-05-top-5-laptop-repair-stellenbosch-compared.md": {
	id: "2025-09-05-top-5-laptop-repair-stellenbosch-compared.md";
  slug: "2025-09-05-top-5-laptop-repair-stellenbosch-compared";
  body: string;
  collection: "resources";
  data: any
} & { render(): Render[".md"] };
};
"services": {
"battery-replacement-labour.md": {
	id: "battery-replacement-labour.md";
  slug: "battery-replacement-labour";
  body: string;
  collection: "services";
  data: any
} & { render(): Render[".md"] };
"cloud-backup-setup.md": {
	id: "cloud-backup-setup.md";
  slug: "cloud-backup-setup";
  body: string;
  collection: "services";
  data: any
} & { render(): Render[".md"] };
"component-replacement-assistance.md": {
	id: "component-replacement-assistance.md";
  slug: "component-replacement-assistance";
  body: string;
  collection: "services";
  data: any
} & { render(): Render[".md"] };
"custom-pc-build-advice.md": {
	id: "custom-pc-build-advice.md";
  slug: "custom-pc-build-advice";
  body: string;
  collection: "services";
  data: any
} & { render(): Render[".md"] };
"cybersecurity-hardening.md": {
	id: "cybersecurity-hardening.md";
  slug: "cybersecurity-hardening";
  body: string;
  collection: "services";
  data: any
} & { render(): Render[".md"] };
"data-backup-basic.md": {
	id: "data-backup-basic.md";
  slug: "data-backup-basic";
  body: string;
  collection: "services";
  data: any
} & { render(): Render[".md"] };
"data-backup-full-system-image.md": {
	id: "data-backup-full-system-image.md";
  slug: "data-backup-full-system-image";
  body: string;
  collection: "services";
  data: any
} & { render(): Render[".md"] };
"data-destruction-certified-wipe.md": {
	id: "data-destruction-certified-wipe.md";
  slug: "data-destruction-certified-wipe";
  body: string;
  collection: "services";
  data: any
} & { render(): Render[".md"] };
"data-migration-device-to-device.md": {
	id: "data-migration-device-to-device.md";
  slug: "data-migration-device-to-device";
  body: string;
  collection: "services";
  data: any
} & { render(): Render[".md"] };
"data-recovery-best-effort.md": {
	id: "data-recovery-best-effort.md";
  slug: "data-recovery-best-effort";
  body: string;
  collection: "services";
  data: any
} & { render(): Render[".md"] };
"data-recovery-simple-logical.md": {
	id: "data-recovery-simple-logical.md";
  slug: "data-recovery-simple-logical";
  body: string;
  collection: "services";
  data: any
} & { render(): Render[".md"] };
"diagnostic-in-shop.md": {
	id: "diagnostic-in-shop.md";
  slug: "diagnostic-in-shop";
  body: string;
  collection: "services";
  data: any
} & { render(): Render[".md"] };
"driver-installation.md": {
	id: "driver-installation.md";
  slug: "driver-installation";
  body: string;
  collection: "services";
  data: any
} & { render(): Render[".md"] };
"email-setup.md": {
	id: "email-setup.md";
  slug: "email-setup";
  body: string;
  collection: "services";
  data: any
} & { render(): Render[".md"] };
"expedited-service-fee.md": {
	id: "expedited-service-fee.md";
  slug: "expedited-service-fee";
  body: string;
  collection: "services";
  data: any
} & { render(): Render[".md"] };
"firmware-bios-uefi-updates.md": {
	id: "firmware-bios-uefi-updates.md";
  slug: "firmware-bios-uefi-updates";
  body: string;
  collection: "services";
  data: any
} & { render(): Render[".md"] };
"gpu-cpu-upgrade-labour.md": {
	id: "gpu-cpu-upgrade-labour.md";
  slug: "gpu-cpu-upgrade-labour";
  body: string;
  collection: "services";
  data: any
} & { render(): Render[".md"] };
"hardware-diagnostics-extended.md": {
	id: "hardware-diagnostics-extended.md";
  slug: "hardware-diagnostics-extended";
  body: string;
  collection: "services";
  data: any
} & { render(): Render[".md"] };
"hinge-chassis-tighten-service.md": {
	id: "hinge-chassis-tighten-service.md";
  slug: "hinge-chassis-tighten-service";
  body: string;
  collection: "services";
  data: any
} & { render(): Render[".md"] };
"labour-after-hours-emergency.md": {
	id: "labour-after-hours-emergency.md";
  slug: "labour-after-hours-emergency";
  body: string;
  collection: "services";
  data: any
} & { render(): Render[".md"] };
"labour-standard-hours.md": {
	id: "labour-standard-hours.md";
  slug: "labour-standard-hours";
  body: string;
  collection: "services";
  data: any
} & { render(): Render[".md"] };
"laptop-keyboard-replacement-labour.md": {
	id: "laptop-keyboard-replacement-labour.md";
  slug: "laptop-keyboard-replacement-labour";
  body: string;
  collection: "services";
  data: any
} & { render(): Render[".md"] };
"laptop-screen-replacement-labour.md": {
	id: "laptop-screen-replacement-labour.md";
  slug: "laptop-screen-replacement-labour";
  body: string;
  collection: "services";
  data: any
} & { render(): Render[".md"] };
"mesh-wifi-planning-install.md": {
	id: "mesh-wifi-planning-install.md";
  slug: "mesh-wifi-planning-install";
  body: string;
  collection: "services";
  data: any
} & { render(): Render[".md"] };
"new-pc-laptop-setup.md": {
	id: "new-pc-laptop-setup.md";
  slug: "new-pc-laptop-setup";
  body: string;
  collection: "services";
  data: any
} & { render(): Render[".md"] };
"on-site-surcharge-within-20km.md": {
	id: "on-site-surcharge-within-20km.md";
  slug: "on-site-surcharge-within-20km";
  body: string;
  collection: "services";
  data: any
} & { render(): Render[".md"] };
"os-burn-in-add-on.md": {
	id: "os-burn-in-add-on.md";
  slug: "os-burn-in-add-on";
  body: string;
  collection: "services";
  data: any
} & { render(): Render[".md"] };
"password-reset-windows-local.md": {
	id: "password-reset-windows-local.md";
  slug: "password-reset-windows-local";
  body: string;
  collection: "services";
  data: any
} & { render(): Render[".md"] };
"pc-assembly-full-build.md": {
	id: "pc-assembly-full-build.md";
  slug: "pc-assembly-full-build";
  body: string;
  collection: "services";
  data: any
} & { render(): Render[".md"] };
"pickup-dropoff-within-10km.md": {
	id: "pickup-dropoff-within-10km.md";
  slug: "pickup-dropoff-within-10km";
  body: string;
  collection: "services";
  data: any
} & { render(): Render[".md"] };
"printer-setup.md": {
	id: "printer-setup.md";
  slug: "printer-setup";
  body: string;
  collection: "services";
  data: any
} & { render(): Render[".md"] };
"printer-troubleshooting.md": {
	id: "printer-troubleshooting.md";
  slug: "printer-troubleshooting";
  body: string;
  collection: "services";
  data: any
} & { render(): Render[".md"] };
"quarterly-device-health-check-remote.md": {
	id: "quarterly-device-health-check-remote.md";
  slug: "quarterly-device-health-check-remote";
  body: string;
  collection: "services";
  data: any
} & { render(): Render[".md"] };
"remote-support-session.md": {
	id: "remote-support-session.md";
  slug: "remote-support-session";
  body: string;
  collection: "services";
  data: any
} & { render(): Render[".md"] };
"remote-support-setup.md": {
	id: "remote-support-setup.md";
  slug: "remote-support-setup";
  body: string;
  collection: "services";
  data: any
} & { render(): Render[".md"] };
"software-installation-bulk.md": {
	id: "software-installation-bulk.md";
  slug: "software-installation-bulk";
  body: string;
  collection: "services";
  data: any
} & { render(): Render[".md"] };
"software-installation-standard.md": {
	id: "software-installation-standard.md";
  slug: "software-installation-standard";
  body: string;
  collection: "services";
  data: any
} & { render(): Render[".md"] };
"speedup-tuneup.md": {
	id: "speedup-tuneup.md";
  slug: "speedup-tuneup";
  body: string;
  collection: "services";
  data: any
} & { render(): Render[".md"] };
"ssd-upgrade-bundle-clone-swap.md": {
	id: "ssd-upgrade-bundle-clone-swap.md";
  slug: "ssd-upgrade-bundle-clone-swap";
  body: string;
  collection: "services";
  data: any
} & { render(): Render[".md"] };
"thermal-paste-deep-clean.md": {
	id: "thermal-paste-deep-clean.md";
  slug: "thermal-paste-deep-clean";
  body: string;
  collection: "services";
  data: any
} & { render(): Render[".md"] };
"virus-malware-removal.md": {
	id: "virus-malware-removal.md";
  slug: "virus-malware-removal";
  body: string;
  collection: "services";
  data: any
} & { render(): Render[".md"] };
"wifi-network-setup.md": {
	id: "wifi-network-setup.md";
  slug: "wifi-network-setup";
  body: string;
  collection: "services";
  data: any
} & { render(): Render[".md"] };
"windows-reinstall-no-backup.md": {
	id: "windows-reinstall-no-backup.md";
  slug: "windows-reinstall-no-backup";
  body: string;
  collection: "services";
  data: any
} & { render(): Render[".md"] };
"windows-reinstall-with-backup.md": {
	id: "windows-reinstall-with-backup.md";
  slug: "windows-reinstall-with-backup";
  body: string;
  collection: "services";
  data: any
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = never;
}
