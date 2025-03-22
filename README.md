
# TV Show Listing App

This is a TV Show listing app built with React, TypeScript, and the TVMaze API. The app allows you to search for TV shows, view a list of shows, and get detailed information about each show.

## Features
- **Search TV Shows:** Allows users to search for TV shows by name.
- **List of Shows:** Displays a paginated list of shows fetched from the TVMaze API.
- **Show Details:** View detailed information about each show, such as the show's title, genre, and description.
- **Pagination/Infinite Scrolling:** Supports pagination or infinite scrolling for a seamless experience with a long list of shows.

## Tech Stack
- **Frontend:** React (with TypeScript), React Router DOM
- **API:** TVMaze API
- **State Management:** React Hooks (useState, useEffect)
- **Styling:** Custom CSS (optional styling can be added)

## Installation

To run this project locally, follow these steps:

### 1. Clone the repository
Clone the repository to your local machine using the following command:

```bash
git clone https://github.com/your-username/tv_show_listing.git
```

### 2. Install dependencies

Navigate to the project folder and install the necessary dependencies:

```bash
cd tv_show_listing
npm install
```

### 3. Run the development server

After the dependencies are installed, you can start the development server:

```bash
npm start
```

This will run the app locally, and it should open in your browser at `http://localhost:3000`.

## Usage

- **Search for TV Shows:** Enter a show name in the search bar to find matching results.
- **View Show Details:** Click on any show in the list to see detailed information about the show.
- **Pagination/Infinite Scrolling:** Navigate through multiple pages of search results with pagination (or infinite scrolling if implemented).

## API

This app uses the **TVMaze API** to fetch information about TV shows. For more information about the available endpoints, check the [TVMaze API documentation](https://www.tvmaze.com/api).

