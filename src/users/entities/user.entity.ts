// src/user/entities/user.entity.ts
import { Exclude, Expose } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export const ADMIN = 'admin';
export const USER = 'user';

@Exclude()
@Entity()
export class User {
  @Expose({ groups: [ADMIN, USER] })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Expose({ groups: [ADMIN, USER] })
  @Column()
  @Column()
  firstname: string;

  @Expose({ groups: [ADMIN, USER] })
  @Column({ nullable: true })
  lastname: string;

  @Expose({ groups: [ADMIN, USER] })
  @Column({ unique: true })
  email: string;

  @Expose({ groups: [ADMIN] })
  @Column({ default: false })
  email_verified: boolean;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: [ADMIN, USER],
    default: USER,
  })
  role: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  //   @OneToMany(() => Course, (course) => course.user)
  //   courses: Course[];

  //   @OneToMany(
  //     () => CourseEnrollment,
  //     (courseEnrollment) => courseEnrollment.user,
  //   )
  //   enrollments: CourseEnrollment[];
  //   @OneToMany(() => Payment, (payment) => payment.user)
  //   payments: Payment[];

  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }
}
