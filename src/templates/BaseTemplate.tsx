import type { ReactNode } from 'react';

type IBaseTemplateProps = {
  children: ReactNode;
};

export const BaseTemplate = (props: IBaseTemplateProps) => {
  return (
    <div className="min-h-screen bg-white">
      {props.children}
    </div>
  );
};