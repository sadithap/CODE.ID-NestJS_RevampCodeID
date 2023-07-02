import {
  Entity,
  Index,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ProgramEntity } from "./ProgramEntity";
import { Users } from "./Users";

@Index("business_entity_pkey", ["entityId"], { unique: true })
@Entity("business_entity", { schema: "users" })
export class BusinessEntity {
  @PrimaryGeneratedColumn({ type: "integer", name: "entity_id" })
  entityId: number;

  @OneToMany(
    () => ProgramEntity,
    (programEntity) => programEntity.progCreatedBy
  )
  programEntities: ProgramEntity[];

  @OneToOne(() => Users, (users) => users.userEntity)
  users: Users;
}
