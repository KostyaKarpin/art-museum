import { memo } from "react";
import { Text } from "./SectionTitleStyles";
import { ComponentWrapper } from "@/globalStyles/WrapperStyles";

interface Props {
  firstLine: string;
  secondLine: string;
}

const SectionTitle = (props: Props) => {
  const { firstLine, secondLine } = props;
  return (
    <ComponentWrapper $direction={"column"} $justify={"space-between"}>
      <Text $firstLine={true}>{firstLine}</Text>
      <Text $firstLine={false}>{secondLine}</Text>
    </ComponentWrapper>
  );
};

export default memo(SectionTitle);
