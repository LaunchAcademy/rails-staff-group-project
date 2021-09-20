import React, { useEffect, useState } from "react"

import CommentTile from "./CommentTile"

const ResourceShow = (props) => {
  const [resource, setResource] = useState({})
  const [comments, setComments] = useState([])
  const resourceId = props.match.params.id

  const fetchResource = async () => {
    try {
      const response = await fetch(`/api/v1/resources/${resourceId}`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const resourceData = await response.json()
      setResource(resourceData.resource)
      setComments(resourceData.resource.comments)
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    fetchResource()
  }, [])

  const commentTiles = comments.map((comment) => {
    return <CommentTile key={comment.id} comment={comment} />
  })

  return (
    <div>
      <h1>{resource.name}</h1>
      <h4><a href={resource.url} target="_blank">
        {resource.url}
      </a></h4>
      {commentTiles}
    </div>
  )
}

export default ResourceShow
