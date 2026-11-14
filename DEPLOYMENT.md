# BBA Career Hub - Complete Deployment Guide

This guide details how to deploy the **BBA Career Hub** application:
- **Frontend**: Deployed on **Cloudflare Pages** (React + Vite)
- **Backend**: Deployed on **Render** (Node.js + Express API)
- **Database**: **MongoDB Atlas** (Managed MongoDB cloud database)

---

## Architecture Overview

```
 [ Cloudflare Pages ]                  [ Render Web Service ]                [ MongoDB Atlas ]
+----------------------+              +----------------------+              +------------------+
| React + Vite App     | --(HTTPS)--> | Node.js Express API  | --(Mongoose)->| Cloud MongoDB    |
| (Frontend UI)        |  API Calls   | Port 5000 / $PORT    |  Connection  | Database Cluster |
+----------------------+              +----------------------+              +------------------+
```

---

## Step 1: Set Up MongoDB Atlas (Database)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and sign in/create a free cluster.
2. Create a database named `bba_career_hub`.
3. Under **Database Access**, create a database user (e.g., `admin` with password `YourSecurePassword123`).
4. Under **Network Access**, add `0.0.0.0/0` (allow access from anywhere) so Render can connect.
5. Copy your connection string. It will look like:
   ```env
   MONGODB_URI=mongodb+srv://admin:<password>@cluster0.mongodb.net/bba_career_hub?retryWrites=true&w=majority
   ```

---

## Step 2: Deploy Backend to Render

1. Log into [Render Dashboard](https://dashboard.render.com/) and click **New + -> Web Service**.
2. Connect your Git repository.
3. Configure settings:
   - **Name**: `bba-career-hub-backend`
   - **Root Directory**: `backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
4. Add **Environment Variables** under **Environment**:
   - `PORT`: `5000` (or leave default assigned by Render)
   - `NODE_ENV`: `production`
   - `MONGODB_URI`: `mongodb+srv://admin:YourPassword@cluster0.mongodb.net/bba_career_hub?retryWrites=true&w=majority`
   - `CORS_ORIGIN`: `https://your-app.pages.dev` (URL of your Cloudflare Pages app)
5. Click **Create Web Service**.
6. Once deployed, copy your Render public URL (e.g. `https://bba-career-hub-backend.onrender.com`).
7. Test the health check endpoint in browser: `https://bba-career-hub-backend.onrender.com/health`.

---

## Step 3: Deploy Frontend to Cloudflare Pages

1. Log into [Cloudflare Dashboard](https://dash.cloudflare.com/) and go to **Workers & Pages**.
2. Click **Create Application -> Pages -> Connect to Git**.
3. Select your repository.
4. Configure Build Settings:
   - **Framework Preset**: `Vite`
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Build Output Directory**: `dist`
5. Add **Environment Variables**:
   - `VITE_API_BASE_URL`: `https://bba-career-hub-backend.onrender.com/api`
6. Single Page Application Routing (SPA):
   - In `frontend/public/_redirects`, ensure this rule exists:
     ```
     /*  /index.html  200
     ```
7. Click **Save and Deploy**. Cloudflare Pages will build and deploy your React Vite app.

---

## Step 4: Connecting & Testing Connection Points

1. Open your deployed Cloudflare Pages URL (`https://bba-career-hub.pages.dev`).
2. Test Page Navigation:
   - Click **Home**, **Careers**, **Skills & Internships**, **About Us**.
3. Test Backend Connectivity:
   - Open **About Us** -> Fill out "Send Us a Student Note" form and submit. Verify success toast response from Express backend.
   - Open **Skills & Internships** -> Click **Apply Now** on any internship card -> Fill out the application form -> Verify API application submission.
   - Click **Join Community** modal -> Submit details -> Verify API registration response.

---

## Local Development Execution

To run both frontend and backend locally:

1. **Start Backend**:
   ```bash
   cd backend
   npm run dev
   ```
   *Runs on `http://localhost:5000` with mock fallback or local MongoDB.*

2. **Start Frontend**:
   ```bash
   cd frontend
   npm run dev
   ```
   *Runs on `http://localhost:5173`.*

---

## Summary of Credentials File (.env)

The root `.env` file contains standard credentials:
```env
PORT=5000
NODE_ENV=production
MONGODB_URI=mongodb://127.0.0.1:27017/bba_career_hub
CORS_ORIGIN=http://localhost:5173
VITE_API_BASE_URL=http://localhost:5000/api
```
