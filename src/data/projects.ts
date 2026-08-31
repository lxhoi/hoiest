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
    about_content: `<p><strong>Khai thác Brief</strong></p>
<p>Mézly Nail Lab ra đời với bài toán xây dựng hệ thống nhận diện thương hiệu cho một không gian nail cao cấp—nơi hướng đến trải nghiệm làm đẹp hiện đại, tinh tế và thư giãn. Thách thức đặt ra không chỉ là tạo một bộ nhận diện đẹp mắt, mà phải phản ánh đúng bản chất kép của dịch vụ: sự chính xác của kỹ thuật chăm sóc móng chuyên nghiệp, song hành với chiều sâu cảm xúc mà mỗi khách hàng tìm kiếm khi bước vào không gian này.</p>
<p><strong>Insight</strong></p>
<p>Phần lớn các salon nail định vị mình quanh tốc độ và số lượng dịch vụ—nơi khách hàng đến, làm móng, rồi rời đi trong một quy trình lặp lại. Nhưng với nhóm khách hàng mà Mézly hướng tới, một buổi làm nail không đơn thuần là việc hoàn thiện đôi tay—đó là một khoảng nghỉ hiếm hoi giữa nhịp sống bận rộn, nơi họ cho phép bản thân được chăm sóc kỹ lưỡng và chậm rãi. Cơ hội cho thương hiệu nằm ở việc tôn vinh chính khoảnh khắc chuyển động ấy—sự mềm mại, uyển chuyển của quá trình làm đẹp—thay vì chỉ tập trung vào kết quả cuối cùng.</p>
<p><strong>Big Idea</strong></p>
<p>Từ insight đó, ý tưởng lớn được định hình: làm đẹp là một dòng chảy—nơi kỹ thuật, sự tinh tế và cảm xúc hòa quyện liên tục trong từng thao tác, từng lớp sơn, từng khoảnh khắc tận hưởng. Mézly không chỉ bán một dịch vụ làm móng, mà mang đến một trải nghiệm được vận hành như một dòng chảy liền mạch, êm ái từ đầu đến cuối.</p>
<p><strong>Concept & Hình ảnh hiện lên</strong></p>
<p>Ý tưởng này được cụ thể hóa qua biểu tượng trung tâm của thương hiệu—The Polish Flow. Lấy cảm hứng từ chuyển động mềm mại của lớp sơn gel trên bề mặt móng, biểu tượng gồm hai đường cong song song, tượng trưng cho dòng chảy của sự chăm sóc: nơi kỹ thuật, sự tinh tế và cảm xúc hòa quyện trong từng trải nghiệm làm đẹp. Chỉ với hai nét chuyển động nhỏ, biểu tượng đã gói trọn triết lý cốt lõi của Mézly—tạo nên vẻ đẹp nhẹ nhàng, hiện đại và đầy tính nghệ thuật từ những chuyển động tưởng chừng đơn giản nhất.</p>
<p>Wordmark "mézly" được thiết kế với những đường nét bo tròn, mềm mại, đồng điệu với tinh thần uyển chuyển của biểu tượng, trong khi vẫn giữ được sự hiện đại và tinh tế cần thiết cho một thương hiệu cao cấp. Trên nền trắng sạch, sắc đỏ rượu vang ấm áp của sơn móng trở thành điểm nhấn thị giác chủ đạo, vừa gợi liên tưởng trực tiếp đến chất liệu cốt lõi của ngành, vừa mang lại cảm giác sang trọng, quyến rũ. Ở một thái cực khác trong hệ màu, tông xanh rêu đậm—nơi biểu tượng Polish Flow được thể hiện—mang đến chiều sâu và sự tĩnh tại, cân bằng cho sự sôi động của sắc đỏ.</p>
<p><strong>Vai trò thương hiệu</strong></p>
<p>Với hệ thống nhận diện này, Mézly Nail Lab định vị mình không chỉ là một điểm đến làm đẹp, mà là một không gian nơi mỗi khách hàng được mời gọi chậm lại và tận hưởng. Thương hiệu đóng vai trò như một người dẫn dắt tinh tế—biến mỗi lần chăm sóc móng thành một nghi thức nhỏ, nơi sự chuẩn xác kỹ thuật và cảm xúc cá nhân được tôn trọng ngang nhau, và mỗi chuyển động, dù nhỏ nhất, đều góp phần tạo nên một trải nghiệm làm đẹp trọn vẹn và đáng nhớ.</p>`,
    about_quote_en: "Crafted care, quietly indulgent",
    about_content_en: `<p><strong>The Brief</strong></p>
<p>Mézly Nail Lab emerged with the challenge of building a brand identity for a premium nail space—one that aspires to offer a modern, sophisticated, and relaxing beauty experience. The challenge was not just to create a beautiful identity, but to accurately reflect the dual nature of the service: the precision of professional nail care techniques, paired with the emotional depth that every customer seeks when entering this space.</p>
<p><strong>Insight</strong></p>
<p>Most nail salons position themselves around speed and service volume—where customers come, get their nails done, and leave in a repetitive process. But for the clientele Mézly aims to serve, a nail appointment is not merely about perfecting their hands—it is a rare pause in a busy life, a moment where they allow themselves to be cared for meticulously and unhurriedly. The opportunity for the brand lies in celebrating this very moment of movement—the softness and fluidity of the beauty process—rather than focusing solely on the end result.</p>
<p><strong>Big Idea</strong></p>
<p>From that insight, the big idea took shape: beauty is a flow—where technique, sophistication, and emotion continuously blend in every action, every coat of polish, every moment of indulgence. Mézly is not just selling a nail service; it delivers an experience that flows seamlessly and smoothly from beginning to end.</p>
<p><strong>Concept & Visual Identity</strong></p>
<p>This idea is materialized through the brand's central emblem—The Polish Flow. Inspired by the smooth movement of gel polish on the nail surface, the emblem features two parallel curves representing the flow of care: where technique, refinement, and emotion intertwine in every beauty experience. With just two subtle strokes, the emblem encapsulates Mézly's core philosophy—creating a gentle, modern, and artistic beauty from the seemingly simplest movements.</p>
<p>The "mézly" wordmark is designed with soft, rounded contours, harmonizing with the fluid spirit of the emblem, while retaining the modernity and sophistication essential for a premium brand. Against a clean white background, the warm burgundy hue of nail polish becomes the primary visual anchor, directly evoking the core material of the industry while conveying a sense of luxury and allure. On the opposite end of the color spectrum, a deep moss green—where the Polish Flow emblem is showcased—brings depth, tranquility, and balance to the vibrancy of the red.</p>
<p><strong>Brand Role</strong></p>
<p>Through this visual identity, Mézly Nail Lab positions itself not merely as a beauty destination, but as a space where every customer is invited to slow down and indulge. The brand acts as a sophisticated guide—transforming every nail session into a small ritual, where technical precision and personal emotion are equally respected, and every movement, no matter how small, contributes to a complete and memorable beauty experience.</p>`,
    thumbnail: "08.webp",
    images: [
      "00.gif",
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
      "22.webp"
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
    about_content: `<p><strong>Khai thác Brief</strong></p>
<p>SASON là thương hiệu khu nghỉ dưỡng ven biển, được xây dựng trên triết lý sống chậm và hòa hợp cùng thiên nhiên. Bài toán đặt ra cho dự án là phát triển một hệ thống nhận diện có khả năng triển khai nhất quán trên vô số điểm chạm—từ ô dù bãi biển, tiện nghi phòng nghỉ, đến đồng phục nhân viên, sản phẩm spa và ấn phẩm truyền thông—mà vẫn giữ được sự tinh tế, mộc mạc đúng tinh thần thương hiệu muốn hướng tới.</p>
<p><strong>Insight</strong></p>
<p>Trong ngành nghỉ dưỡng ven biển, phần lớn các thương hiệu chọn cách phô diễn sự sang trọng qua bề mặt: kiến trúc hoành tráng, tiện nghi xa hoa, hình ảnh bóng bẩy. Nhưng với những du khách tìm đến biển không phải để "được phục vụ" mà để "được chậm lại", sự sang trọng thực sự lại nằm ở khả năng hòa mình vào nhịp điệu tự nhiên—tiếng sóng, chuyển động của cát, bóng dừa đung đưa. Cơ hội cho SASON là xây dựng một thương hiệu không cố gắng áp đặt lên cảnh quan, mà học theo chính nhịp điệu của nó.</p>
<p><strong>Big Idea</strong></p>
<p>Từ đó, ý tưởng lớn được hình thành: <em>sự sống động đến từ nhịp điệu tự nhiên của biển, cát và hàng dừa</em>. SASON mời gọi du khách bước vào một chốn an yên, nơi sự tinh tế trong dịch vụ hòa quyện cùng sự giản đơn tĩnh tại—không phải bằng sự phô trương, mà bằng cách để mọi chi tiết cùng chuyển động theo một hơi thở chung.</p>
<p><strong>Concept & Hình ảnh hiện lên</strong></p>
<p>Ý tưởng này được thể hiện rõ nhất qua wordmark trung tâm của thương hiệu, nơi chữ "O" trong SASON được thay thế bằng một biểu tượng đặc biệt—hai lớp hình trăng khuyết lồng vào nhau, gợi liên tưởng đến vòng tuần hoàn của thủy triều, nhịp lên xuống bất tận của biển cả. Chi tiết nhỏ nhưng giàu ý nghĩa này trở thành trái tim của cả hệ thống nhận diện, vừa hiện đại vừa mang hơi thở tự nhiên.</p>
<p>Mở rộng từ đó, một huy hiệu đồng tâm dạng vòng tròn được phát triển như một dấu ấn thị giác phụ trợ—các đường tròn lồng nhau gợi nhắc đến vân gỗ, gợn sóng lan trên mặt nước, hay những vòng tuổi của cây dừa, củng cố cảm giác về sự bền vững và trường tồn theo thời gian tự nhiên.</p>
<p>Bảng màu được xây dựng từ chính chất liệu của không gian: xanh rêu đậm của tán lá rợp bóng, be kem nhẹ nhàng của cát và ánh nắng. Sự kết hợp này tạo nên một nền tảng ấm áp, mộc mạc, cho phép thương hiệu lùi lại phía sau cảnh quan thay vì cạnh tranh với nó. Xuyên suốt hành trình trải nghiệm của khách hàng, các họa tiết thực vật lấy cảm hứng từ hàng dừa xuất hiện và ẩn hiện linh hoạt, tạo nên một nhịp điệu thị giác nhất quán mà không cứng nhắc.</p>
<p><strong>Vai trò thương hiệu</strong></p>
<p>Với hệ thống nhận diện này, SASON không đơn thuần đóng vai trò một khu nghỉ dưỡng, mà trở thành một lời mời gọi—nơi mỗi du khách được khuyến khích buông bỏ nhịp sống vội vã để hòa mình vào nhịp điệu chậm rãi của thiên nhiên. Thương hiệu đóng vai trò như một người dẫn lối tinh tế, đảm bảo rằng từ khoảnh khắc đặt chân đến cho tới lúc rời đi, mọi trải nghiệm đều liền mạch, thư thái và mang đậm dấu ấn riêng—một sự sang trọng được định nghĩa không phải bằng sự phô trương, mà bằng sự hòa hợp.</p>`,
    about_quote_en: "A coastal rhythm, unhurried and harmonious",
    about_content_en: `<p><strong>The Brief</strong></p>
<p>SASON is a coastal resort brand built on the philosophy of slow living and harmony with nature. The challenge for the project was to develop a brand identity capable of being consistently implemented across countless touchpoints—from beach umbrellas and room amenities to staff uniforms, spa products, and promotional materials—while retaining the refined, rustic spirit the brand aspires to project.</p>
<p><strong>Insight</strong></p>
<p>In the coastal resort industry, most brands choose to showcase luxury through the surface: grandiose architecture, extravagant amenities, and polished imagery. But for travelers who seek out the sea not to "be served" but to "slow down," true luxury lies in the ability to merge with the natural rhythm—the sound of the waves, the shifting of the sand, the swaying of palm shadows. The opportunity for SASON was to build a brand that does not try to impose itself on the landscape, but rather learns from its very rhythm.</p>
<p><strong>Big Idea</strong></p>
<p>From this, the big idea was formed: <em>vibrancy comes from the natural rhythm of the sea, the sand, and the coconut palms</em>. SASON invites guests into a peaceful sanctuary, where refined service blends with tranquil simplicity—not through ostentation, but by allowing every detail to move to a shared breath.</p>
<p><strong>Concept & Visual Identity</strong></p>
<p>This idea is most clearly expressed through the brand's central wordmark, where the letter "O" in SASON is replaced by a distinctive symbol—two interlocking crescent shapes that evoke the cycle of the tides, the endless ebb and flow of the ocean. This small but meaningful detail becomes the heart of the entire identity system, feeling both modern and deeply natural.</p>
<p>Expanding from this, a concentric circular badge was developed as a secondary visual hallmark—nestled circles reminiscent of wood grain, ripples spreading across water, or the growth rings of a palm tree, reinforcing a sense of sustainability and endurance over natural time.</p>
<p>The color palette is drawn directly from the materials of the environment: the deep moss green of shaded foliage, the soft cream beige of sand and sunlight. This combination creates a warm, earthy foundation, allowing the brand to step back into the landscape rather than competing with it. Throughout the customer's journey, botanical motifs inspired by palm rows flexibly appear and recede, establishing a consistent yet unrigid visual rhythm.</p>
<p><strong>Brand Role</strong></p>
<p>With this identity system, SASON serves not merely as a resort, but as an invitation—where every guest is encouraged to let go of the hurried pace of life and immerse themselves in the slow rhythm of nature. The brand acts as a subtle guide, ensuring that from the moment of arrival to the time of departure, every experience is seamless, relaxing, and distinctly memorable—a luxury defined not by extravagance, but by harmony.</p>`,
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
    about_content: `<p><strong>Khai thác Brief</strong></p>
<p>RẠNG ra đời như một thương hiệu cà phê Việt Nam đương đại, hướng đến việc phục vụ khách hàng trong nhịp sống đô thị bận rộn—từ cốc espresso sáng sớm, tách cà phê rang xay tại quầy, đến các sản phẩm mang đi và merchandise đi kèm. Bài toán đặt ra không chỉ là một logo đẹp, mà là một hệ thống nhận diện đủ linh hoạt để hiện diện xuyên suốt từ bao bì, không gian quán, đến các nền tảng số—trong khi vẫn giữ được bản sắc riêng giữa vô vàn thương hiệu cà phê khác trên thị trường.</p>
<p><strong>Insight</strong></p>
<p>Phần lớn các thương hiệu cà phê Việt Nam hiện nay chọn một trong hai hướng: hoặc tối giản, lạnh lùng theo chuẩn quốc tế, hoặc quá truyền thống, hoài cổ. Nhưng có một khoảng trống ở giữa—dành cho những người trẻ Việt vừa yêu thích sự năng động, hiện đại của một ngày mới bắt đầu, vừa muốn giữ lại tinh thần và bản sắc Việt trong từng trải nghiệm cà phê. Họ không cần một thương hiệu quá nghiêm túc, mà cần một người bạn đồng hành tràn đầy năng lượng cho buổi sáng của mình.</p>
<p><strong>Big Idea</strong></p>
<p>Từ insight đó, ý tưởng lớn được định hình xoay quanh tên gọi "RẠNG"—rạng đông, rạng rỡ, sự bắt đầu của một ngày mới tràn đầy năng lượng. Thương hiệu được xây dựng như một lời chào buổi sáng ấm áp và lạc quan, biến mỗi tách cà phê thành một khoảnh khắc khởi đầu ngày mới thật "rạng."</p>
<p><strong>Concept & Hình ảnh hiện lên</strong></p>
<p>Trái tim của hệ thống nhận diện là một logotype tùy chỉnh đầy cá tính, nơi chữ "R" được cách điệu thành hình dạng vừa gợi liên tưởng đến số 2, vừa như một giọt cà phê đang nhỏ xuống—kết hợp cùng dấu chấm bên dưới chữ "Ạ" được biến thành giọt cà phê đặc trưng. Chi tiết nhỏ này trở thành icon nhận diện xuất hiện xuyên suốt mọi điểm chạm, từ bao bì đến mạng xã hội.</p>
<p>Bảng màu cam rực rỡ là lựa chọn chủ đạo, gợi liên tưởng trực tiếp đến ánh nắng ban mai và sự ấm áp, năng động. Ngôn ngữ hình ảnh khai thác chuyển động và sự lặp lại—rõ nét nhất qua việc chữ "RANG" được kéo dài, lặp lại thành dải họa tiết chạy chéo trên các sản phẩm như túi giữ nhiệt, tạo cảm giác sống động, nhịp nhàng như hơi thở của quán mỗi sáng.</p>
<p>Hệ thống được triển khai nhất quán trên mọi bao bì—từ túi cà phê rang xay, hộp đựng bánh, đến các vật phẩm merchandise như túi tote, bình giữ nhiệt—luôn giữ được sự nhận diện tức thì nhờ logo "R" đặc trưng. Không gian quán tiếp nối tinh thần đó với tông cam làm điểm nhấn nổi bật trên nền gỗ sáng ấm áp, cùng đồng phục nhân viên và màn hình menu đồng bộ, tạo nên một trải nghiệm liền mạch từ ngoài vào trong. Trên nền tảng số, sự hiện diện của RẠNG cũng nhất quán và sinh động, phản ánh đúng tinh thần trẻ trung, năng động của thương hiệu.</p>
<p><strong>Vai trò thương hiệu</strong></p>
<p>Với hệ thống nhận diện này, RẠNG không chỉ đơn thuần là một thương hiệu cà phê, mà đóng vai trò như một nguồn năng lượng tích cực mở đầu cho mỗi ngày mới của khách hàng. Thương hiệu mang trong mình tinh thần Việt Nam hiện đại—tự tin, ấm áp và đầy sức sống—biến việc thưởng thức một tách cà phê từ thói quen hàng ngày thành một khoảnh khắc "rạng rỡ" thực sự, kết nối con người với sự lạc quan và năng lượng của một khởi đầu mới.</p>`,
    about_quote_en: "Vibrant warmth in every cup",
    about_content_en: `<p><strong>The Brief</strong></p>
<p>RẠNG was born as a contemporary Vietnamese coffee brand, aiming to serve customers in the busy urban pace of life—from early morning espresso shots and roasted coffee at the counter, to takeaway products and accompanying merchandise. The challenge was not just a beautiful logo, but a visual identity system flexible enough to be present seamlessly across packaging, physical space, and digital platforms—while maintaining a distinct identity amidst a sea of coffee brands in the market.</p>
<p><strong>Insight</strong></p>
<p>Most Vietnamese coffee brands today choose one of two directions: either minimalist and cold in line with international standards, or overly traditional and nostalgic. But there is a gap in between—for young Vietnamese people who love the dynamic, modern energy of a new day, yet want to preserve the Vietnamese spirit and identity in every coffee experience. They do not need a brand that is too serious, but rather a companion full of energy for their mornings.</p>
<p><strong>Big Idea</strong></p>
<p>From that insight, the big idea was shaped around the name "RẠNG"—meaning dawn, radiant, the beginning of a new day full of energy. The brand is built as a warm and optimistic morning greeting, turning every cup of coffee into a moment to start the day truly "radiant".</p>
<p><strong>Concept & Visual Identity</strong></p>
<p>The heart of the visual identity system is a highly personalized custom logotype, where the letter "R" is stylized into a shape that is both reminiscent of the number 2 and a dripping drop of coffee—combined with the dot under the letter "Ạ", which is transformed into the signature coffee drop. This small detail becomes the identifying icon that appears across all touchpoints, from packaging to social media.</p>
<p>A vibrant orange color palette is the primary choice, directly evoking the morning sunlight, warmth, and dynamism. The visual language exploits movement and repetition—most clearly seen through the word "RANG" being stretched and repeated into a diagonal pattern band on products like cooler bags, creating a lively and rhythmic feel like the breathing of the shop every morning.</p>
<p>The system is implemented consistently across all packaging—from roasted coffee bags and pastry boxes to merchandise items like tote bags and thermoses—always maintaining instant recognition thanks to the signature "R" logo. The physical space continues that spirit with orange acting as a striking accent against the warm light wood background, along with matching staff uniforms and digital menu screens, creating a seamless experience from the outside in. On digital platforms, RẠNG's presence is equally consistent and lively, accurately reflecting the brand's youthful, dynamic spirit.</p>
<p><strong>Brand Role</strong></p>
<p>With this visual identity system, RẠNG is not merely a coffee brand, but acts as a source of positive energy to kick off every customer's new day. The brand carries a modern Vietnamese spirit—confident, warm, and full of vitality—transforming the enjoyment of a cup of coffee from a daily habit into a truly "radiant" moment, connecting people with the optimism and energy of a fresh start.</p>`,
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
    about_content: `<p><strong>Khai thác Brief</strong></p>
<p>KHANSFIT ra đời với bài toán xây dựng nhận diện thương hiệu cho một chuỗi phòng tập gym cao cấp, nơi cần cân bằng giữa hai yếu tố tưởng chừng đối lập: cường độ tập luyện khắc nghiệt và trải nghiệm dịch vụ đẳng cấp. Với hệ thống cơ sở vật chất hiện đại, trang thiết bị cao cấp cùng đội ngũ huấn luyện viên chuyên nghiệp, thương hiệu cần một hệ nhận diện đủ mạnh mẽ để truyền tải sức mạnh, nhưng cũng đủ tinh tế để phản ánh sự sang trọng.</p>
<p><strong>Insight</strong></p>
<p>Phần lớn các phòng gym trên thị trường chọn một trong hai hướng: hoặc quá thô ráp, "cơ bắp" đến mức thiếu tinh tế, hoặc quá bóng bẩy, thiên về hình ảnh mà thiếu đi sự nghiêm túc của một môi trường huấn luyện thực thụ. Nhưng với những người tập luyện nghiêm túc, sức mạnh thực sự không đến từ sự phô trương nhất thời, mà từ sự kiên định bền bỉ—từng buổi tập, từng ngày rèn luyện tích lũy. Đây chính là khoảng trống insight mà KHANSFIT muốn lấp đầy: một nơi tôn vinh kỷ luật và bản lĩnh, chứ không chỉ là cơ thể.</p>
<p><strong>Big Idea</strong></p>
<p>Từ đó, ý tưởng lớn được hình thành xoay quanh triết lý cốt lõi: "Sức mạnh đích thực đến từ sự kiên định—không phải ngày một ngày hai, mà từng buổi tập, từng ngày rèn luyện." KHANSFIT không chỉ là nơi rèn luyện cơ thể, mà là nơi mỗi khách hàng rèn giũa bản lĩnh và học cách làm chủ chính mình.</p>
<p><strong>Concept & Hình ảnh hiện lên</strong></p>
<p>Ý tưởng này được cụ thể hóa qua biểu tượng trung tâm của thương hiệu—hai chữ "K" đối xứng, lồng vào nhau tạo thành một khối lục giác vững chãi. Cấu trúc đối xứng này không chỉ là một giải pháp thị giác thông minh (khai thác chữ cái đầu của tên thương hiệu), mà còn mang ý nghĩa biểu tượng sâu sắc: sự cân bằng giữa sức mạnh và tinh tế, giữa cường độ tập luyện khắc nghiệt và trải nghiệm dịch vụ đẳng cấp mà KHANSFIT theo đuổi.</p>
<p>Bảng màu được xây dựng từ sự tương phản mạnh mẽ giữa xanh navy đậm và xanh cyan tươi sáng. Xanh navy mang lại cảm giác vững chãi, nghiêm túc, đáng tin cậy—phù hợp với tinh thần kỷ luật của một môi trường huấn luyện chuyên nghiệp. Trong khi đó, sắc cyan rực rỡ thổi vào hệ nhận diện năng lượng trẻ trung, hiện đại, tạo nên điểm nhấn thị giác nổi bật và dễ nhận diện. Sự kết hợp này giúp thương hiệu vừa toát lên sự sang trọng, tinh gọn, vừa không đánh mất tinh thần năng động cần có của một không gian thể thao.</p>
<p>Logotype "KHANSFIT" được thiết kế với những khối chữ đậm, chắc chắn, góc cạnh dứt khoát—phản ánh trực tiếp tinh thần mạnh mẽ, kiên định của thương hiệu, đồng thời tạo sự cân bằng thị giác hài hòa khi đặt cạnh biểu tượng lục giác mềm mại hơn.</p>
<p><strong>Vai trò thương hiệu</strong></p>
<p>Với hệ thống nhận diện này, KHANSFIT không chỉ đóng vai trò một phòng tập gym, mà trở thành một không gian nơi giới hạn được thử thách mỗi ngày, trong một môi trường tinh gọn, sang trọng và truyền cảm hứng. Thương hiệu đóng vai trò như một người đồng hành kiên định, nhắc nhở mỗi khách hàng rằng sức mạnh thực sự—cả về thể chất lẫn tinh thần—không đến từ những nỗ lực bộc phát, mà được xây dựng bền bỉ qua từng buổi tập, từng ngày rèn luyện không ngừng nghỉ.</p>`,
    about_quote_en: "Electric energy, heavy impact",
    about_content_en: `<p><strong>The Brief</strong></p>
<p>KHANSFIT emerged with the challenge of building a brand identity for a premium gym chain, where it was necessary to balance two seemingly opposing elements: the rigorous intensity of training and the elegance of a premium service experience. With state-of-the-art facilities, high-end equipment, and a team of professional trainers, the brand needed an identity system strong enough to convey power, yet refined enough to reflect luxury.</p>
<p><strong>Insight</strong></p>
<p>Most gyms on the market choose one of two directions: either too raw and "muscular" to the point of lacking refinement, or too polished, leaning toward an image-conscious aesthetic while missing the seriousness of a genuine training environment. But for serious trainees, true strength does not come from momentary showiness, but from persistent consistency—every workout, every day of accumulated practice. This is the exact insight gap that KHANSFIT wants to fill: a place that honors discipline and character, not just the physical body.</p>
<p><strong>Big Idea</strong></p>
<p>From this, the big idea was formed around a core philosophy: "True strength comes from consistency—not built in a day, but through every single workout, every single day of relentless training." KHANSFIT is not just a place to train the body, but a place where every client hones their resilience and learns to master themselves.</p>
<p><strong>Concept & Visual Identity</strong></p>
<p>This idea is materialized through the brand's central emblem—two symmetrical letters "K" interlocking to form a solid hexagonal block. This symmetrical structure is not just a clever visual solution (utilizing the brand's initial letter), but also carries profound symbolic meaning: the balance between strength and sophistication, between the harsh intensity of training and the premium service experience that KHANSFIT pursues.</p>
<p>The color palette is built on a strong contrast between deep navy blue and bright cyan. Navy blue brings a sense of solidity, seriousness, and reliability—fitting the disciplined spirit of a professional training environment. Meanwhile, the vibrant cyan injects youthful, modern energy into the identity, creating a striking and easily recognizable visual focal point. This combination helps the brand exude an air of sleek luxury without losing the dynamic spirit essential for a sports space.</p>
<p>The "KHANSFIT" logotype is designed with bold, solid letterforms and decisive angles—directly reflecting the brand's strong, steadfast spirit, while creating a harmonious visual balance when placed next to the somewhat smoother hexagonal emblem.</p>
<p><strong>Brand Role</strong></p>
<p>With this identity system, KHANSFIT serves not just as a gym, but as a space where limits are tested every day, in a sleek, luxurious, and inspiring environment. The brand acts as a steadfast companion, reminding every client that true strength—both physical and mental—does not come from spontaneous bursts of effort, but is built persistently through every workout, every day of unremitting practice.</p>`,
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
    about_content: `<p><strong>Khai thác Brief</strong></p>
<p>Winola Fine Jewelry là thương hiệu trang sức cao cấp Việt Nam, hướng đến những phụ nữ hiện đại trân trọng vẻ đẹp tinh tế và bản sắc cá nhân. Bài toán đặt ra cho dự án là xây dựng một hệ thống nhận diện đủ linh hoạt để thích nghi trên mọi nền tảng—từ bao bì sản phẩm, quảng cáo ngoài trời, đến trải nghiệm số—đồng thời đủ mạnh để tạo ấn tượng ngay từ cái nhìn đầu tiên trong một thị trường trang sức vốn đã có nhiều tên tuổi định hình sẵn.</p>
<p><strong>Insight</strong></p>
<p>Phần lớn thương hiệu trang sức cao cấp xây dựng hình ảnh dựa trên sự lộng lẫy phổ quát—vẻ đẹp hoàn hảo, xa hoa nhưng đồng nhất, khiến người phụ nữ khi đeo lên đôi khi cảm thấy mình đang khoác một biểu tượng địa vị hơn là thể hiện chính mình. Nhưng phụ nữ Việt Nam hiện đại tìm kiếm nhiều hơn thế: họ muốn trang sức là một tuyên ngôn cá nhân, một cách để chạm đến và khẳng định nét riêng của bản thân, chứ không phải hòa lẫn vào một chuẩn mực chung.</p>
<p><strong>Big Idea</strong></p>
<p>Từ insight đó, ý tưởng lớn được định hình: "Chạm nét riêng"—mỗi sản phẩm của Winola không đơn thuần là một món trang sức, mà là một câu chuyện về sự nữ tính, về hành trình mỗi người phụ nữ chạm đến và tôn vinh bản sắc của chính mình.</p>
<p><strong>Concept & Hình ảnh hiện lên</strong></p>
<p>Trái tim của hệ thống nhận diện là biểu tượng lấy cảm hứng từ hình dáng vương miện được cách điệu mềm mại, uyển chuyển như những cánh hoa đang nở. Đường nét mảnh, thanh thoát của biểu tượng gợi liên tưởng đến sự tinh xảo trong nghề kim hoàn, đồng thời truyền tải một vẻ đẹp nữ tính nhưng không phô trương. Chi tiết này được tái hiện tinh tế trên chính các sản phẩm—như trên mặt dây chuyền tròn, nơi hình khối vương miện trở thành một họa tiết khắc nổi giàu tính nghệ thuật, biến sản phẩm thành vật phẩm mang dấu ấn thương hiệu rõ nét mà vẫn tinh giản.</p>
<p>Wordmark "WINOLA" được thể hiện qua kiểu chữ serif thanh mảnh, đường nét mềm mại nhưng vẫn giữ được sự chỉn chu, sang trọng—cân bằng hoàn hảo giữa nét nữ tính và sự đĩnh đạc cần có của một thương hiệu cao cấp.</p>
<p>Bảng màu chủ đạo với tông cam đào ấm áp và tím navy sâu lắng tạo nên một sự tương phản tinh tế: cam đào mang lại cảm giác gần gũi, nữ tính, trong khi navy khẳng định sự sang trọng, đáng tin cậy. Trên các ấn phẩm quảng cáo, hệ thống nhận diện được mở rộng linh hoạt—từ hình ảnh chân dung cận cảnh tôn vinh vẻ đẹp tự nhiên của người phụ nữ đeo trang sức, đến các thông điệp cô đọng như "Chạm – Nét Riêng" trên nền màu tối sâu lắng, tạo hiệu ứng thị giác ấn tượng và giàu cảm xúc.</p>
<p><strong>Vai trò thương hiệu</strong></p>
<p>Với hệ thống nhận diện này, Winola không chỉ đóng vai trò một thương hiệu trang sức, mà trở thành người bạn đồng hành giúp mỗi phụ nữ tự tin thể hiện bản sắc riêng của mình. Thương hiệu định vị mình đủ linh hoạt để thích nghi trên mọi nền tảng, đủ mạnh mẽ để tạo ấn tượng ngay từ cái nhìn đầu tiên, và đủ sâu sắc để kể một câu chuyện—về người phụ nữ Việt Nam hiện đại, tự tin chạm đến nét riêng của chính mình.</p>`,
    about_quote_en: "Timeless elegance, sharply defined",
    about_content_en: `<p><strong>The Brief</strong></p>
<p>Winola Fine Jewelry is a premium Vietnamese jewelry brand catering to modern women who appreciate refined beauty and personal identity. The challenge for the project was to build an identity system flexible enough to adapt across all platforms—from product packaging and outdoor advertising to the digital experience—while remaining strong enough to make an immediate impression in a jewelry market already dominated by established names.</p>
<p><strong>Insight</strong></p>
<p>Most fine jewelry brands build their image around a universal splendor—flawless, opulent, yet uniform beauty that often makes the wearer feel they are donning a status symbol rather than expressing themselves. But modern Vietnamese women seek more than that: they want jewelry to be a personal statement, a way to touch and affirm their unique traits, rather than blending into a common standard.</p>
<p><strong>Big Idea</strong></p>
<p>From that insight, the big idea was shaped: "Touch Your Unique Mark" (Chạm nét riêng). Every Winola product is not just a piece of jewelry, but a story about femininity, about the journey of every woman to touch and celebrate her own identity.</p>
<p><strong>Concept & Visual Identity</strong></p>
<p>At the heart of the identity system is a symbol inspired by the shape of a crown, stylized softly and fluidly like blooming petals. The thin, elegant lines of the emblem evoke the exquisite craftsmanship of jewelry making, while conveying a feminine yet understated beauty. This detail is delicately replicated on the products themselves—such as on a round pendant, where the crown shape becomes an artful embossed motif, turning the product into a clear yet minimalist brand signature piece.</p>
<p>The "WINOLA" wordmark is rendered in a slender serif typeface, with soft lines that still maintain a sense of precision and luxury—striking a perfect balance between femininity and the poise required of a premium brand.</p>
<p>The primary color palette, featuring a warm peach and a deep navy purple, creates a sophisticated contrast: peach brings a sense of approachability and femininity, while navy asserts luxury and reliability. On advertising materials, the identity system expands flexibly—from close-up portraits celebrating the natural beauty of women wearing the jewelry, to concise messages like "Touch – Your Unique Mark" set against deep, dark backgrounds, creating a striking and emotionally rich visual effect.</p>
<p><strong>Brand Role</strong></p>
<p>With this identity system, Winola serves not merely as a jewelry brand, but becomes a companion helping every woman confidently express her unique identity. The brand positions itself as flexible enough to adapt across all platforms, strong enough to make an impression at first glance, and profound enough to tell a story—about the modern Vietnamese woman, confidently touching her very own unique mark.</p>`,
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
    description: "Yummy Feast là dòng thức ăn dạng thanh hoàn chỉnh cho mèo, dành cho những người nuôi mèo coi trọng dinh dưỡng khoa học nhưng vẫn ưu tiên sự tiện lợi trong từng bữa ăn. Thay vì mượn hình ảnh hấp dẫn vị giác quen thuộc của ngành hàng, Yummy Feast chọn ngôn ngữ thị giác gần với nhãn dinh dưỡng—rõ ràng, có số liệu, đáng tin cậy—để khẳng định vị thế một bữa ăn chính hoàn chỉnh, chứ không đơn thuần là một món snack cho mèo.",
    description_en: "Yummy Feast is a complete bar-form cat food designed for cat owners who prioritize scientific nutrition while valuing convenience in every meal. Rather than borrowing the familiar, appetite-appealing imagery of the pet food category, Yummy Feast adopts a visual language closer to nutrition labels—clear, data-driven, and trustworthy—to establish itself as a complete primary meal, not merely a pet snack.",
    tags: ["Bao bì", "Thiết kế bao bì"],
    tags_en: ["Packaging", "Packaging Design"],
    about_quote_en: "Every stick is a complete meal",
    about_content_en: `<p>In a pet food category crowded with images of raw meat and loud nutritional claims, Yummy Feast set out to speak a different language—one closer to the clarity of a nutrition label than the noise of a snack aisle. Developed as a complete meal in stick form for cats, Yummy Feast is aimed at owners who take feline nutrition seriously, and who value convenience without compromising on rigor.</p>
<p><strong>The Brief</strong></p>
<p>The brief presented a layered challenge. Packaging needed to work across two very different formats—a 300g zip pouch and a 20g single stick—while maintaining a single, coherent brand identity between them. At the same time, the design had to foreground three core nutritional metrics (37% real meat, 58% animal protein, 5000mg/kg probiotics) with scientific clarity, and clearly differentiate four flavour variants for instant shelf recognition. Underlying all of this was a positioning ambition: Yummy Feast wanted to be understood not as a treat, but as a complete, primary meal—modern, science-led, and trustworthy.</p>
<p><strong>Insight</strong></p>
<p>Looking at the category, most cat food packaging leans on appetite appeal—glossy photography of meat, warm lighting, sensory cues designed to trigger a purchase on instinct. But the owners Yummy Feast wanted to reach were making a different kind of decision: one based on information, not impulse. They read labels. They compare protein percentages. For them, packaging that looks like a snack undermines the very credibility the product is trying to build. The opportunity was to borrow the visual vocabulary of nutrition science itself, and apply it to a category that rarely uses it.</p>
<p><strong>Big Idea</strong></p>
<p>The result is a guiding idea: <em>"Every stick is a complete meal."</em> The entire packaging system was built to communicate a sense of being scientific, clean, and substantial at first glance, in the same way nutritional products present information: precise, data-backed, and easy to trust.</p>
<p><strong>Concept & Visual Identity</strong></p>
<p>A softened, minimal cat mascot runs throughout the packaging system, acting as an emotional anchor. Rather than reducing the product to something playful or infantile, the mascot works to humanise what would otherwise be a purely technical presentation—making the brand approachable without undercutting its credibility.</p>
<p>Colour becomes a functional tool as much as an aesthetic one. Instead of relying on photographic imagery of meat, which tends to clutter the shelf and blur distinctions between products, each flavour is assigned a dedicated colour paired with a flat, iconographic animal illustration—fish, duck, chicken, salmon. This allows a shopper to identify the right variant in an instant, particularly effective when the full range is displayed side by side.</p>
<p>At the heart of each pack sits a dedicated information block, echoing the visual logic of a nutrition label. The three key figures—37%, 58%, 5000mg—are set within a clean white panel, borrowing directly from the conventions of nutritional and supplement packaging to reinforce a sense of scientific rigor, rather than the aesthetics of a typical pet snack.</p>
<p>The overall design spirit can be summarised as clean, modern, and trustworthy: a predominantly white base, bold colour blocking, and a confident, rounded sans-serif wordmark work together to create a look that feels contemporary and hygienic—deliberately distinct from the food-photography-driven conventions of traditional pet food packaging.</p>
<p><strong>Brand Role</strong></p>
<p>Together, these elements position Yummy Feast not as a treat to be indulged in, but as a considered, science-backed meal—one that owners can trust with the same confidence they'd bring to reading a nutrition label for themselves.</p>`,
    about_quote: "Mỗi thanh là một bữa ăn trọn vẹn",
    about_content: `<p>Trong một ngành hàng thức ăn thú cưng vốn quen thuộc với hình ảnh thịt tươi sống và những tuyên bố dinh dưỡng phô trương, Yummy Feast chọn một hướng đi khác—gần với ngôn ngữ của nhãn dinh dưỡng khoa học hơn là sự ồn ào của quầy snack. Là dòng thức ăn dạng thanh hoàn chỉnh cho mèo, Yummy Feast hướng đến những người nuôi mèo nghiêm túc với dinh dưỡng, những người coi trọng sự tiện lợi nhưng không đánh đổi tính khoa học.</p>
<p><strong>Khai thác Brief</strong></p>
<p>Bài toán đặt ra cho dự án có nhiều lớp. Bao bì cần vận hành trên hai định dạng rất khác nhau—túi zip 300g và thanh lẻ 20g—trong khi vẫn giữ được một hệ nhận diện thương hiệu nhất quán xuyên suốt. Đồng thời, thiết kế phải làm nổi bật ba chỉ số dinh dưỡng cốt lõi (37% thịt nguyên chất, 58% protein động vật, 5000mg/kg Probiotics) với độ rõ ràng mang tính khoa học, và phân biệt rành mạch 4 hương vị để dễ nhận diện trên kệ. Ẩn sau tất cả là một tham vọng định vị: Yummy Feast muốn được hiểu không phải là một món ăn vặt, mà là một bữa ăn chính hoàn chỉnh—hiện đại, có nền tảng khoa học và đáng tin cậy.</p>
<p><strong>Insight</strong></p>
<p>Quan sát ngành hàng, phần lớn bao bì thức ăn cho mèo dựa vào sự hấp dẫn vị giác—hình ảnh thịt bóng bẩy, ánh sáng ấm áp, các tín hiệu cảm quan được thiết kế để kích hoạt quyết định mua theo bản năng. Nhưng nhóm khách hàng mà Yummy Feast muốn tiếp cận lại đưa ra quyết định theo một cách khác: dựa trên thông tin, không phải cảm tính. Họ đọc nhãn sản phẩm. Họ so sánh tỷ lệ protein. Với họ, một bao bì trông giống món ăn vặt vô tình làm suy yếu chính độ tin cậy mà sản phẩm đang cố gây dựng. Cơ hội nằm ở việc mượn ngôn ngữ thị giác của khoa học dinh dưỡng, áp dụng vào một ngành hàng vốn hiếm khi sử dụng nó.</p>
<p><strong>Big Idea</strong></p>
<p>Từ đó, ý tưởng lớn được hình thành: <em>"Mỗi thanh là một bữa ăn trọn vẹn."</em> Toàn bộ hệ thống bao bì được xây dựng để truyền tải cảm giác khoa học – gọn gàng – đủ chất ngay từ cái nhìn đầu tiên, giống như cách các sản phẩm dinh dưỡng cho người trình bày thông tin: rõ ràng, có số liệu, dễ tin cậy.</p>
<p><strong>Concept & Hình ảnh hiện lên</strong></p>
<p>Một mascot mèo cách điệu tối giản xuất hiện xuyên suốt các bao bì như một linh vật thân thiện, giúp "làm mềm" hình ảnh vốn thiên về thông số kỹ thuật, tạo sự gần gũi, dễ thương mà không trẻ con hóa sản phẩm.</p>
<p>Màu sắc trở thành công cụ chức năng nhiều như một lựa chọn thẩm mỹ. Thay vì dùng hình ảnh nguyên liệu thực tế (thịt, cá) dễ gây rối mắt, dự án chọn hướng illustration phẳng, hình khối động vật nguồn gốc (cá, vịt, gà, cá hồi) kết hợp với một màu chủ đạo riêng biệt cho từng vị. Đây là cách giúp người mua nhận diện dòng sản phẩm trong tích tắc, đặc biệt hiệu quả khi bày dàn hàng trên kệ.</p>
<p>Ở trung tâm mỗi bao bì là một khối thông tin được bố cục như nhãn dinh dưỡng: ba chỉ số (37% – 58% – 5000mg) được đặt trong khối bảng trắng nổi bật, mô phỏng ngôn ngữ của nhãn dinh dưỡng/thực phẩm chức năng—nhấn mạnh tính "khoa học, đáng tin cậy" hơn là một bao bì thức ăn thú cưng thông thường.</p>
<p>Tinh thần thiết kế tổng thể có thể tóm gọn trong ba từ khóa: Clean – Modern – Trustworthy. Nền trắng chủ đạo, mảng màu block lớn, typography sans-serif chắc khỏe với chữ "Yummy Feast" bo tròn thân thiện, tạo cảm giác hiện đại, sạch sẽ, khác biệt hẳn với hình ảnh bao bì thức ăn thú cưng truyền thống vốn thường dùng ảnh chụp thực phẩm trực tiếp.</p>
<p><strong>Vai trò thương hiệu</strong></p>
<p>Với hệ thống nhận diện này, Yummy Feast không chỉ đóng vai trò một sản phẩm trên kệ hàng, mà trở thành một điểm tựa niềm tin cho người nuôi mèo—nơi khoa học dinh dưỡng được trình bày minh bạch, dễ hiểu, và dễ lựa chọn. Thương hiệu định vị mình như một người bạn đồng hành đáng tin cậy trong hành trình chăm sóc sức khỏe cho mèo, biến mỗi bữa ăn từ một thói quen đơn thuần thành một quyết định được cân nhắc kỹ lưỡng, có cơ sở khoa học rõ ràng—đúng như tinh thần "bữa ăn chính hoàn chỉnh" mà Yummy Feast muốn đại diện.</p>`,
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
      "12-1.webp",
      "12-2.webp",
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
