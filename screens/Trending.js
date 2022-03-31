import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
//galio
import { Block, Text, theme } from 'galio-framework';

import { trending, nowTheme } from '../constants/';
import { Card } from '../components/';


class Trending extends React.Component {
  renderCards = () => {
    return (
      <Block style={styles.container}>
      <Text size={16} style={styles.title}>
        Trending
      </Text>
        <Card item={trending[0]} horizontal />
        <Block flex row>
          <Card item={trending[1]} style={{ marginRight: theme.SIZES.BASE }} />
          <Card item={trending[2]} />
        </Block>
        <Card item={trending[3]} horizontal />
        <Card item={trending[4]} horizontal />
     
      </Block>
    );
  };

  render() {
    return (
      <Block flex>
        <ScrollView showsVerticalScrollIndicator={false}>{this.renderCards()}</ScrollView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.SIZES.BASE
  },
  title: {
    fontFamily: 'montserrat-bold',
    paddingBottom: theme.SIZES.BASE,
    marginTop: 44,
    color: nowTheme.COLORS.HEADER
  }
});

export default Trending;
