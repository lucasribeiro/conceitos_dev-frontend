import React, {useState, useEffect} from 'react';
import api from './services/api';

import './App.css';
import backgroundImage from './assets/background.jpeg';
import Header from './components/Header';



/**
 * Principais conceitos do React
 * Componete
 * Propriedades
 * Estado e Imutabilidade
 */

function App() {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('projects').then(response => {
            setProjects(response.data);
        });
    }, []);

    async function handleAddProject() {
        const response = await api.post('projects', {
            title: `Novo projeto ${Date.now()}`,
            owner: "Lucas Luis Ribeiro"
        });

        const project = response.data;

        setProjects([...projects, project]);

    }

    return (
        <>
        <Header title="Projects" />

        {/* <img width={300} src={backgroundImage} alt=""/> */}

        <ul>
            {projects.map(project => <li key={project.id}>{project.title}</li>)}
        </ul>
        <button type="button" onClick={handleAddProject}>Adicionar um projeto</button>
        <Header title="React JS">
            <ul>
                <li>Homepage</li>
                <li>Projects</li>
                <li>Login</li>
            </ul>        
        </Header>
        </>
        );
}

export default App;