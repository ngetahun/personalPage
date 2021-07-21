import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`

  return (
    <div className="container flex flex-col h-screen mx-auto">
      <header className="xl:bg-grey-500 lg:bg-grey-700 md:bg-grey-400 sm:bg-grey-600">
			<div className=" md:flex justify-center py-8 ">
        <div className="my-auto ">
            <h1 className="text-orange-100 text-3xl text-center"> {title} </h1>
            <p className=" text-gray-600 text-xl text-center"> Subtitle </p>
        </div>

    		</div>
			</header>
      <main className="flex-grow">{children}</main>
      <footer className="p-4 text-center">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
