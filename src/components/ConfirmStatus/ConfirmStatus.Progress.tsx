import { Font, Layout as L, SCREEN_WIDTH } from "@design-system";
import { ConfirmCard } from "@types";

const PADDING_HORIZONTAL = 20;
const PROGRESS_WIDTH = SCREEN_WIDTH - PADDING_HORIZONTAL * 2;

interface Props {
  confirmCard: ConfirmCard[];
}

const Progress = ({ confirmCard }: Props) => {
  return (
    <L.FlexCol ph={20} pv={24}>
      <L.FlexRow w="100%" $justifyContent="space-between">
        <L.FlexCol $gap={4}>
          <Font.Body type="14_medium_single" color="GRAY_700">
            현재 달성률
          </Font.Body>
          <Font.Title type="20_semibold_single">66%</Font.Title>
        </L.FlexCol>

        <L.FlexCol $gap={4} $alignItems="flex-end">
          <Font.Body type="14_medium_single" color="GRAY_700">
            예상 달성률
          </Font.Body>
          <Font.Title type="20_semibold_single">100%</Font.Title>
        </L.FlexCol>
      </L.FlexRow>

      <L.LayoutBase w={PROGRESS_WIDTH} mv={8} style={{ position: "relative" }}>
        <L.LayoutBase w="100%" h={8} $bgColor="GRAY_200" rounded={4} />
        <L.Absolute
          l={0}
          w={PROGRESS_WIDTH * 0.66}
          h={8}
          rounded={4}
          $bgColor="PRIMARY_500"
        />
      </L.LayoutBase>
    </L.FlexCol>
  );
};

export default Progress;
