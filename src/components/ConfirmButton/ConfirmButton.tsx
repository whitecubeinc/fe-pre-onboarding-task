import { Button, Layout as L, SCREEN_WIDTH } from "@design-system";
import { ConfirmInfo } from "@types";

interface Props {
  confirmInfoList: ConfirmInfo[];
}

const ConfirmButton = ({ confirmInfoList }: Props) => {
  return (
    <L.LayoutBase
      w={SCREEN_WIDTH}
      style={{ position: "fixed", bottom: 0 }}
      $alignItems="flex-end"
    >
      <L.FlexRow w="100%" pv={12} ph={20} $bgColor="BASIC_WHITE">
        <Button.Large
          type={"primary_fill"}
          text={"인증하기"}
          status={"normal"}
          style={{ width: "100%" }}
        />
      </L.FlexRow>
    </L.LayoutBase>
  );
};

export default ConfirmButton;
