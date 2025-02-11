import type React from "react"
import { useState } from "react"
import LoginForm from "./components/LoginForm"
import ProtectedContent from "./components/ProtectedContent"

const App: React.FC = () => {
  const [token, setToken] = useState<string | null>(null)

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Authorization Gateway</h1>
      {!token ? <LoginForm setToken={setToken} /> : <ProtectedContent token={token} />}
    </div>
  )
}

export default App

