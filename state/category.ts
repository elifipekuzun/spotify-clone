export interface ImageParams {
  width: number;
  height: number;
  url: string;
}

export interface Category {
  href: string;
  icons: ImageParams[];
  id: string;
  name: string;
}

export interface Track {
  id: string;
  name: string;
  images: ImageParams[];
  href: string;
  popularity: number;
  duration_ms: number;
  artists: [
    {
      name: string;
    },
  ];
}

export interface CategoryPlaylistItem {
  description: string;
  href: string;
  id: string;
  images: ImageParams[];
  name: string;
  follower: {
    href: string;
    total: number;
  };
  owner: {
    id: string;
    href: string;
  };
}

export interface UserPlaylist {
  id: string;
  images: ImageParams[];
  name: string;
  type: string;
  owner: {
    display_name: string;
    id: string;
    href: string;
    uri: string;
  };
  tracks: {
    href: string;
    total: number;
  };
}
