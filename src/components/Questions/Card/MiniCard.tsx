import { Question } from "../../../reducer/Data/questions";
import { Heading, Text } from "@chakra-ui/react";

export const MiniCard = ({
  question,
  onClick,
}: {
  question: Question;
  onClick: () => void;
}) => {
  const { votes, bestAnswer, views, answers, title, description } = question;
  return (
    <div onClick={onClick}>
      <aside>
        <p>{votes} votes</p>
        <Text bg={bestAnswer && "green.600"}>{answers} answers</Text>
        <p>{views} views</p>
      </aside>
      <section>
        <Heading size="md">{title}</Heading>
        <Text isTruncated>{description}</Text>
      </section>
    </div>
  );
};
