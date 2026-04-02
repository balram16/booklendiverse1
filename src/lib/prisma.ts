// Prisma stub - This project uses MongoDB/Mongoose, not Prisma
// This file exists to prevent build errors from legacy code that references Prisma

const prismaStub = new Proxy({} as any, {
  get: () => prismaStub,
  apply: () => Promise.resolve(null),
});

export const prisma = prismaStub;
export default prismaStub;
