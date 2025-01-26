const express = require("express");
const pool = require("./db");
const path = require("path");

const app = express();

// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (HTML)
app.use(express.static(path.join(__dirname, "public")));

// Fetch all bookings
app.get("/bookings", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM hotel_bookings ORDER BY id");
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching bookings:", error.message);
    res.status(500).json({ message: "Server error" });
  }
});

// Delete a booking
app.delete("/bookings/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query("DELETE FROM hotel_bookings WHERE id = $1", [id]);
    res.json({ message: "Booking deleted successfully!" });
  } catch (error) {
    console.error("Error deleting booking:", error.message);
    res.status(500).json({ message: "Server error" });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
