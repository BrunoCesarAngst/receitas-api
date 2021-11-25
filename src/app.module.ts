import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MulterModule } from '@nestjs/platform-express';
import { ReceitasModule } from './receitas/receitas.module';
import { ImageModule } from './image/image.module';
import { TypegooseModule } from 'nestjs-typegoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://dbuser:dbuser@cluster0.sv15c.mongodb.net/receitasApp',
    ),
    MulterModule.register({
      dest: './files',
    }),
    ReceitasModule,
    ImageModule,
    TypegooseModule.forRoot(
      'mongodb+srv://dbuser:dbuser@cluster0.sv15c.mongodb.net/receitasApp',
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
