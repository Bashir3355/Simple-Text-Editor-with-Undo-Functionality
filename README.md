Converting HTML Profile Card to JSX
This project is a simple React application that converts a plain HTML user profile card into a reusable JSX component. The goal is to practice JSX syntax, organizing files in a React project, passing props, and writing tests (including normal and edge cases).

Features
Functional React component called UserProfile

JSX version of a basic HTML profile card

Uses props for name, email, and photoUrl

Local image stored in src/assets/my-photo.jpg

Styled with a separate UserProfile.css file

Automated tests with Jest and React Testing Library (3 normal cases + 3 edge cases)

Project Structure
text
profile-card-app/
  package.json
  public/
    index.html
  src/
    App.js
    App.css
    assets/
      my-photo.jpg
    components/
      UserProfile.jsx
      UserProfile.css
      UserProfile.test.jsx
Main Files
src/components/UserProfile.jsx

Functional component that renders:

Title: “User Profile”

Image with className="photo"

Name and email using props

“Send Email” link using mailto:email

Uses JSX rules: className instead of class, single parent <div>, self‑closing tags.

Includes simple fallback values for missing name, email, or photoUrl.

src/components/UserProfile.css

Styles the profile card: border, rounded corners, padding, background color, and link color.

Styles the image (.photo) to be responsive and nicely rounded.

src/App.js

Imports and renders UserProfile.

Passes actual data:

name="Bashir Abdulkadir"

email="subaxfiican@gmail.com"

photoUrl={myPhoto} (imported from src/assets/my-photo.jpg)

src/components/UserProfile.test.jsx

Uses Jest and React Testing Library to test the component.

Test Cases
Normal Cases
Renders correct name and email

Checks that Name: Bashir Abdulkadir and Email: subaxfiican@gmail.com appear.

Renders image with the given photoUrl

Verifies that the <img> element exists and has the correct src attribute.

Renders correct mailto link

Ensures the “Send Email” link has href="mailto:subaxfiican@gmail.com".

Edge Cases
Empty name

When name is empty, the component shows a fallback like Name: Unknown User.

Empty email

When email is empty, the component shows a fallback text for the email and uses href="mailto:" for the link.

Empty photoUrl

When photoUrl is empty, the component uses a default placeholder image instead of breaking.

How to Run the Project
Prerequisites
Node.js and npm installed on your machine.

Installation
Clone or download this repository.

Open a terminal in the project folder (the one with package.json), for example:

bash
cd profile-card-app
Install dependencies:

bash
npm install
Run the Development Server
bash
npm start
This starts the React development server.

Open your browser and go to: http://localhost:3000

You should see the profile card with your name, email, and image.

Run the Tests
bash
npm test
Jest and React Testing Library will run all tests in UserProfile.test.jsx.

The terminal will show which tests passed for normal cases and edge cases.

Demo Video (for submission)
In your final submission, include a short video that:

Shows the app running in the browser.

Shows at least 3 normal test cases and 3 edge cases in the terminal using npm test.

Briefly explains the main files (UserProfile.jsx, UserProfile.css, App.js, and the test file).

