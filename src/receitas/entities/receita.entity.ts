import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ReceitaDocument = Receita & Document;

@Schema()
export class Receita {
  @Prop()
  titulo: string;

  @Prop()
  descricao: string;

  @Prop()
  ingredientes: string;

  @Prop()
  preparo: string;

  @Prop()
  dificuldade: string;

  @Prop()
  tempo: string;

  @Prop()
  rendimento: string;

  @Prop()
  categoria: string;

  @Prop()
  foto: string;
}

export const ReceitaSchema = SchemaFactory.createForClass(Receita);
