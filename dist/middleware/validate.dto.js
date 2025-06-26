import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
export function validateDTO(dtoClass) {
    return (req, res, next) => {
        const dtoObj = plainToInstance(dtoClass, req.body);
        validate(dtoObj, { whitelist: true, forbidNonWhitelisted: true }).then((errors) => {
            if (errors.length > 0) {
                const messages = errors
                    .map((error) => { var _a; return Object.values((_a = error.constraints) !== null && _a !== void 0 ? _a : {}); })
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
