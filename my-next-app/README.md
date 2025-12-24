#  Hotel Management System

A modern, full-stack hotel management application built with **Next.js**, **TypeScript**, and **Prisma**. This system allows hotel owners to manage their properties and guests to book stays seamlessly.

---

##  Features

### For Hotel Owners
- **Hotel Management**: Add, edit, and manage hotel properties
- **Room Management**: Create and manage rooms with pricing and amenities
- **Booking Management**: View and manage all guest bookings
- **Image Upload**: Upload hotel and room images using UploadThing
- **Dashboard**: Overview of hotels and bookings

### For Guests
- **Hotel Search**: Search and filter hotels by location
- **Room Browsing**: View available rooms with detailed information
- **Booking System**: Easy-to-use date range picker for booking stays
- **Payment Processing**: Secure payment integration
- **Booking History**: View all past and current bookings
- **User Authentication**: Secure sign-in/sign-up with Clerk

### General Features
-  **Dark/Light Mode**: Theme toggle support
-  **Responsive Design**: Works on all devices
-  **Authentication**: Clerk integration for user management
-  **Modern UI**: Built with Radix UI and Tailwind CSS
-  **Database**: PostgreSQL with Prisma ORM
-  **Performance**: Optimized with Next.js latest features

---

##  Tech Stack

### Frontend
- **Next.js 16** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Radix UI** - Component library
- **React Hook Form** - Form management
- **Date-fns** - Date utilities
- **Lucide React** - Icons

### Backend
- **Next.js API Routes** - Backend
- **Prisma ORM** - Database access
- **PostgreSQL** - Database

### Services & Tools
- **Clerk** - Authentication
- **UploadThing** - File uploads
- **Razorpay** - Payment processing
- **Axios** - HTTP client
- **Next Themes** - Theme management

---

##  Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager
- **PostgreSQL** database (local or cloud)
- **Git** for version control

### Required Accounts
- Clerk account for authentication
- PostgreSQL database
- UploadThing account for file uploads
- Stripe account for payments (optional)

---

##  Getting Started

### 1. Clone the Repository
\\\ash
git clone https://github.com/itsAkito/Hotel-Management.git
cd Hotel-Management/my-next-app
\\\

### 2. Install Dependencies
\\\ash
npm install
# or
yarn install
\\\

### 3. Set Up Environment Variables

Create a \.env.local\ file in the \my-next-app\ directory with the following variables:

\\\env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# Database
DATABASE_URL=postgresql://user:password@localhost:5432/hotel_management

# UploadThing
UPLOADTHING_SECRET=your_uploadthing_secret
NEXT_PUBLIC_UPLOADTHING_APP_ID=your_uploadthing_app_id

# Razorpay Payment Gateway
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret

# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3000
\\\

### 4. Set Up the Database

\\\ash
# Run Prisma migrations
npx prisma migrate dev

# Seed the database (optional)
npm run seed
\\\

### 5. Run the Development Server

\\\ash
npm run dev
# or
yarn dev
\\\

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

---

##  Project Structure

\\\
my-next-app/
 app/                          # Next.js app directory
    api/                      # API routes
       addhotel/            # Hotel creation endpoints
       bookings/            # Booking management endpoints
       hotel-bookings/      # Hotel-specific bookings
       hotels/              # Hotel endpoints
       myhotels/            # User's hotels
       uploadthing/         # File upload handler
    (clerk)/                 # Clerk auth pages
       sign-in/
       sign-up/
    book-stay/               # Booking page
    booking-confirmation/    # Booking confirmation page
    booking-success/         # Success page
    hotel/                   # Hotel detail page
    my-bookings/             # User bookings page
    my-hotels/               # Hotel owner's hotels
    search/                  # Hotel search page
    layout.tsx               # Root layout
    page.tsx                 # Home page
    globals.css              # Global styles

 components/                   # Reusable React components
    hotel/                   # Hotel-related components
       AddHotelForm.tsx
       BookingCard.tsx
       BookingPayment.tsx
       MyBooking.tsx
       MyHotel.tsx
       RoomManagement.tsx
    layout/                  # Layout components
       Navbar.tsx
       Navmenu.tsx
    location/                # Location components
    ui/                      # UI component library

 lib/                          # Utility functions
    api-error-handler.ts     # API error handling
    cache.ts                 # Caching utilities
    dateUtils.ts             # Date utilities
    prismadb.ts              # Prisma client
    store.ts                 # State management
    utils.ts                 # General utilities

 prisma/                       # Prisma configuration
    schema.prisma            # Database schema
    migrations/              # Database migrations

 public/                       # Static assets
    Image/                   # Image assets

 scripts/                      # Build/seed scripts
    seed.ts                  # Database seeding

 tsconfig.json                # TypeScript configuration
 next.config.ts               # Next.js configuration
 tailwind.config.ts           # Tailwind CSS configuration
 package.json                 # Dependencies
\\\

---

##  API Endpoints

### Hotels
- \GET /api/hotels\ - Get all hotels
- \GET /api/hotels/[hotelId]\ - Get hotel details
- \POST /api/addhotel\ - Create new hotel
- \PUT /api/hotels/[hotelId]\ - Update hotel
- \DELETE /api/hotels/[hotelId]\ - Delete hotel

### Bookings
- \GET /api/bookings\ - Get all bookings
- \GET /api/bookings/[bookingId]\ - Get booking details
- \POST /api/bookings\ - Create new booking
- \PUT /api/bookings/[bookingId]\ - Update booking
- \DELETE /api/bookings/[bookingId]\ - Cancel booking

### Hotel-Specific Bookings
- \GET /api/hotel-bookings\ - Get bookings for user's hotels

### User Hotels
- \GET /api/myhotels\ - Get user's hotels

---

##  Authentication

This project uses **Clerk** for authentication. Features include:
- Email/password sign-in
- Social login support
- User session management
- Protected routes with middleware

---

##  Payment Integration

The system supports:
- **Razorpay** - For secure payment processing
- PCI-compliant payment handling
- Instant payment verification and settlement
- Support for multiple payment methods (Cards, Wallets, UPI, etc.)
- Automated order and customer management
- Webhook support for real-time payment updates

---

##  Styling

- **Tailwind CSS** for utility-first styling
- **Dark/Light mode** support with next-themes
- **Radix UI** for accessible component primitives
- Custom component library in \components/ui/\

---

##  Scripts

\\\ash
# Development
npm run dev              # Start development server
npm run build            # Build for production
npm start                # Start production server

# Linting & Formatting
npm run lint             # Run ESLint
npm run format           # Format code with Prettier
npm run type-check       # Check TypeScript types

# Database
npm run seed             # Seed database with sample data

# Analysis
npm run analyze          # Analyze bundle size
\\\

---

##  Dependencies

Key dependencies are listed in \package.json\. Run \
pm install\ to install all dependencies.

Main packages:
- \
ext\ - React framework
- \@prisma/client\ - Database ORM
- \@clerk/nextjs\ - Authentication
- \@uploadthing/react\ - File uploads
- \	ailwindcss\ - CSS framework
- \
eact-hook-form\ - Form management

---

##  Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy with a single click

### Docker

A Dockerfile can be created for containerization. Example:
\\\dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
\\\

---

##  Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (\git checkout -b feature/amazing-feature\)
3. Commit your changes (\git commit -m 'Add amazing feature'\)
4. Push to the branch (\git push origin feature/amazing-feature\)
5. Open a Pull Request

---

##  License

This project is licensed under the MIT License - see the LICENSE file for details.

---

##  Support

For issues, questions, or suggestions, please open an issue on GitHub.

---

##  Contact

- **GitHub**: [itsAkito](https://github.com/itsAkito)
- **Repository**: [Hotel-Management](https://github.com/itsAkito/Hotel-Management)

---

##  Roadmap

- [ ] Advanced analytics and reporting
- [ ] Email notifications for bookings
- [ ] Guest reviews and ratings
- [ ] Multi-language support
- [ ] Mobile app (React Native)
- [ ] Admin dashboard

---

**Happy Coding! **
