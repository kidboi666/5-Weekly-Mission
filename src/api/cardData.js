import { APIPATH } from '../constants/path';

export const getCardData = async () => {
    try {
        const response = await fetch(`${APIPATH}/api/sample/folder`);

        if (!response.ok) {
            throw new Error('데이터 불러오기 실패');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};
