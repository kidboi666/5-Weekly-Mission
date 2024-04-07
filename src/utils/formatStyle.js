export function positionFixed(isFixed) {
  const fixed = {
    position: isFixed ? 'fixed' : '',
  };

  return fixed;
}

export function positionAbsolute(isAbsolute) {
  const absolute = {
    position: isAbsolute ? 'absolute' : '',
  };

  return absolute;
}
