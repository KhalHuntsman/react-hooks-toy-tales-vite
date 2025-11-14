# Toy Tales — Toy Inventory Application

Toy Tales is a lightweight, single-page React application built to manage an interactive toy catalog. It loads toy data from a JSON API, displays them in a card-based gallery, and allows users to add new toys, donate (delete) existing toys, and increase toy likes. The UI updates dynamically without page reloads, demonstrating core React concepts such as component-driven state, controlled forms, immutable updates, optimistic rendering, and clean parent–child data flow.________________________________________________________________________________________________________________________________________
## Purpose

The purpose of this project is to give a clear and approachable example of building a fully interactive CRUD interface using React Hooks. It is structured to reinforce best practices around:

- Fetching and synchronizing data with an API
- Top-down state management
- Passing event handlers through props
- Immutably updating arrays of objects
- Designing modular, test-friendly components

________________________________________________________________________________________________________________________________________
### Features

- Automatically loads all toys when the application starts
- Displays each toy with name, image, and like count
- Lets users add new toys through a controlled form
- Allows users to “donate” (delete) toys
- Supports liking toys with immediate updates
- Implements optimistic UI updates for a responsive feel
- Maintains toy ordering during updates
- Communicates with a JSON Server REST API
- Clean, minimal component structure using modern React conventions
________________________________________________________________________________________________________________________________________
#### Component Structure
src/
├─ App.jsx                 // Root component: global state for toys, form toggle
│
├─ components/
│  ├─ ToyContainer.jsx     // Renders all ToyCards, receives toy list as props
│  ├─ ToyCard.jsx          // Displays a single toy and handles likes + deletion
│  └─ ToyForm.jsx          // Controlled form for adding new toys (POST)
│
├─ main.jsx                // Entry point that renders <App>
└─ index.css               // Styling (toy cards, layout, buttons)


This structure keeps the project organized and easy to extend.
App.jsx serves as the “state hub,” while the components underneath focus on presentation or specific actions.
________________________________________________________________________________________________________________________________________
##### State Management

All major state lives in App.jsx, including:

- The array of toys fetched from the API
- Updated toy objects after:
- Likes (PATCH)
- Donations (DELETE)
- Form submissions (POST)
- The toggle that shows or hides the “Add Toy” form
- React’s useState manages local state values, while useEffect fetches the initial toy list when the component mounts.
- Child components receive their data and handler functions via props, ensuring predictable one-way data flow.

This alignment with React’s design philosophy also matches the application’s automated test expectations.
________________________________________________________________________________________________________________________________________
###### Styling and Interface

The UI is intentionally simple to highlight React behavior over design complexity:

- Each toy is displayed in a stylized card with:
- Name
- Image
- Like count
- “Like <3” button
- “Donate to GoodWill” button
- Liking a toy increments its like count instantly
- Donating a toy removes it from the gallery immediately
- The “Add a Toy” form is clean and uses controlled inputs
- Styles can be easily updated or extended without changing the core functionality.
________________________________________________________________________________________________________________________________________
####### Installation and Running the Application

1) Install dependencies:

- npm install

2) Start the development server:

- npm run dev

Open the application in a browser:

http://localhost:5173/
________________________________________________________________________________________________________________________________________
Technologies Used

React — Component-based UI development

Vite — Lightning-fast development server and build tooling

JavaScript — Application logic, API communication, and state handling

CSS — Visual styling and layout

JSON Server — Local REST API for toys (GET, POST, PATCH, DELETE)________________________________________________________________________________________________________________________________________
Summary
Toy Tales is a complete example of building a reactive, data-driven UI using modern React patterns. Through API interaction, optimistic updates, state management, controlled inputs, and dynamic rendering, this project demonstrates foundational techniques used throughout real-world front-end development.

Its clean, modular architecture makes it ideal for learning React Hooks, practicing CRUD operations, or extending into more advanced inventory systems.