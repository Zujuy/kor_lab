# KØR LAB | Calisthenics & Body Awareness 🦾

![KØR LAB Logo](/public/assets/kor_lab.png)

## ⚡️ Project Overview
**KØR LAB** is a high-performance web platform designed for the calisthenics community in Mexico City. The site provides a fluid Single Page Application (SPA) experience for accessing schedules, disciplines, and an exclusive technical routine center.

This project, developed under the **kor_lab** project umbrella, implements a modern architecture that decouples presentation logic from corporate lead management.

## 🛠 Tech Stack
* **Frontend:** React.js (Hooks & Functional Components).
* **Styling:** Styled Components (CSS-in-JS) for modular and scalable design.
* **Routing:** React Router v6 for dynamic navigation between the Landing Page and the Routines Center.
* **Backend/Mailing:** Native PHP integration for SMTP form handling on Hostinger servers.

## 🚀 Key Features
* **Responsive Design:** Custom Media Queries for a seamless mobile experience.
* **Lead Generation:** Dynamic modal-based customer capture (Plans: SHORT, PLUS, DROP-IN).
* **Lazy Loading:** Optimized assets, gallery videos, and Hero Section animations.
* **Hybrid Navigation:** A system combining Smooth Scroll anchors with dynamic routing.

## 📦 Folder Structure
```text
src/
 ├── components/    # Reusable components (NavBar, Modal)
 ├── pages/         # Main views (Home, RoutinesPage)
 ├── styles/        # Styled Components definitions
 └── assets/        # Media, images, and videos (Video1, Video2, Video3)
public/
 └── send_mail.php  # Server-side logic for email dispatch