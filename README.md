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

---

## ▶️ How to Use the App

### 1️⃣ Register / Login
- Open the app → **Register/Login Page**.  
- New users: **Register** with name, email, and password.  
- Existing users: **Login** with email + password.  

---

### 2️⃣ Create a Test (Assessor)
- After login, go to **Dashboard → Create Test**.  
- Select category, number of questions (<50), time limit, and expiry date.  
- Save the test.  
- Share the **Test Pin** with students/examinees.  

---

### 3️⃣ Take a Test (Examinee)
- Go to **Take Test Page**.  
- Enter:
  - **Name**  
  - **Pin** (provided by the assessor)  
- Click **Take Test**.  
- Answer questions → navigate using left (←) and right (→) arrows.  
- Test will auto-submit when time is up.  

---

### 4️⃣ View Results
- After submission, results are stored securely.  
- Examinees can see their own **score immediately**.  
- Assessors can view **all results of their tests** from the dashboard.  

---

✅ That’s it! Now you can run quizzes securely with assessors & examinees.  

---