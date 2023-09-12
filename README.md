# Automa-Clone-App

## Project Description

Automa is a browser extension for browser automation. From auto-fill forms, doing a repetitive task, taking a screenshot, to scraping data of the website, it's up to user what they want to do with this extension.

| [Table of Contents](#table-of-contents)       |
| --------------------------------------------- |
| [Getting Started](#getting-started)           |
| [Prerequisites](#prerequisites)               |
| [Instalation](#instalation)                   |
| [Liabraries and Tools](#liabraries-and-tools) |
| [Features](#features)                         |
| [Contribution](#contribution)                 |

## Getting Started

To get started with this front-end clone of Automa, you'll need to follow these steps to set up the project environment and run it locally.

### Prerequisites

Before you begin, ensure you have the following software and tools installed:

- Node.js (latest version)
- npm
- Web browser (e.g., Chrome, Firefox)

### Instalation

Follow these steps to clone the project and install its dependencies:

1. Clone the repository to your local machine using Git:

   ```bash
   git clone https://github.com/Kashif-Rezwi/Automa-Clone-App.git
   ```

2. Change to the project directory:

   ```bash
   cd automa
   ```

3. Install the project dependencies using npm:

   ```bash
   npm install
   ```

   Once you have installed the project and its dependencies, you can run the front-end part using the following command:

   ```bash
   npm start
   ```

   This command will start a development server, and you can access the application in your web browser at http://localhost:3000 (or another port if specified).

### Liabraries and Tools

| Library                                                                      | Description                                                                                                                           |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| [React](https://reactjs.org/)                                                | A JavaScript library for building user interfaces.                                                                                    |
| [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)                    | The standard markup language for creating web pages.                                                                                  |
| [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)                      | A stylesheet language used for styling web documents.                                                                                 |
| [React Flow](https://reactflow.dev/)                                         | A library for building interactive node-based graph interfaces.                                                                       |
| [React Icons](https://react-icons.github.io/react-icons/)                    | Easily incorporate icons from popular packs into React applications                                                                   |
| [Material-UI (MUI) Library](https://mui.com/material-ui/getting-started/)    | Material UI is a library of React UI components that implements Google's Material Design.                                             |
| [Short-Unique-ID](https://www.npmjs.com/package/short-unique-id)             | Generates concise and unique identifiers (IDs) suitable for space-efficient applications.                                             |
| [React-Resize-Detector](https://www.npmjs.com/package/react-resize-detector) | Provides the ability to detect and respond to changes in the size of DOM elements in React applications, aiding in responsive design. |

### Features

<h4>1. Homepage</h4>
<p>It is a homepage based project where the Sidebar and Graph functionalities are the main focus.</p>
<img src="https://raw.githubusercontent.com/Kashif-Rezwi/Project-Screenshots/main/home.png" />

<h4>2. Dragging node</h4>
<p>Users can drag and drop elements from the sidebar.</p>
<img src="https://github.com/Kashif-Rezwi/Project-Screenshots/blob/main/dragging-node.png" />

<h4>Connecting nodes</h4>
<p>Users can connect with different elements using Edge.</p>
<img src="https://github.com/Kashif-Rezwi/Project-Screenshots/blob/main/connecting-nodes.png" />

<h4>On hovering node options</h4>
<p>On hovering any element/node in a graph user can see node id, delete button, and edit button</p>
<img src="https://github.com/Kashif-Rezwi/Project-Screenshots/blob/main/onhover-node.png" />

<h4>On editing a node</h4>
<p>On clicking the edit button a sidebar opens and the user can edit the node.</p>
<img src="https://github.com/Kashif-Rezwi/Project-Screenshots/blob/main/onedit-node.png" />

<h4>On saving nodes to localstorage</h4>
<p>Users can save the flow data into localstorage, and once saved if the user refreshes the window no data will be lost. Whenever data changes it indicates with a blue dot over the save button to save your data.</p>
<img src="https://github.com/Kashif-Rezwi/Project-Screenshots/blob/main/onsave-node.png" />

<h4>Right click on a node</h4>
<p>On right-click node menu will appear, where the user can duplicate and delete that node.</p>
<img src="https://github.com/Kashif-Rezwi/Project-Screenshots/blob/main/onRightClickMenu-node.png" />

<h4>Duplicate a node</h4>
<p>Users can duplicate the node with a different id.</p>
<img src="https://github.com/Kashif-Rezwi/Project-Screenshots/blob/main/onDuplicate-node.png" />

<h4>Right click on a edge</h4>
<p>On right-click edge menu will appear, where the user can only delete that edge.</p>
<img src="https://github.com/Kashif-Rezwi/Project-Screenshots/blob/main/onRightClickMenu-edge.png" />

<h4>Left click on a node</h4>
<p>On left-click on a node, it will automatically pan and zoom over that node to the center of the viewport.</p>
<img src="https://github.com/Kashif-Rezwi/Project-Screenshots/blob/main/onClicking-node.png" />

<h4>On click fitview</h4>
<p>On clicking fitview it will automatically pan and zoom over the nodes to the center of the viewport.</p>
<img src="https://github.com/Kashif-Rezwi/Project-Screenshots/blob/main/onfitview-nodes.png" />

<h4>Sidebar menu</h4>
<p> The sidebar menu can be toggled with minus and plus buttons to hide and show menu options.</p>
<img src="https://github.com/Kashif-Rezwi/Project-Screenshots/blob/main/onMinus-sidebar.png" />

<h4>Sidebar menu Hide</h4>
<p>The sidebar can be hidden with a sidebar button in the top-left corner of the graph.</p>
<img src="https://github.com/Kashif-Rezwi/Project-Screenshots/blob/main/hide-sidebar.png" />

<h3>Responsiveness</h3>
<p>The UI is also responsive to Dekstop, tab and mobile screens.</p>
<img src="https://github.com/Kashif-Rezwi/Project-Screenshots/blob/main/responsive-1.png" />
<img src="https://github.com/Kashif-Rezwi/Project-Screenshots/blob/main/responsive-2.png" />
<img src="https://github.com/Kashif-Rezwi/Project-Screenshots/blob/main/responsive-3.png" />

### Contribution
