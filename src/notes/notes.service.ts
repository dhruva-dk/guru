import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { Note } from './entities/note.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Note)
    private notesRepository: Repository<Note>,
  ) {}

  async create(createNoteDto: CreateNoteDto): Promise<Note> {
    const note = new Note();
    note.content = createNoteDto.content;

    return this.notesRepository.save(note);
  }

  async findAll(): Promise<Note[]> {
    return this.notesRepository.find();
  }

  async findOne(id: number): Promise<Note> {
    const note = await this.notesRepository.findOneBy({ id });

    if (!note) {
      throw new NotFoundException('Note with id ' + id + ' does not exist');
    }

    return note;
  }

  async update(id: number, updateNoteDto: UpdateNoteDto): Promise<Note> {
    const note = await this.notesRepository.findOneByOrFail({ id: id });

    if (!note) {
      throw new NotFoundException('Note with id ' + id + ' does not exist');
    }

    // Only update note if content is not undefined.
    if (updateNoteDto.content !== undefined) {
      note.content = updateNoteDto.content;
    }

    return this.notesRepository.save(note);
  }

  async remove(id: number): Promise<void> {
    await this.notesRepository.delete(id);
  }
}
