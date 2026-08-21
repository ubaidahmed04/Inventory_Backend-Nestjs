import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { RegionModule } from './region/region.module';
import { BranchModule } from './branch/branch.module';
import { VendorModule } from './vendor/vendor.module';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // .env sab jagah accessible
    AuthModule,
    UserModule,
    PrismaModule,
    RegionModule,
    BranchModule,
    VendorModule,
  ],
  controllers: [AppController],   // <-- ye add karo
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,   // NestJS isko DI se resolve karega
    },
  ],   
})
export class AppModule {}