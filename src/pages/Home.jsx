import header from '../components/header'
import footer from '../components/footer'
import ImageList from '../components/ImageList'
import Descriptions from '../components/Descriptions'
import Imageitem from '../components/Imageitem'

const home = ()=>{
     return(
       <div className="mainLayout">
         <header className="layoutheader"/>
         <div className="layoutContent">
           <ImageList images={Imageitem}/>  
           <Descriptions />
         </div>
         <footer className="layoutfooter"/>
       </div>
     )

}

export default Home