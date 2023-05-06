import React from 'react'
import { Text, View,StyleSheet,Image, Linking ,TouchableOpacity} from 'react-native'

export default function Contact ()  {
   
    const contacts=[
        {
            name:"Akash Pandey",
            img:'https://scontent.fccu9-3.fna.fbcdn.net/v/t1.6435-9/201117510_1477388895929936_5443265029414695810_n.jpg?stp=dst-jpg_p206x206&_nc_cat=111&ccb=1-7&_nc_sid=da31f3&_nc_ohc=jsCyEzoRAC4AX9Rsw7o&_nc_ht=scontent.fccu9-3.fna&oh=00_AfAifWynngenxofatBxJ5FUz-di-Ud61fUG4NE2pPpJL1Q&oe=647D4CEF',
            description:'I am currently studying D pharm in kolkata',
            uri:'https://www.facebook.com/profile.php?id=100009765183252'
        },
        {
            name:"Shubhadeep Mahato",
            img:'https://scontent.fccu9-3.fna.fbcdn.net/v/t39.30808-6/336376720_657182306176427_3844543285940851821_n.jpg?stp=c0.9.206.206a_dst-jpg_p206x206&_nc_cat=110&ccb=1-7&_nc_sid=da31f3&_nc_ohc=DM23cMgDaSIAX9WopoB&_nc_ht=scontent.fccu9-3.fna&oh=00_AfAjR4NlvAZIVhsadRSVMkAbO19LesCdOYlLE5h8vm038g&oe=6459D212',
            description:'I am currently studying Computer Science to become succesfull software Engineer in future',
            uri:'https://www.facebook.com/shubhadeep.mahato.146/',
        },
        {
            name:"Saheb Mahato",
            img:'https://scontent.fccu9-1.fna.fbcdn.net/v/t39.30808-6/343000812_911980703349116_956330869982544739_n.jpg?stp=dst-jpg_p526x296&_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=rBGKD82Lao0AX8SsW4F&_nc_ht=scontent.fccu9-1.fna&oh=00_AfD3FTfL15uGlThE1ppaBGhakALLjpgDMU8O2ylueS8GRA&oe=645AC936',
            description:'I am currently L&T Company in Odisha',
            uri:'https://www.facebook.com/saheb.r.mahato'
        },
    ]
    const redirect=(link)=>{
        Linking.openURL(link)
    }
 
    return (
      <View>
        <Text style={styles.headingText}> Contact List </Text>
        <View  style={styles.container}>
            {contacts.map((item,index)=>(
                <TouchableOpacity key={index} style={styles.profile} onPress={()=>redirect(item.uri)}>
                    <Image style={styles.img} source={{uri:item.img}} ></Image>
                    <View style={styles.data}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.description}>{item.description.substring(0,50)}</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </View>
      </View>
    )
  
}
const styles=StyleSheet.create({
    headingText:{
        fontSize:20,
        fontWeight:'600'
    },
    container:{
       padding:10,
    },
    profile:{
        padding:7,
        margin:5,
        flexDirection:'row',
        backgroundColor:'purple',
        borderRadius:10,

    },
    img:{
        height:60,
        width:60,
        borderRadius:30,
        borderWidth:2,
        borderColor:'green',
        marginTop:5,
    },
    data:{
        padding: 5,
        marginLeft:5,
    },
     
    name:{
        fontSize:16,
        color:'green',
        fontWeight:'800',
        marginLeft:5,
    },
    description:{
        textAlign:'left',
        margin:5,
        width:250,
    },


})
