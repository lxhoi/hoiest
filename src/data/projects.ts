export interface Project {
  title: string;
  folder: string;
  description: string;
  description_en: string;
  tags: string[];
  tags_en: string[];
  images: string[];
  thumbnail?: string;
  category: 'branding' | 'lettering' | 'packaging';
  about_quote?: string;
  about_quote_en?: string;
  about_content?: string;
  about_content_en?: string;
}

export const projects: Project[] = [
  {
    title: "Mezly Nail Lab",
    folder: "/projects/mezly-nail-lab",
    description: "Mézly Nail Lab là dự án xây dựng hệ thống nhận diện thương hiệu cho một không gian nail cao cấp, hướng đến trải nghiệm làm đẹp hiện đại, tinh tế và thư giãn. Thương hiệu tập trung vào sự cân bằng giữa kỹ thuật chăm sóc móng chuyên nghiệp và cảm xúc của khách hàng, nơi mỗi dịch vụ không chỉ là một quy trình làm đẹp mà còn là một khoảnh khắc tận hưởng bản thân.",
    description_en: "Mézly Nail Lab is a brand identity project for a premium nail space, aiming for a modern, sophisticated, and relaxing beauty experience. The brand focuses on the balance between professional nail care techniques and customer emotions, where each service is not just a beauty process but also a moment of self-indulgence.",
    tags: ["Nhận diện thương hiệu", "Nail Salon"],
    tags_en: ["Brand Identity", "Nail Salon"],
    about_quote: "Chăm sóc tỉ mỉ, thư giãn tĩnh lặng",
    about_content: `<p>Thách thức đặt ra là phát triển một hệ thống nhận diện cho Mézly Nail Lab lột tả được bản chất kép của thương hiệu: sự tinh xảo của nghệ thuật làm móng chuyên nghiệp kết hợp cùng sự mềm mại của một không gian tự chăm sóc. Thương hiệu cần mang lại cảm giác hiện đại, tinh tế mà không bị lạnh lẽo mang tính y khoa.</p>
<p>Khách hàng ngày càng xem việc chăm sóc móng không chỉ là một giải pháp làm đẹp nhanh chóng, mà là một nhịp dừng có chủ ý trong cuộc sống bận rộn. Họ khao khát một nghi thức chú tâm, nơi kỹ năng chuyên môn và sức khỏe tinh thần được coi trọng ngang nhau.</p>
<p>"Chăm sóc tỉ mỉ, thư giãn tĩnh lặng." Những nghi thức làm đẹp phát huy sức mạnh lớn nhất khi chúng giúp chúng ta sống chậm lại, biến mỗi chuyến ghé thăm thành một khoảnh khắc phục hồi nhỏ nhoi giữa đời thường.</p>
<p>Concept "Dòng chảy của Sơn" (The Polish Flow) kết hợp sự chính xác của kỹ thuật với bản chất mượt mà, thư giãn của trải nghiệm làm đẹp. Nó nhân tính hóa các khía cạnh lâm sàng của salon qua lăng kính của sự chân thực vật liệu và sự nuông chiều tĩnh lặng.</p>
<p>Trọng tâm của bộ nhận diện là một wordmark tinh tế với các nét chữ bo tròn nhẹ nhàng cùng đường nối "é-z" tùy chỉnh. Bảng màu lấy cảm hứng từ các vật liệu trong studio—màu trung tính nhẹ nhàng và tông da ấm áp—được hỗ trợ bởi typography sans-serif sạch sẽ và các đường nét đồ họa thanh mảnh.</p>
<p>Mézly đóng vai trò như một chốn tôn nghiêm phục hồi năng lượng, nâng tầm một giao dịch thẩm mỹ thông thường thành một khoảnh khắc cảm xúc mang đậm tính cá nhân và chữa lành toàn diện.</p>`,
    about_quote_en: "Crafted care, quietly indulgent",
    about_content_en: `<p>The challenge was to develop a brand identity for Mézly Nail Lab that captures its dual nature: the exacting craft of professional nail artistry paired with the softness of a space designed for self-care. It needed to feel modern and sophisticated without slipping into clinical coldness.</p>
<p>Customers increasingly view nail care not just as a quick beauty fix, but as a deliberate pause in their busy lives. They crave a mindful ritual where technical skill and emotional wellbeing are given equal weight.</p>
<p>"Crafted care, quietly indulgent." Beauty rituals are most powerful when they slow us down, treating each visit as a small, restorative moment carved out of the everyday.</p>
<p>The "Polish Flow" concept combines the precision of technical mastery with the fluid, relaxing nature of the beauty experience. It humanizes the clinical aspects of the salon through a lens of material honesty and quiet indulgence.</p>
<p>At the heart of the identity is a refined wordmark with subtly rounded letterforms and a custom "é-z" ligature. The palette draws from studio materials—soft neutrals and warm skin tones—supported by clean sans-serif typography and delicate linework.</p>
<p>Mézly acts as a restorative sanctuary, elevating a routine aesthetic transaction into a highly personal, emotional moment of holistic well-being.</p>`,
    thumbnail: "08.png",
    images: [
      "00.gif",
      "01.png",
      "02.png",
      "03.png",
      "04.png",
      "05.png",
      "06.png",
      "07.png",
      "08.png",
      "09.png",
      "10.png",
      "11.png",
      "12.png",
      "13.png",
      "14.png",
      "15.png",
      "16.png",
      "17.png",
      "18.png",
      "19.png",
      "20.png",
      "21.png",
      "22.png"
    ],
    category: 'branding',
  },
  {
    title: "SASON",
    folder: "/projects/sason",
    description:
      "SASON là thương hiệu khu nghỉ dưỡng ven biển theo đuổi triết lý sống chậm và hòa hợp cùng thiên nhiên. Với bảng màu ấm áp, mộc mạc gồm xanh rêu đậm và be kem nhẹ nhàng, bộ nhận diện thương hiệu được triển khai xuyên suốt mọi điểm chạm.\n\nLấy cảm hứng từ nhịp điệu tự nhiên của biển, cát và hàng dừa, SASON mời gọi du khách bước vào một chốn an yên, nơi sự tinh tế trong dịch vụ hòa quyện cùng sự giản đơn tĩnh tại, thể hiện qua từng chi tiết trong ngôn ngữ hình ảnh, từ biểu tượng logo mang phong cách huy hiệu đến các họa tiết thực vật xuất hiện xuyên suốt hành trình trải nghiệm của khách hàng.\n\nTừ ô dù bãi biển, tiện nghi phòng nghỉ đến đồng phục nhân viên, sản phẩm spa và ấn phẩm truyền thông, mang đến trải nghiệm liền mạch và thư thái từ lúc đặt chân đến khi rời đi.",
    description_en:
      "SASON is a coastal resort brand pursuing the philosophy of slow living and harmony with nature. With a warm, rustic palette of deep moss green and soft cream beige, the brand identity is implemented across all touchpoints.\n\nInspired by the natural rhythm of the sea, sand, and coconut trees, SASON invites visitors to a peaceful sanctuary, where refinement in service blends with serene simplicity, reflected in every detail of the visual language, from the badge-style logo emblem to botanical motifs appearing throughout the customer journey.\n\nFrom beach umbrellas and room amenities to staff uniforms, spa products, and promotional materials, it delivers a seamless and relaxing experience from arrival to departure.",
    tags: ["Nhận diện thương hiệu", "Nghỉ dưỡng", "Hệ thống thiết kế"],
    tags_en: ["Brand Identity", "Resort", "System Design"],
    about_quote: "Nhịp điệu biển khơi, thư thả và hài hoà",
    about_content: `<p>Thiết kế nhận diện cho một khu nghỉ dưỡng ven biển theo đuổi triết lý sống chậm và sự hòa hợp sâu sắc với thiên nhiên, thoát khỏi những khuôn mẫu xa xỉ đại trà.</p>
<p>Những du khách hiện đại đang bị quá tải bởi thông tin và công việc. Họ không chỉ muốn một nơi để ở; họ tìm kiếm một chốn tôn nghiêm nơi họ có thể ngắt kết nối và hòa nhịp lại với thiên nhiên.</p>
<p>"Nhịp điệu biển khơi, thư thả và hài hoà" – Đo lường sự trôi đi của thời gian bằng thủy triều và tiếng xào xạc của lá cây thay vì tiếng tích tắc của đồng hồ.</p>
<p>Làm mờ ranh giới giữa môi trường kiến trúc nhân tạo và cảnh quan ven biển nguyên sơ thông qua các tín hiệu thiết kế mang tính xúc giác và sự mộc mạc, bền vững.</p>
<p>Một biểu tượng mang phong cách huy hiệu cổ điển kết hợp với bảng màu ấm áp, mộc mạc của xanh rêu đậm và be kem nhẹ nhàng. Các họa tiết thực vật tinh tế chạy xuyên suốt mọi điểm chạm vật lý một cách có chủ ý.</p>
<p>SASON phục vụ như một chốn tôn nghiêm bình yên, hướng dẫn du khách dừng lại, hít thở và khôi phục sự cân bằng nội tại từ lúc đến cho đến khi rời đi.</p>`,
    about_quote_en: "A coastal rhythm, unhurried and harmonious",
    about_content_en: `<p>Design an identity for a coastal resort that pursues slow living and deep harmony with nature, moving away from generic luxury tropes.</p>
<p>Modern travelers are overstimulated. They don't just want a place to stay; they seek a sanctuary where they can disconnect and realign with natural rhythms.</p>
<p>"A coastal rhythm, unhurried and harmonious" – Measuring the passage of time by the tides and the rustle of leaves rather than the ticking of a clock.</p>
<p>Blurring the boundary between the built environment and the raw coastal landscape through tactile, grounded design cues.</p>
<p>A classic badge-style emblem paired with a warm, earthy palette of deep moss green and soft cream beige. Intricate botanical motifs run thoughtfully across all physical touchpoints.</p>
<p>SASON serves as a peaceful sanctuary, guiding guests to pause, breathe, and restore their inner balance from arrival to departure.</p>`,
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
      "22.webp",
      "23.webp",
      "24.webp",
      "25.webp",
      "26.webp",
    ],
    category: 'branding',
  },
  {
    title: "RẠNG Coffee & Tea",
    folder: "/projects/rang-coffee-tea",
    description:
      "Bộ nhận diện thương hiệu tươi sáng dành cho tiệm cà phê và trà, nổi bật với logotype chữ R tùy chỉnh. Thiết kế mang lại cảm giác gần gũi với tông màu cam bắt mắt, được ứng dụng linh hoạt trên biển hiệu, ly tách, bao bì và không gian quán.",
    description_en:
      "A bright coffee and tea identity with a custom R-led wordmark, warm retail cues, and a punchy orange system designed for signage, cups, packaging, and spatial touchpoints.",
    tags: ["Nhận diện thương hiệu", "Thiết kế chữ", "Bao bì", "Bán lẻ"],
    tags_en: ["Brand Identity", "Custom Lettering", "Packaging", "Retail"],
    about_quote: "Hương vị ấm áp và tràn đầy năng lượng trong từng ly",
    about_content: `<p>Tạo ra một bộ nhận diện cho một tiệm cà phê và trà sôi động trong khu phố, nổi bật giữa thị trường F&B đông đúc nhưng vẫn mang lại cảm giác dễ gần ngay lập tức.</p>
<p>Mọi người đến quán cà phê địa phương không chỉ vì caffeine, mà vì một tia sáng niềm vui, sự ấm áp và sự kết nối cộng đồng mỗi ngày để bắt đầu thói quen của họ.</p>
<p>"Hương vị ấm áp và tràn đầy năng lượng trong từng ly" – Một thương hiệu tỏa ra sự lạc quan và hoạt động như một ngọn hải đăng của sự tích cực.</p>
<p>Một trải nghiệm bán lẻ mang tính cá nhân hóa cao, được định hình bởi cá tính, tập trung vào một điểm neo nghệ thuật chữ (typography) được chế tác tỉ mỉ và đầy tự tin.</p>
<p>Một logotype chữ 'R' vẽ tay táo bạo neo giữ toàn bộ hệ thống, đi kèm với màu cam đặc trưng bùng nổ, năng động được ứng dụng trên ly, bao bì và các biển hiệu không gian ấn tượng.</p>
<p>RẠNG hoạt động như một chất xúc tác hàng ngày cho niềm vui, khơi mào các cuộc trò chuyện và thắp sáng thói quen mỗi ngày của khu phố.</p>`,
    about_quote_en: "Vibrant warmth in every cup",
    about_content_en: `<p>Create an identity for a vibrant neighborhood coffee and tea shop that stands out in a crowded F&B market while feeling immediately approachable.</p>
<p>People visit local cafes not just for caffeine, but for a daily spark of joy, warmth, and community connection to kickstart their routine.</p>
<p>"Vibrant warmth in every cup" – A brand that radiates optimism and acts as a beacon of positivity.</p>
<p>A highly personalized, personality-driven retail experience centered around a bespoke typographic hook that feels crafted and confident.</p>
<p>A bold, custom-drawn 'R' logotype anchoring the system, accompanied by a punchy, energetic orange signature hue applied across cups, packaging, and striking spatial signage.</p>
<p>RẠNG acts as a daily catalyst for joy, sparking conversations and brightening the neighborhood's everyday routine.</p>`,
    images: [
      "01.webp",
      "02.webp",
      "03.webp",
      "04.webp",
      "05-A.gif",
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
    about_quote: "Năng lượng bùng nổ, tác động mạnh mẽ",
    about_content: `<p>Phát triển một hệ thống nhận diện thương hiệu cho trung tâm thể hình năng lượng cao, truyền tải sức mạnh, sự chuyển động nghiêm túc và quá trình lột xác thể chất mãnh liệt.</p>
<p>Những người đam mê thể hình thực thụ muốn một thương hiệu phù hợp với cường độ tập luyện thô ráp của họ—một thứ gì đó không khoan nhượng và tập trung cao độ, thoát khỏi tính thẩm mỹ của các phòng tập lifestyle nhẹ nhàng.</p>
<p>"Năng lượng bùng nổ, tác động mạnh mẽ" – Một tiếng gọi tập hợp nhằm tiếp sức mạnh cho các hội viên vượt qua những giới hạn thể chất của họ.</p>
<p>Một hệ thống thị giác được xây dựng như một con dấu của sự cam kết và sức mạnh nguyên thủy, thúc đẩy cộng đồng thông qua các tín hiệu thị giác có độ tương phản cao, kích thích adrenaline.</p>
<p>Typography dày dặn, không khoan nhượng được làm nền tảng bởi màu xanh điện (electric blue) nổi bật làm điểm nhấn. Một chữ lồng (monogram) linh hoạt, năng động có khả năng mở rộng mượt mà từ hình thêu trên trang phục đến áp phích truyền cảm hứng khổ lớn.</p>
<p>Khansfit trao quyền cho cộng đồng của mình, đóng vai trò như một người đồng hành không khoan nhượng, mang lại tác động lớn trong hành trình vươn tới sự hoàn hảo về thể chất của họ.</p>`,
    about_quote_en: "Electric energy, heavy impact",
    about_content_en: `<p>Develop a brand identity for a high-energy fitness center that communicates strength, serious movement, and intense physical transformation.</p>
<p>Dedicated fitness enthusiasts want a brand that matches their raw intensity—something unapologetic and focused, breaking away from soft lifestyle gym aesthetics.</p>
<p>"Electric energy, heavy impact" – A rallying cry that empowers members to push their physical boundaries.</p>
<p>A visual system built as a stamp of commitment and raw power, motivating the community through high-contrast, adrenaline-pumping visual cues.</p>
<p>Heavy, uncompromising typography grounded by an electric blue accent color. A flexible, dynamic monogram scales seamlessly from apparel embroidery to large-scale motivational posters.</p>
<p>Khansfit empowers its community, serving as an uncompromising, high-impact partner in their journey toward physical excellence.</p>`,
    images: [
      "01.webp",
      "02.webp",
      "03.webp",
      "08.gif",
      "04.webp",
      "07.gif",
      "05.webp",
      "06.webp",
      "09.gif",
      "10.webp",
      "11.webp",
      "12.webp",
      "13.webp",
      "14.webp",
      "22.gif",
      "16.gif",
      "17.webp",
      "18.webp",
      "21.webp",
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
    about_quote: "Vẻ đẹp vượt thời gian, định hình sắc sảo",
    about_content: `<p>Tạo ra một bộ nhận diện hiện đại cho một thương hiệu trang sức cao cấp, cân bằng hoàn hảo giữa nghệ thuật thủ công truyền thống với sự thanh lịch, tinh tế đương đại.</p>
<p>Sự sang trọng thực sự không cần phải ồn ào. Nó cho phép những chi tiết tinh xảo của sản phẩm tự lên tiếng bằng cách loại bỏ những yếu tố thị giác rườm rà.</p>
<p>"Vẻ đẹp vượt thời gian, định hình sắc sảo" – Đạt được sự sang trọng đẳng cấp thông qua cấu trúc rõ ràng và sự tiết chế tuyệt đối.</p>
<p>Bộ nhận diện đóng vai trò như một khung nền sang trọng, tĩnh lặng, đảm bảo trang sức vẫn là tâm điểm không thể bàn cãi mà không cần sự phô trương thừa thãi.</p>
<p>Một ngôn ngữ typography uy quyền, tinh tế sử dụng nhiều khoảng trắng (negative space). Tính thẩm mỹ sạch sẽ và dễ dàng mở rộng quy mô từ bao bì tinh xảo cho đến một mặt tiền cửa hàng kỹ thuật số mượt mà.</p>
<p>Winola đóng vai trò là một người giám tuyển cho vẻ đẹp vượt thời gian, cung cấp cho khách hàng những biểu tượng thanh lịch bền vững vượt qua những xu hướng phù du.</p>`,
    about_quote_en: "Timeless elegance, sharply defined",
    about_content_en: `<p>Craft a modern identity for a fine jewelry brand that perfectly balances traditional craftsmanship with contemporary, sophisticated elegance.</p>
<p>True luxury doesn't need to shout. It allows the exquisite detail of the product to speak for itself by removing visual clutter.</p>
<p>"Timeless elegance, sharply defined" – Achieving premium luxury through structural clarity and absolute restraint.</p>
<p>The identity acts as a quiet, luxurious framework, ensuring the jewelry remains the undisputed focal point without unnecessary ostentation.</p>
<p>A refined, authoritative typographic language utilizing heavy negative space. The aesthetic is clean and scales effortlessly from delicate packaging to a seamless digital storefront.</p>
<p>Winola acts as a curator of timeless beauty, providing customers with enduring symbols of elegance that transcend fleeting trends.</p>`,
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
    title: "Yummy Feast",
    folder: "/projects/yummy-feast",
    description: "Dự án thiết kế bao bì cho thương hiệu Yummy Feast.",
    description_en: "Packaging design project for Yummy Feast brand.",
    tags: ["Bao bì", "Thiết kế bao bì"],
    tags_en: ["Packaging", "Packaging Design"],
    about_quote_en: "Every stick is a complete meal",
    about_content_en: `<p>Design packaging for a complete meal cat food in multiple formats (pouch and stick), clearly differentiating it from typical pet snacks while highlighting core nutritional metrics.</p>
<p>Serious pet owners read labels like nutrition science. Packaging that looks like a cheap, impulse-buy treat actively undermines the product's credibility and quality.</p>
<p>"Every stick is a complete meal" – Presenting pet food with the exact same scientific clarity and rigor as human nutritional supplements.</p>
<p>Borrowing the visual vocabulary of nutrition science to convey data-backed trust, while using a minimal mascot to keep the brand approachable and humane.</p>
<p>A clean white base, bold functional color-blocking for instant flavor recognition, and a dedicated information panel highlighting key metrics (37%, 58%, 5000mg) with a confident sans-serif wordmark.</p>
<p>Yummy Feast serves as a trusted nutritional partner, elevating feline convenience food to a science-led, primary meal that owners can feed with absolute confidence.</p>`,
    about_quote: "Mỗi thanh là một bữa ăn trọn vẹn",
    about_content: `<p>Thiết kế bao bì cho thức ăn mèo dạng bữa ăn hoàn chỉnh với nhiều định dạng (túi zip và thanh đơn), phân biệt rõ ràng nó với các loại đồ ăn vặt thông thường trong khi làm nổi bật các chỉ số dinh dưỡng cốt lõi.</p>
<p>Những người nuôi thú cưng nghiêm túc đọc nhãn mác như khoa học dinh dưỡng. Bao bì trông giống như một món ăn vặt bốc đồng, rẻ tiền sẽ chủ động làm giảm đi uy tín và chất lượng của sản phẩm.</p>
<p>"Mỗi thanh là một bữa ăn trọn vẹn" – Trình bày thức ăn cho thú cưng với cùng sự rõ ràng và nghiêm ngặt mang tính khoa học như các sản phẩm dinh dưỡng bổ sung của con người.</p>
<p>Vay mượn từ vựng thị giác của khoa học dinh dưỡng để truyền tải sự tin cậy dựa trên dữ liệu, đồng thời sử dụng một linh vật tối giản để giữ cho thương hiệu luôn thân thiện và giàu cảm xúc.</p>
<p>Nền trắng sạch sẽ, những mảng màu chức năng táo bạo giúp nhận diện hương vị ngay lập tức, và một bảng thông tin chuyên dụng làm nổi bật các chỉ số quan trọng (37%, 58%, 5000mg) với wordmark sans-serif tự tin.</p>
<p>Yummy Feast phục vụ như một đối tác dinh dưỡng đáng tin cậy, nâng tầm thức ăn tiện lợi cho mèo thành một bữa ăn chính, dẫn dắt bởi khoa học mà người nuôi có thể cho ăn với sự tự tin tuyệt đối.</p>`,
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
    ],
    category: 'packaging',
  },
  {
    title: "Đẳng cấp",
    folder: "/projects/lettering",
    description: "Tác phẩm lettering Đẳng cấp.",
    description_en: "Lettering artwork: Đẳng cấp.",
    tags: ["Lettering", "Typography", "Nghệ thuật chữ"],
    tags_en: ["Lettering", "Typography", "Word Art"],
    about_quote: "Nghệ thuật của chữ viết",
    about_content: `<p>Một cuộc thám hiểm nghệ thuật chữ tự khởi xướng nhằm đẩy lùi những ranh giới của thiết kế lettering tùy chỉnh và khả năng biểu đạt thị giác.</p>
<p>Các con chữ thường chỉ được xem như những phương tiện chức năng để đọc, phớt lờ đi tiềm năng to lớn của chúng với tư cách là nghệ thuật thị giác độc lập.</p>
<p>"Nghệ thuật của chữ viết" – Nâng tầm typography để trở thành chủ thể thị giác chính yếu.</p>
<p>Tái cấu trúc các hình thái chữ cái tiêu chuẩn để tạo ra các tác phẩm nghệ thuật riêng biệt, dẫn dắt bởi nhịp điệu nhằm truyền tải cảm xúc ngay cả trước khi chúng được đọc.</p>
<p>Những đường cong chuẩn xác, các nét nối (ligatures) độc đáo, cùng sự nhấn mạnh mạnh mẽ vào sự cân bằng cấu trúc, dòng chảy và khoảng trắng.</p>
<p>Đóng vai trò như một minh chứng cho tay nghề thủ công, các tác phẩm này truyền cảm hứng cho một sự trân trọng sâu sắc hơn đối với vẻ đẹp biểu cảm và tinh tế của typography.</p>`,
    about_quote_en: "The art of the written word",
    about_content_en: `<p>A self-initiated typographic exploration to push the boundaries of custom lettering and visual expression.</p>
<p>Letters are often viewed merely as functional vessels for reading, ignoring their profound potential as standalone visual art.</p>
<p>"The art of the written word" – Elevating typography to become the primary visual subject.</p>
<p>Deconstructing standard letterforms to create bespoke, rhythm-driven artwork that conveys emotion before it is even read.</p>
<p>Precise curves, unique ligatures, and a strong emphasis on structural balance, flow, and negative space.</p>
<p>Acting as a testament to craftsmanship, these artworks inspire a deeper appreciation for the nuanced, expressive beauty of typography.</p>`,
    images: ["dang-cap.jpg"],
    category: 'lettering',
  },
  {
    title: "Ghet Xog Lai Thik",
    folder: "/projects/lettering",
    description: "Tác phẩm lettering Ghet Xog Lai Thik.",
    description_en: "Lettering artwork: Ghet Xog Lai Thik.",
    tags: ["Lettering", "Typography", "Nghệ thuật chữ"],
    tags_en: ["Lettering", "Typography", "Word Art"],
    about_quote: "Nghệ thuật của chữ viết",
    about_content: `<p>Một cuộc thám hiểm nghệ thuật chữ tự khởi xướng nhằm đẩy lùi những ranh giới của thiết kế lettering tùy chỉnh và khả năng biểu đạt thị giác.</p>
<p>Các con chữ thường chỉ được xem như những phương tiện chức năng để đọc, phớt lờ đi tiềm năng to lớn của chúng với tư cách là nghệ thuật thị giác độc lập.</p>
<p>"Nghệ thuật của chữ viết" – Nâng tầm typography để trở thành chủ thể thị giác chính yếu.</p>
<p>Tái cấu trúc các hình thái chữ cái tiêu chuẩn để tạo ra các tác phẩm nghệ thuật riêng biệt, dẫn dắt bởi nhịp điệu nhằm truyền tải cảm xúc ngay cả trước khi chúng được đọc.</p>
<p>Những đường cong chuẩn xác, các nét nối (ligatures) độc đáo, cùng sự nhấn mạnh mạnh mẽ vào sự cân bằng cấu trúc, dòng chảy và khoảng trắng.</p>
<p>Đóng vai trò như một minh chứng cho tay nghề thủ công, các tác phẩm này truyền cảm hứng cho một sự trân trọng sâu sắc hơn đối với vẻ đẹp biểu cảm và tinh tế của typography.</p>`,
    about_quote_en: "The art of the written word",
    about_content_en: `<p>A self-initiated typographic exploration to push the boundaries of custom lettering and visual expression.</p>
<p>Letters are often viewed merely as functional vessels for reading, ignoring their profound potential as standalone visual art.</p>
<p>"The art of the written word" – Elevating typography to become the primary visual subject.</p>
<p>Deconstructing standard letterforms to create bespoke, rhythm-driven artwork that conveys emotion before it is even read.</p>
<p>Precise curves, unique ligatures, and a strong emphasis on structural balance, flow, and negative space.</p>
<p>Acting as a testament to craftsmanship, these artworks inspire a deeper appreciation for the nuanced, expressive beauty of typography.</p>`,
    images: ["ghet-xog-lai-thik.jpg"],
    category: 'lettering',
  },
  {
    title: "Ngày của mẹ",
    folder: "/projects/lettering",
    description: "Tác phẩm lettering Ngày của mẹ.",
    description_en: "Lettering artwork: Ngày của mẹ.",
    tags: ["Lettering", "Typography", "Nghệ thuật chữ"],
    tags_en: ["Lettering", "Typography", "Word Art"],
    about_quote: "Nghệ thuật của chữ viết",
    about_content: `<p>Một cuộc thám hiểm nghệ thuật chữ tự khởi xướng nhằm đẩy lùi những ranh giới của thiết kế lettering tùy chỉnh và khả năng biểu đạt thị giác.</p>
<p>Các con chữ thường chỉ được xem như những phương tiện chức năng để đọc, phớt lờ đi tiềm năng to lớn của chúng với tư cách là nghệ thuật thị giác độc lập.</p>
<p>"Nghệ thuật của chữ viết" – Nâng tầm typography để trở thành chủ thể thị giác chính yếu.</p>
<p>Tái cấu trúc các hình thái chữ cái tiêu chuẩn để tạo ra các tác phẩm nghệ thuật riêng biệt, dẫn dắt bởi nhịp điệu nhằm truyền tải cảm xúc ngay cả trước khi chúng được đọc.</p>
<p>Những đường cong chuẩn xác, các nét nối (ligatures) độc đáo, cùng sự nhấn mạnh mạnh mẽ vào sự cân bằng cấu trúc, dòng chảy và khoảng trắng.</p>
<p>Đóng vai trò như một minh chứng cho tay nghề thủ công, các tác phẩm này truyền cảm hứng cho một sự trân trọng sâu sắc hơn đối với vẻ đẹp biểu cảm và tinh tế của typography.</p>`,
    about_quote_en: "The art of the written word",
    about_content_en: `<p>A self-initiated typographic exploration to push the boundaries of custom lettering and visual expression.</p>
<p>Letters are often viewed merely as functional vessels for reading, ignoring their profound potential as standalone visual art.</p>
<p>"The art of the written word" – Elevating typography to become the primary visual subject.</p>
<p>Deconstructing standard letterforms to create bespoke, rhythm-driven artwork that conveys emotion before it is even read.</p>
<p>Precise curves, unique ligatures, and a strong emphasis on structural balance, flow, and negative space.</p>
<p>Acting as a testament to craftsmanship, these artworks inspire a deeper appreciation for the nuanced, expressive beauty of typography.</p>`,
    images: ["ngay-cua-me.jpg"],
    category: 'lettering',
  },
  {
    title: "Vạn sự như ý",
    folder: "/projects/lettering",
    description: "Tác phẩm lettering Vạn sự như ý.",
    description_en: "Lettering artwork: Vạn sự như ý.",
    tags: ["Lettering", "Typography", "Nghệ thuật chữ"],
    tags_en: ["Lettering", "Typography", "Word Art"],
    about_quote: "Nghệ thuật của chữ viết",
    about_content: `<p>Một cuộc thám hiểm nghệ thuật chữ tự khởi xướng nhằm đẩy lùi những ranh giới của thiết kế lettering tùy chỉnh và khả năng biểu đạt thị giác.</p>
<p>Các con chữ thường chỉ được xem như những phương tiện chức năng để đọc, phớt lờ đi tiềm năng to lớn của chúng với tư cách là nghệ thuật thị giác độc lập.</p>
<p>"Nghệ thuật của chữ viết" – Nâng tầm typography để trở thành chủ thể thị giác chính yếu.</p>
<p>Tái cấu trúc các hình thái chữ cái tiêu chuẩn để tạo ra các tác phẩm nghệ thuật riêng biệt, dẫn dắt bởi nhịp điệu nhằm truyền tải cảm xúc ngay cả trước khi chúng được đọc.</p>
<p>Những đường cong chuẩn xác, các nét nối (ligatures) độc đáo, cùng sự nhấn mạnh mạnh mẽ vào sự cân bằng cấu trúc, dòng chảy và khoảng trắng.</p>
<p>Đóng vai trò như một minh chứng cho tay nghề thủ công, các tác phẩm này truyền cảm hứng cho một sự trân trọng sâu sắc hơn đối với vẻ đẹp biểu cảm và tinh tế của typography.</p>`,
    about_quote_en: "The art of the written word",
    about_content_en: `<p>A self-initiated typographic exploration to push the boundaries of custom lettering and visual expression.</p>
<p>Letters are often viewed merely as functional vessels for reading, ignoring their profound potential as standalone visual art.</p>
<p>"The art of the written word" – Elevating typography to become the primary visual subject.</p>
<p>Deconstructing standard letterforms to create bespoke, rhythm-driven artwork that conveys emotion before it is even read.</p>
<p>Precise curves, unique ligatures, and a strong emphasis on structural balance, flow, and negative space.</p>
<p>Acting as a testament to craftsmanship, these artworks inspire a deeper appreciation for the nuanced, expressive beauty of typography.</p>`,
    images: ["van-su-nhu-y.jpg"],
    category: 'lettering',
  },
  {
    title: "Phú Yên 78",
    folder: "/projects/lettering",
    description: "Tác phẩm lettering Phú Yên 78.",
    description_en: "Lettering artwork: Phu Yen 78.",
    tags: ["Lettering", "Typography", "Nghệ thuật chữ"],
    tags_en: ["Lettering", "Typography", "Word Art"],
    about_quote: "Nghệ thuật của chữ viết",
    about_content: `<p>Một cuộc thám hiểm nghệ thuật chữ tự khởi xướng nhằm đẩy lùi những ranh giới của thiết kế lettering tùy chỉnh và khả năng biểu đạt thị giác.</p>
<p>Các con chữ thường chỉ được xem như những phương tiện chức năng để đọc, phớt lờ đi tiềm năng to lớn của chúng với tư cách là nghệ thuật thị giác độc lập.</p>
<p>"Nghệ thuật của chữ viết" – Nâng tầm typography để trở thành chủ thể thị giác chính yếu.</p>
<p>Tái cấu trúc các hình thái chữ cái tiêu chuẩn để tạo ra các tác phẩm nghệ thuật riêng biệt, dẫn dắt bởi nhịp điệu nhằm truyền tải cảm xúc ngay cả trước khi chúng được đọc.</p>
<p>Những đường cong chuẩn xác, các nét nối (ligatures) độc đáo, cùng sự nhấn mạnh mạnh mẽ vào sự cân bằng cấu trúc, dòng chảy và khoảng trắng.</p>
<p>Đóng vai trò như một minh chứng cho tay nghề thủ công, các tác phẩm này truyền cảm hứng cho một sự trân trọng sâu sắc hơn đối với vẻ đẹp biểu cảm và tinh tế của typography.</p>`,
    about_quote_en: "The art of the written word",
    about_content_en: `<p>A self-initiated typographic exploration to push the boundaries of custom lettering and visual expression.</p>
<p>Letters are often viewed merely as functional vessels for reading, ignoring their profound potential as standalone visual art.</p>
<p>"The art of the written word" – Elevating typography to become the primary visual subject.</p>
<p>Deconstructing standard letterforms to create bespoke, rhythm-driven artwork that conveys emotion before it is even read.</p>
<p>Precise curves, unique ligatures, and a strong emphasis on structural balance, flow, and negative space.</p>
<p>Acting as a testament to craftsmanship, these artworks inspire a deeper appreciation for the nuanced, expressive beauty of typography.</p>`,
    images: ["phu-yen-78.jpg"],
    category: 'lettering',
  }
];
