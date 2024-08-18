import { IsDate,IsOptional } from 'class-validator';

export class FindAllNotesQuery {
  @IsDate()
  @IsOptional()
  from: Date
}
