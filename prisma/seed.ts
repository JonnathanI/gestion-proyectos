import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const post1 = await prisma.gestionC.upsert({
    where: { id: 1, telefono: '0956531662' }, // Actualiza con los valores correctos
    update: {},
    create: {
      Name: 'Jaime',
      lastName: 'Tobar',
      telefono: '085631662',
      email: 'ejemplo@gmail.com',
    }
  });
  
  // Modificaciones similares para otras llamadas upsert
  

  const post2 = await prisma.gestionC.upsert({
    where: { id: 2, telefono: '0984656121' },
    update: {},
    create: {
      Name: 'Pablo',
      lastName: 'Solis',
      telefono: '0984656121',
      email: 'ejemplo1@gmail.com',
    }
  });
  
  const post3 = await prisma.gestionC.upsert({
    where: { id: 3, telefono: '0986532121' },
    update: {},
    create: {
      Name: 'Maria',
      lastName: 'Perez',
      telefono: '0986532121',
      email: 'ejemplo2@gmail.com',
    }
  });
  
  const post4 = await prisma.gestionC.upsert({
    where: { id: 4, telefono: '0986532321' },
    update: {},
    create: {
      Name: 'Dayana',
      lastName: 'Solis',
      telefono: '0986532321',
      email: 'ejemplo3@gmail.com',
    }
  });
  
  const post5 = await prisma.gestionC.upsert({
    where: { id: 5, telefono: '0984456121' },
    update: {},
    create: {
      Name: 'Carlos',
      lastName: 'Ortega',
      telefono: '0984456121',
      email: 'ejemplo4@gmail.com',
    }
  });
  


  console.log({ post1, post2,post3,post4,post5 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });