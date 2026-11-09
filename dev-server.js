import { createServer } from 'vite';

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
});

async function start() {
  try {
    const server = await createServer({
      configFile: './vite.config.js',
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
    });
    await server.listen();
    console.log('Vite dev server running at http://localhost:3000/');
    
    // Keep alive with 10-second interval
    setInterval(() => {}, 10000);
  } catch (err) {
    console.error('Failed to start server:', err);
  }
}

start();
