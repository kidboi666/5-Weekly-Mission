
/**
 * 텍스트를 클립보드에 복사하는 함수입니다. 브라우저의 Clipboard API를 지원하지 않는 경우,
 * 임시 텍스트 영역을 사용하여 복사 작업을 수행합니다.
 *
 * @param {string} text - 클립보드에 복사할 텍스트입니다.
 * @param {Function} [callback] - 복사 작업이 완료된 후 호출될 선택적 콜백 함수입니다.
 *
 * @example
 * copyToClipboard("Hello, world!", () => {
 *   console.log("텍스트가 클립보드에 복사되었습니다.");
 * });
 */
export const copyToClipboard = (text: string, callback?: () => void) => {
  if (!navigator?.clipboard) {
    const tempElement = document.createElement("textarea");
    tempElement.value = text;
    document.body.appendChild(tempElement);
    tempElement.select();
    document.execCommand("copy");
    document.body.removeChild(tempElement);
    callback?.();
    return;
  }
  window.navigator.clipboard.writeText(text).then(() => {
    callback?.();
  });
};
