import express from "express";
import tutorialController from "../controllers/tutorialController";

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

router.post("/apis/tutorials", (reg, res) => {
    global.logger.info("Processing /apis/tutorials");
    const tutorial = {
        title: "One",
        description: "First book",
        published: true
    };
    tutorialController.create(tutorial)
        .then((data) => {
            global.logger.info("Successfully created tutorial");
            res.status(200).json(`created tutorial ${data}`);
        })
        .catch(() => {
            res.status(500).json({ error: "Error creating tutorial"});
        });
});

router.get("/apis/tutorials", (reg, res) => {
    global.logger.info("Processing get /apis/tutorials");
    tutorialController.findAll()
        .then((data) => {
            global.logger.info("Successfully found tutorials");
            res.status(200).json(data);
        })
        .catch(() => {
            res.status(500).json({ error: "Error finding tutorial"});
        });
});

export default router;