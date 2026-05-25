export const skillTagTone = [
  "border-primary/40 bg-primary/20 text-foreground",
  "border-border bg-muted text-foreground",
  "border-accent/45 bg-accent/30 text-foreground",
  "border-secondary/50 bg-secondary/25 text-foreground",
] as const;

export const openSourceTagTone =
	"border-emerald-500/40 bg-emerald-500/15 text-emerald-950 dark:bg-emerald-500/18 dark:text-emerald-100";

export function getSkillTagTone(tag: string, toneIndex: number) {
	return tag === "Open Source"
		? openSourceTagTone
		: skillTagTone[toneIndex % skillTagTone.length];
}

export function orderProjectTags(tags: readonly string[]) {
	const openSourceTags = tags.filter((tag) => tag === "Open Source");
	const otherTags = tags.filter((tag) => tag !== "Open Source");

	return [...openSourceTags, ...otherTags];
}
