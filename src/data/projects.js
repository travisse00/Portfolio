export const projects = [
  {
    slug: "e-voting",
    title: "E-Voting System",
    shortDescription:
      "A full-stack voting application designed around authenticated users, election flows, candidates, and controlled voting.",
    description:
      "A full-stack e-voting application focused on turning an election process into a structured digital workflow.",
    type: "Full-Stack Web Application",
    status: "Complete and Live",
    liveUrl: "https://e-voting-theta-seven.vercel.app",
    repoUrl: "https://github.com/travisse00/E-Voting.git",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
    features: [
      "Authenticated user flow",
      "Election and candidate management",
      "Structured voting workflow",
      "Results-oriented election experience",
      "Protected application routes"
    ],
    implementation: [
      "React handles the client-side application and route-level UI.",
      "The Express API provides the server-side application layer.",
      "MongoDB stores application and election data.",
      "JWT is used as part of the authentication flow.",
      "The project is deployed with a production frontend."
    ],
    problem:
      "Traditional voting workflows can involve several disconnected steps. The project explores how those steps can be represented inside one web application with authentication and structured data.",
    solution:
      "Build a role-aware web application where users move through a clear election workflow while the backend handles application data and protected operations."
  },
  {
    slug: "expense-tracker",
    title: "Expense Tracker",
    shortDescription:
      "A MERN CRUD application with authentication, expense categories, and protected user data.",
    description:
      "A full-stack personal finance tracker built to practice authentication, CRUD operations, API design, and database-backed React interfaces.",
    type: "MERN Application",
    status: "Completed and Live",
    liveUrl: "https://expense-tracker-dcgo.vercel.app",
    repoUrl: "",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "bcrypt"],
    features: [
      "User registration and authentication",
      "JWT-protected application flow",
      "Create, read, update, and delete expenses",
      "Expense categorisation",
      "User-specific expense data"
    ],
    implementation: [
      "React provides the client interface and application state.",
      "Express exposes REST-style endpoints for expense operations.",
      "MongoDB stores users and expense records.",
      "bcrypt is used for password hashing.",
      "JWT is used to maintain authenticated sessions."
    ],
    problem:
      "A useful expense tracker needs more than a form. It needs persistent data, authentication, categorisation, and reliable CRUD operations.",
    solution:
      "Build a MERN application where authenticated users can manage expenses through a complete create, read, update, and delete workflow."
  },
  {
  slug: "weather-app",
  title: "Weather App",
  shortDescription:
    "A React weather application that searches cities, retrieves location coordinates, and displays current conditions with a 5-day forecast.",
  description:
    "A responsive weather application built with React and TypeScript that combines geocoding with weather data to provide a simple city-based forecast experience.",
  type: "Frontend Web Application",
  status: "Completed and Live",
  liveUrl: "https://weather-app-seven-woad-83.vercel.app",
  repoUrl: "",
  technologies: [
    "React",
    "TypeScript",
    "Geocoding API",
    "Weather API",
    "LocalStorage"
  ],
  features: [
    "City-based weather search",
    "Location geocoding",
    "Current weather information",
    "5-day weather forecast",
    "Recent search history",
    "Persistent search history with LocalStorage",
    "Loading and error states"
  ],
  implementation: [
    "React and TypeScript handle the frontend application and component structure.",
    "The city entered by the user is first converted into geographic coordinates through a geocoding API.",
    "The latitude and longitude are then used to request weather data.",
    "Weather conditions are mapped to appropriate weather icons in the interface.",
    "LocalStorage keeps a limited history of recently searched cities.",
    "Loading and error states provide feedback while requests are being processed."
  ],
  problem:
    "Weather APIs generally require geographic coordinates, while users naturally search using city names. The application needed to connect those two steps while keeping the interface simple and useful.",
  solution:
    "Build a city-based weather interface that handles geocoding, weather retrieval, forecast presentation, search history, and request states in one React application."
}
];