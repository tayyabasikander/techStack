import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import {FlatList} from 'react-native';
import ListItem from './ListItem';


class LibraryList extends Component{
    renderItem(library){
      return <ListItem library={library} />;
    }
     render(){
       
       return(
        <FlatList 
        data={this.props.libraries}
        renderItem={this.renderItem}
        keyExtractor={(library )=>library.id}
        />
       )
     }

}
const mapStateToProps = state => {
    // console.log (state);
    return { libraries: state.Libraries }
}
export default connect(mapStateToProps)(LibraryList);