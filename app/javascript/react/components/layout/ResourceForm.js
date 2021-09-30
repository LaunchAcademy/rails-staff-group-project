import React, { useState } from "react"
import { Redirect } from "react-router"

const ResourceForm = (props) => {
  const [form, setFrom] = useState({
    name: "",
    url: "",
  })
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const [newResourceId, setNewResourceId] = useState()

  const addNewResource = async () => {
    try {
      const response = await fetch("/api/v1/resources", {
        credentials: "same-origin",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      } else {
        const responseBody = await response.json()
        setNewResourceId(responseBody.resource.id)
        setShouldRedirect(true)
      }
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }

  const handleInputChange = (event) => {
    setFrom({ ...form, [event.currentTarget.name]: event.currentTarget.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    addNewResource()
  }

  if (shouldRedirect) {
    return <Redirect to={`/resources/${newResourceId}`} />
  }

  return (
    <div className="body">
      <h1 className="header">Add a resource</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="url">
          URL:
          <input type="text" id="url" name="url" onChange={handleInputChange} />
        </label>
        <input type="submit" value="Submit" className="submit-button" />
      </form>
    </div>
  )
}

export default ResourceForm
