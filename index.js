import app from "./app.js";

import { connectToDB } from "./utils/mongoose.js";

const main = async () => {
  await connectToDB();

  app.listen(3000, () => {
    console.log("Server listening on port 3000");
  });
};

main();
