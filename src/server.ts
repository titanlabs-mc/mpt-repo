import app from "./config/app";

const PORT = 8050;

app.listen(PORT, () => {
  console.log(`The server is listening on port ${PORT}`)
});