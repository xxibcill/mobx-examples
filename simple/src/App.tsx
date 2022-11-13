import { Button, Typography, Space } from 'antd'
import { observer } from 'mobx-react-lite'
import { countStore } from './store/CountStore'

const { Text } = Typography

export default observer(() => {
  return (
    <Space>
      <Text>Value: {countStore.value}</Text>
      <Text>2x Value: {countStore.double}</Text>
      <Button type="primary" onClick={(_) => countStore.increment()}>
        Increase
      </Button>
      <Button type="dashed" onClick={(_) => countStore.clear()}>
        Clear
      </Button>
    </Space>
  )
})
