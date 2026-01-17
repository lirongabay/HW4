# HW4

A simple client-side web form that simulates a college admissions check.

This project was built as part of a Web / JavaScript assignment and demonstrates:

- Working with HTML forms
- Enabling and disabling inputs using JavaScript
- Handling user interaction with radio buttons
- Performing client-side validation
- Displaying dynamic feedback without a server

---

## Features

1. **Dynamic Fields**
   - Selecting **“Psycometric and Bagrut”** disables the *Mechina Grade* field.
   - Selecting **“Mechina and Bagrut”** disables the *Psycometric Grade* field.
   - Disabled fields are visually grayed out using CSS.

2. **Validation on Validate Button**
   - When clicking **Validate**:
     - If *Bagrut Grade* is empty, an alert is shown:
       ```
       You should enter a bagrut grade
       ```
     - If *Age* is greater than 30, a message appears below the button:
       ```
       You are eligible for admission to any faculty you choose
       ```
       with a green background using the predefined `.green` CSS class.
     - If age is 30 or below, no message is displayed.

3. **Client-Side Only**
   - All logic is implemented in JavaScript.
   - No server is required.

---
