import React from 'react';
import { StyleSheet, Text, View, Picker } from 'react-native';
import { Button, ThemeProvider,Header ,FormLabel } from 'react-native-elements';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';
import * as action from "./src/actions/SetRout";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


class Home extends React.Component {


 handleChangeDatatime = date => {
   // console.log(date);
    this.props.ChangeStartDatetime(date)
  }; 

  handleChange = date => {
  //  console.log(date);
    this.setState({
      startDate: date
    });
  };

  render() {
   // console.log(this.props.friends)
    return (
      
      <View>
      <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
      
      <Form>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>საიდან</Form.Label>
          <Form.Control as="select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>


        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>სად</Form.Label>
          <Form.Control as="select" onChange={this.props.SetRoute}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
      </Form>
      
    

         <Text>We have { this.props.friends.current.length } friends!</Text>
        <Button
          title="Add some friends"
          onPress={() =>
            this.props.navigation.navigate('Friends')
          }
        />

         <Form.Label>გასვლის დრო</Form.Label>
        <DatePicker
       // selected={this.props.StartDateTimeReducer}
        selected={new Date(this.props.StartDateTimeReducer)}
        // selected={new Date()}
        onChange={this.handleChangeDatatime}
        // minDate={ new Date() }
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        timeCaption="time"
        //dateFormat="YYYY-MM-DD HH:MM"
        // dateFormat="MM-dd H:mm"
        // dateFormat="MMMM d H:mm"
        // dateFormat="MM/dd/yyyy H:mm"
        dateFormat="MM-dd H:mm"
        //dateFormat="MMMM d, yyyy h:mm aa"
      />


         </View>
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/*
// Maps `dispatch` to `props`:
function mapDispatch (dispatch) {
  return {
    onMessageClick (message) {
      dispatch({ type: 'click', message })
    }
  }
}
*/
const mapStateToProps = (state) => {
  const { friends,  StartDateTimeReducer } = state

    console.log('Home shi StartDateTimeReducer : ', StartDateTimeReducer.RouteStartDateTime)
    const datetime =  StartDateTimeReducer.RouteStartDateTime

  return { friends : friends , startDate : new Date(),state : state ,StartDateTimeReducer:datetime}
};

export default connect(mapStateToProps,action)(Home);