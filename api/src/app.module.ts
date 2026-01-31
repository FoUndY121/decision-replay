import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from 'prisma/prisma.module';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DecisionsModule } from './decisions/decisions.module';

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
