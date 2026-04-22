const lastIndex: Record<string, number> = {};

export function getRandomPoem(
  mood: string,
  poems: Record<string, string[]>
) {
  const list = poems[mood];

  // safety fallback (ONLY if mood is wrong)
  if (!list || list.length === 0) {
    return "No poem found for this mood. Try selecting another mood.";
  }

  // if only 1 poem, just return it
  if (list.length === 1) {
    return list[0];
  }

  let index = Math.floor(Math.random() * list.length);

  // 🔥 prevent immediate repeat (simple + safe)
  if (lastIndex[mood] !== undefined && index === lastIndex[mood]) {
    index = (index + 1) % list.length;
  }

  // store last used index
  lastIndex[mood] = index;

  return list[index];
}