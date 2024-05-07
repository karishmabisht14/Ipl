import { Table, Typography } from 'antd';


const BowlerStatTable = ({ bowlers }) => {


  const columns = [
    {
      title: 'Wickets',
      dataIndex: 'wickets',
      key: 'wickets',
    },
    {
      title: 'Bowling Strike Rate',
      dataIndex: 'strikeRate',
      key: 'strikeRate',
    },
    {
      title: 'Bowling Average',
      dataIndex: 'average',
      key: 'average',
    },
    {
      title: 'Economy',
      dataIndex: 'economy',
      key: 'economy',
    },
  ];

  const data = [
    { key: '1', wickets: bowlers?.wickets, strikeRate: bowlers?.bowling_strike_rate, average: bowlers?.bowling_average, economy: bowlers?.economy },

  ];

  return (
    <>
      <Typography.Title style={{ marginTop: '1.5rem', marginBottom: '1.5rem', fontStyle: 'italic' }}>
        Bowling Stats Table
      </Typography.Title>
      <Table style={{ border: '16px', marginTop: 50, marginBottom: 50, marginLeft: 70, marginRight: 70 }}
        columns={columns}
        dataSource={data}
        pagination={false}
        bordered
      />
    </>
  )



}
export default BowlerStatTable
