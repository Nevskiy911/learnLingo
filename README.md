# Learn Lingo 🌐

A web application for discovering and booking online language lessons with professional tutors. Users can browse tutor profiles, filter by language, student level, and price per hour, and book trial lessons.

---

## 🎯 Features

- Browse a list of tutors with detailed profile cards.
- **Filtering** by:
  - Language taught
  - Student proficiency level
  - Hourly rate
- "Read more" button to expand additional tutor info.
- Book trial lessons via a modal popup.
- Select and save a **theme** for the website.
- Save likes and selected theme per user.
- Dynamic loading of tutor profiles (`Load More` button).
- User authentication with Firebase.

---

## 🛠 Technologies

- **React** – Frontend library
- **Firebase Realtime Database** – Backend for tutor data
- **Firebase Authentication** – User login and persistence
- **CSS Modules** – Scoped component styles
- **React Router DOM** – SPA routing
- **SVG Icons** – Custom icons for ratings and buttons

---

## 🎨 Layout

The project is designed according to the following layout:

1. **Home Page**

   - Hero section with a call-to-action button
   - Introduction and description of the service

2. **Tutors Page**

   - Filters at the top (language, level, price)
   - List of tutor cards with:
     - Profile picture
     - Name and languages
     - Levels as buttons
     - Lesson info and conditions
     - Read more section with experience and reviews
     - Book trial lesson button

3. **Modal Window**
   - For booking trial lessons with a tutor

---

## 📋 Technical Requirements

1. Build a **Single Page Application (SPA)** using React.
2. Integrate Firebase for tutor data storage and user authentication.
3. Implement **custom select dropdowns** for filters.
4. Add dynamic tutor loading (`Load More` functionality).
5. Persist user preferences: theme and liked tutors.
6. Create a modal for booking trial lessons.
7. Ensure responsive and mobile-friendly design.

---

## 🚀 Getting Started

1. **Clone the repository:**

```bash
git clone <YOUR_REPOSITORY_URL>
```

2. **Install dependencies:**

```bash
npm install
```

3. **Run locally:**

```bash
npm start
```

4. **Open in browser:**

```
http://localhost:3000
```
