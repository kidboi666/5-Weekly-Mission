export function formatDate(date: string): string {
  const dateFormat = new Date(date);
  return dateFormat.toLocaleDateString("ko-KR");
}
