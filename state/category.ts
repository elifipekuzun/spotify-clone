export interface Category {
  href: string;
  icons: [
    {
      height: number;
      width: number;
      url: string;
    },
  ];
  id: string;
  name: string;
}

export interface Track {}

export interface CategoryPlaylistItem {
  description: string;
  href: string;
  id: string;
  images: [
    {
      height: number;
      url: string;
      width: number;
    },
  ];
  name: string;
}

export interface UserPlaylist {
  id: string;
  images: [
    {
      height: number;
      url: string;
      width: number;
    },
  ];
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
