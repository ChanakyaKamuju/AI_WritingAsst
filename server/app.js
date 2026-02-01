const express = require("express");
const cors = require("cors");
const analyzeRoute = require("./routes/analyze");
const grammerCheckRoute = require("./routes/grammarcheck");
const spellCheckRoute = require("./routes/spellCheck");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;

//Middlewares
app.use(
  cors({
    origin: "https://ai-writingasst-mrc.netlify.app", //replace with your frontend URL
  }),
); //prevent CORS Origin Error
app.use(express.json()); //parse json data

//Routes
app.use("/api/analyze", analyzeRoute);
app.use("/api/grammarcheck", grammerCheckRoute);
app.use("/api/spellCheck", spellCheckRoute);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
