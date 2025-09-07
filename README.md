# Hackathon Timer

A beautiful countdown timer built with React, Vite, and Tailwind CSS for hackathon events.

## Features

- Real-time countdown display showing days, hours, minutes, and seconds
- Responsive design that works on desktop and mobile
- Beautiful gradient background with glassmorphism effects
- Automatic expiration handling when the timer reaches zero

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone or download this project
2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Configuration

To set your hackathon end date, edit the `targetDate` variable in `src/components/CountdownTimer.jsx`:

```javascript
const targetDate = new Date('2025-09-10T23:59:59').getTime()
```

Replace the date with your actual hackathon end time.

## Project Structure

```
hackathon-timer/
├── package.json            # Dependencies (React, Vite, Tailwind)
├── vite.config.js
├── index.html              # Root HTML
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
│
├── src/
│   ├── main.jsx            # Entry point
│   ├── App.jsx             # App with only timer
│   │
│   ├── components/
│   │   └── CountdownTimer.jsx   # The only timer component
│   │
│   └── styles/
│       └── globals.css     # Tailwind/custom styles
│
└── README.md
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Technologies Used

- **React** - JavaScript library for building user interfaces
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting and formatting

## License

This project is open source and available under the MIT License.
