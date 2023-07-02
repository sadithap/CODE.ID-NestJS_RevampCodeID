import {
  Column,
  Entity,
  Index,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Users } from "./Users";
import { UsersRoles } from "./UsersRoles";

@Index("roles_pkey", ["roleId"], { unique: true })
@Index("roles_role_name_key", ["roleName"], { unique: true })
@Entity("roles", { schema: "users" })
export class Roles {
  @PrimaryGeneratedColumn({ type: "integer", name: "role_id" })
  roleId: number;

  @Column("character varying", {
    name: "role_name",
    nullable: true,
    unique: true,
    length: 35,
  })
  roleName: string | null;

  @Column("character varying", {
    name: "role_type",
    nullable: true,
    length: 15,
  })
  roleType: string | null;

  @Column("timestamp without time zone", {
    name: "role_modified_date",
    nullable: true,
  })
  roleModifiedDate: Date | null;

  @OneToMany(() => Users, (users) => users.userCurrentRole)
  users: Users[];

  @OneToOne(() => UsersRoles, (usersRoles) => usersRoles.usroRole)
  usersRoles: UsersRoles;
}
