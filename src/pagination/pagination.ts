import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// sip --> O skip informa é como se fosse a página atual da paginação. Se a paginação é um array de 5 posições e o skip for igual a 2, então quer dizer que o skip é o terceiro elemento dessa array [0, 1, skip, 3, 4].

// take --> O take é a quantidade de itens que o prisma retorna de dentro da array da paginção a partir do skip. Por exemplo, se o take é igual a dois, então retornará dois elementos. Se o a paginação é um array de 5 elementos, se o skip é igual a 2 e o take é igual a 2, então serão retornados dois elemtnos a partir da terceira posição da array de paginação. 

async function main() {
  let initialSkip = 0;
  let exist = true;

  while(exist) {
    const result = await prisma.courses.findMany({
      skip: initialSkip,
      take: 2
    });

    console.log(`currentPage: ${initialSkip}: `, result);
    initialSkip += 2;

    if(result.length <= 0) {
      exist = false;
    }

  }
}

main();