import { Module } from '@nestjs/common';
import { FirebaseService } from './service/firebase.service';

@Module({
  controllers: [],
  providers: [FirebaseService],
  exports: [FirebaseService],
})
export class GeonetV3SquaremetreTypesModule {}
