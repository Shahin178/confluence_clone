# Confluence Clone

A collaborative document management web application inspired by Atlassian Confluence.  
Built with **React**, **Node.js**, **Express**, and **MongoDB**.

---

## Features

- **User Authentication** (JWT-based login/register/logout)
- **Forgot Password** with OTP email verification and password reset
- **Create, Edit, and View Documents**
- **Document Visibility:** Public or Private
- **Share Documents** with specific users (multi-select)
- **Rich Text Editing** (Tiptap)
- **Responsive UI** with modern design
- **Protected Routes** (only logged-in users can edit or create docs)
- **Public Document Listing** for non-logged-in users

---

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS, react-select, Tiptap
- **Backend:** Node.js, Express, MongoDB, Mongoose, Nodemailer
- **Authentication:** JWT
- **Email:** Nodemailer (with Gmail or any SMTP)

---

## Demo Credentials

Use these demo accounts to log in:

| Email                  | Password |
|------------------------|----------|
| shahin@gmail.com       | 1234     |
| banoshahin89@gmail.com | 1234     |
| rani@gmail.com         | 1234     |

---

## Project Structure

```
confluence_clone/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── ...
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── authContext.jsx
│   │   └── ...
│   └── ...
└── README.md
```

---

## Getting Started

### Prerequisites

- Node.js & npm
- MongoDB

### Setup

#### 1. Clone the repository

```bash
git clone https://github.com/Shahin178/confluence_clone
cd confluence_clone
```

#### 2. Backend

```bash
cd backend
npm install
# Create a .env file with your MongoDB URI and email credentials
npm start
```

#### 3. Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## Environment Variables

**Backend (.env):**
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_app_password
```

---

## Usage

- Register a new user or login with the demo credentials above.
- Create, edit, and share documents.
- Mention users with `@username` to auto-share.
- Use the search bar to find documents by title or content.
- Forgot password? Use the OTP flow to reset via email.
- Public documents are visible to everyone; private docs are only visible to selected users.

---

## Architecture & Design

- **Modular backend** with clear separation of controllers, models, routes, and utilities.
- **Frontend** uses context for authentication and protected routes.
- **Document schema** supports versioning, sharing, and permission levels.
- **API** follows RESTful conventions and is secured with JWT.
- **Email** notifications for password reset.

---

## 📺 (Optional) Demo Video

_A live demo video can be provided upon request._

---
