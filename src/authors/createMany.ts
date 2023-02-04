import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// A função createMany do Prisma serve pra criar em uma relação de um para muitos. No caso, Um autor tem a relação de 1xn com livros.

async function main() {
  const result = await prisma.authors.create({
    data: {
      name: 'Neil Gaiman',
      books: {
        createMany: {
          data: [
            {name: 'Sand Man'},
            {name: 'Deuses Americanos'},
            {name: 'Coraline'}
          ]
        }
      }
    }
  });

  console.log(result);
}

main();