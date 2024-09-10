import db from '@/features/shared/db';

export const findAll = async (page = 1, per_page = 10) => {
  try {
    const articles = await db.article.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      skip: (page - 1) * per_page,
      take: per_page,
    });
    const total = await db.article.count();

    return {
      data: articles,
      pagination: {
        page,
        per_page,
        total,
        total_pages: Math.ceil(total / per_page),
      },
    };
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw new Error('Could not fetch articles');
  }
};
