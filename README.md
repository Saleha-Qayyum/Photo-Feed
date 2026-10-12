# Photo Feed

A simple photo sharing app where you can upload an image with a caption and view posts in a feed.

## Features

- Create a post with an image and caption
- View posts in the feed
- Store post details in MongoDB
- Upload images with ImageKit

## Built With

- React
- Vite
- Node.js
- Express
- MongoDB and Mongoose
- ImageKit

## Getting Started

### Requirements

- Node.js and npm
- A MongoDB connection string
- An ImageKit private API key

### Configure the backend

Create a `.env` file in the `Backend` folder:

```env
MONOGODB_URI=your_mongodb_connection_string
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
