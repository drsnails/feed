
const dbService = require('../../services/db.service')
// const reviewService = require('../review/review.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    query,
    getById,
    // getByEmail,
    // remove,
    // update,
    add
}

async function query(filterBy) {
    filterBy = filterBy || ''
    const criteria = _buildCriteria(filterBy)
    console.log("query -> criteria", criteria)
    const collection = await dbService.getCollection('comment')
    try {

        const comments = await collection.find(criteria).toArray();
        // comments.forEach(comment => delete comment.password);


        return comments
    } catch (err) {
        throw err;
    }
}

async function getById(commentId) {
    const collection = await dbService.getCollection('comment')
    try {
        const comment = await collection.findOne({ "_id": ObjectId(commentId) })
        return comment

    } catch (err) {
        throw err;
    }
}
// async function getByEmail(email) {
//     const collection = await dbService.getCollection('comment')
//     try {
//         const comment = await collection.findOne({ email })
//         return comment
//     } catch (err) {
//         throw err;
//     }
// }


// async function remove(commentId) {
//     const collection = await dbService.getCollection('comment')
//     try {
//         await collection.deleteOne({ "_id": ObjectId(commentId) })
//     } catch (err) {
//         throw err;
//     }
// }

async function add(comment) {
    const collection = await dbService.getCollection('comment')
    try {
        await collection.insertOne(comment);
        return comment;
    } catch (err) {
        throw err;
    }
}


// async function update(comment) {
//     comment.price = +comment.price
//     comment.updatedAt = Date.now()
//     const collection = await dbService.getCollection('comment')
//     comment._id = ObjectId(comment._id);

//     try {
//         await collection.replaceOne({ "_id": comment._id }, { $set: comment })
//         return comment
//     } catch (err) {
//         throw err;
//     }
// }


function _buildCriteria(filterBy) {
    const criteria = {};
    // return criteria
    if (filterBy.filter) {
        criteria.name = { $regex: new RegExp(filterBy.filter, 'ig') }
    }

    // return criteria
    // if (!filterBy.maxPrice) {
    //     filterBy.maxPrice = Infinity
    // }
    // if (!filterBy.minPrice) {
    //     filterBy.minPrice = -Infinity
    // }

    // if (filterBy.minPrice) {
    //     criteria.price = { $gte: +filterBy.minPrice, $lte: +filterBy.maxPrice }
    // }

    // criteria.inStock =(filterBy.inStock ==="false")?{ $in: [true, false] }:true
    


    // if (filterBy.type === "All") return criteria
    // criteria.type = filterBy.type
    return criteria;
}


