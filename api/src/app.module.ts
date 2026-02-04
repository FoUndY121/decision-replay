import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from 'prisma/prisma.module';
import { AppService } from './app.service';
import { DecisionsModule } from './decisions/decisions.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    UsersModule,
    DecisionsModule,
  ],
  providers: [AppService],
})
export class AppModule {}
