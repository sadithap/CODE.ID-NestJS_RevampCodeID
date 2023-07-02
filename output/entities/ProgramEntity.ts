import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Category } from "./Category";
import { City } from "./City";
import { BusinessEntity } from "./BusinessEntity";
import { Status } from "./Status";
import { ProgramEntityDescription } from "./ProgramEntityDescription";
import { ProgramReviews } from "./ProgramReviews";
import { Sections } from "./Sections";

@Index("program_entity_pk", ["progEntityId"], { unique: true })
@Entity("program_entity", { schema: "curriculum" })
export class ProgramEntity {
  @PrimaryGeneratedColumn({ type: "integer", name: "prog_entity_id" })
  progEntityId: number;

  @Column("character varying", {
    name: "prog_title",
    nullable: true,
    length: 256,
  })
  progTitle: string | null;

  @Column("character varying", {
    name: "prog_headline",
    nullable: true,
    length: 512,
  })
  progHeadline: string | null;

  @Column("character varying", {
    name: "prog_type",
    nullable: true,
    length: 15,
  })
  progType: string | null;

  @Column("character varying", {
    name: "prog_learning_type",
    nullable: true,
    length: 15,
  })
  progLearningType: string | null;

  @Column("numeric", { name: "prog_rating", nullable: true })
  progRating: string | null;

  @Column("integer", { name: "prog_total_trinee", nullable: true })
  progTotalTrinee: number | null;

  @Column("timestamp without time zone", {
    name: "prog_modified_date",
    nullable: true,
  })
  progModifiedDate: Date | null;

  @Column("character varying", {
    name: "prog_image",
    nullable: true,
    length: 256,
  })
  progImage: string | null;

  @Column("character", { name: "prog_best_seller", nullable: true, length: 1 })
  progBestSeller: string | null;

  @Column("numeric", { name: "prog_price", nullable: true })
  progPrice: string | null;

  @Column("character varying", {
    name: "prog_language",
    nullable: true,
    length: 35,
  })
  progLanguage: string | null;

  @Column("timestamp without time zone", {
    name: "prog_modified_data",
    nullable: true,
  })
  progModifiedData: Date | null;

  @Column("integer", { name: "prog_duration", nullable: true })
  progDuration: number | null;

  @Column("character varying", {
    name: "prog_duration_type",
    nullable: true,
    length: 15,
  })
  progDurationType: string | null;

  @Column("character varying", {
    name: "prog_tag_skill",
    nullable: true,
    length: 512,
  })
  progTagSkill: string | null;

  @ManyToOne(() => Category, (category) => category.programEntities)
  @JoinColumn([{ name: "prog_cate_id", referencedColumnName: "cateId" }])
  progCate: Category;

  @ManyToOne(() => City, (city) => city.programEntities)
  @JoinColumn([{ name: "prog_city_id", referencedColumnName: "cityId" }])
  progCity: City;

  @ManyToOne(
    () => BusinessEntity,
    (businessEntity) => businessEntity.programEntities
  )
  @JoinColumn([{ name: "prog_created_by", referencedColumnName: "entityId" }])
  progCreatedBy: BusinessEntity;

  @ManyToOne(() => Status, (status) => status.programEntities)
  @JoinColumn([{ name: "prog_status", referencedColumnName: "status" }])
  progStatus: Status;

  @OneToOne(
    () => ProgramEntityDescription,
    (programEntityDescription) => programEntityDescription.predProgEntity
  )
  programEntityDescription: ProgramEntityDescription;

  @OneToMany(
    () => ProgramReviews,
    (programReviews) => programReviews.prowProgEntity
  )
  programReviews: ProgramReviews[];

  @OneToMany(() => Sections, (sections) => sections.sectProgEntity)
  sections: Sections[];
}
