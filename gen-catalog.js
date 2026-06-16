import fs from 'fs';
import path from 'path';

const categories = [
  { name: 'Main Gates', count: 150, sub: 'Iron', size: 'Custom' },
  { name: 'Sliding Gates', count: 120, sub: 'Sliding', size: 'Custom' },
  { name: 'Double Door Gates', count: 80, sub: 'Double', size: 'Custom' },
  { name: 'Single Door Gates', count: 80, sub: 'Single', size: 'Standard' },
  { name: 'Laser Cut Gates', count: 60, sub: 'Laser Cut', size: 'Custom' },
  { name: 'CNC Gates', count: 60, sub: 'CNC', size: 'Custom' },
  { name: 'Window Grills', count: 120, sub: 'Window', size: 'Standard' },
  { name: 'Balcony Railings', count: 100, sub: 'Balcony', size: 'Custom' },
  { name: 'Stair Railings', count: 80, sub: 'Stair', size: 'Custom' },
  { name: 'Terrace Railings', count: 60, sub: 'Terrace', size: 'Custom' },
  { name: 'Rolling Shutters', count: 50, sub: 'Rolling', size: 'Custom' },
  { name: 'Industrial Shutters', count: 40, sub: 'Industrial', size: 'Custom' },
  { name: 'Safety Doors', count: 30, sub: 'Safety', size: 'Standard' },
  { name: 'Collapsible Gates', count: 30, sub: 'Collapsible', size: 'Custom' },
  { name: 'Industrial Sheds', count: 20, sub: 'Shed', size: 'Custom' },
  { name: 'Warehouse Gates', count: 20, sub: 'Warehouse', size: 'Custom' },
];

const styles = [
 "modern", "royal", "minimal", "industrial", "traditional indian",
 "victorian", "luxury", "geometric", "ornamental", "heavy-duty"
];

const patterns = [
 "floral cutwork", "geometric mesh", "horizontal bars", "vertical bars",
 "diamond mesh", "mandala art", "abstract wave", "honeycomb",
 "double layer mesh", "laser floral"
];

const structures = [
 "arched top", "flat top", "curved top", "double layered",
 "single panel", "split panel", "folding structure",
 "heavy frame", "minimal frame", "decorative side panels"
];

const finishes = [
 "matte black", "powder coated black", "metallic grey",
 "rustic iron", "bronze finish"
];

function buildCatalog() {
  const catalog = [];
  let globalId = 1;

  for (const cat of categories) {
    for (let i = 1; i <= cat.count; i++) {
      const slug = cat.name.toLowerCase().replace(/ /g, '-');
      const prefix = cat.name.split(' ').map(w => w[0]).join('').toUpperCase();
      const code = `${prefix}-${i.toString().padStart(3, '0')}`;
      
      const style = styles[globalId % styles.length];
      const pattern = patterns[globalId % patterns.length];
      const structure = structures[globalId % structures.length];
      const finish = finishes[globalId % finishes.length];

      const prompt = `
Ultra realistic ${style} ${cat.name},
with ${pattern},
${structure},
premium wrought iron and steel,
${finish},
installed at house entrance,
architectural exterior photography,
front elevation,
luxury craftsmanship,
high detail,
photorealistic,
4k
`.trim();

      const imageUrl = \`https://image.pollinations.ai/prompt/\${encodeURIComponent(prompt)}?width=800&height=600&seed=\${globalId}&model=flux\`;

      catalog.push({
        id: \`\${prefix.toLowerCase()}-\${i.toString().padStart(3, '0')}-\${globalId}\`,
        code: code,
        slug: \`\${slug}-\${i}\`,
        name: \`\${cat.name} \${i.toString().padStart(3, '0')}\`,
        category: cat.name,
        subcategory: cat.sub,
        material: "Premium Iron/Steel",
        type: "Industrial / Residential",
        size: cat.size,
        style: style,
        pattern: pattern,
        structure: structure,
        finish: finish,
        image: imageUrl
      });
      globalId++;
    }
  }

  const fileContent = `// Auto-generated catalog with ${catalog.length} unique items
export const catalogData = ${JSON.stringify(catalog, null, 2)};
`;

  const targetPath = path.join(process.cwd(), 'src', 'data', 'catalog.js');
  fs.writeFileSync(targetPath, fileContent, 'utf-8');

  console.log(`\nSuccessfully generated ${catalog.length} unique products in src/data/catalog.js!`);
}

buildCatalog();
