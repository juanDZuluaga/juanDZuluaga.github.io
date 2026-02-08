"use client";
import { useState } from "react";
import Swal from "sweetalert2"
import emailjs, { send } from "@emailjs/browser";

function FormContactMe() {
    const [formContactMe, setFormContactMe] = useState(null);

    const sendEmail = async (e) => {
    e.preventDefault();

    const formData = {
        name: e.target.first_name.value,
        company: e.target.company.value,
        phone: e.target.phone.value,
        email: e.target.email.value,
        message: e.target.message.value
    };

    try {
        const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
        });

        if (response.ok) {
        Swal.fire("¡Enviado!", "Mensaje enviado correctamente 🚀", "success");
        e.target.reset();
        } else {
        Swal.fire("Error", "No se pudo enviar el mensaje ❌", "error");
        }
    } catch (error) {
        console.error(error);
        Swal.fire("Error", "No se pudo enviar el mensaje ❌", "error");
    }
};

    return (
            <div id="contactame" className="mx-auto lg:px-20 mb-15">
                <h2 className="text-4xl col-span-2 text-center mt-10 lg:mb-20 mb-12">
                    <strong className="text-gray-50 dark:text-zinc-900 p-1 bg-amber-500 rounded">
                    CONTACTARME
                    </strong>
                </h2>
                {/* Contenedor responsive principal */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                    <div className="text-center md:text-left">
                        <div className="m-2 floating-container  lg:mt-25 mt-0">
                            <a href="https://www.linkedin.com/in/juan-david-zuluaga-49045b252/" className="inline-flex items-center justify-center p-1.5 bg-amber-500 rounded-4xl hover:bg-amber-400 transition" target="_blank" rel="noopener noreferrer">
                                <svg className="w-13 h-13 text-zinc-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clipRule="evenodd" />
                                    <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                                </svg>
                                <span className="ml-2 text-zinc-900"><strong>Linkeding</strong></span>
                            </a>
                            <a href="https://wa.me/3002965927" className="inline-flex items-center justify-center p-1.5 bg-amber-500 rounded-4xl hover:bg-amber-400 transition m-2" target="_blank" rel="noopener noreferrer">
                                <svg className="w-13 h-13 text-zinc-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill="currentColor" fillRule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" clipRule="evenodd"/>
                                    <path fill="currentColor" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"/>
                                </svg>
                                <span className="ml-2 text-zinc-900"><strong>Whatsapp</strong></span>
                            </a>
                            <a href="mailto:jdzuluaga0511@gmail.com?subject=Consulta%20desde%20tu%20sitio&body=Hola,%20quisiera%20más%20información." className="inline-flex items-center justify-center p-1.5 bg-amber-500 rounded-4xl hover:bg-amber-400 transition m-2" target="_blank" rel="noopener noreferrer">
                                <svg className="w-13 h-13  text-zinc-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeWidth="0.6" d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/>
                                </svg>
                                <span className="ml-2 text-zinc-900"><strong>Email</strong></span>
                            </a>
                            <a href="tel:3002965927" className="inline-flex items-center justify-center p-1.5 bg-amber-500 rounded-4xl hover:bg-amber-400 transition m-2">
                                <svg className="w-13 h-13 text-zinc-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.6" d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"/>
                                </svg>
                                <span className="ml-2 text-zinc-900"><strong>Teléfono</strong></span>
                            </a>
                        </div>
                        <p className="text-lg  text-shadow text-center md:mb-20">
                            <strong>
                                Por favor, complete el formulario de esta sección para contactarme.  
                                Si lo prefiere, comuníquese conmigo, a través de mis redes sociales, de lunes a viernes, en Whatsapp de 7:00 a. m. a 8:00 p. m. (hora del este).
                            </strong>
                        </p>
                    </div>
                    <div className="lg:mt-0 mt-10">
                        <form className="w-full space-y-6" onSubmit={sendEmail} >
                            <div className="grid gap-6 mb-6 grid-cols-1 md:grid-cols-2">
                                <div className="md:col-span-2">
                                    <label className="block mb-2 text-sm font-medium">
                                        Nombre completo
                                    </label>
                                    <input name="first_name"  type="text" id="first_name" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-amber-700" placeholder="Ejm. Juan Felipe Restrepo" required />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium">
                                        Compañía o empresa
                                    </label>
                                    <input name="company" type="text" id="company" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white  dark:focus:ring-blue-500 dark:focus:border-amber-700" placeholder="Ejm. Flowbite" required />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium">
                                        Número del contacto
                                    </label>
                                    <input name="phone" type="tel" id="phone" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-amber-700" placeholder="Ejm. 30045678565 'o' (ind. ciudad) + 2753434" required />
                                </div>
                            </div>
                            <div className="mb-6">
                                <label className="block mb-2 text-sm font-medium">
                                    Email address
                                </label>
                                <input name="email" type="email" id="email" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-amber-700" placeholder="juanfelipe.doe@company.com" required/>
                            </div>
                            <div className="mb-6">
                                <label className="block mb-2 text-sm font-medium">
                                    Mensaje
                                </label>
                                <textarea name="message" id="message" className="w-full min-h-[150px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-amber-700" placeholder="Escribe la información con la cual me quieres contactar" required/>
                            </div>
                            <div className="col-span-2 text-center">
                                <button type="submit" className="text-white bg-zinc-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-amber-500 dark:hover:bg-amber-400 dark:focus:ring-amber-700">
                                    <span className="flex items-center justify-center gap-2 text-zinc-900">
                                        <svg className="w-6 h-6 text-zinc-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/>
                                        </svg>
                                        Enviar Mensaje
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    );
}

export default FormContactMe;