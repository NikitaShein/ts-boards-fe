import { ColumnDto } from "./column.dto";

export class BoardDto {
  public id: number;

  public name: string;

  public created_at: string;

  public updated_at: string;

  public columns: ColumnDto[];
}
