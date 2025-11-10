# GraphAlgo – BFS & DFS Visualization

A React-based interactive visualizer that demonstrates how **Breadth-First Search (BFS)** and **Depth-First Search (DFS)** explore a grid differently to reach a destination node.

**Live Demo:** https://main--dapper-pastelito-160c9d.netlify.app/  

<img width="1708" height="848" alt="Screenshot 2025-11-10 at 9 13 31 AM" src="https://github.com/user-attachments/assets/674922dc-454b-4d4c-8ec0-f3b3663029fe" />

---

## Overview

GraphAlgo is a web application built with **React** that visually explains how BFS and DFS traverse a grid. Users can define a **start point**, an **end point**, and **blockers**, then trigger a real-time animation showing how each algorithm navigates the grid to find the destination.

This tool is designed to help students, developers, and interview candidates understand algorithmic behavior through interactive visualization rather than static examples.

---

## Features

- **React-powered interactive grid** with efficient state management  
- **Click-to-select** start node, end node, and blockers  
- **Choose between BFS and DFS**  
- **Animated traversal** showing visited nodes and the final path  
- **Reset functionality** to try new configurations  
- **Responsive UI** for desktop and mobile  
- **Extensible codebase** suitable for adding more algorithms

---

## How It Works

1. Click on any cell to set the **Start** node.  
2. Click another cell to set the **End** node.  
3. Add **Blockers** by clicking additional cells.  
4. Select **BFS** or **DFS**.  
5. Press **Visualize** to watch the algorithm search the grid.

The visualizer displays:  
- All visited nodes  
- Exploration order  
- The final computed path (if it exists)

---

## Tech Stack

- **React** (Functional Components + Hooks)  
- **JavaScript / ES6**  
- **CSS**  
- **Netlify** for deployment  

---

## Future Enhancements

1. Add advanced algorithms: Dijkstra, A*, Greedy Best-First
2. Add playback speed control
