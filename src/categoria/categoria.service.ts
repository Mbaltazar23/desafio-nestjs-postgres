import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Categoria } from './categoria.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository(Categoria)
    private categoriaRepo: Repository<Categoria>,
  ) {}

  async findOne(id: number) {
    const categoria = await this.categoriaRepo.findOneBy({ id });
    if (!categoria) {
      throw new NotFoundException({ error: 'Categoría no encontrada' });
    }
    return categoria;
  }
}
