require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const incomeRoutes = require("./routes/incomeRoutes");
const expenseRoutes = require("./routes/expenseRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

const app = express();


// Middleware to handle CORS
app.use(
    cors({
        origin: process.env.CLIENT_URL || "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);


app.use(express.json());

connectDB();


app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/income", incomeRoutes);
app.use("/api/v1/expense", expenseRoutes);
app.use("/api/v1/dashboard", dashboardRoutes);


// Serve uploads folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Serve frontend in production and enable SPA fallback so refresh works on client routes
(() => {
    const clientDistPath = path.join(__dirname, "../Frontend/expense-tracker/dist");
    const clientBuildPath = path.join(__dirname, "../Frontend/expense-tracker/build");
    const clientEnvPath = process.env.CLIENT_BUILD_PATH || "";

    const candidatePaths = [clientEnvPath, clientDistPath, clientBuildPath].filter(Boolean);
    const resolvedStaticPath = candidatePaths.find((p) => {
        try {
            return fs.existsSync(p) && fs.existsSync(path.join(p, "index.html"));
        } catch {
            return false;
        }
    });

    if (resolvedStaticPath) {
        app.use(express.static(resolvedStaticPath));

        // Fallback all non-API, non-upload requests to index.html for client-side routing
        app.get(/^\/(?!api|uploads).*/, (req, res) => {
            res.sendFile(path.join(resolvedStaticPath, "index.html"));
        });
    }
})();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));