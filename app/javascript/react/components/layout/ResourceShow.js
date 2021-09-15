import React, { useEffect, useState } from "react"

const ResourceShow = (props) => {
  const [resource, setResource] = useState({})
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

  return (
    <>
      <h1>{resource.name}</h1>
      <a href={resource.url} target="_blank">
        {resource.url}
      </a>
    </>
  )
}

export default ResourceShow
