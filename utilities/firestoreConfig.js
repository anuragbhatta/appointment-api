const admin = require('firebase-admin');
var serviceAccount = require("../appointment-39654.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    // databaseURL: "https://fir-api-9a206..firebaseio.com"
});
const db = admin.firestore();
module.exports = db;