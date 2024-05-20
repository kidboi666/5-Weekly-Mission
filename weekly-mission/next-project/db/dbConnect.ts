import { MongoClient } from "mongodb";

const url =
  "mongodb+srv://hs0727:hsjh1004!@cluster0.aeptwaq.mongodb.net/check-email?retryWrites=true&w=majority&appName=Cluster0";
const options: any = { useNewUrlParser: true };

let cachedClient: MongoClient | null = null;

export async function connectDB(): Promise<MongoClient> {
  if (cachedClient) {
    return cachedClient;
  }

  const client = new MongoClient(url, options);
  await client.connect();

  cachedClient = client;
  return client;
}
