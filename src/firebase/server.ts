
import { initializeApp, getApp, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { getAuth } from 'firebase-admin/auth';
import { getStorage } from 'firebase-admin/storage';
import 'server-only';

// IMPORTANT: Edit this file with your service account credentials
// For more info, see: https://firebase.google.com/docs/admin/setup
//
// const serviceAccount = {
//   "type": "service_account",
//   "project_id": "...",
//   "private_key_id": "...",
//   "private_key": "...",
//   "client_email": "...",
//   "client_id": "...",
//   "auth_uri": "...",
//   "token_uri": "...",
//   "auth_provider_x509_cert_url": "...",
//   "client_x509_cert_url": "...",
//   "universe_domain": "..."
// };

function getAdminApp() {
  if (getApps().length) {
    return getApp();
  } else {
    // If you are running this locally, you may want to load the service account credentials
    // from a local file. You can do that by providing the credential property.
    //
    // For more info, see: https://firebase.google.com/docs/admin/setup
    //
    // return initializeApp({
    //   credential: cert(serviceAccount)
    // });
    //
    // If you are running this on a Google Cloud environment, the SDK will automatically
    // detect the service account credentials and you can initialize the app with no arguments.
    return initializeApp();
  }
}

export function getDb() {
  return getFirestore(getAdminApp());
}

export function getAdminAuth() {
  return getAuth(getAdminApp());
}

export function getAdminStorage() {
    return getStorage(getAdminApp());
}

