
import { MongoClient } from "mongodb";
const uri = "mongodb+srv://eiklutro:jVPE6lFvOSrAC4QR@eksam-db.ryokx3p.mongodb.net/test";
const client = new MongoClient(uri);

async function runUpdate() {
  try {
    const database = client.db("exam-db");
    const movies = database.collection("test.shoes");
    const filter = { title: "Cool shoe" };
    
    const result = await movies.updateOne(filter, updateDoc, options);
    console.log(
      `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
    );
  } finally {
    await client.close();
  }
}
runUpdate().catch(console.dir);




// DELETE

async function runDelete() {
  try {
    const database = client.db("exam-db");
    const movies = database.collection("test.shoes");

    // Query for a movie that has title "Cool Shoe"
    const query = { title: "Cool shoe" };

    const result = await movies.deleteOne(query);
    if (result.deletedCount === 1) {
      console.log("Successfully deleted one document.");
    } else {
      console.log("No documents matched the query. Deleted 0 documents.");
    }
  } finally {
    await client.close();
  }
}
runDelete().catch(console.dir);

