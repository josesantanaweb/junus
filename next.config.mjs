const config = {
    typescript: {
        ignoreBuildErrors: true,
    },
    swcMinify: false,
    compiler: {
        styledComponents: true,
    },
    async redirects() {
        return [{
            source: '/',
            destination: '/home',
            permanent: false,
        }, ]
    },
}

export default config