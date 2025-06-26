"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateDTO = validateDTO;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
function validateDTO(dtoClass) {
    return (req, res, next) => {
        const dtoObj = (0, class_transformer_1.plainToInstance)(dtoClass, req.body);
        (0, class_validator_1.validate)(dtoObj, { whitelist: true, forbidNonWhitelisted: true }).then((errors) => {
            if (errors.length > 0) {
                const messages = errors
                    .map((error) => Object.values(error.constraints ?? {}))
                    .flat();
                return res.status(400).json({ message: "Validation failed", errors: messages });
            }
            else {
                req.body = dtoObj;
                next();
            }
        });
    };
}
