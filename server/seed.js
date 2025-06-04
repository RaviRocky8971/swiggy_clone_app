const mongoose = require('mongoose');
const express = require('express');
const Restaurant = require('./modules/restaurant.js');
const cities = require('./modules/cities.js');

const sampleData =[
    {
        "name": "Spice Hub",
        "city_id" : "6824f3333713dab9dbe5521d",
        "city": "Kakinada",
        "cuisine": ["South Indian", "Chinese"],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVBJkXS-meeWA94pJm2_C8cIWEoNuEKWGPng&s",
        "rating": 4.5,
        "deliveryTime": "30 mins",
        "isActive": true
    },
    {
        "name": "Coastal Flavours",
        "city_id" : "6824f3333713dab9dbe5521d",
        "city": "Kakinada",
        "cuisine": ["Seafood", "Andhra"],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlkHOELaYt-udzwGOdp2s2W7XbJIbvJbBr9Q&s",
        "rating": 4.3,
        "deliveryTime": "25 mins",
        "isActive": true
    },
    {
        "name": "Guntur Tiffins",
        "city_id" : "6824f3333713dab9dbe5521d",
        "city": "Kakinada",
        "cuisine": ["Breakfast", "South Indian"],
        "image": "https://content.jdmagicbox.com/comp/visakhapatnam/i1/0891px891.x891.230329055754.r9i1/catalogue/vrs-guntur-tiffins-visakhapatnam-tiffin-services-4rymm315d3.jpg",
        "rating": 4.2,
        "deliveryTime": "20 mins",
        "isActive": true
    },
    {
        "name": "KFC",
        "city_id" : "6824f3333713dab9dbe5521d",
        "city": "Kakinada",
        "cuisine": ["Fast Food", "Chicken"],
        "image": "https://d2w46d36moy248.cloudfront.net/media/dine/KFC_imVFF4A.jpg",
        "rating": 4.6,
        "deliveryTime": "25 mins",
        "isActive": true
    },
    {
        "name": "Domino's Pizza",
        "city_id" : "6824f3333713dab9dbe5521d",
        "city": "Kakinada",
        "cuisine": ["Pizza", "Italian"],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlkHOELaYt-udzwGOdp2s2W7XbJIbvJbBr9Q&s0",
        "rating": 4.4,
        "deliveryTime": "30 mins",
        "isActive": true
    },
    {
        "name": "Burger King",
        "city_id" : "6824f3333713dab9dbe5521d",
        "city": "Kakinada",
        "cuisine": ["Fast Food", "Burgers"],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlkHOELaYt-udzwGOdp2s2W7XbJIbvJbBr9Q&s",
        "rating": 4.3,
        "deliveryTime": "22 mins",
        "isActive": true
    },
    {
        "name": "Punjabi Zaika",
        "city_id" : "6824f3333713dab9dbe5521d",
        "city": "Kakinada",
        "cuisine": ["Punjabi", "North Indian"],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3aedymBQX4RJ6FcXj2HjHSwnr5gRS_wewfg&s",
        "rating": 4.6,
        "deliveryTime": "35 mins",
        "isActive": true
    },
    {
        "name": "Tandoori Tales",
        "city_id" : "6824f3333713dab9dbe5521d",
        "city": "Kakinada",
        "cuisine": ["Tandoori", "Mughlai"],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:https://b.zmtcdn.com/data/pictures/chains/1/18726111/4dcd3a5664ac6d1dacb0b88567182002.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A&s",
        "rating": 4.4,
        "deliveryTime": "30 mins",
        "isActive": true
    },
    {
        "name": "Bombay Chaat House",
        "city_id" : "6824f3333713dab9dbe5521d",
        "city": "Kakinada",
        "cuisine": ["Street Food", "Chaat"],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlkHOELaYt-udzwGOdp2s2W7XbJIbvJbBr9Q&s",
        "rating": 4.1,
        "deliveryTime": "20 mins",
        "isActive": true
    },
    {
        "name": "Food Court",
        "city_id" : "6824f3333713dab9dbe5521d",
        "city": "Kakinada",
        "cuisine": ["Biryani", "North Indian"],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlkHOELaYt-udzwGOdp2s2W7XbJIbvJbBr9Q&s",
        "rating": 4.5,
        "deliveryTime": "35 mins",
        "isActive": true
    },
    {
        "name": "Hungry Birds",
        "city_id" : "6824f3333713dab9dbe5521d",
        "city": "Kakinada",
        "cuisine": ["Rajasthani", "North Indian"],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPdg8ewaI81KS2VflCoIzAf0Rh-GqMguwDFA&s",
        "rating": 4.4,
        "deliveryTime": "32 mins",
        "isActive": true
    },
    {
        "name": "Siri Fast Foods",
        "city_id" : "6824f3333713dab9dbe5521d",
        "city": "Kakinada",
        "cuisine": ["Gujarati", "Snacks"],
        "image": "https://source.unsplash.com/800x600/?gujarati-food,restaurant",
        "rating": 4.2,
        "deliveryTime": "25 mins",
        "isActive": true
    },
    {
        "name": "Spice Hub",
        "city_id" : "6824f3333713dab9dbe5521e",
        "city": "Visakhapatnam",
        "cuisine": ["South Indian", "Chinese"],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVBJkXS-meeWA94pJm2_C8cIWEoNuEKWGPng&s",
        "rating": 4.5,
        "deliveryTime": "30 mins",
        "isActive": true
    },
    {
        "name": "Coastal Flavours",
        "city_id" : "6824f3333713dab9dbe5521e",
        "city": "Visakhapatnam",
        "cuisine": ["Seafood", "Andhra"],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlkHOELaYt-udzwGOdp2s2W7XbJIbvJbBr9Q&s",
        "rating": 4.3,
        "deliveryTime": "25 mins",
        "isActive": true
    },
    {
        "name": "Guntur Tiffins",
        "city_id" : "6824f3333713dab9dbe5521e",
        "city": "Visakhapatnam",
        "cuisine": ["Breakfast", "South Indian"],
        "image": "https://content.jdmagicbox.com/comp/visakhapatnam/i1/0891px891.x891.230329055754.r9i1/catalogue/vrs-guntur-tiffins-visakhapatnam-tiffin-services-4rymm315d3.jpg",
        "rating": 4.2,
        "deliveryTime": "20 mins",
        "isActive": true
    },
    {
        "name": "KFC",
        "city_id" : "6824f3333713dab9dbe5521e",
        "city": "Visakhapatnam",
        "cuisine": ["Fast Food", "Chicken"],
        "image": "https://d2w46d36moy248.cloudfront.net/media/dine/KFC_imVFF4A.jpg",
        "rating": 4.6,
        "deliveryTime": "25 mins",
        "isActive": true
    },
    {
        "name": "Domino's Pizza",
        "city_id" : "6824f3333713dab9dbe5521e",
        "city": "Visakhapatnam",
        "cuisine": ["Pizza", "Italian"],
        "image": "https://d2w46d36moy248.cloudfront.net/media/dine/KFC_imVFF4A.jpg",
        "rating": 4.4,
        "deliveryTime": "30 mins",
        "isActive": true
    },
    {
        "name": "Burger King",
        "city_id" : "6824f3333713dab9dbe5521e",
        "city": "Visakhapatnam",
        "cuisine": ["Fast Food", "Burgers"],
        "image": "https://d2w46d36moy248.cloudfront.net/media/dine/KFC_imVFF4A.jpg",
        "rating": 4.3,
        "deliveryTime": "22 mins",
        "isActive": true
    },
    {
        "name": "Punjabi Zaika",
        "city_id" : "6824f3333713dab9dbe5521e",
        "city": "Visakhapatnam",
        "cuisine": ["Punjabi", "North Indian"],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3aedymBQX4RJ6FcXj2HjHSwnr5gRS_wewfg&s",
        "rating": 4.6,
        "deliveryTime": "35 mins",
        "isActive": true
    },
    {
        "name": "Tandoori Tales",
        "city_id" : "6824f3333713dab9dbe5521e",
        "city": "Visakhapatnam",
        "cuisine": ["Tandoori", "Mughlai"],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:https://b.zmtcdn.com/data/pictures/chains/1/18726111/4dcd3a5664ac6d1dacb0b88567182002.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A&s",
        "rating": 4.4,
        "deliveryTime": "30 mins",
        "isActive": true
    },
    {
        "name": "Bombay Chaat House",
        "city_id" : "6824f3333713dab9dbe5521e",
        "city": "Visakhapatnam",
        "cuisine": ["Street Food", "Chaat"],
        "image": "https://d2w46d36moy248.cloudfront.net/media/dine/KFC_imVFF4A.jpg",
        "rating": 4.1,
        "deliveryTime": "20 mins",
        "isActive": true
    },
    {
        "name": "Food Court",
        "city_id" : "6824f3333713dab9dbe5521e",
        "city": "Visakhapatnam",
        "cuisine": ["Biryani", "North Indian"],
        "image": "https://d2w46d36moy248.cloudfront.net/media/dine/KFC_imVFF4A.jpg",
        "rating": 4.5,
        "deliveryTime": "35 mins",
        "isActive": true
    },
    {
        "name": "Hungry Birds",
        "city_id" : "6824f3333713dab9dbe5521e",
        "city": "Visakhapatnam",
        "cuisine": ["Rajasthani", "North Indian"],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPdg8ewaI81KS2VflCoIzAf0Rh-GqMguwDFA&s",
        "rating": 4.4,
        "deliveryTime": "32 mins",
        "isActive": true
    },
    {
        "name": "Siri Fast Foods",
        "city_id" : "6824f3333713dab9dbe5521e",
        "city": "Visakhapatnam",
        "cuisine": ["Gujarati", "Snacks"],
        "image": "https://source.unsplash.com/800x600/?gujarati-food,restaurant",
        "rating": 4.2,
        "deliveryTime": "25 mins",
        "isActive": true
    },
    {
        "name": "Spice Hub",
        "city_id" : "6824f3333713dab9dbe5521f",
        "city": "Hyderabad",
        "cuisine": ["South Indian", "Chinese"],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVBJkXS-meeWA94pJm2_C8cIWEoNuEKWGPng&s",
        "rating": 4.5,
        "deliveryTime": "30 mins",
        "isActive": true
    },
    {
        "name": "Coastal Flavours",
        "city_id" : "6824f3333713dab9dbe5521f",
        "city": "Hyderabad",
        "cuisine": ["Seafood", "Andhra"],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlkHOELaYt-udzwGOdp2s2W7XbJIbvJbBr9Q&s",
        "rating": 4.3,
        "deliveryTime": "25 mins",
        "isActive": true
    },
    {
        "name": "Guntur Tiffins",
        "city_id" : "6824f3333713dab9dbe5521f",
        "city": "Hyderabad",
        "cuisine": ["Breakfast", "South Indian"],
        "image": "https://content.jdmagicbox.com/comp/visakhapatnam/i1/0891px891.x891.230329055754.r9i1/catalogue/vrs-guntur-tiffins-visakhapatnam-tiffin-services-4rymm315d3.jpg",
        "rating": 4.2,
        "deliveryTime": "20 mins",
        "isActive": true
    },
    {
        "name": "KFC",
        "city_id" : "6824f3333713dab9dbe5521f",
        "city": "Hyderabad",
        "cuisine": ["Fast Food", "Chicken"],
        "image": "https://d2w46d36moy248.cloudfront.net/media/dine/KFC_imVFF4A.jpg",
        "rating": 4.6,
        "deliveryTime": "25 mins",
        "isActive": true
    },
    {
        "name": "Domino's Pizza",
        "city_id" : "6824f3333713dab9dbe5521f",
        "city": "Hyderabad",
        "cuisine": ["Pizza", "Italian"],
        "image": "https://d2w46d36moy248.cloudfront.net/media/dine/KFC_imVFF4A.jpg",
        "rating": 4.4,
        "deliveryTime": "30 mins",
        "isActive": true
    },
    {
        "name": "Burger King",
        "city_id" : "6824f3333713dab9dbe5521f",
        "city": "Hyderabad",
        "cuisine": ["Fast Food", "Burgers"],
        "image": "https://d2w46d36moy248.cloudfront.net/media/dine/KFC_imVFF4A.jpg",
        "rating": 4.3,
        "deliveryTime": "22 mins",
        "isActive": true
    },
    {
        "name": "Punjabi Zaika",
        "city_id" : "6824f3333713dab9dbe5521f",
        "city": "Hyderabad",
        "cuisine": ["Punjabi", "North Indian"],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3aedymBQX4RJ6FcXj2HjHSwnr5gRS_wewfg&s",
        "rating": 4.6,
        "deliveryTime": "35 mins",
        "isActive": true
    },
    {
        "name": "Tandoori Tales",
        "city_id" : "6824f3333713dab9dbe5521f",
        "city": "Hyderabad",
        "cuisine": ["Tandoori", "Mughlai"],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:https://b.zmtcdn.com/data/pictures/chains/1/18726111/4dcd3a5664ac6d1dacb0b88567182002.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A&s",
        "rating": 4.4,
        "deliveryTime": "30 mins",
        "isActive": true
    },
    {
        "name": "Bombay Chaat House",
        "city_id" : "6824f3333713dab9dbe5521f",
        "city": "Hyderabad",
        "cuisine": ["Street Food", "Chaat"],
        "image": "https://d2w46d36moy248.cloudfront.net/media/dine/KFC_imVFF4A.jpg",
        "rating": 4.1,
        "deliveryTime": "20 mins",
        "isActive": true
    },
    {
        "name": "Food Court",
        "city_id" : "6824f3333713dab9dbe5521f",
        "city": "Hyderabad",
        "cuisine": ["Biryani", "North Indian"],
        "image": "https://d2w46d36moy248.cloudfront.net/media/dine/KFC_imVFF4A.jpg",
        "rating": 4.5,
        "deliveryTime": "35 mins",
        "isActive": true
    },
    {
        "name": "Hungry Birds",
        "city_id" : "6824f3333713dab9dbe5521f",
        "city": "Hyderabad",
        "cuisine": ["Rajasthani", "North Indian"],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPdg8ewaI81KS2VflCoIzAf0Rh-GqMguwDFA&s",
        "rating": 4.4,
        "deliveryTime": "32 mins",
        "isActive": true
    },
    {
        "name": "Siri Fast Foods",
        "city_id" : "6824f3333713dab9dbe5521f",
        "city": "Hyderabad",
        "cuisine": ["Gujarati", "Snacks"],
        "image": "https://source.unsplash.com/800x600/?gujarati-food,restaurant",
        "rating": 4.2,
        "deliveryTime": "25 mins",
        "isActive": true
    },
    {
        "name": "Spice Hub",
        "city_id" : "6824f3333713dab9dbe55220",
        "city": "Chennai",
        "cuisine": ["South Indian", "Chinese"],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVBJkXS-meeWA94pJm2_C8cIWEoNuEKWGPng&s",
        "rating": 4.5,
        "deliveryTime": "30 mins",
        "isActive": true
    },
    {
        "name": "Coastal Flavours",
        "city_id" : "6824f3333713dab9dbe55220",
        "city": "Chennai",
        "cuisine": ["Seafood", "Andhra"],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlkHOELaYt-udzwGOdp2s2W7XbJIbvJbBr9Q&s",
        "rating": 4.3,
        "deliveryTime": "25 mins",
        "isActive": true
    },
    {
        "name": "Guntur Tiffins",
        "city_id" : "6824f3333713dab9dbe55220",
        "city": "Chennai",
        "cuisine": ["Breakfast", "South Indian"],
        "image": "https://content.jdmagicbox.com/comp/visakhapatnam/i1/0891px891.x891.230329055754.r9i1/catalogue/vrs-guntur-tiffins-visakhapatnam-tiffin-services-4rymm315d3.jpg",
        "rating": 4.2,
        "deliveryTime": "20 mins",
        "isActive": true
    },
    {
        "name": "KFC",
        "city_id" : "6824f3333713dab9dbe55220",
        "city": "Chennai",
        "cuisine": ["Fast Food", "Chicken"],
        "image": "https://d2w46d36moy248.cloudfront.net/media/dine/KFC_imVFF4A.jpg",
        "rating": 4.6,
        "deliveryTime": "25 mins",
        "isActive": true
    },
    {
        "name": "Domino's Pizza",
        "city_id" : "6824f3333713dab9dbe55220",
        "city": "Chennai",
        "cuisine": ["Pizza", "Italian"],
        "image": "https://d2w46d36moy248.cloudfront.net/media/dine/KFC_imVFF4A.jpg",
        "rating": 4.4,
        "deliveryTime": "30 mins",
        "isActive": true
    },
    {
        "name": "Burger King",
        "city_id" : "6824f3333713dab9dbe55220",
        "city": "Chennai",
        "cuisine": ["Fast Food", "Burgers"],
        "image": "https://d2w46d36moy248.cloudfront.net/media/dine/KFC_imVFF4A.jpg",
        "rating": 4.3,
        "deliveryTime": "22 mins",
        "isActive": true
    },
    {
        "name": "Punjabi Zaika",
        "city_id" : "6824f3333713dab9dbe55220",
        "city": "Chennai",
        "cuisine": ["Punjabi", "North Indian"],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3aedymBQX4RJ6FcXj2HjHSwnr5gRS_wewfg&s",
        "rating": 4.6,
        "deliveryTime": "35 mins",
        "isActive": true
    },
    {
        "name": "Tandoori Tales",
        "city_id" : "6824f3333713dab9dbe55220",
        "city": "Chennai",
        "cuisine": ["Tandoori", "Mughlai"],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:https://b.zmtcdn.com/data/pictures/chains/1/18726111/4dcd3a5664ac6d1dacb0b88567182002.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A&s",
        "rating": 4.4,
        "deliveryTime": "30 mins",
        "isActive": true
    },
    {
        "name": "Bombay Chaat House",
        "city_id" : "6824f3333713dab9dbe55220",
        "city": "Chennai",
        "cuisine": ["Street Food", "Chaat"],
        "image": "https://d2w46d36moy248.cloudfront.net/media/dine/KFC_imVFF4A.jpg",
        "rating": 4.1,
        "deliveryTime": "20 mins",
        "isActive": true
    },
    {
        "name": "Food Court",
        "city_id" : "6824f3333713dab9dbe55220",
        "city": "Chennai",
        "cuisine": ["Biryani", "North Indian"],
        "image": "https://d2w46d36moy248.cloudfront.net/media/dine/KFC_imVFF4A.jpg",
        "rating": 4.5,
        "deliveryTime": "35 mins",
        "isActive": true
    },
    {
        "name": "Hungry Birds",
        "city_id" : "6824f3333713dab9dbe55220",
        "city": "Chennai",
        "cuisine": ["Rajasthani", "North Indian"],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPdg8ewaI81KS2VflCoIzAf0Rh-GqMguwDFA&s",
        "rating": 4.4,
        "deliveryTime": "32 mins",
        "isActive": true
    },
    {
        "name": "Siri Fast Foods",
        "city_id" : "6824f3333713dab9dbe55220",
        "city": "Chennai",
        "cuisine": ["Gujarati", "Snacks"],
        "image": "https://source.unsplash.com/800x600/?gujarati-food,restaurant",
        "rating": 4.2,
        "deliveryTime": "25 mins",
        "isActive": true
    },
    {
        "name": "Spice Hub",
        "city_id" : "6824f3333713dab9dbe55221",
        "city": "Vijayawada",
        "cuisine": ["South Indian", "Chinese"],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVBJkXS-meeWA94pJm2_C8cIWEoNuEKWGPng&s",
        "rating": 4.5,
        "deliveryTime": "30 mins",
        "isActive": true
    },
    {
        "name": "Coastal Flavours",
        "city_id" : "6824f3333713dab9dbe55221",
        "city": "Vijayawada",
        "cuisine": ["Seafood", "Andhra"],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlkHOELaYt-udzwGOdp2s2W7XbJIbvJbBr9Q&s",
        "rating": 4.3,
        "deliveryTime": "25 mins",
        "isActive": true
    },
    {
        "name": "Guntur Tiffins",
        "city_id" : "6824f3333713dab9dbe55221",
        "city": "Vijayawada",
        "cuisine": ["Breakfast", "South Indian"],
        "image": "https://content.jdmagicbox.com/comp/visakhapatnam/i1/0891px891.x891.230329055754.r9i1/catalogue/vrs-guntur-tiffins-visakhapatnam-tiffin-services-4rymm315d3.jpg",
        "rating": 4.2,
        "deliveryTime": "20 mins",
        "isActive": true
    },
    {
        "name": "KFC",
        "city_id" : "6824f3333713dab9dbe55221",
        "city": "Vijayawada",
        "cuisine": ["Fast Food", "Chicken"],
        "image": "https://d2w46d36moy248.cloudfront.net/media/dine/KFC_imVFF4A.jpg",
        "rating": 4.6,
        "deliveryTime": "25 mins",
        "isActive": true
    },
    {
        "name": "Domino's Pizza",
        "city_id" : "6824f3333713dab9dbe55221",
        "city": "Vijayawada",
        "cuisine": ["Pizza", "Italian"],
        "image": "https://d2w46d36moy248.cloudfront.net/media/dine/KFC_imVFF4A.jpg",
        "rating": 4.4,
        "deliveryTime": "30 mins",
        "isActive": true
    },
    {
        "name": "Burger King",
        "city_id" : "6824f3333713dab9dbe55221",
        "city": "Vijayawada",
        "cuisine": ["Fast Food", "Burgers"],
        "image": "https://d2w46d36moy248.cloudfront.net/media/dine/KFC_imVFF4A.jpg",
        "rating": 4.3,
        "deliveryTime": "22 mins",
        "isActive": true
    },
    {
        "name": "Punjabi Zaika",
        "city_id" : "6824f3333713dab9dbe55221",
        "city": "Vijayawada",
        "cuisine": ["Punjabi", "North Indian"],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3aedymBQX4RJ6FcXj2HjHSwnr5gRS_wewfg&s",
        "rating": 4.6,
        "deliveryTime": "35 mins",
        "isActive": true
    },
    {
        "name": "Tandoori Tales",
        "city_id" : "6824f3333713dab9dbe55221",
        "city": "Vijayawada",
        "cuisine": ["Tandoori", "Mughlai"],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:https://b.zmtcdn.com/data/pictures/chains/1/18726111/4dcd3a5664ac6d1dacb0b88567182002.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A&s",
        "rating": 4.4,
        "deliveryTime": "30 mins",
        "isActive": true
    },
    {
        "name": "Bombay Chaat House",
        "city_id" : "6824f3333713dab9dbe55221",
        "city": "Vijayawada",
        "cuisine": ["Street Food", "Chaat"],
        "image": "https://d2w46d36moy248.cloudfront.net/media/dine/KFC_imVFF4A.jpg",
        "rating": 4.1,
        "deliveryTime": "20 mins",
        "isActive": true
    },
    {
        "name": "Food Court",
        "city_id" : "6824f3333713dab9dbe55221",
        "city": "Vijayawada",
        "cuisine": ["Biryani", "North Indian"],
        "image": "https://d2w46d36moy248.cloudfront.net/media/dine/KFC_imVFF4A.jpg",
        "rating": 4.5,
        "deliveryTime": "35 mins",
        "isActive": true
    },
    {
        "name": "Hungry Birds",
        "city_id" : "6824f3333713dab9dbe55221",
        "city": "Vijayawada",
        "cuisine": ["Rajasthani", "North Indian"],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPdg8ewaI81KS2VflCoIzAf0Rh-GqMguwDFA&s",
        "rating": 4.4,
        "deliveryTime": "32 mins",
        "isActive": true
    },
    {
        "name": "Siri Fast Foods",
        "city_id" : "6824f3333713dab9dbe55221",
        "city": "Vijayawada",
        "cuisine": ["Gujarati", "Snacks"],
        "image": "https://source.unsplash.com/800x600/?gujarati-food,restaurant",
        "rating": 4.2,
        "deliveryTime": "25 mins",
        "isActive": true
    },
    {
        "name": "Spice Hub",
        "city_id" : "6824f3333713dab9dbe55222",
        "city": "Bangalore",
        "cuisine": ["South Indian", "Chinese"],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVBJkXS-meeWA94pJm2_C8cIWEoNuEKWGPng&s",
        "rating": 4.5,
        "deliveryTime": "30 mins",
        "isActive": true
    },
    {
        "name": "Coastal Flavours",
        "city_id" : "6824f3333713dab9dbe55222",
        "city": "Bangalore",
        "cuisine": ["Seafood", "Andhra"],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlkHOELaYt-udzwGOdp2s2W7XbJIbvJbBr9Q&s",
        "rating": 4.3,
        "deliveryTime": "25 mins",
        "isActive": true
    },
    {
        "name": "Guntur Tiffins",
        "city_id" : "6824f3333713dab9dbe55222",
        "city": "Bangalore",
        "cuisine": ["Breakfast", "South Indian"],
        "image": "https://content.jdmagicbox.com/comp/visakhapatnam/i1/0891px891.x891.230329055754.r9i1/catalogue/vrs-guntur-tiffins-visakhapatnam-tiffin-services-4rymm315d3.jpg",
        "rating": 4.2,
        "deliveryTime": "20 mins",
        "isActive": true
    },
    {
        "name": "KFC",
        "city_id" : "6824f3333713dab9dbe55222",
        "city": "Bangalore",
        "cuisine": ["Fast Food", "Chicken"],
        "image": "https://d2w46d36moy248.cloudfront.net/media/dine/KFC_imVFF4A.jpg",
        "rating": 4.6,
        "deliveryTime": "25 mins",
        "isActive": true
    },
    {
        "name": "Domino's Pizza",
        "city_id" : "6824f3333713dab9dbe55222",
        "city": "Bangalore",
        "cuisine": ["Pizza", "Italian"],
        "image": "https://d2w46d36moy248.cloudfront.net/media/dine/KFC_imVFF4A.jpg",
        "rating": 4.4,
        "deliveryTime": "30 mins",
        "isActive": true
    },
    {
        "name": "Burger King",
        "city_id" : "6824f3333713dab9dbe55222",
        "city": "Bangalore",
        "cuisine": ["Fast Food", "Burgers"],
        "image": "https://d2w46d36moy248.cloudfront.net/media/dine/KFC_imVFF4A.jpg",
        "rating": 4.3,
        "deliveryTime": "22 mins",
        "isActive": true
    },
    {
        "name": "Punjabi Zaika",
        "city_id" : "6824f3333713dab9dbe55222",
        "city": "Bangalore",
        "cuisine": ["Punjabi", "North Indian"],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3aedymBQX4RJ6FcXj2HjHSwnr5gRS_wewfg&s",
        "rating": 4.6,
        "deliveryTime": "35 mins",
        "isActive": true
    },
    {
        "name": "Tandoori Tales",
        "city_id" : "6824f3333713dab9dbe55222",
        "city": "Bangalore",
        "cuisine": ["Tandoori", "Mughlai"],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:https://b.zmtcdn.com/data/pictures/chains/1/18726111/4dcd3a5664ac6d1dacb0b88567182002.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A&s",
        "rating": 4.4,
        "deliveryTime": "30 mins",
        "isActive": true
    },
    {
        "name": "Bombay Chaat House",
        "city_id" : "6824f3333713dab9dbe55222",
        "city": "Bangalore",
        "cuisine": ["Street Food", "Chaat"],
        "image": "https://d2w46d36moy248.cloudfront.net/media/dine/KFC_imVFF4A.jpg",
        "rating": 4.1,
        "deliveryTime": "20 mins",
        "isActive": true
    },
    {
        "name": "Food Court",
        "city_id" : "6824f3333713dab9dbe55222",
        "city": "Bangalore",
        "cuisine": ["Biryani", "North Indian"],
        "image": "https://d2w46d36moy248.cloudfront.net/media/dine/KFC_imVFF4A.jpg",
        "rating": 4.5,
        "deliveryTime": "35 mins",
        "isActive": true
    },
    {
        "name": "Hungry Birds",
        "city_id" : "6824f3333713dab9dbe55222",
        "city": "Bangalore",
        "cuisine": ["Rajasthani", "North Indian"],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPdg8ewaI81KS2VflCoIzAf0Rh-GqMguwDFA&s",
        "rating": 4.4,
        "deliveryTime": "32 mins",
        "isActive": true
    },
    {
        "name": "Siri Fast Foods",
        "city_id" : "6824f3333713dab9dbe55222",
        "city": "Bangalore",
        "cuisine": ["Gujarati", "Snacks"],
        "image": "https://source.unsplash.com/800x600/?gujarati-food,restaurant",
        "rating": 4.2,
        "deliveryTime": "25 mins",
        "isActive": true
    },
    {
        "name": "Spice Hub",
        "city_id" : "6824f3333713dab9dbe55223",
        "city": "Delhi",
        "cuisine": ["South Indian", "Chinese"],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVBJkXS-meeWA94pJm2_C8cIWEoNuEKWGPng&s",
        "rating": 4.5,
        "deliveryTime": "30 mins",
        "isActive": true
    },
    {
        "name": "Coastal Flavours",
        "city_id" : "6824f3333713dab9dbe55223",
        "city": "Delhi",
        "cuisine": ["Seafood", "Andhra"],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlkHOELaYt-udzwGOdp2s2W7XbJIbvJbBr9Q&s",
        "rating": 4.3,
        "deliveryTime": "25 mins",
        "isActive": true
    },
    {
        "name": "Guntur Tiffins",
        "city_id" : "6824f3333713dab9dbe55223",
        "city": "Delhi",
        "cuisine": ["Breakfast", "South Indian"],
        "image": "https://content.jdmagicbox.com/comp/visakhapatnam/i1/0891px891.x891.230329055754.r9i1/catalogue/vrs-guntur-tiffins-visakhapatnam-tiffin-services-4rymm315d3.jpg",
        "rating": 4.2,
        "deliveryTime": "20 mins",
        "isActive": true
    },
    {
        "name": "KFC",
        "city_id" : "6824f3333713dab9dbe55223",
        "city": "Delhi",
        "cuisine": ["Fast Food", "Chicken"],
        "image": "https://d2w46d36moy248.cloudfront.net/media/dine/KFC_imVFF4A.jpg",
        "rating": 4.6,
        "deliveryTime": "25 mins",
        "isActive": true
    },
    {
        "name": "Domino's Pizza",
        "city_id" : "6824f3333713dab9dbe55223",
        "city": "Delhi",
        "cuisine": ["Pizza", "Italian"],
        "image": "https://d2w46d36moy248.cloudfront.net/media/dine/KFC_imVFF4A.jpg",
        "rating": 4.4,
        "deliveryTime": "30 mins",
        "isActive": true
    },
    {
        "name": "Burger King",
        "city_id" : "6824f3333713dab9dbe55223",
        "city": "Delhi",
        "cuisine": ["Fast Food", "Burgers"],
        "image": "https://d2w46d36moy248.cloudfront.net/media/dine/KFC_imVFF4A.jpg",
        "rating": 4.3,
        "deliveryTime": "22 mins",
        "isActive": true
    },
    {
        "name": "Punjabi Zaika",
        "city_id" : "6824f3333713dab9dbe55223",
        "city": "Delhi",
        "cuisine": ["Punjabi", "North Indian"],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3aedymBQX4RJ6FcXj2HjHSwnr5gRS_wewfg&s",
        "rating": 4.6,
        "deliveryTime": "35 mins",
        "isActive": true
    },
    {
        "name": "Tandoori Tales",
        "city_id" : "6824f3333713dab9dbe55223",
        "city": "Delhi",
        "cuisine": ["Tandoori", "Mughlai"],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:https://b.zmtcdn.com/data/pictures/chains/1/18726111/4dcd3a5664ac6d1dacb0b88567182002.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A&s",
        "rating": 4.4,
        "deliveryTime": "30 mins",
        "isActive": true
    },
    {
        "name": "Bombay Chaat House",
        "city_id" : "6824f3333713dab9dbe55223",
        "city": "Delhi",
        "cuisine": ["Street Food", "Chaat"],
        "image": "https://d2w46d36moy248.cloudfront.net/media/dine/KFC_imVFF4A.jpg",
        "rating": 4.1,
        "deliveryTime": "20 mins",
        "isActive": true
    },
    {
        "name": "Food Court",
        "city_id" : "6824f3333713dab9dbe55223",
        "city": "Delhi",
        "cuisine": ["Biryani", "North Indian"],
        "image": "https://d2w46d36moy248.cloudfront.net/media/dine/KFC_imVFF4A.jpg",
        "rating": 4.5,
        "deliveryTime": "35 mins",
        "isActive": true
    },
    {
        "name": "Hungry Birds",
        "city_id" : "6824f3333713dab9dbe55223",
        "city": "Delhi",
        "cuisine": ["Rajasthani", "North Indian"],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPdg8ewaI81KS2VflCoIzAf0Rh-GqMguwDFA&s",
        "rating": 4.4,
        "deliveryTime": "32 mins",
        "isActive": true
    },
    {
        "name": "Siri Fast Foods",
        "city_id" : "6824f3333713dab9dbe55223",
        "city": "Delhi",
        "cuisine": ["Gujarati", "Snacks"],
        "image": "https://source.unsplash.com/800x600/?gujarati-food,restaurant",
        "rating": 4.2,
        "deliveryTime": "25 mins",
        "isActive": true
    },
    {
        "name": "Spice Hub",
        "city_id" : "6824f3333713dab9dbe55224",
        "city": "Lucknow",
        "cuisine": ["South Indian", "Chinese"],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVBJkXS-meeWA94pJm2_C8cIWEoNuEKWGPng&s",
        "rating": 4.5,
        "deliveryTime": "30 mins",
        "isActive": true
    },
    {
        "name": "Coastal Flavours",
        "city_id" : "6824f3333713dab9dbe55224",
        "city": "Lucknow",
        "cuisine": ["Seafood", "Andhra"],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlkHOELaYt-udzwGOdp2s2W7XbJIbvJbBr9Q&s",
        "rating": 4.3,
        "deliveryTime": "25 mins",
        "isActive": true
    },
    {
        "name": "Guntur Tiffins",
        "city_id" : "6824f3333713dab9dbe55224",
        "city": "Lucknow",
        "cuisine": ["Breakfast", "South Indian"],
        "image": "https://content.jdmagicbox.com/comp/visakhapatnam/i1/0891px891.x891.230329055754.r9i1/catalogue/vrs-guntur-tiffins-visakhapatnam-tiffin-services-4rymm315d3.jpg",
        "rating": 4.2,
        "deliveryTime": "20 mins",
        "isActive": true
    },
    {
        "name": "KFC",
        "city_id" : "6824f3333713dab9dbe55224",
        "city": "Lucknow",
        "cuisine": ["Fast Food", "Chicken"],
        "image": "https://d2w46d36moy248.cloudfront.net/media/dine/KFC_imVFF4A.jpg",
        "rating": 4.6,
        "deliveryTime": "25 mins",
        "isActive": true
    },
    {
        "name": "Domino's Pizza",
        "city_id" : "6824f3333713dab9dbe55224",
        "city": "Lucknow",
        "cuisine": ["Pizza", "Italian"],
        "image": "https://d2w46d36moy248.cloudfront.net/media/dine/KFC_imVFF4A.jpg",
        "rating": 4.4,
        "deliveryTime": "30 mins",
        "isActive": true
    },
    {
        "name": "Burger King",
        "city_id" : "6824f3333713dab9dbe55224",
        "city": "Lucknow",
        "cuisine": ["Fast Food", "Burgers"],
        "image": "https://d2w46d36moy248.cloudfront.net/media/dine/KFC_imVFF4A.jpg",
        "rating": 4.3,
        "deliveryTime": "22 mins",
        "isActive": true
    },
    {
        "name": "Punjabi Zaika",
        "city_id" : "6824f3333713dab9dbe55224",
        "city": "Lucknow",
        "cuisine": ["Punjabi", "North Indian"],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3aedymBQX4RJ6FcXj2HjHSwnr5gRS_wewfg&s",
        "rating": 4.6,
        "deliveryTime": "35 mins",
        "isActive": true
    },
    {
        "name": "Tandoori Tales",
        "city_id" : "6824f3333713dab9dbe55224",
        "city": "Lucknow",
        "cuisine": ["Tandoori", "Mughlai"],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:https://b.zmtcdn.com/data/pictures/chains/1/18726111/4dcd3a5664ac6d1dacb0b88567182002.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A&s",
        "rating": 4.4,
        "deliveryTime": "30 mins",
        "isActive": true
    },
    {
        "name": "Bombay Chaat House",
        "city_id" : "6824f3333713dab9dbe55224",
        "city": "Lucknow",
        "cuisine": ["Street Food", "Chaat"],
        "image": "https://d2w46d36moy248.cloudfront.net/media/dine/KFC_imVFF4A.jpg",
        "rating": 4.1,
        "deliveryTime": "20 mins",
        "isActive": true
    },
    {
        "name": "Food Court",
        "city_id" : "6824f3333713dab9dbe55224",
        "city": "Lucknow",
        "cuisine": ["Biryani", "North Indian"],
        "image": "https://d2w46d36moy248.cloudfront.net/media/dine/KFC_imVFF4A.jpg",
        "rating": 4.5,
        "deliveryTime": "35 mins",
        "isActive": true
    },
    {
        "name": "Hungry Birds",
        "city_id" : "6824f3333713dab9dbe55224",
        "city": "Lucknow",
        "cuisine": ["Rajasthani", "North Indian"],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPdg8ewaI81KS2VflCoIzAf0Rh-GqMguwDFA&s",
        "rating": 4.4,
        "deliveryTime": "32 mins",
        "isActive": true
    },
    {
        "name": "Siri Fast Foods",
        "city_id" : "6824f3333713dab9dbe55224",
        "city": "Lucknow",
        "cuisine": ["Gujarati", "Snacks"],
        "image": "https://source.unsplash.com/800x600/?gujarati-food,restaurant",
        "rating": 4.2,
        "deliveryTime": "25 mins",
        "isActive": true
    },
    {
        "name": "Spice Hub",
        "city_id" : "6824f3333713dab9dbe55225",
        "city": "Mumbai",
        "cuisine": ["South Indian", "Chinese"],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVBJkXS-meeWA94pJm2_C8cIWEoNuEKWGPng&s",
        "rating": 4.5,
        "deliveryTime": "30 mins",
        "isActive": true
    },
    {
        "name": "Coastal Flavours",
        "city_id" : "6824f3333713dab9dbe55225",
        "city": "Mumbai",
        "cuisine": ["Seafood", "Andhra"],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlkHOELaYt-udzwGOdp2s2W7XbJIbvJbBr9Q&s",
        "rating": 4.3,
        "deliveryTime": "25 mins",
        "isActive": true
    },
    {
        "name": "Guntur Tiffins",
        "city_id" : "6824f3333713dab9dbe55225",
        "city": "Mumbai",
        "cuisine": ["Breakfast", "South Indian"],
        "image": "https://content.jdmagicbox.com/comp/visakhapatnam/i1/0891px891.x891.230329055754.r9i1/catalogue/vrs-guntur-tiffins-visakhapatnam-tiffin-services-4rymm315d3.jpg",
        "rating": 4.2,
        "deliveryTime": "20 mins",
        "isActive": true
    },
    {
        "name": "KFC",
        "city_id" : "6824f3333713dab9dbe55225",
        "city": "Mumbai",
        "cuisine": ["Fast Food", "Chicken"],
        "image": "https://d2w46d36moy248.cloudfront.net/media/dine/KFC_imVFF4A.jpg",
        "rating": 4.6,
        "deliveryTime": "25 mins",
        "isActive": true
    },
    {
        "name": "Domino's Pizza",
        "city_id" : "6824f3333713dab9dbe55225",
        "city": "Mumbai",
        "cuisine": ["Pizza", "Italian"],
        "image": "https://d2w46d36moy248.cloudfront.net/media/dine/KFC_imVFF4A.jpg",
        "rating": 4.4,
        "deliveryTime": "30 mins",
        "isActive": true
    },
    {
        "name": "Burger King",
        "city_id" : "6824f3333713dab9dbe55225",
        "city": "Mumbai",
        "cuisine": ["Fast Food", "Burgers"],
        "image": "https://d2w46d36moy248.cloudfront.net/media/dine/KFC_imVFF4A.jpg",
        "rating": 4.3,
        "deliveryTime": "22 mins",
        "isActive": true
    },
    {
        "name": "Punjabi Zaika",
        "city_id" : "6824f3333713dab9dbe55225",
        "city": "Mumbai",
        "cuisine": ["Punjabi", "North Indian"],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3aedymBQX4RJ6FcXj2HjHSwnr5gRS_wewfg&s",
        "rating": 4.6,
        "deliveryTime": "35 mins",
        "isActive": true
    },
    {
        "name": "Tandoori Tales",
        "city_id" : "6824f3333713dab9dbe55225",
        "city": "Mumbai",
        "cuisine": ["Tandoori", "Mughlai"],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:https://b.zmtcdn.com/data/pictures/chains/1/18726111/4dcd3a5664ac6d1dacb0b88567182002.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A&s",
        "rating": 4.4,
        "deliveryTime": "30 mins",
        "isActive": true
    },
    {
        "name": "Bombay Chaat House",
        "city_id" : "6824f3333713dab9dbe55225",
        "city": "Mumbai",
        "cuisine": ["Street Food", "Chaat"],
        "image": "https://d2w46d36moy248.cloudfront.net/media/dine/KFC_imVFF4A.jpg",
        "rating": 4.1,
        "deliveryTime": "20 mins",
        "isActive": true
    },
    {
        "name": "Food Court",
        "city_id" : "6824f3333713dab9dbe55225",
        "city": "Mumbai",
        "cuisine": ["Biryani", "North Indian"],
        "image": "https://d2w46d36moy248.cloudfront.net/media/dine/KFC_imVFF4A.jpg",
        "rating": 4.5,
        "deliveryTime": "35 mins",
        "isActive": true
    },
    {
        "name": "Hungry Birds",
        "city_id" : "6824f3333713dab9dbe55225",
        "city": "Mumbai",
        "cuisine": ["Rajasthani", "North Indian"],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPdg8ewaI81KS2VflCoIzAf0Rh-GqMguwDFA&s",
        "rating": 4.4,
        "deliveryTime": "32 mins",
        "isActive": true
    },
    {
        "name": "Siri Fast Foods",
        "city_id" : "6824f3333713dab9dbe55225",
        "city": "Mumbai",
        "cuisine": ["Gujarati", "Snacks"],
        "image": "https://source.unsplash.com/800x600/?gujarati-food,restaurant",
        "rating": 4.2,
        "deliveryTime": "25 mins",
        "isActive": true
    },
    {
        "name": "Spice Hub",
        "city_id" : "6824f3333713dab9dbe55226",
        "city": "Kolkata",
        "cuisine": ["South Indian", "Chinese"],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVBJkXS-meeWA94pJm2_C8cIWEoNuEKWGPng&s",
        "rating": 4.5,
        "deliveryTime": "30 mins",
        "isActive": true
    },
    {
        "name": "Coastal Flavours",
        "city_id" : "6824f3333713dab9dbe55226",
        "city": "Kolkata",
        "cuisine": ["Seafood", "Andhra"],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlkHOELaYt-udzwGOdp2s2W7XbJIbvJbBr9Q&s",
        "rating": 4.3,
        "deliveryTime": "25 mins",
        "isActive": true
    },
    {
        "name": "Guntur Tiffins",
        "city_id" : "6824f3333713dab9dbe55226",
        "city": "Kolkata",
        "cuisine": ["Breakfast", "South Indian"],
        "image": "https://content.jdmagicbox.com/comp/visakhapatnam/i1/0891px891.x891.230329055754.r9i1/catalogue/vrs-guntur-tiffins-visakhapatnam-tiffin-services-4rymm315d3.jpg",
        "rating": 4.2,
        "deliveryTime": "20 mins",
        "isActive": true
    },
    {
        "name": "KFC",
        "city_id" : "6824f3333713dab9dbe55226",
        "city": "Kolkata",
        "cuisine": ["Fast Food", "Chicken"],
        "image": "https://d2w46d36moy248.cloudfront.net/media/dine/KFC_imVFF4A.jpg",
        "rating": 4.6,
        "deliveryTime": "25 mins",
        "isActive": true
    },
    {
        "name": "Domino's Pizza",
        "city_id" : "6824f3333713dab9dbe55226",
        "city": "Kolkata",
        "cuisine": ["Pizza", "Italian"],
        "image": "https://d2w46d36moy248.cloudfront.net/media/dine/KFC_imVFF4A.jpg",
        "rating": 4.4,
        "deliveryTime": "30 mins",
        "isActive": true
    },
    {
        "name": "Burger King",
        "city_id" : "6824f3333713dab9dbe55226",
        "city": "Kolkata",
        "cuisine": ["Fast Food", "Burgers"],
        "image": "https://d2w46d36moy248.cloudfront.net/media/dine/KFC_imVFF4A.jpg",
        "rating": 4.3,
        "deliveryTime": "22 mins",
        "isActive": true
    },
    {
        "name": "Punjabi Zaika",
        "city_id" : "6824f3333713dab9dbe55226",
        "city": "Kolkata",
        "cuisine": ["Punjabi", "North Indian"],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3aedymBQX4RJ6FcXj2HjHSwnr5gRS_wewfg&s",
        "rating": 4.6,
        "deliveryTime": "35 mins",
        "isActive": true
    },
    {
        "name": "Tandoori Tales",
        "city_id" : "6824f3333713dab9dbe55226",
        "city": "Kolkata",
        "cuisine": ["Tandoori", "Mughlai"],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:https://b.zmtcdn.com/data/pictures/chains/1/18726111/4dcd3a5664ac6d1dacb0b88567182002.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A&s",
        "rating": 4.4,
        "deliveryTime": "30 mins",
        "isActive": true
    },
    {
        "name": "Bombay Chaat House",
        "city_id" : "6824f3333713dab9dbe55226",
        "city": "Kolkata",
        "cuisine": ["Street Food", "Chaat"],
        "image": "https://d2w46d36moy248.cloudfront.net/media/dine/KFC_imVFF4A.jpg",
        "rating": 4.1,
        "deliveryTime": "20 mins",
        "isActive": true
    },
    {
        "name": "Food Court",
        "city_id" : "6824f3333713dab9dbe55226",
        "city": "Kolkata",
        "cuisine": ["Biryani", "North Indian"],
        "image": "https://d2w46d36moy248.cloudfront.net/media/dine/KFC_imVFF4A.jpg",
        "rating": 4.5,
        "deliveryTime": "35 mins",
        "isActive": true
    },
    {
        "name": "Hungry Birds",
        "city_id" : "6824f3333713dab9dbe55226",
        "city": "Kolkata",
        "cuisine": ["Rajasthani", "North Indian"],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPdg8ewaI81KS2VflCoIzAf0Rh-GqMguwDFA&s",
        "rating": 4.4,
        "deliveryTime": "32 mins",
        "isActive": true
    },
    {
        "name": "Siri Fast Foods",
        "city_id" : "6824f3333713dab9dbe55226",
        "city": "Kolkata",
        "cuisine": ["Gujarati", "Snacks"],
        "image": "https://source.unsplash.com/800x600/?gujarati-food,restaurant",
        "rating": 4.2,
        "deliveryTime": "25 mins",
        "isActive": true
    },
    {
        "name": "Spice Hub",
        "city_id" : "6824f3333713dab9dbe55227",
        "city": "Jaipur",
        "cuisine": ["South Indian", "Chinese"],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVBJkXS-meeWA94pJm2_C8cIWEoNuEKWGPng&s",
        "rating": 4.5,
        "deliveryTime": "30 mins",
        "isActive": true
    },
    {
        "name": "Coastal Flavours",
        "city_id" : "6824f3333713dab9dbe55227",
        "city": "Jaipur",
        "cuisine": ["Seafood", "Andhra"],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlkHOELaYt-udzwGOdp2s2W7XbJIbvJbBr9Q&s",
        "rating": 4.3,
        "deliveryTime": "25 mins",
        "isActive": true
    },
    {
        "name": "Guntur Tiffins",
        "city_id" : "6824f3333713dab9dbe55227",
        "city": "Jaipur",
        "cuisine": ["Breakfast", "South Indian"],
        "image": "https://content.jdmagicbox.com/comp/visakhapatnam/i1/0891px891.x891.230329055754.r9i1/catalogue/vrs-guntur-tiffins-visakhapatnam-tiffin-services-4rymm315d3.jpg",
        "rating": 4.2,
        "deliveryTime": "20 mins",
        "isActive": true
    },
    {
        "name": "KFC",
        "city_id" : "6824f3333713dab9dbe55227",
        "city": "Jaipur",
        "cuisine": ["Fast Food", "Chicken"],
        "image": "https://d2w46d36moy248.cloudfront.net/media/dine/KFC_imVFF4A.jpg",
        "rating": 4.6,
        "deliveryTime": "25 mins",
        "isActive": true
    },
    {
        "name": "Domino's Pizza",
        "city_id" : "6824f3333713dab9dbe55227",
        "city": "Jaipur",
        "cuisine": ["Pizza", "Italian"],
        "image": "https://d2w46d36moy248.cloudfront.net/media/dine/KFC_imVFF4A.jpg",
        "rating": 4.4,
        "deliveryTime": "30 mins",
        "isActive": true
    },
    {
        "name": "Burger King",
        "city_id" : "6824f3333713dab9dbe55227",
        "city": "Jaipur",
        "cuisine": ["Fast Food", "Burgers"],
        "image": "https://d2w46d36moy248.cloudfront.net/media/dine/KFC_imVFF4A.jpg",
        "rating": 4.3,
        "deliveryTime": "22 mins",
        "isActive": true
    },
    {
        "name": "Punjabi Zaika",
        "city_id" : "6824f3333713dab9dbe55227",
        "city": "Jaipur",
        "cuisine": ["Punjabi", "North Indian"],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3aedymBQX4RJ6FcXj2HjHSwnr5gRS_wewfg&s",
        "rating": 4.6,
        "deliveryTime": "35 mins",
        "isActive": true
    },
    {
        "name": "Tandoori Tales",
        "city_id" : "6824f3333713dab9dbe55227",
        "city": "Jaipur",
        "cuisine": ["Tandoori", "Mughlai"],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:https://b.zmtcdn.com/data/pictures/chains/1/18726111/4dcd3a5664ac6d1dacb0b88567182002.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A&s",
        "rating": 4.4,
        "deliveryTime": "30 mins",
        "isActive": true
    },
    {
        "name": "Bombay Chaat House",
        "city_id" : "6824f3333713dab9dbe55227",
        "city": "Jaipur",
        "cuisine": ["Street Food", "Chaat"],
        "image": "https://d2w46d36moy248.cloudfront.net/media/dine/KFC_imVFF4A.jpg",
        "rating": 4.1,
        "deliveryTime": "20 mins",
        "isActive": true
    },
    {
        "name": "Food Court",
        "city_id" : "6824f3333713dab9dbe55227",
        "city": "Jaipur",
        "cuisine": ["Biryani", "North Indian"],
        "image": "https://d2w46d36moy248.cloudfront.net/media/dine/KFC_imVFF4A.jpg",
        "rating": 4.5,
        "deliveryTime": "35 mins",
        "isActive": true
    },
    {
        "name": "Hungry Birds",
        "city_id" : "6824f3333713dab9dbe55227",
        "city": "Jaipur",
        "cuisine": ["Rajasthani", "North Indian"],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPdg8ewaI81KS2VflCoIzAf0Rh-GqMguwDFA&s",
        "rating": 4.4,
        "deliveryTime": "32 mins",
        "isActive": true
    },
    {
        "name": "Siri Fast Foods",
        "city_id" : "6824f3333713dab9dbe55227",
        "city": "Jaipur",
        "cuisine": ["Gujarati", "Snacks"],
        "image": "https://source.unsplash.com/800x600/?gujarati-food,restaurant",
        "rating": 4.2,
        "deliveryTime": "25 mins",
        "isActive": true
    },
    {
        "name": "Spice Hub",
        "city_id" : "6824f3333713dab9dbe55228",
        "city": "Ahmedabad",
        "cuisine": ["South Indian", "Chinese"],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVBJkXS-meeWA94pJm2_C8cIWEoNuEKWGPng&s",
        "rating": 4.5,
        "deliveryTime": "30 mins",
        "isActive": true
    },
    {
        "name": "Coastal Flavours",
        "city_id" : "6824f3333713dab9dbe55228",
        "city": "Ahmedabad",
        "cuisine": ["Seafood", "Andhra"],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlkHOELaYt-udzwGOdp2s2W7XbJIbvJbBr9Q&s",
        "rating": 4.3,
        "deliveryTime": "25 mins",
        "isActive": true
    },
    {
        "name": "Guntur Tiffins",
        "city_id" : "6824f3333713dab9dbe55228",
        "city": "Ahmedabad",
        "cuisine": ["Breakfast", "South Indian"],
        "image": "https://content.jdmagicbox.com/comp/visakhapatnam/i1/0891px891.x891.230329055754.r9i1/catalogue/vrs-guntur-tiffins-visakhapatnam-tiffin-services-4rymm315d3.jpg",
        "rating": 4.2,
        "deliveryTime": "20 mins",
        "isActive": true
    },
    {
        "name": "KFC",
        "city_id" : "6824f3333713dab9dbe55228",
        "city": "Ahmedabad",
        "cuisine": ["Fast Food", "Chicken"],
        "image": "https://d2w46d36moy248.cloudfront.net/media/dine/KFC_imVFF4A.jpg",
        "rating": 4.6,
        "deliveryTime": "25 mins",
        "isActive": true
    },
    {
        "name": "Domino's Pizza",
        "city_id" : "6824f3333713dab9dbe55228",
        "city": "Ahmedabad",
        "cuisine": ["Pizza", "Italian"],
        "image": "https://d2w46d36moy248.cloudfront.net/media/dine/KFC_imVFF4A.jpg",
        "rating": 4.4,
        "deliveryTime": "30 mins",
        "isActive": true
    },
    {
        "name": "Burger King",
        "city_id" : "6824f3333713dab9dbe55228",
        "city": "Ahmedabad",
        "cuisine": ["Fast Food", "Burgers"],
        "image": "https://d2w46d36moy248.cloudfront.net/media/dine/KFC_imVFF4A.jpg",
        "rating": 4.3,
        "deliveryTime": "22 mins",
        "isActive": true
    },
    {
        "name": "Punjabi Zaika",
        "city_id" : "6824f3333713dab9dbe55228",
        "city": "Ahmedabad",
        "cuisine": ["Punjabi", "North Indian"],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3aedymBQX4RJ6FcXj2HjHSwnr5gRS_wewfg&s",
        "rating": 4.6,
        "deliveryTime": "35 mins",
        "isActive": true
    },
    {
        "name": "Tandoori Tales",
        "city_id" : "6824f3333713dab9dbe55228",
        "city": "Ahmedabad",
        "cuisine": ["Tandoori", "Mughlai"],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:https://b.zmtcdn.com/data/pictures/chains/1/18726111/4dcd3a5664ac6d1dacb0b88567182002.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A&s",
        "rating": 4.4,
        "deliveryTime": "30 mins",
        "isActive": true
    },
    {
        "name": "Bombay Chaat House",
        "city_id" : "6824f3333713dab9dbe55228",
        "city": "Ahmedabad",
        "cuisine": ["Street Food", "Chaat"],
        "image": "https://d2w46d36moy248.cloudfront.net/media/dine/KFC_imVFF4A.jpg",
        "rating": 4.1,
        "deliveryTime": "20 mins",
        "isActive": true
    },
    {
        "name": "Food Court",
        "city_id" : "6824f3333713dab9dbe55228",
        "city": "Ahmedabad",
        "cuisine": ["Biryani", "North Indian"],
        "image": "https://d2w46d36moy248.cloudfront.net/media/dine/KFC_imVFF4A.jpg",
        "rating": 4.5,
        "deliveryTime": "35 mins",
        "isActive": true
    },
    {
        "name": "Hungry Birds",
        "city_id" : "6824f3333713dab9dbe55228",
        "city": "Ahmedabad",
        "cuisine": ["Rajasthani", "North Indian"],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPdg8ewaI81KS2VflCoIzAf0Rh-GqMguwDFA&s",
        "rating": 4.4,
        "deliveryTime": "32 mins",
        "isActive": true
    },
    {
        "name": "Siri Fast Foods",
        "city_id" : "6824f3333713dab9dbe55228",
        "city": "Ahmedabad",
        "cuisine": ["Gujarati", "Snacks"],
        "image": "https://source.unsplash.com/800x600/?gujarati-food,restaurant",
        "rating": 4.2,
        "deliveryTime": "25 mins",
        "isActive": true
    }
]    

const citiesData = [
    {
        "city_code" : "KND",
        "city" : "Kakinada"
    },
    {
        "city_code" : "VSKP",
        "city" : "Visakhapatnam"
    },
    {
        "city_code" : "HYD",
        "city" : "Hyderabad"
    },
    {
        "city_code" : "CHN",
        "city" : "Chennai"
    },
    {
        "city_code" : "VJY",
        "city" : "Vijayawada"
    },
    {
        "city_code" : "BNG",
        "city" : "Bangalore"
    },
    {
        "city_code" : "DEL",
        "city" : "Delhi"
    },
    {
        "city_code" : "LKN",
        "city" : "Lucknow"
    },
    {
        "city_code" : "MUM",
        "city" : "Mumbai"
    },
    {
        "city_code" : "KOL",
        "city" : "Kolkata"
    },
    {
        "city_code" : "JAI",
        "city" : "Jaipur"
    },
    {
        "city_code" : "AHM",
        "city" : "Ahmedabad"
    }

]
mongoose.connect('mongodb://127.0.0.1:27017/swiggy_clone')
.then(async ()=>{
    await Restaurant.insertMany(sampleData);
    // await cities.insertMany(citiesData);
    console.log("Data was inserted");
})
.catch(()=>{
    console.log("These was the error while inserting the data");
})
