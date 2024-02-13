import classNames from 'classnames';
import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
  colorfull?: boolean;
}

const Section: React.FC<SectionProps> = (props) => {
  return (
    <section
      id={props.id}
      className={classNames(
        `py-32 flex flex-col items-center ${props.className}`,
        {
          'bg-alabaster-50': props.colorfull == true,
        }
      )}
    >
      {props.children}
    </section>
  );
};

export default Section;
