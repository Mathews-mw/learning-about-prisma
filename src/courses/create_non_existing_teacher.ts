import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

// Caso tenha certeza que não exista um registro da chave estrangeira, então vamos criar um registro junto na tabela da FK.

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: 'Curso de Elixir',
      duration: 350,
      teacher: {
        create: {
          name: 'Rafael Camarda'
        }
      }
    }
  });

  console.log(result);
}

main();