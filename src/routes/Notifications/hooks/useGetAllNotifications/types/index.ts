export interface Notification {
  id: string;
  created: string;
  createBy: string;
  lastUpdated: string;
  lastUpdateBy: string;
  userId: string;
  product: string;
  productId: string;
  isRead: boolean;
  title: string;
  description: string;
  isArchived: boolean;
  redirectUrl: string;
}
