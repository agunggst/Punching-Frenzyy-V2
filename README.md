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
Video Demo: [YouTube](https://www.youtube.com/watch?v=Hbdu22tZFOo)
![image](https://ucabadb99329289044259b984952.previews.dropboxusercontent.com/p/thumb/ACoLpqUszVBSHeoRGd88cB-DiEzmH3z-jqPztqLmqpJX15wgdOLqnbPOpLAumfmtUi5jsVggNT5mnAqhypuMRysh0x6eYtv7vfCn01T_jK4d343iLu6djyI48sBNukS_9iHGiwEJoXeQtxOytPNdJ8Ekfmb_NfYYb7bvhd_oP3Oe9ZUmQ7Bidf0aghWq_EK1D-UQf3CQ2qhmiKq7FvO9OjeH_MIDPiz1tKrnk3qWqVRljWcU9PZvVF3tOBp7p07d4Bcvp0MIXwEB_GGcZKESvMWNk1a4e6uYNVcMUNeFKfX7X8xk6ERQsitNcpkakwg-Q6gud4wlbNB6a-TYlVa7vzKMkhW4x5c2-RTPvWPvt-5u0HBV_IqBp3bKmIict0YAXoy53rKJYKRWwqY9NrnX-RRU/p.png?is_prewarmed=true)
![image](https://uc26bccea6f28f8046d2d90156c3.previews.dropboxusercontent.com/p/thumb/ACo1TNR_DWrTgLhXQ2IiIJTk9e4z3DXE1Knu_mXwqkPb9Z9TZl0i6HWk8_u5UYQH5AeABHO5FRoKm1c_fR_jSQimxLGPg7T3K_4ARUEtZ_5-zllaZQK8YbYuVh6jAIcotEmuqjYN1mUi_6r3xYywQuuHjiRMBPAaYanRElbwQCHUsWL8ol4XEjSydRa8Uk8MLqlWGkdfZRzDkBXUvxXvZqEg5TJr-cTfhTc0iuDEIlUMC__rECKzw4bKJLMGFZfmdy_z-RiXx_UBWphl3YRZVrtWX0Ex8PkB4lqt-M_roFd8v8Qf71MUNJ1RnjPNDsujkzt3I3hEWQ1fr5IG3-guYC5u2BD_NscKlLS2_jx1IMNYMF1BBZNGskpzaPmCiJ1u_X0jYHCq9LNCaqHb0HFZcO6TRW_8c6RGd92Arfw7a-sEioPVoTe4OGy8PhuyNZqg91GNebkiBUCVuQKToUKwgnLe/p.png?is_prewarmed=true)
![image](https://uc26bccea6f28f8046d2d90156c3.previews.dropboxusercontent.com/p/thumb/ACo1TNR_DWrTgLhXQ2IiIJTk9e4z3DXE1Knu_mXwqkPb9Z9TZl0i6HWk8_u5UYQH5AeABHO5FRoKm1c_fR_jSQimxLGPg7T3K_4ARUEtZ_5-zllaZQK8YbYuVh6jAIcotEmuqjYN1mUi_6r3xYywQuuHjiRMBPAaYanRElbwQCHUsWL8ol4XEjSydRa8Uk8MLqlWGkdfZRzDkBXUvxXvZqEg5TJr-cTfhTc0iuDEIlUMC__rECKzw4bKJLMGFZfmdy_z-RiXx_UBWphl3YRZVrtWX0Ex8PkB4lqt-M_roFd8v8Qf71MUNJ1RnjPNDsujkzt3I3hEWQ1fr5IG3-guYC5u2BD_NscKlLS2_jx1IMNYMF1BBZNGskpzaPmCiJ1u_X0jYHCq9LNCaqHb0HFZcO6TRW_8c6RGd92Arfw7a-sEioPVoTe4OGy8PhuyNZqg91GNebkiBUCVuQKToUKwgnLe/p.png?is_prewarmed=true)

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
