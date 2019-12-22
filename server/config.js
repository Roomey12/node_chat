function ExtractJwt(req) {
  let token = null;
  if (req.cookies && req.cookies.token != void 0) {
    token = req.cookies["token"];
  }
  return token;
}

const mongo_uri = "mongodb+srv://admin:admin@cluster0-g2imy.mongodb.net/test?retryWrites=true&w=majority";
module.exports = {
  jwt: {
    jwtFromRequest: ExtractJwt,
    secretOrKey: "TfbTq2NfLzqMcbVY9EpGQ2p"
  },

  expiresIn: "1 day",

  mongo: {
    url: mongo_uri ,//"mongodb://localhost:27017/"
    options: {
      dbName: "chatik",
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  }
};
