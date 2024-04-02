import { APIPATH } from '../constants/path';

export const getProfile = async () => {
    try {
        const response = await fetch(`${APIPATH}/api/sample/user`);

        if (!response.ok) {
            throw new Error('회원 불러오기 실패');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};
