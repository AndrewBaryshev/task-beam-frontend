import styles from './styles.module.scss';

type HeaderProps = {
  text: string;
};

const Header = ({ text }: HeaderProps) => {
  return <header className={styles.root}>{text}</header>;
};

export default Header;
