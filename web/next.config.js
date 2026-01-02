const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.jsx',
    mdxOptions: {
        // Use Rust-based MDX compiler for faster compilation
        mdxRs: true,
    },
})

module.exports = withNextra({
    reactStrictMode: true,
    cleanDistDir: true,
    images: {
        unoptimized: true,
    },
    // Experimental features for faster dev experience
    experimental: {
        // Optimize package imports
        optimizePackageImports: ['lucide-react', 'framer-motion', 'recharts'],
    },
})
