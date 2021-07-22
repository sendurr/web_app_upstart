import express from "express";

const router = express.Router();

router.get("/apis/users", (req, res) => {
    const sampleUsers = [
        {
            "name": "one",
            "id": 1
        },
        {
            "name": "two",
            "id": 2
        },
        {
            "name": "three",
            "id": 3
        }
    ];
    global.logger.info("Processing /apis/users");
    res.status(200).json(sampleUsers);
});

export default router;