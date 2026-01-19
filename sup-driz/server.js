import express from "express";
import cors from "cors";
import { db } from "./db.js";
import { cars } from "./schema.js";
import { eq, lt, gte, ne } from "drizzle-orm";
import "dotenv/config";

const app = express();
const router = express.Router();
const port = process.env.PORT;

// --- CORS Config ---
const corsConfig = {
  origin: [
    "http://localhost:3000",
    "http://localhost:5173",
    "http://localhost:5174",
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsConfig));

app.use(express.json());

// a middleware function to log each request with the current timestamp and use next middleware to move to the next
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`${timestamp}: ${req.method} ${req.url}`);
  next();
});

// a welcome message endpoint
app.get("/", (req, res) => {
  res.send("Hello From cars api");
});

// cars/v1  it will get all the cars from the database
router.get("/", async (req, res) => {
  const getCars = await db.select().from(cars);
  res.json(getCars);
});

// cars/v1/:id it will get a specific car from the database
router.get("/:id", async (req, res) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    res.status(400).send("id must be a number");
    return;
  }

  const getCarById = await db.select().from(cars).where(eq(cars.id, id));

  if (!getCarById) {
    res.status(404).send("car not found");
    return;
  }

  res.json(getCarById);
});

// cars/v1 it will create a new car in the database
router.post("/", async (req, res) => {
  const { make, model, year, price } = req.body;

  if (!make || !model || !year || !price) {
    res.status(400).send("make, model, year and price are required");
    return;
  }

  // we use [newCar] because we want to return the new car in { "id": 1, ... } a cleaner format rather than [ { "id": 1, ... } ]
  const [newCar] = await db
    .insert(cars)
    .values({
      make,
      model,
      year,
      price,
    })
    .returning();

  res.json(newCar);
});

// cars/v1/:id it will update a specific car in the database
router.put("/:id", async (req, res) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    res.status(400).send("id must be a number");
    return;
  }

  const car = await db.select().from(cars).where(eq(cars.id, id));

  if (!car) {
    res.status(404).send("car not found");
    return;
  }

  const { make, model, year, price } = req.body;

  if (!make || !model || !year || !price) {
    res.status(400).send("make, model, year and price are required");
    return;
  }

  const [updatedCar] = await db
    .update(cars)
    .set({
      make,
      model,
      year,
      price,
    })
    .where(eq(cars.id, id))
    .returning();

  res.json(updatedCar);
});

// cars/v1/:id it will delete a specific car from the database
router.delete("/:id", async (req, res) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    res.status(400).send("id must be a number");
    return;
  }

  const [deletedCar] = await db.delete(cars).where(eq(cars.id, id)).returning();

  res.status(204).json([deletedCar]);
});

// we use the router to specify the routes we want to use
app.use("/cars/v1", router);

app.listen(port, () => {
  console.log(` app listening on port ${port}`);
});
