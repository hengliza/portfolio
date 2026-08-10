export const certificates = [
  ["TVET Certificate", "Academic achievement", "2023","/Images/certificates/tvet.png"],
  ["Pre-University Web Development", "ISTAD", "2025","/Images/certificates/web-design-junior.png"],
  ["Full Stack Web Development", "ISTAD", "2025","/Images/certificates/fullstack.png"],
] as const;
export type Certificate = (typeof certificates)[number];

