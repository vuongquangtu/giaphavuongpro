export function buildFamily(data) {
  const map = {}
  data.forEach(p => (map[p.id] = { ...p }))

  function buildNode(person) {
    const spouse = person.spouseId ? map[person.spouseId] : null

    return {
      person,
      spouse,
      children: (person.childrenIds || []).map(id =>
        buildNode(map[id])
      )
    }
  }

  return buildNode(map[1])
}
