import express, { Request, Response } from 'express';
import { PrismaClient, Prisma, InsuranceType } from './generated/client';

const app = express();
const port = 4000;
const prisma = new PrismaClient();

app.use(express.json());

let allowCrossDomain = function (
  req: any,
  res: { header: (arg0: string, arg1: string) => void },
  next: () => void
) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
};
app.use(allowCrossDomain);

app.get('/policies', async (req: Request, res: Response) => {
  const { search } = req.query;

  const or: Prisma.PolicyWhereInput = search
    ? {
        OR: [
          { provider: { contains: search as string, mode: 'insensitive' } },
          {
            customer: {
              firstName: { contains: search as string, mode: 'insensitive' },
            },
          },
          {
            customer: {
              family: {
                some: {
                  firstName: {
                    contains: search as string,
                    mode: 'insensitive',
                  },
                },
              },
            },
          },
          {
            customer: {
              lastName: { contains: search as string, mode: 'insensitive' },
            },
          },
          {
            customer: {
              family: {
                some: {
                  lastName: {
                    contains: search as string,
                    mode: 'insensitive',
                  },
                },
              },
            },
          },
        ],
      }
    : {};
  let isInsType = false;
  if (search === 'LIABILITY' || search === 'HEALTH' || search === 'HOUSEHOLD') {
    isInsType = true;
  }
  const also: Prisma.PolicyWhereInput = isInsType
    ? {
        OR: [{ insuranceType: { equals: search as InsuranceType } }],
      }
    : {};

  const policies = await prisma.policy.findMany({
    where: {
      ...or,
      ...also,

      status: {
        in: ['ACTIVE', 'PENDING'],
      },
    },
    select: {
      id: true,
      provider: true,
      insuranceType: true,
      status: true,
      startDate: true,
      endDate: true,
      customer: {
        select: {
          id: true,
          firstName: true,
          lastName: true,
          dateOfBirth: true,
          family: true,
        },
      },
    },
  });

  res.json(policies);
});

app.get('/', (req, res) => {
  res.send('Server is up and running 🚀');
});

app.listen(port, () => {
  console.log(`🚀  Server ready at ${port}`);
});
