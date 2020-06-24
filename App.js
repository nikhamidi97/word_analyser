import React, {Component} from 'react';
import {Text, View, Button, TextInput, Alert} from 'react-native';
import {Styles} from './Styles';

export default class App extends Component{
  constructor(){
    super();
    this.state = {

      word: "",
      vowel: 0,
      consonant: 0,
      calculate: 0
      

    }
  }

  analyzation = () => {
    let v = 0;
    let k = 0; 
    let word = this.state.word;

    for(let i = 0 ; i < word.length ; ++i){
      if ( word[i]=='a' || word[i]=='i' || word[i]=='o' || word[i]=='u' || word[i]=='e' ||  word[i]=='A' || word[i]=='I' || word[i]=='O' || word[i]=='U' || word[i]=='E')
      {
        v++;
      }
      else
      {
        k++;
      }

      this.setState({vowel:v})
      this.setState({consonant:k});
    }

  }

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.container}>
        <Text style={Styles.title}>Word Analyser</Text>
        <Text style={Styles.developer}>by Nik Hamidi</Text>
        </View>
        <View style={Styles.container}>
        <TextInput onChangeText={(word) => this.setState({word})} style={Styles.instructions} placeholder='Type Your Word Here'/>
       
        </View>
        <View style={Styles.container}>
        <Button color="#ff7675" onPress={this.analyzation} title='Analyse'/>
        <Text></Text>
        <Text style={Styles.answer}>Total Word : {this.state.word.length}</Text>
        <Text style={Styles.answer}>Vowel: {this.state.vowel}</Text>
        <Text style={Styles.answer}>Consonant: {this.state.consonant}</Text>
        </View>
      </View>
    );
  }
}
