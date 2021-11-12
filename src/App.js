import './App.css';
import React, {useState} from "react"

function App() {
    const [inputData, setInputData] = useState({firstName: "", lastName: ""})
    const [contactsData, setContactsData] = useState([])
    
    function handleChange(event) {
     const {name, value} = event.target
      setInputData(prevInputData => {
        return {
          ...prevInputData,
          [name]: value
        }
      })
    }
    
    // function handleSubmit(event) {
    //   const contactsData = [];
    //   contactsData.push(firstName, lastName)
      
    // }

    console.log(inputData)
    
    return (
        <>
            <form> {/*onSubmit={handleSubmit}>*/}
                <input 
                    placeholder="First Name"
                    name="firstName" 
                    value={inputData.firstName}
                    onChange={handleChange}
                />
                <input 
                    placeholder="Last Name"
                    name="lastName" 
                    value={inputData.lastName}
                    onChange={handleChange}
                />
                <br />
                <button>Add contact</button>
            </form>
            {/*{contacts}*/}
        </>
    )
}

export default App