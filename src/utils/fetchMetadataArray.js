import urlMetadata from 'url-metadata';

export const fetchMetadataArray = async (posts) => {
  try {
    const metadataArray = await Promise.all(
      posts.map(async ({ name, photo, content, url }) => {
        const { title: urlTitle, description: urlDescription, image: urlImage } = await urlMetadata(url);
        return { name, photo, content, url, urlTitle, urlDescription, urlImage };
      })
    );
    return metadataArray;
  } catch (error) {
    throw new Error(`Error fetching metadata: ${error}`);
  }
};
