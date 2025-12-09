// Helper function to add ordinal suffix to the day
const getOrdinalSuffix = (day) => {
  const suffixes = ["th", "st", "nd", "rd"];
  const val = day % 100;
  return day + (suffixes[(val - 20) % 10] || suffixes[val] || suffixes[0]);
};

// Function to format date
export const formatDate = (dateString) => {
  if (!dateString) return null;

  const date = new Date(dateString);
  if (isNaN(date)) return null;

  const day = getOrdinalSuffix(date.getDate());
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
};

// Helper function to search by day, month, or year
export const matchDate = (date, searchTerm) => {
  const dateObj = new Date(date);
  const day = getOrdinalSuffix(dateObj.getDate());
  const month = dateObj.toLocaleString("default", { month: "long" });
  const year = dateObj.getFullYear();

  // Check if the search term matches day, month, or year
  return (
    day.toLowerCase().includes(searchTerm.toLowerCase()) ||
    month.toLowerCase().includes(searchTerm.toLowerCase()) ||
    year.toString().includes(searchTerm)
  );
};