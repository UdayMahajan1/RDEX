const admin = require("firebase-admin");

const serviceAccount = require("./rdex-25d5a-firebase-adminsdk-nf2ca-2f45f59755.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://rdex-25d5a-default-rtdb.firebaseio.com"
});

const database = admin.firestore();

module.exports = database;