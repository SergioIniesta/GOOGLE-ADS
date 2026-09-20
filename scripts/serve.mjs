import http from 'node:http';
import {readFile,stat} from 'node:fs/promises';
import path from 'node:path';
const root=path.resolve('dist');
const mime={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.xml':'application/xml; charset=utf-8','.svg':'image/svg+xml','.jpg':'image/jpeg','.webp':'image/webp','.png':'image/png','.txt':'text/plain; charset=utf-8'};
http.createServer(async(req,res)=>{try{const pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);let file=path.resolve(root,'.'+pathname);if(file!==root&&!file.startsWith(root+path.sep)){res.writeHead(403);return res.end();}if((await stat(file)).isDirectory())file=path.join(file,'index.html');const data=await readFile(file);res.writeHead(200,{'Content-Type':mime[path.extname(file)]||'application/octet-stream'});res.end(data);}catch{res.writeHead(404,{'Content-Type':'text/html; charset=utf-8'});res.end('<h1>Página no encontrada</h1><a href="/">Volver a Prisma Diario</a>');}}).listen(4187,'127.0.0.1',()=>console.log('Local: http://127.0.0.1:4187'));

