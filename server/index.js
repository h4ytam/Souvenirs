import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/posts.js";

const app = express();
app.use("/posts", postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// const CONNECTION_URL = `mongodb+srv://haytam:Haytam20@cluster0-do0lw.mongodb.net/test?retryWrites=true&w=majority`;
const CONNECTION_URL = `mongodb://haytam:Haytam20@cluster0-shard-00-00.do0lw.mongodb.net:27017,cluster0-shard-00-01.do0lw.mongodb.net:27017,cluster0-shard-00-02.do0lw.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority`;
const PORT = process.env.PORT || 5000;
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on ${PORT}`)))
  .catch((err) => console.log(err.message));
mongoose.set("useFindAndModify", false);
