function SearchBar({ value, onChangeSearchFilter }) {
  return (
    <div>
      <input type="text" value={value} onChange={(e) => onChangeSearchFilter(e.target.value)} />
    </div>
  )
}

export default SearchBar
