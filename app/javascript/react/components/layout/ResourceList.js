import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import ResourceTile from "./ResourceTile"

const ResourceList = (props) => {
  const [resources, setResources] = useState([])
  const [currentUser, setCurrentUser] = useState({})

  const fetchResources = async () => {
    try {
      const response = await fetch("/api/v1/resources")
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const resourcesData = await response.json()
      debugger
      setResources(resourcesData.resources.resources)
      setCurrentUser(resourcesData.current_user)
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    fetchResources()
  }, [])

  const resourceTiles = resources.map((resource) => {
    return <ResourceTile key={resource.id} resource={resource} />
  })

  const addResourceShow = currentUser ? <Link to="/resources/new">Add a resource</Link> : ""

  return (
    <div className="body">
      <h2 className="header">Here is a list of resources:</h2>
      {resourceTiles}
      <br />
      <h5 className="add-resource">
        {addResourceShow}
      </h5>
    </div>
  )
}

export default ResourceList
