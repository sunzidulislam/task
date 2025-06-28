
# 🧭 Run the Fullstack App Locally (Vue.js + Laravel)

Follow these steps to set up and run both the **frontend** and **backend** locally.

---

## ▶️ Step 1: Start the Frontend (Vue.js)

1. Open your terminal and navigate to the frontend folder:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Your Vue app should now be running at:

   ```
   http://localhost:5173
   ```

---

## 🛠️ Step 2: Start the Backend (Laravel)

1. In a **new terminal window**, navigate to the backend folder:

   ```bash
   cd backend
   ```

2. Install PHP dependencies:

   ```bash
   composer install
   ```

3. Create your environment file:

   ```bash
   cp .env.example .env
   ```

4. Generate the application key:

   ```bash
   php artisan key:generate
   ```

5. Configure your database settings in `.env`, then (if needed) run:

   ```bash
   php artisan migrate
   ```

6. Start the Laravel development server:

   ```bash
   php artisan serve
   ```

7. Your Laravel API should now be accessible at:

   ```
   http://127.0.0.1:8000
   ```

---

## 🌐 Connecting Frontend to Backend

Make sure your Vue frontend can communicate with the Laravel backend:

* Use `http://127.0.0.1:8000` for API requests.
* Optionally, configure a proxy in `vite.config.js` to simplify API calls.
* Ensure CORS is enabled in Laravel (use built-in support or the `barryvdh/laravel-cors` package).

---

## 💡 Tips

* Run **both servers in separate terminals**.
* Add `.env` and `vendor/` to your `.gitignore` to avoid committing sensitive or bulky files.

---

## 📦 Useful Commands

* Run Laravel database migrations:

  ```bash
  php artisan migrate
  ```

* Build the Vue app for production:

  ```bash
  npm run build
  ```

---

## ✅ You're All Set!
