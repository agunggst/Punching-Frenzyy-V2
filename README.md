# Punching Frenzyy 🍉💥

A web-based Augmented Reality game inspired by Fruit Ninja — but with a twist! Use your own **hand movements** (no controller needed) to smash fruits on the screen while avoiding bombs. It's fun, interactive, and gets your body moving!

---
## 🔗 **Live Demo**

🌐 You can access the game directly here:
**[https://punching-frenzyy.web.app/](https://punching-frenzyy.web.app/)**

---

## 🎯 Project Background

In a time when many people sit at desks all day, **Punching Frenzyy** was built to encourage users to move and get active — all while having fun. This game turns your **body into the controller** using real-time pose detection, making it a playful way to do some light **exercise at home or at work**.

Designed for accessibility, this game only requires a webcam and a browser — no VR headset or extra device needed.

---

## ✨ Features

- 🎮 Play using **your hands** through the webcam
- 🍌 Random fruits appear for you to smash
- 💣 Avoid bombs — hitting them reduces your score!
- ⏱ Real-time body movement detection using PoseNet
- 🖼️ Smooth visual interaction via p5.js
- ⚛️ Dynamic UI and state handled with React.js and Redux

---

## ⚙️ Technologies Used

| Category       | Technology                          |
|----------------|-------------------------------------|
| Pose Detection | TensorFlow.js + PoseNet             |
| Graphics       | p5.js                               |
| Frontend       | React.js                            |
| State Mgmt     | Redux                               |
| Webcam Access  | HTML5 WebCam API                    |

---

## 🚀 Getting Started

### 🧰 Prerequisites

Make sure you have installed:
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- Git

### 📥 Clone the Repository

```bash
git clone <this repository>
```

### 📦 Install Dependencies

```bash
npm install
```
### ▶️ Run the App Locally

```bash
npm start
```

Then open your browser and go to:
`http://localhost:3000`

---

## 📸 Demo
![image](https://ucabadb99329289044259b984952.previews.dropboxusercontent.com/p/thumb/ACoLpqUszVBSHeoRGd88cB-DiEzmH3z-jqPztqLmqpJX15wgdOLqnbPOpLAumfmtUi5jsVggNT5mnAqhypuMRysh0x6eYtv7vfCn01T_jK4d343iLu6djyI48sBNukS_9iHGiwEJoXeQtxOytPNdJ8Ekfmb_NfYYb7bvhd_oP3Oe9ZUmQ7Bidf0aghWq_EK1D-UQf3CQ2qhmiKq7FvO9OjeH_MIDPiz1tKrnk3qWqVRljWcU9PZvVF3tOBp7p07d4Bcvp0MIXwEB_GGcZKESvMWNk1a4e6uYNVcMUNeFKfX7X8xk6ERQsitNcpkakwg-Q6gud4wlbNB6a-TYlVa7vzKMkhW4x5c2-RTPvWPvt-5u0HBV_IqBp3bKmIict0YAXoy53rKJYKRWwqY9NrnX-RRU/p.png?is_prewarmed=true)
![image](https://previews.dropbox.com/p/thumb/ACrRA34GtGMr9gNS3xx0ZyBpTDWUxsp_ff5Gdd7FnSm3HRXkifOdfmGfu5lufzKnSx5750pMGYuoMvm8zF_6bL562EiRqW7DQieb4s6cln8LTsAEP6W0WTtctBnckmb31T7kioG66FId_dyhTokcDCLFkPwwhwG8ocVjVzafWbKCaTDjGWPlPles2b6rs5EbeIOMuA9EEHlgfxGvGTO40NXBTb6IkDvLaKo2ywXUHCEmBAO5Km4PXhbjDpElsmVSUFqGQp04jKQzbHaPb1IvL7tB0t9PU4st7zwUkUwLjtstWp0redYa0g5ws_j9grsEheGQADVeYM3F1RRFFnKHJ6gh5qnz9gihGwPiFGoiDnrQtdNKsSGnr5XKvApZVK9bcgUuoTdd_TVeIUL14M7Nuvpr/p.png?is_prewarmed=true)

---

## ⚠️ Technical Notes

* This project uses **PoseNet via TensorFlow\.js**, which is CPU-intensive and depends on webcam quality and browser performance.
* Currently optimized for **desktop browsers only** (Chrome/Edge). Mobile support is not yet available.

---

## 🧠 Learning Insights

Combining real-time pose detection with browser-based game mechanics opens up great possibilities for **gamified workouts**, **interactive education**, and **digital rehabilitation**. The biggest challenge was syncing PoseNet's data with game events while maintaining smooth performance.

---

## 👤 Author

**I Gusti Agung Agastya Tarumawijaya**
[LinkedIn](https://www.linkedin.com/in/agunggst/) • [GitHub](https://github.com/agunggst)

---
