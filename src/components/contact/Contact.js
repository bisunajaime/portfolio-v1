import { useState } from "react"

const Contact = () => {
    const [subject, setSubject] = useState("")
    const [body, setBody] = useState("")
    return (
        <section id="contact">
            <div className="label">
                <small>Have any projects?</small>
                <h1>Let's get in touch</h1>
            </div>
            <div className="form">
                <div className="links">
                </div>
                <div className="fields">
                    <label id="subject">Subject</label>
                    <input type="text" formEncType="text/plain" id="subject" name="subject" placeholder="Subject" onChange={e => setSubject(e.target.value)} />
                    <label id="message">Message</label>
                    <textarea rows="10" placeholder="Your message" id="message" onChange={e => setBody(e.target.value)} >

                    </textarea>
                    <a href={`mailto:bisunajaime@gmail.com?subject=${subject}&body=${body}`}>Send E-Mail</a>
                </div>
            </div>
        </section>
    )
}

export default Contact