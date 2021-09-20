import React from "react"

const CommentTile = (props) => {
  return (
    <div>
      <p>Rating: {props.comment.rating}</p>
      <p>{props.comment.body}</p>
    </div>
  )
}

export default CommentTile
