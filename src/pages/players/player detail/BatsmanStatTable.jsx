import { Table, Typography } from 'antd';

const BatsmanStatTable = ({ batsmen }) => {


  const columns = [
    {
      title: 'Runs',
      dataIndex: 'runs',
      key: 'runs',
    },
    {
      title: 'Batting Strike Rate',
      dataIndex: 'strikeRate',
      key: 'strikeRate',
    },
    {
      title: 'Batting Average',
      dataIndex: 'average',
      key: 'average',
    },
  ];

  const data = [
    { key: '1', runs: batsmen?.runs, strikeRate: batsmen?.batting_strike_rate, average: batsmen?.batting_average },

  ];

  return (
    <>
      <Typography.Title style={{ marginTop: '1.5rem', marginBottom: '1.5rem', fontStyle: 'italic' }}>
        Batting Stats Table
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
export default BatsmanStatTable


