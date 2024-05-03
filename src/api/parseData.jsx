import { useState, useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';
import { BASE_URL } from '../constants/baseURL';

export function SharedData() {
    const [data, setData] = useState([]);

    const folderData = useFetch(`${BASE_URL}sample/folder`);

    useEffect(() => {
        if (folderData) {
            const parsedData = folderData.folder.links.map((link) => ({
                id: link.id,
                created_at: link.created_at,
                url: link.url,
                title: link.title || '',
                description: link.description || '',
                image_source: link.imageSource || '',
                showDot: false,
                showStar: false,
            }));
            setData(parsedData);
        }
    }, [folderData]);

    return data;
}

// 폴더 전체
export function FolderDataAll() {
    const [data, setData] = useState([]);

    const linksData = useFetch(`${BASE_URL}users/1/links`);

    useEffect(() => {
        if (linksData) {
            const parsedData = linksData.data.map((link) => ({
                id: link.id,
                created_at: link.created_at,
                url: link.url,
                title: link.title || '',
                description: link.description || '',
                image_source: link.image_source || '',
                showDot: true,
                showStar: true,
            }));
            setData(parsedData);
        }
    }, [linksData]);

    return data;
}

// 개별 폴더
export function FolderData(folderId) {
    const [data, setData] = useState([]);

    const linksData = useFetch(`${BASE_URL}users/1/links?folderId=${folderId}`);

    useEffect(() => {
        if (linksData) {
            const parsedData = linksData.data.map((folder) => ({
                id: folder.id,
                created_at: folder.created_at,
                url: folder.url,
                title: folder.title || '',
                description: folder.description || '',
                image_source: folder.image_source || '',
                showDot: true,
                showStar: true,
                count: folder.count,
                favorite: folder.favorite,
            }));
            setData(parsedData);
        }
    }, [linksData]);

    return data;
}
