import { type Prisma, PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
import { slugify } from '@/features/shared/helpers/slugify';

const prisma = new PrismaClient();

async function main() {
  const numsOfUsers = 10;
  const userIds: number[] = [];
  for (let i = 0; i < numsOfUsers; i++) {
    const createUserInput: Prisma.UserCreateInput = {
      name: faker.internet.displayName(),
    };

    const user = await prisma.user.upsert({
      where: { name: createUserInput.name },
      update: {},
      create: createUserInput,
    });

    userIds.push(user.id);
  }

  const numsOfArticle = 100000;
  for (let i = 0; i < numsOfArticle; i++) {
    const title = faker.lorem.sentence();
    const userId = faker.helpers.arrayElement(userIds);
    const createArticleInput: Prisma.ArticleCreateInput = {
      title,
      slug: slugify(title),
      detail: faker.lorem.paragraphs({ min: 2, max: 5 }),
      image: faker.image.url(),
      user: { connect: { id: userId } },
    };

    await prisma.article.upsert({
      where: {
        slug: createArticleInput.slug,
      },
      update: {},
      create: createArticleInput,
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
