# 🌿 Environment Setup

This document explains the environment variables used in DevFlow-AI (including the Airbnb Clone module).

---

## 💻 Frontend (`Airbnb_Clone/.env`) Example

Create a `.env` file inside the `Airbnb_Clone` directory to manage frontend environments:

```env
# API URL for connecting to the backend server (Future)
VITE_API_URL=http://localhost:5000

# Mapbox / Google Maps Public Token for Location Map renders
VITE_MAPBOX_ACCESS_TOKEN=your_mapbox_token_here
```

---

## 🔐 Backend `.env` Example (Planned)

Create a `.env` file in the backend server directory (to be created) for secret variables:

```env
PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/devflow-ai
JWT_SECRET=your_jwt_secret_key_here

# AI Service Keys
OPENAI_API_KEY=your_openai_api_key_here
GEMINI_API_KEY=your_gemini_api_key_here

# Payment Integration Keys
STRIPE_SECRET_KEY=your_stripe_secret_key_here
RAZORPAY_KEY_SECRET=your_razorpay_secret_key_here
```
