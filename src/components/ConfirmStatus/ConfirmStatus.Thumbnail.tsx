import { Font, Layout as L, RegularImage } from "@design-system";
import { ConfirmInfo } from "@types";
import { format } from "date-fns";
import { ACHIEVEMENT_STATUS, SIZE } from "./ConfirmStatus.Thumbnail.constants";
import * as S from "./ConfirmStatus.Thumbnail.styles";

interface Props {
  confirmInfoList: ConfirmInfo[];
}

const Thumbnail = ({ confirmInfoList }: Props) => {
  return (
    <L.FlexRow w="100%" ph={20} pv={24} $gap={10} style={{ overflow: "auto" }}>
      {confirmInfoList.map(({ id, createdAt, status, imageUrl }, index) => {
        const isBeforeConfirm = status === "BEFORE_CONFIRM";
        return (
          <L.FlexCol key={id} $gap={12}>
            <S.Container $showshadow={isBeforeConfirm}>
              <L.LayoutBase
                w={SIZE}
                h={22}
                mb={4}
                rounded={11}
                $alignItems="center"
                $justifyContent="center"
                $bgColor="GRAY_200"
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
                    {ACHIEVEMENT_STATUS[status].text}
                  </Font.Body>
                )}
              </L.LayoutBase>
              <L.LayoutBase w={SIZE} h={SIZE} rounded={8} $bgColor="GRAY_200">
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
