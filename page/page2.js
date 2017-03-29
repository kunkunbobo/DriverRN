/**
 * Created by yzw on 2017/2/14.
 */
import React, { Component ,PropTypes} from 'react';
import {
    Text,
    View,
    Navigator,
    TouchableHighlight,
    Platform,
    ListView,
    Image
} from 'react-native';


export default class Page2 extends Component {


    constructor() {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        let list = [
            {text:'name0',imageUrl:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2763625559,1806590128&fm=23&gp=0.jpg'},
            {text:'name1',imageUrl:'https://cdn.pixabay.com/photo/2017/02/18/13/55/swan-2077219__480.jpg'},
            {text:'name2',imageUrl:'https://cdn.pixabay.com/photo/2017/01/28/21/48/lion-2016620__480.jpg'},
            {text:'name3',imageUrl:'https://cdn.pixabay.com/photo/2017/02/06/12/34/reptile-2042906__480.jpg'},
            {text:'name4',imageUrl:'https://cdn.pixabay.com/photo/2017/02/05/17/39/garden-2040714__480.jpg'},
            {text:'name5',imageUrl:'https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453__480.jpg'},
            {text:'name6',imageUrl:'https://cdn.pixabay.com/photo/2017/02/12/19/05/noodles-2060886__480.jpg'},
            {text:'name7',imageUrl:'https://cdn.pixabay.com/photo/2016/12/27/21/03/lone-tree-1934897__480.jpg'},
            {text:'name8',imageUrl:'https://cdn.pixabay.com/photo/2017/01/29/20/46/eyes-2019364__480.jpg'},
            {text:'name9',imageUrl:'https://cdn.pixabay.com/photo/2017/02/13/22/27/milk-splash-2064088__480.jpg'},
            {text:'name10',imageUrl:'https://cdn.pixabay.com/photo/2017/02/14/03/03/ama-dablam-2064522__480.jpg'}];


        var data = [];
        for(let i=0;i<1000;i++){

            data = data.concat(list);
        }



        this.state = {
            dataSource: ds.cloneWithRows(data),
        };
    }

    componentDidMount() {
       this.props.navigator.refeshNavBar({
           renderLeftButton: (route, navigator, index, navState)=> {
               return <Text onPress={()=>navigator.pop()}>返回</Text>
           }
       })
    }

    renderCell(rowData, sectionID, rowID){

        let text = `${rowID}  ` + rowData.text;

        return <View style={{height:44,borderColor:'gray',borderWidth:0.5,flexDirection:'row',alignItems:'center'}}>
            <Image style={{width:64.5,height:43}} source={{uri:rowData.imageUrl}}/>
            <Text style={{marginLeft:10}}>{text}</Text>
        </View>
    }
    render() {

        return (<View style={{backgroundColor:'white',flex:1,marginTop: Platform.OS === "ios" ? 64 : 54,}}>
                <ListView enableEmptySections={true} dataSource={this.state.dataSource}  renderRow={this.renderCell.bind(this)}/>
            </View>
        );
    }
}