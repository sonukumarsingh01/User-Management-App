**User Management App**

A React application integrating the Reqres API for user authentication, listing, editing, and deletion. Built with Bootstrap for a responsive UI, this project fulfills a three-level assignment with bonus features like search and React Router.

# Features 

Login: Authenticate and redirect to the user list.

User List: Paginated display with search by name/email.

Edit/Delete: Modify user details (updates UI) and remove users (5-second success message).

Navigation: React Router for seamless page transitions.

UI: Responsive cards, navbar on all pages.

## Tech Stack

Frontend: React.js, React Router, Bootstrap

API Handling: Axios

State Management: React Hooks (useState, useEffect)

Routing: React Router DOM

Authentication: Simple login/logout flow

Deployment: https://usermanagementdeshboard.netlify.app/

### How to Run the Project

**Prerequisites**

Node.js: Version 14 or higher (includes npm)

Git: For cloning the repository

A modern web browser (e.g., Chrome, Firefox)

**Steps to Run**

1. Clone the Repository:

git clone : 

cd user-management

2. Install Dependencies:

npm install

create .env file set data :

REACT_APP_API_URL=https://reqres.in/

3. Start the Application:

npm start

The app will automatically open in your default browser at http://localhost:3000.

4. Interact with the App:

Login: Use eve.holt@reqres.in and cityslicka.

Users List: Browse, search, edit, or delete users.

Logout: Click the "Logout" button in the navbar.

#### Dependencies

The project relies on the following npm packages, which are installed automatically with npm install:

react: ^18.2.0

react-dom: ^18.2.0

bootstrap: ^5.3.3

axios: ^1.6.8

react-router-dom: ^6.22.3

@fortawesome/fontawesome-free: Latest version (for icons)

**Manual Installation (if needed)**

If you encounter issues with npm install, install each dependency manually:

npm install react@18.2.0 react-dom@18.2.0 bootstrap@5.3.3 axios@1.6.8 react-router-dom@6.22.3

**Verify Installation**

After installation, check package.json in the project root to ensure these dependencies are listed under dependencies.

##### Assumptions & Considerations

**Mock API Behavior**

The Reqres API is a mock service and doesn’t persist changes server-side.

Edits (PUT /api/users/{id}) and deletes (DELETE /api/users/{id}) are simulated locally by updating the app’s state.

PUT /api/users/{id} returns 204 No Content, so updated data is constructed client-side and reflected in the UI.

**Token Handling**

The login token is stored in localStorage and sent with edit/delete requests via the Authorization: Bearer header.

Logout clears the token and redirects to the login page.

**Data Persistence**

User edits persist only in the current session and reset on logout or page refresh due to the mock API limitations.

**UI Updates**

After editing a user, the updated details are propagated to the user list via state management in App.js, ensuring the UI reflects changes immediately.

**Error Handling**

Basic validation prevents empty form submissions.

API errors display user-friendly messages (e.g., "Error fetching users").

**Search Scope**

Search filters users by name and email within the current page’s data (not across all pages) to align with the paginated fetch approach.

**Styling**

Bootstrap ensures responsiveness.

Custom CSS (styles.css) enhances the navbar’s branding, hover effects, and UI aesthetics.

**API Endpoints Used**

POST /api/login - User authentication

GET /api/users?page={page} - Fetch users with pagination

GET /api/users/{id} - Fetch details of a single user

PUT /api/users/{id} - Update user details

DELETE /api/users/{id} - Delete a user

###### Submission Details

GitHub Repository: https://github.com//user-management

Live URL: https://usermanagementdeshboard.netlify.app/


**Final Thoughts**

This project demonstrates a real-world React.js application with authentication, API handling, CRUD operations, and a responsive UI. The Reqres API serves as a mock backend, making it an excellent learning experience for frontend developers looking to build scalable and dynamic applications.

**Happy Coding**