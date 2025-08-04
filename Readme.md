# Self-Blog

Tracks my thoughts on tech and the daily gibberish I think of.

# 🌐 My Blog

A clean, developer-focused blog built from scratch using:

- **Next.js 15 (App Router)**
- **Tailwind CSS + ShadCN/UI**
- **MongoDB + Mongoose**
- **Custom Admin Auth (email/password)**
- **Deployed via Cloudflare Pages**

## 🚀 Features

- Only admin (me) can log in and post blogs
- Visitors can only read blog content
- Tag-based filters, pagination, and timeline notes
- Minimalist, dark-themed, and mobile-friendly UI
- Full markdown support with elegant typography

## 🔧 Stack

| Layer     | Tech                    |
| --------- | ----------------------- |
| Framework | Next.js 15 (App Router) |
| Styling   | Tailwind CSS, ShadCN/UI |
| DB        | MongoDB Atlas           |
| Auth      | NextAuth (Credentials)  |
| Icons     | Lucide                  |
| Hosting   | Cloudflare Pages        |

## 🔐 Environment Variables

Create a `.env.local` file with the following values so the server can
authenticate with MongoDB:

```
MONGODB_URI="<your-mongodb-host>"
MONGODB_USERNAME="starman011"
MONGODB_PASSWORD="<your-password>"
MONGODB_DB="<database-name>"
```

## 🗂️ Project Phases

1. Project Setup
2. MongoDB Integration
3. Admin Auth
4. Blog Logic
5. UI Build (based on design references)
6. Cloudflare Deploy
7. Final README

---

## 💡 Goal

To build a **personal publishing platform** where I can write articles and notes with full control over content, design, and deployment.
