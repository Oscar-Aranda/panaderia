import {IsNotEmpty, IsNumber, IsString, MinLength} from 'class-validator';


export class CreatePanDto {
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsNumber()
    @IsNotEmpty()
    @MinLength(2)
    precio: number;

    @IsString()
    @IsNotEmpty()
    descripcion: string;

    @IsString()
    @IsNotEmpty()
    sabor: string;

    @IsString()
    @IsNotEmpty()
    categoria: string;

    @IsString()
    @IsNotEmpty()
    tipo: string;

    @IsString()
    @IsNotEmpty()
    distribuidor: string;
}
