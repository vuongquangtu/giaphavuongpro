export function buildFamily(data) {
  const map = {};
  const visited = new Set();

  data.forEach(p => (map[p.id] = { ...p }));

  function buildNode(person) {
    if (!person || visited.has(person.id)) return null;

    visited.add(person.id);

    const spouse = person.spouseId ? map[person.spouseId] : null;

    if (spouse) visited.add(spouse.id);

    return {
      person,
      spouse,
      children: (person.childrenIds || [])
        .map(id => buildNode(map[id]))
        .filter(Boolean)
    };
  }

  return buildNode(map[1]);
}