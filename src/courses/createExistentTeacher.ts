import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

// Caso já exista o registro da chave estrangeira, basta usar o método connect do Prisma para inserir um registro.

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: 'Curso de NodeJS',
      description: 'Curso de JS voltado para Node',
      duration: 400,
      teacher: {
        connect: {
          id: 'e07f1168-24ae-49b7-ba00-3d5e79d9869c'
        }
      }
    }
  });

  console.log(result);
}

main();