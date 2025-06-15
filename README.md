# karthik-portfolio


Here’s a complete and professional **GitHub `README.md` file** for your React portfolio project. You can copy this directly into your project’s root directory:

---

```markdown
# 🚀 Karthik's Developer Portfolio

Welcome to my personal portfolio website built using **React JS** and **CSS**!  
This portfolio showcases my education, skills, projects, experience, and contact form — with responsive design and smooth animations.

## 📸 Preview


Live Demo 👉 https://gundelli-karthik-portfolio-sepia.vercel.app/

---

## 🛠 Tech Stack

- **Frontend:** React JS, CSS3, HTML5, JavaScript (ES6+)
- **Animations:** AOS (Animate on Scroll)
- **Icons:** React Icons
- **Email Service:** EmailJS (for contact form integration)
- **Deployment:** Vercel

---

## 📂 Folder Structure

```

src/
├── components/
│   ├── navbar/
│   ├── summary/
│   ├── education/
│   ├── experience/
│   ├── skills/
│   ├── projects/
│   ├── contact/
│   └── footer/
├── App.jsx
├── index.js

````

---

## ✨ Features

- ✅ Responsive navbar with routing using `react-router-dom`
- ✅ Summary section with developer intro and "Contact Me" CTA
- ✅ Education timeline with logos and animations
- ✅ Project cards with descriptions and deployment links
- ✅ Skills grid with toggle descriptions on click
- ✅ Internship experience timeline
- ✅ Contact form using EmailJS (sends email to admin)
- ✅ Social footer with redirect links to WhatsApp, LinkedIn, and Email
- ✅ Smooth scroll animations using AOS

---

## 🚀 How to Run Locally

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/your-portfolio.git
   cd your-portfolio
````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

---

## 🔐 Setup EmailJS for Contact Form

1. Create an account on [https://www.emailjs.com/](https://www.emailjs.com/)
2. Create a new service and email template
3. Get your **Service ID**, **Template ID**, and **Public Key**
4. Replace them in `Contact.jsx`:

   ```js
   emailjs.sendForm(
     'your_service_id',
     'your_template_id',
     form.current,
     'your_public_key'
   )
   ```

---

## 📱 Responsive Design

* ✅ Mobile-first layout
* ✅ Fully responsive on desktop, tablet, and phone
* ✅ Toggle menu appears on smaller screens

---

## 🙋‍♂️ Author

**Gundelli Karthik**
Frontend Developer & Software Aspirant
📫 [karhikgundelly4@gmail.com](mailto:karthikgundelly4@gmail.com)

---

## 📌 License

This project is licensed under the **MIT License**. Feel free to use, customize, and share it!

---

⭐️ If you like this project, give it a star on GitHub!

```

---

