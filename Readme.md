# 💰 Full Stack Expense Tracker

A comprehensive web application for managing personal finances with real-time tracking, interactive charts, and detailed analytics. Built with React frontend and Node.js backend, featuring secure authentication and MongoDB database integration.

## 🚀 Features

### 🔐 User Authentication
- **Secure Login & Signup** - JWT-based authentication with password hashing
- **Profile Management** - Upload and manage profile pictures
- **Session Management** - Persistent login sessions with automatic token handling

### 📊 Dashboard Overview
- **Financial Summary** - Total Balance, Income, and Expenses at a glance
- **Interactive Charts** - Visual representation using Bar, Pie, and Line charts
- **Recent Transactions** - Quick access to latest income and expense records
- **30-Day Analytics** - Detailed expense tracking over the last month
- **60-Day Income Trends** - Income pattern analysis with visual charts

### 💵 Income Management
- **Add Income Sources** - Track various income streams (Salary, Freelance, etc.)
- **Income Categories** - Organize income with custom icons and emojis
- **Income History** - View all income records with date tracking
- **Export Data** - Download income data in Excel format
- **Delete Records** - Easy deletion with hover-to-reveal functionality

### 💸 Expense Management
- **Category-Based Tracking** - Organize expenses by categories (Food, Rent, Groceries, etc.)
- **Expense Analytics** - Detailed breakdown of spending patterns
- **Visual Charts** - Interactive charts showing expense distribution
- **Export Reports** - Download expense data in Excel format
- **Quick Actions** - Add, view, and delete expenses with intuitive UI

### 📱 User Experience
- **Mobile Responsive** - Seamless experience across desktop, tablet, and mobile
- **Intuitive Navigation** - Sidebar menu with easy access to all features
- **Real-time Updates** - Instant data synchronization across components
- **Toast Notifications** - User-friendly feedback for all actions
- **Modern UI** - Clean, professional design with Tailwind CSS

## 🛠️ Technology Stack

### Frontend
- **React 19.1.1** - Modern React with hooks and functional components
- **Vite 7.1.7** - Fast build tool and development server
- **React Router DOM 7.9.4** - Client-side routing
- **Tailwind CSS 4.1.14** - Utility-first CSS framework
- **Axios 1.12.2** - HTTP client for API requests
- **Recharts 3.2.1** - Chart library for data visualization
- **React Hot Toast 2.6.0** - Toast notifications
- **React Icons 5.5.0** - Icon library
- **Emoji Picker React 4.14.0** - Emoji selection component
- **Moment.js 2.30.1** - Date manipulation library

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js 5.1.0** - Web application framework
- **MongoDB** - NoSQL database with Mongoose ODM
- **JWT (jsonwebtoken 9.0.2)** - Secure authentication tokens
- **bcryptjs 3.0.2** - Password hashing
- **Multer 2.0.2** - File upload handling
- **CORS 2.8.5** - Cross-origin resource sharing
- **XLSX 0.18.5** - Excel file generation
- **dotenv 17.2.3** - Environment variable management

### Database
- **MongoDB Atlas** - Cloud-hosted MongoDB database
- **Mongoose 8.19.1** - MongoDB object modeling tool

## 📁 Project Structure

```
Full_Stack_expense_tracker/
├── Backend/
│   ├── config/
│   │   └── db.js                 # Database connection configuration
│   ├── controllers/
│   │   ├── authController.js     # Authentication logic
│   │   ├── dashboardController.js # Dashboard data aggregation
│   │   ├── expenseController.js  # Expense CRUD operations
│   │   └── incomeController.js   # Income CRUD operations
│   ├── middleware/
│   │   ├── authMiddleware.js     # JWT authentication middleware
│   │   └── uploadMiddleware.js   # File upload handling
│   ├── models/
│   │   ├── User.js              # User schema and methods
│   │   ├── Expense.js           # Expense schema
│   │   └── Income.js            # Income schema
│   ├── routes/
│   │   ├── authRoutes.js        # Authentication endpoints
│   │   ├── dashboardRoutes.js   # Dashboard data endpoints
│   │   ├── expenseRoutes.js     # Expense management endpoints
│   │   └── incomeRoutes.js      # Income management endpoints
│   ├── uploads/                 # User uploaded files
│   ├── server.js               # Main server file
│   └── package.json            # Backend dependencies
└── Frontend/
    └── expense-tracker/
        ├── src/
        │   ├── components/
        │   │   ├── Cards/       # Reusable card components
        │   │   ├── Charts/      # Chart components (Bar, Pie, Line)
        │   │   ├── Dashboard/   # Dashboard-specific components
        │   │   ├── Expense/     # Expense management components
        │   │   ├── Income/      # Income management components
        │   │   ├── Inputs/      # Form input components
        │   │   └── layouts/     # Layout components
        │   ├── context/
        │   │   └── userContext.jsx # Global user state management
        │   ├── hooks/
        │   │   └── useUserAuth.jsx # Authentication hook
        │   ├── pages/
        │   │   ├── Auth/        # Login and Signup pages
        │   │   └── Dashboard/   # Main application pages
        │   ├── utils/
        │   │   ├── apiPaths.js  # API endpoint definitions
        │   │   ├── axiosInstance.js # HTTP client configuration
        │   │   ├── helper.js    # Utility functions
        │   │   └── uploadImage.js # Image upload utilities
        │   └── App.jsx          # Main application component
        └── package.json         # Frontend dependencies
```

## 🗄️ Database Schema

### User Model
```javascript
{
  fullName: String (required),
  email: String (required, unique),
  password: String (required, hashed),
  profileImageUrl: String (optional),
  timestamps: true
}
```

### Expense Model
```javascript
{
  userId: ObjectId (ref: User, required),
  icon: String (optional),
  category: String (required),
  amount: Number (required),
  date: Date (default: Date.now),
  timestamps: true
}
```

### Income Model
```javascript
{
  userId: ObjectId (ref: User, required),
  icon: String (optional),
  source: String (required),
  amount: Number (required),
  date: Date (default: Date.now),
  timestamps: true
}
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account or local MongoDB installation
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd expence-tracker-fullstack-mern
   ```

2. **Backend Setup**
   ```bash
   cd Backend
   npm install
   ```

3. **Frontend Setup**
   ```bash
   cd Frontend/expense-tracker
   npm install
   ```

4. **Environment Configuration**
   
   Create a `.env` file in the Backend directory:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   CLIENT_URL=http://localhost:5173
   PORT=5000
   ```

5. **Start the Application**
   
   **Backend (Terminal 1):**
   ```bash
   cd Backend
   npm run dev
   ```
   
   **Frontend (Terminal 2):**
   ```bash
   cd Frontend/expense-tracker
   npm run dev
   ```

6. **Access the Application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000

## 📡 API Endpoints

### Authentication
- `POST /api/v1/auth/signup` - User registration
- `POST /api/v1/auth/login` - User login
- `GET /api/v1/auth/user` - Get user information
- `POST /api/v1/auth/upload-image` - Upload profile picture

### Dashboard
- `GET /api/v1/dashboard/data` - Get dashboard summary data

### Income Management
- `POST /api/v1/income/add` - Add new income
- `GET /api/v1/income/get` - Get all income records
- `DELETE /api/v1/income/delete/:id` - Delete income record
- `GET /api/v1/income/download` - Download income data as Excel

### Expense Management
- `POST /api/v1/expense/add` - Add new expense
- `GET /api/v1/expense/get` - Get all expense records
- `DELETE /api/v1/expense/delete/:id` - Delete expense record
- `GET /api/v1/expense/download` - Download expense data as Excel

## 🔧 Development Scripts

### Backend
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Key Features Implementation

### Authentication Flow
1. User signs up with email and password
2. Password is hashed using bcryptjs
3. JWT token is generated and stored in localStorage
4. Protected routes check for valid JWT token
5. Token is automatically included in API requests

### Data Visualization
- **Bar Charts** - Compare income vs expenses over time
- **Pie Charts** - Show expense category distribution
- **Line Charts** - Track financial trends over time
- **Custom Tooltips** - Detailed information on hover

### File Management
- Profile pictures uploaded using Multer
- Images stored in `/uploads` directory
- Excel reports generated using XLSX library
- File serving through Express static middleware

### State Management
- React Context API for global user state
- Custom hooks for authentication logic
- Local state management for component data
- Real-time updates across components

## 🔒 Security Features

- **Password Hashing** - bcryptjs with salt rounds
- **JWT Authentication** - Secure token-based auth
- **CORS Protection** - Configured for specific origins
- **Input Validation** - Server-side validation for all inputs
- **Protected Routes** - Authentication middleware for sensitive endpoints

## 📱 Responsive Design

- **Mobile-First Approach** - Optimized for mobile devices
- **Tailwind CSS** - Utility-first styling for consistency
- **Flexible Grid System** - Responsive layouts for all screen sizes
- **Touch-Friendly Interface** - Optimized for touch interactions

## 🚀 Deployment

### Backend Deployment
1. Set up MongoDB Atlas cluster
2. Configure environment variables
3. Deploy to platforms like Heroku, Railway, or Vercel
4. Update CORS settings for production domain

### Frontend Deployment
1. Build the application: `npm run build`
2. Deploy to platforms like Netlify, Vercel, or GitHub Pages
3. Update API endpoints for production backend

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Alok Hotta**
- Email: alokhotta10@gmail.com
- MongoDB Atlas Dashboard: Expense Tracker Project

## 🎯 Future Enhancements

- [ ] Budget planning and alerts
- [ ] Recurring transaction support
- [ ] Multi-currency support
- [ ] Advanced analytics and insights
- [ ] Mobile app development
- [ ] Data backup and restore
- [ ] Collaborative expense tracking
- [ ] Integration with banking APIs

---

