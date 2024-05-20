interface Link {
  id: number;
  created_at: string;
  updated_at: string | null;
  url: string;
  title: string;
  description: string | null;
  image_source: string | null;
  folder_id: number;
}

export type { Link };
