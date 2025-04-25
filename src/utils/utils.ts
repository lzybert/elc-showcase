export function isNumber(str: string) {
  return /^[0-9]*$/.test(str);
}

export function getElementOfTheDay<T>(array: T[], date: Date = new Date()): T {
  const daySeed = date.toISOString().split('T')[0]; // "YYYY-MM-DD"
  let hash = 0;

  for (let i = 0; i < daySeed.length; i++) {
    hash = daySeed.charCodeAt(i) + ((hash << 5) - hash);
  }

  const index = Math.abs(hash) % array.length;
  return array[index];
}