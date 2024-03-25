import { Trail, User, Journey } from '@prisma/client';

export type SafeTrail = Omit<
  Trail,
  "createdAt"
> & {
  createdAt: string;
}

export type SafeJourney = Omit<
    Journey,
  "createdAt" | "startDate" | "endDate"
> & {
  createdAt: string;
  startDate: string;
  endDate: string;
}

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};