import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from "typeorm";
import { Users } from "./Users";
import { Roles } from "./Roles";

@Index("pk_usro_entity_id_and_usro_role_id", ["usroEntityId", "usroRoleId"], {
  unique: true,
})
@Index("unique_usro_role_id", ["usroRoleId"], { unique: true })
@Entity("users_roles", { schema: "users" })
export class UsersRoles {
  @Column("integer", { primary: true, name: "usro_entity_id" })
  usroEntityId: number;

  @Column("integer", { primary: true, name: "usro_role_id" })
  usroRoleId: number;

  @Column("timestamp without time zone", {
    name: "usro_modified_date",
    nullable: true,
  })
  usroModifiedDate: Date | null;

  @ManyToOne(() => Users, (users) => users.usersRoles)
  @JoinColumn([
    { name: "usro_entity_id", referencedColumnName: "userEntityId" },
  ])
  usroEntity: Users;

  @OneToOne(() => Roles, (roles) => roles.usersRoles)
  @JoinColumn([{ name: "usro_role_id", referencedColumnName: "roleId" }])
  usroRole: Roles;
}
