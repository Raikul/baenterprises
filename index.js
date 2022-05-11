const db = [
  {
    id: 1,
    first_name: "Guy",
    last_name: "Jirieck",
    email: "gjirieck0@over-blog.com",
    gender: "Male",
    image: "https://robohash.org/enimautculpa.png?size=50x50&;set=set1",
  },
  {
    id: 2,
    first_name: "Michel",
    last_name: "Yakubov",
    email: "myakubov1@facebook.com",
    gender: "Male",
    image: "https://robohash.org/similiqueipsameaque.png?size=50x50&;set=set1",
  },
  {
    id: 3,
    first_name: "Rafaelia",
    last_name: "Limpkin",
    email: "rlimpkin2@elpais.com",
    gender: "Female",
    image:
      "https://robohash.org/aliquidquasiassumenda.png?size=50x50&;set=set1",
  },
  {
    id: 4,
    first_name: "Krishnah",
    last_name: "Lannin",
    email: "klannin3@cbsnews.com",
    gender: "Male",
    image:
      "https://robohash.org/placeatdebitissuscipit.png?size=50x50&;set=set1",
  },
  {
    id: 5,
    first_name: "Maurise",
    last_name: "Logg",
    email: "mlogg4@ft.com",
    gender: "Male",
    image: "https://robohash.org/voluptatesetest.png?size=50x50&;set=set1",
  },
  {
    id: 6,
    first_name: "Bobbee",
    last_name: "Jereatt",
    email: "bjereatt5@nsw.gov.au",
    gender: "Female",
    image: "https://robohash.org/autvoluptatemfugit.png?size=50x50&;set=set1",
  },
  {
    id: 7,
    first_name: "Rossy",
    last_name: "Dicky",
    email: "rdicky6@blogs.com",
    gender: "Male",
    image: "https://robohash.org/erroromnisplaceat.png?size=50x50&;set=set1",
  },
  {
    id: 8,
    first_name: "Adrian",
    last_name: "Birds",
    email: "abirds7@sakura.ne.jp",
    gender: "Male",
    image: "https://robohash.org/corporistotamest.png?size=50x50&;set=set1",
  },
  {
    id: 9,
    first_name: "Phillip",
    last_name: "Stovine",
    email: "pstovine8@amazonaws.com",
    gender: "Male",
    image: "https://robohash.org/laborenihilaut.png?size=50x50&;set=set1",
  },
  {
    id: 10,
    first_name: "Dynah",
    last_name: "Fitzackerley",
    email: "dfitzackerley9@seesaa.net",
    gender: "Female",
    image:
      "https://robohash.org/temporibusvoluptasmagni.png?size=50x50&;set=set1",
  },
];

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
var cors = require("cors");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.resolve(__dirname, "client/build")));

app.use(cors({ optionsSuccessStatus: 200 }));

app.get("/api/customers", (req, res) => {
  res.json(db);
});

app.get("/api/customers/:customerId", (req, res) => {
  let findCustomer = db.find(
    (customer) => customer.id == req.params.customerId
  );
  res.json(findCustomer);
});

app.post("/api/customers/create", (req, res) => {
  let newObj = req.body;
  let highestId = db.slice().sort((a, b) => a.id - b.id)[db.length - 1].id;

  newObj["id"] = highestId + 1;
  db.push(newObj);
});

app.delete("/api/customers/delete/:customerId", (req, res) => {
  for (let i = 0; i < db.length; i++) {
    if (db[i].id == req.params.customerId) {
      db.splice(i, 1);
      i--;
    }
  }
  res.send("DELETE REQUEST CALLED");
});

app.get("*", (req, res) => {
  console.log("catching all");
  res.sendFile(path.resolve(__dirname, "client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
