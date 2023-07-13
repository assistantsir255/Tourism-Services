import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <View>
        <TouchableOpacity onPress={toggleMenu}>
          <Ionicons name='menu' size={32} color="#0B646B" />
        </TouchableOpacity>
        {isOpen && (
          <View>
     <TouchableOpacity>
  
     </TouchableOpacity>
          </View>
        )}
      </View>
    );
  };
  export default DropdownMenu;  