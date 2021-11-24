import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MulterModule } from '@nestjs/platform-express';
import { ReceitasModule } from './receitas/receitas.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://dbuser:dbuser@cluster0.sv15c.mongodb.net/receitasApp',
    ),
    MulterModule.register({
      dest: './fotos',
    }),
    ReceitasModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
