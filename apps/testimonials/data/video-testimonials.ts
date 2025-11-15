export type VideoTestimonial = {
  name: string;
  caption?: string;
  provider: "loom" | "youtube" | "vimeo";
  url: string;
};

export const videoTestimonials: VideoTestimonial[] = [
  {
    name: "Name 1",
    caption: "Short result.",
    provider: "loom",
    url: "https://www.loom.com/embed/82efc365175a4b23beed7a87ad9687e2",
  },
  {
    name: "Name 2",
    caption: "Short result.",
    provider: "loom",
    url: "https://www.loom.com/embed/82efc365175a4b23beed7a87ad9687e2",
  },
  {
    name: "Name 3",
    caption: "Short result.",
    provider: "youtube",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    name: "Name 4",
    caption: "Short result.",
    provider: "loom",
    url: "https://www.loom.com/embed/82efc365175a4b23beed7a87ad9687e2",
  },
  {
    name: "Name 5",
    caption: "Short result.",
    provider: "vimeo",
    url: "https://player.vimeo.com/video/123456789",
  },
  {
    name: "Name 6",
    caption: "Short result.",
    provider: "loom",
    url: "https://www.loom.com/embed/82efc365175a4b23beed7a87ad9687e2",
  },
];

