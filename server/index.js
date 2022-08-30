import app from "./server.js";
// import "@babel/polyfill"
async function main() {
  const port = process.env.PORT || 5001;
  await app.listen(port);

  console.log(`Application is running in port ${port}`);
}
main();
