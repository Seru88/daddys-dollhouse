import { defineConfig } from 'astro/config';

const allowedHosts =
  process.env.DEV_ALLOWED_HOSTS?.split(',')
    .map(host => host.trim())
    .filter(Boolean) ?? [];

// https://astro.build/config
export default defineConfig({
  site: 'https://daddysdollhouse.org',
  // Opt-in for dev servers proxied through a hostname (e.g. Tailscale Serve).
  // Production builds ignore this; it is only read by the Vite dev server.
  vite: {
    server: { allowedHosts },
  },
});
