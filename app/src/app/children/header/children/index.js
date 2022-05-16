 import styles from "../../../styles";
 import { Image2 } from "../../image";
 const CommentHeader = ({data}) => {
     const {owner, location} = data
     return (
        <div style={styles.commentHeader}>
        <div>
        <Image2 data={data} />
        </div>
        <div>
         <h4 style={styles.postUsername}>
         {owner.username} 
         </h4>
         <h4 style={styles.postUsername}>
         {location.name} 
         </h4>
        </div>
      </div>
     )
 }

 export default CommentHeader;