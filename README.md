# 🎙️ PrepWise - AI Powered Interview Preparation Platform

PrepWise is an AI-powered mock interview platform that helps users prepare for technical and behavioral interviews through realistic voice-based conversations. The platform generates customized interview questions, conducts live AI interviews, evaluates responses, and provides detailed feedback to improve interview performance.

Built using **Next.js, TypeScript, Firebase, Google Gemini AI, Vapi Voice AI, Tailwind CSS, and shadcn/ui**, PrepWise creates an immersive interview experience that closely simulates real-world recruitment processes.

---

## 📖 Overview

Preparing for interviews can be challenging, especially without access to experienced mentors or realistic practice environments. Traditional interview preparation methods often rely on static question banks and lack personalized feedback.

PrepWise solves this problem by providing:

* AI-generated interview questions
* Voice-based interview simulations
* Real-time AI conversations
* Automated performance evaluation
* Detailed interview feedback
* Progress tracking and interview history

The platform enables candidates to practice interviews anytime and receive actionable insights to improve their communication, confidence, and technical knowledge.

---

## ✨ Features

### 🤖 AI Interview Generation

Generate customized interviews based on:

* Job Role
* Experience Level
* Technical Skills
* Interview Type
* Number of Questions

Every interview is dynamically created using Google Gemini AI, ensuring unique and relevant questions.

---

### 🎤 Voice-Based Interviews

Conduct interviews through natural voice conversations using Vapi AI.

Features include:

* Real-time voice interaction
* Speech-to-text processing
* AI-generated responses
* Natural conversational flow
* Human-like interview experience

---

### 📊 Detailed Feedback System

After completing an interview, users receive:

* Overall Interview Score
* Communication Analysis
* Technical Knowledge Assessment
* Confidence Evaluation
* Strength Identification
* Improvement Suggestions

This allows candidates to identify weaknesses and improve through continuous practice.

---

### 📚 Interview History

Users can access all previous interviews including:

* Interview Questions
* User Responses
* AI Feedback
* Performance Scores
* Historical Progress

---

### 🔐 Authentication & User Management

Secure authentication powered by Firebase.

Features:

* User Registration
* Login & Logout
* Protected Routes
* Session Management
* Secure User Data Storage

---

### 📱 Responsive Design

Fully optimized for:

* Desktop
* Tablet
* Mobile Devices

Users can practice interviews anytime from any device.

---

## 🏗️ System Architecture

```text
┌─────────────────────────┐
│       Next.js App       │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│     Firebase Auth       │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│      Firestore DB       │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│    Google Gemini AI     │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│      Vapi Voice AI      │
└─────────────────────────┘
```

---

## 🛠️ Tech Stack

### Frontend

* Next.js 15
* React
* TypeScript
* Tailwind CSS
* shadcn/ui
* Lucide Icons

### Backend

* Next.js Server Actions
* Next.js API Routes

### Database

* Firebase Firestore

### Authentication

* Firebase Authentication

### AI & Voice

* Google Gemini AI
* Vapi AI

### Deployment

* Vercel

---

## 📂 Project Structure

```bash
prepwise/
│
├── app/
│   ├── (auth)/
│   ├── dashboard/
│   ├── interview/
│   └── feedback/
│
├── components/
│   ├── ui/
│   ├── shared/
│   └── interview/
│
├── lib/
│   ├── firebase/
│   ├── actions/
│   └── ai/
│
├── constants/
│
├── public/
│
├── types/
│
└── utils/
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/hey-virender/prepwise.git
```

```bash
cd prepwise
```

### Install Dependencies

```bash
npm install
```

### Create Environment Variables

Create a `.env.local` file in the root directory.

```env
NEXT_PUBLIC_FIREBASE_API_KEY=

NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=

NEXT_PUBLIC_FIREBASE_PROJECT_ID=

NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=

NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=

NEXT_PUBLIC_FIREBASE_APP_ID=

GOOGLE_GENERATIVE_AI_API_KEY=

VAPI_API_KEY=

VAPI_ASSISTANT_ID=
```

### Run Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## 🔄 Application Workflow

### Step 1

User creates an account and logs in.

### Step 2

User selects:

* Role
* Experience Level
* Interview Type
* Tech Stack

### Step 3

Gemini AI generates customized interview questions.

### Step 4

Vapi AI conducts a live voice interview.

### Step 5

User answers questions verbally.

### Step 6

Responses are analyzed and evaluated.

### Step 7

Detailed AI-generated feedback is displayed.

### Step 8

Interview results are stored for future review.

---

## 📈 Performance Evaluation Metrics

PrepWise evaluates users on:

| Metric              | Description                  |
| ------------------- | ---------------------------- |
| Communication       | Clarity and articulation     |
| Technical Knowledge | Subject understanding        |
| Problem Solving     | Logical thinking ability     |
| Confidence          | Delivery and professionalism |
| Relevance           | Quality of answers           |
| Completeness        | Coverage of key concepts     |

---

## 🎯 Use Cases

### Students

* Placement Preparation
* Internship Interviews
* Campus Recruitment

### Fresh Graduates

* Entry-Level Jobs
* Technical Interviews
* HR Interviews

### Professionals

* Career Switches
* Promotion Interviews
* Leadership Roles

### Training Institutes

* Candidate Evaluation
* Interview Readiness Programs

---

## 🔒 Security Features

* Firebase Authentication
* Protected Routes
* Secure API Communication
* Environment Variable Protection
* User-Specific Data Access
* Firestore Security Rules

---

## 🚀 Future Enhancements

* Video Interview Support
* Facial Expression Analysis
* Emotion Detection
* Resume Analysis
* Multi-Language Interviews
* Coding Interview Module
* System Design Interviews
* AI Career Coach
* Company-Specific Interview Tracks
* Advanced Analytics Dashboard

---

## 💡 Key Learning Outcomes

This project demonstrates expertise in:

* Full Stack Development
* Next.js Architecture
* TypeScript Development
* AI Integration
* Prompt Engineering
* Voice AI Systems
* Firebase Ecosystem
* Server Actions
* Authentication Systems
* Responsive UI Design

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push the branch
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Virender Chauhan**

* Portfolio: https://virenderchauhan.in
* LinkedIn: https://linkedin.com/in/hey-virender
* GitHub: https://github.com/hey-virender

---

## ⭐ Support

If you found this project helpful, please consider giving it a star on GitHub.

It helps others discover the project and supports future development.
