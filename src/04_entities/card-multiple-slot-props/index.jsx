import { BaseCard } from "src/05_shared/ui/base-card"

export function CardMultipleSlotProps({ header, content, footer, children }) {

  return (
    <BaseCard>
      {header}
      {content}
      {children}
      {footer}
    </BaseCard>
  )
}

