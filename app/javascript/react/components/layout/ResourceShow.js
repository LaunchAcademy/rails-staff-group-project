import React, { useEffect, useState } from "react"

import CommentTile from "./CommentTile"
import CommentForm from "./CommentForm"

const ResourceShow = (props) => {
  const [resource, setResource] = useState({ comments: [] })

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
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    fetchResource()
  }, [])

  const addNewComment = async (comment) => {
    try {
      const response = await fetch(`/api/v1/resources/${resourceId}/comments`, {
        credentials: "same-origin",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(comment),
      })
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const responseBody = await response.json()
      const newComments = resource.comments.concat(responseBody.comment)
      setResource({ ...resource, comments: newComments })
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }

  const commentTiles = resource.comments.map((comment) => {
    return <CommentTile key={comment.id} comment={comment} />
  })

  return (
    <div>
      <h1>{resource.name}</h1>
      <h4>
        <a href={resource.url} target="_blank">
          {resource.url}
        </a>
      </h4>
      <CommentForm addNewComment={addNewComment} />
      {commentTiles}
    </div>
  )
}

export default ResourceShow
