export interface Post {
  id: number;
  name: string;
  voteDescription: string;
  isMain: boolean;
  expireDate: string;
  createdDate: string;
  media: string;
  wikiPath: string;
  categoryName: string;
  thumbsUp: number;
  thumbsDown: number;
}
