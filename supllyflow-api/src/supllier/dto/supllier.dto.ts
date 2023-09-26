import { IsNotEmpty, IsString } from "class-validator";

export class SupllierDto{
    @IsString()
    @IsNotEmpty()
    name: string;

}

