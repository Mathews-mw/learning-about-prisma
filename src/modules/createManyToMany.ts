import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Podemos criar varias relações com o Prisma. Nesse exemplo, temos uma tabela courses_modules que guarda a relação de Courses e Modules, fazendo uma relação entre elas de Many to Many. Além disso, um registro também é criado na tabela de teachers, a qual possui relação com courses.

async function main() {
  const result = await prisma.coursesModules.create({
    data: {
      course: {
        create: {
          name: 'NextJs',
          duration: 280,
          description: 'Curso para aprende do zero ao avançado sobre o framework Next.',
          teacher: {
            create: {
              name: 'Diego Fernandes'
            }
          }
        }
      },
      module: {
        create: {
          name: 'Fetch de dados',
          description: 'Fetch de dados no Next, entendo sobre SSR e SSG.'
        }
      }
    }
  });

  console.log(result);
}

main();