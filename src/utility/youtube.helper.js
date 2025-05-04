/**
 * Extracts the YouTube video ID from a given URL.
 *
 * @param {string} url - The YouTube URL to extract the video ID from.
 * @returns {string|null} The extracted YouTube video ID, or null if the URL is invalid or does not contain a video ID.
 *
 * @example
 * extractYoutubeId('https://www.youtube.com/watch?v=dQw4w9WgXcQ'); // Returns 'dQw4w9WgXcQ'
 * extractYoutubeId('https://youtu.be/dQw4w9WgXcQ'); // Returns 'dQw4w9WgXcQ'
 * extractYoutubeId('https://www.youtube.com/embed/dQw4w9WgXcQ'); // Returns 'dQw4w9WgXcQ'
 * extractYoutubeId('https://example.com'); // Returns null
 */
export const extractYoutubeId = url => {
  if (!url) return null;

  const regex =
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
};
