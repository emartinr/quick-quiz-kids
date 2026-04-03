import type { ReactNode } from 'react';

type IBaseTemplateProps = {
  leftNav?: ReactNode;
  rightNav?: ReactNode;
  children: ReactNode;
};

export const BaseTemplate = (props: IBaseTemplateProps) => {
  return (
    <div className="min-h-screen bg-white">
      {props.children}
    </div>
  );
};