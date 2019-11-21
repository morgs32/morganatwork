const admin = require('firebase-admin');
const moment = require('moment');
require('@google-cloud/storage');

const serviceAccount = JSON.parse(process.env.SERVICE_ACCOUNT);
const adminConfig = {
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  storageBucket: process.env.FIREBASE_BUCKET_NAME,
};

// https://firebase.google.com/docs/admin/setup
// Always use default
if (!admin.apps.length) {
  admin.initializeApp(adminConfig);
}
else {
  admin.app();
}

const firebaseDb = admin.firestore();
const firebaseAuth = admin.auth();

const makeTimestamp = () => {
  return admin.firestore.FieldValue.serverTimestamp();
};

const firebaseBucket = admin.storage().bucket();

const makeSignedUrl = (relativeUrl) => {
  const config = {
    action: 'read',
    expires: moment().add(1, 'days').format('MM-DD-YYYY')
  };
  return firebaseBucket.file(relativeUrl)
    .getSignedUrl(config)
    .then(data => {
      const signedUrl = data[0];
      return signedUrl;
    });
};

module.exports = {
  admin,

  firebaseDb,
  firebaseAuth,

  /**
   * This is different
   */
  firebaseBucket,

  makeTimestamp,
  makeSignedUrl,
};

