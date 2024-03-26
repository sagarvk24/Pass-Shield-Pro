import React, { useEffect, useRef, useState } from 'react';
import "./Manager.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
    const ref = useRef();
    const passwordRef = useRef();

    const [form, setForm] = useState({ site: "", username: "", password: "" });
    const [passArray, setPassArray] = useState([]);
    const [showPasswords, setShowPasswords] = useState(false);

    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        if (passwords) {
            setPassArray(JSON.parse(passwords));
        }
    }, []);





    const showPassword = () => {
        const passwordInput = passwordRef.current;
        const eyeIcon = ref.current;

        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            eyeIcon.src = "hidden.png";
        } else {
            passwordInput.type = "password";
            eyeIcon.src = "eye.png";
        }

        setShowPasswords(!showPasswords);
    };

    const copyPass = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            console.log('Text copied to clipboard:', text);
            toast('🦄 Password Copied!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            });
        } catch (error) {
            console.error('Unable to copy text to clipboard:', error);
        }
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const savePassword = () => {
        if (!form.site.trim() || !form.username.trim() || !form.password.trim()) {
            alert("Please Fill All The Fields.\nThanks!")
            return;
        }

        const updatedPassArray = [...passArray, { ...form, id: uuidv4() }];
        setPassArray(updatedPassArray);
        localStorage.setItem("passwords", JSON.stringify(updatedPassArray));
        setForm({ site: "", username: "", password: "" });
        toast('🦄 Password saved!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
        });
    }

    const deletePassword = (id) => {
        // Show confirmation popup
        const confirmDelete = window.confirm("Are you sure you want to delete this password?");

        if (confirmDelete) {
            console.log(`Deleting Passwords with id : `, id);

            // Filter out the password with the given id
            const updatedPassArray = passArray.filter(item => item.id !== id);

            // Update state and localStorage with the filtered array
            setPassArray(updatedPassArray);
            localStorage.setItem("passwords", JSON.stringify(updatedPassArray));
        }

        toast('🦄 Password deleted successfully!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
        });
    }

    // const deletePassword = (id) => {


    //     console.log(`Deleting Passwords with id : `, id)
    //     setPassArray(passArray.filter(item => item.id !== id))
    //     localStorage.setItem("passwords", JSON.stringify(passArray.filter(item => item.id !== id)));
    // }

    const editPassword = (id) => {
        console.log(`Editing Passwords with id : `, id)
        setForm(passArray.filter(item => item.id === id)[0])
        setPassArray(passArray.filter(item => item.id !== id))
    }
    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition="Bounce"
            />
            {/* Same as */}
            <ToastContainer />


            <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div></div>
            <div className="mycontainer boxmanager ">
                <div className="box-manager">
                    {/* <h1 className='text-4xl font-bold text-center'>
                            <span className='text-green-500 '>&lt;</span>
                            <span >PassShield</span>
                            <span className='text-green-500 '>Pro/&gt; </span> */}
                    {/* </h1> */}
                    <p className=' text-center '>Unlock Security, Simplify Life</p>
                    {/*  */}
                    <div className=' text-black flex flex-col p-4 gap-6 items-center'>
                        <input required value={form.site} name="site" onChange={handleChange} placeholder='Enter URL' className="rounded-full border border-blue-600 w-full p-3 py-1" type="text" id="" />
                        <div className="flex w-full gap-6 justify-between">
                            <input required value={form.username} name="username" onChange={handleChange} placeholder="Username" className="rounded-full border border-blue-600 w-full p-4 py-1" type="text" />
                            <div className="relative">
                                <span className='absolute right-[1px] mx-2 top-[3px] cursor-pointer' onClick={showPassword}>
                                    <img ref={ref} className=' p-1 ' width={30} src="eye.png" alt="See Password" />
                                </span>
                                <input ref={passwordRef} value={form.password} name="password" onChange={handleChange} placeholder='Enter Password' className="rounded-full border border-blue-600 w-full p-4 py-1" type="password" required />
                            </div>
                        </div>
                        <button onClick={savePassword} className='savebutton ring-white ring-1 flex w-fit justify-center items-center gap-2  rounded-full px-4 py-2 border border-b-teal-200 hover:bg-gray-600 hover:text-black'>
                            <lord-icon
        
                                src="https://cdn.lordicon.com/jgnvfzqg.json"
                                trigger="hover">
                            </lord-icon>
                            Save Password
                        </button>
                    </div>
                    <div className="passwords">
                        <h2 className='passwords-title'>Your Passwords</h2>
                        <div className="password-entry column-headings ">
                            <div className="column-heading">Site</div>
                            <div className="column-heading" id='usname'>Username</div>
                            <div className="column-heading">Password</div>
                            <div className="column-heading action">Actions</div>

                        </div>
                        {passArray.length === 0 && <div className="no-passwords">No Passwords to show</div>}
                        {passArray.map((item, index) => (
                            <div key={index} className="password-entry">
                                <div className="password-field">{item.site}</div>
                                <div className="password-field">{item.username}</div>
                                <div className="password-field">{showPasswords ? item.password : "******"}</div>
                                <div className="  justify-center gap-3 password-field  flex" >
                                    <img
                                        className="copy-icon"
                                        src="./copy.png"
                                        alt=""
                                        onClick={() => copyPass(item.password)}
                                    />
                                    <img src="./delete.gif" style={{ "cursor": "pointer" }}
                                        width={24}
                                        alt=""
                                        onClick={() => { deletePassword(item.id) }} />


                                    <img src="./edit.png"
                                        style={{ "cursor": "pointer" }}
                                        width={24}
                                        alt=""
                                        onClick={() => { editPassword(item.id) }} />
                                </div>
                            </div>
                        ))}
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Manager;
