import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude, Expose } from 'class-transformer';

@Entity()
@Exclude()
export class User {
  @PrimaryGeneratedColumn()
  @Expose()
  id: number;

  @Expose()
  @Column({ nullable: false })
  provider: string;

  @Index({ unique: true })
  @Column({ nullable: false })
  email: string;

  @Index({ unique: true })
  providerId: string;

  // todo: add relation to user entity
}
