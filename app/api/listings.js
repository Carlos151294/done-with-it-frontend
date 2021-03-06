import client from './client';

// const endpoint = '/my/listings'; // To test auth header
const endpoint = '/listings';

const getListings = () => client.get(endpoint);

const addListing = (listing, onUploadProgress) => {
   const data = new FormData();
   data.append('title', listing.title);
   data.append('price', listing.price);
   data.append('categoryId', listing.category.value);
   data.append('description', listing.description);
   listing.imageList.forEach((image, index) => {
      data.append('images', { name: 'image' + index, type: 'image/jpeg', uri: image });
   });
   if (listing.location) {
      data.append('location', JSON.stringify(listing.location));
   } 
   return client.post(endpoint, data, { 
      // `onUploadProgress` allows handling of progress events for uploads browser only
      onUploadProgress: (progressEvent) => onUploadProgress(progressEvent.loaded / progressEvent.total)
   });
};

export default {
   getListings,
   addListing
};