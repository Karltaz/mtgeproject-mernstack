const mongoose = require("mongoose");

 mongoose.set('strictQuery', false);
const connectDB = async () => {
    try {

        await mongoose.connect("mongodb+srv://mtge-user:mtgeteam@mt-ge-project-mernstack.9tsw4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
            {
                useNewUrlParser: true,
                useUnifiedTopology: true

            }
            );
             console.log("Database connection success");
    } catch (error) {
        console.log(error);
    }
}


 
module.exports= connectDB;