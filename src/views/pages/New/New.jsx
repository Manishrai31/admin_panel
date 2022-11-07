import React from "react";
// import Sidebar from '..'
import Sidebar from '../../../components/Base/Sidebar/Sidebar';
import Topbar from '../../../components/Base/Topbar/Topbar'

import './new.scss';
const New=()=>{
    return (
        <div className="new">
            <Sidebar />
            <div className="newContainer">
                <Topbar/>
                <div className="top">
                    <h1>
                        Add New user
                    </h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img 
                            src="https://c4.wallpaperflare.com/wallpaper/410/818/534/harley-quinn-5k-suicide-squad-margot-robbie-wallpaper-preview.jpg" 
                            alt="" 
                        />
                    </div>
                    <div className="right">
                        <form action="">
                            <div className="formInput">
                                <label htmlFor="">Username</label>
                                <input type="text" placeholder="John Doe"/>
                            </div>
                            <div className="formInput">
                                <label htmlFor="">Name</label>
                                <input type="text" placeholder="John Doe"/>
                            </div>
                            <div className="formInput">
                                <label htmlFor="">Email</label>
                                <input type="email" placeholder="Johndoe@gmail.com"/>
                            </div>
                            <div className="formInput">
                                <label htmlFor="">Mobile</label>
                                <input type="text" placeholder="+91 8222 82 8123"/>
                            </div>
                            <div className="formInput">
                                <label htmlFor="">Password</label>
                                <input type="paswd" />
                            </div>
                            <div className="formInput">
                                <label htmlFor="">Address</label>
                                <input type="text" placeholder="DLF 1 Block A, Tower 29"/>
                            </div>
                            <button>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default New;