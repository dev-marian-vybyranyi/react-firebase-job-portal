# React + Firebase Job Portal

A comprehensive job portal application built with React and Firebase. This application allows users to post jobs, apply for positions, and manage their profiles. It features authentication, protected routes, and role-based access control (Admin vs. User).

## Features

- **User Authentication**: Secure login and registration using Firebase Auth.
- **Job Management**: Users can post jobs, edit them, and delete them.
- **Application Tracking**: Users can apply for jobs and track their application status.
- **Admin Dashboard**: Admins can manage users and jobs.
- **Responsive Design**: Built with Ant Design and custom CSS for a seamless experience on all devices.

## Environment Variables

To run this project locally, you will need to add the following environment variables to your `.env.local` file:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
VITE_ENCRYPTION_KEY=your_encryption_key
```

## Deployment

The application is deployed on Vercel and can be accessed here:
[https://react-firebase-job-portal.vercel.app/](https://react-firebase-job-portal.vercel.app/)

## Getting Started

1.  **Clone the repository**
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Run the development server**:
    ```bash
    npm run dev
    ```
