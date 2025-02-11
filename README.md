# 🔒 Authorization Gateway Service  

## 📌 Overview  
The **Authorization Gateway Service** is a lightweight authentication and authorization system that secures website APIs using **JWT (JSON Web Tokens)**. This service ensures that only authenticated users can access protected routes.  

---

## 🚀 Features  
✅ **JWT-based Authentication** for secure access control  
✅ **Role-based Access Control (RBAC)** for fine-grained permissions  
✅ **FastAPI framework** for high-performance execution  
✅ **OAuth2 Password Flow** for user authentication  
✅ **Token-based Authorization** to protect routes  

---

## 🛠️ Tech Stack  
- **Programming Language**: Python 🐍  
- **Framework**: FastAPI ⚡  
- **Authentication**: OAuth2 + JWT  
- **Security**: HTTPBearer Tokens  

---

## 📂 API Endpoints  

| Method | Endpoint      | Description |
|--------|-------------|-------------|
| 🟢 `POST` | `/login` | Authenticate user & generate JWT token |
| 🟢 `GET` | `/protected` | Access protected route (Requires JWT) |

---

## 🔧 Installation & Setup  

### 1️⃣ Clone the repository  
```bash
git clone https://github.com/your-username/auth-gateway.git
cd auth-gateway
