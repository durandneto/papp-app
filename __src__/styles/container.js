let Container = {
  flex: 1
  , flexDirection: 'column'
  , justifyContent: 'space-between'
}
let ContainerFlexStart = {
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'flex-start',
}

let ContainerRow = {
  flex: 1
  , flexDirection: 'row'
}
let ContainerFlexSpace = {
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'space-between',
}
let ContainerFlexSpaceAround = {
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'space-around',
}

let ContainerTab = {
  height:48
  , marginTop: 35
  , marginBottom: 10
  , marginLeft: 10
  , marginRight: 10

}

let Height = {
  fill: {
    height: '100%'
  }
}

let Background = {
  purple: {
    backgroundColor: "rgba(189,16,224,0.6)"
  }
  , green: {
    backgroundColor: "rgba(126,211,33,0.6)"
  }
  , black: {
    backgroundColor: "rgba(0,0,0,0.9)"
  }
  , red: {
    backgroundColor: "rgba(160, 27, 27,0.9)"
  }
  , primary: {
    backgroundColor: "#FB7800"
  }
  , second: {
    backgroundColor: "#FFA100"
  }
  , info: {
    backgroundColor: "#FDCB00"
  }
  , light: {
    backgroundColor: "#CFD8DC"
  }
}

let Fonts = {
  Avenir: {
    fontFamily: "Avenir"
  }
  , ContrailOne: {
    fontFamily: "arial"
  }
}

let TextStyles=  {
  title: {
    fontSize: 18
    , fontWeight: "500"
    , lineHeight: 21
    , color:"#fff" 
  }
  , red: {
    color: '#FC3F1D'
    , fontSize: 26
    , alignSelf: 'center'
  }
  , white: {
    color: '#fff'
    , fontSize: 26
    , alignSelf: 'center'
  }
  , tabTitle: {
    color: '#CFD8DC'
    , fontSize: 22
    , height: 22
    , marginLeft:10
    , letterSpacing: -2
    , fontWeight: '500'
    , fontStyle: 'italic'
    , alignSelf:'flex-end'
  }
  , tabTitleActive: {
    color: '#FC3F1D'
    , fontSize: 22
    , marginLeft:10
    , letterSpacing: -2
    , fontWeight: '500'
    , alignSelf:'flex-end'
    , textDecorationLine: 'underline'
    , fontStyle: 'italic'
  }
  , notificationTitle: {
    color: '#37474F'
    , fontSize: 14
    , fontWeight: "900"
    , lineHeight: 19
  }
  , notificationTitleInative: {
    color: '#78909C'
    , fontSize: 14
    , fontWeight: "900"
    , lineHeight: 19
  }
  , notificationDescription: {
    color: '#90A4AE'
    , fontSize: 13
    , fontWeight: "300"
    , lineHeight: 18
  }
  , notificationDate: {
    color: '#90A4AE'
    , fontSize: 13
    , fontWeight: "300"
    , lineHeight: 18
    , alignSelf: 'center'
  }
  , topicTitle: {
    color: "#FFFFFF"
    , fontSize: 18
    , fontWeight: "900"
    , lineHeight: 18
    , alignSelf: 'center'
  }
  , groupTitle: {
    color: "#37474F"
    , fontSize: 20
    , fontWeight: "900"
    , lineHeight: 27
  }
  , languageRow: {
    color: "#37474F"
    , fontSize: 17
    , fontWeight: "900"
    , lineHeight: 23
  }
  , groupDescription: {
    color: "#B0BEC5"
    , fontSize: 13
    , fontWeight: "900"
    , lineHeight: 18
  }
  , groupPlatform: {
    color: "#90A4AE"
    , fontSize: 14
    , fontWeight: "900"
    , lineHeight: 19
  }
  , nearBy: {
    color: "#607D8B"
    , fontSize: 22
    , fontWeight: "300"
    , lineHeight: 26
    , textAlign: 'center'
    , marginBottom: 30
  }
  , nearByTitle: {
    color: '#FC3F1D'
    , fontSize: 14
    , fontWeight: '500'
    , letterSpacing: -1
    , fontStyle: 'italic'
    , textAlign: 'center'
  }
}

let Toolbar= {
  header:{
    paddingTop:30,
    paddingBottom:10,
    flexDirection:'row'   
  },
  title:{
    textAlign:'center'
    , flex:1
    , color: "#FC3F1D"
    , fontSize: 30
    , letterSpacing: -1
    , lineHeight: 34
  },
  button:{
    width: 50,           
    color: "#FC3F1D",
    textAlign:'center'
  }
}

export default Container
export { Height }
export { Background }
export { Fonts }
export { TextStyles }
export { ContainerRow }
export { ContainerFlexSpace }
export { ContainerFlexSpaceAround }
export { ContainerTab }
export { Container }
export { Toolbar }