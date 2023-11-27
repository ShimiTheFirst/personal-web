const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin')

// https://vanilla-extract.style/documentation/integrations/next/
const withVanillaExtract = createVanillaExtractPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = withVanillaExtract(nextConfig)
