import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import Map from './Map';

const Contact = () => {
  const [name, setName] = useState('');
  const [num, setNum] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = 'service_eotfa4j';
    const templateId ='template_90m6cu7';
    const publicKey ='v3BbwgBVX0fD8imVp';


    const templateParams ={
      from_name: name,
      from_email : email,
      from_num: num,
      to_name : 'Jalil',
      message : message,
  };


    emailjs
      .send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      )
      .then(
        (response) => {
          console.log("l'email a ete envoye avec succes",response);
          setName('');
          setNum('')
          setEmail('');
          setMessage('');
        })
      .catch
      ((error) => {
        console.error(error);
      });
  }
  return (

    
    <div class="bg">
      <div className="w-full h-full mt-48  ">
        <div className=" md:p-6 w-full min-h-screen justify-center items-center ">
          <div className="flex flex-col md:flex-row md:space-x-10 md:space-y-0 space-y-6 bg-cyan-700 w-full max-w-4xl p-6 rounded-xl shadow-lg text-white ">
            <div className="bg-white rounded-xl shadow-lg p-10 text-gray-600 md:w-full ">
              <form onSubmit={handleSubmit}  className="emailForm flex flex-col space-y-4" ref={form}>



                <input type='text' placeholder='Votre Nom et Prenom.' className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outine-none focus:ring-2 focus:ring-teal-300" value={name} onChange={(e) => setName(e.target.value)}/>
                <input type='text' placeholder='Votre Numero de télephone.' className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outine-none focus:ring-2 focus:ring-teal-300" value={num} onChange={(e) => setNum(e.target.value)}/>
                <input type='text' placeholder='Votre Email.' className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outine-none focus:ring-2 focus:ring-teal-300" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <textarea cols={30} rows={10} className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outine-none focus:ring-2 focus:ring-teal-300" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                <button type='submit' placeholder='Votre Message.' className=" inline-block self-end bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 hover:bg-teal-500">Envoyer</button>
              </form>
            </div>
            <div className="flex flex-col space-y-8 justify-evenly">
              <div>
                <h1 className="font-bold text-4xl md:tracking-wide">
                  Besoin d'un devis ?
                </h1>
                <p className="pt-2 text-cyan-100 text-sm">
                  N'hésitez pas à remplir le formulaire ci-dessous, un membre de
                  notre équipe sera à votre disposition pour vous répondre dans
                  un bref délais.
                </p>
              </div>
              <div className="flex flex-col space-y-6">
                <div className="inline-flex space-x-2 items-center">
                  <ion-icon
                    name="call"
                    class="text-teal-300 text-xl"
                  ></ion-icon>
                  <span>0524495555S</span>
                </div>
                <div className="inline-flex space-x-2 items-center">
                  <ion-icon
                    name="mail"
                    class="text-teal-300 text-xl"
                  ></ion-icon>
                  <span>lafontaine@yahoo.fr</span>
                </div>
                <div className="inline-flex space-x-2 items-center">
                  <ion-icon
                    name="location"
                    class="text-teal-300 text-xl"
                  ></ion-icon>
                  <span>
                    123 lotissement Masmoudi targa, Marrakech 40000
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact