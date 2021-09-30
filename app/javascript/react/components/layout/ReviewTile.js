import React from "react"

const CommentTile = (props) => {
  const handleVoteClick = async (event) => {
    const voteObject = {
      review_id: props.review.id,
      current_user_id: props.currentUser.id,
      vote_value: event.currentTarget.id,
    }
    try {
      const response = await fetch(`/api/v1/votes`, {
        credentials: "same-origin",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(voteObject),
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

  const showVoteButtons = props.currentUser ? (
    <>
      <button id="upvote" onClick={handleVoteClick} className="vote-button">
        &#x1f44d;
      </button>
      <button id="downvote" onClick={handleVoteClick} className="vote-button">
        &#x1F44E;
      </button>
    </>
  ) : (
    ""
  )

  return (
    <div className="review-tile">
      <p>Rating: {props.review.rating}</p>
      <p>{props.review.body}</p>
      {showVoteButtons}
    </div>
  )
}

export default CommentTile
