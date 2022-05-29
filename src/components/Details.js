import React , {useState,useRef} from 'react';
import { useGlobalContext } from '../context';
import {Link,useNavigate,Navigate} from 'react-router-dom';
import ModalComponent from './Modal';
import Navbar from './Navbar';

export default function Details(){
    const {userName,changeUserName,password,changePassword} = useGlobalContext();
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    // all the references.
    const siteNameRef = useRef(null);
    const adharNoRef = useRef(null);
    const fullNameRef = useRef(null);
    const DOBRef = useRef(null);
    const fatherNameRef = useRef(null);
    const addressRef = useRef(null);
    const mobileRef = useRef(null);
    const offeredSalaryRef = useRef(null);
    const HRARef = useRef(null);
    const designationRef = useRef(null);
    const DOJRef = useRef(null);
    const adharFrontRef = useRef(null);
    const adharBackRef = useRef(null);
    const DPRef = useRef(null);
    const form11Ref = useRef(null);
    const form2Ref = useRef(null);
    const form1Ref = useRef(null);
    const nominationFormRef = useRef(null);
    const ACNORef = useRef(null);
    const bankNameRef = useRef(null);
    const IFSCRef = useRef(null);
    const passbookRef = useRef(null);
    const railwayIdRef = useRef(null);
    const genderRef = useRef(null);
    const qualificationRef = useRef(null);

    // handle functions.
    const handleLogout = ()=>{
          changeUserName('');
          changePassword('');
          localStorage.setItem('userName','');
          navigate('/login');
    }
    const handleSubmit = (e)=>{
            e.preventDefault();
            console.log('submitted');
            console.log(passbookRef.current.value);
            console.log(genderRef.current.value);
            console.log(fullNameRef.current.value);
            console.log(mobileRef.current.value);
            setShow(true);
    }
    if(!localStorage.getItem('userName')) 
      return <Navigate to='/login' replace/>
    return (
        <div>
            <Navbar {...{userName,handleLogout}}/>
            <section className='wrapper details'>
                <div className='container'>
                    <div className='col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 col-xl-8 offset-xl-2 text-center'>
                        <form className='rounded bg-dark shadow p-5' onSubmit={handleSubmit}>
                             <h3 className='text-white fw-bolder fs-4 mb-4'>Details requirement for appointment letter</h3>
                             <hr className='bg-white'/>

                            {/* site name */}
                            <div>
                                <div className='text-white' align='left'>Site Name <span className='color-red'>*</span> </div>
                                <select ref={siteNameRef} defaultValue='' className="form-select bg-dark text-white mb-3" aria-label="Default select example" required>
                                        <option value=''>Select Site Name</option>
                                        <option value="kolkata">Kolkata</option>
                                        <option value="delhi">Delhi</option>
                                        <option value="bangalore">Bangalore</option>
                                </select>
                            </div>

                            {/* adhar no */}
                             <div className='form-floating mb-3'>
                                <input ref={adharNoRef} type='number' 
                                        className='form-control bg-dark color-white' id='floatingAdhar' placeholder='Adhar No' required></input>
                                <label htmlFor='floatingAdhar' className='color-white'>
                                    Adhar No 
                                    <span className='color-red'>*</span>
                                </label>
                            </div>

                            {/* full name */}
                            <div className='form-floating mb-3'>
                                <input ref={fullNameRef} type='text' 
                                        className='form-control bg-dark color-white' id='floatingFullName' placeholder='Full Name' required></input>
                                <label htmlFor='floatingFullName' className='color-white'>
                                    Full Name
                                    <span className='color-red'>*</span>
                                </label>
                            </div>

                            {/* DOB */}
                            <div className='form-floating mb-3'>
                                <input ref={DOBRef} type='date' 
                                        className='form-control bg-dark color-white' id='floatingDOB' placeholder='Date Of Birth' required></input>
                                <label htmlFor='floatingDOB' className='color-white'>
                                    Date Of Birth
                                    <span className='color-red'>*</span>
                                </label>
                            </div>

                            {/* Father's Name */}
                            <div className='form-floating mb-3'>
                                <input  ref={fatherNameRef} type='text' 
                                        className='form-control bg-dark color-white' id='floatingFatherName' placeholder="Father's Name" required></input>
                                <label htmlFor='floatingFatherName' className='color-white'>
                                    Father's Name
                                    <span className='color-red'>*</span>
                                </label>
                            </div>

                            {/* address */}
                            <div className='form-floating mb-3'>
                                <input  ref={addressRef} type='text' 
                                        className='form-control bg-dark color-white' id='floatingAddress' placeholder="Address" required></input>
                                <label htmlFor='floatingAddress' className='color-white'>
                                    Address
                                    <span className='color-red'>*</span>
                                </label>
                            </div>
                            
                            {/* mobile number */}
                            <div className='form-floating mb-3'>
                                <input  ref={mobileRef} type='number' 
                                        className='form-control bg-dark color-white' id='floatingMobile' placeholder="Mobile Number" required></input>
                                <label htmlFor='floatingMobile' className='color-white'>
                                    Mobile Number
                                    <span className='color-red'>*</span>
                                </label>
                            </div>

                            {/* offered salary */}
                            <div className='form-floating mb-3'>
                                <input  ref={offeredSalaryRef} type='text' 
                                        className='form-control bg-dark color-white' id='floatingOfferedSalary' placeholder="Offered Salary" required></input>
                                <label htmlFor='floatingOfferedSalary' className='color-white'>
                                    Offered Salary
                                    <span className='color-red'>*</span>
                                </label>
                            </div>

                            {/* HRA */}
                            <div className='form-floating mb-3'>
                                <input  ref={HRARef} type='text' 
                                        className='form-control bg-dark color-white' id='floatingHRA' placeholder="HRA" required></input>
                                <label htmlFor='floatingHRA' className='color-white'>
                                    HRA
                                    <span className='color-red'>*</span>
                                </label>
                            </div>

                            {/* designation */}
                            <div>
                                <div className='text-white' align='left'>Designation <span className='color-red'>*</span> </div>
                                <select ref={designationRef} defaultValue='' className="form-select bg-dark text-white mb-3" aria-label="Default select example" required>
                                        <option value=''>Select Designation</option>
                                        <option value="frontend">Frontend developer</option>
                                        <option value="backend">Backend Developer</option>
                                        <option value="fullstack">Fullstack Developer</option>
                                </select>
                            </div>
                            
                            {/* DOJ */}
                            <div className='form-floating mb-3'>
                                <input ref={DOJRef} type='date' 
                                        className='form-control bg-dark color-white' id='floatingDOJ' placeholder="Date Of Joining" required></input>
                                <label htmlFor='floatingDOJ' className='color-white'>
                                    Date Of Joining
                                    <span className='color-red'>*</span>
                                </label>
                            </div>

                            {/* adhat card front */}
                            <div className="form-group text-white mb-3" align='left'>
                                <label htmlFor="adharFrontFile">Adhar Card front<span className='color-red'>*</span></label>
                                <br></br>
                                <input ref={adharFrontRef} type="file" required className="form-control-file" id="adharFrontFile"/>
                            </div>

                            {/* adhar card back */}
                            <div className="form-group text-white mb-3" align='left'>
                                <label htmlFor="adharBackFile">Adhar Card Back<span className='color-red'>*</span></label>
                                <br></br>
                                <input ref={adharBackRef} type="file" required className="form-control-file" id="adharBackFile"/>
                            </div>

                            {/* display picture */}
                            <div className="form-group text-white mb-3" align='left'>
                                <label htmlFor="uploadPhotoFile">Upload Photo<span className='color-red'>*</span></label>
                                <br></br>
                                <input ref={DPRef} type="file" required className="form-control-file" id="uploadPhotoFile"/>
                            </div>

                            {/* form 11 */}
                            <div className="form-group text-white mb-3" align='left'>
                                <label htmlFor="form11File">Upload form 11<span className='color-red'>*</span></label>
                                <br></br>
                                <input ref={form11Ref} type="file" required className="form-control-file" id="form11File"/>
                            </div>

                            {/* form 2 */}
                            <div className="form-group text-white mb-3" align='left'>
                                <label htmlFor="form2File">Upload form 2<span className='color-red'>*</span></label>
                                <br></br>
                                <input ref={form2Ref} type="file" required className="form-control-file" id="form2File"/>
                            </div>

                            {/* form 1 */}
                            <div className="form-group text-white mb-3" align='left'>
                                <label htmlFor="form1File">Upload form 1 under ESI<span className='color-red'>*</span></label>
                                <br></br>
                                <input ref={form1Ref} type="file" required className="form-control-file" id="form1File"/>
                            </div>

                            {/* nomination form */}
                            <div className="form-group text-white mb-3" align='left'>
                                <label htmlFor="nominationFormFile">Form of nomination for unpaid wages<span className='color-red'>*</span></label>
                                <br></br>
                                <input ref={nominationFormRef} type="file" required className="form-control-file" id="nominationFormFile"/>
                            </div>


                            {/* bank account number */}
                            <div className='form-floating mb-3'>
                                <input ref={ACNORef} type='number' 
                                        className='form-control bg-dark color-white' id='floatingACNO' placeholder="Bank A/C No" required></input>
                                <label htmlFor='floatingACNO' className='color-white'>
                                    Bank A/C No
                                    <span className='color-red'>*</span>
                                </label>
                            </div>

                            {/* bank name */}
                            <div className='form-floating mb-3'>
                                <input ref={bankNameRef} type='text' 
                                        className='form-control bg-dark color-white' id='floatingBankName' placeholder="Bank Name" required></input>
                                <label htmlFor='floatingBankName' className='color-white'>
                                    Bank Name
                                    <span className='color-red'>*</span>
                                </label>
                            </div>

                            {/* ifsc code. */}
                            <div className='form-floating mb-3'>
                                <input ref={IFSCRef} type='text' 
                                        className='form-control bg-dark color-white' id='floatingIFSCCode' placeholder="IFSC Code" required></input>
                                <label htmlFor='floatingIFSCCode' className='color-white'>
                                    IFSC Code
                                    <span className='color-red'>*</span>
                                </label>
                            </div>

                            {/* passbook */}
                            <div className="form-group text-white mb-3" align='left'>
                                <label htmlFor="passbookFile">Upload Soft Copy Of Passbook<span className='color-red'>*</span></label>
                                <br></br>
                                <input ref={passbookRef} type="file" required className="form-control-file" id="passbookFile"/>
                            </div>

                            {/* railway id */}
                            <div className='form-floating mb-3'>
                                <input ref={railwayIdRef} type='text' 
                                        className='form-control bg-dark color-white' id='floatingRailwayId' placeholder="Railway Id" required></input>
                                <label htmlFor='floatingRailwayId' className='color-white'>
                                    Railway ID
                                    <span className='color-red'>*</span>
                                </label>
                            </div>

                            {/* gender */}
                            <div>
                                <div className='text-white' align='left'>Gender <span className='color-red'>*</span> </div>
                                <select ref={genderRef} defaultValue='' className="form-select bg-dark text-white mb-3" aria-label="Default select example" required>
                                        <option value=''>Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                </select>
                            </div>
                            
                            {/* qualification */}
                            <div>
                                <div className='text-white' align='left'>Qualification <span className='color-red'>*</span> </div>
                                <select ref={qualificationRef} defaultValue='' className="form-select bg-dark text-white mb-3" aria-label="Default select example" required>
                                        <option value=''>Select Qualification</option>
                                        <option value="b.tech">Bachelor Of Technology</option>
                                        <option value="m.tech">Masters of Technology</option>
                                </select>
                            </div>
                            <button className='btn btn-primary'>Submit</button>
                            <ModalComponent {...{show,setShow}}/>

                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}