import db from "../models";

const create = (data) => {
    return new Promise((resolve, reject) => {
        db.author.create(data)
            // .then((res) => resolve(JSON.stringify(res.dataValues)))
            .then((res) => resolve(res.getDataValue('id')))
            .catch((err) => reject(err));
    });
};

const findAll = () => {
    return new Promise((resolve, reject) => {
        db.author.findAll({
                include: [{
                    model: db.tutorial,
                    as: "tutorials",
                    attributes: ["title", "description"]
                    // "tutorials"
                }]
            })
            .then((res) => resolve(res))
            .catch((err) => reject(err));
    });
};

export default { create, findAll };
