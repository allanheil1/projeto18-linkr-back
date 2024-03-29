import urlMetadata from 'url-metadata';

export const fetchMetadataArray = async (posts) => {
  const fetchMetadata = async ({
    id,
    post_id: postId,
    name,
    photo,
    content,
    url,
    created_at: createdAt,
    comment_count: commentCount,
    repost_count: repostCount,
    repost_user_id: repostedBy
  }) => {
    try {
      const { title: urlTitle, description: urlDescription, image: urlImage} = await urlMetadata(url);
      return {
        id,
        postId,
        name,
        photo,
        content,
        url,
        createdAt,
        commentCount,
        repostCount,
        urlTitle,
        urlDescription,
        urlImage,
        repostedBy
      };
    } catch (error) {
      console.error(`Error fetching metadata for URL '${url}': ${error}`);
      return { id, postId, name, photo, content, url, createdAt, commentCount, repostCount };
    }
  };

  try {
    const metadataArray = await Promise.all(posts.map(fetchMetadata));
    return metadataArray;
  } catch (error) {
    throw new Error(`Error fetching metadata: ${error}`);
  }
};
