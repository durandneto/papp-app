import React, { Component } from 'react';
import { AppRegistry, View, Text, TouchableOpacity } from 'react-native';
import{ ContainerRow, ContainerTab, TextStyles} from './../styles/container'

class TabeHeader extends Component {
  render() {
    return (
      <View style={ContainerTab}>
        <View style={ContainerRow}>

            {
              this.props.tabs.get('data').map( ( tab , key ) => {
                if (tab === this.props.tabs.get('selected')) {
                  return  ( <View key={key} >
                            <Text style={TextStyles.tabTitleActive}>{tab}</Text>
                          </View> )
                } else {
                  return (
                    <TouchableOpacity  key={key} 
                    onPress={this.props.select_header_tab.bind(this,tab)}>
                      <View >
                        <Text  style={TextStyles.tabTitle}>{tab}</Text>
                      </View>
                    </TouchableOpacity>
                  )
                  }
              })
            } 
        </View>
      </View>
    );
  }
}


export default TabeHeader
