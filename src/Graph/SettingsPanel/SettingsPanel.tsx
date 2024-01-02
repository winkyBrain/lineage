import { Signal } from '@preact/signals-react';
import styles from './styles.module.css';

type TToggleComponentProps = {
  label: string,
  toggled: Signal<boolean>,
  setIsEdgesFirst: () => void,
}

export const ToggleComponent = ({ label, toggled, setIsEdgesFirst }: TToggleComponentProps): JSX.Element => {

  return (
    <div className={styles.toggleContainer}>
      <label className={styles.toggleLabel}>
        <input type="checkbox" defaultChecked={toggled.value} onClick={setIsEdgesFirst} className={styles.toggleInput} />
        <span className={styles.toggleSpan} />
        <strong className={styles.toggleStrong}>{label}</strong>
      </label>
    </div>
  )
}