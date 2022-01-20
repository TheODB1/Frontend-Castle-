const Contact = () => {
  return (
    <form style={{ display: "flex", justifyContent: "center",fontSize:"30px" }} ><br />
      <h1 style={{ fontSize:"30px" ,color:"brown"}}>You can contact us sent us a message ✉️</h1>
      <form
        name="contact"
        method="POST"
        data-netlify-recaptcha="true"
        data-netlify="true"
      >
        <div>
          <label style={{ color:"brown" }} htmlFor="name">Name :</label>
          <input
          style={{ fontSize:"25px" ,}}
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name here"
          />
        </div>{" "}
        <br />
        <div>
          <label style={{ color:"brown" }} htmlFor="email">Email :</label>
          <input
            style={{ fontSize:"25px" }}
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email here"
          />
        </div><br />
        <div>
          <label  style={{ color:"brown" }} htmlFor="message" className="msgText">
            Message :
          </label>
          <br />
          <textarea name="message" id="message" cols="50" rows="10"></textarea>
        </div>
        <div data-netlify-recaptcha="true"></div>
        <div>
          {" "}
          <br />
          <button style={{ color :" black", fontSize: "30px" }}   type="submit" className="formButton">
            Send
          </button>
        </div>
      </form>
    </form>
  );
};

export default Contact;
