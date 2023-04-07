export default function slugify (text) {
  return text
    .toString()
    .normalize('NFKD')
    .toLowerCase()                // Convert the string to lowercase letters
    .trim()                       // Remove whitespace from both sides of a string (optional)
    .replace(/\s+/g, '-')         // Replace spaces with -
    .replace(/[^\w-]+/g, '')     // Remove all non-word chars
    .replace(/_/g,'-')           // Replace _ with -
    .replace(/--+/g, '-')       // Replace multiple - with single -
    .replace(/-$/g, '');         // Remove trailing -
}
