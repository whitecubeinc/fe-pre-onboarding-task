import { ColorKeys, Font, Layout as L, RegularImage } from "@design-system";
import { ConfirmStatus, ConfirmCard } from "@types";
import { format } from "date-fns";
import * as S from "./ConfirmStatus.Thumbnail.styles";

const SIZE = 40;

interface Props {
  confirmCard: ConfirmCard[];
}

const Thumbnail = ({ confirmCard }: Props) => {
  return (
    <L.FlexRow w="100%" ph={20} pv={24} gap={10} style={{ overflow: "auto" }}>
      {confirmCard.map(({ createdAt, status, imageUrl }, index) => {
        const isBeforeConfirm = status === "BEFORE_CONFIRM";
        return (
          <L.FlexCol key={index} gap={12}>
            <S.Container $showshadow={isBeforeConfirm}>
              <L.LayoutBase
                w={SIZE}
                h={22}
                mb={4}
                rounded={11}
                alignItems="center"
                justifyContent="center"
                bgColor="GRAY_200"
              >
                <Font.Body
                  type="12_medium_single"
                  color={isBeforeConfirm ? "GRAY_900" : "GRAY_600"}
                >
                  {index + 1}
                </Font.Body>
              </L.LayoutBase>

              <L.LayoutBase h={20}>
                {!isBeforeConfirm && imageUrl && createdAt && (
                  <Font.Body type="14_semibold_single">
                    {format(new Date(createdAt), "M.d")}
                  </Font.Body>
                )}
              </L.LayoutBase>

              <L.LayoutBase h={20} mb={10}>
                {!isBeforeConfirm && (
                  <Font.Body
                    type="14_semibold_single"
                    color={ACHIEVEMENT_STATUS[status].color}
                  >
                    {status === "SUCCESS" ? "성공" : "실패"}
                  </Font.Body>
                )}
              </L.LayoutBase>
              <L.LayoutBase w={SIZE} h={SIZE} rounded={8} bgColor="GRAY_200">
                {imageUrl && (
                  <RegularImage src={imageUrl} width={SIZE} height={SIZE} />
                )}
              </L.LayoutBase>
            </S.Container>
          </L.FlexCol>
        );
      })}
    </L.FlexRow>
  );
};

export default Thumbnail;

export const ACHIEVEMENT_STATUS: Record<
  ConfirmStatus,
  {
    text: string;
    color?: ColorKeys;
  }
> = {
  SUCCESS: {
    text: "성공",
    color: "SYSTEM_SUCCESS",
  },
  FAIL: {
    text: "실패",
    color: "SYSTEM_ERROR",
  },
  BEFORE_CONFIRM: {
    text: "",
  },
};
