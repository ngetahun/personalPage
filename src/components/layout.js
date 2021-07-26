import * as React from "react"
import { Link } from "gatsby"
import Nav from './nav'

const Layout = ({ title, subtitle, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`

  return (
    <div className="container w-3/5 flex flex-col h-screen mx-auto">
			<Nav title={title}/>
      <main className="flex-grow">{children}</main>
      <footer className="p-4 text-center">
				<p className="text-gray-600 text-sm text-center">
        	© {new Date().getFullYear()}, Nate's Blog
					<br />
        	Powered by <a className="underline" href="https://www.gatsbyjs.com">Gatsby</a>
				</p>
      </footer>
    </div>
  )
}

export default Layout
