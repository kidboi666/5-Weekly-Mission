import { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import { BASE_URL } from "../constants/baseURL";

export interface Card {
    id: string;
    created_at: string;
    url: string;
    title?: string;
    description?: string;
    image_source?: string;
    imageSource?: string;
    showDot?: boolean;
    showStar?: boolean;
}

export interface Folder extends Card {
    favorite: boolean;
    link: {
        count: number;
    };
}

export function useSharedData() {
    const [data, setData] = useState<Card[]>([]);

    const folderData = useFetch(`${BASE_URL}sample/folder`);

    useEffect(() => {
        if (folderData && folderData.folder) {
            const parsedData = folderData.folder.links.map((link: Card) => ({
                id: link.id,
                created_at: link.created_at,
                url: link.url,
                title: link.title || "",
                description: link.description || "",
                image_source: link.imageSource || "",
                showDot: false,
                showStar: false,
            }));
            setData(parsedData);
        }
    }, [folderData]);

    return data;
}

// 폴더 전체
export function useFolderDataAll() {
    const [data, setData] = useState<Card[]>([]);

    const linksData = useFetch(`${BASE_URL}users/1/links`);

    useEffect(() => {
        if (linksData) {
            const parsedData = linksData.data.map((link: Card) => ({
                id: link.id,
                created_at: link.created_at,
                url: link.url,
                title: link.title || "",
                description: link.description || "",
                image_source: link.image_source || "",
                showDot: true,
                showStar: true,
            }));
            setData(parsedData);
        }
    }, [linksData]);

    return data;
}

// 개별 폴더
export function useFolderData(folderId: string) {
    const [data, setData] = useState<Folder[]>([]);

    const linksData = useFetch(`${BASE_URL}users/1/links?folderId=${folderId}`);

    useEffect(() => {
        if (linksData) {
            const parsedData = linksData.data.map((folder: Folder) => ({
                id: folder.id,
                created_at: folder.created_at,
                url: folder.url,
                title: folder.title || "",
                description: folder.description || "",
                image_source: folder.image_source || "",
                showDot: true,
                showStar: true,
                count: folder.link?.count || 0,
                favorite: folder.favorite,
            }));
            setData(parsedData);
        }
    }, [linksData]);

    return data;
}
