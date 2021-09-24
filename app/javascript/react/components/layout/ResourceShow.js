import React, { useEffect, useState } from "react"

import ReviewTile from "./ReviewTile"
import ReviewForm from "./ReviewForm"

const ResourceShow = (props) => {
  const [resource, setResource] = useState({ reviews: [] })
  const [currentUser, setCurrentUser] = useState({})

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
      setCurrentUser(resourceData.resource.current_user)
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    fetchResource()
  }, [])

  const addNewReview = async (review) => {
    try {
      const response = await fetch(`/api/v1/resources/${resourceId}/reviews`, {
        credentials: "same-origin",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(review),
      })
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const responseBody = await response.json()
      const newReviews = resource.reviews.concat(responseBody.review)
      setResource({ ...resource, reviews: newReviews })
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }

  const reviewTiles = resource.reviews.map((review) => {
    return <ReviewTile key={review.id} review={review} currentUser={currentUser} />
  })

  return (
    <div>
      <h1>{resource.name}</h1>
      <h4>
        <a href={resource.url} target="_blank">
          {resource.url}
        </a>
      </h4>
      <ReviewForm addNewReview={addNewReview} />
      {reviewTiles}
    </div>
  )
}

export default ResourceShow
