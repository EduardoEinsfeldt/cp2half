import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, StyleSheet, Dimensions } from 'react-native';
import { MotiView, AnimatePresence } from 'moti';
import React, { useState } from 'react';

import Home from '../screen/HomeScreen';
import Dev from '../screen/DevScreen';
import Form from '../screen/FormScreen';
import Info from '../screen/InfoScreen';
import Links from '../screen/LinkScreen';

const Tab = createBottomTabNavigator();
const { width, height } = Dimensions.get('window');

function AnimatedTransition({ children, activeKey }) {
  // A presença anima toda vez que activeKey muda
  return (
    <View style={{ flex: 1 }}>
      <AnimatePresence exitBeforeEnter>
        <MotiView
          key={activeKey}
          from={{
            scale: 0,
            opacity: 0,
            borderRadius: width,
          }}
          animate={{
            scale: 1,
            opacity: 1,
            borderRadius: 0,
          }}
          exit={{
            scale: 0,
            opacity: 0,
            borderRadius: width,
          }}
          transition={{
            type: 'timing',
            duration: 600,
          }}
          style={styles.transitionLayer}
        >
          {children}
        </MotiView>
      </AnimatePresence>
    </View>
  );
}

export default function TabRoutes({ route }) {
  const [activeTab, setActiveTab] = useState('tabHome');

  return (
    <Tab.Navigator
      screenListeners={{
        state: (e) => {
          const index = e.data.state.index;
          const name = e.data.state.routeNames[index];
          setActiveTab(name); // Atualiza o nome da aba atual
        },
      }}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#1e1e1e',
          borderTopColor: '#333',
        },
        tabBarActiveTintColor: '#81c784',
        tabBarInactiveTintColor: '#888',
      }}
      initialRouteName={route?.params?.initialRouteName || "tabHome"}
    >
      <Tab.Screen
        name='tabHome'
        options={{
          tabBarIcon: ({ color }) => <Feather name='home' size={20} color={color} />,
          tabBarLabel: "Início",
        }}
      >
        {() => (
          <AnimatedTransition activeKey={activeTab}>
            <Home />
          </AnimatedTransition>
        )}
      </Tab.Screen>

      <Tab.Screen
        name='tabDev'
        options={{
          tabBarIcon: ({ color }) => <Feather name='meh' size={20} color={color} />,
          tabBarLabel: "Devs",
        }}
      >
        {() => (
          <AnimatedTransition activeKey={activeTab}>
            <Dev />
          </AnimatedTransition>
        )}
      </Tab.Screen>

      <Tab.Screen
        name='tabForms'
        options={{
          tabBarIcon: ({ color }) => <Feather name='clipboard' size={20} color={color} />,
          tabBarLabel: "Formulário",
        }}
      >
        {() => (
          <AnimatedTransition activeKey={activeTab}>
            <Form />
          </AnimatedTransition>
        )}
      </Tab.Screen>

      <Tab.Screen
        name='tabInfo'
        options={{
          tabBarIcon: ({ color }) => <Feather name='info' size={20} color={color} />,
          tabBarLabel: "Info",
        }}
      >
        {() => (
          <AnimatedTransition activeKey={activeTab}>
            <Info />
          </AnimatedTransition>
        )}
      </Tab.Screen>

      <Tab.Screen
        name='tabLinks'
        options={{
          tabBarIcon: ({ color }) => <Feather name='link' size={20} color={color} />,
          tabBarLabel: "Links",
        }}
      >
        {() => (
          <AnimatedTransition activeKey={activeTab}>
            <Links />
          </AnimatedTransition>
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  transitionLayer: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    overflow: 'hidden',
  },
});
