import { FirebaseService } from '@geonet-v3/squaremetre-types';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly firebaseService: FirebaseService) {}
  getData(): { message: string } {
    console.log(this.firebaseService.firebaseKey());

    return { message: 'Hello API' };
  }
}
