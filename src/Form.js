

class Form extends React.Component {
    constructor(props){

        super(props)
        this.state={
            fname:"",
            lname:"",
            gender:"",
            addr:"",
            city:"",
            state:"",
            zip:"",
            phone:"",
            email:""

        }
    }

    changeFirstName =(e)=>{
        

        this.setState({
            fname: e.target.value,
        })


        
    }
    changeLasttName =(e)=>{

        this.setState({
            lname: e.target.value,
        })

    }
    changeGender =(e)=>{

        this.setState({
            gender: e.target.value,
        })

    }
    changeAddr =(e)=>{

        this.setState({
            addr: e.target.value,
        })

    }
    changeCity =(e)=>{
        this.setState({
            city: e.target.value,
        })

    }
    changeState =(e)=>{
        this.setState({
            state: e.target.value,
        })


    }
    changeZip =(e)=>{
        this.setState({
            zip: e.target.value,
        })


    }
    changeNumber =(e)=>{
        this.setState({
            phone: e.target.value,
        })


    }
    changeEmail =(e)=>{
        this.setState({
            email: e.target.value,
        })


    }



    submitAction=(e)=>{
        e.preventDefault();
        console.log(this.state.fname,
            this.state.lname,this.state.gender,
            this.state.addr,
            this.state.city,
            this.state.state,
            this.state.zip,this.state.phone,this.state.email);

        // Here we have to do axios .post
        // 1st we have to make all the values wrapped in object

        const obj= this.state;


        axios.post("https://reqres.in/api/users",obj).then((res)=>{
            console.log(res);
        })
        
    }

    render(){
        return(
            <>
                <form  className="form1" onSubmit={this.submitAction} method="POST">
                    <div className=" mb-3 d-grid">
                        <label   htmlFor="floatingInput">First Name</label>
                        <label   htmlFor="floatingInput">Last Name</label>
                        <input required onChange={this.changeFirstName} type="text"  pattern='[a-zA-Z]{1,20}' max="20" className="form-control" id="floatingInput"  />
                        
                        <input required onChange={this.changeLasttName}  type="text" pattern='[a-zA-Z]{1,20}' className="form-control" id="floatingInput"  />
                        
                    </div>

                    <select  onChange={this.changeGender} required className="form-select  mb-3 select_width" aria-label=".form-select-lg example">
                        <option value="" defaultValue>Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Others">Others</option>
                    </select>

                    <div className="col-12">
                        <label htmlFor="inputAddress" className="form-label">Address</label>
                        <input onChange={this.changeAddr}  type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                    </div>
                   
                    <div className="col-md-6 d-grid2">
                        <label htmlFor="inputCity" className="form-label"  >City</label>
                        <label htmlFor="inputState" className="form-label" >State</label>
                        <label htmlFor="inputZip"  className="form-label">Zip</label>



                        <input type="text" className="form-control" onChange={this.changeCity} id="inputCity" />                   
                        <select id="inputState" className="form-select" onChange={this.changeState} >
                        <option defaultValue>Choose...</option>
                        <option>Kerala</option>
                        <option>Tamil Nadu</option>
                        <option>Karnataka</option>
                        <option>Maharashtra</option>
                        </select>
                        <input type="text" className="form-control" id="inputZip" onChange={this.changeZip}/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="phoneno"  className="form-label">Phone Number</label>
                        <input required type="text" onChange={this.changeNumber}  pattern="[0-9]{10}" className="form-control" id="phonenum" name="phoneno" />
                        <div id="phoneHelp" className="form-text">Please enter 10 digit Number</div>
                    </div>
                    <div className="mb-3">
                        <label  htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input required type="text" onChange={this.changeEmail}  pattern="[a-zA-z0-9#!*$%]+@[a-zA-Z0-9]+\.[a-z]{2,4}$" className="form-control" id="exampleInputEmail1" name="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                  
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </>
            
            )
    }
}