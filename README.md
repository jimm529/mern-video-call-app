✨ Highlights

🧑‍💻 VS Code–like Code Editor for real interview coding

🔐 Authentication with Clerk (secure & scalable)

🎥 1-on-1 Video Interview Rooms (real-time communication)

🧭 Dashboard with Live Statistics

🔊 Mic & Camera Controls, Screen Sharing & Recording

💬 Real-time Chat Messaging

⚙️ Secure Code Execution in an isolated environment

🎯 Auto Feedback System (Pass / Fail based on test cases)

🎉 Confetti on Success & notifications on failure

🧩 Practice Problems Mode (solo coding)

🔒 Room Locking (strictly limited to 2 participants)

🧠 Background Jobs using Inngest (async processing)

🧰 RESTful APIs built with Node.js & Express

⚡ Efficient Data Fetching & Caching via TanStack Query

🤖 CodeRabbit Integration for PR analysis & optimization

🧑‍💻 Git & GitHub Workflow (branches, PRs, merges)

🚀 Deployment on Sevalla (free-tier friendly)

🧪 Environment Setup
Backend (/backend)

Create a .env file inside the backend folder:

PORT=3000
NODE_ENV=development

DB_URL=your_mongodb_connection_url

INNGEST_EVENT_KEY=your_inngest_event_key
INNGEST_SIGNING_KEY=your_inngest_signing_key

STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret

CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

CLIENT_URL=http://localhost:5173


⚠️ Do not push .env files to GitHub

Frontend (/frontend)

Create a .env file inside the frontend folder:

VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_API_URL=http://localhost:3000/api
VITE_STREAM_API_KEY=your_stream_api_key

▶️ Run the Application
🔧 Start Backend
cd backend
npm install
npm run dev

🔧 Start Frontend
cd frontend
npm install
npm run dev


Frontend will run at:

http://localhost:5173


Backend will run at:

http://localhost:3000
