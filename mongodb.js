const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(connectionURL, { useNewURLParser: true }, (error, client) => {
  if (error) {
    return console.log("Unable to connect to databse!");
  }

  const db = client.db(databaseName);

  // db.collection("users")
  //   .updateOne(
  //     {
  //       _id: new ObjectID("61a602c50991f3131796b4b6"),
  //     },
  //     {
  //       $inc: {
  //         age: 1,
  //       },
  //     }
  //   )
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  // db.collection("users")
  //   .deleteMany({
  //     age: 20,
  //   })
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  db.collection("tasks")
    .deleteOne({
      description: "Task3",
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
});
