import { Injectable } from '@nestjs/common';

@Injectable()
export class FirebaseService {
  public async firebaseKey() {
    return 'firebaseKey';
  }
}
