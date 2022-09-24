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

export interface CategoryPlaylist {
  collaborative: boolean;
  description: string;
  href: string;
  id: string;
  images: string[];
  name: string;
}
