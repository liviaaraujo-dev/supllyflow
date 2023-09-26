import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProductModule } from './product/product.module';
import { ModuleModule } from './module/module.module';
import { SupplierModule } from './supplier/supplier.module';
import { SupllierModule } from './supllier/supllier.module';
import { TesteModule } from './teste/teste.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    UserModule,
    PrismaModule,
    ProductModule,
    ModuleModule,
    SupplierModule,
    SupllierModule,
    TesteModule,
  ],
})
export class AppModule {}
