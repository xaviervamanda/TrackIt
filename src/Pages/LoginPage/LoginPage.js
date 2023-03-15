import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { initialBackgroundColor, buttonsColor } from "../../constants/colors";
import axios from "axios";
import {ThreeDots} from "react-loader-spinner";
import Logo from "../../components/Logo";
import { MyContext } from "../../constants/MyContext";

export default function LoginPage ({url}){

    const [form, setForm] = useState({email: "", password: ""});
    const [disabled, setDisabled] = useState(false);
    const nav = useNavigate();
    const {setUserData} = useContext(MyContext);

    function handleForm (e){
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function enterTrackIt (e){
        e.preventDefault ();
        setDisabled(true);
        axios.post(`${url}auth/login`, form)
        .then(res => {
            setUserData(res.data)
            nav("/hoje")
        })
        .catch(error => {
            alert(error.response.data.message);
            setDisabled(false);
        })
    }


    return (
        <Container>
            <Logo />

            <FormConatiner onSubmit={(e) => enterTrackIt(e)}>
                <input data-test="email-input" 
                placeholder="email"
                type="email"
                name="email"
                value={form.email}
                onChange={(e) => handleForm(e)}
                required
                disabled={disabled}
                />
                
                <input data-test="password-input"
                placeholder="senha"
                type="password"
                name="password"
                value={form.password}
                onChange={(e) => handleForm(e)}
                required
                disabled={disabled}
                />

                <button data-test="login-btn" disabled={disabled}>
                    {disabled ? (
                        <ThreeDots 
                        color="#FFF"
                        height={13}
                        width={51}
                        />
                    ) : (
                        "Entrar"
                        )}
                    
                </button>
            </FormConatiner>

            <Link to={"/cadastro"}><RegisterButton data-test="signup-link">
                Não tem conta? Cadastre-se!
            </RegisterButton></Link>
        </Container>
    );
}

const Container = styled.div`
    width: 375px;
    height: 667px;
    background-color: ${initialBackgroundColor};
    position: relative;
`


const FormConatiner = styled.form`
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 36px;
    top: 279px;
    button {
        width: 303px;
        height: 45px; 
        font-size: 20.976px;
        line-height: 26px; 
    }
`

const RegisterButton = styled.div`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: ${buttonsColor};
    position: absolute;
    left: 74px;
    top: 451px;
`