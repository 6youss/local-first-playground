import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('notes')
export class NoteEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column({nullable: true})
  date: Date;
}
