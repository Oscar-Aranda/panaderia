import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PanControllers,  } from './products.controller';
import { PanService } from './produc.service';
import { Pan } from './products/entities/produc.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Pan])],
    controllers: [PanControllers],
    providers: [PanService],
})
export class PanModule {}
