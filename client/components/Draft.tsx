import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import {
  getWrestlers,
  draftToRaw,
  draftToSmackdown,
  draftToNXT,
} from '../apis/wrestlersApi'

function Draft() {
  const queryClient = useQueryClient()

  const { data, isPending, isError, error } = useQuery({
    queryKey: ['wrestlers'],
    queryFn: () => getWrestlers(),
  })

  //raw draft mutation
  const draftRawMutation = useMutation({
    mutationFn: (id: number) => draftToRaw(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['wrestlers'] }),
  })

  //smackdown draft mutation
  const draftSmackdownMutation = useMutation({
    mutationFn: (id: number) => draftToSmackdown(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['wrestlers'] }),
  })
  //nxt draft mutation
  const draftNXTMutation = useMutation({
    mutationFn: (id: number) => draftToNXT(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['wrestlers'] }),
  })

  if (isPending) {
    return <p>Loading...</p>
  }

  if (isError) {
    console.error(error.message)
    return <p>Error</p>
  }

  //DRAFT TABLES
  // filtered wrestlers by brand
  const rawWrestlers = data?.filter((wrestler) => wrestler.brand === 'Raw')
  const smackdownWrestlers = data?.filter(
    (wrestler) => wrestler.brand === 'Smackdown',
  )
  const nxtWrestlers = data?.filter((wrestler) => wrestler.brand === 'NXT')

  // draft pool
  const WrestlerTable = ({ wrestlers, title }) => (
    <>
      <h1>{title}</h1>
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
          {wrestlers?.map((wrestler) => (
            <tr key={wrestler.id}>
              <td>{wrestler.name}</td>
              <td>{wrestler.brand}</td>
              <td>{wrestler.alignment}</td>
              <td>{wrestler.fightingStyle}</td>
              <td>{wrestler.faction}</td>
              <td>
                {wrestler.dlc === 1 || wrestler.dlc === true ? 'Yes' : ''}
              </td>
              <td>
                {/* Add functions here so buttons are functional */}
                <button
                  onClick={() => draftRawMutation.mutate(wrestler.id)}
                  disabled={draftRawMutation.isPending}
                >
                  Raw
                </button>
                <button
                  onClick={() => draftSmackdownMutation.mutate(wrestler.id)}
                  disabled={draftSmackdownMutation.isPending}
                >
                  Smackdown
                </button>
                <button
                  onClick={() => draftNXTMutation.mutate(wrestler.id)}
                  disabled={draftNXTMutation.isPending}
                >
                  NXT
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
  return (
    <>
      <h1>Draft your Wrestlers</h1>
      {/* DraftPool */}
      <WrestlerTable wrestlers={data} title="Draft Pool" />
      {/* Drafted Wrestlers */}
      <WrestlerTable wrestlers={rawWrestlers} title="RAW" />
      <WrestlerTable wrestlers={smackdownWrestlers} title="Smackdown" />
      <WrestlerTable wrestlers={nxtWrestlers} title="NXT" />
    </>
  )
}

export default Draft
