import { Font, Layout as L } from "@design-system";
import { ConfirmCard } from "@types";

interface Props {
  confirmCard: ConfirmCard[];
}

const Count = ({ confirmCard }: Props) => {
  return (
    <L.FlexCol ph={20} pv={24}>
      <L.FlexRow $gap={60} w="100%" $justifyContent="space-between">
        <L.FlexCol $gap={4}>
          <Font.Body type="14_medium_single" color="GRAY_700">
            인증 성공
          </Font.Body>
          <Font.Title type="20_semibold_single">2회</Font.Title>
        </L.FlexCol>
        <L.FlexCol $gap={4}>
          <Font.Body type="14_medium_single" color="GRAY_700">
            인증 실패
          </Font.Body>
          <Font.Title type="20_semibold_single">0회</Font.Title>
        </L.FlexCol>
        <L.FlexCol $gap={4}>
          <Font.Body type="14_medium_single" color="GRAY_700">
            남은 인증
          </Font.Body>
          <Font.Title type="20_semibold_single">1회</Font.Title>
        </L.FlexCol>
      </L.FlexRow>
    </L.FlexCol>
  );
};

export default Count;
