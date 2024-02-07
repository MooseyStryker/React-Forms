import { useState } from "react";


export default function ContactUs() {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")
    const [phoneType,setPhoneType] = useState("")
    const [comment,setComment] = useState("")

    const handleSubmition= (e) => {
        e.preventDefault();
        console.log(name, email, phone, phoneType, comment)

        const contactUsInfo = {
            name,
            email,
            phone,
            phoneType,
            comment,
            submittedOn: new Date()
        }
        console.log("🚀 ~ handleSubmition ~ contactUsInfo:", contactUsInfo)

        setName('')
        setEmail('')
        setPhone('')
        setPhoneType('')
        setComment('')


    }



    return (
        <div>
          <h2>Contact Us</h2>
          <form onSubmit={ handleSubmition }>
            <div>
              <label htmlFor='name'>Name:</label>
              <input id='name' type='text' onChange={ (e) => setName(e.target.value)} value={ name } />
            </div>
            <div>
              <label htmlFor='email'>Email:</label>
              <input id='email' type='text' onChange={ (e) => setEmail(e.target.value)} value={ email } />
            </div>
            <div>
              <label htmlFor='phone'>Phone:</label>
              <input id='phone' type='text' onChange={ (e) => setPhone(e.target.value)} value={ phone } />
            </div>

            <div>
                <select id ='phonetype' onChange ={ (e) => setPhoneType(e.target.value)}  value={ phoneType }>

                    <option>-- Please Choose One--</option>
                    <option value={"home"}>home</option>
                    <option value={"work"}>work</option>
                    <option value={"mobile"}>mobile</option>
                </select>
            </div>

            <div>
                <label
                htmlFor="comments"
                >Comment:</label>

                <textarea id="comments" onChange ={ (e) => setComment(e.target.value)} value={ comment } >

                </textarea>
            </div>
            <button>Submit</button>
          </form>
        </div>
      );
}
