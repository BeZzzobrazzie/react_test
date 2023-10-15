import classes from './styles.module.scss';

export function BaseCard({children}) {


  return (
    <div className={classes["base-card"]}>
      {children}
    </div>
  )
}