# Bazaar App 🛒

A premium, accessible online grocery store frontend built with React and Vite.

## 🌟 Features

*   **Premium UI:** Vibrant, modern design with smooth animations.
*   **Accessibility First:**
    *   **Bilingual Support:** Full English and Urdu (RTL) support.
    *   **Text-to-Speech (TTS):** Reads page content aloud for visually impaired or illiterate users.
    *   **Voice Search:** Search for products using voice commands.
*   **E-commerce Functionality:**
    *   Browse categories (Fresh Produce, Bakery, Dairy, Pantry).
    *   Add to cart with toast confirmations.
    *   Manage cart quantities and view total.
    *   Checkout and Order Tracking simulation.
*   **User Profile:** View personal details and membership status.

## 🚀 Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

*   **Node.js:** Ensure you have Node.js installed (v14 or higher recommended).
*   **npm:** Usually comes with Node.js.

### Installation

1.  **Unzip the source code** (if you haven't already).
2.  Open a terminal/command prompt in the project folder (`bazaar-app`).
3.  Install dependencies:

    ```bash
    npm install
    ```

### Running the App

To start the development server:

```bash
npm run dev
```

*   The app will usually start at `http://localhost:5173`.
*   Open this URL in your browser to use the app.

### Building for Production

To create an optimized build for deployment:

```bash
npm run build
```

The output will be in the `dist` folder.

## 📂 Project Structure

*   `src/components`: Reusable UI components (Navbar, ProductCard, Toast, etc.).
*   `src/context`: Global state management (CartContext, LanguageContext).
*   `src/pages`: Individual page components (Home, ShopPage, CartPage, etc.).
*   `src/App.jsx`: Main application entry point and routing.

## 🛠️ Technologies

*   [Vite](https://vitejs.dev/)
*   [React](https://reactjs.org/)
*   [React Router](https://reactrouter.com/)
*   [Lucide React](https://lucide.dev/) (Icons)
