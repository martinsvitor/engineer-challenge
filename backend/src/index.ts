import express from 'express';
import { PrismaClient, Prisma, InsuranceType } from '@prisma/client';

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

app.get('/policies', async (req, res) => {
  // console.log('req query ===== ', req.query)
  const { search } = req.query;
  console.log(search);
  // const all_policies = await prisma.policy.findMany();
  // const all_customers = await prisma.customer.findMany();
  // console.log(all_customers, all_policies);

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
              lastName: { contains: search as string, mode: 'insensitive' },
            },
          },
        ],
      }
    : {};

  // const and: Prisma.PolicyWhereInput = search
  //   ? {
  //       AND: [{ insuranceType: { equals: search as InsuranceType } }],
  //     }
  //   : {};

  const policies = await prisma.policy.findMany({
    where: {
      ...or,
      // ...and,
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
