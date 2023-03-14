export const SECTION_KEY = [
  "ABOUT",
  "DEVELOPMENT_EXPERIENCES",
  "RESEARCH",
  "HOBBY",
] as const;

export const SECTION_DOM_ID = SECTION_KEY;

export const SECTION: { [key in typeof SECTION_KEY[number]]: string } = {
  [SECTION_KEY[0]]: "About",
  [SECTION_KEY[1]]: `Development\nExperiences`,
  [SECTION_KEY[2]]: "Research",
  [SECTION_KEY[3]]: "Hobby",
} as const;
