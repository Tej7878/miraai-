import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'cloudinary-config-saver',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/api/save-cloudinary-videos' && req.method === 'POST') {
            let body = '';
            req.on('data', chunk => {
              body += chunk;
            });
            req.on('end', () => {
              try {
                const data = JSON.parse(body);
                const filePath = path.resolve(__dirname, 'src/config/cloudinary_videos.json');
                
                // Ensure directory exists
                const dirPath = path.dirname(filePath);
                if (!fs.existsSync(dirPath)) {
                  fs.mkdirSync(dirPath, { recursive: true });
                }

                // Write configuration
                fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
                
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ status: 'success' }));
              } catch (err) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: err.message }));
              }
            });
          } else {
            next();
          }
        });
      }
    }
  ]
});
