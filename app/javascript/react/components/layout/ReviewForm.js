import React, { useState } from "react"

const ReviewForm = (props) => {
  const [form, setForm] = useState({
    body: "",
    rating: "",
  })

  const handleInputChange = (event) => {
    setForm({ ...form, [event.currentTarget.name]: event.currentTarget.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.addNewReview(form)
    setForm({
      body: "",
      rating: "",
    })
  }

  return (
    <div className="review-form">
      <h3 className="add-review-header">Add a review</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="rating">Rating:</label>
        <input
          type="number"
          id="rating"
          name="rating"
          min="1"
          max="5"
          onChange={handleInputChange}
          value={form.rating}
        />
        <label htmlFor="body">
          <textarea
            id="body"
            name="body"
            onChange={handleInputChange}
            value={form.body}
          />
        </label>
        <input type="submit" value="Add Review" className="submit-button" />
      </form>
    </div>
  )
}

export default ReviewForm
