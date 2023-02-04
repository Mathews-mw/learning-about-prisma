import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.findMany({
    where: {
      OR: [
        {name: {
          contains: 'java',
          mode: 'insensitive'
        }}
      ],
      AND: {
        duration: 320
      }
    }
  })

  console.log(result);
}

main();