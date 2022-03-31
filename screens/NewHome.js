import React, {useEffect, useState} from "react";
import { StyleSheet, Dimensions, ScrollView, View, FlatList, TouchableOpacit } from "react-native";
import * as rssParser from 'react-native-rss-parser';

import { Card, Button } from "../components";
import feed from "../constants/feed";
import Header from "../components/Header.js";

import {
  TouchableOpacity,
  Image,
  Animated,
  ImageBackground
} from 'react-native';

import Articles from '../screens/Articles';
// Galio components
import { Block, Text, Button as GaButton, theme } from 'galio-framework';

// Now UI themed components
import { Images, nowTheme, tabs } from '../constants';
import { Select, Icon, Input, Switch } from '../components';

import Img from '../components/Img';



const { width } = Dimensions.get('screen')

const thumbMeasure = (width - 48 - 32) / 3;

class NewHome extends React.Component {
  renderFeed = () => {
      return(
           <ScrollView
        showsVerticalScrollIndicator={false}
        
      >
        <Block flex>
        <Card item={feed[0]} horizontal />
          <Block flex row>
            <Card
              item={feed[1]}
              style={{ marginRight: theme.SIZES.BASE }}
            />
            <Card item={feed[2]} />
          </Block>
          <Card item={feed[3]} horizontal />
          <Card item={feed[4]} full />
        </Block>
      </ScrollView>
      )
  }
  render () {
    return (
   <Block flex center style={styles.home}>
        {this.renderFeed()}
      </Block>
    );
  } 
}

const styles = StyleSheet.create({
  home: {
    width: width
  },
  
});

 export default NewHome;
