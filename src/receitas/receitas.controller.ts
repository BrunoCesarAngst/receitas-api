import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  Res,
  UploadedFile,
  HttpStatus,
  Req,
} from '@nestjs/common';
import { ReceitasService } from './receitas.service';
import { CreateReceitaDto } from './dto/create-receita.dto';
import { UpdateReceitaDto } from './dto/update-receita.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('receitas')
export class ReceitasController {
  constructor(private readonly receitasService: ReceitasService) {}

  @Post()
  create(@Body() createReceitaDto: CreateReceitaDto) {
    return this.receitasService.create(createReceitaDto);
  }

  @Get()
  findAll() {
    return this.receitasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.receitasService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReceitaDto: UpdateReceitaDto) {
    return this.receitasService.update(id, updateReceitaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.receitasService.remove(id);
  }

  @Post('/uploadFile')
  @UseInterceptors(
    FileInterceptor('foto', {
      storage: diskStorage({
        destination: './files',
        filename: (req, file, cb) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          return cb(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  uploadFile(@Res() res, @Req() req, @UploadedFile() file) {
    return res.status(HttpStatus.OK).json({
      success: true,
      data: file,
    });
  }

  @Get(':foto')
  getFile(@Param('foto') foto, @Res() res) {
    return res.sendFile(foto, { root: 'files' });
  }
}
