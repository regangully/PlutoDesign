export enum PaddingType {
  tightest,
  tight,
  narrow,
  standard,
  wide,
  widest,
}

export interface PaddingProps {
  paddingType?: PaddingType;
  children: JSX.Element;
}

const paddingStyle = (paddingType: PaddingType) => {
  let padding = "0px";

  switch (paddingType) {
    case PaddingType.tightest:
      padding = "2px";
      break;
    case PaddingType.tight:
      padding = "4px";
      break;
    case PaddingType.narrow:
      padding = "8px";
      break;
    case PaddingType.standard:
      padding = "16px";
      break;
    case PaddingType.wide:
      padding = "24px";
      break;
    case PaddingType.widest:
      padding = "32px";
      break;
  }

  return { padding };
};

export const Padding = (props: PaddingProps) => {
  const { paddingType = PaddingType.standard, children } = props;
  return <div style={paddingStyle(paddingType)}>{children}</div>;
};
