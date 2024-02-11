type IHeadlineTag = "h1" | "h2" | "h3" | "h4" | "h5";

interface IHeadlineProps {
  tag?: IHeadlineTag;
  className?: string;
  children: React.ReactNode;
}

export const Headline = ({
  tag = "h1",
  children,
  className,
}: IHeadlineProps): React.ReactNode => {
  const Tag = tag;
  return <Tag className={className}>{children}</Tag>;
};
