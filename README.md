# The Dragon News

A modern and user-friendly daily news reading website that keeps you updated with the latest headlines and full articles, categorized for easy browsing.

## Live Link

[Visit The Dragon News](https://the-dragon-news-daily.web.app/)

---

## Key Features

- **News Categories**: Browse news by categories fetched from a dynamic API.
- **Private Route**: View full news articles after logging in.
- **Marquee Headlines**: Stay informed with a scrolling marquee of top headlines.
- **Advertisements**: Side ads to enhance the browsing experience.
- **Authentication**:
  - Google and GitHub OAuth login.
  - Email/password-based user registration and login.

---

## Technologies Used

- **Frontend**: React.js, Tailwind CSS, DaisyUI
- **Authentication**: Firebase Authentication
- **API Integration**: News API
- **State Management**: Context API

---

## How to Run Locally

Follow these steps to set up and run the project locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/xyryc/dragon-news.git
   cd dragon-news
   ```
2. **Install Dependencies:**
   ```bash
   npm install
   ```
3. **Add Firebase configuration:**

   - Create a `.env.local` file in the root directory and add your Firebase config keys:

   ```bash
    VITE_apiKey=your_api_key
    VITE_authDomain=your_auth_domain
    VITE_projectId=your_project_id
    VITE_storageBucket=your_project_bucket
    VITE_messagingSenderId=your_messaging_sender_id
    VITE_appId=your_app_id
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```
5. **Open the app in your browser:**
   ```bash
   http://localhost:5173/
   ```

---

## Contribution

Feel free to fork the repository, make improvements, and submit a pull request. For major changes, open an issue first to discuss the proposed changes.
