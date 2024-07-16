import { Font } from "src/design-system/foundations";
import * as S from "./Button.styles";
import { ButtonProps, ButtonSetting } from "./Button.types";
import { useButton } from "./Button.hooks";

const Button = (
  props: {
    size: keyof typeof buttons;
  } & ButtonProps
) => {
  const { size, style, ...buttonProps } = props;
  const { text, color, fill, ...handlers } = useButton(buttonProps);
  const { ButtonComponent, fontType } = buttons[size];
  return (
    <button {...handlers} style={style}>
      <ButtonComponent fill={fill}>
        {!!text && (
          <Font.Body type={fontType} color={color} $textAlign="center">
            {text}
          </Font.Body>
        )}
      </ButtonComponent>
    </button>
  );
};

const Large = (props: ButtonProps) => <Button {...props} size="Large" />;

const Medium = (props: ButtonProps) => <Button {...props} size="Medium" />;

const Small = (props: ButtonProps) => <Button {...props} size="Small" />;

const buttons: ButtonSetting = {
  Large: {
    ButtonComponent: S.LargeButton,
    fontType: "16_semibold_single",
  },
  Medium: {
    ButtonComponent: S.MediumButton,
    fontType: "14_semibold_single",
  },
  Small: {
    ButtonComponent: S.SmallButton,
    fontType: "12_semibold_single",
  },
};

export default { Large, Medium, Small };
