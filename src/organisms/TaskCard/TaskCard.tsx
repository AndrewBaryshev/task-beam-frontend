import clsx from 'clsx';

import styles from './styles.module.scss';

import { useCardAnimation } from '@/hooks/useCardAnimation';
import TaskInfoBlock from '@/molecules/TaskInfoBlock/TaskInfoBlock';

const TaskCard = () => {
  const { isHovering, refContainer, cardRef } = useCardAnimation();

  return (
    <div ref={refContainer} className={styles.container}>
      <div
        ref={cardRef}
        className={clsx(styles.card, {
          [styles.cardAnimation]: !isHovering && refContainer,
        })}
      >
        <div className={styles.cardContent}>
          <h2 className={styles.cardTitle}>Название задачи</h2>
          <TaskInfoBlock
            title='Описание'
            description='Нужно реализовать проект для продажи декоративных животных'
            withMarginBottom
          />
          <div className={styles.cardInfoRow}>
            <TaskInfoBlock
              title='Срок'
              description='До 20 апреля 2023'
              isTextCentered
            />
            <TaskInfoBlock
              title='Сложность'
              description='Средняя'
              isTextCentered
            />
          </div>
          <div className={styles.cardInfoRow}>
            <TaskInfoBlock
              title='Приоритет'
              description='Высокий'
              isTextCentered
            />
            <TaskInfoBlock
              title='Категория'
              description='Разработка'
              isTextCentered
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
