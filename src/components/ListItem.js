import React, { Component } from 'react';
import { CardSection } from './common';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import * as actions from '../actions';
import { connect } from 'react-redux'

class ListItem extends Component {
   
    renderDescription(){
        const {library,selectedLibraryId}=this.props;

        if(library.item.id === selectedLibraryId){
            return(
            <Text>{library.item.description}</Text>
            )
        }
    }
    render() {
        const { titleStyles } = styles;
        const {id,title}= this.props.library.item
        console.log(this.props.selectedLibraryId)
        return (
            <TouchableWithoutFeedback
            onPress={()=> this.props.selectLibrary(id)}
            >
                <View>
                <CardSection>
                    <Text style={titleStyles}>
                        {title}
                    </Text>
                </CardSection>
                {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        )
    }
}
const styles = {
    titleStyles: {
        fontSize: 16,
        padding: 7
    }
}
const mapStateToProps = state =>{
    return {selectedLibraryId: state.item.selectedLibraryId}
}
export default connect(mapStateToProps, actions)(ListItem);
//  export default ListItem;