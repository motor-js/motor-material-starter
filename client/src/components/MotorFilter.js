import { useList } from '@motor-js/engine'
import { Filter } from '@motor-js/components'

export default function MotorFilter ({ dimension}) {

  const { listData, motorListProps } = useList({ dimension })

  console.log(listData)

  return (
    <Filter 
      m={10}
      size='small'
      listData={listData}
      motorListProps={motorListProps}
    />
  )

}
