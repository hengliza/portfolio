export const projects = {
  Website: [
    ["01", "Voco Hotel", "Voco Hotel is a hotel booking platform that allows users to browse hotels, make reservations.", "2026", "https://hotel-booking-taupe-eight.vercel.app/" , "https://github.com/KhornMolika/hotel-booking", "/Images/githubImg.png", "/Images/projects/voco-hotel.png"],
    ["02", "Endora", "BaaS platform that auto-generates RESTful APIs from user defined schemas.", "2025", "https://www.endora.space/", "https://github.com/hengliza/Endora_Frontend", "/Images/githubImg.png", "/Images/projects/endora.png"], 
    ["03", "Aroma", "Aroma is an e-commerce system that allows users to browse products, place orders.", "2025", "https://aroma-deploy.onrender.com/", "https://github.com/KhornMolika/aroma-django-restapi-e-commerce", "/Images/githubImg.png", "/Images/projects/aroma.png"],
     ["04", "PostPen", "Platform that allows users to share, and discuss academic content efficiently. ", "2024", "https://github.com/Sobothty/Post-Pen", "https://github.com/Sobothty/Post-Pen", "/Images/githubImg.png", "/Images/projects/postpen.png"],
  ],
  "UX/UI": [
    ["01", "Vithey App", "A mobile app for track skill, apply for jobs, and share knowledge.", "2026", "https://www.figma.com/design/JlmrvLYUXbzNvu3Mz2w1h9/Vithey-App?node-id=0-1&p=f&t=3I1OWHSauo4YxHwH-0", "", "/Images/figmaImg.png", "/Images/projects/vithey-app-figma.png"],
    ["02", "Endora", "BaaS platform that auto-generates RESTful APIs from user defined schemas.", "2025", "https://www.figma.com/design/gGRxWYTbSOCxM52uLrZq1p/Endora?node-id=0-1&p=f&t=zH1aSATN4prP5bhZ-0", "", "/Images/figmaImg.png", "/Images/projects/endora-figma.png"],
    ["03", "Quick Safe", "A mobile app for alert to specific people during emergency.", "2025", "https://www.figma.com/design/TacnPABhpn2tbLmYT7RGn3/QikSafe-Emergency-Alert-App?node-id=0-1&p=f&t=mXaJWyCVuf5ML2ok-0", "", "/Images/figmaImg.png", "/Images/projects/quickSafe-figma.png"],
    ["04", "PostPen", "Platform that allows users to share, and discuss academic content efficiently. ", "2024", "https://www.figma.com/design/fyU45LBRJHVXXzdPC0ObCz/Blog-Platform?node-id=0-1&p=f&t=Ff4qh5vj0cEz5aDr-0", "", "/Images/figmaImg.png", "/Images/projects/postpen-figma.png"],
  ],
} as const;
export type ProjectTab = keyof typeof projects;
export type Project = (typeof projects)[ProjectTab][number];