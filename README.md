# Modded Minecraft Expedition React

This project is a Vite and React version of my Modded Minecraft Expedition Log.

Requirements:
- Node.js
- npm

Clone the repository:
git clone https://github.com/chamon01/modded-minecraft-expedition-react.git

Move into the project:
cd modded-minecraft-expedition-react

Install dependencies:
npm install

Start the development server:
npm run dev

Build the project:
npm run build

Preview the production build:
npm run preview

## Homework 11 Route Plan

| URL | View |
| --- | --- |
| `/` | Home / landing page |
| `/expeditions` | Expedition list and filters |
| `/expeditions/:id` | Details for one expedition |

The application uses client-side routing so users can move between views without a full page reload.

## Homework 12 - Full-Stack Authentication

### Backend

Backend repository:
https://github.com/chamon01/application-development-1

The backend is the Week 12 Express application.

### Authentication Endpoints

| Method | Backend endpoint | Result |
| --- | --- | --- |
| POST | /login | 200 for valid credentials, 401 for invalid credentials |
| GET | /profile | 200 when logged in, 401 otherwise |
| GET | /admin | 200 for administrators, 403 for regular users |
| POST | /logout | Ends an authenticated session |

The frontend sends requests through Vite's /api proxy.

### Authentication Flow

The login form sends an email and password to the backend.
The backend validates the credentials and establishes an Express session.
The browser receives a session cookie and sends it with later requests.
The frontend checks /api/profile to restore login status after refreshing.

The dashboard route requires an authenticated user.
The dashboard also sends a protected request to /api/profile.
Admin access is checked through /api/admin.

A 401 response means the user needs to authenticate.
A 403 response means the user is authenticated but lacks permission.

### Security Notes

Passwords are not stored in the frontend.
The frontend does not contain session signing secrets or database credentials.
Never commit real passwords, session secrets, tokens, or database credentials
to a public frontend repository.

Authentication is enforced by the backend, not just by hiding frontend routes.
Express stores the session data on the server, while the cookie identifies
the session.

The existing Week 12 backend uses demonstration accounts and an in-memory
session store. It is intended for a local classroom demonstration, not
production deployment. Real applications need secure password storage,
environment-managed secrets, HTTPS, and a production session store.

### Manual Testing

Backend authentication was verified before frontend changes:

- Logged-out profile request: 401
- Valid login: 200
- Logged-in profile request: 200
- Regular user requesting admin: 403
- Invalid password: 401

Use the browser developer tools Network tab to inspect the login,
profile, admin, and logout requests.
