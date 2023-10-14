





function Card({header, content, footer}) {

  return (
    <div>
      {header}
      {content}
      {footer}
    </div>
  )
}


function SlotsPage() {

  return (
    <>
      hi
      <Card
        header={<h1>title</h1>}
        content={<p>Content</p>}
        footer={<a href="#">Read more</a>}
      />
    </>
  )
}

export default SlotsPage
