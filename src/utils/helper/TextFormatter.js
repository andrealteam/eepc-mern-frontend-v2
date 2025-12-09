// Function to sanitize and extract the first 15 words
export const getFirst15Words = (htmlContent) => {
  // Sanitize the HTML content to prevent XSS
  const sanitizedHTML = DOMPurify.sanitize(htmlContent);

  // Create a temporary element to extract the plain text
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = sanitizedHTML;

  // Extract plain text and split it into words
  const text = tempDiv.textContent || tempDiv.innerText || "";
  const words = text.split(/\s+/);

  // Get the first 15 words
  const first15Words = words.slice(0, 15).join(" ");

  // Return the first 15 words followed by ellipsis
  return `${first15Words}...`;
};

export const toTitleCase = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
