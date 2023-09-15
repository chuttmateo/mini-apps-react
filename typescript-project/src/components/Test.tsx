import styles from './Test.module.css'
const renderItems = new Map();
renderItems.set(1, "uno");
renderItems.set(2, "dos");
renderItems.set(3, "tres");

export function Test() {

  const isRed = false;

  function getItem(key: number) {
    return renderItems.has(key) ? renderItems.get(key) : "no existe";
  }

  return (
    <div className={isRed ? styles.colorRed : styles.colorBlue}>
      <div>{getItem(1)}</div>
      <div>{getItem(2)}</div>
      <div>{getItem(3)}</div>
    </div>
  )
}