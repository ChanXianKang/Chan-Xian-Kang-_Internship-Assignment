import { MongoClient } from "mongodb";

let cached = global._mongoClientPromise; // cached across lambda invocations

if (!cached) {
  const uri = process.env.MONGODB_URI; // set in Vercel dashboard
  if (!uri) throw new Error("Please define the MONGODB_URI environment variable");
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  cached = client.connect();
  global._mongoClientPromise = cached;
}

export default cached; // resolves to MongoClient
 