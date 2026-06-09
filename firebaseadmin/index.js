const { initializeApp, cert } = require("firebase-admin/app");
const { getMessaging } = require("firebase-admin/messaging");
const serviceAccount = require("./serviceAccountKey.json");

// Inisialisasi Firebase Admin
initializeApp({
  credential: cert(serviceAccount),
});

// Token device yang didapat dari React Native app
const registrationToken =
  "fXdD-UQNSwCh8enM9QjaSs:APA91bFhaPjl1xilDgFdldVFBxzXtTO1ho--gk63kmtp7FrfSrVztOJN60EhBctkirltmEINfHz7Pc86xm_PiNLLjrLqVCcYHtKM3KwOBWdUlGdG8bMLoMA";

const message = {
  notification: {
    title: "Halo dari FCM!",
    body: "Ini pesan push notifikasi dari Node.js",
  },
  token: registrationToken,
};

// Kirim pesan
getMessaging()
  .send(message)
  .then((response) => {
    console.log("Pesan terkirim:", response);
  })
  .catch((error) => {
    console.error("Gagal kirim pesan:", error);
  });
