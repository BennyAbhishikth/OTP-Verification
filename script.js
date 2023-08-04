
  
function sendOTP(){
    const email = document.getElementById('email');
    const otpverify = document.getElementsByClassName('otpverify')[0];

    let otp_val = Math.floor(Math.random()*10000);

    let emailbod = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Popup</title>
    
        <style>
          /* Google Fonts - Poppins */
          @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");
    
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: "Poppins", sans-serif;
          }
          section {
            position: fixed;
            height: 100%;
            width: 100%;
            background: #01423f;
          }
          button {
            font-size: 18px;
            font-weight: 400;
            color: #fff;
            padding: 14px 22px;
            border: none;
            
            background: teal;
            border-radius: 6px;
            cursor: pointer;
          }
          button:hover {
            background-color: #265df2;
          }
          button.show-modal,
          .modal-box {
            position: fixed;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
          }
          section.active .show-modal {
            display: none;
          }
          .overlay {
            position: fixed;
            height: 100%;
            width: 100%;
            background: rgba(0, 0, 0, 0.3);
            opacity: 0;
            pointer-events: none;
          }
          section.active .overlay {
            opacity: 1;
            pointer-events: auto;
          }
          .modal-box {
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 380px;
            width: 100%;
            padding: 30px 20px;
            border-radius: 24px;
            background-color: #fff;
            opacity: 0;
            pointer-events: none;
            transition: all 0.3s ease;
            transform: translate(-50%, -50%) scale(1.2);
          }
          section.active .modal-box {
            opacity: 1;
            pointer-events: auto;
            transform: translate(-50%, -50%) scale(1);
          }
          .modal-box i {
            font-size: 70px;
            color: #4070f4;
          }
          .modal-box h2 {
            margin-top: 20px;
            font-size: 25px;
            font-weight: 500;
            color: #333;
          }
          .modal-box h3 {
            font-size: 16px;
            font-weight: 400;
            color: #333;
            text-align: center;
          }
          .modal-box .buttons {
            margin-top: 25px;
          }
          .modal-box button {
            font-size: 14px;
            padding: 6px 12px;
            margin: 0 10px;
          }
    
      </style>
    
        <!-- Fontawesome CDN Link -->
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
        />
      </head>
      <body>
        <section>
          <button class="show-modal">VERIFY</button>
          <span class="overlay"></span>
    
          <div class="modal-box">
            <i class="fa-regular fa-circle-check"></i>
            <h2>Completed</h2>
            <h3>You have sucessfully Verified your email!! Thank You :)</h3>
    
            <div class="buttons">
              <button class="close-btn">Ok, Close</button>
              
            </div>
          </div>
        </section>
    
        <script>
          const section = document.querySelector("section"),
            overlay = document.querySelector(".overlay"),
            showBtn = document.querySelector(".show-modal"),
            closeBtn = document.querySelector(".close-btn");
    
          showBtn.addEventListener("click", () => section.classList.add("active"));
    
          overlay.addEventListener("click", () =>
            section.classList.remove("active")
          );
    
          closeBtn.addEventListener("click", () =>
            section.classList.remove("active")
          );
        </script>
      </body>
    </html>
    
    `;

    let emailbody = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="styles.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"/>
        <title>Benny Abhishikth</title>
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
        *{
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Poppins',sans-serif;
        }
        .container
        {
            position:absolute;
            left : 20%;
        }
        .outer{
          height: 80vh;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #f2f2f2;
        }
        #switch:checked ~ .outer{
          background: #092c3e;
          /* background: #f2f2f2; */
        }
        .content{
          margin-left:20%;
          margin-top:20%;
          display: flex;
          width: 60%;
          height: 50%;
          padding: 15px;
          background: #fff;
          border-radius: 12px;
          position: relative;
          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
        }
        #switch:checked ~ .outer .content{
          background: #092c3e;
          /* box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5); */
          box-shadow: 0 5px 10px rgba(0, 255, 200, 0.822);
        }
        .outer .toggle{
          position: absolute;
          width: 40px;
          height: 20px;
          border-radius: 20px;
          background: #092c3e;
          right: 15px;
          top: 13px;
          display: flex;
          align-items: center;
          cursor: pointer;
        }
        #switch:checked ~ .outer .toggle{
          background: #fff;
        }
        .outer .toggle .circle{
          margin-left: 3px;
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: #fff;
          transition: all 0.3s ease;
        }
        #switch:checked ~ .outer .circle{
          margin-left: 22px;
          background: #092c3e;
        }
        .image-box {
          height: 232px;
          width: 200px;
          border-radius: 12px;
          padding: 3px;
          background: #092c3e;
        }
        .image-box img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          border: 3px solid #fff;
          border-radius: 12px;
        }
        #switch:checked ~ .outer .image-box{
          box-shadow: 0 5px 10px rgba(255, 255, 255, 0.15);
          padding: 3px;
          background: rgba(0, 255, 200, 0.822);
        }
        #switch:checked ~ .outer .image-box img{
          border-color: transparent;
        }
        .content .details{
          width: 90%;
          position: relative;
          left : 5%;
          margin: 10px 0 20px 20px;
          color: #092c3e;
        }
        #switch:checked ~ .outer .details{
          transition: 0.1s;
          color: #fff;
        }
        .content .details .name{
          font-size: 23px;
          font-weight: 600;
        }
        .content .details .job{
          font-size: 18px;
          font-weight: 500;
        }
        .content .details p{
         font-size: 15px;
         margin-top: 6px;
        }
        .content button{
          display: block;
          margin-top: 16px;
          outline: none;
          border: none;
          font-size: 17px;
          padding: 6px 14px;
          border-radius: 6px;
          color: #fff;
          cursor: pointer;
          background: #092c3e;
          transition: all 0.3s ease;
        }
        .content button:hover{
          transform: scale(0.97);
        }
        #switch:checked ~ .outer button{
          background: #fff;
          color: #092c3e;
        }
        .media-icons{
          position: absolute;
          bottom: 16px;
          right: 15px;
          margin-top: 12px;
          justify-content: flex-end;
        }
        .media-icons i{
          display: inline-flex;
          margin: 0 4px;
          font-size: 16px;
          color: #092c3e;
          opacity: 0.7;
          cursor: pointer;
        }
        .media-icons i:hover{
          opacity: 1;
        }
        #switch:checked ~ .outer i{
          color: #fff;
          opacity: 1;
        }
        #switch{
          display: none;
        }
        </style>
    </head>
    <body>
        
    
        <div class="container">
            <input type="checkbox" id="switch">
           <div class="outer">
             <div class="content">
            
               
               <div class="details">
                 <div class="name" font-color="teal" >DCODER</div>
                 <div class="job">Benny Abhishikth Mamuduri</div>
                 <div class="buttons">
                   <p>Hi, Thank you for visiting :) here is your OTP to verify your email.Please do not share OTP with anyone.</p>
                   <a href="" style="text-decoration: none;"><button>${otp_val}</button></a>
                 </div>
               </div>
               <div class="media-icons">
                 <a href="https://leetcode.com/benny596/"  ><i class="fa fa-code"></i></a>
                 <a href="http://github.com/BennyAbhishikth"  ><i class="fab fa-github"></i></a>
                 <a href="http://linkedin.com/in/benny-abhishikth-mamuduri-b16419236"  ><i class="fab fa-linkedin-in"></i></a>
               </div>
             </div>
           </div>
          </div>
    
    </body>
    </html>
    `;

    

    Email.send({
        SecureToken : "35094fa3-9505-4c8c-b57f-130443f0caca",
        To : email.value,
        From : "bennyabhishikth333@gmail.com",
        Subject : "Hello Dcoder!",
        Body : emailbody
    }).then(
        
      message => {
        if(message === "OK"){
            alert("OTP sent to your email "+email.value);

            
            const otp_inp = document.getElementById('otp_inp');
            const otp_btn = document.getElementById('otp-btn');

            otp_btn.addEventListener('click',()=>{
                
                if(otp_inp.value == otp_val){
                    document.write(emailbod);
                }
                else{
                    alert("Invalid OTP");
                }
            })
        }
      }
    );

}