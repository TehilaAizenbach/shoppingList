import { IsInt, IsNotEmpty, IsPositive, IsString } from "class-validator";

export class CategoryDTO {
 @IsNotEmpty({ message: "Name is required" })
 @IsString({ message: "Name must be a string" })
  name!: string;
}
