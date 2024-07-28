import React, { useState } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import Exstyles from './components/style'
const App = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [display, setDisplay] = useState(false)
  
  const reset =()=>{
    setDisplay("false")
    setName("")
    setEmail("")
    setPassword("")
  }

  return (

    <View>
      <Text style={{ fontSize: 30 }}> Simple form text </Text>
      <TextInput
        placeholder='enter user name'
        style={Exstyles.talha}
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <TextInput
        placeholder='enter email'
        style={Exstyles.talha}
        onChangeText={(text) => setEmail(text)}
        value={email}/>
        <TextInput
        placeholder='enter password'
        style={Exstyles.talha}
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <View style={{ marginBottom: 10 }} >
        <Button title='print details ' onPress={()=>setDisplay(true)}/>
      </View>
      <Button title="clear details"  onPress={reset}/>
      <View>
        {
          display ?
          <View>
            <Text style={{ fontSize: 15 }}>{name}</Text>
              <Text style={{ fontSize: 15 }}>{email}</Text>
              <Text style={{ fontSize: 15 }}>{password}</Text>
          </View>
          :null
        }
      </View>
        
        
    </View>
      )
}



 export default App
