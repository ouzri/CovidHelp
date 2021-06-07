import React from 'react';
import { Button, View, Text ,TextInput, StyleSheet, Alert} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
const radio_props = [
  {label: 'Non', value: 0 },
  {label: 'Oui', value: 1 }
];
const radio_props_Q1 = [
  {label: 'Non', value: 0 },
  {label: 'Oui', value: 1 }
];
const radio_props_Q3 = [
  {label: 'Non', value: 0 },
  {label: 'Oui', value: 1 }
];

class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitleStyle: { alignSelf: 'center' },
    headerTitle: 'CovidHelp',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>CovidHelp </Text>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1, margin: 10,
          }}
        />

        <Button
          onPress={() => { this.props.navigation.navigate('Q1') }}
          title="Démarrer le test"
          color="#841584"
        />
      </View>
    );
  }
}

class Q1 extends React.Component {
  static navigationOptions = {
    headerTitleStyle: { alignSelf: 'center' },
    headerTitle: 'Question 1 sur 23',
  };
  state = {
    checked: 0,
  }

  render() {
    const { checked } = this.state;
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={{  margin: 10,  }}>Pensez-vous avoir ou avoir eu de la fièvre ces derniers jours (frissons, sueurs) ?</Text>
        <Text>Sélectionnez une option :</Text>
        <RadioForm
          radio_props={radio_props}
          initial={0}
          onPress={(value) => {this.setState({checked:value})}}
        />
        {/* <Text>{checked}</Text> */}
        <Button
          onPress={() => {
            this.props.navigation.navigate('Q2', {
              dataRepQ1: this.state.checked 
            });
          }}
          title="Continuer"
          color="#841584"
  />
        
      
      </View>
    );
  }
}

class Q2 extends React.Component {
  static navigationOptions = {
    headerTitleStyle: { alignSelf: 'center' },
    headerTitle: 'Question 2 sur 23',
  };
  constructor(props) {
    super(props);
    this.state = {
      temperature: ''
    }
  }
  componentDidMount() {
    const dataRepQ1 = this.props.navigation.getParam('dataRepQ1');
    this.setState({
      dataRepQ1
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{  margin: 10,  }}>Quelle est votre température corporelle ?</Text>
        <Text>Remplissez le champ :</Text>
        <TextInput
          style={{ height: 40, width: 160, marginBottom: 10, borderColor: 'gray', borderWidth: 1 }}
          keyboardType='numeric'
          onChangeText={(temperature) => this.setState({ temperature })}
          value={this.state.temperature}
        />
        <Button
          onPress={() => {
            this.props.navigation.navigate('Q3', {
              
              dataRepQ1: this.state.dataRepQ1,
              dataRepQ2: this.state.temperature,

            });
          }}
          title="Continuer"
          color="#841584"
        />
      </View>
    );
  }
}

class Q3 extends React.Component {
  static navigationOptions = {
    headerTitleStyle: { alignSelf: 'center' },
    headerTitle: 'Question 3 sur 23',
  };
  constructor(props) {
    super(props);
    this.state = {
      dataRepQ3: 0
    }
  }
  // state = {
  //   dataRepQ3: 0,
  // }
  componentDidMount() {
    const dataRepQ1 = this.props.navigation.getParam('dataRepQ1');
    const dataRepQ2 = this.props.navigation.getParam('dataRepQ2');
    this.setState({
      dataRepQ1,dataRepQ2,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{  margin: 10,  }}>Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ?</Text>
        
        <Text>Sélectionnez une option :</Text>

        <RadioForm
          radio_props={radio_props}
          initial={0}
          onPress={(value) => {this.setState({dataRepQ3:value})}}
        />

        <Button
          onPress={() => {
            this.props.navigation.navigate('Q4', {
              dataRepQ1: this.state.dataRepQ1,
              dataRepQ2: this.state.dataRepQ2,
              dataRepQ3: this.state.dataRepQ3,
              

            });
          }}
          title="Continuer"
          color="#841584"
        />
      </View>
    );
  }
}
class Q4 extends React.Component {
  static navigationOptions = {
    headerTitleStyle: { alignSelf: 'center' },
    headerTitle: 'Question 4 sur 23',
  };
  
  constructor(props) {
    super(props);
    this.state = {
      dataRepQ4: 0
    }
  }
  // state = {
  //   dataRepQ3: 0,
  // }
  componentDidMount() {
    const dataRepQ1 = this.props.navigation.getParam('dataRepQ1');
    const dataRepQ2 = this.props.navigation.getParam('dataRepQ2');
    const dataRepQ3 = this.props.navigation.getParam('dataRepQ3');
    this.setState({
      dataRepQ1,dataRepQ2,dataRepQ3,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{  margin: 10,  }}>Ces derniers jours, avez-vous noté une forte diminution ou perte de votre goût ou de votre odorat ?</Text>
        
        <Text>Sélectionnez une option :</Text>

        <RadioForm
          radio_props={radio_props}
          initial={0}
          onPress={(value) => {this.setState({dataRepQ4:value})}}
        />

        <Button
          onPress={() => {
            this.props.navigation.navigate('Resultat', {
              dataRepQ1: this.state.dataRepQ1,
              dataRepQ2: this.state.dataRepQ2,
              dataRepQ3: this.state.dataRepQ3,
              dataRepQ4: this.state.dataRepQ4,
              

            });
          }}
          title="Continuer"
          color="#841584"
        />
      </View>
    );
  }
}




// create a component Resultat
class Resultat extends React.Component  {

  constructor(props){
      super(props);
      this.state = {
        dataRepQ2:''
      }
  }

  componentDidMount(){
  const dataRepQ1 = this.props.navigation.getParam('dataRepQ1');
  const dataRepQ2 = this.props.navigation.getParam('dataRepQ2');
  const dataRepQ3 = this.props.navigation.getParam('dataRepQ3');
  const dataRepQ4 = this.props.navigation.getParam('dataRepQ4');
  this.setState({
    dataRepQ1,dataRepQ2,dataRepQ3,dataRepQ4
  });
  }
// Remarque : cette syntaxe est expérimentale et n'est pas encore standardisée
handleClick = () => {
 let dt = this.state.dataRepQ2;
  if(dt === '40'){
  console.log("resultat positif");
  Alert.alert("resultat positif");
}else{
  console.log("resultat negatif");
  Alert.alert("resultat negatif");
}
}
  render() {
      return (
          <View style={styles.container}>
              <Text>dataRepQ1: {this.state.dataRepQ1}</Text>
              <Text>dataRepQ2: {this.state.dataRepQ2}</Text>
              <Text>dataRepQ3: {this.state.dataRepQ3}</Text>
              <Text>dataRepQ4: {this.state.dataRepQ4}</Text>
          <Button
            onPress={this.handleClick}
            title="Afficher le resultat"
            color="#841584"
          />
          {/* <Button
            
            title="Afficher le Details"
          onPress={()=>{this.props.navigation.navigate('Details');}}
          /> */}
          </View>
      );
  }
}




const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
  },
  image: {
      height: 180,
      width: 200,
      transform: [{ rotate: '90deg' }]
  }
});

const RootStack = createStackNavigator({
  Home: HomeScreen,
  Q1:Q1,
  Q2:Q2,
  Q3:Q3,
  Q4:Q4,
  
  Resultat: {
    screen: Resultat,
  },
  
},
{
  initialRouteName: 'Home',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
});

export default createAppContainer(RootStack);