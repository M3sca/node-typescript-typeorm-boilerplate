import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class User extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    default: ""
  })
  firstName: string;

  @Column({
    default: ""
  })
  lastName: string;

  @Column({
    default: ""
  })
  email: string;

}