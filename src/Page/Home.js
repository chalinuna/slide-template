import React, { useState } from "react";
import '../Page/css/Home.css'
import { TypingMultiline } from 'react-kr-typing-anim';
import Button from 'react-bootstrap/Button';
import MyNavbar from "../Component/myNavbar/MyNavbar";


function Home() {    

    const [show,setShow] = useState(false)

    const str1='안녕하세요, 노력하는 개발자'
    const str2=`CHALI NUNA`
    const str3=` 입니다.` 

    return(
        
        <div id="home" className="HomeTop">     
         
        
        <div class="bubble b1"></div>
        <div class="bubble b2"></div>
        <div class="bubble b3"></div>
        <div class="bubble b4"></div>
        <div class="bubble b5"></div>
        <div class="bubble b6"></div>
        <div class="bubble b7"></div>     
          
           <TypingMultiline
           className="typing-1"
           ContainerTag="span"
           Tag="h2"
            strs={
              `${str1}`
            }
            
        />
          <div>
        <TypingMultiline
        className="typing-2"
        preDelay={3500}
           ContainerTag="span"
           Tag="h2"
            strs={
              `${str2}`
            }
            
        /> 
      
         <TypingMultiline
        className="typing-3"
        preDelay={4500}
           ContainerTag="span"
           Tag="h2"
            strs={
              `${str3}`
            }
            onDone={()=>setShow(true)}
            
        />
         </div>
            { show &&
        <div className="Link-area">
          <div className="my-link">
              <Button variant="primary" className="blog">블로그</Button>
            <Button variant="primary" className="blog">Github</Button>
            <Button variant="primary" className="blog">포트폴리오 소개</Button>
         </div>
        </div>
        }


            
        </div>
        
    )
}


export default Home;