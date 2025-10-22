// api/signup.js
import clientPromise from "./db.js";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Only POST allowed" });

  try {
    const { email, password } = req.body; // Only works if frontend sends JSON
    if (!email || !password) return res.status(400).json({ error: "Missing fields" });

    const client = await clientPromise;
    const db = client.db("app_db");
    const users = db.collection("users");

    await users.createIndex({ email: 1 }, { unique: true });
    const hashed = await bcrypt.hash(password, 10);

    const result = await users.insertOne({
      email: email.toLowerCase(),
      password: hashed,
      createdAt: new Date()
    });

    return res.status(201).json({ ok: true, id: result.insertedId });
  } catch (err) {
    console.error("SIGNUP ERROR:", err);
    if (err.code === 11000) return res.status(409).json({ error: "Email already registered" });
    return res.status(500).json({ error: "Server error" });
  }
}
