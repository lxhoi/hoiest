const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'projects.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Use a simple regex to replace Yummy Feast category and tags
content = content.replace(
  /title: "Yummy Feast"[\s\S]*?category: 'packaging',/,
  (match) => {
    let newMatch = match.replace(/category: 'packaging'/, "category: 'branding'");
    newMatch = newMatch.replace(/tags: \["Bao bì"\]/, 'tags: ["Nhận diện thương hiệu"]');
    newMatch = newMatch.replace(/tags_en: \["Packaging"\]/, 'tags_en: ["Branding"]');
    return newMatch;
  }
);

// We need to parse out the lettering projects and combine them.
// They all have folder: "/projects/lettering"
// The first lettering project is "Đẳng cấp"
// I will just use regex to extract the images of all projects with folder: "/projects/lettering"
const regex = /folder: "\/projects\/lettering"[\s\S]*?images: \[(".*?")\]/g;
let images = [];
let match;
while ((match = regex.exec(content)) !== null) {
  images.push(match[1]);
}

if (images.length > 0) {
  // We'll replace the first lettering project with the combined one, and remove the rest.
  const combinedImages = images.join(',\n      ');
  const letteringObjRegex = /\{\s*title: "(?:Đẳng cấp|Ghet Xog Lai Thik|Ngày của mẹ|Vạn sự như ý|Phú Yên 78)"[\s\S]*?category: 'ui_ux',\s*\}/g;
  
  let firstReplaced = false;
  content = content.replace(letteringObjRegex, (matchObj) => {
    if (!firstReplaced) {
      firstReplaced = true;
      return `{
    title: "Lettering Collection",
    folder: "/projects/lettering",
    description: "Một bộ sưu tập các tác phẩm thiết kế chữ.",
    description_en: "A collection of custom lettering artworks.",
    tags: ["Nhận diện thương hiệu"],
    tags_en: ["Branding"],
    about_quote: "Nghệ thuật của chữ viết",
    about_content: \`<p>Một cuộc thám hiểm nghệ thuật chữ tự khởi xướng nhằm đẩy lùi những ranh giới của thiết kế lettering tùy chỉnh và khả năng biểu đạt thị giác.</p>
<p>Các con chữ thường chỉ được xem như những phương tiện chức năng để đọc, phớt lờ đi tiềm năng to lớn của chúng với tư cách là nghệ thuật thị giác độc lập.</p>
<p>"Nghệ thuật của chữ viết" – Nâng tầm typography để trở thành chủ thể thị giác chính yếu.</p>
<p>Tái cấu trúc các hình thái chữ cái tiêu chuẩn để tạo ra các tác phẩm nghệ thuật riêng biệt, dẫn dắt bởi nhịp điệu nhằm truyền tải cảm xúc ngay cả trước khi chúng được đọc.</p>
<p>Những đường cong chuẩn xác, các nét nối (ligatures) độc đáo, cùng sự nhấn mạnh mạnh mẽ vào sự cân bằng cấu trúc, dòng chảy và khoảng trắng.</p>
<p>Đóng vai trò như một minh chứng cho tay nghề thủ công, các tác phẩm này truyền cảm hứng cho một sự trân trọng sâu sắc hơn đối với vẻ đẹp biểu cảm và tinh tế của typography.</p>\`,
    about_quote_en: "The art of the written word",
    about_content_en: \`<p>A self-initiated typographic exploration to push the boundaries of custom lettering and visual expression.</p>
<p>Letters are often viewed merely as functional vessels for reading, ignoring their profound potential as standalone visual art.</p>
<p>"The art of the written word" – Elevating typography to become the primary visual subject.</p>
<p>Deconstructing standard letterforms to create bespoke, rhythm-driven artwork that conveys emotion before it is even read.</p>
<p>Precise curves, unique ligatures, and a strong emphasis on structural balance, flow, and negative space.</p>
<p>Acting as a testament to craftsmanship, these artworks inspire a deeper appreciation for the nuanced, expressive beauty of typography.</p>\`,
    images: [
      ${combinedImages}
    ],
    category: 'branding',
  }`;
    } else {
      return ''; // Remove subsequent lettering projects
    }
  });

  // Since we replaced the others with empty strings, there might be trailing commas or empty space
  // We can clean up double commas if they exist
  content = content.replace(/,\s*,/g, ',');
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Update complete.');
