
import express from "express"
import jwt from "jsonwebtoken"
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cors())

const PORT = 3001
const SECRET_KEY = "your-secret-key"

const users = [
  { id: 1, username: "user1", password: "password1" },
  { id: 2, username: "user2", password: "password2" },
]

app.post("/login", (req, res) => {
  const { username, password } = req.body
  const user = users.find((u) => u.username === username && u.password === password)

  if (user) {
    const token = jwt.sign({ userId: user.id }, SECRET_KEY, { expiresIn: "1h" })
    res.json({ token })
  } else {
    res.status(401).json({ message: "Invalid credentials" })
  }
})

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"]
  const token = authHeader && authHeader.split(" ")[1]

  if (token == null) return res.sendStatus(401)

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}

app.get("/protected", authenticateToken, (req, res) => {
  res.json({ message: "This is protected content!", userId: req.user.userId })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

