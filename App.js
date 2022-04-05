import React, {useState} from "react"
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView,TextInput, Platform, ScrollView,StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Task from "./components/Task"
export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const handleAddTask = () => {
    setTaskItems([...taskItems,task])
    setTask(null)
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems]
    itemsCopy.splice(index,1)
    setTaskItems(itemsCopy)
  }
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>
            Today's Task
        </Text>

        <View style={styles.items}>
          {/* <Task  text={'Task 1'}/>
          <Task text={'Task 2'}/> */}
<ScrollView>
          {
            taskItems.map((item,index) => (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>

              <Task text={item} />
              </TouchableOpacity>
              
            ))
          }
          </ScrollView>
        </View>
      </View>

      <KeyboardAvoidingView
      behavior={Platform.os ==="ios"?"padding":"height"}
      style={styles.writeTaskWrapper}
      >
<TextInput style={styles.input} placeholder={'write a task'} value={task} onChangeText={text=>setTask(text)}/>

<TouchableOpacity onPress={() => handleAddTask()}>
  <View style={styles.addWrapper}>
    <Text style={styles.addText}>+</Text>
  </View>
</TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED'
  },
  tasksWrapper:{

paddingTop:80,
paddingHorizontal:20
  },
  sectionTitle:{

   fontWeight: "bold",
   fontSize: 24,


  },
  items:{
marginTop:30,
marginBottom:180,
  },
  writeTaskWrapper:{
    position:"absolute",
    bottom:20,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    
  },
  input:{
    paddingVertical:15,
    paddingHorizontal:15,
    width:250,
    backgroundColor:"#FFF",
    borderRadius:60,
    borderColor:"#C0C0C0",
    borderWidth:1,
  },
  addWrapper:{
    width:60,
    height:60,
    backgroundColor:"#FFF",
    borderRadius:60,
    justifyContent:"center",
    alignItems:"center",
    borderColor:"#C0C0C0",
    borderWidth:1,
  },
  addText:{},
  scroll:{
    marginBottom:20
  }
});
