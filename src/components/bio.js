/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { config, library } from "@fortawesome/fontawesome-svg-core"
import {
  fab,
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons"
import "@fortawesome/fontawesome-svg-core/styles.css"
import Avatar from "../images/avatar.svg"

config.autoAddCss = false
library.add(fab, faLinkedin, faTwitter, faGithub, faArrowCircleRight)

const Bio = ({ twitter, github, linkedin, author }) => {
  // Set these values by editing "siteMetadata" in gatsby-config.js
  const twitterURL = `https://twitter.com/${twitter}`
  const githubURL = `https://github.com/${github}`
  const linkedinURL = `https://www.linkedin.com/in/${linkedin}`

  return (
    <div className="max-w-4xl px-10 py-6 mx-auto bg-white">
      <div className="min-h-full flex flex-col">
        <div className="mx-auto my-48">
          <div className="flex flex-col bg-gray-200 max-w-sm shadow-md py-8 px-10 md:px-8 rounded-md">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              <div className="rounded-full h-24 w-24 mx-auto">
                <Avatar />
              </div>
              {/* <img className="rounded-full border-4 border-gray-300 h-24 w-24 mx-auto" src="https://randomuser.me/api/portraits/men/78.jpg" alt="" /> */}
              <div className="flex flex-col text-center md:text-left">
                <div className="font-medium text-lg text-gray-800">
                  {author.name}
                </div>
                <div className="text-gray-500 mb-3 whitespace-nowrap">
                  Software Developer
                </div>
                <div className="text-black-400 mb-3 whitespace-nowrap text-sm">
                  {author.summary}
                </div>
                <div className="flex flex-row gap-4 text-gray-800 my-auto text-2xl mx-auto md:mx-0">
                  <div className="p-2 content-around space-around hover:cursor-pointer hover:text-blue-500">
                    <Link
                      to={twitterURL}
                      rel="noopener"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={["fab", "twitter"]} />
                    </Link>
                  </div>
                  <div className="p-2 content-around space-around hover:cursor-pointer hover:text-blue-500">
                    <Link
                      to={githubURL}
                      rel="noopener"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={["fab", "github"]} />
                    </Link>
                  </div>
                  <div className="p-2 content-around space-around hover:cursor-pointer hover:text-blue-500">
                    <Link
                      to={linkedinURL}
                      rel="noopener"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={["fab", "linkedin"]} />
                    </Link>
                  </div>
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
