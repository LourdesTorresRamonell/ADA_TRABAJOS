import { Router } from "express";
import { getExternalUsers, searchExternalUser } from "../controllers/external-controller";

let router=Router();

router.get("/users", getExternalUsers);
router.get("/users/search", searchExternalUser);

export default router;