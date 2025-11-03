import Student from '../components/Student.jsx'
import StateHandling from '../components/StateHandling.jsx'
import ImageManipulation from '../components/ImageManipulation.jsx'

function App() {

const student=[{
  pic:`https://avatars.githubusercontent.com/u/104955330?v=4`,
  name : "Siddhant Rastogi",
  roll:"182",
  branch:"CSE AIML",
  section:"B",
  college:"ABES Engineering College"
},
{pic:`https://avatars.githubusercontent.com/u/104955330?v=4`,
  name : "Shaurya Sharma",
  roll:"172",
  branch:"CSE AIML",
  section:"B",
  college:"ABES Engineering College"
},
{pic:`https://avatars.githubusercontent.com/u/104955330?v=4`,
  name : "Yash Kumar",
  roll:"202",
  branch:"CSE AIML",
  section:"B",
  college:"ABES Engineering College"
},
{pic:`https://avatars.githubusercontent.com/u/104955330?v=4`,
  name : "Raman Grewal",
  roll:"182",
  branch:"CSE AIML",
  section:"B",
  college:"ABES Engineering College"
}]

  return (
    <div>
      {/* Method 1 <Student name = "Siddhant Rastogi" roll="182" branch="CSE AIML" section="B" college="ABES Engineering College"/> */}
      
      {/* Method 2 for single object <Student data={student} /> */}

      {/*Method 3 for array of objects{
        student.map((element, index)=>(
          <Student data={element} key={index}/>
        ))
      } */}

      {/* <StateHandling /> */}

      <ImageManipulation />

    </div>
  )
}

export default App
