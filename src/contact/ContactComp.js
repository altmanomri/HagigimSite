import './Contact.css';
import emailjs from 'emailjs-com';
import strings from '../utils/strings/strings';

function ContactComp(){

    function sendEmail(e){
        e.preventDefault();

    emailjs.sendForm('gmail', 'template_tkhjgsn', e.target, 'user_RKIAK9MXUJNeqaDToWphX')
      .then((result) => {
          console.log(result.text);
          alert(strings.messageAlertForMail)
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    }

    return(
        <div className="contactDiv">
            <h2 className="topHeaderText">צור קשר</h2>
            <form className="contactForm" onSubmit={sendEmail}>
                <label className="headerText">שם</label>
                <input className="detailStyle" type="text" name="name" placeholder="השם שלך..."/><br/>
                <label  className="headerText" >כתובת מייל</label>
                <input className="detailStyle" type="text" name="email" placeholder="כתובת המייל שלך..."/><br/>
                <label  className="headerText" >נושא</label>
                <input className="detailStyle" type="text" name="subject" placeholder="נושא המייל..."/><br/>
                <label  className="headerText">הודעה</label>
                <textarea className="detailMStyle" type="text" name="message" rows="4" /><br/>
                <div className="btnDiv">

                <input className="btn"  type="submit" value="send" className="submit"/>
                </div>
            </form>
        </div>
    )
}
export default ContactComp;