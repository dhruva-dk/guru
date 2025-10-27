import { Module } from '@nestjs/common';
import { NotesModule } from './notes/notes.module';
import { NotesController } from './notes/notes.controller';
import { NotesService } from './notes/notes.service';

@Module({
  imports: [NotesModule],
  controllers: [NotesController],
  providers: [NotesService],
})
export class AppModule {}
