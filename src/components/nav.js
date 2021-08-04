import * as React from "react"
import { Link } from "gatsby"

const Nav = ({ title }) => {
  return (
    <div className="flex-0 my-auto flex flex-col xl:bg-grey-500 lg:bg-grey-700 md:bg-grey-400 sm:bg-grey-600">
      <nav className="px-4 flex justify-content-center bg-white h-16 border-b-2">
        <div className="my-auto mx-6">
          <ul className="flex flex-row">
            <li className="mx-2">
              <Link to="/">
                <p className="text-orange-100 border-b-2 border-black text-xl text-center">
                  {" "}
                  {title}{" "}
                </p>
              </Link>
            </li>
            <li className="mx-2">
              <Link to="/about">
                <p className="text-orange-100 border-b-2 border-black text-md text-center">
                  {" "}
                  About{" "}
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Nav
