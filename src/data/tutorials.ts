export interface Tutorial {
  slug: string;
  title: string;
  title_en: string;
  thumbnail: string;
  content: string;
  content_en: string;
  benefits: string[];
  benefits_en: string[];
  cost: string;
  cost_en: string;
  capacity: string;
  capacity_en: string;
  format: string;
  format_en: string;
  schedule: string;
  schedule_en: string;
  duration: string;
  duration_en: string;
  folder?: string;
  images?: string[];
  faqs?: { question: string; answer: string }[];
  faqs_en?: { question: string; answer: string }[];
}

export const tutorials: Tutorial[] = [
  {
    slug: "rang-coffee-brand-identity-mockup",
    title: "RẠNG COFFEE BRAND IDENTITY & MOCKUP",
    title_en: "RẠNG COFFEE BRAND IDENTITY & MOCKUP",
    thumbnail: "/projects/rang-coffee-tea/01.webp",
    content: "<p>Dự án mockup cho dự án <strong>RẠNG COFFEE</strong>.</p><p>Bộ nhận diện thương hiệu tươi sáng dành cho tiệm cà phê và trà, nổi bật với logotype chữ R tùy chỉnh.</p><h3>Các chất lượng mà ảnh mockup của dự án đã đạt được:</h3><ul><li><strong>Tính chân thực cao:</strong> Ánh sáng tự nhiên, đổ bóng vật lý chính xác.</li><li><strong>Độ phân giải sắc nét:</strong> Phù hợp cho in ấn và trình chiếu chất lượng cao.</li><li><strong>Góc nhìn đa dạng:</strong> Giúp tôn lên từng chi tiết thiết kế nhỏ nhất.</li><li><strong>Ứng dụng linh hoạt:</strong> Mockup trên nhiều chất liệu như giấy, nhựa, kính.</li></ul>",
    content_en: "<p>Mockup project for the <strong>RẠNG COFFEE</strong> project.</p><p>A bright coffee and tea identity with a custom R-led wordmark.</p><h3>Qualities that the project's mockup images achieved:</h3><ul><li><strong>High realism:</strong> Natural lighting, accurate physical shadows.</li><li><strong>Sharp resolution:</strong> Suitable for high-quality printing and presentations.</li><li><strong>Diverse angles:</strong> Highlights even the smallest design details.</li><li><strong>Flexible application:</strong> Mockups on various materials like paper, plastic, glass.</li></ul>",
    folder: "/projects/rang-coffee-tea",
    images: [
      "01.webp", "04.webp", "06.webp", "08.webp", "09.webp", "11.webp", 
      "13.webp", "15.webp", "17.webp"
    ],
    benefits: [
      "Tư duy thiết kế nhận diện tương hiệu",
      "Quy trình tạo ra một mockup",
      "Cách phối màu cho bộ nhận diện",
      "Cách sắp xếp bố cục các tài nguyên nhận diện của thương hiệu lên ấn phẩm",
      "Cách đặt thiết kế lên mockup cho chân thật",
      "Cách dùng AI để làm mockup chính xác như ý muốn và ít tốn chi phí nhất"
    ],
    benefits_en: [
      "Brand identity design thinking",
      "The process of creating a mockup",
      "How to mix colors for brand identity",
      "How to arrange the layout of brand identity resources on publications",
      "How to put the design on a mockup for a realistic look",
      "How to use AI to make mockups exactly as desired with the least cost"
    ],
    cost: "1.500.000 VNĐ",
    cost_en: "1.500.000 VND",
    capacity: "Tối đa 5 bạn/lớp hoặc học 1:1 nếu chỉ có 1 bạn đăng ký",
    capacity_en: "Maximum 5 students/class or 1:1 tutoring if only 1 student registers",
    format: "Online qua Google Meet",
    format_en: "Online via Google Meet",
    schedule: "3 buổi/tuần (thứ Hai, Thứ Tư & thứ Sáu), buổi tối từ 19:00 – 21:00 / 21:30",
    schedule_en: "3 sessions/week (Monday, Wednesday & Friday), evenings from 19:00 - 21:00 / 21:30",
    duration: "7 buổi",
    duration_en: "7 sessions",
    faqs: [
      { question: "Khóa học này có phù hợp với tôi không?", answer: "Khóa học này dành cho các bạn designer muốn nâng cao kỹ năng trình bày dự án (mockup) một cách chuyên nghiệp và ấn tượng nhất, đặc biệt là mảng nhận diện thương hiệu." },
      { question: "Điều gì xảy ra nếu tôi bỏ lỡ một buổi học trực tiếp?", answer: "Tất cả các buổi học đều được ghi hình lại. Bạn có thể xem lại video bất cứ lúc nào nếu có việc bận không thể tham gia." },
      { question: "Tôi có được hỗ trợ sau khi kết thúc khóa học không?", answer: "Có, bạn sẽ được tham gia nhóm kín của lớp để nhận feedback và hỗ trợ lâu dài từ mình." },
      { question: "Tôi có quyền truy cập vĩnh viễn vào tài liệu không?", answer: "Toàn bộ tài liệu, template mockup và video record buổi học sẽ được chia sẻ qua Google Drive và bạn có quyền truy cập vĩnh viễn." }
    ],
    faqs_en: [
      { question: "Is this programme right for me?", answer: "This course is for designers who want to improve their project presentation (mockup) skills in the most professional and impressive way, especially in brand identity." },
      { question: "What happens if I miss a live session?", answer: "All live sessions are recorded. You can rewatch the video anytime if you cannot attend." },
      { question: "Will I get support after the course ends?", answer: "Yes, you will join our private class group to receive long-term feedback and support from me." },
      { question: "Will I have lifetime access to the materials?", answer: "All materials, mockup templates, and recorded videos will be shared via Google Drive and you will have lifetime access." }
    ]
  }
];
