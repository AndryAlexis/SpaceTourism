 # Space Tourism Website

A modern, responsive website for space tourism featuring an interactive user interface and seamless navigation.

## 🚀 Technologies Used

### Core Technologies
- **Next.js 14** - React framework with server-side rendering and file-based routing
- **TypeScript** - Static typing for enhanced development experience and code reliability
- **React** - JavaScript library for building user interfaces

### Styling
- **Tailwind CSS** (inferred from the styling patterns) - Utility-first CSS framework for responsive design
- **Custom Style Modules** - Modular CSS approach using `getHomeStyles()` for maintainable styling

### Components & Architecture
- **Client-side Navigation** - Using Next.js's `usePathname` hook for client-side routing
- **Component-Based Structure** - Modular components like `Header` and `ExploreButton`
- **TypeScript JSX** - Strongly typed component definitions with TSX

### Project Structure

src/
├── app/
│ ├── page.tsx # Main homepage component
│ └── home/
│ ├── components/ # Home-specific components
│ └── styles/ # Home-specific styles
├── components/
│ └── header.tsx # Global header component

## 🛠️ Setup and Installation

1. Clone the repository
2. Install dependencies:

bash
npm install
or
yarn install

3. Run the development server:

bash
npm run dev
or
yarn dev

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🔑 Key Features

- Responsive design for all device sizes
- Type-safe development with TypeScript
- Component-based architecture for maintainability
- Client-side navigation for smooth user experience
- Modular styling system

## 📝 Notes

- The project uses the 'use client' directive indicating client-side rendering
- Custom styling utilities are implemented through the `getHomeStyles()` function
- Component props are strictly typed using TypeScript interfaces

## 🤝 Contributing

Feel free to submit issues and enhancement requests.