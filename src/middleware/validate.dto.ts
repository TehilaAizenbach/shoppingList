import { plainToInstance } from "class-transformer";
import { validate, ValidationError } from "class-validator";
import { Request, Response, NextFunction } from "express";

export function validateDTO<T extends object>(dtoClass: new () => T) {
  return (req: Request, res: Response, next: NextFunction) => {
    const dtoObj = plainToInstance(dtoClass, req.body);
    validate(dtoObj, { whitelist: true, forbidNonWhitelisted: true }).then(
      (errors: ValidationError[]) => {
        if (errors.length > 0) {
          const messages = errors
            .map((error) => Object.values(error.constraints ?? {}))
            .flat();
          return res.status(400).json({ message: "Validation failed", errors: messages });
        } else {
          req.body = dtoObj; 
          next();
        }
      }
    );
  };
}
