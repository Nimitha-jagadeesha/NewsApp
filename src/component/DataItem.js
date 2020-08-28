import React,{Component} from 'react'
import {ListItem,List,Thumbnail,Body,Text,Button,Left,Right} from 'native-base'

class DataItem extends Component{
  constructor(props){
      super(props);
      this.data=props.data;
  }
  
    render(){
        return(
            <ListItem thumbnail>
            <Left>
              <Thumbnail square source={{ uri: this.data.urlToImage!=null?this.data.urlToImage:'https://picsum.photos/seed/picsum/200/300' }} />
            </Left>
            <Body>
              <Text numberOfLines={2}>{this.data.title}</Text>
              <Text note numberOfLines={2}>{this.data.description}</Text>
            </Body>
            <Right>
              <Button transparent>
                <Text>View</Text>
              </Button>
            </Right>
          </ListItem>
        );
    }
}

export default DataItem;