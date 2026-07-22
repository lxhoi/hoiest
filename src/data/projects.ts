export interface Project {
  title: string;
  folder: string;
  description: string;
  description_en: string;
  tags: string[];
  tags_en: string[];
  images: string[];
  category: 'branding' | 'lettering' | 'motion';
}

export const projects: Project[] = [
  {
    title: "RẠNG Coffee & Tea",
    folder: "/projects/rang-coffee-tea",
    description:
      "Bộ nhận diện thương hiệu tươi sáng dành cho tiệm cà phê và trà, nổi bật với logotype chữ R tùy chỉnh. Thiết kế mang lại cảm giác gần gũi với tông màu cam bắt mắt, được ứng dụng linh hoạt trên biển hiệu, ly tách, bao bì và không gian quán.",
    description_en:
      "A bright coffee and tea identity with a custom R-led wordmark, warm retail cues, and a punchy orange system designed for signage, cups, packaging, and spatial touchpoints.",
    tags: ["Nhận diện thương hiệu", "Thiết kế chữ", "Bao bì", "Bán lẻ"],
    tags_en: ["Brand Identity", "Custom Lettering", "Packaging", "Retail"],
    images: [
      "01.webp",
      "02.webp",
      "03.webp",
      "04.webp",
      "05.webp",
      "06.webp",
      "07.webp",
      "08.webp",
      "09.webp",
      "10.webp",
      "11.webp",
      "12.webp",
      "13.webp",
      "14.webp",
      "15.webp",
      "16.webp",
      "17.webp",
      "18.webp",
    ],
    category: 'branding',
  },
  {
    title: "Khansfit",
    folder: "/projects/KHANSFIT",
    description:
      "Bộ nhận diện thương hiệu phòng tập tràn đầy năng lượng, sử dụng phông chữ đậm nét, sắc xanh điện nổi bật cùng hệ thống monogram linh hoạt. Thiết kế dễ dàng ứng dụng từ đồng phục, áp phích đến các ấn phẩm truyền thông trên mạng xã hội.",
    description_en:
      "A high-energy fitness identity built from heavy type, electric blue, and a flexible monogram system that scales from apparel and posters to social-first brand moments.",
    tags: ["Nhận diện thương hiệu", "Logotype", "Chữ lồng", "Chiến dịch"],
    tags_en: ["Brand Identity", "Logotype", "Monogram", "Campaign"],
    images: [
      "01.webp",
      "02.webp",
      "03.webp",
      "04.webp",
      "05.webp",
      "06.webp",
      "07.webp",
      "08.webp",
      "09.webp",
      "10.webp",
      "11.webp",
      "12.webp",
      "13.webp",
      "14.webp",
      "15.webp",
      "16.webp",
      "17.webp",
      "18.webp",
      "19.webp",
    ],
    category: 'branding',
  },
  {
    title: "Winola Fine Jewelry",
    folder: "/projects/Winola",
    description:
      "Bộ nhận diện thương hiệu hiện đại cho nhãn hàng Winola, tập trung vào cảm giác sang trọng, tinh tế và dễ nhận diện trên nhiều nền tảng.",
    description_en:
      "A modern brand identity system for Winola, focused on elegance, clarity, and strong recognition across multiple touchpoints.",
    tags: ["Nhận diện thương hiệu", "Thiết kế hệ thống", "Branding"],
    tags_en: ["Brand Identity", "System Design", "Branding"],
    images: [
      "01.webp",
      "02.webp",
      "03.webp",
      "04.webp",
      "05.webp",
      "06.webp",
      "07.webp",
      "08.webp",
      "09.webp",
      "10.webp",
      "11.webp",
      "12.webp",
      "13.webp",
      "14.webp",
      "15.webp",
      "16.webp",
      "17.webp",
      "18.webp",
      "19.webp",
      "20.webp",
      "21.webp",
    ],
    category: 'branding',
  },
  {
    title: "Đẳng cấp",
    folder: "/projects/lettering",
    description: "Tác phẩm lettering Đẳng cấp.",
    description_en: "Lettering artwork: Đẳng cấp.",
    tags: ["Lettering", "Typography", "Nghệ thuật chữ"],
    tags_en: ["Lettering", "Typography", "Word Art"],
    images: ["dangcap.png"],
    category: 'lettering',
  },
  {
    title: "Ghet Xog Lai Thik",
    folder: "/projects/lettering",
    description: "Tác phẩm lettering Ghet Xog Lai Thik.",
    description_en: "Lettering artwork: Ghet Xog Lai Thik.",
    tags: ["Lettering", "Typography", "Nghệ thuật chữ"],
    tags_en: ["Lettering", "Typography", "Word Art"],
    images: ["ghetxoglaithik.png"],
    category: 'lettering',
  },
  {
    title: "Ngày của mẹ",
    folder: "/projects/lettering",
    description: "Tác phẩm lettering Ngày của mẹ.",
    description_en: "Lettering artwork: Ngày của mẹ.",
    tags: ["Lettering", "Typography", "Nghệ thuật chữ"],
    tags_en: ["Lettering", "Typography", "Word Art"],
    images: ["ngaycuame.png"],
    category: 'lettering',
  },
  {
    title: "Vạn sự như ý",
    folder: "/projects/lettering",
    description: "Tác phẩm lettering Vạn sự như ý.",
    description_en: "Lettering artwork: Vạn sự như ý.",
    tags: ["Lettering", "Typography", "Nghệ thuật chữ"],
    tags_en: ["Lettering", "Typography", "Word Art"],
    images: ["vansunhuy.png"],
    category: 'lettering',
  }
];
