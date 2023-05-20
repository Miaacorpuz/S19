// Declare global variables
let username, password, role;

// Login function
function login() {
  // Prompt the user for username, password, and role
  username = prompt("Enter your username:");
  password = prompt("Enter your password:");
  role = prompt("Enter your role (admin/teacher/student):");

  // Check for empty or null inputs
  if (!username || !password || !role) {
    alert("Input should not be empty!");
  } else {
    // Process the user's role
    switch (role) {
      case "admin":
        alert("Welcome back to the class portal, admin!");
        break;
      case "teacher":
        alert("Thank you for logging in, teacher!");
        break;
      case "student":
        alert("Welcome to the class portal, student!");
        break;
      default:
        alert("Role out of range.");
        break;
    }
  }
}

// Call the login function
login();
