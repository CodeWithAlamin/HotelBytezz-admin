<div align="center">

  <img src="./public/logo-full.png" alt="logo" width="90" height="auto">

  <h1>HotelBytezz - Admin</h1>

  <h3>
    <a href="https://hotelbytezz-admin-alamin.vercel.app/">
      <strong>Live Site</strong>
    </a>
  </h3>

  <div align="center">
    <a href="https://hotelbytezz-admin-alamin.vercel.app/">View website</a>
    -
    <a href="https://github.com/CodeWithAlamin/HotelBytezz-admin/issues">Report Bug</a>
    -
    <a href="https://github.com/CodeWithAlamin/HotelBytezz-admin/pulls">Request Feature</a>
  </div>

  <hr>

</div>

<!-- Badges -->
<div align="center">

![Status](https://img.shields.io/badge/Status-Completed-success?style=flat)

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/CodeWithAlamin)
[![Twitter Follow](https://img.shields.io/twitter/follow/CodeWithAlamin?style=for-the-badge&logo=x)](https://x.com/CodeWithAlamin)

</div>

<!-- Brief -->
<p align="center">
Welcome to <b>HotelBytezz</b>! This is a hotel management web app, where hotel employees can manage rooms, bookings, and guests. It uses Supabase as the backend and implements advanced React techniques such as HOCs and React Query.
</p>

<!-- Screenshot -->
<a align="center" href="https://hotelbytezz-admin-alamin.vercel.app/">

![Screenshot](./public/thumbnail-preview.jpg)

</a>

## Live Site

Check out the live admin app here: [HotelBytezz - Admin](https://hotelbytezz-admin-alamin.vercel.app/)

## Customer Version

I also built a **customer version** of this app, where guests can view and book rooms, manage their bookings, and update their profiles. The repository is [here](https://github.com/CodeWithAlamin/HotelBytezz-Booking), and the live site is [here](https://hotelbytezz-booking-alamin.vercel.app).

## Key Features

- User authentication ensures that only hotel employees can access the system.
- Employees can manage their profiles, including uploading avatars and changing passwords.
- The app features a dashboard showing recent stats on bookings, check-ins, and sales.
- Manage rooms with the ability to create, update, or delete room records.
- Handle bookings with the ability to check guests in and out, and update booking statuses.
- Real-time updates for rooms and bookings using Supabase.
- Visual statistics with charts displaying sales, occupancy rates, and other important data.
- Fully functional dark mode for a customized user experience.

## Technologies Used

- **React** for the frontend.
- **Supabase** for the database and real-time data updates.
- **React Query** for data fetching and caching.
- **React Router** for navigation.
- **React Hook Form** for efficient form handling.
- **Recharts** for data visualization (charts and stats).
- **Styled Components** for styling the UI, including dark mode.
- **Vite** for development environment and build system.

## What I Learned

This project was a deep dive into several advanced React concepts, including:

- **Authentication and Authorization:** Implementing Supabase to securely manage user roles (hotel employees).
- **Real-time Functionality:** Leveraging Supabase's real-time features for dynamic data updates.
- **State Management and Data Fetching:** Using React Query to efficiently manage the app's data flow.
- **Complex UI Patterns:** Implementing reusable patterns like the Compound Component Pattern and Higher-Order Components (HOC) to create more maintainable and scalable code.
- **Responsive and Adaptive Design:** Building a responsive user interface using Styled Components, making sure it works well on different devices and screen sizes.
- **Dark Mode:** Adding dark mode functionality for a personalized user experience.
- **Data Visualization:** Using Recharts to create meaningful visual representations of hotel statistics.

## Setup Instructions

To run this project locally:

1. Clone the repo:
   ```bash
   git clone https://github.com/CodeWithAlamin/HotelBytezz-admin.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   - Configure Supabase and add the necessary environment variables in a `.env` file. Check out the `.env.example` for reference.
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) to see the app.

## Author

<b>Alamin</b>

- LinkedIn - [@CodeWithAlamin](https://www.linkedin.com/in/CodeWithAlamin)
- Twitter - [@CodeWithAlamin](https://www.twitter.com/CodeWithAlamin)
- GitHub - [@CodeWithAlamin](https://github.com/CodeWithAlamin)

Feel free to contact me with any questions or feedback!
