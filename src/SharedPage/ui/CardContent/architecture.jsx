import {
  CardContentTemplate,
  ElapsedTime,
  Description,
  CreatedAt,
} from "./design";
export const CardContent = ({ elapsedTime, description, createdAt }) => {
  return (
    <CardContentTemplate>
      <ElapsedTime>{elapsedTime}</ElapsedTime>
      <Description>{description}</Description>
      <CreatedAt>{createdAt}</CreatedAt>
    </CardContentTemplate>
  );
};
