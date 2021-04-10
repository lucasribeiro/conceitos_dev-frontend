import React, {useState} from 'react';

import Header from './components/Header';


/**
 * Principais conceitos do React
 * Componete
 * Propriedades
 * Estado e Imutabilidade
 */

function App() {

    const [projects, setProjects] = useState(['Desenvolvimento de app', 'Frontend web']);

    function handleAddProject() {
        const project = `Novo projeto ${Date.now()}`;

        //projects.push(project);

        setProjects([...projects, project]);

        console.log(projects);
    }

    return (
        <>
        <Header title="Projects" />
        <ul>
            {projects.map(project => <li key={project}>{project}</li>)}
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