import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { JobPost } from "./JobPost";
import { Users } from "./Users";
import { Status } from "./Status";

@Index(
  "talent_apply_progress_pk",
  ["taapEntityId", "taapUserEntityId", "taprId"],
  { unique: true }
)
@Entity("talent_apply_progress", { schema: "job_hire" })
export class TalentApplyProgress {
  @PrimaryGeneratedColumn({ type: "integer", name: "tapr_id" })
  taprId: number;

  @Column("integer", { primary: true, name: "taap_user_entity_id" })
  taapUserEntityId: number;

  @Column("integer", { primary: true, name: "taap_entity_id" })
  taapEntityId: number;

  @Column("timestamp without time zone", {
    name: "tapr_modified_date",
    nullable: true,
  })
  taprModifiedDate: Date | null;

  @Column("character varying", {
    name: "tapr_comment",
    nullable: true,
    length: 256,
  })
  taprComment: string | null;

  @Column("character varying", {
    name: "tapr_progress_name",
    nullable: true,
    length: 55,
  })
  taprProgressName: string | null;

  @ManyToOne(() => JobPost, (jobPost) => jobPost.talentApplyProgresses)
  @JoinColumn([
    { name: "taap_entity_id", referencedColumnName: "jopoEntityId" },
  ])
  taapEntity: JobPost;

  @ManyToOne(() => Users, (users) => users.talentApplyProgresses)
  @JoinColumn([
    { name: "taap_user_entity_id", referencedColumnName: "userEntityId" },
  ])
  taapUserEntity: Users;

  @ManyToOne(() => Status, (status) => status.talentApplyProgresses)
  @JoinColumn([{ name: "tapr_status", referencedColumnName: "status" }])
  taprStatus: Status;
}
