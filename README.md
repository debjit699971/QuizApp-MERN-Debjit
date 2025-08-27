# QuizApp

A simple and secure **Online Quiz Application** built with the **MERN stack (MongoDB, Express, React, Node.js)**.  
It allows assessors to create tests and examinees to take them with proper authentication and restrictions.  

---

## 🚀 Features

### 👨‍🏫 Assessor (Test Creator)
- Create tests from 24 categories.
- Configure:
  - Time duration ⏱
  - Test expiry 📅
  - Number of questions (< 50)
- View all tests created by you.
- View results of each test.

### 👨‍🎓 Examinee (Test Taker)
- Enter **Name** + **Pin** to take test (no email required).
- Can take each test **only once**.
- Cannot access expired tests.
- Auto-submit when time expires.
- Smooth navigation with centered arrows (← →).

### 🔒 Security
- Passwords stored using **bcrypt hashing**.
- Authentication via **JWT tokens**.
- Results & tests are protected (only assessors can view them).
- Test questions are randomized to prevent cheating.

---

## 🛠️ Tech Stack

### Frontend
- **React** (SPA)
- **React Router DOM** (routing)
- **LocalStorage** (session handling)
- **Axios** (API calls)
- **CSS3 Modules** for styling
- Responsive & mobile-friendly UI

### Backend
- **Node.js** + **Express.js**
- **MongoDB** + **Mongoose** (ODM)
- **bcrypt** (password hashing)
- **JWT** (auth middleware)

---

## 📂 Project Structure