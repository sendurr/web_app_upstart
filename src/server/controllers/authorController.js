import db from "../models";

const create = (data) => {
    return new Promise((resolve, reject) => {
        db.authors.create(data)
            .then((res) => resolve(res))
            .catch((err) => reject(err));
    });
};

const findAll = () => {
    return new Promise((resolve, reject) => {
        db.authors.findAll({
                // include: [{
                //     model: db.tutorials,
                //     as: "author_id"
                // }]
            })
            .then((res) => resolve(res))
            .catch((err) => reject(err));
    });
};

export default { create, findAll };
