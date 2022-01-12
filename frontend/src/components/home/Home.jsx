import React from 'react'
import Main from '../template/Main'
import './Home.css'


export default props =>
    <Main icon="home" title="inicio" subtitle="Projeto React - Crud"> 
        <div className="display-4">Bem Vindo!</div>
        <hr/>
        <p className="mb-0">Sistema para cadastro desenvolvido em React</p>
    </Main>