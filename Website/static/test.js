import mongo from './db.js';  // Import the MongoDB client from db.js

async function retrieveWorkout() {
    try {
        await mongo.connect();  // Connect to MongoDB

        const usersCollection = mongo.getCollection("users");  // Get the 'users' collection
        const user = await usersCollection.findOne({ username: 'ArchZak' });  // Find the user

        if (user) {
            console.log(user);  // Log the user data to the terminal
        } else {
            console.log('No user found with that username');
        }
    } catch (error) {
        console.error("Error retrieving workout:", error);  // Handle any errors
    }
}

retrieveWorkout();  // Run the function
