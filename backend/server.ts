import app from "./src/app";

const port = 4242;

app.listen(port, () => {
  console.log(`Api rodando em http://localhost:${port}`)
})