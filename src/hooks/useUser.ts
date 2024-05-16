import { useState, useEffect } from "react";
import { BASE_URL } from "../constants/baseURL";

export const useSignIn = async (email: string, password: string) => {
    try {
        const response = await fetch(`${BASE_URL}sign-in`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email,
                password,
            }),
        });

        if (!response.ok) throw new Error("Error post data");
        const data = await response.json();
        // 로그인 성공 시 accessToken을 로컬 스토리지에 저장
        localStorage.setItem("accessToken", data.accessToken);
        return data;
    } catch (error) {
        throw new Error(`Error login: `);
    }
};

export const useSignUp = async (email: string, password: string) => {
    try {
        const response = await fetch(`${BASE_URL}sign-up`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email,
                password,
            }),
        });

        if (!response.ok) throw new Error("Error post data");
        const data = await response.json();
        // 회원가입 성공 시 accessToken을 로컬 스토리지에 저장
        localStorage.setItem("accessToken", data.accessToken);
        return data;
    } catch (error) {
        throw new Error(`Error signing up: `);
    }
};

export function useCheckEmail(body: any) {
    const [data, setData] = useState<any>(null);
    const [status, setStatus] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${BASE_URL}check-email`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(body),
                });
                const data = await response.json();
                setData(data);
                if (response.status === 409) {
                    setStatus("이미 사용 중인 이메일입니다.");
                } else {
                    setStatus("");
                }
            } catch (error) {
                console.error("Error post data:", error);
            }
        };

        if (body.email) {
            fetchData();
        }
    }, [body.email]);

    return [status];
}
