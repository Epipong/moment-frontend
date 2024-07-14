export type User = {
  id: number;
  username: string;
  email: string;
  role: "ADMIN" | "USER";
  createdAt: Date;
  updatedAt: Date;
};
