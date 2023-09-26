import { Body, Controller, Post } from '@nestjs/common';
import { SupllierService } from './supllier.service';
import { SupllierDto } from './dto/supllier.dto';

@Controller('supllier')
export class SupllierController {
    constructor(private suplliertService: SupllierService) {}

    @Post()
    create(@Body() dto: SupllierDto) {
        return this.suplliertService.create(dto);
    }

}


