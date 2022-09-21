import * as React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const ListItem = ({ title, frontmatter, fields, excerpt }) => {
  const rootPath = `${__PATH_PREFIX__}/`

  return (
    <div className="mt-6">
      <div className="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <span className="font-light text-gray-600">{frontmatter.date}</span>
        </div>
        <div className="mt-2">
          <Link
            to={fields.slug}
            itemProp="url"
            className="text-2xl font-bold text-gray-700 hover:underline"
          >
            {title}
          </Link>

          <p
            className="mt-2 text-gray-600"
            dangerouslySetInnerHTML={{
              __html: frontmatter.description || excerpt,
            }}
            itemProp="description"
          />
        </div>
        <div className="flex items-center justify-between mt-4">
          <Link to={fields.slug} className="text-blue-500 hover:underline">
            Read more
          </Link>
        </div>
      </div>
    </div>
  )
}

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  frontmatter: PropTypes.object,
  fields: PropTypes.object,
  excerpt: PropTypes.string,
}
export default ListItem
