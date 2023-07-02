import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Modules } from "./Modules";

@Index("route_actions_pkey", ["roacId"], { unique: true })
@Index("route_actions_roac_name_key", ["roacName"], { unique: true })
@Entity("route_actions", { schema: "master" })
export class RouteActions {
  @PrimaryGeneratedColumn({ type: "integer", name: "roac_id" })
  roacId: number;

  @Column("character varying", {
    name: "roac_name",
    nullable: true,
    unique: true,
    length: 15,
  })
  roacName: string | null;

  @Column("integer", { name: "roac_orderby", nullable: true })
  roacOrderby: number | null;

  @Column("character", { name: "roac_display", nullable: true, length: 1 })
  roacDisplay: string | null;

  @ManyToOne(() => Modules, (modules) => modules.routeActions)
  @JoinColumn([
    { name: "roac_module_name", referencedColumnName: "moduleName" },
  ])
  roacModuleName: Modules;
}
