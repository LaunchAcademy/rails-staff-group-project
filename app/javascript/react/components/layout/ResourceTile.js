import React from "react"
import { Link } from "react-router-dom"

const ResourceTile = (props) => {
  const { id, name } = props.resource

  return (
    <p>
      <Link to={`/resources/${id}`} className="resource-tile">{name}</Link>
    </p>
  )
}

export default ResourceTile
