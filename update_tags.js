const fs = require('fs');

const filePath = '/Users/hoibrands/Documents/next-portfolio/src/data/projects.ts';
let content = fs.readFileSync(filePath, 'utf-8');

// Update category type
content = content.replace(
  /category: 'branding' \| 'lettering' \| 'packaging';/,
  "category: 'branding' | 'ui_ux' | 'packaging';"
);

// Update category values
content = content.replace(/category: 'lettering'/g, "category: 'ui_ux'");

// Function to filter tags
const filterViTags = (tagsStr) => {
  const tags = eval(tagsStr);
  const mapped = tags.map(t => {
    if (t === 'Nhận diện thương hiệu') return t;
    if (t === 'Bao bì') return 'Bao bì';
    if (t === 'Thiết kế chữ' || t === 'UI/UX') return 'UI/UX';
    return null;
  }).filter(Boolean);
  return JSON.stringify(Array.from(new Set(mapped)));
};

const filterEnTags = (tagsStr) => {
  const tags = eval(tagsStr);
  const mapped = tags.map(t => {
    if (t === 'Brand Identity' || t === 'Branding') return 'Branding';
    if (t === 'Packaging') return 'Packaging';
    if (t === 'Lettering' || t === 'Custom Lettering' || t === 'UI/UX') return 'UI/UX';
    return null;
  }).filter(Boolean);
  return JSON.stringify(Array.from(new Set(mapped)));
};

// Update tags and tags_en arrays
content = content.replace(/tags: (\[.*?\])/g, (match, p1) => {
  return `tags: ${filterViTags(p1)}`;
});

content = content.replace(/tags_en: (\[.*?\])/g, (match, p1) => {
  return `tags_en: ${filterEnTags(p1)}`;
});

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Done!');
