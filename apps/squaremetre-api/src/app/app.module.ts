import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GeonetV3SquaremetreTypesModule } from '@geonet-v3/squaremetre-types';

@Module({
  imports: [GeonetV3SquaremetreTypesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
