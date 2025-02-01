import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import useSQLiteUsers from '../DB/useSQLiteUsers';

function App() {
  const { createUser } = useSQLiteUsers();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-bold color-red-700">App</Text>

      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Name"
        className="border border-gray-300 p-2 mt-4"
      />
      <TextInput
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder="Email"
        className="border border-gray-300 p-2 mt-4"
      />
      <TextInput
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder="Password"
        className="border border-gray-300 p-2 mt-4"
        secureTextEntry
      />

      <TouchableOpacity
        onPress={() =>
          createUser({
            user_name: name,
            user_email: email,
            user_password: password,
            user_role: 'admin',
          })
        }
        className="bg-blue-500 p-4 mt-4"
      >
        <Text className="text-red-500 font-bold">Press Me</Text>
      </TouchableOpacity>
    </View>
  );
}

export default App;
