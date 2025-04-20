# 🛍️ Angular 19 HTTP-WebAPI-Demo Project

This Angular 19 project demonstrates data fetching from an Web API, theming with dark mode, icon integration, and component/service architecture.

---

## ✨ Features

- ✅ Fetch product data using Angular's `HttpClient` from [FakeStoreAPI](https://fakestoreapi.com/)
- 🌙 Toggleable **Dark Mode** using **Bootstrap Icons** (sun/moon)
- 💡 Angular **Signals** for responsive theme switching
- 🎨 Responsive layout using **Bootstrap**
- 🔎 Live product search across all string attributes

---

## 📦 Bootstrap Styling

1. \*\*In order to use Bootstrap and Bootstrap icons run the following commands:

   ```bash
   npm install bootstrap
   npm install bootstrap-icons
   ```

2. **Configure Bootstrap and Icons**  
   In your `angular.json`, include the styles and scripts:

   ```json
   "styles": [
     "node_modules/bootstrap/dist/css/bootstrap.min.css",
     "node_modules/bootstrap-icons/font/bootstrap-icons.css",
     "src/styles.css"
   ],
   "scripts": [
     "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
   ]
   ```

---

## 🧱 Project Structure

### 📁 Components

#### 1. `AppComponent`

- Root component
- Hosts: `NavBarComponent`, `MainContentComponent`, `FooterComponent`

#### 2. `NavBarComponent`

- Contains a search bar and toggleable **sun/moon** icons using **Bootstrap Icons**
- Clicking the icon toggles between light and dark mode

#### 3. `MainContentComponent`

- Displays product cards fetched from the API
- Dynamically filters products as user types in the search bar

#### 4. `FooterComponent`

- Simple footer for the webpage

---

### ⚙️ Services

#### 1. `ProductService`

- Uses `HttpClient` to fetch products from [https://fakestoreapi.com/](https://fakestoreapi.com/)
- Provides `filterProductsByKeyword()` method that searches all string attributes of products to match a keyword

#### 2. `DarkModeService`

- Manages the app's dark mode theme using an Angular **Signal** `darkModeSignal`
- Toggled by clicking the icon in the navbar
- The signal updates the `data-bs-theme` attribute in `app.component.html` to switch themes

---

## 🎨 Dark Mode Icons

- Uses Bootstrap Icons from [getbootstrap.com/icons](https://icons.getbootstrap.com/)
- Icons used:
  - `bi-moon-fill` 🌙
  - `bi-sun-fill` ☀️

---

## 🧠 Concepts Demonstrated

- Angular 19 components, services, and signals
- HTTP GET requests using `HttpClient`
- Bootstrap 5 styling and layout
- Theme toggling with `data-bs-theme`
- Dynamic, client-side product filtering

---

Enjoy building! 🚀
