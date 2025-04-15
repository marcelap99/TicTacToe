# Tic Tac Toe - Final Project CS50
# <u>Demo Video: </u>
[![YouTube Video]](https://youtu.be/TijI6vwJW0U)
<video src="Tic_Tac_Toe_Project_Presentation.mp4" type="video/mp4" width:"350" height="350" controls></video>
<audio controls src="Tic_Tac_Toe_Project_Presentation1_audio.m4a"></audio>

# <u>Description: </u>
### Tic tac Toe is a game in which two players seek in alternate turns to complete a row, a column, or a diagonal with either three O's or three X's drawn in the spaces of a grid of nine squares.
 ![Screenshot of the landing page of the Tic Tac Toe Game.](/TicTacToe_ScreenShot1.jpg)
### This frontend project was built using HTML, Javascript, & CSS. It is built using the mobile first approach. There is one break-point for responsive design using css media queries. The css media queries are for tablet or desktop at min width 768px and up. The Model-View-Controller (MVC) pattern is emphasized for the separation of concerns, better organized code.Included are google fonts via the google api. My CSS sheet includes: reset css for better layout and styling, set custom color variables to use throughout app, set html & body to height 100% for better layout, set game to center of screen via parent element - body, set shared utility classes to use throughout, used CSS Grid Layout Module to set game grid rows - first row 50, next 3 80, last row 60, set media queries for tablet or desktop at min width 768px and up, The CSS @keyframes rule is used to control the steps in an animation sequence by defining CSS styles for points along the animation sequence. The JavaScript folder contains three separate files: app, store, view. In a JavaScript application, the structure of files relating to the view and the store often depends on the application's architecture and complexity. 1. Views (Components) These files typically handle the user interface and user interactions. 2. Store (State Management), these files manage the application's data and logic. 3. Application Structure. The html file is set up using the standard / current html boiler plate. An HTML boilerplate is a basic, reusable template containing the fundamental HTML structure and metadata that forms the foundation for any webpage, ensuring consistency and efficiency in web development. This includes: DOCTYPE Declaration: <!DOCTYPE html> tells the browser the document is an HTML5 document. HTML Element: <html> is the root element of the page, containing all other elements. HEAD Element: <head> contains metadata about the page, such as: Character Encoding: <meta charset="UTF-8"> specifies the character encoding for the document. Viewport Meta Tag: <meta name="viewport"content="width=device-width, initial-scale=1.0"> controls how the page is rendered on different devices. Title Tag: <title>My Website</title> defines the title that appears in the browser tab. Links to CSS and JavaScript Files: <link rel="stylesheet" href="style.css"> and <script src="index.js"></script> link external stylesheets and scripts. BODY Element: <body> contains the visible content of the page.
```html
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>My Website</title>
   <link rel="stylesheet" href="style.css">
</head>
<body>
   <script src="index.js"></script>
</body>
</html>
```
Included in this project is a standard README.md file. A README.md file is a text document, typically written in Markdown, that provides essential information about a project, software, or data set, often serving as the first point of contact for users or developers. Here's a breakdown of what it is and why it's important: What it is: Text File: It's a simple text file, making it easy to read and edit. Markdown Format: The .md extension indicates that it uses the Markdown syntax for formatting, allowing for rich text features like headings, lists, links, and images. Project Documentation: It's a crucial part of project documentation, providing an overview of the project, its purpose, how to use it, and how to contribute. First Point of Contact:
On platforms like GitHub, a README.md file is often the first thing users see when visiting a repository, making it a vital tool for conveying information. Why it's important: Clarity and Accessibility: A well-written README.md helps users quickly understand the project, its purpose, and how to get started, making it easier for both beginners and experienced developers. Instructions and Guidance: It can include installation instructions, usage examples, and links to further documentation, guiding users through the process of using the project. Collaboration and Contribution: A good README.md can encourage collaboration by explaining how to contribute to the project, including guidelines for coding style, testing, and documentation. Project Organization:
It helps organize the project by providing a central location for essential information, making it easier to find and access.

- Mobile First Approach
- Responsive Design
- Model-View-Controller (MVC) pattern
- HTML, Javascript, CSS
- State Management
- CSS Animations

 ![Screenshot of the landing page of the Tic Tac Toe Game.](/TicTacToe_ScreenShot2Win.jpg)

# <u>Instructions:</u>
### Down load, or clone, open in editor, launch a server like "live server" from editor. Play the game.
 ![Screenshot of the Tic Tac Toe Game Win!.](/TicTacToe_ScreenShot3_Play.jpg)

# <u>Credits:</u>
### This project is based on the game tic tac toe, it requires a basic understanding of HTML, CSS, and JavaScript in order to build the UI. The Model-View-Controller (MVC) pattern is the focus of this project. Demonstrating the importance of the separation of concerns. This is key in having well organized code that others can contribute to or help when debugging.
