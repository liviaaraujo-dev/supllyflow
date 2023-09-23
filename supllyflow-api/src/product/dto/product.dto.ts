import { IsNotEmpty, IsString } from "class-validator";

export class ProductDto{

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    userId: string;
}
