export const ROUTE: Record<string, string> = {
  랜딩: "/",
  로그인: "/signin",
  개인정보처리방침: "/privacy",
  FAQ: "/faq",
};

const second: number = 1000;
const minute: number = second * 60;
const hour: number = minute * 60;
const day: number = hour * 24;
const month: number = day * 31;
const year: number = month * 12;

export const TIME_IN_MILLISECONDS: Record<string, number> = {
  second,
  minute,
  hour,
  day,
  month,
  year,
};
