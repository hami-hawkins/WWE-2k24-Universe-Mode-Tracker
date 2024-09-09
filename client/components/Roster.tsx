import { useQuery } from '@tanstack/react-query'
import { getWrestlers } from '../apis/wrestlersApi'

function Roster() {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['wrestlers'],
    queryFn: () => getWrestlers(),
  })

  if (isPending) {
    return <p>Loading...</p>
  }

  if (isError) {
    console.error(error.message)
    return <p>Error</p>
  }

  return (
    <>
      <h1>Full Roster</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Brand</th>
            <th>Alignment</th>
            <th>Fighting Style</th>
            <th>Faction</th>
            <th>DLC Required</th>
          </tr>
        </thead>
        <tbody>
          {data.map((wrestler) => (
            <tr key={wrestler.id}>
              <td>{wrestler.name}</td>
              <td>{wrestler.brand}</td>
              <td>{wrestler.alignment}</td>
              <td>{wrestler.fightingStyle}</td>
              <td>{wrestler.faction}</td>
              <td>
                {wrestler.dlc === 1 || wrestler.dlc === true ? 'Yes' : ''}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Roster
