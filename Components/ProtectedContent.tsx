"use client"

import type React from "react"
import { useState, useEffect } from "react"

interface ProtectedContentProps {
  token: string
}

const ProtectedContent: React.FC<ProtectedContentProps> = ({ token }) => {
  const [content, setContent] = useState<string>("")

  useEffect(() => {
    const fetchProtectedContent = async () => {
      try {
        const response = await fetch("http://localhost:3001/protected", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        const data = await response.json()
        if (response.ok) {
          setContent(data.message)
        } else {
          setContent("Failed to fetch protected content")
        }
      } catch (error) {
        console.error("Error:", error)
        setContent("An error occurred while fetching protected content")
      }
    }

    fetchProtectedContent()
  }, [token])

  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold mb-2">Protected Content</h2>
      <p>{content}</p>
    </div>
  )
}

export default ProtectedContent

