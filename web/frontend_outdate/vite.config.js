import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

if (
	process.env.npm_lifecycle_event === 'build' &&
	!process.env.CI &&
	!process.env.SHOPIFY_API_KEY
) {
	throw new Error(
		'\n\nThe frontend build will not work without an API key. Set the SHOPIFY_API_KEY environment variable when running the build command, for example:' +
			'\n\nSHOPIFY_API_KEY=<your-api-key> npm run build\n'
	);
}

process.env.VITE_SHOPIFY_API_KEY =
	process.env.SHOPIFY_API_KEY;

// Clean up HOST from environment (strip protocol and port)
const host = process.env.HOST
	? process.env.HOST.replace(
			/https?:\/\//,
			''
	  ).split(':')[0]
	: 'localhost';

let hmrConfig;
if (host === 'localhost') {
	hmrConfig = {
		protocol: 'ws',
		host: 'localhost',
		port: 64999,
		clientPort: 64999,
	};
} else {
	hmrConfig = {
		protocol: 'wss',
		host: host, // just the hostname, no port
		port: process.env.FRONTEND_PORT,
		clientPort: 443, // standard secure WebSocket port
	};
}

// Proxy config to talk to Rails backend
const proxyOptions = {
	target: `http://127.0.0.1:${process.env.BACKEND_PORT}`,
	changeOrigin: false,
	secure: true,
	ws: false,
};

export default defineConfig({
	root: dirname(fileURLToPath(import.meta.url)),
	plugins: [vue(
    {
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('ui-'),
        },
      },
    }
  )],
	resolve: {
		preserveSymlinks: true,
		dedupe: ['vue'],
	},
	server: {
		host: 'localhost',
		port: process.env.FRONTEND_PORT,
		hmr: hmrConfig,
		proxy: {
			'^/(\\?.*)?$': proxyOptions,
			'^/api(/|(\\?.*)?$)': proxyOptions,
		},
	},
});
