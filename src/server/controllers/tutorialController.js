import db from "../models";

const create = (data) => {
    return new Promise((resolve, reject) => {
        db.tutorials.create(data)
            .then((res) => resolve(res))
            .catch((err) => reject(err));
    });
};

const findAll = (data) => {
    return new Promise((resolve, reject) => {
        db.tutorials.findAll()
            .then((res) => resolve(res))
            .catch((err) => reject(err));
    });
};

export default { create, findAll };
