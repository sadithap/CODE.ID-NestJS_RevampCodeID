import { Column, Entity, Index, OneToMany } from "typeorm";
import { EmployeeClientContract } from "./EmployeeClientContract";
import { JobPost } from "./JobPost";
import { ProgramEntity } from "./ProgramEntity";
import { TalentApply } from "./TalentApply";
import { TalentApplyProgress } from "./TalentApplyProgress";

@Index("status_pkey", ["status"], { unique: true })
@Entity("status", { schema: "master" })
export class Status {
  @Column("character varying", { primary: true, name: "status", length: 15 })
  status: string;

  @Column("timestamp without time zone", {
    name: "status_modified_date",
    nullable: true,
  })
  statusModifiedDate: Date | null;

  @OneToMany(
    () => EmployeeClientContract,
    (employeeClientContract) => employeeClientContract.eccoStatus
  )
  employeeClientContracts: EmployeeClientContract[];

  @OneToMany(() => JobPost, (jobPost) => jobPost.jopoStatus)
  jobPosts: JobPost[];

  @OneToMany(() => ProgramEntity, (programEntity) => programEntity.progStatus)
  programEntities: ProgramEntity[];

  @OneToMany(() => TalentApply, (talentApply) => talentApply.taapStatus)
  talentApplies: TalentApply[];

  @OneToMany(
    () => TalentApplyProgress,
    (talentApplyProgress) => talentApplyProgress.taprStatus
  )
  talentApplyProgresses: TalentApplyProgress[];
}
