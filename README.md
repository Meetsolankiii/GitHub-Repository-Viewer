# 🏆 GitHub Repository Viewer & Ranker

A dynamic, responsive React web application that searches GitHub repositories by topic or keyword and evaluates them using a **Custom Performance & Quality Scoring Algorithm**. Instead of relying purely on raw star counts, this application analyzes repository health metrics to surface the absolute best matches first.

🌐 **Live Demo:** : https://git-hub-repository-viewer-blue.vercel.app/

---

## ✨ Features

- **Smart Keyword Search:** Queries the public GitHub REST API v3 in real-time based on technology stacks, topics, or keywords.
- **Custom Rating Engine:** Evaluates and highlights repositories dynamically using a weighted quality formula.
- **"Best Match" Premium Badge:** Automatically detects the #1 top-scoring repository in the search matrix and applies a premium layout styling.
- **Robust Error Handling:** Safely intercepts API rate limits (403 errors), invalid search structures, and empty results states gracefully.
- **Fully Responsive Matrix:** A modern CSS grid optimized for mobile, tablet, and desktop viewports utilizing GitHub's dark mode aesthetic color scheme.

---

## 🧮 The Ranking Algorithm

To accurately filter out stagnant repos with high historical stars but little current maintenance, the app passes every result through an internal dynamic weight equation:

$$\text{Quality Score} = (\text{Stars} \times 0.5) + (\text{Forks} \times 0.4) - (\text{Open Issues} \times 0.1) + \text{Recency Bonus}$$

### Equation Breakdown:
* **Stars (50% Weight):** Establishes baseline community popularity.
* **Forks (40% Weight):** Reflects hands-on project utility and developer implementation.
* **Open Issues (-10% Penalty):** A high volume of open issues indicates potential bugs or project abandonment.
* **Recency Bonus (+50 pts):** Granted automatically if the repository has been updated or committed to within the last 30 days.

---

## 📂 Project Architecture

The application scales cleanly using a modular folder structure to separate API service handlers, math calculation utilities, and presentational UI components:

```text
github-repo-viewer/
├── public/
└── src/
    ├── assets/
    │   └── App.css           # Custom dark mode UI layouts and grid matrices
    ├── components/
    │   ├── Loader.jsx        # Animated ranking engine loading spinner
    │   ├── RepoCard.jsx      # Individual repository metric cards
    │   ├── RepoList.jsx      # Map iterator for ranked data array 
    │   └── SearchBar.jsx     # User input handler and validator
    ├── services/
    │   └── githubApi.js      # Encoded API endpoint service wrapper
    ├── utils/
    │   └── ranker.js         # Weighted sorting logic script
    ├── App.js                # Core state coordinator component
    └── index.js              # Application entry point

🚀 Getting Started

Follow these steps to run the project locally on your machine:
1. Clone the Repository
Bash

git clone [https://github.com/Meetsolankiii/GitHub-Repository-Viewer.git](https://github.com/Meetsolankiii/GitHub-Repository-Viewer.git)
cd GitHub-Repository-Viewer

2. Install Project Dependencies
Bash

npm install

3. Start the Local Development Server
Bash

npm start

Open http://localhost:3000 inside your web browser to check out the app!
🛠️ Built With

    React.js - Component UI State Management

    GitHub REST API v3 - Global Developer Project Data Source

    CSS3 Variables & Flexbox/Grid - Responsive layouts without external styling libraries

    Vercel - Automated Cloud Production CI/CD Deployment pipeline
