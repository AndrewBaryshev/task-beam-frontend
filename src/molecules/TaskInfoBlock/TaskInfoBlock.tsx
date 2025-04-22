import clsx from 'clsx';

import styles from './styles.module.scss';

interface TaskInfoBlockProps {
  title: string;
  description: string;
  withMarginBottom?: boolean;
  isTextCentered?: boolean;
}

const TaskInfoBlock = ({
  title,
  description,
  withMarginBottom,
  isTextCentered,
}: TaskInfoBlockProps) => {
  return (
    <div
      className={clsx(styles.cardSection, {
        [styles.cardSection_marginBottom]: withMarginBottom,
        [styles.cardSection_textCentered]: isTextCentered,
      })}
    >
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
};

export default TaskInfoBlock;
