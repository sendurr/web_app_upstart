import express from "express";
import tutorialController from "../controllers/tutorialController";
import authorController from "../controllers/authorController";

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

router.post("/apis/tutorials", (req, res) => {
    global.logger.info("Processing /apis/tutorials");
    // Create validator
    const tutorial = {
        title: req.body.title,
        description: req.body.description,
        published: true,
        author_id: req.body.authorId
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

router.get("/apis/tutorials", (req, res) => {
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

router.post("/apis/authors", (req, res) => {
    global.logger.info("Processing post /apis/authors");
    // Create validator
    const author = {
        name: req.body.name
    };
    authorController.create(author)
        .then((data) => {
            global.logger.info("Successfully created author");
            res.status(200).json(`created author ${data}`);
        })
        .catch((err) => {
            global.logger.info(`Error creating author ${err}`);
            res.status(500).json({ error: "Error creating author"});
        });
});

router.get("/apis/authors", (req, res) => {
    global.logger.info("Processing get /apis/authors");
    authorController.findAll()
        .then((data) => {
            global.logger.info("Successfully found authors");
            res.status(200).json(data);
        })
        .catch((err) => {
            global.logger.info(`Error finding author ${err}`);
            res.status(500).json({ error: "Error finding authors"});
        });
});

export default router;