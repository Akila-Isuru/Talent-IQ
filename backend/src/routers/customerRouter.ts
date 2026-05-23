import { Router } from "express";
import { getCustomer, saveCustomer } from "../controllers/customerController";

const router = Router();

router.get("/", getCustomer);
router.post("/", saveCustomer);

export default router;

// import { Router } from "express";
// import { getCustomer } from "../controllers/customerController";

// const router = Router();

// router.get("/", getCustomer);

// export default router;
