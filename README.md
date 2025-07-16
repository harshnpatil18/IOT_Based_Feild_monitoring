# Farmio - Smart Agriculture Dashboard

Farmio is a modern, production-ready smart agriculture dashboard built with React, TypeScript, Vite, and Tailwind CSS. It provides real-time soil monitoring, crop prediction, sustainable farming practices, and a contact/support section for farmers and agricultural professionals.

## Features

- **Real-Time Soil Monitoring:**  
  Visualize live updates of soil moisture, pH, temperature, and humidity with beautiful cards and interactive charts.

- **Crop Prediction:**  
  Input current soil conditions to get predictions for suitable crops (mock logic for demonstration).

- **Sustainable Practices:**  
  Discover recommended sustainable farming practices with images and descriptions.

- **Contact & Support:**  
  Reach out for help or support via a contact form and view emergency helpline information.

- **Responsive & Accessible:**  
  Fully responsive design with accessible UI components and modern visuals.

## Tech Stack

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/)
- [Chart.js](https://www.chartjs.org/) + [react-chartjs-2](https://react-chartjs-2.js.org/)

## Project Structure

```
project-root/
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   ├── data/
│   │   └── mockData.ts
│   ├── components/
│   │   ├── Dashboard/
│   │   │   ├── SoilCard.tsx
│   │   │   └── SoilChart.tsx
│   │   ├── CropPrediction/
│   │   │   └── PredictionForm.tsx
│   │   ├── Practices/
│   │   │   └── PracticeCard.tsx
│   │   └── Contact/
│   │       └── ContactForm.tsx
│   └── types/
│       └── index.ts
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── ...
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```sh
   git clone <your-repo-url>
   cd <project-directory>
   ```

2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   # or
   yarn dev
   ```

4. **Open in your browser:**  
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

### Building for Production

```sh
npm run build
# or
yarn build
```

### Preview Production Build

```sh
npm run preview
# or
yarn preview
```

## Linting

Run ESLint to check for code quality and style issues:

```sh
npm run lint
# or
yarn lint
```

## Customization

- **Icons:** Uses [Lucide React](https://lucide.dev/) for all icons.
- **Images:** Uses Unsplash stock images for practice cards.
- **Styling:** Tailwind CSS for rapid and consistent styling.

## File References

- Main app: [`src/App.tsx`](src/App.tsx)
- Soil data & practices: [`src/data/mockData.ts`](src/data/mockData.ts)
- Types: [`src/types/index.ts`](src/types/index.ts)
- Dashboard components: [`src/components/Dashboard/`](src/components/Dashboard/)
- Crop prediction: [`src/components/CropPrediction/PredictionForm.tsx`](src/components/CropPrediction/PredictionForm.tsx)
- Practices: [`src/components/Practices/PracticeCard.tsx`](src/components/Practices/PracticeCard.tsx)
- Contact: [`src/components/Contact/ContactForm.tsx`](src/components/Contact/ContactForm.tsx)

## License

This project is for or demonstration and educational purposes.

---

**Made with ❤️ for smart farming.**