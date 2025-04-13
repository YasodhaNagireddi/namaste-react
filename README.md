# Namaste React 🚀

1. What is Emmet?

Emmet is a tool used in code editors like VS Code to write HTML and CSS faster using shortcuts. (html:5 for HTML structure)

2. Difference between a Library and Framework
•	Library: Like jQuery – you use it when you want.
•	Framework: Like Angular – it tells you how to build the whole app.

3. What is CDN? Why do we use it?
CDN = Content Delivery Network

CDN is a network of servers that deliver files (like JavaScript, CSS, images) fast from the server closest to you.
Why use it?
•	Faster loading
•	Less stress on your server
•	Commonly used for React, Bootstrap, jQuery, etc.

4. Why is React known as React?

React is called React because it reacts to data changes and updates the UI efficiently.

5. What is crossorigin in script tag?

crossorigin is an attribute used when loading scripts from another domain (CDN) that might need permission to share data (like error messages).

6. What is the difference between React and ReactDOM?
React	ReactDOM
Logic part	UI rendering part
Used for	Creating components and logic

•	React is like a chef preparing food.
•	ReactDOM is like the waiter serving the food on your table (the browser).

7. Difference between react.development.js and react.production.js via CDN
File	Use Case	Features
react.development.js	For development	Includes warnings, debugging
react.production.js	For live websites	Optimized, smaller, no warnings

Development version = A car with sensors to help you fix issues
Production version = A race car with no extra weight, built for speed

8. What is async and defer?

Both are used with <script> tags to control when JavaScript loads.
Attribute	What it does	When it runs
async	Loads in background and runs immediately	As soon as loaded
defer	Loads in background, runs after HTML loads	After full parsing

•	async: Like starting a song as soon as it downloads
•	defer: Like waiting for the whole playlist to load, then playing songs in order

