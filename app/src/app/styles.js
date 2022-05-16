/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */

export default {
  main: {
    backgroundColor: '#fff',
    border: '1px solid #e6e6e6',
    borderBottomRightRadius: '3px',
    borderTopRightRadius: '3px',
    maxWidth: '935px',
    margin: '16px auto',
    width: 'calc(100% - 40px)',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignContent: 'stretch',
    alignItems: 'flex-start',
    padding: '20px',
    
  },

  image: {
    order: '1',
    flex: '1 0 60%',
    alignSelf: 'flex-start'
  },

  text: {
    order: '2',
    flex: '1 0 40%',
    alignSelf: 'flex-start',
  },
  timeLine: {
    margin: '0px 12px',
    
  },
  commentHeader: {
    display: 'flex',
  },
  postUsername: {
    display: 'flex',
    margin:'0',
    padding:'0 8px',
  },
  location : {
    display: 'flex',
  },
  commentWrapper : {
    overflowY :'scroll',
    height: '300px',

  },
  comment : {
    display: 'flex',
    justifyContent: 'space-between',
    wordBreak: 'break-word',
  },
  username : {
    fontWeight: 'bold',
  },
  spanText: {
    fontWeight: 'normal',
  },
  commentLike : {
    display: 'flex',
    alignItems: 'center',
    margin: '0 12px',
    width:'17px',
    height:'auto'
    
  },
  
   hashtag : {
   textDecorationLine: 'none'
 },
  commentFooter : {
    margin: '8px 12px',
    display:'flex',
    justifyContent: 'space-between',
    alignSelf:'flex-center'
  },
  

 
};