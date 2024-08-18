import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { NoteEntity } from './entities/note.entity';
import {
  FindManyOptions,
  FindOptionsWhere,
  LessThan,
  Repository,
} from 'typeorm';
import { FindAllNotesQuery } from './dto/find-all-notes-query.dto';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(NoteEntity)
    private notesRepository: Repository<NoteEntity>,
  ) {}

  create(createNoteDto: CreateNoteDto) {
    const newNote: NoteEntity = this.notesRepository.create({
      ...createNoteDto,
      date: new Date(),
    });
    return this.notesRepository.save(newNote);
  }

  findAll(query: FindAllNotesQuery) {
    const filterWhere: FindOptionsWhere<NoteEntity> = {};
    if (query.from) {
      filterWhere.date = LessThan(query.from);
    }
    return this.notesRepository.find({ where: filterWhere });
  }

  findOne(id: number) {
    return `This action returns a #${id} note`;
  }

  update(id: number, updateNoteDto: UpdateNoteDto) {
    return `This action updates a #${id} note`;
  }

  remove(id: number) {
    return `This action removes a #${id} note`;
  }
}
