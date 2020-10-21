import React from 'react';
import 'antd/dist/antd.css';
import { Table } from 'antd';
import { Link } from 'react-router-dom';
import { ROUTES } from 'constants/routes-constants';

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

const HerosTable = (props) => {
  const { data } = props;
  const columns = [
    {
      title: '',
      dataIndex: 'img',
      key: 'img',
      render: (text) => <img src={`${API_ENDPOINT}${text}`} alt="hero" />,
    },
    {
      title: 'Heros',
      dataIndex: 'localized_name',
      key: 'localized_name',
      render: (text, record) => (
        <Link to={{
          pathname: `${ROUTES.HERO_DETAIL}/${record.id}`,
          data: record,
        }}
        >
          {text}
        </Link>
      ),
    },
    {
      title: 'Pros Pick/Bans',
      dataIndex: 'pro_pick',
      key: 'pro_pick',
      render: (text, record) => <div>{`${text}/${record.pro_ban}`}</div>,
    },
    {
      title: 'Pros Win',
      dataIndex: 'pro_win',
      key: 'pro_win',
    },
  ];

  return <Table dataSource={data} columns={columns} />;
};

export default HerosTable;
