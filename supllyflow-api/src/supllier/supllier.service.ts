import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SupllierDto } from './dto/supllier.dto';

@Injectable()
export class SupllierService {
    constructor(
        private prisma: PrismaService,
      ) { }
        async create(dto: SupllierDto) {
            try {
                const product = await this.prisma.product.create({
                    data: {
                        name: dto.name,
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
    

