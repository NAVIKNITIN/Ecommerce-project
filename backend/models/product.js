const mongoose = require('mongoose');

const productschema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please enter product name'],
        trim: true,
        maxlength: [100, 'Product name cannot exceed 100 characters']
    },
    price: {
        type: Number,
        required: [true, 'please enter product price'],
        maxlength: [10, 'Product name cannot exceed 10 characters'],
        default: 0.0
    },
    description: {
        type: String,
        required: [true, 'please enter product description'],

    },
    ratings: {
        type: Number,
        default: 0
    },
    images: [{
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        },

    }],
    category: {
        type: String,
        required: [true, 'please select category for this product'],
        enum: {
            values: [
                "Electronics",
                "Cameras",
                "Laptops",
                "mobiles",
                "mobile Accesories",
                "Food",
                "Books",
                "Clothes",
                "Sports",
                "Outdoor products"

            ],
            message: "please Select correct Category for Product"
        }
    },
    sellers: {
        type: String,
        required: [true, 'please enter product seller'],

    },
    stocks: {
        type: Number,
        required: [true, 'please enter product stock'],
        maxlength: [5, "Product name cannot exceed 5 characters"],
        default: 0
    },
    numofReviews: {
        type: Number,
        default: 0
    },
    reviews: [{
        name: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            required: true
        },
        comment: {
            type: String,
            required: true
        }
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('Product', productschema);