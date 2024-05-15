import { useEffect } from "react";

// 모달 오픈 시 스크롤 막기 훅
const useModalScrollLock = (modalType: string | boolean | null) => {
    useEffect(() => {
        const handleScrollLock = () => {
            if (modalType) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "auto";
            }
        };

        handleScrollLock();

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [modalType]);
};

export default useModalScrollLock;
