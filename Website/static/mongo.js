import mongo from './db.js';  

async function retrieveWorkout() {
    try {
        await mongo.connect();  

        const usersCollection = mongo.getCollection("users");  
        const user = await usersCollection.findOne({ username: 'ArchZak' });  

        if (user) {
            return user  
        } else {
            console.log('No user found with that username');
        }
    } catch (error) {
        console.error("Error retrieving workout:", error);  
    }
}

export default retrieveWorkout();*/  
