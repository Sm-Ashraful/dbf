import mongoose from "mongoose";

// const MONGODB_URI = process.env.MONGODB_URI;

// if (!MONGODB_URI) {
//   throw new Error(
//     "Please define the MONGODB_URI environment variable inside .env.local"
//   );
// }

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn; // Return the cached connection if it exists
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };
    cached.promise = mongoose
      .connect(
        "mongodb+srv://smashrafuldev:Z3ryxQr3bdPF0VKW@cluster0.ojc88.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
        opts
      )
      .then((mongoose) => {
        console.log("Db connected");
        return mongoose;
      });
  }

  try {
    cached.conn = await cached.promise; // Await the connection promise
  } catch (e) {
    cached.promise = null; // Reset the promise on error
    throw e; // Rethrow the error
  }

  return cached.conn; // Return the connection
}

export default dbConnect;
