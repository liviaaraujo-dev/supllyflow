import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProductDto } from './dto/product.dto';

@Injectable()
export class ProductService {
     constructor(
    private prisma: PrismaService,
  ) { }
    async create(dto: ProductDto) {
        try {
            const product = await this.prisma.product.create({
                data: {
                    name: dto.name,
                    userId: dto.userId
                }
            });
            
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    async findAll(userId: string) {
        const products = await this.prisma.user.findUnique({
            where: { id: userId },
            select: {
                products: true,
            },
        });
        
        return products.products;
    }
}
