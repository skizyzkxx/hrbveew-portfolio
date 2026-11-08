import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
const read = path => readFileSync(new URL('../'+path,import.meta.url),'utf8');
test('todas as âncoras da navegação têm uma seção de destino',()=>{
 const nav=read('src/components/Navbar.tsx');
 const sources=readdirSync(new URL('../src/sections',import.meta.url)).map(f=>read('src/sections/'+f)).join('\n');
 for(const [,id] of nav.matchAll(/\['([a-z]+)','[^']+'\]/g)) assert.ok(sources.includes('id="'+id+'"'),id);
});
test('projetos têm capas existentes, links HTTPS e não ocultam exemplos',()=>{
 const data=read('src/data/projects.ts');
 assert.ok([...data.matchAll(/(?:github|demo):'https:\/\/[^']+'/g)].length>=1);
 assert.equal([...data.matchAll(/(?:github|demo):'(?!https:\/\/)/g)].length,0);
 for(const [,path] of data.matchAll(/thumbnail:'([^']+)'/g)) assert.ok(existsSync(new URL('../public'+path,import.meta.url)));
 assert.match(read('src/sections/Projects.tsx'),/EXEMPLO ILUSTRATIVO/);
});
test('identidade permanece em letras minúsculas nos arquivos do projeto',()=>{
 function visit(path){for(const entry of readdirSync(path,{withFileTypes:true})){const full=join(path,entry.name);if(entry.isDirectory())visit(full);else if(/\.(tsx?|css|html|svg)$/.test(full)){const text=readFileSync(full,'utf8');for(const match of text.matchAll(/hrbveew/gi))assert.equal(match[0],'hrbveew');}}}
 visit(fileURLToPath(new URL('../src',import.meta.url))); assert.match(read('index.html'),/lang="pt-BR"/);
});
