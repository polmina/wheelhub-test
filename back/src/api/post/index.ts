import express from "express";
import { createConnection, getConnection, getRepository } from "typeorm";
import { User } from "../../schemas/user";
import { SHA256 } from "crypto-js";
const router = express.Router();

router.use("/", async (req, res) => {
  try {
    await createConnection({
      type: "sqlite",
      database: ":memory:",
      dropSchema: true,
      entities: [User],
      synchronize: true,
      logging: false,
    });

    checkData(req.body);
    await getRepository(User).insert({
      username: req.body.username,
      password: SHA256(req.body.password),
    });
    let conn = getConnection();
    conn.close();

    res.json({ message: "El usuario se creó correctamente" });
  } catch (err) {
    res.status(err.status).json(err.body);
  }
});
export default router;

function checkData(data) {
  if (typeof data.username !== "string")
    throw error(`username must be string but found ${typeof data.username}`);
  if (typeof data.password !== "string")
    throw error(`password must be string but found ${typeof data.password}`);
}
function error(msg) {
  return { status: 400, body: { message: "Bad Request", hint: msg } };
}
