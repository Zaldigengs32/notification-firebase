const { initializeApp, cert } = require("firebase-admin/app");
const { getMessaging } = require("firebase-admin/messaging");
const serviceAccount = require("./serviceAccountKey.json");

initializeApp({
  credential: cert(serviceAccount),
});

const registrationToken =
  "flpH6qjCQAaUnSMZ4vm4Fb:APA91bFzjBACy_Tf1BYHNY9zd7jij4qOPQcUuT9irCendmPQCaQ1lU0STJgCLh-DU6dhXPYvlSeoEItWIrv-3VKwWvwhmUsfoJpskUJGijcAmuw1-S8clgo";

const message = {
  notification: {
    title: "Halo dari FCM!",
    body: "Ini pesan push notifikasi dari Node.js",
  },
  token: registrationToken,
};

getMessaging()
  .send(message)
  .then((response) => {
    console.log("Pesan terkirim:", response);
  })
  .catch((error) => {
    console.error("Gagal kirim pesan:", error);
  });
