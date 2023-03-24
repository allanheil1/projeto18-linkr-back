import urlMetadata from 'url-metadata';

export const fetchMetadataArray = async (posts) => {
  const fetchMetadata = async ({ id, post_id: postId, name, photo, content, url }) => {
    //console.log(id, postId, name, photo, content, url)
    try {
      const { title: urlTitle, description: urlDescription, image: urlImage } = await urlMetadata(url);
      return { id, postId, name, photo, content, url, urlTitle, urlDescription, urlImage };
    } catch (error) {
      console.error(`Error fetching metadata for URL '${url}': ${error}`);
      return { id, postId, name, photo, content, url };
    }
  };

  try {
    const metadataArray = await Promise.all(posts.map(fetchMetadata));
    return metadataArray;
  } catch (error) {
    throw new Error(`Error fetching metadata: ${error}`);
  }
};
