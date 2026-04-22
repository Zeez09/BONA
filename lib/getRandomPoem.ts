const lastIndex: Record<string, number> = {};

export function getRandomPoem(
  mood: string,
  poems: Record<string, string[]>
) {
  const list = poems[mood];

  if (!list || list.length === 0) {
    return "You are not your feelings, just someone moving through them.";
  }

  let index = Math.floor(Math.random() * list.length);

  // ❗ prevent immediate repeat
  if (list.length > 1) {
    while (index === lastIndex[mood]) {
      index = Math.floor(Math.random() * list.length);
    }
  }

  lastIndex[mood] = index;

  return list[index];
}