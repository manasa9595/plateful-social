# Plateful – Social Food Discovery Web App

Plateful is a responsive, high-performance food discovery platform inspired by services like Burpple. Built with a modern React stack, it supports dynamic theming, filtering, and client-side routing — optimized for developer experience and scalability.

---

## ✨ Features

- 🔍 **Search & Filter Restaurants** by name, cuisine, or location
- 🌙 **Dark / Light Theme** with user preference saved in `localStorage`
- 📦 **Reusable Components** and constants for clean structure
- 📱 **Responsive UI** using Tailwind CSS
- 🧭 **Client-side Routing** with `react-router-dom`
- 🚀 **Fast Refresh & Dev Experience** with Vite
- 📄 **Collapsible Sidebar Navigation**
- 🔄 **Paginated Lists** and optional sorting by rating
- 💡 **Mock API** with future-ready backend integration hooks

---

## 🛠️ Tech Stack

- **React 19**
- **Vite** for ultra-fast dev/build setup
- **Tailwind CSS 4** for utility-first styling
- **Lucide Icons**
- **React Router v7**
- **LocalStorage** for theme and UI state
- **Mock JSON API** (swap with real backend anytime)

---

## 📁 Folder Structure

src/
├── components/ # Shared and feature-specific UI components
├── pages/ # Top-level views (Home, Categories, Profile)
├── services/ # API methods (mock or real)
├── constants/ # Reusable config: filters, navigation
├── styles/ # Tailwind entry + custom styles

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

## 🧪 Future Improvements

✅ Favorites page
🔐 Auth (sign in/up)
🔄 SSR/hydration for SEO
🗃️ Connected backend (e.g., Firebase, Supabase, or Rails API)

## 📄 License

Built as a portfolio project to demonstrate frontend engineering capabilities.
