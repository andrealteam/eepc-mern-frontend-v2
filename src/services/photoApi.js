import { api } from "./api";

// Photo Home
export const getPhotoHome = async () => {
  try {
    const res = await api.get("album-category-wise/indee?limit=4");
    // console.table(res.data.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("Photo Home:", error);
    return [];
  }
};
// Photo By Category
export const getPhotoByCategory = async (category) => {
  try {
    const res = await api.get(`album-category-wise/${category}`);
    // console.info(category);
    // console.table(res.data.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("Photo By Category:", error);
    return [];
  }
};

// Photo By ID
export const getPhotoByID = async (id) => {
  try {
    const res = await api.get(`all-album/${id}`);
    // Check if response is successful and contains data
    if (
      res.status === 200 &&
      res.data &&
      Array.isArray(res.data.data) &&
      res.data.data.length > 0
    ) {
      return res.data.data[0]; // Return the first album object (if available)
    }
    return []; // Return an empty array if no album found
  } catch (error) {
    console.error("Photo By ID Error:", error);
    return []; // Return an empty array in case of error
  }
};

// Album Photo By ID
export const getAlbumPhotoByID = async (album_id) => {
  try {
    const res = await api.get(`album-image/${album_id}`);
    // Check if response is successful and contains data
    if (
      res.status === 200 &&
      res.data &&
      Array.isArray(res.data.data) &&
      res.data.data.length > 0
    ) {
      // console.log(res.data.data[0]);
      return res.data.data[0]; // Return the first album object (if available)
    }
    return []; // Return an empty array if no album found
  } catch (error) {
    console.error("Photo By ID Error:", error);
    return []; // Return an empty array in case of error
  }
};
