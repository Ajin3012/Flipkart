const List = (spo) => {
  const { carsName } = spo;
  const result = carsName.map((v) => {
    return (
    <li>{v.cname}</li>
    )
  })
  return (
    <div className="game">
      <h2>Cars</h2>
      <ul>{result}</ul>
    </div>
  )
}

export default List;
