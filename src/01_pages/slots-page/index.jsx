import classes from "./styles.module.scss";

import { CardMultipleSlotProps } from "src/04_entities/card-multiple-slot-props";







function SlotsPage() {

  return (
    <div className={classes["slots-page"]}>
      <div className="container">
        <div className={classes["slots-page__body"]}>
          <CardMultipleSlotProps
            header={<h1>title</h1>}
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
