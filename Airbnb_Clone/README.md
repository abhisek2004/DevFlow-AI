# Airbnb_Clone
🏠 Explore beautiful stays with real-time filtering, search, and dynamic listings.


Here's a **professional and detailed GitHub README** based on your Airbnb clone project idea using the MERN stack:

---

# 🌍 Airbnb\_Clone

A full-featured and responsive **Airbnb clone** built using the **MERN stack** – MongoDB, Express.js, React.js, and Node.js – that replicates the complete functionality and design of [Airbnb India](https://www.airbnb.co.in/). This project is developed for educational purposes and mimics the UI/UX of the original website, along with functional components for both guests and hosts.

---

## 🚀 Live Demo

🔗 Coming Soon / [Link to Deployment](#)

---

## 🔧 Tech Stack

* **Frontend:** React.js, Tailwind CSS
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (MongoDB Atlas)
* **Authentication:** JWT (JSON Web Tokens), bcrypt
* **Hosting:** Frontend on Vercel, Backend on Render/Heroku

---

## ✨ Features

### 🏠 Landing Page

* Beautiful hero section with a background image and call-to-action
* Navbar with Airbnb logo, a central search bar, and user profile menu

### 🔍 Search Functionality

* Location input
* Check-in/check-out date picker
* Guest number selector
* Price range filter, property type, amenities
* Real-time filtered results (from mock or real API)

### 🗂 Listings Page

* Dynamic cards for property listings with:

  * Title
  * Location
  * Ratings
  * Price per night
  * Responsive grid layout

### 📄 Property Detail Page

* Full-width image carousel
* Property title and description
* Amenities section
* Booking form with date and guest inputs
* Reserve button to initiate a mock or real booking

### 📅 Booking System (Frontend Logic)

* Interactive calendar for check-in/check-out
* Guest count selector
* Booking data is stored to MongoDB

### 🔐 User Authentication

* Secure Register/Login with JWT & bcrypt
* Protected routes for user dashboard
* User session stored in localStorage

### 🧑‍💼 Host Dashboard

* Form to create new listings (title, price, images, location, amenities)
* View/edit/delete listed properties
* Ability to manage bookings received

### 📱 Responsive Design

* Fully mobile-first layout using Tailwind CSS
* Adaptive across all screen sizes

---

## 📦 Optional Enhancements

* 🌐 Map integration with Leaflet.js or Mapbox for location preview
* 💳 Stripe payment integration (mock or real)
* ⭐ Review & Rating system for stays
* 🧾 Booking History and Management section

---

## 🗃️ MongoDB Schemas

### `User` Schema:

```js
{
  name,
  email,
  passwordHash,
  role: "guest" | "host"
}
```

### `Listing` Schema:

```js
{
  title,
  description,
  price,
  images,
  location,
  amenities,
  hostId
}
```

### `Booking` Schema:

```js
{
  userId,
  listingId,
  checkInDate,
  checkOutDate,
  numberOfGuests,
  totalPrice
}
```

---

## ⚙️ Installation & Setup

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/airbnb_clone.git
cd airbnb_clone

# 2. Install frontend dependencies
cd client
npm install

# 3. Install backend dependencies
cd ../server
npm install

# 4. Create .env file and add the following:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

# 5. Start the development servers
npm run dev    # Backend
npm start      # Frontend (inside client folder)
```

---

## 📤 Deployment

* **Frontend:** Deployed on [Vercel](https://vercel.com/)
* **Backend:** Deployed on [Render](https://render.com/) or [Heroku](https://heroku.com/)
* **Database:** Hosted on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

---

## 📸 Screenshots

> Add screenshots of:

* Landing Page
* Listings Grid
* Booking Page
* Host Dashboard
* Mobile Responsiveness

---

## 🧠 What I Learned

* Deep integration of full-stack technologies in a real-world inspired application
* Complex state management with React
* Backend API creation and data modeling with MongoDB + Mongoose
* Authentication workflows using JWT and route protection
* Styling large-scale layouts with Tailwind CSS
* Handling forms, image uploads, and date manipulation
* Real-world deployment techniques

---

## 📄 License

This project is intended for **educational purposes only**. Airbnb is a registered trademark of Airbnb, Inc.

---

Let me know if you'd like to auto-generate the [initial folder structure with working code](f) or want a [README.md with badges and deploy buttons](f)!
