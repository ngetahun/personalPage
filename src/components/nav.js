import * as React from "react"
import { Link } from "gatsby"

const Nav = ({ title }) => {
	return (
		<div class="flex-0 my-auto flex flex-col xl:bg-grey-500 lg:bg-grey-700 md:bg-grey-400 sm:bg-grey-600">
			<nav class="px-4 flex justify-content-center bg-white h-16 border-b-2">
				<div className="my-auto mx-6">
					<Link to="/">
						<p className="text-orange-100 text-xl border-b-2 border-black text-center"> {title} </p>
					</Link>
        		</div>
			</nav>
		</div>
	)
}

export default Nav
