/** @type {import('next').NextConfig} */

const withNextIntl = require('next-intl/plugin')(
    // This is the default (also the `src` folder is supported out of the box)
    './src/i18n.js'
);

const nextConfig = {
    output: 'export',
    images: { unoptimized: true },
    experimental: {
        appDir: true,
  },
}

module.exports = withNextIntl({
    ...nextConfig,
});
