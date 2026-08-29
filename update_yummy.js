const fs = require('fs');
const path = require('path');
const filePath = path.join(process.cwd(), 'src/data/projects.ts');
let content = fs.readFileSync(filePath, 'utf8');

const yummyVN = `<p>Trong một ngành hàng thức ăn thú cưng vốn quen thuộc với hình ảnh thịt tươi sống và những tuyên bố dinh dưỡng phô trương, Yummy Feast chọn một hướng đi khác—gần với ngôn ngữ của nhãn dinh dưỡng khoa học hơn là sự ồn ào của quầy snack. Là dòng thức ăn dạng thanh hoàn chỉnh cho mèo, Yummy Feast hướng đến những người nuôi mèo nghiêm túc với dinh dưỡng, những người coi trọng sự tiện lợi nhưng không đánh đổi tính khoa học.</p>
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
<p>Với hệ thống nhận diện này, Yummy Feast không chỉ đóng vai trò một sản phẩm trên kệ hàng, mà trở thành một điểm tựa niềm tin cho người nuôi mèo—nơi khoa học dinh dưỡng được trình bày minh bạch, dễ hiểu, và dễ lựa chọn. Thương hiệu định vị mình như một người bạn đồng hành đáng tin cậy trong hành trình chăm sóc sức khỏe cho mèo, biến mỗi bữa ăn từ một thói quen đơn thuần thành một quyết định được cân nhắc kỹ lưỡng, có cơ sở khoa học rõ ràng—đúng như tinh thần "bữa ăn chính hoàn chỉnh" mà Yummy Feast muốn đại diện.</p>`;

const yummyEN = `<p>In a pet food category crowded with images of raw meat and loud nutritional claims, Yummy Feast set out to speak a different language—one closer to the clarity of a nutrition label than the noise of a snack aisle. Developed as a complete meal in stick form for cats, Yummy Feast is aimed at owners who take feline nutrition seriously, and who value convenience without compromising on rigor.</p>
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
<p>Together, these elements position Yummy Feast not as a treat to be indulged in, but as a considered, science-backed meal—one that owners can trust with the same confidence they'd bring to reading a nutrition label for themselves.</p>`;

const projectStart = content.indexOf('title: "Yummy Feast",');
const projectEnd = content.indexOf('images: [', projectStart);
let block = content.substring(projectStart, projectEnd);

const enStart = block.indexOf('about_content_en: `');
const enEnd = block.indexOf('`,', enStart);
block = block.substring(0, enStart) + 'about_content_en: `' + yummyEN + block.substring(enEnd);

const vnStart = block.indexOf('about_content: `');
const vnEnd = block.indexOf('`,', vnStart);
block = block.substring(0, vnStart) + 'about_content: `' + yummyVN + block.substring(vnEnd);

content = content.substring(0, projectStart) + block + content.substring(projectEnd);
fs.writeFileSync(filePath, content, 'utf8');
console.log("Updated Yummy Feast project in both languages.");
