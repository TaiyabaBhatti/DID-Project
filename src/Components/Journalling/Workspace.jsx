import React,{useState} from 'react'
import TextEditor from './TextEditor'
import journalHeaderBg from "../../assets/images/journalHeaderBg.png";
import Card from '../Common Components/Card';
import Notes from '../Common Components/Notes';
import Button from '../Common Components/Button';
import AllNotes from './AllNotes';
import PastPage from '../Common Components/PastPage';
import Wrapper from '../Common Components/Wrapper';



export default function Workspace() {

// const [isEditorMode,setMode] = useState(true);

// const viewEditor = () =>{
//   console.log("TextEditor")
// setMode(true)
// }

// const viewNotes = () =>{
// setMode(false);
//  console.log("View all notes")
// }

  return (
    <>   
          <img
          src={journalHeaderBg}
          alt=""
          className=" absolute object-cover top-0 -z-50 h-24 w-screen bg-no-repeat"
        />


        <Wrapper>
        <PastPage path={"/grounding-tool-library"}/>

<section className='mb-10  relative '>

 {/* Toggle buttons */}
            {/* <div className='flex flex-row gap-x-2'>
               <Button text={"Text Editor"} onclick={viewEditor} />
               <Button text={"View All Notes"} onclick={viewNotes} />
            </div> */}


{/* {isEditorMode? <TextEditor/>:<AllNotes/>} */}

<TextEditor/>
</section>

        </Wrapper>

 
    </>
 
  )
}
