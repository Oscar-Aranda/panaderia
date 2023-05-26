import { Repository } from "typeorm";
import { InjectRepository } from '@nestjs/typeorm';
import { Pan } from "./products/entities/produc.entity";
import { CreatePanDto } from "./products/dto/produt.dto";



export class PanService {
    constructor(
        @InjectRepository(Pan)
        private readonly panRepository: Repository<Pan>,
    
    ) {}

    findAll() {
        return this.panRepository.find();
    }

    async remove(id: string) {
        const pan = await this.findOne(id);
        await this.panRepository.remove(pan);
        return 'Producto Eliminado con exito';
    }

    findOne(id: string) {
        return this.panRepository.findOneBy({ id });
    }

    async update(id: string, cambios: CreatePanDto) {
        const findPan = await this.findOne(id);
        const updatedPan = await this.panRepository.merge(
            findPan,
            cambios,
        );
        return this.panRepository.save(updatedPan);
    }

    async create(panDto: CreatePanDto) {
        const pan = this.panRepository.create(panDto);
        await this.panRepository.save(pan);
        return pan;
    }
}