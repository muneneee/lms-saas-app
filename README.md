# LMS SaaS App

A full-stack Learning Management System built with modern web technologies, featuring AI-powered voice tutors, user authentication, and subscription management.

🔗 **Live Demo:** [https://lms-saas-app-sable.vercel.app/](https://lms-saas-app-sable.vercel.app/)  
📂 **Repository:** [https://github.com/muneneee/lms-saas-app](https://github.com/muneneee/lms-saas-app)

---

## 📋 Table of Contents
- [Introduction](#-introduction)
- [Tech Stack](#️-tech-stack)
- [Features](#-features)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Project Structure](#-project-structure)
- [Deployment](#-deployment)
- [Acknowledgments](#acknowledgments)

---

## 🎯 Introduction

This Learning Management System (LMS) is a SaaS application that enables users to learn through AI-powered voice tutors.  
The platform features real-time voice interactions, subscription management, and a modern, responsive interface.  

Users can create custom AI tutors, bookmark their favorites, and track their learning progress through session history.  

Built with **Next.js**, **Supabase**, and integrated with **Vapi** for voice AI capabilities, this project demonstrates modern web development practices and full-stack application architecture.

---

## ⚙️ Tech Stack

- **Next.js** – React framework for server-side rendering and full-stack development  
- **TypeScript** – Type-safe JavaScript for better code quality  
- **Supabase** – Backend-as-a-service for database and real-time features  
- **Clerk** – User authentication and subscription management  
- **Vapi** – Voice AI platform for conversational tutoring agents  
- **Stripe** – Payment processing and subscription billing  
- **Tailwind CSS** – Utility-first CSS framework for styling  
- **shadcn/ui** – Customizable component library built on Radix UI  
- **Sentry** – Error tracking and performance monitoring  
- **Zod** – TypeScript schema validation library  

---

## 🔋 Features

- 👉 **AI Voice Agents** – Take tutoring sessions with voiced AIs specializing in your preferred topics  
- 👉 **Authentication** – Secure user sign-up and sign-in with Clerk (including Google login)  
- 👉 **Billing & Subscriptions** – Manage plans, upgrades, and payment details easily  
- 👉 **Bookmarks & Session History** – Organize learning and revisit previous sessions  
- 👉 **Code Reusability** – Modular components for scalable development  
- 👉 **Create a Tutor** – Build your own AI tutors with custom subject, topic, and tone  
- 👉 **Cross-Device Compatibility** – Fully responsive design for all devices  
- 👉 **Database Integration** – Real-time data handling with Supabase  
- 👉 **Modern UI/UX** – Built using Tailwind CSS and shadcn/ui  
- 👉 **Scalable Tech Stack** – Production-ready Next.js setup for performance  
- 👉 **Search Functionality** – Robust filters and search for finding tutors quickly  
- and many more, including code architecture and reusability enhancements.

---

## 🤸 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

Make sure you have the following installed:

- **Git**  
- **Node.js** (v18 or higher)  
- **npm** (Node Package Manager)

### Cloning the Repository

```bash
git clone https://github.com/muneneee/lms-saas-app.git
cd lms-saas-app


### Cloning the Repository

```bash
git clone https://github.com/muneneee/lms-saas-app.git
cd lms-saas-app
Installing Dependencies
Use your preferred package manager to install the dependencies:

bash
Copy code
npm install
# or
yarn install
# or
pnpm install
# or
bun install
Running the Project
Start the development server:

bash
Copy code
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
Open http://localhost:3000 in your browser to view the project.

Environment Variables
Create a .env.local file in the root directory and add the necessary environment variables. Example:

bash
Copy code
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
OPENAI_API_KEY=your_openai_api_key
Deployment
The project is deployed on Vercel.
You can view the live application here:
🔗 LMS SaaS App

To deploy your own version, push your code to a GitHub repository and import it into Vercel.
Vercel will automatically detect the Next.js setup and handle the deployment.

Technologies Used
Next.js 14 (App Router)

TypeScript

Tailwind CSS

Prisma ORM

Supabase (Auth & Database)

Vercel (Hosting & Deployment)

OpenAI API (AI-Powered Features)

Features
🧠 AI-powered learning companion system

📚 Dynamic course and session management

👤 User authentication with Supabase

⚙️ Responsive and modern UI built with Tailwind CSS

☁️ Fully deployed on Vercel for scalability and performance

Project Structure
php
Copy code
lms-saas-app/
│
├── app/                  # App Router pages and routes
├── components/           # Reusable UI components
├── lib/                  # Utility functions and configurations
├── prisma/               # Database schema and migrations
├── public/               # Static assets
├── styles/               # Global styles and Tailwind configuration
├── .env.local.example    # Example environment variables
├── package.json
└── README.md
Contribution
Feel free to fork this repository, open issues, and submit pull requests to enhance the project.

License
This project currently does not have a license.
If you plan to contribute or use it publicly, please add an appropriate open-source license.

Author: Kevin Kimathi
Live Demo: https://lms-saas-app-sable.vercel.app/
