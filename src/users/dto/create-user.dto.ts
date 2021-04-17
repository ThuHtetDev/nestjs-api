import { IsString, Max, MaxLength } from "class-validator";

// Schema (Data Transfer Object)
export class CreateUserDTO{
    id: number;

    @IsString()
    @MaxLength(10)
    name:string;
}