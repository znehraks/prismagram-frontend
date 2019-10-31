import React, {useState} from "react";
import AuthPresenter from "./AuthPresenter"
import useInput from "../../Hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import { LOG_IN, CREATE_ACCOUNT, LOCAL_LOG_IN } from "./AuthQueries";
import { toast } from "react-toastify";

export default() => {
    const [action, setAction] = useState("logIn");
    const userName = useInput("");
    const firstName = useInput("");
    const password = useInput("");
    const lastName = useInput("");
    const secret = useInput("");
    const email = useInput("");
    const isLogin = useInput("");
    const [loginMutation] = useMutation(LOG_IN, {
        variables: {email: email.value, password: password.value}
    });
    const [createAccountMutation] = useMutation(CREATE_ACCOUNT, {
        variables: {
            email: email.value,
            userName: userName.value,
            password: password.value,
            firstName: firstName.value,
            lastName: lastName.value
        }
    });

    const [localLogInMutation] = useMutation(LOCAL_LOG_IN);

    const onSubmit = async(e) => {
        e.preventDefault();
        if(action === "logIn") {
            if(email.value !== ""){
                try{
                    const {data: {login: token}} = await loginMutation();
                    if(token === ""){
                        toast.error("Wrong password");
                    }else{
                        if(token !== "" && token !== undefined){
                            toast.success("Login Success");
                            localLogInMutation({variables: {token}});
                        }
                    }
                }catch{
                    console.log(e);
                    toast.error("You need to sign Up");
                    setTimeout(() => setAction("signUp"), 3000);
                }
            }else{
                toast.error("Email is required")
            }
        }else if(action === "signUp"){
            if(
                email.value !== "" &&
                userName.value !== "" &&
                firstName.value !== "" &&
                lastName.value !== ""
            ){
                try{
                    const {data: { createAccount }} = await createAccountMutation();                  
                      if(!createAccount){
                      toast.error("Can't create account");
                  }else{
                      toast.success("Account created! Log In now");
                      setTimeout(() => setAction("logIn"), 3000);
                  }
                }catch(e){
                    toast.error(e.message);
                }
            } else{
                toast.error("All field are required");
            }
        }
    };

    return (
    <AuthPresenter 
    setAction={setAction} 
    action={action} 
    userName={userName}
    isLogin={isLogin}
    password={password} 
    firstName={firstName} 
    lastName={lastName} 
    email={email}
    secret={secret}
    onSubmit={onSubmit }
    />
    );
};