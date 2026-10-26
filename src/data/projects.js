export const projects = [
  {
  slug: "gigflow",
  title: "GigFlow",
  shortDescription:
    "A full-stack freelance marketplace where clients can post gigs and freelancers can manage orders through a role-based workflow.",
  description:
    "GigFlow is a full-stack MERN application designed to connect clients with freelancers. It includes authentication, role-based access, gig management, order workflows, email notifications, and real-time updates using Socket.IO.",
  type: "Full-Stack Web Application",
  status: "In Development",
  liveUrl: "https://gigflow-brown-alpha.vercel.app/",
  repoUrl: "https://github.com/travisse00/GigFlow.git",
  technologies: [
    "React",
    "JavaScript",
    "Node.js",
    "Express",
    "MongoDB",
    "Mongoose",
    "Socket.IO",
    "JWT",
    "Nodemailer"
  ],
  features: [
    "User registration and authentication",
    "JWT-based authentication",
    "Client and freelancer roles",
    "Gig creation and management",
    "Order creation and management",
    "Order acceptance and rejection",
    "Order completion workflow",
    "Protected routes",
    "Real-time order updates",
    "Real-time user communication with Socket.IO",
    "Email notifications",
    "Persistent authentication state"
  ],
  implementation: [
    "React handles the frontend interface and application state.",
    "Node.js and Express power the REST API and backend business logic.",
    "MongoDB and Mongoose handle users, gigs, and orders.",
    "JWT is used for authentication and protected API routes.",
    "Role-based access controls what clients and freelancers can do.",
    "Socket.IO provides real-time updates for order events.",
    "Nodemailer handles email notifications during the user workflow.",
    "The application uses dedicated user rooms to deliver real-time events to the correct users."
  ],
  problem:
    "Freelance platforms require more than simple CRUD operations. Users need different permissions, structured order workflows, authentication, notifications, and real-time updates between clients and freelancers.",
  solution:
    "Build a full-stack marketplace that separates client and freelancer workflows while combining REST APIs, JWT authentication, MongoDB, email notifications, and Socket.IO real-time communication into one application."
},
{
  slug: "formchat",
  title: "FormChat",
  shortDescription:
    "A full-stack form builder that lets users create, publish, and manage forms, collect responses, and embed forms into websites through a chatbot-style widget.",
  description:
    "A full-stack form-building platform built with Next.js, TypeScript, Tailwind CSS, and Supabase. FormChat provides form creation and management, customizable form settings, response collection, and an embeddable chatbot widget for integrating forms into external websites.",
  type: "Full-Stack Web Application",
  status: "Completed and Live",
  liveUrl: "https://form-builder-virid-pi.vercel.app",
  repoUrl: "https://github.com/travisse00/Form-Builder.git",
  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Supabase",
    "PostgreSQL",
    "Supabase Auth",
    "Lucide React",
    "Vercel"
  ],
  features: [
    "User authentication and account management",
    "Form creation and editing",
    "Customizable form settings and appearance",
    "Dynamic question management",
    "Form publishing and unique slugs",
    "Form submissions and response collection",
    "Embeddable chatbot widget",
    "Floating and inline form embedding",
    "Form response management",
    "Draft persistence with LocalStorage",
    "Webhook integrations"
  ],
  implementation: [
    "Next.js App Router and React handle the application interface, routing, and interactive form-building experience.",
    "TypeScript provides type safety across the application and helps maintain consistent data structures.",
    "Supabase Auth manages user authentication, while PostgreSQL stores user profiles, forms, questions, and submissions.",
    "Form ownership is associated with authenticated users to support user-specific form management.",
    "Dynamic question management allows users to configure form fields, question types, required fields, and other settings.",
    "Published forms use unique slugs to identify forms and make them accessible through public URLs.",
    "The embeddable widget retrieves published form data through an API endpoint and renders the form on external websites.",
    "Floating and inline embedding options allow forms to be integrated into different website layouts.",
    "LocalStorage preserves form drafts locally to help prevent loss of unsaved editing progress.",
    "Webhook integrations are designed to send form submission data to external endpoints for connecting FormChat with other applications."
  ],
  problem:
    "Creating forms, collecting responses, and integrating those forms into existing websites can require multiple separate tools. Developers and website owners need a flexible way to build forms, manage submissions, and embed interactive form experiences without rebuilding the entire interface.",
  solution:
    "Build a full-stack form platform that combines form creation, publishing, response management, and embeddable chatbot-style forms in one application, with webhook integrations extending the ability to deliver submission data to external services."
},
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
    repoUrl: "https://github.com/travisse00/Expense-Tracker.git",
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