 // var xmreq = new XMLHttpRequest();
    // xmreq.onreadystatechange = function()
    // {
    //     if (this.readyState == 4 && this.status == 200) 
    //     {
    //         document.write(this.responseText);
    //     }
    // };
    // xmreq.open("GET", "Test");
    // xmreq.send();  
   var homepage = document.querySelector('#Home') as HTMLDivElement;

   function LoadHome()
   {
      setTimeout(()=> {

         var xml = new XMLHttpRequest();
      
         xml.onreadystatechange = function()
         {
            if (this.readyState === 4 && this.status === 200) 
            {
               homepage.innerHTML = '';
               var json = JSON.parse(this.responseText);
               
               for (var i = 0; i < json.length; i++)
               {  
                  homepage.innerHTML += `
                  <div class='codecontainer'>
                     <div class='headone flex-column'>
                        <p class='m-0px'>Poster: <span id='postername'>${json[i].ownerName}</span></p>
                        <p class='m-0px'>${json[i].title}</p>
                        <textarea readonly>${json[i].codeContent}</textarea>
                     </div>
                     <div class='btncontainer'>
                        <button>Copy</button>
                     </div>
               </div>
                  `;
                  
               }
            }
         };
         
         xml.open("GET", "Gettop?want=1");
         xml.send();
      }, 555);

   }
   LoadHome();

   var publicpage = document.querySelector('#Public') as HTMLDivElement;
   function LoadPublic()
   {
      setTimeout(()=> {

         var xml = new XMLHttpRequest();
      
         xml.onreadystatechange = function()
         {
            if (this.readyState === 4 && this.status === 200) 
            {
               publicpage.innerHTML = '';
               var json = JSON.parse(this.responseText);
               
               for (var i = 0; i < json.length; i++)
               {  
                  publicpage.innerHTML += `
                  <div class='codecontainer'>
                     <div class='headone flex-column'>
                        <p class='m-0px'>Poster: <span id='postername'>${json[i].ownerName}</span></p>
                        <p class='m-0px'>${json[i].title}</p>
                        <textarea readonly>${json[i].codeContent}</textarea>
                     </div>
                     <div class='btncontainer'>
                        <button>Copy</button>
                     </div>
               </div>
                  `;
                  
               }
            }
         };
      
         xml.open("GET", "Gettop?want=2&un=" + localStorage.getItem('Username'));
         xml.send();
      }, 555);
   }
   LoadPublic();
   
   var privatepage = document.querySelector('#Private') as HTMLDivElement;
   function LoadPrivate()
   {
      setTimeout(()=> {

         var xml = new XMLHttpRequest();
      
         xml.onreadystatechange = function()
         {
            if (this.readyState === 4 && this.status === 200) 
            {
               privatepage.innerHTML = '';
               var json = JSON.parse(this.responseText);
               
               for (var i = 0; i < json.length; i++)
               {  
                  privatepage.innerHTML += `
                  <div class='codecontainer'>
                     <div class='headone flex-column'>
                        <p class='m-0px'>Poster: <span id='postername'>${json[i].ownerName}</span></p>
                        <p class='m-0px'>${json[i].title}</p>
                        <textarea readonly>${json[i].codeContent}</textarea>
                     </div>
                     <div class='btncontainer'>
                        <button>Copy</button>
                     </div>
               </div>
                  `;
                  
               }
            }
         };
         
         xml.open("GET", "Gettop?want=3&un=" + localStorage.getItem('Username'));
         xml.send();
      }, 555);

   }
   LoadPrivate();

   var publishpage = document.querySelector('#Publish') as HTMLDivElement;
   var signuppage = document.querySelector('#SignUP') as HTMLDivElement;
   var signinpage = document.querySelector('#SignIn') as HTMLDivElement;
   var passworderror = document.getElementById('passworderror');
   var emailerror = document.getElementById('emailerror');
   var usernameerror = document.getElementById('usernameerror');
   var signinerror = document.getElementById('signinerror');
   passworderror!.style.display = 'none';
   emailerror!.style.display = 'none';
   usernameerror!.style.display = 'none';
   signinerror!.style.display = 'none';
   var Emailexist = false;
   var Usernameexist = false;

   Navigate(0);

   function Navigate(index: number)
   {
      passworderror!.style.display = 'none';
      emailerror!.style.display = 'none';
      usernameerror!.style.display = 'none';
      signinerror!.style.display = 'none';

      BreakLine();

      switch(index)
      {
         case 0:
            homepage!.style.display = '';
            publicpage!.style.display = 'none';
            privatepage!.style.display = 'none';
            publishpage!.style.display = 'none';
            signuppage!.style.display = 'none';
            signinpage!.style.display = 'none';
            LoadHome();
            break;
         case 1:
            homepage!.style.display = 'none';
            publicpage!.style.display = '';
            privatepage!.style.display = 'none';
            publishpage!.style.display = 'none';
            signuppage!.style.display = 'none';
            signinpage!.style.display = 'none';
            LoadPublic();
            break;
         case 2:
            homepage!.style.display = 'none';
            publicpage!.style.display = 'none';
            privatepage!.style.display = '';
            publishpage!.style.display = 'none';
            signuppage!.style.display = 'none';
            signinpage!.style.display = 'none';
            LoadPrivate();
            break;
         case 3:
            homepage!.style.display = 'none';
            publicpage!.style.display = 'none';
            privatepage!.style.display = 'none';
            publishpage!.style.display = '';
            signuppage!.style.display = 'none';
            signinpage!.style.display = 'none';
            break;
         case 4:
            homepage!.style.display = 'none';
            publicpage!.style.display = 'none';
            privatepage!.style.display = 'none';
            publishpage!.style.display = 'none';
            signuppage!.style.display = '';
            signinpage!.style.display = 'none';
            break;
         case 5:
            homepage!.style.display = 'none';
            publicpage!.style.display = 'none';
            privatepage!.style.display = 'none';
            publishpage!.style.display = 'none';
            signuppage!.style.display = 'none';
            signinpage!.style.display = '';
            break;
      }
   }

   var signinform = document.getElementById('signinform');
   signinform?.addEventListener('submit', function (e) 
   {
      signinerror!.style.display = 'none';
      var xml = new XMLHttpRequest();
      xml.onreadystatechange = function()
      {
         if (this.readyState == 4 && this.status == 200)
         {
            if (this.responseText === 'true')
            {
               window.localStorage.setItem('Username', (signinform?.children[0] as HTMLInputElement).value);
               (signinform?.children[0] as HTMLInputElement).value = '';
               (signinform?.children[1] as HTMLInputElement).value = '';

               Navigate(0);
            }
            else
            {
               signinerror!.style.display = '';
            }
         }
      }

      var str = `un=${(signinform?.children[0] as HTMLInputElement).value}&ps=${(signinform?.children[1] as HTMLInputElement).value}`;

      xml.open('GET', 'SignIn?' + str);
      xml.send();

      e.preventDefault();
   });

   var signupform = document.getElementById('signupform');
   signupform?.addEventListener('submit', function (e) 
   {
      passworderror!.style.display = 'none';
      e.preventDefault();
      var xmreq = new XMLHttpRequest();
      var signupform = document.querySelectorAll('#signupform input');
      var str = '';
      
      if (Emailexist)
      {
         return;
      }

      if (Usernameexist)
      {
         return;
      }

      if ((signupform[4] as HTMLInputElement).value !== (signupform[5] as HTMLInputElement).value)
      {
         passworderror!.style.display = '';
         return;
      }

      for (var i = 0; i < signupform.length; i++)
      {
         var suf = signupform[i] as HTMLInputElement;
         if (suf.type !== 'submit' && !suf.placeholder.includes('Confirm'))
         {
            str += `${suf.placeholder}=${suf.value}` + (i !== signupform.length - 1 ? '&' : '');
         }

         if (suf.type !== 'submit')
         {
            suf.value = '';
         }
      }
      
      xmreq.open("GET", `SignUp?${str}`);
      xmreq.send();

      Navigate(5);
   });

   function CheckEmailExist(input: HTMLInputElement)
   {
      var xmreq = new XMLHttpRequest();
      xmreq.onreadystatechange = function()
      {
         if (this.readyState == 4 && this.status == 200) 
         {
            Emailexist = this.responseText === 'true';

            if (Emailexist)
            {
               emailerror!.style.display = '';
            }
            else
            {
               emailerror!.style.display = 'none';
            }
         }
      };
      xmreq.open("GET", "CheckEmail?Email=" + input.value);
      xmreq.send();  
   }

   function CheckUsernameExist(input: HTMLInputElement)
   {
      var xmreq = new XMLHttpRequest();
      xmreq.onreadystatechange = function()
      {
         if (this.readyState == 4 && this.status == 200) 
         {
            Usernameexist = this.responseText === 'true';

            if (Usernameexist)
            {
               usernameerror!.style.display = '';
            }
            else
            {
               usernameerror!.style.display = 'none';
            }
         }
      };
      xmreq.open("GET", "CheckUsername?un=" + input.value);
      xmreq.send();  
   }

   function Deletelc()
   {
      localStorage.setItem('Username', '');
      Navigate(0);
   }

   function BreakLine()
   {
      var localstorage = localStorage.getItem('Username');
      var container = document.querySelector('nav ul ');

      if (localstorage !== null && localstorage != '')
      {
        (container?.children[4] as HTMLLIElement).style.display = 'none';
        (container?.children[5] as HTMLLIElement).style.display = 'none';
        (container?.children[6] as HTMLLIElement).style.display = '';

        (container?.children[2] as HTMLLIElement).style.display = '';
        (container?.children[3] as HTMLLIElement).style.display = '';
      }
      else
      {
         (container?.children[4] as HTMLLIElement).style.display = '';
         (container?.children[5] as HTMLLIElement).style.display = '';
         
         (container?.children[6] as HTMLLIElement).style.display = 'none';

         (container?.children[2] as HTMLLIElement).style.display = 'none';
        (container?.children[3] as HTMLLIElement).style.display = 'none';
      }
   }
   
   var pubcontainer = document.querySelector('.pubcontainer');
   pubcontainer?.addEventListener('submit', function(e)
   {
      var xml = new XMLHttpRequest();
      var state = (pubcontainer?.children[2] as HTMLSelectElement).value;

      xml.open('GET', `AddCode?title=${(pubcontainer?.children[0] as HTMLInputElement).value}&code=${(pubcontainer?.children[1] as HTMLTextAreaElement).value}&public=${state === 'Public' ? '1' : '0'}&Username=` + localStorage.getItem('Username'));
      
      xml.send();

      (pubcontainer?.children[0] as HTMLInputElement).value = '';
      (pubcontainer?.children[1] as HTMLTextAreaElement).value = '';

      e.preventDefault();
      

      LoadHome();
   });