
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

// RUN ONCE to set super admin
exports.makeSuperAdmin = functions.https.onCall(async (data, context) => {
  const email = "proptheme@gmail.com";

  // get user by email
  const user = await admin.auth().getUserByEmail(email);

  // assign custom claim
  await admin.auth().setCustomUserClaims(user.uid, {
    role: "super_admin",
    admin: true
  });

  return { message: `Super Admin Set for ${email}` };
});
