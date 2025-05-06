import ormconfig from './ormconfig';
import { Categoria } from './src/categoria/categoria.entity';

async function seed() {
  const dataSource = await ormconfig.initialize();
  const repo = dataSource.getRepository(Categoria);

  const categorias = [
    { nombre: 'Neumáticos' },
    { nombre: 'Chasis' },
    { nombre: 'Motor' },
    { nombre: 'Accesorios' },
  ];

  for (const cat of categorias) {
    const exists = await repo.findOneBy({ nombre: cat.nombre });
    if (!exists) await repo.save(cat);
  }

  await dataSource.destroy();
  console.log('Categorías insertadas...');
}

seed();
