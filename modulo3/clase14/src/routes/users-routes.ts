import { Router } from "express";
import { 
    updateUser,
    deletUser,
    searchByName,
    countByDomain,
    addManyUsers,
    getSortedUsers,
    getByAgeRange,
    getStats
 } from "../controllers/user-controller";
import { validateId } from "../middlewares/validateId-middleware";
import { add } from "../../../clase3/ejercicio5";

let router=Router();

router.get("/", getSortedUsers);
router.get("/search", searchByName);
router.get("/domain", countByDomain);
router.get("/age", getByAgeRange);
router.get("/stats", getStats);

router.put("/:id", validateId, updateUser);
router.delete("/:id", validateId, deletUser);
router.post("/bulk", addManyUsers);

export default router;