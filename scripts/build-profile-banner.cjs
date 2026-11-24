const fs = require('node:fs');
const path = require('node:path');
const sharp = require(process.argv[2] || 'sharp');
const language = process.argv[3] || 'es';
if (!['es', 'en'].includes(language)) throw new Error('Language must be es or en');
const root = path.resolve(__dirname, '..');
const assets = path.join(root, 'assets');
const width = 1120;
const height = 480;

async function build() {
  const input = path.join(assets, 'banner-cielo-nocturno.gif');
  const source = await sharp(input, {animated:true}).metadata();
  const overlayFile = language === 'en' ? 'banner-profile-overlay-en.png' : 'banner-profile-overlay.png';
  const overlay = await sharp(path.join(assets, overlayFile)).resize(width,height,{fit:'fill'}).png().toBuffer();
  const shade = Buffer.from(`<svg width="${width}" height="${height}"><rect width="100%" height="100%" fill="#071321" opacity=".38"/></svg>`);
  const mask = Buffer.from(`<svg width="${width}" height="${height}"><rect width="100%" height="100%" rx="20" fill="white"/></svg>`);
  const output = path.join(assets, language === 'en' ? 'banner-profile-animated-en.gif' : 'banner-perfil-animado.gif');
  await sharp(input,{animated:true}).resize(width,height,{fit:'cover'}).composite([
    {input:shade,tile:true,gravity:'northwest'},
    {input:overlay,tile:true,gravity:'northwest'},
    {input:mask,tile:true,gravity:'northwest',blend:'dest-in'},
  ]).gif({colours:128,dither:.4,effort:7,interFrameMaxError:8,loop:source.loop,delay:source.delay}).toFile(output);
  const metadata=await sharp(output,{animated:true}).metadata();
  if(metadata.pages!==source.pages || metadata.pageHeight!==height) throw new Error('Animation frame geometry mismatch');
  await sharp(output,{page:0}).png().toFile(path.join(assets, language === 'en' ? 'banner-profile-preview-en.png' : 'banner-perfil-preview.png'));
  console.log(JSON.stringify({file:output,width:metadata.width,height:metadata.pageHeight,frames:metadata.pages,durationMs:metadata.delay.reduce((a,b)=>a+b,0),loop:metadata.loop,bytes:fs.statSync(output).size},null,2));
}
build().catch(error=>{console.error(error);process.exit(1)});
