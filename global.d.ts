declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

type Messages = typeof import("locales/en").default;
declare interface IntlMessages extends Messages {}
