import { FolderId } from "@components/Folder";

export interface LinkData {
  data: {
    id: number;
    title: string;
    created_at: string;
    url: string;
    description?: string;
    image_source?: string;
  }[];
}

export async function fetchLinkData(folderId: FolderId) {
  const query = folderId ? `?folderId=${folderId}` : "";
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/users/1/links${query}`
  );
  if (!response.ok) {
    throw new Error("링크 리스트를 불러오는 데 실패했습니다.");
  }
  const result = await response.json();

  return result;
}
