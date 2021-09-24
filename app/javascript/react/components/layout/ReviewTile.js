import React from "react"

const CommentTile = (props) => {
  const handleVoteClick = async (event) => {
    const voteObject = {
      review_id: props.review.id,
      current_user_id: props.currentUser.id,
      vote_value: event.currentTarget.id
    }
    try {
      const response = await fetch(`/api/v1/votes`, {
        credentials: "same-origin",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(voteObject)
      })
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  return (
    <div>
      <p>Rating: {props.review.rating}</p>
      <p>{props.review.body}</p>
      <button id="upvote" onClick={handleVoteClick}>Upvote</button>
      <button id="downvote" onClick={handleVoteClick}>Downvote</button>
    </div>
  )
}

export default CommentTile
