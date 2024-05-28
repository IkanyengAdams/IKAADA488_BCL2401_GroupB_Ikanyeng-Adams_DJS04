# Redux-Inspired Store for Tally App

## Overview
This project implements a Redux-inspired store to manage the state of a simple Tally App. The store supports incrementing, decrementing, and resetting a counter. State changes are logged to the console to demonstrate effective state management without UI rendering.

## How to Run

1. Clone the repository.
2. Navigate to the project directory.
3. Run on google browser

## Approach
- **Store Class**: Manages state, allows dispatching actions, and supports subscription to state changes.
- **Reducer Function**: Handles state transitions based on action types (`ADD`, `SUBTRACT`, `RESET`).
- **Functional Programming Principles**: Emphasized immutability and pure functions in state management.

## Challenges
-Incrementing and decrementing.
- Ensuring state immutability while updating the state.
- Properly managing the subscription and unsubscription of listeners.
