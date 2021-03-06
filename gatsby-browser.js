import React from 'react'
import TopLayout from './src/components/TopLayout'

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

export const wrapRootElement = ({ element }) => {
  return <TopLayout>{element}</TopLayout>
}

// exports.onInitialClientRender = () => {};
