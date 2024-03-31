// 유저 관련 api 모음

const CODEIT_API_URL = 'https://bootcamp-api.codeit.kr/api';

/**
 * 유저 정보 불러오기
 * 
 * @author yum
 * @date 23.03
 * @param String
 * @return application/json
 */
export const fetchUserInfo = async () => {
    const response = await fetch(`${CODEIT_API_URL}/sample/user`, {
        method: 'GET',
    });

    if(!response.ok) {
        throw new Error('fail');
    }

    return response.json();
};

/**
 * 유저 폴더 불러오기
 * 
 * @author yum
 * @date 23.03
 * @param String
 * @return application/json
 */
export const fetchUserFolder = async () => {
    const response = await fetch(`${CODEIT_API_URL}/sample/folder`, {
        method: 'GET',
    });

    if(!response.ok) {
        throw new Error('fail');
    }

    return response.json();
};