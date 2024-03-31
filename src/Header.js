export function Header() {
    return (
        <>
            <h1>
                <a href="/">
                    <img src="images/logo.svg" alt="linklabrary로고" />
                </a>
            </h1>
            <a class="onclick-signin button-style" href='./signin.html'>
                로그인
            </a>
        </>
    );
}