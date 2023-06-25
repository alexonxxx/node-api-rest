import { check } from "express-validator";
import { validateResults } from "../../utils/handleValidator.js";
const validatorCreateItem = [
    check("name").exists().notEmpty(),
    check("album").exists().notEmpty(),
    check("cover").exists().notEmpty(),
    check("artist").exists().notEmpty(),
    check("artist.name").exists().notEmpty(),
    check("artist.nickname").exists().notEmpty(),
    check("mediaId").exists().notEmpty().isMongoId(),
    (req, res, next) => {
        validateResults(req, res, next)
    }

];

export { validatorCreateItem };