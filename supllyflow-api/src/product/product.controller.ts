import { Body, Controller, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { ProductDto } from './dto/product.dto';
import { AuthService } from 'src/auth/auth.service';
import { ProductService } from './product.service';
import { GetUser } from 'src/auth/decorator';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) {}

    @Post()
    create(@Body() dto: ProductDto) {
        return this.productService.create(dto);
    }

    @Get(':id')
    findAll(
        @Param('id') id: string
    ) {
        return this.productService.findAll(id);
    }
}
