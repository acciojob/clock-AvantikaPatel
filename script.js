//your JS code here. If required.
/**
 * DIGITAL CLOCK APPLICATION
 *
 * This script creates a real-time updating digital clock that displays
 * the current date and time in the format: MM/DD/YYYY, HH:MM:SS AM/PM
 *
 * Concepts demonstrated:
 * - DOM manipulation
 * - Date object and its methods
 * - String manipulation with padStart()
 * - Template literals
 * - setInterval for recurring function execution
 * - 12-hour time format conversion
 */

// Get reference to the HTML element with ID "timer" where we'll display the clock
const timerElement = document.getElementById("timer");

/**
 * Updates the clock with the current date and time
 * This function will be called every second to refresh the display
 */
function update() {
  // Create a new Date object representing the current date and time
  const cd = new Date();

  // Extract date components
  const month = cd.getMonth() + 1; // getMonth() returns 0-11, so add 1 for conventional month numbers
  // console.log(month);
  const date = cd.getDate(); // Gets the day of the month (1-31)
  const year = cd.getFullYear(); // Gets the full year (4 digits)

  // Extract time components
  const hour = cd.getHours(); // Gets hours in 24-hour format (0-23)
  // console.log(hour);

  // Convert to 12-hour format and ensure 2-digit format with padStart
  // The expression (hour % 12 || 12) handles both midnight (0) and noon (12)
  const formatHour = String(hour % 12 || 12).padStart(2, "0");

  const minutes = cd.getMinutes(); // Gets minutes (0-59)

  // Ensure seconds are always displayed with 2 digits
  const seconds = String(cd.getSeconds()).padStart(2, "0");

  // Determine if it's AM or PM
  const ampm = hour >= 12 ? "PM" : "AM";

  // Build the complete date and time string using template literals
  const string = `${month}/${date}/${year}, ${formatHour}:${minutes}:${seconds} ${ampm}`;

  // string = "month/date/year, hour:minutes:second AM?PM";

  // Update the text content of the timer element
  timerElement.innerText = string;
}

// Call the update function every 1000 milliseconds (1 second)
// This creates the ticking clock effect
setInterval(update, 1000);

// Note: Since we don't call update() directly when the script loads,
// there will be a 1-second delay before the clock first appears.
// To avoid this, you could call update() once before setting the interval.