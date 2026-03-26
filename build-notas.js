// build-notas.js
// Corre con: node build-notas.js
// Lee todos los archivos .md de _notas/ y genera notas-data.json

const fs   = require('fs');
const path = require('path');

const NOTAS_DIR  = path.join(__dirname, '_notas');
const OUTPUT     = path.join(__dirname, 'notas-data.json');

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) return { meta: {}, body: content };

  const meta = {};
  match[1].split('\n').forEach(line => {
    const [key, ...rest] = line.split(':');
    if (key && rest.length) {
      let val = rest.join(':').trim();
      // Quitar comillas si las hay
      val = val.replace(/^["']|["']$/g, '');
      // Booleanos
      if (val === 'true')  val = true;
      if (val === 'false') val = false;
      meta[key.trim()] = val;
    }
  });

  return { meta, body: match[2].trim() };
}

if (!fs.existsSync(NOTAS_DIR)) {
  console.log('No existe la carpeta _notas/. Creándola...');
  fs.mkdirSync(NOTAS_DIR);
  fs.writeFileSync(OUTPUT, '[]');
  console.log('notas-data.json generado vacío.');
  process.exit(0);
}

const archivos = fs.readdirSync(NOTAS_DIR).filter(f => f.endsWith('.md'));

const notas = archivos.map(archivo => {
  const contenido = fs.readFileSync(path.join(NOTAS_DIR, archivo), 'utf-8');
  const { meta, body } = parseFrontmatter(contenido);
  return {
    slug: archivo.replace('.md', ''),
    titulo:      meta.titulo      || '',
    fecha:       meta.fecha       || '',
    tipo:        meta.tipo        || 'texto',
    imagen:      meta.imagen      || null,
    url_link:    meta.url_link    || null,
    texto_link:  meta.texto_link  || null,
    body,
  };
});

// Ordenar por fecha descendente
notas.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

fs.writeFileSync(OUTPUT, JSON.stringify(notas, null, 2));
console.log(`✓ notas-data.json generado con ${notas.length} nota(s).`);
