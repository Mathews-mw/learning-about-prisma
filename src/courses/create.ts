import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

// Em caso não tenha certeza que o valor da chave estrangeira exista para criar um novo registro na tabela, usamos então o método connectOrCreate do Prisma

async function createCrouses() {
  const result = await prisma.courses.create({
    data: {
      name: 'Curso de JavaScript',
      duration: 320,
      teacher: {
        connectOrCreate: {
          where: {
            name: 'Juliana Amorin'
          },
          create: {
            name: 'Juliana Amorin'
          }
        }
      }
    }
  });

  console.log(result);
}

createCrouses();