import React, { Component } from 'react';
import { List, Icon, Avatar } from 'antd'
interface Props { }

interface State { }

interface IconTextProps {
  type: string;
  text: string;
}

const IconText = ({ type, text }: IconTextProps ) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

export default class UseList extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
  }
  render() {
    const listData = [];
    for (let i = 0; i < 23; i++) {
      listData.push({
        href: 'http://ant.design',
        title: `ant design part ${i}`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
          'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
          'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
      });
    }

    return (
      <div>
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: page => {
              console.log(page);
            },
            pageSize: 5,
          }}
          dataSource={listData}
          footer={
            <div>
              <b>ant design</b> footer part
      </div>
          }
          renderItem={(item,index) => (
            <List.Item
              key={item.title}
            >
              {item.content}---{index}
            </List.Item>
          )}
        />
      </div>
    )
  }
}