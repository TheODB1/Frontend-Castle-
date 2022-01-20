const Contact = () => {
  return (
    <form>
      <h2>You can contact us sent us a message ✉️</h2>
      <form
        name="contact"
        method="POST"
        data-netlify-recaptcha="true"
        data-netlify="true"
      >
        <div>
          <label htmlFor="name">Name :</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name here"
          />
        </div>{" "}
        <br />
        <div>
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email here"
          />
        </div>
        <div>
          <label htmlFor="message" className="msgText">
            Message :
          </label>
          <br />
          <textarea name="message" id="message" cols="50" rows="10"></textarea>
        </div>
        <div data-netlify-recaptcha="true"></div>
        <div>
          {" "}
          <br />
          <button type="submit" className="formButton">
            Send
          </button>
        </div>
      </form>
    </form>
  );
};

export default Contact;
