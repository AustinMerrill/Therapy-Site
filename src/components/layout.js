/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import Header from "./header"

const Layout = ({ children }) => {
  return (
    <div className="p-5 mx-auto h-screen flex flex-col md:w-2/3">
      <Header />
      {children}
    </div>
  )
}

export default Layout
