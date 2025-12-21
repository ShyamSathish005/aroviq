const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.jsx',
})

module.exports = withNextra({
    reactStrictMode: true,
    cleanDistDir: true,
    images: {
        unoptimized: true,
    }
})
