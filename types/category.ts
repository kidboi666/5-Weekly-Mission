interface Category {
  id: number;
  created_at?: Date;
  name: string;
  user_id?: number;
  favorite?: boolean;
  link?: {
    count: number;
  };
}

export type { Category };
