import { Card } from "../../ui/Card";
import { CardContent } from "../../ui/CardContent";
import { CardImage } from "../../ui/CardImage";

export const ReadOnlyCard = ({ url, imageSource, alt, elapsedTime, description, createdAt }) => {

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Card>
        <CardImage imageSource={imageSource} alt={alt} />
        <CardContent
          elapsedTime={elapsedTime}
          description={description}
          createdAt={createdAt}
        />
      </Card>
    </a>
  );
};
