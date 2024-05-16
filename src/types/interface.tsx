export interface Link {
    id: string;
    created_at: string;
    name: string;
    user_id: number;
    favorite: boolean;
    link: {
        count: number;
    };
}

export interface Card {
    id: string;
    url: string;
    showStar?: boolean;
    image_source?: string;
    title?: string;
    description?: string;
    created_at: string;
}
