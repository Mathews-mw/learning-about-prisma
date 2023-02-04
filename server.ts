import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.couser.create({
    data: {
      name: 'Curso de NodeJS',
      duration: 200,
      description: 'Curso para quem quer desenvolver usando da tecnologia Node.'
    }
  })

  console.log(result);
}

main();