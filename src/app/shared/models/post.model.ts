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
  thumbs?: Thumbs;
}

export interface Thumbs {
  up: number;
  down: number;
  total: number;
}
