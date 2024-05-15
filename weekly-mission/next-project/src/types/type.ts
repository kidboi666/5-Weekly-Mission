interface LinkData {
  data: {
    map(arg0: (link: any) => React.JSX.Element): React.ReactNode;
    length: number;
    id: number;
    title: string;
    created_at: string;
    url: string;
    description?: string;
    image_source?: string;
  };
}
