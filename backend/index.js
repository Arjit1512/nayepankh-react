import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";;
import { register } from "./controllers/auth.js";
import User from "./models/User.js";

/* CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(cors({
  origin: "https://nayepankh-react-7msj-r5h96qmvf-arjits-projects-48c7f67d.vercel.app",
  methods: ["POST", "GET"],
  optionsSuccessStatus: 200,
  credentials: true, // You can add this if you need to pass cookies in the request
}));
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://nayepankh-react-7msj-r5h96qmvf-arjits-projects-48c7f67d.vercel.app");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));


/*ROUTES WITH FILES*/
// app.post('/auth/register',register);
app.post('/auth/register', (req, res) => {
  const { email } = req.body;
  if (!email || !email.endsWith('@gmail.com')) {  
    res.send("invalidemail")
    return
    //return res.status(400).send('Invalid email domain. Only Gmail accounts are allowed.');
  }
  // Proceed to the register controller if the email is valid
  register(req, res);
});
/*ROUTES*/
app.use("/auth",authRoutes);

/*MONGOOSE SETUP*/
const PORT = process.env.PORT || 6001;
mongoose.connect(process.env.MONGO_URL)
.then(()=> {
  app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));


    /*MUST ADD DATA ONLY ONCE*/                //**THIS IS VERY IMPORTANT COMMENT **//
    //User.insertMany(users);
    //Post.insertMany(posts);
})
.catch((error) => {
    console.log(error);
})
