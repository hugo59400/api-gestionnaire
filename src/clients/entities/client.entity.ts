import {
  BaseEntity,
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';


import {IsEmail, IsEmpty, IsNotEmpty, Length} from 'class-validator';

@Entity()
export class Client extends BaseEntity {


@PrimaryGeneratedColumn()
  id: number;


 @Column()
  nom: string;

 @Column()
  prenom: string;



 @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;


}