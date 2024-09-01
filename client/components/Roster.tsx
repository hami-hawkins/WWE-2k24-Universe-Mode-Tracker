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
  console.log('Roster: ', data)
  return (
    <>
      <h1>Full Roster</h1>
      {data.map((wrestlers) => (
        <p key={wrestlers.id}>
          {wrestlers.name} || {wrestlers.faction}
        </p>
      ))}
    </>
  )
}

export default Roster
