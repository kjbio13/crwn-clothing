import React from 'react';

//components
import Directory from '../../components/directory/directory.component';

//styles
// import "./homepage.styles.scss"

//styles-components
import { HomePageContainer } from './homepage.styles'


const HomePage = () => (
    <HomePageContainer>
        <Directory></Directory>
    </HomePageContainer>
)

export default HomePage;