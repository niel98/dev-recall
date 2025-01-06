export class ErrorEntity {
  title: string;
  category: string;
  description: string;
  solution: string;
  resources: string[];
  tags: string[];
  isResolved: boolean;
  user: string;
  createdAt: Date;
  updatedAt: Date;
}
