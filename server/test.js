const mongoose = require('mongoose');
const express = require('express');
const Restaurant = require('./modules/restaurant.js');
const cities = require('./modules/cities.js');


const app = express();
const port = 5000;

mongoose.connect('mongodb://127.0.0.1:27017/swiggy_clone')
.then(async ()=>{
    console.log("Mongo db was connected");
})
.catch(()=>{
    console.log("These was the error while inserting the data");
});


app.get('/restaurants',async (req,res)=>{
    try {
       const result = await Restaurant.deleteMany({   
        
        // $and :[
            // name: "Veg Biryani" 
            // name: "Chicken Curry" 
            // name: "Butter Chicken" 
            // name: "Paneer Butter Masala"
            // name: "Dal Tadka"
            // name: "Rajma Chawal"
            // name: "Mutton Biryani"
            // name: "Kadhai Paneer"
            // name: "Kheer" 
            // name: "Rasgulla"
            // name: "Jalebi"
            // name: "Ice Cream"
            // name: "Fruit Custard"
            // name: "Fruit Custard"
            // name: "Lassi" 
            // name: "Lime Soda"
            // name: "Cold Coffee"
            // name: "Masala Chai"
            // name: "Fruit Juice"
            name : "Gulab Jamun"
        // ]
    });
        res.json({ message: "Records deleted", deletedCount: result.deletedCount });
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch restaurants' });
    }
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});