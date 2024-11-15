//=============Ex1========================
// import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
//
// const styles = StyleSheet.create({
//         container: {
//
//         },
//     })
// ;
//
// const App = () => {
//     return (
//         <View style={styles.container}>
//             <StatusBar hidden={true} />
//             <Text style = {{fontSize: 24}}>Values</Text>
//             <Text style = {{color: 'green'}}>Excellence</Text>
//             <Text style = {{backgroundColor: 'yellow'}}>Customer-Centric</Text>
//             <Text style = {{fontStyle: 'italic'}}>Integrity</Text>
//             <Text style = {{textAlign: 'center'}}>Teamwork</Text>
//             <Text style = {{backgroundColor: 'black', color: 'white'}}>Enterprising</Text>
//         </View>
//     );
// }
//
// export default App;

//====================== Ex2 ====================
// import React from 'react';
// import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
//
// const styles = StyleSheet.create({
//         greenBox: {
//             width: 100,
//             height: 100,
//             marginTop: 30,
//             backgroundColor: 'green',
//             borderWidth: 1,
//             borderColor: 'black',
//         },
//         boxText: {
//             textAlign: 'center',
//             color: 'white',
//         },
//         title: {
//             fontWeight: 'bold',
//         },
//     })
// ;
//
// const App = () => {
//     return (
//         <View>
//             <StatusBar hidden={true} />
//             <View style = {styles.greenBox}>
//                 <Text style = {[styles.boxText, styles.title]}>Who We Are</Text>
//             </View>
//             <View style = {styles.greenBox}>
//                 <Text style = {styles.boxText}>Our People</Text>
//             </View>
//             <View style = {styles.greenBox}>
//                 <Text style = {styles.boxText}>Our Campus</Text>
//             </View>
//
//         </View>
//     );
// }
//
// export default App;

// ===================== Ex3 =====================
// import React from 'react';
// import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
//
// const styles = StyleSheet.create({
//         parent: {
//             flexDirection: 'column',
//             backgroundColor: '#F5fcff',
//             borderColor: '#0099AA',
//             borderWidth: 5,
//             flex: 1,
//             justifyContent: 'space-between',
//         },
//         child: {
//             borderWidth: 2,
//             fontSize: 24,
//             textAlign: 'center',
//         },
//     })
// ;
//
// const App = () => {
//     return (
//         <View style = {styles.parent}>
//             <StatusBar hidden={true} />
//             <Text style = {[styles.child, {backgroundColor: 'powderblue'}]}>Child One</Text>
//             <Text style = {[styles.child, {backgroundColor: 'skyblue'}]}>Child Two</Text>
//             <Text style = {[styles.child, {backgroundColor: 'steelblue'}]}>Child Three</Text>
//         </View>
//     );
// }
//
// export default App;

// ===================== Ex4 ====================
import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';

const styles = StyleSheet.create({
        parent: {
            flexDirection: 'row',
            backgroundColor: 'whitesmoke',
            marginTop: 30,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        child: {
            width: 80,
            height: 80,
            margin: 20,
            textAlignVertical: 'center',
        },
    })
;

const App = () => {
    return (
        <View style = {styles.parent}>
            <StatusBar hidden={true} />
            <Text style = {[styles.child, {backgroundColor: 'skyblue'}]}>Square One</Text>
            <Text style = {[styles.child, {backgroundColor: 'lightgreen'}]}>Square Two</Text>
            <Text style = {[styles.child, {backgroundColor: 'red'}]}>Square Three</Text>
        </View>
    );
}

export default App;
