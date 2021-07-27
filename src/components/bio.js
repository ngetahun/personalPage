/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Bio = ({ twitter, github, linkedin, author}) => {

  // Set these values by editing "siteMetadata" in gatsby-config.js

  return (
    <div className="max-w-4xl px-10 py-6 mx-auto bg-white">

			<div class="min-h-screen flex flex-col bg-gray-100">
				<div class="m-auto">
					<div class="flex flex-col bg-gray-200 max-w-sm shadow-md py-8 px-10 md:px-8 rounded-md">
						<div class="flex flex-col md:flex-row gap-6 md:gap-8">
							<img class="rounded-full border-4 border-gray-300 h-24 w-24 mx-auto" src="https://randomuser.me/api/portraits/men/78.jpg" alt="" />
							<div class="flex flex-col text-center md:text-left">
								<div class="font-medium text-lg text-gray-800">Terry Sherman</div>
								<div class="text-gray-500 mb-3 whitespace-nowrap">Senior Software Developer</div>
								<div class="flex flex-row gap-4 text-gray-800 my-auto text-2xl mx-auto md:mx-0">
									<a class="hover:cursor-pointer hover:text-blue-500"><i class="fab fa-linkedin"></i></a>
									<a class="hover:cursor-pointer hover:text-blue-500"><i class="fab fa-facebook-square"></i></a>
									<a class="hover:cursor-pointer hover:text-blue-500"><i class="fab fa-github-square"></i></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
    </div>
  )
}

export default Bio
