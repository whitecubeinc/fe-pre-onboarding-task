import { Font, Layout as L } from "@design-system";

interface Props {
  imageUrl: string;
  title: string;
}

const MainImage = ({ imageUrl, title }: Props) => {
  return (
    <div style={{ position: "relative" }}>
      <img src={imageUrl} style={{ width: "100%" }} />
      <L.Absolute l={0} b={0} r={0}>
        <L.LayoutBase
          pb={16}
          pt={40}
          ph={20}
          style={{
            width: "100%",
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.30) 100%)",
          }}
        >
          <Font.Title type="24_bold_multi" color="BASIC_WHITE">
            {title}
          </Font.Title>
        </L.LayoutBase>
      </L.Absolute>
    </div>
  );
};

export default MainImage;
