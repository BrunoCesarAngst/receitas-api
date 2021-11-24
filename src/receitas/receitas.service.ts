import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateReceitaDto } from './dto/create-receita.dto';
import { UpdateReceitaDto } from './dto/update-receita.dto';
import { Receita, ReceitaDocument } from './entities/receita.entity';

@Injectable()
export class ReceitasService {
  constructor(
    @InjectModel(Receita.name) private receitaModel: Model<ReceitaDocument>,
  ) {}

  create(createReceitaDto: CreateReceitaDto) {
    const receita = new this.receitaModel(createReceitaDto);
    return receita.save();
  }

  findAll() {
    return this.receitaModel.find().exec();
  }

  findOne(id: string) {
    return this.receitaModel.findOne({ _id: id }).exec();
  }

  update(id: string, updateReceitaDto: UpdateReceitaDto) {
    return this.receitaModel
      .findByIdAndUpdate({ _id: id }, updateReceitaDto, { new: true })
      .exec();
  }

  remove(id: string) {
    return this.receitaModel.deleteOne({ _id: id }).exec();
  }
}
