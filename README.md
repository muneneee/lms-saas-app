# LMS SaaS App

A modern Learning Management System (LMS) built with Next.js 14, Supabase, and Clerk, designed to help users create, manage, and interact with courses efficiently.  
Deployed live on Vercel for a fast and seamless experience.

**Live Demo:** [https://lms-saas-app-sable.vercel.app](https://lms-saas-app-sable.vercel.app)

## 🚀 Features

- 🔐 Authentication and user management with Clerk
- 💾 Data storage and real-time updates via Supabase
- 🤖 AI tutor integration powered by Vapi
- ⚡ Modern and responsive UI built using Next.js App Router
- 🎯 Scalable and deployable instantly with Vercel

## 🧰 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Auth:** Clerk
- **Database:** Supabase
- **AI Assistant:** Vapi
- **Monitoring:** Sentry
- **Deployment:** Vercel
- **Language:** TypeScript

## 🧩 Project Structure
lms-saas-app/
├── app/ # Next.js App Router pages, routes, and layouts
├── components/ # Reusable UI components
├── lib/ # Utilities, helpers, and API logic
├── public/ # Static assets
├── styles/ # Global styles
├── types/ # TypeScript definitions
├── .env.local # Environment variables
├── next.config.mjs # Next.js configuration
├── package.json
└── README.md


## ⚙️ Getting Started

### Cloning the Repository

```bash
git clone https://github.com/muneneee/lms-saas-app.git
cd lms-saas-app

### Installing Dependencies
npm install
# or
yarn install
# or
pnpm install
# or
bun install

## Running the Project
### Start the development server:

npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev

## 🌍 Environment Variables
### Create a .env.local file in your root directory and include the following:

# Sentry
SENTRY_AUTH_TOKEN=

# Vapi
NEXT_PUBLIC_VAPI_WEB_TOKEN=

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/

# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
