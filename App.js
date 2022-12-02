import React, { useState } from 'react'
import { Text, TextInput, View, StyleSheet, Button, Image, TouchableOpacity, ImageBackground, Alert, ScrollView } from 'react-native'
import logo from './Images/todo.png'
import addi from './Images/add.png'
import dele from './Images/del.png'
import ed from './Images/edit.png'
import bgimage from './Images/bgimage.png'

const App = () => {
  const [list, setList] = useState([])
  const [text, setText] = useState('')
  const [index, setIndex] = useState(null)
  const [longPress, setLongPress] = useState(false)

  const add = () => {

    if (!text) {
      Alert.alert('Error', 'Enter Text', [{
        text:'Okay'
      }])
      return
    }



    if (index && index >-1) {
      list[index] = text
      setList([...list])
      setIndex(null)
      setText('')
    }else{

      setList([...list, text])
      setText('')
    }
  }

  const del = (i) => {
    list.splice(i,1);
    setList([...list])
  }

  let edit = i => {
    setIndex(i);
    let obj = list[i];
    setText(obj);
    console.log(obj)
  };
  

  const long = ()=>{

    setLongPress(false)
    setTimeout(() => {
      setLongPress(true)
    }, 3000);
  }


  return (

    //Login Screen 1
    // <>
    // <View >
    //   <View style={[{alignItems:'center',justifyContent:'center', marginVertical:150,marginHorizontal:40}]}>
    //   <Text>Login</Text>
    //   <TextInput style={login1.input} placeholder='Enter Username' />
    //   <TextInput style={login1.input} placeholder='Enter Password' />
    //   <TouchableOpacity><Text style={{marginVertical:10, backgroundColor:'yellow', padding:10, textAlign:'center'}}>Login</Text></TouchableOpacity>
    //   </View>
    // </View>
    // </>


    // Login Screen 2
    // <>
    // <View >
    //   <View style={[{alignItems:'center',justifyContent:'center', marginVertical:150,marginHorizontal:40}]}>
    //   <Text style={{fontSize:25, fontWeight:'bold'}}>Login</Text>
    //   <TextInput style={login2.input} placeholder='Enter Username' />
    //   <TextInput style={login2.input} placeholder='Enter Password' />
    //   <TouchableOpacity style={{width:'50%'}}><Text style={{marginVertical:10, backgroundColor:'blue',color:'white', padding:10, textAlign:'center'}}>Login</Text></TouchableOpacity>
    //   </View>
    // </View>
    // </>



    // Login Screen 3
    // <>
    // <View >
    //   <View style={[login3.box,login3.card,{alignItems:'center',justifyContent:'center', marginVertical:150,marginHorizontal:40}]}>
    //   <Text style={{fontSize:25, fontWeight:'bold'}}>Login</Text>
    //   <TextInput style={login3.input} placeholder='Enter Username' />
    //   <TextInput style={login3.input} placeholder='Enter Password' />
    //   <TouchableOpacity style={{width:'50%'}}><Text style={{marginVertical:10, backgroundColor:'blue',color:'white', padding:10, textAlign:'center'}}>Login</Text></TouchableOpacity>
    //   </View>
    // </View>
    // </>


    // // Login Screen 4
    // <>
    //  <View style={login4.main}>
    //    <View style={[login4.box,login4.card,{alignItems:'center',justifyContent:'center', marginVertical:150,marginHorizontal:40}]}>
    //    <Text style={{fontSize:25, fontWeight:'bold'}}>Login</Text>
    //    <TextInput style={login4.input} placeholder='Enter Username' />
    //    <TextInput style={login4.input} placeholder='Enter Password' />
    //    <TouchableOpacity style={{width:'50%'}}><Text style={{marginVertical:10, backgroundColor:'blue',color:'white', padding:10, textAlign:'center'}}>Login</Text></TouchableOpacity>
    //    </View>
    //  </View>
    //  </>



    // Login Screen 5
  //  <>
  //    <View style={login5.main}>
      
  //      <View style={[login5.box,login5.card,{alignItems:'center',justifyContent:'center', marginVertical:150,marginHorizontal:40}]}>
  //      <Text style={{fontSize:20,color:'skyblue', fontWeight:'bold'}}>Welcome Back</Text>
  //      <Text style={{fontSize:15,color:'skyblue', fontWeight:'bold'}}>Login</Text>
  //      <TextInput style={login5.input} placeholder='Enter Username' />
  //      <TextInput style={login5.input} placeholder='Enter Password' />
  //      <TouchableOpacity style={{width:'50%'}}><Text style={{marginVertical:10, backgroundColor:'blue',color:'white', padding:10, textAlign:'center'}}>Login</Text></TouchableOpacity>
  //      </View>
  //    </View>
  //    </>



    // Todo App
<View>
    <ImageBackground style={{ width: '100%', height: '100%' }} source={bgimage}>
    <View style={styels.container}>
      <Text style={styels.heading}>Todo App</Text>

      <View style={{ flexDirection: 'row' }}>
        <TextInput value={text} onChangeText={(e) => setText(e)} style={[styels.input, { flex: 4 }]} placeholderTextColor={'white'}  placeholder="What's Your Task?" />
        
        {index?
        (
          <TouchableOpacity onPress={add} >
          <Image style={[styels.addButton,{ width: 30, height: 30 }]} source={ed} />
        </TouchableOpacity>
        ):(<TouchableOpacity onPress={add} >
          <Image style={[styels.addButton,{ width: 30, height: 30 }]} source={addi} />
        </TouchableOpacity>)}
        
        
       
      </View>
    
      <ScrollView>
      {list.map((x, i) => <TouchableOpacity onLongPress={long} style={[styels.list,{flexDirection:'row'}]} key={i}><Text style={styels.todos}>{x}</Text>
       
       
        <View style={{flexDirection:'row'}}>
        <TouchableOpacity onPress={()=>edit(i)}>
        <Image style={[styels.delButton,{ width: 30, height: 30 }]} source={ed} />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>del(i)}>
        <Image style={[styels.delButton,{ width: 30, height: 30 }]} source={dele} />
      </TouchableOpacity>
      </View>
        
         
      </TouchableOpacity>)}
      </ScrollView>
       </View>
    </ImageBackground>
    </View>
  
  )
}

export default App



const styels = StyleSheet.create({
  container: {
    padding: 20,
    width: '100%',
    height: '100%'
  },
  heading: {
    textAlign: 'center',
    fontSize: 25,
    marginHorizontal: 60,
    backgroundColor: 'white',
    padding: 8,
    width: '65%',
    borderRadius: 10,
    fontWeight: 'bold'
  },
  input: {
    borderBottomWidth: 2,
    borderColor: 'white',
    marginVertical: 20,
    width: '100%',
    fontSize: 17,
    color: 'white', 
  },
todos: {
    fontSize:18,
    marginVertical: 5,
    padding:8,
    color: 'white',
    fontWeight: 'bold',
    borderRadius: 5,
    width:'75%'
  },
  delButton: {
    marginVertical:8
  },
  addButton: {
    marginVertical: 30,
    marginHorizontal:10

  }

})

// const login1 =  StyleSheet.create({
//   input:{
//     borderBottomWidth:2,
//     borderBottomColor:'black',
    
//   }
// })


// const login2 =  StyleSheet.create({
//   input:{
//     borderBottomWidth:2,
//     borderBottomColor:'black',
//     width:'50%'
//   }
// })


// const login3 =  StyleSheet.create({
//   input:{
//     borderBottomWidth:2,
//     borderBottomColor:'black',
//     width:'50%'
//   },
//   card: {
//     backgroundColor: 'skyblue',
//     borderRadius: 8,
//     paddingVertical: 45,
//     paddingHorizontal: 25,
//     width: '80%',
//     marginVertical: 10,
//   },
//   box:{
//     shadowColor: 'black',
//     shadowOffset: {width: -2, height: 4},
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//   }
// })


// const login4 =  StyleSheet.create({
//   input:{
//     borderBottomWidth:2,
//     borderBottomColor:'black',
//     width:'50%'
//   },
//   card: {
//     backgroundColor: 'white',
//     borderRadius: 8,
//     paddingVertical: 45,
//     paddingHorizontal: 25,
//     width: '80%',
//     marginVertical: 10,
//   },
//   box:{
//     shadowColor: 'gray',
//     shadowOffset: {width: -2, height: 4},
//     shadowOpacity: 0.9,
//     shadowRadius: 3,
//   },
//   main:{
//     backgroundColor:'gray'
//   }
// })

// const login5 =  StyleSheet.create({
//   input:{
//     borderBottomWidth:2,
//     borderBottomColor:'skyblue',
//     width:'50%'
//   },
//   card: {
//     backgroundColor: 'white',
//     borderRadius: 8,
//     paddingVertical: 45,
//     paddingHorizontal: 25,
//     width: '80%',
//     marginVertical: 10,
//   },
//   box:{
//     shadowColor: 'gray',
//     shadowOffset: {width: -2, height: 4},
//     shadowOpacity: 0.9,
//     shadowRadius: 3,
//   },
//   main:{
//     backgroundColor:'skyblue'
//   }
// })