import { Wrapper, Text } from "./SectionTitleStyles";

interface Props {
  firstLine: string;
  secondLine: string;
}

const SectionTitle = (props: Props) => {
  const { firstLine, secondLine } = props;
  return (
    <Wrapper>
      <Text $firstLine={true}>{firstLine}</Text>
      <Text $firstLine={false}>{secondLine}</Text>
    </Wrapper>
  );
};

export default SectionTitle;
