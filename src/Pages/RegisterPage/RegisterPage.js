import styled from "styled-components";
import Logo from "../../components/Logo";
import {ThreeDots} from "react-loader-spinner";
import axios from "axios";
import { initialBackgroundColor, buttonsColor } from "../../constants/colors";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function RegisterPage ({url}){

    const [form, setForm] = useState({email: "", password: "", name: "", image: ""});
    const [disabled, setDisabled] = useState(false);
    const nav = useNavigate();

    function handleForm (e){
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function enterTrackIt (e){
        e.preventDefault ();
        setDisabled(true);
        axios.post(`${url}auth/sign-up`, form)
        .then(res => {
            console.log(res.data)
            nav("/")
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

                <input data-test="user-name-input"
                placeholder="nome"
                type="text"
                name="name"
                value={form.name}
                onChange={(e) => handleForm(e)}
                required
                disabled={disabled}
                />

                <input data-test="user-image-input"
                placeholder="foto"
                type="url"
                name="image"
                value={form.image}
                onChange={(e) => handleForm(e)}
                required
                disabled={disabled}
                />

                <button data-test="signup-btn" disabled={disabled}>
                    {disabled ? (
                        <ThreeDots 
                        color="#FFF"
                        height={13}
                        width={51}
                        />
                    ) : (
                        "Cadastrar"
                        )}
                    
                </button>
            </FormConatiner>

            <Link to={"/"}><LoginButton data-test="login-link" >
                Já tem conta? Faça login!
            </LoginButton></Link>

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
const LoginButton = styled.div`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: ${buttonsColor};
    position: absolute;
    left: 85px;
    top: 553px;
`