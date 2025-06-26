import { IsInt, IsNotEmpty, IsOptional, IsPositive, IsString } from "class-validator";

export class ShoppingItemDTO {
  @IsNotEmpty({ message: "Name is required" })
  @IsString({ message: "Name must be a string" })
  name!: string;
  @IsInt({ message: "Quantity must be an integer" })
  @IsPositive({ message: "Quantity must be positive" })
  quantity!: number;
  @IsInt({ message: "CategoryId must be an integer" })
  @IsPositive({ message: "CategoryId must be positive" })
  categoryId!: number;
}

export class ShoppingUpdateItemDTO {
  @IsOptional()
  @IsString({ message: "Name must be a string" })
  name?: string;
  @IsOptional()
  @IsInt({ message: "Quantity must be an integer" })
  @IsPositive({ message: "Quantity must be positive" })
  quantity?: number;
  @IsOptional()
  @IsInt({ message: "CategoryId must be an integer" })
  @IsPositive({ message: "CategoryId must be positive" })
  categoryId?: number;
}

