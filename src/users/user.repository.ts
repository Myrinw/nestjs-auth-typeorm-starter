// src/user/user.repository.ts
import { EntityRepository, Repository } from 'typeorm';
import { User } from './entities/user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  // Add custom database queries or methods here
  findByEmail(email: string) {
    return this.findOne({ where: { email } });
  }
}
