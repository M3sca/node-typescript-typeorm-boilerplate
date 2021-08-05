import * as express from "express";
import { userGetAll, userSave } from "../controllers/user.controller";
const router = express.Router();

router.get('/', async (req, res) => {
    res.send(`Users: ${JSON.stringify(await userGetAll())}`);
});

router.post('/', async (req, res) => {
    res.send(`Users saved: ${JSON.stringify(await userSave(req.body))}`);
});

// Export the router
export = router;