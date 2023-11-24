import { Module } from '@nestjs/common';
import { ConfigService, configService } from './config.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig())
  ],
  providers: [ConfigService]
})
export class ConfigModule {}
