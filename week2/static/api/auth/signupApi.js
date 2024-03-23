const checkEmail = async function(email) {
    try {
        const response = await fetch("https://bootcamp-api.codeit.kr/api/check-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email
            }),
        });
    
        if(response.ok) {
            return { success: true, status: response.status};
        } else {
            return { success: false, status: response.status, message: "이미 사용 중인 이메일입니다."}
        }
    } catch (error) {
        return { success: false, message: "서버와의 통신 중 오류가 발생했습니다.\n다시 시도해주세요." };
    }
}


const submitSignUp = async function(email, password) {
    try {
        const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-up", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password
            }),
        });
    
        if(response.ok) {
            const token = await response.json();
            return { success: true, status: response.status, message: token.data.accessToken};
        } else {
            return { success: false, status: response.status, message: "회원가입 실패"}
        }
    } catch (error) {
        return { success: false, message: "서버와의 통신 중 오류가 발생했습니다.\n다시 시도해주세요." };
    }
}

export { checkEmail, submitSignUp };