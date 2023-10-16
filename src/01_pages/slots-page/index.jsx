import classes from "./styles.module.scss";

import { CardMultipleSlotProps } from "src/04_entities/card-multiple-slot-props";




function Header({placeholder}) {

  return (
    <header>
      hello
      <input type="text" placeholder={placeholder} value={'hi'} />
    </header>
  )
}



function SlotsPage() {

  const header = <Header placeholder={'hop-hei'} />;

  return (
    <div className={classes["slots-page"]}>
      <div className="container">
        <div className={classes["slots-page__body"]}>
          <CardMultipleSlotProps
            header={header}
            content={<p>Content</p>}
            footer={<a href="#">Read more</a>}
          >
            <p>children component</p>
          </CardMultipleSlotProps>

          
        </div>
      </div>
    </div >
  )
}

export default SlotsPage
