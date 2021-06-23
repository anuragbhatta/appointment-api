var firestore = require("../utilities/firestoreConfig");

const bookNow = async (req, res) => {

    const users = await firestore.collection('events').get();

    // get document
    const booking = await firestore.collection('events').doc('booking').get();

    if (!booking.exists) {
        console.log('No document');
        res.send('No document')
    }
    else {
        console.log(booking.data());
        res.send(booking.data())
    }
}

module.exports = {
    bookNow
}