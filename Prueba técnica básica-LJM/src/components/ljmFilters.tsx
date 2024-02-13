export function FilterMaxResults({
  ljmmaxResults,
  onChange,
}: {
  ljmmaxResults: number
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}) {
  return (
    <section>
      <label className="flex items-center gap-2">
        <span>Cantidad de Resultados</span>
        <select value={ljmmaxResults} onChange={onChange}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
        </select>
      </label>
    </section>
  )
}

export function FilterReleaseYear({
  releaseYear,
  onChange,
}: {
  releaseYear: number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
  return (
    <section>
      <label className="flex items-center gap-2">
        <span>Fecha de lanzamiento</span>
        <input className="pl-1" type="number" value={releaseYear} onChange={onChange} />
      </label>
    </section>
  )
}
